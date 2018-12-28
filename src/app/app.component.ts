import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private toastr: ToastrService) {
    registerLocaleData(localeBr, 'pt');
  }
}

