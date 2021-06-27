function DanhSachNhanVien() {
    this.arr = [];
    this.themNhanVien = function(nhanVien) {
        if(nhanVien !== null ){
            this.arr.push(nhanVien);
        };
    };
};

DanhSachNhanVien.prototype.timViTri = function(tkNV) {
    return this.arr.findIndex(function(item) {
        return tkNV === item.tknv;
    })
};

DanhSachNhanVien.prototype.xoaNhanVien = function(tkNV) {
    var viTri = this.timViTri(tkNV);
    if (viTri !== -1){
        this.arr.splice(viTri, 1);
    };
};

DanhSachNhanVien.prototype.suaNhanVien = function(tkNV, newNV) {
    var viTri = this.timViTri(tkNV);
    if (viTri !== -1){
        this.arr.splice(viTri, 1, newNV);
        console.log(this.arr.join())
    };
};