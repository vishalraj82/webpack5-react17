const path = require('path');

const
    appRoot = path.join(__dirname, '..'),
    publicRoot  = path.join(appRoot, 'public');

module.exports = {
    appRoot,
    publicRoot
}
