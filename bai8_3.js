
// bai8.3
// Viết chương trình tính tổng S = 1 /1! + 2 /2! + ….+ n / n! với n nguyên dương được nhập từ bàn phím.?
function giaiThua(n)
{
    var giaiThua 	= 1; 
    for(var i = 1; i <= n; i++) {
        giaiThua = giaiThua * i;
}
return giaiThua;
}

function tinhTong() {
    // khai báo biến
    var n 			=  document.getElementById('n');
    var result 		= document.getElementById('result');
    var sum = 0; // biến tổng ban đầu bằng 0

    // kiểm tra nếu là số thì tính tổng giai thừa
    if(!isNaN(n.value)) {
        for(var i = 1; i <= n.value; i++) {
            sum = sum + (i / giaiThua(i));
        }

        result.innerHTML = "Kết quả: " + sum;
    }else {
        result.innerHTML = "Hãy nhập một số nguyên dương";
    }
}