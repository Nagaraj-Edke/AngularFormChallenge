import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) { }

  saveToMongo(data){
    console.log(data);

    return this.http.post('http://localhost:5500/formData',data)

  }
}
