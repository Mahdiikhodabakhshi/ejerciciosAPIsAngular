import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { agentsAPIs } from '../interfaces/agentsAPIs';


@Injectable({
  providedIn: 'root'
})
export class AgentsServiceService {

  constructor(private http: HttpClient) {}
    
  
  
  getAgents():Observable<agentsAPIs>{
    return this.http.get<agentsAPIs>('https://valorant-api.com/v1/agents');
  }


}
