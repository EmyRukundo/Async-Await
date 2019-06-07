const util = require("util");

const wait = util.promisify(setTimeout);

module.exports = {
    async process01(){
        try{
            console.log("Process 01 started ");
            throw new error("Process 01 failed");
            console.time("Process 01 ended");
            await wait(5000);
            console.timeEnd("Process 01 ended");
            return 'process01-value';


        }catch(error){
            console.error(error);
        }
    }
}