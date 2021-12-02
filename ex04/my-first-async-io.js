 const fs = require('fs')

 let str = fs.readFile(process.argv[2],(err,data)=>{
 	if(err){
 		console.log("there is an error")}
 	else{
 		console.log(data.toString().split("\n").length -1)
 	}
 })