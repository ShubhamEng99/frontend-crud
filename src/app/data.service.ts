import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
baseurl='http://localhost:3000/employees'
  constructor(private http:HttpClient) { }
  getemployees(){
    return this.http.get(this.baseurl);
  }
  addemployee(data:any){
    return this.http.post(this.baseurl +'/create-employee',data)
  }
  delemployee(id:any){
   return this.http.delete(this.baseurl + '/del-employee/' +id);
  }
  updateemp(id:any,data:any){
    return this.http.post(this.baseurl + '/update-emp/'+ id ,data)
  }
  getemployee(id:any){
    return this.http.get(this.baseurl + '/get-employee/' +id)
  }
}
