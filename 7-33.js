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
    var arr = buf.toString().split(" ");
     var num1 = Number(arr[0])
     var num2 = Number(arr[1])
if(num2 <= Math.pow(10,5)){

     if(num1==2){
var start = 702
     }
     if(num1==3){
        var start = 18278
     }
    if(num1==4){
    var start = 475254
      }
      if(num1==5){
      var start = 12356630
       }
         if(num1==6){
         var start = 321272406
           }
                                                        

//将10进制转26进制
var Convert26=function(num){
    var str="";
    while (num > 0){
        var m = num % 26;
        if (m == 0){
            m = 26;
        }
        str = String.fromCharCode(m + 64) + str;
        num = (num - m) / 26;
    }
    return str;
}


var result = start - num2 +1
console.log(Convert26(result).toLowerCase());
}
    
});

