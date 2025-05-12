export let platformMiddle500x175List = [];

export function adjustGrassPlatform494x72Positions(platformMiddle500x175List) {
  return new Promise((resolve) => {
    for (let i = 0; i < platformMiddle500x175List.length; i++) {
      for (let j = i + 1; j < platformMiddle500x175List.length; j++) {
        if (
          platformMiddle500x175List[i].overlapsWith(
            platformMiddle500x175List[j]
          )
        ) {
          // console.log("overlaps platformMiddle500x175List");
          platformMiddle500x175List[
            j
          ].placePlatform500x175AwayFromPlatform500x175(
            platformMiddle500x175List[i]
          );
        }
      }
    }
    resolve();
  });
}

export async function checkIfPlatformsAdjusted() {
  for (let i = 0; i < 5; i++) {
    await ajustAllPlatforms(platformMiddle500x175List);
  }
}
