import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeaponsAPIs} from "../interfaces/weaponsAPIs";

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  constructor(private http:HttpClient) { }

  getWeapons():Observable<WeaponsAPIs[]>{
    return this.http.get<WeaponsAPIs[]>('https://mhw-db.com/weapons')
  }
}
