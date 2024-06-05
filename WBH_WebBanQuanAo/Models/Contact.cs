using System.ComponentModel.DataAnnotations;

namespace WBH_WebBanQuanAo.Models
{
    public class Contact
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Tên không được để trống")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Email không được để trống")]
        [EmailAddress(ErrorMessage = "Email không hợp lệ")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Số điện thoại không được để trống")]
        public string? Phone { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập ghi chú")]
        public string? Note { get; set; }
    }

}
