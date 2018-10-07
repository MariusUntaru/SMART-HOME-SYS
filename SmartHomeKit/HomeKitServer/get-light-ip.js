const debug = require('debug');
const YeelightSearch = require('yeelight-wifi');

const yeelightSearch = new YeelightSearch();
const log = debug('Yeelight-example');

yeelightSearch.on('found', (lightBulb) => {
	console.log(lightBulb.hostname)
});

setTimeout(() => {}, 1000);