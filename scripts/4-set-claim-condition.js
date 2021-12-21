import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0xa1EF6d3ee6aDef070B81f25aaC679c6643eE8291",
);

/*
const bundleDrop = sdk.getBundleDropModule(
  "0x9631ec0491a60d500a10d61e08ac17d00823Ff39",
);
*/

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    });
    
    
    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})()