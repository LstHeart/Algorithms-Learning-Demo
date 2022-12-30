export interface TreeNode {
  data: any;
  left: TreeNode | null;
  right: TreeNode | null;
}

export function TreeNode(data: any) {
  this.data = data;
  this.left = this.right = null;
}

export function preOrder(root: TreeNode | null, record: any[]) {
  record = [...record];
  if (!root) {
    return record;
  }

  record.push(root.data);
  console.log("当前遍历的结点值为：", root.data);
  console.log("当前遍历的结果为：", record);
  // 递归遍历左子树
  record = preOrder(root.left, record);
  // 递归遍历右子树
  record = preOrder(root.right, record);
  return record;
}

export function inOrder(root: TreeNode | null, record: any[]) {
  record = [...record];
  if (!root) {
    return record;
  }
  // 递归遍历左子树
  record = inOrder(root.left, record);
  // 遍历根
  record.push(root.data);
  console.log("当前遍历的结点值为：", root.data);
  console.log("当前遍历的结果为：", record);
  // 递归遍历右子树
  record = inOrder(root.right, record);
  return record;
}

export function postOrder(root: TreeNode | null, record: any[]) {
  record = [...record];
  if (!root) {
    return record;
  }
  // 递归遍历左子树
  record = postOrder(root.left, record);
  // 递归遍历右子树
  record = postOrder(root.right, record);

  // 遍历根
  record.push(root.data);
  console.log("当前遍历的结点值为：", root.data);
  console.log("当前遍历的结果为：", record);

  return record;
}
