import { Component, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: FormioAuthService) { }
  
  ngOnInit() {
  }

}
