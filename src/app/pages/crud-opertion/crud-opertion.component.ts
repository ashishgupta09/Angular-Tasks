import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-crud-opertion',
  templateUrl: './crud-opertion.component.html',
  styleUrls: ['./crud-opertion.component.scss']
})
export class CrudOpertionComponent {
  data: any;
  dataFormGroup!: FormGroup;
  addForm: boolean = false;
  updateForm: boolean = false;
  id: any;

  constructor(
    private api: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getData();

    this.dataFormGroup = this.fb.group({
      title: [''],
      author: ['']
    })

  }

  openModel() {
    this.dataFormGroup.reset();
    this.addForm = true;
    this.updateForm = false;
  }

  getData() {
    this.api.fetchData().subscribe((res: any) => {
      this.data = res;
    })
  }

  postData() {
    this.api.postData(this.dataFormGroup.value).subscribe((res: any) => {
      this.getData();
    })
  }

  deletedata(id: string) {
    this.api.deleteData(id).subscribe((res: any) => {
      this.getData();
    })
  }

  patchData(data: any) {
    this.addForm = false;
    this.updateForm = true;
    this.id =data.id;
    this.dataFormGroup.patchValue(data);
    this.dataFormGroup.controls['title'].setValue(data.title);
    this.dataFormGroup.controls['author'].setValue(data.author);
  }

  updateData() {
    const form =  this.dataFormGroup.value;

    this.api.updateData(this.id, form).subscribe((res: any) => {
      this.getData();
    })
  }

}
