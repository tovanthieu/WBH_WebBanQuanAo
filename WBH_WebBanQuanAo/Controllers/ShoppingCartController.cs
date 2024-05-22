using Microsoft.AspNetCore.Mvc;

namespace WBH_WebBanQuanAo.Controllers
{
    public class ShoppingCartController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Checkout()
        {
            return View();
        }
    }
}
