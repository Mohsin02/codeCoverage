fs = require('fs');
var m = JSON.parse(fs.readFileSync('coverage/coverage-final.json').toString());

 for (var key in m) {
      // console.log(key);
	   if(key.endsWith(".ts") && !key.endsWith("environment.ts")){
		   
	
	   }
	   else{
		   
		 delete m[key];  
	   }
    
   };
   
 var json = JSON.stringify(m);  

 var f= json.split("webpack:///").join(f);
	// console.log(f); 
	 fs.writeFile("coverage/coverage-final.json",f);
 
   