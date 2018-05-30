import {Component, Input} from "@angular/core";
import {TreeNodeModel} from "./model/tree-node-model";

@Component({
  selector: "repository-tree",
  templateUrl: "./repository-tree.component.html",
  styleUrls: ["./repository-tree.component.css"]
})
export class RepositoryTreeComponent {
  @Input() root: TreeNodeModel;
  @Input() showRoot: boolean;
}
