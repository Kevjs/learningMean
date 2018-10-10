class MaxHeap{
    constructor(){
        this.heap = [];
    }
    isEmpty(){
        return this.heap.length == 0;
    }
    size(){
        return this.heap.length;
    }
    top(){
        return this.heap[0];
    }
    push(value){
        let index = this.heap.length;
        this.heap.push(value);
        while(index > 1){
            let parent = Math.floor((index-1)/2);
            if(this.heap[index] > this.heap[parent]){
                let temp = this.heap[index];
                this.heap[index] = this.heap[parent];
                this.heap[parent] = temp;
                index = parent;
            }else{
                break;
            }
        }
        return this;
    }
    popS(){
        if(this.heap.length == 0) return null;
        let temp = this.heap[0];
        this.heap[0] = this.heap[this.heap.length-1];
        this.heap[this.heap.length-1] = temp;
        this.heap.pop();
        let smaller = 1;
        let index = 0;
        while(this.heap[smaller]){
            if(this.heap[smaller] < this.heap[smaller + 1]){
                smaller++;
            }
            if(this.heap[smaller] > this.heap[index]){
                let tempS = this.heap[smaller];
                this.heap[smaller] = this.heap[index];
                this.heap[index] = tempS;
                index = smaller;
                smaller = (smaller*2) + 1;
            }else{
                break;
            }
        }
        return temp;
    }
}

let me = new MaxHeap();
me.push(5).push(-1).push(10).push(3).push(3).push(6).push(11).push(9);
let i;
while(i = me.popS()){
    console.log(i);
}