import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.style.css']
})
export class SearchComponent {
  form: FormGroup;
  @Output() search = new EventEmitter<string>();
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      searchString: ''
    });

    this.form.get('searchString')
      .valueChanges
      // .throttleTime(500)
      .subscribe(searchString => this.search.emit(searchString));
  }
}
