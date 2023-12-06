//bai8.1
// Viết chương trình đếm và in ra số lượng các số nguyên chia hết cho 3 hoặc 7 nằm trong đoạn 1 đến 100
var dem=0;
var i=1;
while(i<=100){
    if((i%7==0)||(i%3==0)){
        dem=dem+1;
        document.write(i+" ; ");
    }
     i++;
}
document.write("<br>Tong cac so chia het cho 3 va 7 la:"+dem);

//bai8.2

//Viết chương trình nhập vào số nguyên n. Tính và in ra các tổng sau:
// S = 1 + 2 + 3+ ... + n
// Lưu ý: Sử dụng vòng lặp do...while để tính
// ----------------------------------------------------------------
var s = 0;
var n;

n = parseInt(prompt("Nhập số n: "));
document.write(n);
do{
    s = s + n;
    n--;

}while(n != 0);

document.write("Ket qua la: " + s);
