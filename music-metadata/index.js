const index = require('music-metadata');
const util = require('util');

index.parseFile('music/Warriors Of The World United.mp3')
.then(metadata => {
    const data = util.inspect(metadata, { showHidden: false });
    console.log(data);
})
.catch(err => {
    console.error(err.message)
});
