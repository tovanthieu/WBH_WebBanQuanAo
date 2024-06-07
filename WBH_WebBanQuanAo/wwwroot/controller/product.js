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
document.addEventListener('DOMContentLoaded', function () {
    const productLinks = document.querySelectorAll('.hover-info');
    const hoverDetails = document.querySelector('.hover-details');

    productLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            const image = link.getAttribute('data-image');
            const name = link.getAttribute('data-name');
            const description = link.getAttribute('data-description');
            const price = link.getAttribute('data-price');

            hoverDetails.innerHTML = `

                        <div class="details-name">${name}</div>
                        <div class="details-description">${description.substring(0, 200)}</div>
                        <div class="details-price">${price}</div>
                    `;
            hoverDetails.style.display = 'block';

            const rect = link.getBoundingClientRect();
            hoverDetails.style.top = rect.bottom + 'px';
            hoverDetails.style.left = rect.left + 'px';

        });

        link.addEventListener('mouseleave', function () {
            hoverDetails.style.display = 'none';
        });
    });
});
