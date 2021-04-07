require('dotenv').config();
const PancakeRouter01 = artifacts.require('PancakeRouter01');

module.exports = async function(deployer) {
  try {
    await deployer.deploy(
      PancakeRouter01,
      '0x38026FA07B66345dD5cd35021Dc39955e74DaC61' /* Replace your factory address at here */,
      process.env.WETH_CONTRACT_ADDRESS,
      {
        gas: 6721975,
        from: process.env.DEPLOYER_ADDRESS,
      }
    );
  } catch (err) {
    console.log(err);
  }
};
