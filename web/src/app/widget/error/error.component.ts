import { Component } from "@angular/core";

@Component({
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"]
})
export class ErrorComponent {
  errorMsg = "Sorry, The url is not exist...";
}
