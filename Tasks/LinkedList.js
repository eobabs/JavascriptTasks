class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class LinkedList {
        constructor() {
            this.head = null;
        }

add(data){
    const newNode = new Node(data);
    if (this.head === null) {
        this.head = newNode;
    } else {
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.prev = temp;
    }
}


remove(data) {
    if (this.head === null) {
        console.log("List is empty!");
        return;
    }
    let temp = this.head;
    while (temp !== null && temp.data !== data) {
        temp = temp.next;
    }
    if (temp === null) {
        console.log("Element not found.");
        return;
    }
    if (temp.prev !== null) {
        temp.prev.next = temp.next;
    } else {
        this.head = temp.next;
    }
    if (temp.next !== null) {
        temp.next.prev = temp.prev;
    }
}

traverse(){
    let temp = this.head;
    while (temp !== null) {
        console.log(temp.data);
        temp = temp.next;
    }
}

isEmpty() {
    return this.head === null;
    }

}