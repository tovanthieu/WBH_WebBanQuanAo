namespace WBH_WebBanQuanAo.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public DateTime NgayNhapHang { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
    }
}
