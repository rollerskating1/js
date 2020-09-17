const { verify } = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,

//   output: process.stdout,

});

let buf =[]



rl.on('line', (line) => {

    if (line.trim()=="") rl.close()

    //buf数组是命令行输入的信息

    buf.push(line)

})



rl.on('close', () => {
    var snum = Number(buf[0])
    var len = buf.length
    var endarr = len-1
    if(len%2==0){
        var cn = endarr/2
    }
    var arr = []
 for(var i = 0; i<len; i++){
     var arrcontent = buf[i].toString().split(" ");
     arr.push(arrcontent)
 }
  arr.forEach(function(yuansu,xiabiao) {
  for(var i = 0;i!=xiabiao;i++){
     if(arr[0]==0){

     }
  }
  });
});

