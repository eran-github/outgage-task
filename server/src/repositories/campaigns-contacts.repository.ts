import { Injectable, Logger } from "@nestjs/common";

const FILE_LOCATION = `db/campaignsContacts.json`
const fs = require("fs");

@Injectable()
export class CampaignsContactsRepository implements Repository {

  private readonly logger = new Logger(CampaignsContactsRepository.name);

  get() {
    return JSON.parse(fs.readFileSync(FILE_LOCATION));
  }

  find(id1: string, id2: string) {    
    var campaignsContactsJSON = this.get();     
    const campaignContactRecord = campaignsContactsJSON.find((obj) => {
      return obj.campaign_id === id1 && obj.contact_id === id2;
    });
    return campaignContactRecord;
  }

  findById(id: string) {
    throw new Error("Method not implemented.");
  }

  update(data: object) {
    throw new Error("Method not implemented.");
  }

  insert() {
    throw new Error("Method not implemented.");
  }

}