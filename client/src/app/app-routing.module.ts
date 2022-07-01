import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'campaign', component: CampaignDetailsComponent},
  {path: 'campaign/:campaignId/:contactId', component: CampaignDetailsComponent},
  {path: 'stats', component: ReportsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
