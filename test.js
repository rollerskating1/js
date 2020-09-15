var arr = ['2','2','.','2']
var len = arr.length;
var ernum = 0
for(var i =0;i<len ;i++){
    if(arr[i] == "."){
       ernum = 2;
       }
     }

     if(ernum != 2){
        for(var b = 0;b<len;b++){
            if(arr[b]==2){
    ernum +=1
    }  
        }
     }
     console.log(ernum)