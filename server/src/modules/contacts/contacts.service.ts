import { Injectable, Logger} from '@nestjs/common';
import { CampaignService } from '../campaigns/campaigns.service';
import { EventType } from 'src/enums/event-type';
import { ContactsRepository } from 'src/repositories/contacts.repository';
import { ContactEntity } from 'src/entities/contact.entity';

@Injectable()
export class ContactService {

  private readonly logger = new Logger(ContactService.name);

  constructor(private readonly campaignService: CampaignService, 
              private readonly contactsRepository : ContactsRepository){}
    
  updatetContact(campaignId: string , 
                   contactId: string,
                   contactFirstName: string,
                   contactLastName: string,
                   contactEmail: string
                   ): string {
        
                    this.logger.log("ContactService " + " " + new Date() + ": Going to updatetContact with params:" + campaignId + " " + contactId +" " 
                    + contactFirstName + " " + contactLastName + " " + contactEmail);  

                    let c = new ContactEntity();
                    c.first_name = contactFirstName;
                    c.last_name = contactLastName;
                    c.email = contactEmail;
                    c.id = contactId;

                   this.contactsRepository.updateObj(c);
                   this.campaignService.insertCampaignEvent(campaignId, contactId, EventType.FORM);
                   return null;      
    }
    
}
