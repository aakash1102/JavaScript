const os = require('os');
const path = require('path');
const fs = require('fs');
const hello = require('./temp')
const EventEmitter = require('events');

console.log(os.version());
console.log(__dirname)
console.log(path.basename('public/web_developement_basics/NodeJSLearning/'));
fs.readFile('public/web_developement_basics/NodeJSLearning/text.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

fs.writeFile('public/web_developement_basics/NodeJSLearning/text2.txt','this new file auto created using fs.writefile', ()=>{
    console.log("file written")
})

hello();
hello();


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
