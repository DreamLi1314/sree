import { Type } from "@angular/core";
import { SplitPaneComponent } from './split/split-pane.component';
import { RepositoryTreeComponent } from './tree/repository-tree.component';
import { TreeNodeComponent } from "./tree/node/tree-node.component";

export const MODULE_COMPONENTS: Type<any>[] = [
  SplitPaneComponent,
  RepositoryTreeComponent,
  TreeNodeComponent
];
