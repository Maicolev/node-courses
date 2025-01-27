const fs = require('node:fs')

console.log('------ reading first file--------')

//normal
//const text =
fs.readFile('./file1.txt', 'utf8', (err, text) => {
    console.log(text)
})

console.log('------ Other tasks --------')

console.log('------ reading second file--------')
fs.readFile('./file2.txt', 'utf8', (err, text) => {
    console.log('Second text: ' + text)
})