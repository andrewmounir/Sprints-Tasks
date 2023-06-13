const { readFileSync, writeFileSync } = require(`fs`);
const res = readFileSync(`./problem1.txt`, { encoding: `utf-8` });
const objRes = JSON.parse(res);

console.log(objRes);
objRes.height = "1 feet";
objRes.weight = "2 kgs";
objRes.name = "Fluffyy";
console.log(objRes.catFriends[0].activities, objRes.catFriends[1].activities);

console.log(
  "cat friends " + objRes.catFriends[0].name,
  objRes.catFriends[1].name
);

console.log(
  "total weight " + (objRes.catFriends[0].weight + objRes.catFriends[1].weight)
);
console.log(
  `total activites ` +
    (objRes.activities.length +
      objRes.catFriends[0].activities.length +
      objRes.catFriends[1].activities.length)
);

objRes.catFriends[0].activities.push(`sleep`, `meow`);
objRes.catFriends[1].activities.push(`sleep`, `meow`);
objRes.catFriends[0].furcolor = "red";

//to convert it back to json in case we want to to put it back to a new file
const objJson = JSON.stringify(res);

writeFileSync(`./problemAnswer.txt`, objJson);
