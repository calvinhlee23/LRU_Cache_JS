class MaxIntSet {
    constructor(max) {
    }
    insert(num) {

    }
    includes(num) {

    }
    isValid(num) {

    }
    validate(num) {

    }
}

class IntSet {
    constructor(numBuckets=20) {
        this.store = getNestedArray(numBuckets);
    }
    insert(num) {

    }
    remove(num) {

    }
    includes(num) {

    }
    numBuckets() {
        return (this.store.length);
    }
}

class ResizingIntSet {
    constructor(numBuckets=20) {
        this.store = getNestedArray(numBuckets);
        this.count = 0;
    }

    insert(num) {

    }
    remove(num) {

    }

    includes(num) {

    }

    numBuckets() {
        return(this.store.length);
    }

    resize() {
        
    }
}
