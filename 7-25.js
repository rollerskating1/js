const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,

});

let buf =[]



rl.on('line', (line) => {

    if (line.trim()=="") rl.close()

    buf.push(line)

})



rl.on('close', () => {

 
    let cnt = 0;
    var len = buf.length
    for(i=0;i<len;i++){
      if(buf[i].length>10){
var big = -1;
      }
    }

    if(big !=-1 ){
 while(buf[cnt] !='.' ){
     cnt++;
   }
   if(cnt <2){
     console.log("Momo... No one is for you ...")
   }
   if(cnt < 14 && cnt >=2 && cnt !=0){
     console.log(buf[1]+" is the only one for you...")
   }
   if(cnt >14 && cnt !=0){
     console.log(buf[1]+" and "+buf[13]+" are inviting you to dinner...")
   }
    }
});

