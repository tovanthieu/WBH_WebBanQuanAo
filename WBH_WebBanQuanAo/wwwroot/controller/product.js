function addToCart() {
    // Giả sử sản phẩm có sẵn trong kho
    const isAvailable = true;

    if (isAvailable) {
        // Hiển thị thông báo thêm vào giỏ hàng thành công
        iziToast.success({
            title: 'Thành công',
            message: 'Sản phẩm đã được thêm vào giỏ hàng!',
            position: 'topRight'
        });
    } else {
        // Hiển thị thông báo sản phẩm đã hết hàng
        iziToast.warning({
            title: 'Cảnh báo',
            message: 'Sản phẩm đã hết hàng!',
            position: 'topRight'
        });
    }
}