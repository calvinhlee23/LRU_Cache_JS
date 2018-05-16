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

const GET_NESTED_ARRAY = (numBuckets) => {
    let result = [];
    for (var i = 0; i < numBuckets; i++) {
        result.push([]);
    }
    return result;
}

class IntSet {
    constructor(numBuckets=20) {
        this.store = GET_NESTED_ARRAY(numBuckets);
    }
    insert(num) {
        let bucketIndex = num % this.numBuckets();
        this.store[bucketIndex].push(num);
    }
    remove(num) {
        let bucketIndex = num % this.numBuckets();
        let bucketElInd = this.store[bucketIndex].indexOf(num)
        if (bucketElInd > -1) {
            this.store[bucketIndex].splice(bucketElInd, 1);
        }
    }
    includes(num) {
        let bucketIndex = num % this.numBuckets();
        let bucketElInd = this.store[bucketIndex].indexOf(num)
        if (bucketElInd > -1) {
            return true;
        }
    }
    numBuckets() {
        return (this.store.length);
    }
}

// let a = new IntSet();
// console.log(a.store);
// a.insert(5);
// console.log(a.store);
// a.insert(10203);
// console.log(a.store);
// a.remove(5);
// console.log(a.store);


class ResizingIntSet {
    constructor(numBuckets=20) {
        this.store = GET_NESTED_ARRAY(numBuckets);
        this.count = 0;
    }

    insert(num) {
        this.count += 1;
        // make sure that store length is bigger the count
        console.log(this.count);
        if (this.count === this.numBuckets()) {
            // console.log("resizing reason");
            // console.log(this.count);
            // console.log(this.numBuckets());
            // trigger resize
            this.resize();
        }
        let bucketIndex = num % this.numBuckets();
        this.store[bucketIndex].push(num);
    }

    remove(num) {
        this.count -= 1;
        let bucketIndex = num % this.numBuckets();
        let bucketElInd = this.store[bucketIndex].indexOf(num)
        if (bucketElInd > -1) {
            this.store[bucketIndex].splice(bucketElInd,1);
        } else {
            console.log("element does not exist");
        }
    }

    includes(num) {
        let bucketIndex = num % this.numBuckets();
        return (this.store[bucketIndex].includes(num));
    }

    numBuckets() {
        return(this.store.length);
    }

    resize() {
        let prevStore = [...this.store];
        this.store = GET_NESTED_ARRAY(prevStore.length * 2);
        for (var i = 0; i < prevStore.length; i++) {
            var bucket = prevStore[i];
            for (var j = 0; j < bucket.length; j++) {
                var el = prevStore[i][j];
                this.count = 0;
                this.insert(el);
            }
        }
    }
}

// let a = new ResizingIntSet(2);
// console.log(a.store);
// a.insert(1);
// console.log(a.store);
// // this should trigger resize
// a.insert(2);
// console.log(a.store);
// a.insert(3);
// console.log(a.store);
// a.remove(3);
// console.log(a.store);
// // should tell this num doesnt exist
// a.remove(5);
// console.log(a.includes(1));
// a.insert(599172);
// console.log(a.store);
