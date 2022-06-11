import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit() {
  }

  attachModal() {
  const ModalComponentRef =  this.viewContainerRef.createComponent(ModalComponent);
  this.modalService.create(ModalComponentRef, {
    headerText: "Modal Title",
    confirmText: "Save",
    cancelText: "Close",
    confirm: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(console.log('resolved'));
        }, 1000);
      });
    },
  });
  }

  dettachModal() {
    this.viewContainerRef.detach();
  }
}
