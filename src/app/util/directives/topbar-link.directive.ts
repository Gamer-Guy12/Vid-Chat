import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[topbarlink]'
})
export class TopbarLinkDirective {

  @HostBinding('class') class = 'text-lg text-white cursor-pointer flex relative ml-5 hover:scale-110'

  constructor() { }

}
