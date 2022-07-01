import { Injectable, Logger } from "@nestjs/common";

const FILE_LOCATION = `db/campaigns.json`
const fs = require("fs");

@Injectable()
export class CampaignsRepository implements Repository {

    private readonly logger = new Logger(CampaignsRepository.name);

    get() {
      return JSON.parse(fs.readFileSync(FILE_LOCATION));
    }

    findById(id: string) {
      var campaign;       
      let campaigns = this.get(); 
      campaign = campaigns.find((obj) => {
         return obj.id === id;
      }); 
      return campaign; 
    }

    update(data: object) {
      throw new Error("Method not implemented.");
    }
      
    find(id1: string, id2: string) {
        throw new Error("Method not implemented.");
    }

    insert() {
      throw new Error("Method not implemented.");
    }

}