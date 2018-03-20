/* 
 Write a class TempTracker with these methods:

    insert()—records a new temperature
    getMax()—returns the highest temp we've seen so far
    getMin()—returns the lowest temp we've seen so far
    getMean()—returns the mean ↴ of all temps we've seen so far
    getMode()—returns a mode ↴ of all temps we've seen so far

Optimize for space and time. Favor speeding up the getter methods getMax()
, getMin(), getMean(), and getMode() over speeding up the insert() method.
*/

class TempTracker {
    storage = [];
    sum = 0;
    max = null;
    min = null;
    mode = null;
    modeMap = {};
    avg = null;

    insert(item) {
        this.storage.push(item);

        this.setMean(item);
        this.setMinMax(item);
        this.setMode(item);
    }

    getMax() {
        return this.max;
    }

    getMin() {
        return this.min;
    }

    getMean() {
        return this.avg;
    }

    getMode() {
        return this.mode;
    }

    setMean(item) {
        this.sum += item;
        this.avg = sum / this.storage.length;
    }

    setMinMax(item) {
        if (!this.max) {
            this.max = item;
        } else if (item > this.max) {
            this.max = item;
        }
        if (!this.min) {
            this.min = item;
        } else if (item < this.min) {
            this.min = item;
        }
    }

    setMode(item) {
        if (!this.modeMap[item]) {
            this.modeMap[item] = 1;
            this.mode = this.modeMap[item];
            return;
        }
        this.modeMap[item]++;
        if (this.modeMap[item] > this.mode) {
            this.mode = this.modeMap[item];
        }
    }
}

var tempTracker = new TempTracker();
tempTracker.insert(1, 2, 3);
console.log(tempTracker.storage);
