class Stack{
    #size;
    #topIndex;
    #myStack;

    constructor(size){
        this.validateSize()
        this.#myStack = new Array(size);
        this.#size = size;
        this.#topIndex = -1;
    }

    set size(size){
        this.validateSize()
        this.#size = size;

    }

    get size(){
        return this.#size;
    }

    validateSize (size){
        if (size <=0){
            throw new Error("Size must be greater than zero");
        }

    }

    push(number) {
        if(this.#topIndex === this.#size - 1){
            throw new RangeError("Out of bounds");
        }
        else{
            this.#topIndex++
            this.#myStack[this.#topIndex] = number;
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("No element to pop");
        }
        const number = this.#myStack[this.#topIndex];
        this.#topIndex--;
        return number;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("No element in stack");
        }
        return this.#myStack[this.#topIndex];
    }

    isEmpty() {
        return this.#topIndex === -1;
    }

    length(){
        return this.#topIndex + 1;
    }

}

try {
    const stack = new Stack(8);

    stack.push(3);

    stack.push(31);
    console.log("Top element: " + stack.peek());
    console.log(stack.pop());
    console.log("Current stack length: " + stack.length());
    console.log("Is stack empty? " + stack.isEmpty());
}
catch (RangeError ){
    console.log(RangeError);
}

module.exports = Stack;