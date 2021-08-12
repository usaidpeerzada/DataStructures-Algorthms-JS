#### Linked Lists:

* Linked lists are a series of linked nodes where each node points to the next node in the list. Each node has a value and a pointer to the next node. There are also doubly-linked lists in which each node also points to the previous node in the list.

* Linked lists use the “last-in-first-out” method (similar to a stack) where nodes are added to and deleted from the same end.


#### Linked List Methods:
* Linked lists use two primary methods ( push , pop ) and several helper methods ( get index , delete , isEmpty ).
* push(Node) : Add an element to the linked list
* pop() : Remove an element from the linked list
* get(index) : Return an element from a given index (but don't remove it) delete(index) : Delete an item from a given index
* isEmpty() : Return a boolean indicating whether the list is empty


#### Singly-Linked Lists vs. Doubly-Linked Lists
* Linked lists can be singly, or doubly-linked. In a singly-linked list, each node has one pointer which points to the next element in the list. In a doubly-linked list, each node has two pointers: one which points to the next element in the list and one which points to the previous element in the list.
* Doubly-linked lists are great for removing nodes because they provide access to the previous and the next nodes. To remove a node from a singly-linked list, we have to iterate through the list, keeping track of the previous node