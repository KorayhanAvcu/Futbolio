using Microsoft.AspNetCore.Mvc;

namespace Futbolio.WebUI.Controllers
{
    public class FixturesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
