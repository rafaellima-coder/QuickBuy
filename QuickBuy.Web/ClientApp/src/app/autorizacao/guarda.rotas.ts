import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class GuardaRotas implements CanActivate{
 
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    var autenticado = sessionStorage.getItem("usuario-autenticado");
    console.log(autenticado);
    if (autenticado == "1") {
      
      return true;
    }

    this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
      //se usuario atuenticado
      return false;
    }

}
