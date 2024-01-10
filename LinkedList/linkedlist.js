// Create node class 
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    };
};

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode; 
        this.tail = newNode; 
        this.length = 1;
    };

    push(value){
        /**
         * @param {integer} value the new value to be pushed to the linked list
         * @returns {linked list} returns the new/updated linked list
         */
        const newNode = new Node(value); // Create a new node
        if(!this.head){  // Condition if linkedlist is empty
            this.head = newNode;
            this.tail = newNode;
        } else { // Condition is linkedlist length is >= 1
            this.tail.next = newNode; // Set current tail's next pointer to newNode
            this.tail = newNode; // update tail to newNode
        }
        this.length++;
        return this;
    };

    pop(){
        /**
         * Description: Removes the last element of the linked list
         * @returns {Node} returns the removed element 
         */
        let temp = this.head; // Used to keep track & return the last node
        let pre = this.head; // Used to reset the tail
        
        if(!this.head){ // Condition for empty linkedlist 
            return null;
        } else if(this.length === 1){ // Condition for 1 node in linkedlist
            this.head = null; // set both head and tail to null
            this.tail = null; 
            this.length--;
            return temp; // decrement length and return temp
        }
        while(temp.next){ // linkedlist length is > 1
            pre = temp; // assigning pre to temp will keep track of the new tail
            temp = temp.next; // iterate until it reaches end of linked list
        }
        this.tail = pre; // set the new tail  
        this.tail.next = null; // remove the last node
        this.length--; // decrement length 
    
        return temp; // return the removed node
    };

    unshift(value){ 
        /**
         * Description : Adds a new node at the beginning of the linked list 
         * @param {integer} value new value to be added 
         * @returns {LinkedList} A new updated linked list
         */
        const newNode = new Node(value);
        if(!this.head){ // If the linked list is empty
            this.head = newNode; 
            this.tail = newNode;
        } else {
            newNode.next = this.head; // Connect node to head
            this.head = newNode; // make the new node head
        }   
        this.length++;
        return this;
    }

    shift(){
        /**
         * Description: Removes the first node of the linked list 
         * @returns the removed node 
         */
        const temp = this.head; 
        if(!this.head){ // Empty list condiiton
            return null;
        } 
        this.head = this.head.next; // move the head to the next node
        temp.next = null; // disconnect the temp node from the linked list

        if(this.length === 1){
            this.tail = null; // set only node's tail to null if length is 1
        }
        this.length--;
        
        return temp; 
    }

    get(index){
        /**
         * Description: Gets the value at the given index
         * @param {integer} index the index of the linked list 
         * @returns {Node} Returns the Node at that index
         */
        let temp = this.head; // Define a temporary variable 
        let i = 0;
        if(index < 0 || index > this.length - 1){ // Check if index exists
            return undefined;
        }
        while( i < index){ // Increment until index
            temp = temp.next;
            i++;
        }
        return temp; // return the node
    }

    set(index, value){
        /**
         * Description : Given an index and value, it changes the 
         * current value of the given index to the new given value 
         * @param {integer} index the index to update the new value 
         * @param {integer} value the new value to update to
         * @returns {boolean} returns true/false depending if the operation
         * was successful.
         */
        const setNode = this.get(index); // Reuse get method to find and verify index
        if(setNode){ // Check if the value at the given index was found
            setNode.value = value; // set the new value 
            return true; 
        }
        return false;
    }

    insert(index, value){
        /**
         * @param {integer} value
         * @param {integer} index 
         * @returns {boolean} Returns true/false depending whether the operation was sucessful
         */
        console.log(index, this.length, this.length - 1)
        if(index === 0) return this.unshift(value); // adding to begining of linked list
        if(index === this.length) return this.push(value); // adding to the end of linked list 
        if(index < 0 || index > this.length) return false; // if index is invalid
        
        const newNode = new Node(value); // create the new node to be added
        const temp = this.get(index - 1); // get the node in front of the target index
        newNode.next = temp.next; // connect the new node to the right side of linked list (next)
        temp.next = newNode; // connect the temp to new node
        this.length++;
        return true
    };

    remove(index){
        /**
         * @param {integer} index the index to remove in linked list
         * @returns {Node} returns the removed node
         */
        // Use previous defined methods to remove a node in front and end of linked list
        if(index === 0) return this.shift(); 
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined; 

        
        let prevNode = this.get(index - 1); // Get prev node of the removed node
        let removeNode = prevNode.next; // Get removed node
        prevNode.next = removeNode.next; // point prev node, to the node after removed node
        removeNode.next = null; // disconnect the remove node from linked list
        this.length--;
        return removeNode;
    }; 

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp; 
        let next = temp.next;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = temp.next; // keep track of next node in original linked list
            temp.next = prev; // reverse the direction of the current node
            prev = temp; // move the prev pointer to current node
            temp = next; // move temp pointer to the next node in original linked list 
        }
        return this;
    }


    printList(){
        let temp = this.head;
        while(temp){
            console.log(temp.value)
            temp = temp.next;
        }
    }
}
let myLinkedList = new LinkedList(0);

myLinkedList.push(1);
myLinkedList.push(2);
// myLinkedList.push(3);
// myLinkedList.push(4);
// myLinkedList.push(5);
// myLinkedList.push(6);
myLinkedList.reverse();
// console.log(myLinkedList.insert(1, 1));
// myLinkedList.unshift(10);
// myLinkedList.shift();
// myLinkedList.pop();
// console.log(myLinkedList.get(2))
// console.log(myLinkedList.set(1, 100));
// myLinkedList.remove(1);
myLinkedList.printList(myLinkedList);
// console.log(myLinkedList);