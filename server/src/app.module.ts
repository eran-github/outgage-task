import { Module } from '@nestjs/common';
import { CampaignModule } from './modules/campaigns/campaigns.module';
import { ContactModule } from './modules/contacts/contacts.module'; 
import { ReportModule } from './modules/reports/reports.module';

@Module({
  imports: [CampaignModule,
            ContactModule,
            ReportModule 
  ],
})
export class AppModule { }
