const { readFileSync, writeFileSync } = require('fs')
const first = 'test'
const second = 'new'

readFileSync('./content/subfolder/test.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
