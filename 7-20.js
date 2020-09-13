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

    //算法写在这里，用console.log()输出

    //需要读取命令行输入的话，使用buf变量
    var  N = Number(buf[0])
    var B = parseInt(N)
    var imin = Math.pow(2,31)
    imin = parseFloat(imin)
    if(N>=0 && N==B && N<=10){
        for(i=1;i<=N;i++){
     var C=buf[i];
     C = parseFloat(C)
     var D = parseInt(C)
     if(C < imin && C>=0 && C==D){
         if(C!=2147483647){for(var a=2;a<C;a++){
           var k = C%a;
            if(k == 0){break;}
            }
            if(C == 2){
              console.log("Yes")
        }else{
            if(!k == 0){
                console.log("Yes");
                }else{
                console.log("No");
                }
        }}else{
            console.log("Yes")
        }
        
          
     }else{

     }

    }
    }

});

