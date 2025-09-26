import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config = {
  solidity: {
    version: "0.8.24",
    settings: { optimizer: { enabled: true, runs: 200 } },
  },
  networks: {
    didlab: {
      type: "http",
      url: process.env.RPC_URL || "",
      chainId: Number(process.env.CHAIN_ID),
    },
  },
};
export default config;

