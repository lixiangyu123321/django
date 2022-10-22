var sublimeText,type1;
sublimeText = "文本编辑器";
console.log(sublimeText);
document.write(sublimeText);
type1 = typeof(sublimeText);
type1 = typeof sublimeText;
var number1;
number1 = 126.12;
//number1.toString();
var result = parseInt(number1);//获得整数部分
console.log(result);
//parseFloat(),Number()
//从第一个字符开始判断，返回直到字符为非数字类型;
var input = prompt("请输入一个数据");
console.log(isNaN(input));
//&&逻辑与||逻辑或
function helloworld(){
    console.log("这是一个函数")；
}
helloworld();
var array = [];
var array2 = new Array();
array = [1,2,3];
array2[0] = "tom";
array[array.length];
var array_tostring = String(array);//将数组中的数据转化为字符串，并用逗号分开
var array2_Tostring = array2.join("");
//判断数组是否为空
//array.join("")
//array.concat(array1,array2)拼接数组不改变原数组
//array.slice(1,3)返回子数组
//array.splice(starti,n，n1,n2)删除从i开始的n个数组数据，并插入新值
//reverse颠倒数组
//sort排序
