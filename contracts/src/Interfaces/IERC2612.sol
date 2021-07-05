// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IERC2612Standalone.sol";

// solhint-disable-next-line no-empty-blocks
interface IERC2612 is IERC2612Standalone, IERC20 {

}
