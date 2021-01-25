import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../modelo/usuario";

@Injectable({
  providedIn: "root"
})
export class UsuarioServico {
  private baseURL: string;
  constructor(private http: HttpClient, @inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;    
  }
  public verificarUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders().set("content-type", "application/json");

    var body = {
      email: usuario.email,
      senha: usuario.senha
    }
    var url = `${this.baseURL}/api/usuario`;
    return this.http.post<Usuario>(url, body, { headers });
  }
}
