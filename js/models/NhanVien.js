function NhanVien(_tknv, _hoTen, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLam) {
    this.tknv = _tknv;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;

    switch (this.chucVu) {
        case 'Sếp':
            this.tongLuong = this.luongCoBan * 3;
            break;
        case 'Trưởng phòng':
            this.tongLuong = this.luongCoBan * 2;
            break;
        case 'Nhân viên':
            this.tongLuong = this.luongCoBan * 1;
            break;
        default:
            this.tongLuong = 'Khong co chuc vu';
    };

    if(this.gioLam < 160) {
        this.xepLoai = 'Nhân Viên Trung Bình';
    } else if(this.gioLam < 176) {
        this.xepLoai = 'Nhân Viên Khá';
    } else if(this.gioLam < 192) {
        this.xepLoai = 'Nhân Viên Giỏi';
    } else {
        this.xepLoai = 'Nhân Viên Xuất Sắc';
    }

}