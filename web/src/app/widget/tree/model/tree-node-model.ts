

export interface TreeNodeModel {
  label: string; // 节点的显示名字
  value: string; // 节点的值
  children: TreeNodeModel;
  leaf: boolean; // 是否是叶子节点
  tooltip: string; // tooltip
  expanded: boolean; // 是否是展开的
  type: string; // 节点的类型
  path: string; // Node 的路径
}
