const validator = require("validator")

const writeAndAppend = require("./server.js")

writeAndAppend()

console.log(validator.isEmail("prathamesh@gmail.com"))
console.log(validator.isEmail("prathameshgmail.com"))


console.log(process.argv)
