import { Module } from '@nestjs/common';
import { EventsRepository } from 'src/repositories/events.repository';
import { ReportController } from './reports.controller';
import { ReportService } from './reports.service';
 
@Module({
  imports: [],
  controllers: [ReportController],
  providers: [ReportService, EventsRepository],
})
export class ReportModule {}
