import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/seguranca/auth.service';
import { LogoutService } from 'src/app/seguranca/logout.service';
import { ErroService } from '../erro.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private logoutS: LogoutService,
    private erro: ErroService,
    private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.logoutS.logout()
      .then(() => {
          this.router.navigate(['/login']);
      }).catch(erros => {
        this.erro.handle(erros);
      });
  }

}
