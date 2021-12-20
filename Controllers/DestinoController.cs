using Microsoft.AspNetCore.Mvc;

namespace CRUDMVC.Controllers
{
    public class DestinoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
