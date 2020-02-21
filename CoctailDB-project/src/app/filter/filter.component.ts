import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
// import { MatListOption } from '@angular/material';


import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filtersList: any[] = [];
  coctailsList: any[] = [];
  subscriptions: Subscription[] = [];
  filterForm: FormGroup;

  constructor(
    private filterService: FilterService,
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

  getFiltersList(){
    this.subscriptions.push(this.filterService.getFiltersList().subscribe(
    data => {
      if (data) {
        this.filtersList = data.drinks;
          console.log(this.filtersList,"AAAAAAAA")
      }
    }
  ))
  }

  getCoctailsList(){
    console.log(this.filterForm)
    this.subscriptions.push(this.filterService.getCoctailsList(this.filterForm.value["coctails"]).subscribe(
    data => {
      if (data) {
        this.coctailsList = data.drinks;
          console.log(this.coctailsList,"bbbbbbb")
      }
    }
  ))
  }

}
