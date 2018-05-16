class MaxIntSet {
    constructor(max) {
        this.store = this.CREATE_STORE(max);
    }

    CREATE_STORE(max) {
        this.validate(max);
        let store = [];
        for (var i = 0; i < max; i++) {
            store.push(false);
        }
        return store;
    }

    insert(num) {
        this.isValid(num);
        this.store[num-1] = true;
    }
    includes(num) {
        this.isValid(num);
        return this.store[num-1];
    }
    remove(num) {
        this.isValid(num);
        this.store[num-1] = false;
    }
    isValid(num) {
        if (Number.isInteger(num) && (num > 0) && (num <= this.store.length)) {
            return true
        } else {
            throw "only positive integers are allowed"
        }
    }
    validate(num) {
        if (Number.isInteger(num) && (num > 0)) {
            return true
        } else {
            throw "only positive integers are allowed"
        }
    }
}
//------ MaxIntSet test --------
// var a = new MaxIntSet(4)
// // below should be true
// // a.store == [ false, false, false, false ]
// console.log(a.store);
// // below should raise
// try {
//     b = new MaxIntSet("g");
// } catch (e) {
//     console.log(e);
//     console.log("string invocation raises");
//     try {
//         c = new MaxIntSet(-1)
//     } catch (e) {
//         console.log("negative invocation raises");
//         try {
//             a.insert(5);
//         } catch (e) {
//             console.log("5 is out of bounds");
//         }
//     }
// }
// a.insert(4);
// // should return true
// console.log(a.includes(4));
// console.log(a.store);

const getNestedArray = (numBuckets) => {
    let result = [];
    for (var i = 0; i < numBuckets; i++) {
        result.push([]);
    }
    return result;
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
