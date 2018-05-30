import { Component, OnInit } from '@angular/core';
import { ModelService } from '../widget/services/model.service';
import { ObjectModel } from '../widget/model/object-model';
import { AdhocClientService } from '../common/services/AdhocClientService';

@Component({
   selector: "adhoc-binding-pane",
   templateUrl: "adhoc-binding-pane.component.html",
})
export class AdhocBindingPane implements OnInit {

  objectModel: ObjectModel;

  constructor(private modelService: ModelService,
              private adhocClientService: AdhocClientService) {

  }

  ngOnInit(): void {
    this.adhocClientService.onRefresh.subscribe(() => {
      this.refreshObjectModel();
    });

    this.adhocClientService.refresh();
  }

  private refreshObjectModel(): void {
    this.modelService.getModel("/table/getModel").subscribe((data) => {
      this.objectModel = data;
      console.log("=================data=======", data);
    });
  }
}
