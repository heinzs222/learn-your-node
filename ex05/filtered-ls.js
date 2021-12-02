const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2],(err,data)=>{
	if(err)
		console.log("there is an error")
	else{
		for(let i of data)
			if(path.extname(`${i}`).substring(1,path.extname(`${i}`).length)===process.argv[3]){
				console.log(i);
			}
	}
})