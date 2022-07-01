import { Module } from '@nestjs/common';
import { CampaignsContactsRepository } from 'src/repositories/campaigns-contacts.repository';
import { CampaignsRepository } from 'src/repositories/campaigns.repository';
import { EventsRepository } from 'src/repositories/events.repository';
import { CampaignController } from './campaigns.controller';
import { CampaignService } from './campaigns.service';
 
@Module({
  imports: [],
  controllers: [CampaignController],
  providers: [CampaignsContactsRepository, CampaignsRepository, CampaignService, EventsRepository]
})
export class CampaignModule {}
