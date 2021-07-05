// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";

contract Strategy {
    using SafeMath for uint;

    // The major version of the Spline protocol.
    uint8 public version;
    // The performance fee set by the strategist.
    uint16 public fee;
    // The name of the protocol providing the pool or vault.
    string public protocol;
    // The address of the token to deposit.
    address public depositToken;
    // The address of the token to withdraw.
    address public withdrawToken;
    // The ontract address of the vault.
    address public vault;
    // The case-sensitive name of the strategy.
    string public name;
    // The IPFS hash of the strategy's icon.
    string public imageHash;
    // The address of the contract strategist.
    address public strategist;
    // The address of the contract deployer.
    address public deployer;

    // The amount of value currently locked in the contract.
    uint public valueLocked;
    // The amount of value that has ever been locked in the contract.
    uint public valueLifetime;
    // The amount of fees that have been collected by the strategist.
    uint public fees;
    // The amount of deposits that have ever been added to the strategy.
    uint public deposits;

    // A numeric boolean that determines whether a function is currently executing.
    uint8 private _isPropagation;

    modifier restricted {
        require(msg.sender == strategist, "Only the strategist can call this function.");
        _;
    }

    modifier stopPropagation {
        require(_isPropagation == 0, "You must wait for a function that has already been called to execute.");
        _isPropagation = 1;
        _;
        _isPropagation = 0;
    }

    event Approve(uint timestamp);
    event Deposit(uint timestamp);
    event Withdraw(uint timestamp);

    constructor(uint8 _version, uint16 _fee, string memory _protocol, address _depositToken, address _withdrawToken, address payable _vault, string memory _name, string memory _imageHash, address _strategist) public {
        version = _version;
        fee = _fee;
        protocol = _protocol;
        depositToken = _depositToken;
        withdrawToken = _withdrawToken;
        vault = _vault;
        name = _name;
        imageHash = _imageHash;
        strategist = _strategist;
        _isPropagation = 0;
    }

    function approve() external payable stopPropagation {
        IERC20(depositToken).approve(address(this), 115792089237316195423570985008687907853269984665640564039457584007913129639935);
        emit Approve(block.timestamp);
    }

    function isApproved() external view returns(uint) {
        uint approved = IERC20(depositToken).allowance(msg.sender, address(this));
        if (approved > 0) return approved;
        else return 0;
    }

    function deposit(uint _amount) external payable stopPropagation {
        if (depositToken != 0x0000000000000000000000000000000000000000) {
            require(IERC20(depositToken).allowance(msg.sender, address(this)) >= _amount, "Approval is needed.");
        }
        (bool wasSuccessful, ) = vault.call{value: msg.value, gas: 5000}(
            abi.encodeWithSignature("deposit(uint256)", _amount * 1 ether)
        );
        require(wasSuccessful, "Deposit failed unexpectedly.");
        valueLocked += _amount * 1 ether;
        valueLifetime += _amount * 1 ether;
        deposits++;
        emit Deposit(block.timestamp);
    }

    function withdraw(uint _amount) external payable stopPropagation {
        (bool wasSuccessful, ) = vault.call{value: msg.value, gas: 5000}(
            abi.encodeWithSignature("withdraw(uint256)", _amount)
        );
        require(wasSuccessful, "Withdrawal failed unexpectedly.");
        valueLocked -= _amount;
        emit Withdraw(block.timestamp);
    }

    function changeFee(uint16 _fee) external restricted stopPropagation {
        require(fee > _fee, "Fee must be lower.");
        fee = _fee;
    }

    function changeStrategist(address _strategist) external restricted {
        strategist = _strategist;
    }

    // Getter Functions

    function getVersion() external view returns(uint8) {
        return version;
    }

    function getFee() external view returns(uint16) {
        return fee;
    }

    function getName() external view returns(string memory) {
        return name;
    }

    function getImageHash() external view returns(string memory) {
        return imageHash;
    }

    function getStrategist() external view returns(address) {
        return strategist;
    }
}