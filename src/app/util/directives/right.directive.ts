import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[right]'
})
export class RightDirective {

  @HostBinding('class') class = 'float-right'

  constructor() { }

}
