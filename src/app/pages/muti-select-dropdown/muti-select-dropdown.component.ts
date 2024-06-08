import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-muti-select-dropdown',
  templateUrl: './muti-select-dropdown.component.html',
  styleUrls: ['./muti-select-dropdown.component.scss']
})

export class MutiSelectDropdownComponent implements OnInit {

  dropdownList: any[] = [];
  selectedItem: any[] = [];
  dropdownSettings!: IDropdownSettings;

  ngOnInit(): void {
  this.dropdownFunction();
  }

  dropdownFunction() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
      { item_id: 6, item_text: 'KolKata' },
      { item_id: 7, item_text: 'Lucknow' },
      { item_id: 8, item_text: 'Ahemdabad' },
      { item_id: 9, item_text: 'Jaipur' },
      { item_id: 10, item_text: 'Chandigarh' }
    ]

    this.selectedItem = [
      { item_id: 3, item_text: 'Pune' },
    ]

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
