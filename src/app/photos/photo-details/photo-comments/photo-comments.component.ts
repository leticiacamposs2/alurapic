import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoService } from '../../photo/photo.service';
import { PhotoComments } from './photo-comments';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;

    comments$: Observable<PhotoComments[]>;

    constructor(private photoService: PhotoService) {}

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);
    }

}