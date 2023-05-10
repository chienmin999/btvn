//1 . Viết chương trình cho phép người dùng nhập vào một số và kiểm tra xem số đó có chia hết cho 3 hay không. Nếu có, hiển thị thông báo "Số này chia hết cho 3", ngược lại thì hiển thị thông báo "Số này không chia hết cho 3"
// var a;
// a = prompt("Nhập vào số a", "0");
// if (a % 3 == 0) {
//     console.log("Số này chia hết cho 3");
// } else {
//     console.log("Số này không chia hết cho 3");
// }

//2 . Viết chương trình cho phép người dùng nhập vào một số và kiểm tra xem số đó có phải số chẵn hay không. Nếu là số chẵn, hiển thị thông báo "Số này là số chẵn", ngược lại thì hiển thị thông báo "Số này là số lẻ"
// var a = 7;
// a = prompt("Nhập vào số a", "0");
// if (a % 2 == 0) {
//     console.log(a + " là số chẵn");
// } else {
//     console.log(a + " là số lẻ");
// }

//3 .Viết chương trình cho phép người dùng nhập vào một số và kiểm tra xem số đó có phải số dương hay không. Nếu là số dương, hiển thị thông báo "Số này là số dương", ngược lại thì hiển thị thông báo "Số này là số âm"
// var a;
// a = prompt("nhập số a", "0");
// var check =
//     a > 0
//         ? console.log(a + " là số dương")
//         : a < 0
//         ? console.log(a + " là số âm")
//         : console.log(a + " là số 0");

//4 .  Viết chương trình cho phép người dùng nhập vào một số và kiểm tra xem số đó có phải số nguyên tố hay không. Nếu là số nguyên tố, hiển thị thông báo "Số này là số nguyên tố", ngược lại thì hiển thị thông báo "Số này không phải số nguyên tố"
// var a;
// var count = 0;
// a = prompt("nhập số a", "0");
// for (var i = 1; i <= a; i++) {
//     a % i == 0 ? count++ : (count = count);
//     i++;
// }
// if (a == 0 || a == 1) {
//     console.log(" Số " + a);
// } else {
//     count <= 2
//         ? console.log(a + " là số nguyên tố")
//         : console.log(a + " không phải là số nguyên tố");
// }

//5 .  Viết chương trình cho phép người dùng nhập vào một giá trị và kiểm tra xem giá trị đó có nằm trong khoảng từ 0 đến 100 hay không. Nếu nằm trong khoảng này, hiển thị thông báo "Giá trị này nằm trong khoảng từ 0 đến 100", ngược lại thì hiển thị thông báo "Giá trị này không nằm trong khoảng từ 0 đến 100"
// var a;
// a = prompt("nhập số a", "0");
// var check;
// a >= 0 && a <= 100 ? (check = 1) : (check = 0);
// switch (check) {
//     case 1:
//         console.log("Giá trị này nằm trong khoảng từ 0 đến 100");
//         break;
//     case 0:
//         console.log("Giá trị này không nằm trong khoảng từ 0 đến 100");
//         break;
//     default:
//         console.log("Số vô định");
// }

//6 .  Viết chương trình cho phép người dùng nhập vào một giá trị và kiểm tra xem giá trị đó có phải là số điểm trung bình của một học sinh hay không. Nếu giá trị này lớn hơn hoặc bằng 8.0, hiển thị thông báo "Học sinh này đạt loại giỏi", nếu giá trị này lớn hơn hoặc bằng 6.5 và nhỏ hơn 8.0, hiển thị thông báo "Học sinh này đạt loại khá", nếu giá trị này lớn hơn hoặc bằng 5.0 và nhỏ hơn 6.5, hiển thị thông báo "Học sinh này đạt loại trung bình", ngược lại thì hiển thị thông báo "Học sinh này đạt loại yếu"
var a;
a = prompt("nhập số điểm", "0");
var check;
a >= 8
    ? console.log("Học sinh này đạt loại giỏi")
    : a <= 8 && a >= 6.5
    ? console.log("Học sinh này đạt loại khá")
    : a <= 6.5 && a >= 5
    ? console.log("Học sinh này đạt loại trung bình")
    : console.log("Học sinh này đạt loại yếu");
