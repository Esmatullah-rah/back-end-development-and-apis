// Starter file — add your code here
const fs = require("fs");
const fsPromises = require("fs/promises");

fs.readFile("assets/poem.txt", { encoding: "utf8" }, (err, data) => {
    console.log(data);
});

async function main() {
    const data = await fsPromises.readFile("assets/poem.txt", { encoding: "utf8" });
    console.log(data);
}

main();

fs.writeFileSync("assets/output.txt", "hello, freeCodeCamp!");