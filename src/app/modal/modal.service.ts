
import {
  EmbeddedViewRef,
  Injectable,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  private modalSubject: Subject<any> = new Subject<any>();
  public modalObservable$: Observable<any>;
  counter: number = 1;
  modals: any = [];

  constructor() {
    this.modalObservable$ = this.modalSubject.asObservable();
  }

  public create(modalRef: any, config:any) {
   // console.log('modalRef instance', modalRef.instance)

    const id = "modal" + this.counter++;
    modalRef.instance._id = id;
    modalRef.instance.setup(modalRef, config, this);
    this.modals[id] = { modalRef: modalRef, hostView: modalRef.hostView };

    const element = (modalRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
     document.body.appendChild(element);
  }
}
