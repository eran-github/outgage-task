import { Module } from '@nestjs/common';
import { CampaignsContactsRepository } from 'src/repositories/campaigns-contacts.repository';
import { CampaignsRepository } from 'src/repositories/campaigns.repository';
import { ContactsRepository } from 'src/repositories/contacts.repository';
import { EventsRepository } from 'src/repositories/events.repository';
import { CampaignService } from '../campaigns/campaigns.service';
import { ContactController } from './contacts.controller';
import { ContactService } from './contacts.service';
 
@Module({
  imports: [],
  controllers: [ContactController],
  providers: [ContactService, 
              CampaignService, 
              CampaignsRepository,
              CampaignsContactsRepository,
              EventsRepository,
              ContactsRepository
            
            ]
})
export class ContactModule {}
