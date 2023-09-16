

async function main() {
    const cellboard = await ethers.getContractAt(
      "Icolour ",
      "0x199F5DF85C52a042B48aFB0C358972e4C50BA0b6"
    );
  
    await cellboard.setColors();
  
    const number = await cellboard.getColor(4, 3);
  
    console.log(Number(number));
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });