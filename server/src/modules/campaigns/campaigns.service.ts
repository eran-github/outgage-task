import { Injectable, Logger} from '@nestjs/common';
import { EventType } from 'src/enums/event-type';
import { CampaignsRepository } from 'src/repositories/campaigns.repository';
import { CampaignsContactsRepository } from 'src/repositories/campaigns-contacts.repository';
import { EventsRepository } from 'src/repositories/events.repository';

@Injectable()
export class CampaignService {

  private readonly logger = new Logger(CampaignService.name);
  
  constructor(
    private readonly campaignsRepository : CampaignsRepository,
    private readonly campaignsContactsRepository : CampaignsContactsRepository,
    private readonly eventsRepository : EventsRepository
    ){}

  getCampaignDetails(campaignId: string , contactId: string): string {  
    this.logger.log("CampaignService " + " " + new Date() + ": Going to getCampaignDetails with params, campaignId: " + campaignId +  ", contactId:" + contactId);  
    var campaign;    {    
    let res:boolean = this.eventHandling(campaignId, contactId, EventType.VISIT);
    if (res) {
      campaign = this.campaignsRepository.findById(campaignId);
    }
    return campaign;        
    }
  }

  insertCampaignEvent(campaignId: string , contactId: string, eventTypeId: number): void {
    this.logger.log("CampaignService " + " " + new Date() + ": Going to insertCampaignEvent with params, campaignId: " + campaignId +  ", contactId:" + contactId);
    this.eventHandling(campaignId, contactId, eventTypeId);
  }

  eventHandling(campaignId: string , contactId: string, eventTypeId: number): boolean {
    this.logger.log("CampaignService " + " " + new Date() + ": Going to eventHandling with params, campaignId: " + campaignId +  ", contactId:" + contactId);
    const campaignRecord = this.campaignsContactsRepository.find(campaignId, contactId);
    // in case campaign and contact found we need to save the event in the DB
    if (campaignRecord !== undefined) {
        // Storing the JSON format data
        var eventsJSON = this.eventsRepository.get();
        // Defining new event to be added
        let event = {          
          campaignId: campaignId,
          contactId: contactId,
          eventTypeId: eventTypeId,
          eventName: EventType[eventTypeId],
          time: new Date()
        };
        // Adding the new data to our object
        eventsJSON.push(event);        
        // Writing to our JSON file
        var eventDataJSON = JSON.stringify(eventsJSON);
        this.eventsRepository.insert(eventDataJSON);
    }
    return campaignRecord !== undefined;
  }
  
}
