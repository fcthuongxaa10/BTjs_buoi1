/**
 * Tính diện tích chu vi hình chữ nhật
 * 
 * Khối 1:dữ liệu được cung cấp
 * Input
 * Chiều dài
 * Chiều rộng
 * Khối 2:Các bước xử lý 
 * B1: Khai báo biến và gán giá trị
 * B2: dienTich = chieuDai * chieuRong
 *     Chuvi    = (chieuDai + chieuRong) * 2 
 * Khối 3: kết quả cần đạt 
 * output
 * dienTich , chuVi
 */
//B1
var chieuDai = 2;
var chieuRong =3;
var dienTich = 0;
var chuVi    = 0;
//B2
dienTich = chieuDai * chieuRong;
chuVi    = (chieuDai + chieuRong) * 2;
console.log("Diện tích của hình chữ nhật là: " + dienTich + "cm \n" + "Chu vi hình chữ nhật là: " + chuVi+ "cm");      