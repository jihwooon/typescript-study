class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if(!this.head) {
             this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode;
        }
        this.length++
        return this
    }
 
    pop() {
        if(!this.head) return undefined
        let current = this.head
        let newTail = current
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if(!this.head) return undefined
        let current_head = this.head
        this.head = current_head.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return current_head
    }
}

const list = new SinglyLinkedList()
list.push('Hello')
list.push('Hi')
list.push('!')
list.push('1')

console.log(list.shift())

console.log(list)
