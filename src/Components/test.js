let https;
try {
  https = require('https');
} catch (err) {
  console.log('https support is disabled!');
}