import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ModalContentLoaderDirective } from './modal-content-loader.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
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

  @ViewChild(ModalContentLoaderDirective)
  contentHolder!: ModalContentLoaderDirective;

  @HostListener('window:keydown', ['$event']) onkeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.viewContainerRef.createComponent(this.content);
    // }, 0);
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

  close() {
    this.modalService.close(this._id);
  }
}
