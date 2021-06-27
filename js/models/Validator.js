function Validator() {
    // Validates input from user
    this.kiemTraRong = function(value, spanId, mess) {
        /** Falsy vs Truthy values
         * Falsy value = 0, '', "", ``, null, undefined, false, NaN
         * Truthy value = not Falsy values
         */
        // Check blank
        if (!value /**Trigger at false values */){
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = mess;
            return false;
        }
        getEle(spanId).style.display = 'none';
        getEle(spanId).innerHTML = '';
        return true;
    };
    this.kiemTraDoDaiKiTu = function(value, spanID, mess, min, max) {
        if (value.length >= min && value.length <= max) {
            getEle(spanID).style.display = 'none';
            getEle(spanID).innerHTML = '';
            return true;
        }

        getEle(spanID).style.display = 'block';
        getEle(spanID).innerHTML = mess;
        return false;
    };

    this.kiemTraChuoi = function(value, spanID, mess){
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +

        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +

        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"); // Use RegExp for validation

        if(pattern.test(value)) {
            getEle(spanID).style.display = 'none';
            getEle(spanID).innerHTML = '';
            return true;
        }
        getEle(spanID).style.display = 'block';
        getEle(spanID).innerHTML = mess;
        return false;
    };

    this.kiemTraEmail = function(email, spanID, mess) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //return re.test(String(email).toLowerCase());
        if(re.test(email)){
            getEle(spanID).style.display = 'none';
            getEle(spanID).innerHTML = '';
            return true;
        }
        getEle(spanID).style.display = 'block';
        getEle(spanID).innerHTML = mess;
        return false;
    };

    this.kiemTraPass = function(pass, spanID, mess) {
        var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"); // begin with string, 1 lower case, 1 upper case, 1 number, 1 special character, 4-10 letters
        if(pattern.test(pass)){
            getEle(spanID).style.display = 'none';
            getEle(spanID).innerHTML = '';
            return true;
        };
        getEle(spanID).style.display = 'block';
        getEle(spanID).innerHTML = mess;
        return false;
    };

    this.kiemTraNgay = function(date, spanID, mess) {
        var pattern = /(^(((0[1-9]|1[012])[-/.](0[1-9]|1[0-9]|2[0-8]))|((0[13578]|1[02])[-/.](29|30|31))|((0[4,6,9]|11)[-/.](29|30)))[-/.](19|[2-9][0-9])\d\d$)|(^02[-/.]29[-/.](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/; // mm/dd/yyyy
        if(pattern.test(date)){
            getEle(spanID).style.display = 'none';
            getEle(spanID).innerHTML = '';
            return true;
        };
        getEle(spanID).style.display = 'block';
        getEle(spanID).innerHTML = mess;
        return false;
    };

    this.kiemTraGiaTri = function(value, spanID, mess, min, max){
        if(value >= min && value <= max){
            getEle(spanID).style.display = 'none';
            getEle(spanID).innerHTML = '';
            return true;
        };
        getEle(spanID).style.display = 'block';
        getEle(spanID).innerHTML = mess;
        return false;
    };

    this.kiemTraChucVu = function(chucVu, spanID, mess){
        if(chucVu !== 'Chọn chức vụ'){
            getEle(spanID).style.display = 'none';
            getEle(spanID).innerHTML = '';
            return true;
        };
        getEle(spanID).style.display = 'block';
        getEle(spanID).innerHTML = mess;
        return false;
    };

};

