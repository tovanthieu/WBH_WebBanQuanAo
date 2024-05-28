document.addEventListener('DOMContentLoaded', function () {
    // Bắt sự kiện khi nhấn vào nút "Mua Hàng"
    document.querySelector('.btnBuy').addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của nút

        // Kiểm tra nếu không có sản phẩm trong giỏ hàng
        if (/* Kiểm tra điều kiện có sản phẩm trong giỏ hàng */) {
            // Hiển thị thông báo SweetAlert2
            Swal.fire({
                icon: 'warning',
                title: 'Bạn chưa chọn sản phẩm để mua hàng',
                showConfirmButton: false,
                timer: 2000 // Tự đóng sau 2 giây
            });
        } else {
            // Chuyển hướng đến trang mua hàng
            window.location.href = 'shoppingcart/checkout';
        }
    });
});