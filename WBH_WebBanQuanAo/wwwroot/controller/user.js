/*document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn form submit thực sự

        // Giả sử kiểm tra đăng nhập thành công
        iziToast.success({
            title: 'Thành công',
            message: 'Bạn đã đăng nhập thành công!',
            position: 'topRight'
        });

        // Bạn có thể thêm logic đăng nhập thực sự ở đây, ví dụ gửi form qua AJAX

        // Nếu không sử dụng AJAX, có thể sử dụng: event.target.submit();
    });
});*/

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login_form').addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form

        const email = document.getElementById('input_email').value;
        const password = document.getElementById('input_password').value;

        // Giả sử đây là mật khẩu đúng để kiểm tra
        const correctPassword = '123456';

        if (password === correctPassword) {
            // Hiển thị thông báo thành công
            iziToast.success({
                title: 'Thành công',
                message: 'Bạn đã đăng nhập thành công!',
                position: 'topRight'
            });
        } else {
            // Hiển thị thông báo lỗi
            iziToast.warning({
                message: 'Sai mật khẩu, vui lòng thử lại.',
                position: 'topRight'
            });
        }

        // Thêm bất kỳ mã nào khác nếu cần, ví dụ reset form hoặc xử lý khác.
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('register_form').addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form

        const phone = document.getElementById('register_phone').value;
        const password = document.getElementById('register_password').value;
        const confirmPassword = document.getElementById('register_confirm_password').value;
        const firstname = document.getElementById('register_firstname').value;
        const lastname = document.getElementById('register_lastname').value;

        let warningMessage = 'Thông Báo:';

        // Điều kiện kiểm tra
        const isPhoneValid = /^\d{10}$/.test(phone); // Kiểm tra số điện thoại có đúng 10 chữ số
        const isPasswordValid = password.length >= 6; // Mật khẩu phải có ít nhất 6 ký tự
        const isConfirmPasswordValid = password === confirmPassword; // Mật khẩu và xác nhận mật khẩu phải trùng nhau
        const isFirstNameValid = firstname.trim() !== ''; // Họ không được bỏ trống
        const isLastNameValid = lastname.trim() !== ''; // Tên không được bỏ trống

        if (isPhoneValid && isPasswordValid && isConfirmPasswordValid && isFirstNameValid && isLastNameValid) {
            // Hiển thị thông báo thành công
            iziToast.success({
                message: 'Bạn đã đăng ký thành công!',
                position: 'topRight'
            });
        } else {
            // Hiển thị thông báo cảnh báo
            if (!isPhoneValid) {
                warningMessage += '<br> Số điện thoại không hợp lệ.';
            }
            if (!isPasswordValid) {
                warningMessage += '<br> Mật khẩu phải có ít nhất 6 ký tự.';
            }
            if (!isConfirmPasswordValid) {
                warningMessage += '<br> Mật khẩu và xác nhận mật khẩu không trùng nhau.';
            }
            if (!isFirstNameValid) {
                warningMessage += '<br> Họ không được bỏ trống.';
            }
            if (!isLastNameValid) {
                warningMessage += '<br> Tên không được bỏ trống.';
            }
            iziToast.warning({
                message: warningMessage,
                position: 'topRight'
            });
        }

        // Thêm bất kỳ mã nào khác nếu cần, ví dụ reset form hoặc xử lý khác.
    });
});
