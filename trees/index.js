// Code Example: Binary Search Tree

export class Node {
    constructor(value) {
      this.value = value
      this.leftChild = null
      this.rightChild = null
    }
}

export default class BinaryTree {
    constructor() {
      this.root = null
    }
    addChild(value) {
        if (this.root === null) {
          this.root = new Node(value);
          return; 
        }   
    }
    addChild(value) {
        if (this.root === null) {
          this.root = new Node(value);
          return;
        } else {
          let currentNode = this.root;
          let added = false;
          while (!added && currentNode) {
            // Don't add duplicates
            if (value === currentNode.value) {
              return "Duplicates cannot be added";
            }
            if (value < currentNode.value) {
              // If the spot is free, add it
              if (currentNode.leftChild === null) {
                currentNode.leftChild = new Node(value);
                added = true;
              } else {
                // Otherwise find the next free spot
                currentNode = currentNode.leftChild;
              }
            } else if (value > currentNode.value) {
              if (currentNode.rightChild === null) {
                currentNode.rightChild = new Node(value);
                added = true;
              } else {
                currentNode = currentNode.rightChild;
      } }
      } }
      }
};