const util = require("util");
const wait = util.promisify(setTimeout);

module.exports ={
    async process01(){
        console.log("process 01 started");
        console.time("process 01 ended");
        await wait(5000);
        console.timeEnd("process 01 ended");
        console.log();
        return 'process01-value';
    },

    async process02(){
        console.log("process 02 started");
        console.time("Process 02 ended");
        await wait(3000);
        console.timeEnd("Process 02 ended");
        console.log();
        return 'process02-value';
    }
}