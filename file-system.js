const fs = require("node:fs/promises");
const path = require("node:path");
//const pc = require('picocolors')

console.log("------ init process --------");
const folder = process.argv[2] ?? "./";

/** async function myFirstFunction() {
  const text = await resolveAfter5Seconds(6);
  console.log(text);
}

function resolveAfter5Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("value:" + x);
    }, 5000);
  });
}

myFirstFunction();
console.log("------ end process --------");

console.log("------ simple ls  --------");

fs.readdir(folder).then((files) => {
  files
    .forEach((file) => {
      const filePath = path.join(folder, file);
      fs.stat(filePath)
      console.log(file)
      //console.log(filePath);
    })
    .catch((err) => {
      if (err) {
        console.error("Error to read directory:", err);
        return;
      }
    });
});  **/


console.log("------ better ls  --------");

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(`Cannot read directory ${folder}`);
    process.exit(1);
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let fileStats
    try{
      fileStats = await fs.stat(filePath)
    } catch {
      console.error(`Cannot read file ${filePath}`)
      process.exit(1)
    }

    const isDirectory = fileStats.isDirectory()
    const fileType = isDirectory ? '+' : '-'
    const fileSize = fileStats.size
    const fileModified = fileStats.mtime

    return `${fileType} ${file.padEnd(15)} ${fileSize.toString().padStart(10)} ${fileModified.getDate()}/${fileModified.getMonth() + 1}/${fileModified.getFullYear()}`
  })

  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => console.log(fileInfo))

}



console.log(folder)
ls(folder)
