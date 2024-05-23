//const m1=require('module.ts');
//import {m1} from "./modules.js"
const {fruits,programming} = require('./modules');
const os =require('os');
const fs = require ('fs');

//Reading files
fs.readFile('./test.txt', (err,data) => {
    if (err) {
        console.log(err);
    } else  {
        //console.log(data.toString())
    }
});

const writesomething ='writing demo2';
// writing files
fs.writeFile('./testwrite.txt' ,writesomething,err=>{
    if(err) {
        console.log(err);
    } else {
        console.log('file written successfully')
    } 
});

//Delete the dir if it exist
/*if (!fs.existsSync('./assets')) {
    // directories
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('Folder created')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Folder deleted')
    });
} */

//delete file
if (fs.existsSync('./testwrite.txt')) {
    fs.unlink('./testwrite.txt', (err) =>{
        if(err) {
            console.log(err)
        }
    })
}


//Streams to read the files and write use pipes

fs.ReadStream









/*Reading the os information */
//console.log(os.platform(), os.homedir(), os.hostname());


/* Reading values from the module*/
//console.log(fruits);
//console.log(programming);