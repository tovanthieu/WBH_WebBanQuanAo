// Biến để lưu trạng thái trang đã được tải lần đầu tiên hay chưa
var isFirstLoad = true;

// Kiểm tra sự kiện load của trang
window.addEventListener('load', function () {
    // Nếu trang được tải lần đầu tiên
    if (isFirstLoad) {
        // Ẩn giao diện loading sau một khoảng thời gian trễ
        setTimeout(function () {
            document.getElementById('loading-spinner').style.display = 'none';
        }, 200); // 200ms thời gian trễ
        // Đặt biến isFirstLoad thành false để chỉ hiển thị giao diện loading một lần duy nhất
        isFirstLoad = false;
    }
});

// Xử lý sự kiện khi ấn vào nút trang chủ
document.getElementById('button-home').addEventListener('click', function () {
    // Nếu trang đã được tải lần đầu tiên
    if (!isFirstLoad) {
        // Hiển thị giao diện loading
        document.getElementById('loading-spinner').style.display = 'flex';
    }
});
