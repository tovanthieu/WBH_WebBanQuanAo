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

        const email = document.getElementById('register_email').value;
        const password = document.getElementById('register_password').value;
        const confirmPassword = document.getElementById('register_confirm_password').value;
        let warningMessage = 'Thông Báo:';
        // Giả sử các điều kiện kiểm tra
        const isEmailValid = email.includes('@'); // Kiểm tra đơn giản để xem email có chứa ký tự '@'
        const isPasswordValid = password.length >= 6; // Mật khẩu phải có ít nhất 6 ký tự
        const isConfirmPasswordValid = password === confirmPassword; // Mật khẩu và xác nhận mật khẩu phải trùng nhau

        if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            // Hiển thị thông báo thành công
            iziToast.success({
                  message: 'Bạn đã đăng ký thành công!',
                position: 'topRight'
            });
        } else {
            // Hiển thị thông báo cảnh báo
            if (!isEmailValid) {
                warningMessage += '<br> Email không hợp lệ.';
            }
            if (!isPasswordValid) {
                warningMessage += '<br> Mật khẩu phải có ít nhất 6 ký tự.';
            }
            if (!isConfirmPasswordValid) {
                warningMessage += '<br> Mật khẩu và xác nhận mật khẩu không trùng nhau.';
            }
            iziToast.warning({
                message: warningMessage,
                position: 'topRight'
            });
        }

        // Thêm bất kỳ mã nào khác nếu cần, ví dụ reset form hoặc xử lý khác.
    });
});