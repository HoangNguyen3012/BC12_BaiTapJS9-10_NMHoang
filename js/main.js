// Link to DanhSachNhanVien.js
var danhSachNhanVien = new DanhSachNhanVien();

// Link to Validator.js
var validator = new Validator();

// set up function
function getEle(id){
    return document.getElementById(id);
}

// Main operation for the list item
// `html syntax` for string template
var hienThiDanhSachNV = function(arr) {
    var content = '';
    arr.map(function(nv, index) { // map as a tool similar to for each loop
        /**
         * nv: as each object -> link to NhanVien.js
         * index: as the object index in an array
         */
        content += `
            <tr>
                <td>${nv.tknv}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.xepLoai}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal"
                    data-target="#myModal" onclick ="_suaNhanVien('${nv.tknv}')">Sửa</button>
                    <button class="btn btn-danger" onclick= "_xoaNhanVien('${nv.tknv}')">Xóa</button>
                </td>
            </tr>
            `
    });
    getEle('tableDanhSach').innerHTML = content;
};

// To create data that cannot be reset when refreshing the page
/** Save online data to Local storage
 * Change data to string type first
 *  */ 
var setLocalStorage = function() {
    localStorage.setItem('DSNV',JSON.stringify(danhSachNhanVien.arr));
}
/** Get data from Local storage
 * Change data to the right JSON type
 */
var getLocalStorage = function() {
    if(localStorage.getItem('DSNV')){
        danhSachNhanVien.arr = JSON.parse(localStorage.getItem('DSNV'));
        hienThiDanhSachNV(danhSachNhanVien.arr);
    }
    
}
/** Execute whenever the web is open
 * Retrieve all previous data from Local storage
 * Refreshing the page does not reset the data
 */
getLocalStorage();
// End of Local Storage

// Hide the Validator span
var xoaThongBao = function () {
    //Hide the spanID
    getEle('tbTKNV').innerHTML = '';
    getEle('tbTen').innerHTML = '';
    getEle('tbEmail').innerHTML = '';
    getEle('tbMatKhau').innerHTML = '';
    getEle('tbNgay').innerHTML = '';
    getEle('tbLuongCB').innerHTML = '';
    getEle('tbChucVu').innerHTML = '';
    getEle('tbGiolam').innerHTML = '';
};

var resetInput = function() {
    // Reset the input field
    // Used after adding an object
    getEle('tknv').value = '';
    getEle('name').value = '';
    getEle('email').value = '';
    getEle('password').value = '';
    getEle('datepicker').value = '';
    getEle('luongCB').value = '';
    getEle('chucvu').value = 'Chọn chức vụ';
    getEle('gioLam').value = '';

    getEle('searchName').value = ''; // reset filter input
}

// Input values function
function inputAndValidate() {
    // Input data
    var tknv = getEle('tknv').value;
    var tenNV = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngayLam = getEle('datepicker').value;
    var luongCoBan = getEle('luongCB').value;
    var chucVu = getEle('chucvu').value;
    var gioLam = getEle('gioLam').value;
    

    // Validate above input
    var isValid = true;

    isValid &= validator.kiemTraRong(tknv, 'tbTKNV', '(*) Tai Khoan NV ko dc rong') && validator.kiemTraDoDaiKiTu(tknv, 'tbTKNV', '(*) Vui long nhap tu 4 toi 6 ki so', 4, 6); // Tai Khoan NV Validator

    isValid &= validator.kiemTraRong(tenNV, 'tbTen', '(*) Ten NV khong dc rong') && validator.kiemTraChuoi(tenNV, 'tbTen', '(*) Nhap vao chuoi'); // Ten NV Validator

    isValid &= validator.kiemTraEmail(email, 'tbEmail', '(*) Vui long nhap dung email') && validator.kiemTraRong(email, 'tbEmail', '(*) Email ko duoc rong'); // Email Validator

    isValid &= validator.kiemTraRong(matKhau, 'tbMatKhau', '(*) Mat khau ko dc rong') && validator.kiemTraPass(matKhau, 'tbMatKhau', '(*) Mat khau gom 1 chu viet thuong, 1 chu viet hoa, 1 so, 1 ky tu dac biet') && validator.kiemTraDoDaiKiTu(matKhau, 'tbMatKhau', '(*) Mat khau tu 4 toi 10 ky tu', 4, 10); // Password Validator

    isValid &= validator.kiemTraNgay(ngayLam, 'tbNgay', '(*) Vui long nhap dung dinh dang mm/dd/yyyy') && validator.kiemTraRong(ngayLam, 'tbNgay', '(*) Ngay lam ko duoc rong'); // Ngay lam Validator

    isValid &= validator.kiemTraRong(luongCoBan, 'tbLuongCB', '(*) Luong co ban ko dc rong') && validator.kiemTraGiaTri(luongCoBan, 'tbLuongCB', '(*) Nhap dung muc luong', 1000000, 20000000 ); // Luong CB Validator

    isValid &= validator.kiemTraChucVu(chucVu, 'tbChucVu', '(*) Vui long chon chuc vu'); // Chuc vu Validator

    isValid &= validator.kiemTraGiaTri(gioLam, 'tbGiolam', '(*) Nhap dung gio lam tu 80 den 200', 80, 200) && validator.kiemTraRong(gioLam, 'tbGiolam', '(*) Gio lam ko dc rong')

    if(!isValid){
        return null;
    };
    return new NhanVien(tknv, tenNV, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam);
};

