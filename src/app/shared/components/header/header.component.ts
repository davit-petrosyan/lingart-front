import { Component, OnInit } from '@angular/core';
import {RestDataService} from '../../services/rest-data.service';
import {Observable, of} from 'rxjs';
import {CompanyInfo} from '../../models/company-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  info$: Observable<CompanyInfo>;
  menuToggle: boolean;


  constructor(public restDataService: RestDataService) { }

  ngOnInit(): void {
    this.info$ = this.restDataService.getData('/company-info');
  }

  menuToggled(): void{
    this.menuToggle = !this.menuToggle;
  }

}
