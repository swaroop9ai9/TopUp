const Todo = artifacts.require("./Todo.sol");

// Usualling for a web application, we change the state of the database 
// like altering the structure or etc, 
// When ever we are deloying a smart contract we are actually changing the blockchain state. 
// Migration essentially does the same. 
// An abstraction that essentially deploys the smart contract to blockchain.
// Once we truffle migrate, this smart contract will be deployed in the blockchain, ganache
// It will cost some ether for this deployment, as one account will pay the gas fee inorder to deploy the smart contract. 
// Truffle by default will use the first account inorder to pay those fee's
module.exports = function(deployer) {
  deployer.deploy(Todo);
};
