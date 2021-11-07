/*           module               */
console.log(module);


require('./text'); // Will be shown
require('./text'); // No effect
require('./text'); // No effect

const pathToTextModule = require.resolve('./text');
console.log('pathToTextModule', pathToTextModule)

delete require.cache[pathToTextModule];
require('./text'); // Will be shown

console.log('Module wrapper: ', require('module').wrapper);


/*           require               */
console.log('require.main', require.main)
console.log('require.extensions', require.extensions)
