import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xaDBA987955Eac146f1983062100046be46e632fA";

const EventModule = buildModule("EventModule", (m) => {


  const nftEvent = m.contract("Eventnft",[tokenAddress]);

  return { nftEvent };
});

export default EventModule;

/**
 * EventModule#Eventnft - 0xD40c754A4cfCfe784F63aF08e0C31bA517d848F7
 *  - https://sepolia-blockscout.lisk.com//address/0xD40c754A4cfCfe784F63aF08e0C31bA517d848F7#code
 */