/** Edit an item in current array
 * By calling out the findindex function
 * From DanhSachNhanVien.js
 */
function _suaNhanVien(tkNV) {
    // Match values with object values
    getEle('tknv').value = danhSachNhanVien.arr[danhSachNhanVien.timViTri(tkNV)].tknv;
    getEle('name').value = danhSachNhanVien.arr[danhSachNhanVien.timViTri(tkNV)].hoTen;
    getEle('email').value = danhSachNhanVien.arr[danhSachNhanVien.timViTri(tkNV)].email;
    getEle('password').value = danhSachNhanVien.arr[danhSachNhanVien.timViTri(tkNV)].matKhau;
    getEle('datepicker').value = danhSachNhanVien.arr[danhSachNhanVien.timViTri(tkNV)].ngayLam;
    getEle('luongCB').value = danhSachNhanVien.arr[danhSachNhanVien.timViTri(tkNV)].luongCoBan;
    getEle('chucvu').value = danhSachNhanVien.arr[danhSachNhanVien.timViTri(tkNV)].chucVu;
    getEle('gioLam').value = danhSachNhanVien.arr[danhSachNhanVien.timViTri(tkNV)].gioLam;

    // Hide the spanID
    xoaThongBao();

    getEle('btnCapNhat').style.display = 'block'; // Show the Update button
    getEle('btnThemNV').style.display = 'none'; // Hide the Add button
};

/** Delete an item in current array
 * By calling out the delete function
 * From DanhSachNhanVien.js
 */

function _xoaNhanVien(maNV) {
    
    danhSachNhanVien.xoaNhanVien(maNV);
    hienThiDanhSachNV(danhSachNhanVien.arr);
    setLocalStorage();
    resetInput();
};
// End of Deleting function

// Open a submit box
getEle('btnThem').addEventListener('click', function() {
    getEle('btnCapNhat').style.display = 'none'; // Hide the Update button
    getEle('btnThemNV').style.display = 'block'; // Show the Add button

    // Hide the spanID and reset the input fields
    xoaThongBao();
    resetInput();
});

getEle('btnThemNV').addEventListener('click', function() {

    // Create new object, link to NhanVien.js
    var nhanVien = inputAndValidate();
    if(nhanVien == null) {
        return;
    }
    danhSachNhanVien.themNhanVien(nhanVien);


    hienThiDanhSachNV(danhSachNhanVien.arr);
    resetInput();
    setLocalStorage();
});

getEle('btnCapNhat').addEventListener('click', function () {
    // Create new object, link to NhanVien.js
    var nhanVien = inputAndValidate();
    if(nhanVien == null){
        return;
    }
    danhSachNhanVien.suaNhanVien(getEle('tknv').value,nhanVien);

    hienThiDanhSachNV(danhSachNhanVien.arr);
    resetInput();
    setLocalStorage();
});

////////// Search Rank /////////////////
function filterXepLoai() {
    // Filter danhSachNhanVien
    var filter = getEle('searchName').value.toUpperCase();

    var xepLoaiFilter = [];
    for (var i = 0; i < danhSachNhanVien.arr.length; i++) {
        if (danhSachNhanVien.arr[i].xepLoai.toUpperCase().indexOf(filter) > -1) {
            xepLoaiFilter.push(danhSachNhanVien.arr[i]);
        };
        if(xepLoaiFilter.length !== 0){
            hienThiDanhSachNV(xepLoaiFilter);
        } else{
            hienThiDanhSachNV(danhSachNhanVien.arr);
        };

        
    };
};

// If user click on button
getEle('btnTimNV').addEventListener('click', function () {
    filterXepLoai();
    resetInput();
});
