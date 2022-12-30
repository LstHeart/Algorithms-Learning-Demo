import { inOrder, postOrder, preOrder, TreeNode } from "../src/bTree";

function createTree() {
  // 构造二叉树
  // 先序遍历结果为：A-B-D-E-C-F
  const nodeA: TreeNode = new TreeNode("A");
  const nodeB: TreeNode = new TreeNode("B");
  const nodeC: TreeNode = new TreeNode("C");
  const nodeD: TreeNode = new TreeNode("D");
  const nodeE: TreeNode = new TreeNode("E");
  const nodeF: TreeNode = new TreeNode("F");

  const root = nodeA;
  root.left = nodeB;
  root.right = nodeC;

  nodeB.left = nodeD;
  nodeB.right = nodeE;

  nodeC.left = null;
  nodeC.right = nodeF;

  nodeD.left = null;
  nodeD.right = null;

  nodeE.left = null;
  nodeE.right = null;

  nodeF.left = null;
  nodeF.right = null;

  return root;
}

it("先序遍历", () => {
  const tree = createTree();
  const result = preOrder(tree, []);
  const expectResult = ["A", "B", "D", "E", "C", "F"].toString();
  expect(result.toString()).toBe(expectResult);
});

it("中序遍历", () => {
  const tree = createTree();
  const result = inOrder(tree, []);
  const expectResult = ["D", "B", "E", "A", "C", "F"].toString();
  expect(result.toString()).toBe(expectResult);
});

it("后序遍历", () => {
  const tree = createTree();
  const result = postOrder(tree, []);
  const expectResult = ["D", "E", "B", "F", "C", "A"].toString();
  expect(result.toString()).toBe(expectResult);
});
