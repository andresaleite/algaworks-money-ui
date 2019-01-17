import { HttpClient } from '@angular/common/http';
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
              private router: Router,
              public http: HttpClient) {
    registerLocaleData(localeBr, 'pt');
  }

  exibirNavBar() {
    return this.router.url !== '/login';
  }

}

