import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  filter: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if(!photos.length) this.hasMore = false;
      });
  }
}
