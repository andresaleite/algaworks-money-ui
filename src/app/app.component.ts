import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private toastr: ToastrService,
              private router: Router) {
    registerLocaleData(localeBr, 'pt');
  }

  exibirNavBar() {
    return this.router.url !== '/login';
  }

}

