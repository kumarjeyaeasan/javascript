// import * as fs from "fs";
// fs.copyFileSync("file1.txt", "file2.txt");
// import { copyFile, constants } from "fs";

// function callback(err) {
//   if (err) throw err;
//   console.log("source.txt was copied to destination.txt");
// }
// copyFile("file1.txt", "file2.txt", callback);
import superheroes from "superheroes";

const all = superheroes.all;
const randomHero = superheroes.random();
console.log(randomHero);
