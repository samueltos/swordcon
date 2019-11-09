import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService } from 'angular-formio/resource';
import { ParticipantModule } from './participant/participant.module';
import { EventResourceComponent } from './event-resource/event-resource.component';
import { EventViewComponent } from './event-view/event-view.component';

const eventResourceRoutes: Routes = FormioResourceRoutes( {
  view: EventViewComponent,
  resource: EventResourceComponent
});

eventResourceRoutes[2].children.push({
  path: 'participant',
  loadChildren: () => ParticipantModule
});

@NgModule({
  declarations: [EventResourceComponent, EventViewComponent],
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(eventResourceRoutes)
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'event',
      form: 'event'
    }}
  ]
})
export class EventModule { }
