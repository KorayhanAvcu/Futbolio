using Microsoft.AspNetCore.Mvc;

namespace Futbolio.WebUI.Controllers
{
    public class StandingsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
