import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {

  @Output() valueChange = new EventEmitter();
  @Output() searchEvent = new EventEmitter();

  formSearch = new FormGroup({
    search: new FormControl(''),
  });

  onSubmitSearch(event: any): void {
    this.searchEvent.emit(this.formSearch.get('search')?.value);
  }

  get search(): AbstractControl | null {
    return this.formSearch.get('search')
  }

}
