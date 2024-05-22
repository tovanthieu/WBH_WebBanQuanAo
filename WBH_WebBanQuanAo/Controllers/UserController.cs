using Microsoft.AspNetCore.Mvc;

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


    }
}
