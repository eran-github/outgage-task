import { Injectable, Logger } from "@nestjs/common";
import { ContactEntity } from "src/entities/contact.entity";

const FILE_LOCATION = `db/contacts.json`
const fs = require("fs");

@Injectable()
export class ContactsRepository implements Repository {

    private readonly logger = new Logger(ContactsRepository.name);

    update(data: unknown): any {
      throw new Error("Method not implemented.");
    }

    insert(data: string) {
      fs.writeFile(FILE_LOCATION, data, (err) => {
        // Error checking
        if (err) throw err;
          this.logger.log("add new contact to DB");
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

    updateObj(data: ContactEntity) {
      // search contact
      var contacts = this.get(); 
      let contact = contacts.find((obj) => {
        return obj.id ===  data.id; 
      }); 
      
      // remove current contact
      const removeById = (arr, id) => {
          const requiredIndex = arr.findIndex(el => {
             return el.id === String(id);
          });
          if(requiredIndex === -1){
             return false;
          };
          return !!arr.splice(requiredIndex, 1);
       };
       
       removeById(contacts, data.id);
      
      let updatedContact = {            
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          id: data.id
      };

      // Adding the new data to our object
      contacts.push(updatedContact);   
      var contactDataNewJSON = JSON.stringify(contacts);
      // insert
      this.insert(contactDataNewJSON);
    }
      
    find(id1: string, id2: string) {
        throw new Error("Method not implemented.");
    }

}