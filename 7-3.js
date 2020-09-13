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

    var  n = Number.parseInt(buf[0])
    var cn = (1 + n)/2;
    if(n>0 && n%2==1){
    for(var i = 1; i <= n; i++){
        for(var j = 1; j <= n-i-cn; j++){
       }
         for(var k = 1; k <= 2*(i-1)+1; k++){
          }
          for(var l = 1; l <=i-cn; l++){
          }
            for(var m =1 ; m <=1; m=2*(n-i)+2){
             }
  if(i<cn){
        var num = k -1
          var blank = "  "
          blank = blank.repeat(j)
          var star ="*"+" "
          star = star.repeat(num)
          var h = blank+star
          h = h.replace(/^\s./g,"");
          console.log("  "+h)
  }else{

      var num = m -1
      var blank = "  "
      blank = blank.repeat(l)
      var star ="*"+" "
      star = star.repeat(num)
      var h = blank+star
      h = h.replace(/^\s./g,"");
      console.log(h)
  }
     }
    }else{
console.log("请输入大于0的奇数")
    }

});

