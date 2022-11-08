const fs = require("fs")

const writeAndAppend = function () {
  fs.writeFileSync("notepad.txt", "NodeJS") // use to create file
  fs.appendFileSync("notepad.txt", "\nJavascript")
}

module.exports = writeAndAppend
