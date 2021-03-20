import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public email = "rafalima.analista@gmail.com";
  public senha = "";
  public base64 = "data:image/png;base64,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";
  public titulo = " imagem teste";
  public usuario;
  public returnUlr: string;


  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private usuarioServico: UsuarioServico) {


  }
  ngOnInit(): void {
    this.returnUlr = this.activatedRouter.snapshot.queryParams["returnUrl"];
    this.usuario = new Usuario();
  }
  entrar() {

    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
        data =>
        {
        },
        err =>
        {

        }
      );
    //if (this.usuario.email == "rafael@teste.com" && this.usuario.senha == "abc123") {
    //  sessionStorage.setItem("usuario-autenticado", "1");
    //  this.router.navigate([this.returnUlr]);

    //}
  }


}
