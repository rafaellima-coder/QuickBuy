using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Entidades;
using System;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UsuarioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }

        }
        [HttpPost("verificarUsuario")]
        public ActionResult VerificarUsuario([FromBody]Usuario usuario)
        {
            try
            {
                if (usuario.Email == "rafael@teste" && usuario.Senha == "abc123")
                {
                    return Ok(usuario);
                }
                return BadRequest("Usuário ou senha inválido");
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }

        }
        [HttpPost]
        public ActionResult Post()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
            
        }
    }
}
