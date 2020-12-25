import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';

NgModule({
    declarations: [PhotoDetailsComponent],
    imports: [
        CommonModule,
        PhotoModule
    ],
    exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule { }
