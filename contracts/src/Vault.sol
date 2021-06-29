// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;

contract Vault {
    address public operator;
    uint8 public fee;

    uint private _isPropagation;

    uint public value;
    uint public fees;
    uint public deposits;

    modifier restricted {
        require(msg.sender == operator, "This action is limited to the contract operator.");
        _;
    }

    modifier stopPropagation {
        require(_isPropagation == 0, "You must wait for a function that has already been called to execute.");
        _isPropagation = 1;
        _;
        _isPropagation = 0;
    }

    event Deposit(uint value, uint timestamp);

    constructor(address _operator, uint8 _fee) {
        require(fee <= 100, "The fee must be less than or equal to 100%.");
        operator = _operator;
        fee = _fee;
        _isPropagation = 0;
    }

    function calculateFee(uint _value) internal view returns(uint) {
        return (_value / 1e18) * (fee * 1e16);
    }

    function deposit() external payable stopPropagation {
        (bool wasSuccessful, ) = operator.call{value: calculateFee(msg.value)}("");
        require(wasSuccessful, "Your fee has failed to process.");
        value += msg.value;
        fees += calculateFee(msg.value);
        deposits++;
        emit Deposit(msg.value, block.timestamp);
    }

    function getValue() external view returns(uint) {
        return value;
    }

    function getFees() external view returns(uint) {
        return fees;
    }

    function getDeposits() external view returns(uint) {
        return deposits;
    }

    function changeFee(uint8 _fee) external restricted {
        fee = _fee;
    }

    function changeOperator(address _operator) external restricted {
        operator = _operator;
    }
}