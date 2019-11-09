import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioResourceService, FormioResourceComponent } from 'angular-formio/resource';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-event-resource',
  templateUrl: './event-resource.component.html',
  styleUrls: ['./event-resource.component.scss']
})

export class EventResourceComponent extends FormioResourceComponent implements OnInit {
  constructor(public service: FormioResourceService, public route: ActivatedRoute, public auth: FormioAuthService) {
    super(service, route, auth);
  }
  
  ngOnInit() {
    super.ngOnInit();
  }
}
