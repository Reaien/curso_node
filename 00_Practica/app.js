const fs = require('fs')

const poema = fs.readFileSync('poema.txt', 'utf-8')

const poemaModified = poema.replace(/Amor/ig, 'Pene')

fs.writeFileSync('poema-created-copy.txt', poemaModified)