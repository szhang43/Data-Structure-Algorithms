class Node {
    constructor(value){
        this.value = value; 
        this.next = null; 
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value){
        const newNode = new Node(value); 
        this.head = newNode; 
        this.tail = this.head; 
        this.length = 1; 
    }

    push(value){
        const newNode = new Node(value); 
        if(!this.head){
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            this.tail.next = newNode; 
            newNode.prev = this.tail; 
            this.tail = newNode;
        }
        this.length++;
        return this;
    }; 

    printList(){
        let temp = this.head; 
        while(temp){
            console.log(temp);
            temp = temp.next;
        }
    }

}

let myList = new DoublyLinkedList(9);
myList.push(2);
myList.push(3);
myList.push(4);

myList.printList();