using Microsoft.AspNetCore.Mvc;

namespace WBH_WebBanQuanAo.Controllers
{
    public class NewsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Detail()
        {
            return View();
        }

    }
}
