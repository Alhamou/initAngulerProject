import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: "upload",
    children: [
      { path: '', redirectTo: 'images', pathMatch: 'full'},
      { path: "images", component: ImagesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadFilesRoutingModule { }
