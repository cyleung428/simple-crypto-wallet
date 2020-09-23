const ApprovalContract = artifacts.require("ApprovalContract");

contract('ApprovalContract',  accounts => {
    it('initiates contract', async function() {
        const contract = await ApprovalContract.deployed();
        const approver = await contract.approver.call();
        assert.equal(approver, "0x99C768056a8a19674164d7De8BdFCA585270A43B", "approvers don't match");
    })

    it('initiates contract', async function() {
        const contract = await ApprovalContract.deployed();
        await contract.deposit(accounts[0], {
            value: 1e+18,
            from: accounts[1]
        });
        const balance = await web3.eth.getBalance(contract.address);
        assert.equal(balance, 1e+18, "amount did not match");
    })
})