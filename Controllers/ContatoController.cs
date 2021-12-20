using Microsoft.AspNetCore.Mvc;

namespace CRUDMVC.Controllers
{
    public class ContatoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
