import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private _HttpClient:HttpClient) { }

  getUsers(page:number):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users?page=${page}.`)
  }

  getUserDetails(id:number):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users/${id}.`)
  }
}
