import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoDetailsComponent } from './photo-details.component';

NgModule({
    declarations: [PhotoDetailsComponent],
    imports: [CommonModule],
    exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule { }
