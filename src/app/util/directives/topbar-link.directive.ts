import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[topbarlink]'
})
export class TopbarLinkDirective {

  @HostBinding('class') class = 'text-lg text-slate-950 cursor-pointer'

  constructor() { }

}
