import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRight]'
})
export class RightDirective {

  @HostBinding('class') class = 'float-right'

  constructor() { }

}
