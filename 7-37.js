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
var arr = []

    var index = buf[0].split(" ");
    var index1 = buf[1].split(" ");
    arr.push(index)
    arr.push(index1)
    // if(arr[0][0] > arr[1][1]){
        // console.log("The winner is x: "+arr[0][0]+" + "+arr[1][1])
    // }
    console.log(arr[0][0])

});

