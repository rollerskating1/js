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
            var b = buf[0].toString().split(" ")
            var n = b[1]
            var th = b[0]
            var daoarr = []
            var dada = []
            var cn = (n/2).toFixed()

            if(n<=100 && n>0 && n >0 &&n == parseInt(n)){
   //打印右边
           str = buf.slice(1,n+1).map(v=>{
                v = v.split('')
               return v
           })
          
           for(var i = str.length-1;i>=0;i--){
              daoarr.push(str[i])
           }
          
           for(var h = 0;h<daoarr.length;h++){
               for(var i = 0, j = n-1 ;i<cn-1,j>cn-1;i++,j--){
                daoarr[h][j] = daoarr[h][i]
           }
        }

//打印左边
           str1 = buf.slice(1,n+1).map(v=>{
            v = v.split('')
           return v
       })
           for(var i = str1.length-1;i>=0;i--){
            dada.push(str1[i])
         }
         for(var h = 0;h<daoarr.length;h++){
            for(var i = 0, j = n-1 ;i<cn-1,j>cn-1;i++,j--){
             daoarr[h][i] = dada[h][j]
        }
    }

    //原版
    str2 = buf.slice(1,n+1).map(v=>{
        v = v.split('')
       return v
   })
   


    //判断对比

    Array.prototype.equals = function (arr){
        if(!arr){
          return false;
        }
        if(this.length != arr.length) {
          return false;
        }
        for(let i=0,l=arr.length;i<l;i++){
          if(Array.isArray(this[i]) && Array.isArray(arr[i])){
            if(!this[i].equals(arr[i])){
              return false;
            }
          }else if(this[i] != arr[i]){
            return false;
          }
        }
        return true;
      }
if(str2.equals(dada))  {
   var isequals = 10
}  


//判断输出
    if(isequals == 10){
        console.log("bu yong dao le")
        console.log((str.join("\n").replace(/,/g,'').replace(/@/g,th)))
       }else{
        console.log((daoarr.join("\n").replace(/,/g,'').replace(/@/g,th)))
       }
            }
         
       
});

