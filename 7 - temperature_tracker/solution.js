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
	constructor() {
		this.storage = [];
		this.sum = 0;
		this.max = null;
		this.min = null;
		this.mode = [];
		this.avg = null;
		this.modeMap = {};
	}

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
		this.avg = this.sum / this.storage.length;
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
        // Set item for the first time
		if (!this.modeMap[item]) {
			this.modeMap[item] = 1;
			this.mode.push(item);
			return;
        }
        // Increment item if it exists before
		this.modeMap[item]++;
		if (this.modeMap[item] > this.mode) {
			this.mode = this.modeMap[item];
		}
	}
}

var tempTracker = new TempTracker();
tempTracker.insert(1);
tempTracker.insert(4);
tempTracker.insert(6);
tempTracker.insert(-5);
tempTracker.insert(-2);
console.log(tempTracker.storage);
console.log(tempTracker.getMax())
console.log(tempTracker.getMin())
console.log(tempTracker.getMean())
console.log(tempTracker.getMode())










