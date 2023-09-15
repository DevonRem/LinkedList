
function Node(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
    return this.value, this.nextNode;

};

function LinkedList() {

    let head = null;

    this.append = function(value) {
        let node = new Node(value);
        if (head === null) {
            head = node;
            console.log(head);//test
        }
        else {
            let tail = head;
            while(tail.nextNode !== null) {
                tail = tail.nextNode
            }
            tail.nextNode = node;
            console.log(tail);//test
        }
    }
    
    this.prepend = function(value) {
        let node = new Node(value);
        if (head === null) {
            head = node;
            console.log(head);//test
        }
        else{
            node.nextNode = head;
            head = node;
            console.log(head);//test
        }
    }

    this.size = function() {
        let count = 0;
        let sizeptr = head;
        while(sizeptr !== null) {
            count = count + 1;
            sizeptr = sizeptr.nextNode;
        }
        console.log(count);
        return count;
    }

    this.findHead = function() {
        console.log(head);
        return head;
    }

    this.findTail = function() {
        let tail = head;
        while(tail.nextNode !== null) {
            tail = tail.nextNode
        }
        console.log(tail);
        return tail;
    }

    this.at = function(index) {
        let pointer = head;
        for (let i=0; i<index; i++){
            if (pointer.nextNode === null) {
                return null;
            }
            else{
                pointer = pointer.nextNode;
            }
        }
        console.log(pointer);
        return pointer;
    }

    this.pop = function() {
        let tail = head;
        let prev = null;
        while(tail.nextNode !== null) {
            prev = tail;
            tail = tail.nextNode;
        }
        prev.nextNode = null;
    }

    this.contains = function(value) {
        let ptr = head;
        while(ptr.nextNode !== null) {
            if(ptr.value === value) {
                return true;
            }
                ptr = ptr.nextNode; 
        }
        return ptr.value === value ? true : false;
    }

    this.find = function(value) {
        let ptr = head;
        let i = 0;
        while(ptr.nextNode !== null) {
            if(ptr.value !== value) {
                i = i + 1;
                ptr = ptr.nextNode;
            }
            else {
                return i;
            }
        }
    }

    this.toString = function() {
        let str = '';
        let cur = head;
        while (cur !== null) {
            if (cur.nextNode === null){
                str += `(${cur.value}) -> NULL`;
            }
            else{
                str += `(${cur.value}) -> `;
            }
            cur = cur.nextNode;
        }
        console.log(str);
        return str;
    }

    return { append, prepend, size, findHead, findTail, at, pop, contains, find, toString };
};

let list = LinkedList();
list.append(5);
list.append(6);//append works
list.prepend(7);
list.prepend(8);//prepend works
list.size(); //size works
list.findHead(); //head works
list.findTail(); //tail works
list.at(1) //at works
list.pop();//works
list.size();//test for pop, works
console.log(list.contains(5));//works
console.log(list.find(7));
list.toString();