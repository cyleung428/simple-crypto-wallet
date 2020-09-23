// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract ApprovalContract {
    address payable public sender;
    address payable public receiver;
    address public constant approver = 0x99C768056a8a19674164d7De8BdFCA585270A43B;

    function deposit(address payable _receiver) external payable {
        require(msg.value > 0);
        sender = msg.sender;
        receiver = _receiver;
    }

    function viewApprover() external pure returns(address) {
        return(approver);
    }

    function approve() external {
        require(msg.sender == approver);
        receiver.transfer(address(this).balance);
    }
}