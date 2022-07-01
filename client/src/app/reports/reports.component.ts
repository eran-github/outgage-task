import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IReport } from './reports';
import { ReportsService } from './reports.service';
import {Sort} from '@angular/material/sort';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  sortedData: IReport[];
  reportsList: IReport[];
  isDataAvailable:boolean = false;

  constructor(private route: ActivatedRoute, private reportsService: ReportsService) {
  }

  ngOnInit(): void {  
  }

  getStats() {
    this.reportsService.getStats().subscribe( data => {
      this.reportsList = data;
    });  
    if (this.reportsList !== undefined) {
      this.sortedData = this.reportsList.slice();
      this.isDataAvailable = true;   
    }        
  }

  sortData(sort: Sort) {
    const data = this.reportsList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'campaignId':
          return compare(a.campaignId, b.campaignId, isAsc);
        case 'contactId':
          return compare(a.contactId, b.contactId, isAsc);
        case 'eventTypeId':
          return compare(a.eventTypeId, b.eventTypeId, isAsc);
        case 'eventName':
          return compare(a.eventName, b.eventName, isAsc);
        case 'time':
          return compare("", "", isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}