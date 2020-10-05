  //将26进制转10进制
  var ConvertNum = function (str) {
    var n = 0;
    var s = str.match(/./g);//求出字符数组
    var j = 0;
    for (var i = str.length - 1, j = 1; i >= 0; i--, j *= 26) {
        var c = s[i].toUpperCase();
        if (c < 'A' || c > 'Z') {
            return 0;
        }
        n += (c.charCodeAt(0) - 64) * j;
    }
    return n;
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

//测试
var num = 703;
console.log(Convert26(num));

