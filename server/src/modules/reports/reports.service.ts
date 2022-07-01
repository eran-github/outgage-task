import { Injectable} from '@nestjs/common';
import { EventsRepository } from 'src/repositories/events.repository';

@Injectable()
export class ReportService {

  constructor(private readonly eventsRepository: EventsRepository){}
    
  getStats():string {    
    return this.eventsRepository.get();
  }

}
