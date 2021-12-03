/**
 * Tính tổng 2 ký số
 * 
 * Khối 1:dữ liệu được cung cấp
 * Input
 * số có 2 chữ số
 * Khối 2:Các bước xử lý 
 * B1: Khai báo biến và gán giá trị
 * B2: hangDonVi = soBd % 10
 *     hangChuc  = soBd / 10
 *     tong      = hangDonVi + hangChuc
 * Khối 3: kết quả cần đạt 
 * output
 * tong
 */
//B1
var soBd = 50;
var tong = 0;
var hangDonVi = 0;
var hangChuc  = 0;
//B2
hangDonVi = soBd % 10;
hangChuc  = Math.floor(soBd / 10);
tong      = hangDonVi + hangChuc;
//B3
console.log("tổng của hàng đơn vị và hàng chục là: "+ tong);   