using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using WBH_WebBanQuanAo.Models;
using static Org.BouncyCastle.Bcpg.Attr.ImageAttrib;

namespace WBH_WebBanQuanAo.Controllers
{
    public class ContactController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Contact(Contact formData)
        {
            if (ModelState.IsValid)
            {
                //send mail
                using (var client = new SmtpClient())
                {
                    client.Connect("smtp.gmail.com");
                    client.Authenticate("phudinhtruong2806@gmail.com", "iveo lqkt eawp usop");
                    var bodyBuilder = new BodyBuilder
                    {
                        HtmlBody = $"<p>Cảm ơn bạn đã quan tâm, vui lòng xác nhận lại thông tin</p> <p>{formData.Name}</p> <p>{formData.Phone}</p> <p>{formData.Email}</p> <p>{formData.Note}</p>",
                        TextBody = "{formData.Id} \r\n {formData.Name} \r\n {formData.Phone} \r\n {formData.Email} \r\n {formData.Note}"
                    };

                    var message = new MimeMessage
                    {
                        Body = bodyBuilder.ToMessageBody()
                    };
                    message.From.Add(new MailboxAddress("TPShop", "phudinhtruong2806@gmail.com"));
                    message.To.Add(new MailboxAddress("Testing01", formData.Email));
                    message.Subject = "Contact from TPShop";
                    client.Send(message);
                    client.Disconnect(true);
                }

                return Json(new { success = true });
            }

            // Nếu có lỗi, hiển thị lại form với thông tin đã nhập và lỗi
            return View("Index", formData);
        }

        public IActionResult Success()
        {
            return View();
        }
    }
}
