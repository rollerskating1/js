var arr = ["1","2","3","4","5"]
var arr2 = ["1","2","3","4","5"]
  for(var i = 0, j = 4 ;i<2,j>=3;i++,j--){
       arr[i] = arr2[j]
   arr[j] = arr2[i]
}

console.log(arr)