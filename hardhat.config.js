require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: "./src/artifacs",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: "https://goerli.infura.io/v3/3fe57477a6a540c59de90851245b8d37",
      accounts: ["0x${0xF40584ebbd6Acef9B362ee3367F5347E9Bd9bB61}"],
    },
  },
};
