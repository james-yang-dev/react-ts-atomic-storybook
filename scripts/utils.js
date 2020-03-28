const fs = require('fs')
const { ATOMIC_TYPE_MAPPER } = require('./createAtomicComponent/constants')

// get
const getArgv = name => {
  const key = `${name}=`
  const args = process.argv
    .filter(arg => arg.indexOf(key) > -1)
    .map(property => property.replace(key, ''))
  return args[0]
}
// to
const toCapitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
const toAtomicType = str => ATOMIC_TYPE_MAPPER[str.toUpperCase()]
// create - dir or file
const createDirectory = dirPath => !fs.existsSync(dirPath) && fs.mkdirSync(dirPath)
const createFile = (filePath, content) =>
  !fs.existsSync(filePath) && fs.writeFileSync(filePath, content)

module.exports = {
  getArgv,
  toCapitalize,
  toAtomicType,
  createDirectory,
  createFile
}
