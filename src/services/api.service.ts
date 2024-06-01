import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/posts'

  constructor(
    private http: HttpClient
  ) { }

  fetchData() {
    return this.http.get(this.baseUrl);
  }

  postData(requestBody: any) {
    return this.http.post(this.baseUrl, requestBody);
  }

  deleteData(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateData(id: string, requestBody: any) {
    return this.http.put(`${this.baseUrl}/${id}`, requestBody);
  }

  loadData(){
    return  this.http.get('http://localhost:3000/comments');
  }

}
