const util = require("util");
const wait = util.promisify(setTimeout);

module.exports ={
    async process01(){
        try{
        console.log("process 01 started");
        throw new error("Process 01 failed");
        console.time("process 01 ended");
        await wait(5000);
        console.timeEnd("process 01 ended");
        console.log();
        return 'process01-value';
    }catch(error){
        console.error(error);
    }
},

    async process02(){
        try{
        console.log("process 02 started");
        console.time("Process 02 ended");
        await wait(3000);
        console.timeEnd("Process 02 ended");
        console.log();
        return 'process02-value';

    }catch(error){
        console.error(error);
    }
}
}
