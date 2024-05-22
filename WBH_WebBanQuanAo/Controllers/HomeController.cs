using Microsoft.AspNetCore.Mvc;

namespace WBH_WebBanQuanAo.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

    }
}
