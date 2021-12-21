import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7a1F472492fc6C56133719Ec8c88abad15A175fF",
);

/*
const bundleDrop = sdk.getBundleDropModule(
  "0x9631ec0491a60d500a10d61e08ac17d00823Ff39",
);
*/
(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Leaf Village Headband",
        description: "This NFT will give you access to ZazuDAO!",
        image: readFileSync("scripts/assets/headband.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()