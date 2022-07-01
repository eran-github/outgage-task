import { Controller, Get, Param, Logger} from '@nestjs/common';
import { CampaignEventRequest } from 'src/entities/request/get-campaign';
import { CampaignService } from './campaigns.service';


@Controller()
export class CampaignController {

  private readonly logger = new Logger(CampaignController.name);

  constructor(private readonly campaignService: CampaignService) {}

  @Get('/')
  getHomePage(): string {
    return "";
  }

  @Get('campaigns/con/:contactId/cam/:campaignId/event/:eventId')
  getCampaignDetails(@Param() params: CampaignEventRequest): string {
    this.logger.log("CampaignController " + " " + new Date() + ": Going to getCampaignDetails with params, campaignId: " + params.campaignId +  ", contactId:" + params.contactId);
    return this.campaignService.getCampaignDetails(params.campaignId, params.contactId);
  }

  @Get('campaigns/events/con/:contactId/cam/:campaignId/event/:eventId')
  insertCampaignEvent(@Param() params: CampaignEventRequest): void {
    this.logger.log("CampaignController " + " " + new Date() + ": Going to insertCampaignEvent with params, campaignId: " + params.campaignId +  ", contactId:" + params.contactId);
    this.campaignService.insertCampaignEvent(params.campaignId, params.contactId, params.eventId);
  }

}
