class Queues{
    #totalSize;
    #firstElementIndex;
    #currentSizeIndex;
    #myQueue;
    #lastElementIndex;
    lastElementIndex;

    constructor(totalSize){
        this.validateSize()
        this.#myQueue = new Array(totalSize);
        this.#totalSize = totalSize;
        this.#firstElementIndex = 0;
        this.#lastElementIndex = -1;
        this.#currentSizeIndex = 0;

    }

    set size(totalSize){
        this.validateSize()
        this.#totalSize = totalSize;

    }

    get size(){
        return this.#totalSize;
    }

    validateSize (totalSize){
        if (totalSize <=0){
            throw new Error("Size must be greater than zero");
        }

    }

    enqueue(number) {
        if (this.#currentSizeIndex === this.#totalSize){
            throw new RangeError("Out of bounds");
        }
        else{
            this.lastElementIndex = (this.#lastElementIndex + 1) % this.#totalSize;
            this.#myQueue[this.#lastElementIndex] = number;
            this.#currentSizeIndex++
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("No element to dequeue");
        }
        const number = this.#myQueue[this.#firstElementIndex];
        this.#firstElementIndex = (this.#firstElementIndex + 1) % this.#totalSize;
        this.#currentSizeIndex--
        return number;
    }

    front() {
        if (this.isEmpty()) {
            throw new Error("No element in queue");
        }
        return this.#myQueue[this.#firstElementIndex];
    }

    isEmpty() {
        return this.#currentSizeIndex === 0;
    }

    length(){
        return this.#currentSizeIndex ;
    }

}

// try {
//     const stack = new Stack(8);
//
//     stack.push(3);
//
//     stack.push(31);
//     console.log("Top element: " + stack.peek());
//     console.log(stack.pop());
//     console.log("Current stack length: " + stack.length());
//     console.log("Is stack empty? " + stack.isEmpty());
// }
// catch (RangeError ){
//     console.log(RangeError);
// }

module.exports = Queues;