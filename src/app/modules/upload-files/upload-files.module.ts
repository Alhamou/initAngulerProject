import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFilesRoutingModule } from './upload-files-routing.module';
import { ImagesComponent } from './images/images.component';


@NgModule({
  declarations: [
    ImagesComponent
  ],
  imports: [
    CommonModule,
    UploadFilesRoutingModule
  ]
})
export class UploadFilesModule { }
