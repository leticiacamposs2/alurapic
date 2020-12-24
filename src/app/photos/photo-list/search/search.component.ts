import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
    debounce: Subject<string> = new Subject<string>();
    filter: string = '';

    ngOnInit(): void {
        this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.filter = filter);
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }    

}
