using Microsoft.AspNetCore.Mvc;
using WBH_WebBanQuanAo.Library;

namespace WBH_WebBanQuanAo.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Register()
        {
            return View();
        }
        
        public IActionResult Login()
        {
            return View();
        }
        public IActionResult Profile()
        {
            return View();
        }

    }
}
