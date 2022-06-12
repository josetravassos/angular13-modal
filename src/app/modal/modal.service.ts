import { ApplicationRef, EmbeddedViewRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  counter: number = 1;
  modals: any = [];

  constructor(private appRef: ApplicationRef) {}

  public create(modalRef: any, config: any) {
    console.log('modalRef', modalRef)
    const id = 'modal' + this.counter++;
    modalRef.instance._id = id;
    modalRef.instance.setup(modalRef, config, this);
    this.modals[id] = { modalRef: modalRef, hostView: modalRef.hostView };
    const element = (modalRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(element);
  }

  close(id: string) {
    if (this.modals[id]) {
      this.modals[id].modalRef.destroy();
      this.appRef.detachView(this.modals[id].hostView);
    }
  }
}
