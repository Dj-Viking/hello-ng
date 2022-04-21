import * as fs from "fs";
const db = JSON.parse(fs.readFileSync("./db.json", { encoding: "utf8" }));

console.log("db", db);
const tasks = []

for (let i = 0; i < 7; i++) {
  tasks.push({
    id: i,
    text: `something here ${Date.now()}`,
    day: i.toString(),
    reminder: true
  });
}
db.tasks = tasks;
console.log("db now", db);

fs.writeFile("./db.json", JSON.stringify(db, null, 2), {}, (err) => {
  if (err) throw err;
  console.log(`\x1b[32m successfully seeded ${tasks.length} tasks into db.json! \x1b[00m`)
  process.exit(0);
});