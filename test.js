var n = 11;
   for(var i = 1; i <= n; i++){
      //每层空格数量为n减i，n为总层数，i是第几层

      for(var j = 1; j <=i; j++){
         
     }
     var cn = (1 + n)/2;
      //每层星星数量为[2*（i-）+1]个，
       for(var k =1 ; k <= 2*(i-1)+2; k++){
          
        }
       
        
      

        var num = k -1
        var blank = " "
        blank = blank.repeat(j)
        var star ="*"
        star = star.repeat(num)
        console.log(blank+star)
        
   }