import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
  <div *ngIf="temErro()" class="ui-message ui-widget ui-corner-all ui-message-error ng-star-inserted">
    {{text}}
  </div>
  `,
  styles: [
    `
    .ui-message-error{
      margin-top: 4px;
    } `
  ]
})
export class MessageComponent   {
  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }


}
