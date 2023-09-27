import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CharactersAPIs } from "../interfaces/charactersAPIs";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http:HttpClient) {}

  getCharacters():Observable<CharactersAPIs[]>{
    return this.http.get<CharactersAPIs[]>("https://finalspaceapi.com/api/v0/character")
  }
}
