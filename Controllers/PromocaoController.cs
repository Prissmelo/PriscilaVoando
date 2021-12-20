using Microsoft.AspNetCore.Mvc;

namespace CRUDMVC.Controllers
{
    public class PromocaoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
