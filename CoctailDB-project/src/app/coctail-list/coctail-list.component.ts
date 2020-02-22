import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

import { CoctailListService } from './coctail-list.service';

@Component({
  selector: 'coctail-list',
  templateUrl: './coctail-list.component.html',
  styleUrls: ['./coctail-list.component.css']
})
export class CoctailListComponent implements OnInit {

  filtersList: any[] = [];
  coctailsList: any[] = [];
  subscriptions: Subscription[] = [];
  filterForm: FormGroup;
  selectedFilter: any = {};

  constructor(
    private coctailListService: CoctailListService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(){
    this.buildForm();
    this.getFiltersList();
    this.getCoctailsList();
  }

  buildForm(): void {
    this.filterForm = this.fb.group({
      'coctails':[''],
    });
  }

  selected(event){
    this.selectedFilter = event.option.value
  }

  getFiltersList(){
    this.subscriptions.push(this.coctailListService.getFiltersList().subscribe(
    data => {
      if (data) {
        this.filtersList = data.drinks;
      }
    }
  ))
  }

  getCoctailsList(){
    this.subscriptions.push(this.coctailListService.getCoctailsList(this.selectedFilter).subscribe(
    data => {
      if (data) {
        this.coctailsList = data.drinks;
      }
    }
  ))
  }
}
