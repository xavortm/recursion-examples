import evaluation from './fundamentals/evaluation';
import stringReverse from './examples/string_reverse';
import BinarySearchTree from './examples/binary_search_tree';

// Fundamentals: Evaluating an expression.
evaluation();

// Task 1: Write a polyndrom using recursion.
stringReverse('racecar');

// Task 2: Find a number in a binary search tree (BST).
const tree = new BinarySearchTree();

// Run "insert" for each number in the tree.
tree.generate([10, 0, 100, 1, 42, -2, 4, -482, 993, 5, 6, 7, 8, 9, 10]);
console.log(tree.searchNode(tree.root, 42));
console.log(tree.searchNode(tree.root, 41));

