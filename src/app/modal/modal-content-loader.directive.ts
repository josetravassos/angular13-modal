import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[modal-content-loader]'
})
export class ModalContentLoaderDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
