import { Controller,          
         Logger, 
         Post,
         Body} from '@nestjs/common';
import { ContactEntity } from 'src/entities/contact.entity';
import { ContactService } from './contacts.service';

@Controller()
export class ContactController {

  private readonly logger = new Logger(ContactController.name);

  constructor(private readonly contactService: ContactService) {}

  @Post('contact/update')
  updatetContact(@Body() body: ContactEntity): string {   
    this.logger.log("CampaignController " + " " + new Date() + ": Going to updatetContact with params:" + body.campaign_id  + " " + body.id + " " + body.first_name + " " + body.last_name   + " " + body.email); 
    return this.contactService.updatetContact(body.campaign_id, 
                                              body.id,
                                              body.first_name,
                                              body.last_name,
                                              body.email
                                              );
  }

}
