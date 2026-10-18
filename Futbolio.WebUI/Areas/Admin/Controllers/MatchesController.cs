using Microsoft.AspNetCore.Mvc;

namespace Futbolio.WebUI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class MatchesController : Controller
    {
        // Şimdilik statik: liste, filtre ve CRUD demo verisiyle matches.js içinde çalışır.
        public IActionResult Index()
        {
            return View();
        }
    }
}
