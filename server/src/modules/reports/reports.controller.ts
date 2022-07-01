import { Controller, 
         Get,         
         Logger} from '@nestjs/common';
import { ReportService } from './reports.service';


@Controller()
export class ReportController {

  private readonly logger = new Logger(ReportController.name);

  constructor(private readonly reportService: ReportService) {}

  @Get('report/stats/get')
  getStats(): string {    
    this.logger.log("ReportController " + " " + new Date() + ": Going to getStats");
    return this.reportService.getStats();
  }

}
