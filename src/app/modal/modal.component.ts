import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  headerText = '';
  bodyText = '';
  confirmText = 'OK';
  cancelText = 'CANCEL';
  confirm: (() => Promise<any>) | undefined;
  onCancel: (() => void) | undefined;
  isPending = false;
  content: any;
  modalService: any;
  _id: any;


  constructor() { }

  ngOnInit(): void {
  }

  setup(component: any, config: any, service: any) {
    // console.log('component', component)
    // console.log('config', config)
    // console.log('service', service)
    this.content = component;
    this.headerText = config.headerText;
    this.bodyText = config.bodyText;
    this.confirmText = config.confirmText;
    this.cancelText = config.cancelText;
    this.modalService = service;
    this.confirm = config.confirm;
  }

  handleConfirm(): void {
    if (this.confirm !== undefined) {
      this.isPending = true;
      this.confirm()
        .then(() => {
          this.modalService.close(this._id);
        })
        .catch(() => {
          this.isPending = false;
        });
    } else {
      this.modalService.close(this._id);
    }
  }

  close(){
    this.modalService.close(this._id);
  }

}
