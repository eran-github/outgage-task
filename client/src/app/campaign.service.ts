import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Campaign } from './campaign-details/campaign';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private baseURL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  
  getCampaignById(id: number): Observable<Campaign>{
    console.log(window.location.href);
    return this.httpClient.get<Campaign>(`${this.baseURL}`);
  }

  getCampaign(campaignId: String, contactId: String, eventId: number): Observable<Campaign> {     
    console.log("Going to get campaign details");
    return this.httpClient.get<Campaign>(`${this.baseURL}/campaigns/con/${contactId}/cam/${campaignId}/event/${eventId}`);
  }

  insertCampaignEvent(campaignId: String, contactId: String, eventId: number): void {      
    console.log("Going to insert campaign event");
    this.httpClient.get(`${this.baseURL}/campaigns/events/con/${contactId}/cam/${campaignId}/event/${eventId}`).subscribe();    
  }

  signup(campaignId: String, contactId: String, firstName: String, lastName: String, email: String) {
    console.log("Going to insert campaign event");
    var headers = { 'content-type': 'application/json'};
    var json = JSON.stringify({"campaign_id":campaignId,"id":contactId,"first_name":firstName,"last_name":lastName,"email":email});
    this.httpClient.post(`${this.baseURL}/contact/update`, json, {'headers':headers})
    .subscribe({next: (response) => console.log(response), error: (error) => console.log(error),
    });

  }

}
