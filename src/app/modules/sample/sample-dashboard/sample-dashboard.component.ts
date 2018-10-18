import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data/data.service';

@Component({
  selector: 'app-sample-dashboard',
  templateUrl: './sample-dashboard.component.html',
  styleUrls: ['./sample-dashboard.component.scss'],
  providers: [DataService]
})
export class SampleDashboardComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
