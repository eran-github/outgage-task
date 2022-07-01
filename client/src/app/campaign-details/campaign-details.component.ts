import { Component, OnInit, ViewChild, ElementRef, ViewChildren, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from '../campaign.service';
import { Campaign } from './campaign';
import { EventType } from "../enums/event-type";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  id: number
  campaign: Campaign
  campaignId: string
  contactId: string
  isSignup: boolean = false;

  constructor(private route: ActivatedRoute, private campaignService: CampaignService,  private renderer: Renderer2) { }

  ngOnInit(): void {   
    this.id = this.route.snapshot.params['id'];
    this.campaignId = this.route.snapshot.params['campaignId'];
    this.contactId = this.route.snapshot.params['contactId'];
    this.campaign = new Campaign();
    this.campaignService.getCampaign(this.campaignId, this.contactId, EventType.VISIT).subscribe( data => {
      this.campaign = data;
    });        
  }

  ngAfterViewInit() {
  }

  sendClickEvent(){
    this.id = this.route.snapshot.params['id'];
    this.campaignId = this.route.snapshot.params['campaignId'];
    this.contactId = this.route.snapshot.params['contactId'];
    this.campaignService.insertCampaignEvent(this.campaignId, this.contactId, EventType.CLICK);
    this.isSignup = true;
  }

  signup(form: NgForm) {
    this.campaignId = this.route.snapshot.params['campaignId'];
    this.contactId = this.route.snapshot.params['contactId'];    
    console.log('Your form data : ', form.value.first_name);
    this.campaignService.signup(this.contactId, this.campaignId, form.value.first_name, form.value.last_name, form.value.email);
  }

}
