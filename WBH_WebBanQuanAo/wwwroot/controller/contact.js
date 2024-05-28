document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact_form').addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;
        const formData = new FormData(this);
        const name = document.getElementById('input_name').value.trim();
        const email = document.getElementById('input_email').value.trim();
        const phone = document.getElementById('input_phone').value.trim();
        const message = document.getElementById('input_message').value.trim();

        if (name === '') {
            isValid = false;
            Swal.fire({
                icon: 'warning',
                title: 'Tên không được để trống',
                position: 'topRight'
            });
        }

        if (email === '') {
            isValid = false;
            Swal.fire({
                icon: 'warning',
                title: 'Email không được để trống',
                position: 'topRight'
            });
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            isValid = false;
            Swal.fire({
                icon: 'warning',
                title: 'Email không hợp lệ',
                position: 'topRight'
            });
        }

        if (phone === '') {
            isValid = false;
            Swal.fire({
                icon: 'warning',
                title: 'Số điện thoại không được để trống',
                position: 'topRight'
            });
        }

        if (message === '') {
            isValid = false;
            Swal.fire({
                icon: 'warning',
                title: 'Vui lòng nhập ghi chú',
                position: 'topRight'
            });
        }

        if (!isValid) {
            event.preventDefault();
        }
        $.ajax({
            url: '/Contact/Contact',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                if (response.success) {
                    // Hiển thị cửa sổ thông báo SweetAlert2
                    Swal.fire({
                        icon: 'success',
                        title: 'Gửi thành công!',
                        text: 'Cảm ơn bạn đã liên hệ với chúng tôi.',
                        showConfirmButton: true,
                        allowOutsideClick: false, // Ngăn không cho người dùng click bên ngoài cửa sổ
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Tải lại trang sau khi người dùng click OK
                            location.reload();
                        }
                    });
                }
            },
            error: function () {
                // Xử lý lỗi nếu cần
            }
        });
    });
});
$(document).ready(function () {
    // Áp dụng Bootstrap Maxlength cho các trường input
    $('#input_name').maxlength();
    $('#input_email').maxlength();
    $('#input_phone').maxlength();
    $('#input_message').maxlength();
});