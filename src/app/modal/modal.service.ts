import { ApplicationRef, EmbeddedViewRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  counter: number = 1;
  modals: any = [];

  constructor(private appRef: ApplicationRef) {}

  public create(modalComponentRef: any, config: any) {
    const id = 'modal' + this.counter++;
    modalComponentRef.instance._id = id;
    modalComponentRef.instance.setup(modalComponentRef, config, this);
    this.modals[id] = { modalComponentRef: modalComponentRef, hostView: modalComponentRef.hostView };
    const element = (modalComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(element);
  }

  close(id: string) {
    if (this.modals[id]) {
      this.modals[id].modalComponentRef.destroy();
      this.appRef.detachView(this.modals[id].hostView);
    }
  }
}
