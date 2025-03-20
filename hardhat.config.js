require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load environment variables from .env file

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL, // Use RPC URL from environment variables
      accounts: [process.env.PRIVATE_KEY], // Use private key from environment variables
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
