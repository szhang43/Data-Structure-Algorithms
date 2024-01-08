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
        const newNode = new Node(value); // Create a new node
        if(!this.head){  // Condition if linkedlist is empty
            this.head = newNode;
            this.tail = newNode;
        } else { // Condition is linkedlist length is >= 1
            this.tail.next = newNode; // Set current tail's next pointer to newNode
            this.tail = newNode; // update tail to newNode
        }
        this.length++;
        return this
    };

    pop(){
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
}
let myLinkedList = new LinkedList(7);

// myLinkedList.push(4);
myLinkedList.pop();
console.log(myLinkedList)