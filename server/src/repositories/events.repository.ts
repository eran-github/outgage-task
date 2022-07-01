import { Injectable, Logger } from "@nestjs/common";

const FILE_LOCATION = `db/events.json`
const fs = require("fs");

@Injectable()
export class EventsRepository implements Repository {

  private readonly logger = new Logger(EventsRepository.name);

    insert(data: string) {
      fs.writeFile(FILE_LOCATION, data, (err) => {
        // Error checking
        if (err) throw err;
          this.logger.log("New event add");
      });      
    }

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

}