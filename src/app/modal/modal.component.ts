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
  //  confirm: () => Promise<any>;
  //  onCancel: () => void;
   isPending = false;
  content: any;
  modalService: any;
  _id: any;


  constructor() { }

  ngOnInit(): void {
    console.log('first', this.content)
  }

  setup(component: any, config: any, service: any) {
    console.log('component', component)
    console.log('config', config)
    console.log('service', service)
    this.content = component;
    this.headerText = config.headerText;
    this.bodyText = config.bodyText;
    this.confirmText = config.confirmText;
    this.cancelText = config.cancelText;
    this.modalService = service;
   // this.confirm = config.confirm;
  }

}
