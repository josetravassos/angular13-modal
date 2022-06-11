import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { HelloComponent } from './hello/hello.component';
import { LoaderDirective } from './modal/loader.directive';
import { ModalService } from './modal/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HelloComponent,
    LoaderDirective
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
