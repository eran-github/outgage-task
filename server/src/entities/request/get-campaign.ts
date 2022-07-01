import { isEmpty, IsNotEmpty, IsNumber, isNumberString, IsNumberString } from "class-validator";

export class CampaignEventRequest {
    @IsNotEmpty()
    contactId: string;
    @IsNotEmpty()
    campaignId: string;
    @IsNumberString()
    eventId: number;    
}