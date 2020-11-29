import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoFormModule } from '../photo-form/photo-form.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent
    ],
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        HttpClientModule,
        CommonModule
    ]
})
export class PhotoListModule {}