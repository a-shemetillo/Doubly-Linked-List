class List{
    constructor(){
        this._head=null;
        this._tail=null;
        this._length=0;
    }
    head(){
        return this._head;
    }
    tail(){
        return this._tail;
    }
    append(data){
        let node=new Node(data);
        if(this._length===0){
            this._head=node;
            this._tail=node;
        } else{
            this._tail.next=node;
            node.prev=this._tail;
            this._tail=node;
        }
        this._length++;
        return this;
    }
    at(index){
        if( index>=0 && index <this._length){
            let current=this._head;
            for (let i=0;i!=index; i++){
                current=current.next;
            }
            return current.data;

        } else{
            return false;
        }

    }
    insertAt( index, data){
        if( index>=0 && index <=this._length){
            let current=this._head;
            let node=new Node(data);
            if (this._length===0) {
                this._head=node;
                this._tail=node;
            }
            if(index===0){
                node.next=current;
                current.prev=node;
                this.head=node;
            }
            if (index===this._length) {
                this._tail.next=node;
                node.prev=this._tail;
                this._tail=node;
            } else{
            for (let i=0;i!=index; i++){
                current=current.next;
            }
            current.prev.next=node;
            node.prev=current.prev;
            node.next=current;
            current.prev=node;
            }
            this._length++;
            return this;

        } 

    }
    deleteAt(index){
        if( index>=0 && index <this._length){
            let current=this._head;
            if (this.index===0) {
                this._head=this.head.next;
                if (!this._head) {
                    this._tail = null;
                } else {
                    this._head.prev = null;
                }

            }
            if (index===this._length-1) {
                this._tail=this._tail.prev;
                this._tail.next=null;
            } else{
            for (let i=0;i!=index; i++){
                current=current.next;
            }
            current.prev.next=current.next;
            current.next.prev=current.prev;
        }
            this._length--;
            return this;

        } else{
            return null;

        }

    }
    reverse(){
        let current = this._head, tmp;
        while (current!=null){
        tmp=current.next;
        current.next = current.prev;
        current.prev=tmp;
        current=current.prev;
        }
        tmp=this._head;
        this._head=this._tail;
        this._tail=tmp;
        return this;
    }
    each(func){
        let current = this._head;
        while (current!=null){
        current.data=func(current.data);
        current=current.next;
        }
        return this;
    }
    indexOf(data){
        let current = this._head, i;
        while (current!=null){
            if(current.data===data){
                return i;
            }
            current=current.next;
            i++;
        }
        return -1;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
var list = new List();
console.log(list.append("item1").append("item2").insertAt(0,"item3").deleteAt(2).reverse().at(0));
