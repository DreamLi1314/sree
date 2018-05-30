import { Component, OnInit } from '@angular/core';
import { ModelService } from '../widget/services/model.service';
import { AdhocClientService } from '../common/services/AdhocClientService';

@Component({
  selector: "app-report",
  templateUrl: "./app-report.component.html",
  styleUrls: ["./app-report.component.scss"]
})
export class AppReportComponent implements OnInit {

  constructor(private adhocClientService: AdhocClientService) {}

  ngOnInit(): void {
    // send request to get report id.
    // this.adhocClientService.runtimeId =
  }

}
