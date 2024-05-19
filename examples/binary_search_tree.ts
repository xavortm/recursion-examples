/**
 * Binary Search Tree example.
 *
 * A binary search tree is a binary tree in which every node fits a specific ordering property:
 * all left descendents <= n < all right descendents. This must be true for each node n.
 *
 * A tree is a good example for the use of recursion when we search for a specific number.
 */

/**
 * A tree node.
 *
 * For a simple example we stick with numbers, but a real implementation would use
 * generics to allow for any type of value.
 */
class TreeNode {
  value: number;

  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * A binary search tree.
 *
 * An "end case" for recursive algorithm to search would be to check if the root
 * is reached. That is, when it's "null", we know that the number is not in the tree.
 */
export default class BinarySearchTree {
  public root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  private insertNode(parent: TreeNode, node: TreeNode): void {
    if (node.value < parent.value) {
      if (parent.left === null) {
        parent.left = node;
      } else {
        // Recursive call!
        this.insertNode(parent.left, node);
      }
    } else {
      if (parent.right === null) {
        parent.right = node;
      } else {
        // Recursive call!
        this.insertNode(parent.right, node);
      }
    }
  }

  public add(value: number): void {
    const node = new TreeNode(value);

    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  public generate(arr: number[]): void {
    arr.forEach((value) => this.add(value));
  }

  /**
   * Find a number in the tree.
   *
   * @param node The current node to check.
   * @param value The value to search for.
   * @returns The node with the value or null if not found.
   */
  public searchNode(node: TreeNode | null, value: number): TreeNode | null {
    if (node === null || node.value === value) {
      return node;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    }

    return this.searchNode(node.right, value);
  }
}
