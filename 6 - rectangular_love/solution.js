/* Write a function to find the rectangular intersection of two given love rectangles.
 * 
 * Key concepts: 
 * Think up and draw out all the possible cases. Like we did with the ways ranges can overlap.
 * Use very specific and descriptive variable names.
 */

/* example input form:
var myRectangle = {
    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 1,

    // width and height
    width: 6,
    height: 3,
};
*/

// Solution 1
/* Time / space
 * O(1) / O(1)
function findXOverlap(rec1, rec2) {
    var { leftX: leftX1, width: width1 } = rec1;
    var { leftX: leftX2, width: width2 } = rec2;

    var innerLeftSide = Math.max(leftX1, leftX2);
    var outerRightSide = Math.min(leftX1 + width1, leftX2 + width2);

    /* 
    * If the right side of either rectangle is 
    * greater than the left side of the other rectangle,
    * there's x-overlap
    */
    if (innerLeftSide >= outerRightSide) {
        return { left: null, width: null };
    }

    return {
        left: innerLeftSide,
        width: outerRightSide - innerLeftSide,
    };
}

function findYOverlap(rec1, rec2) {
    var { bottomY: bottomY1, height: height1 } = rec1;
    var { bottomY: bottomY2, height: height2 } = rec2;

    var innerBottomSide = Math.max(bottomY1, bottomY2);
    var outerTopSide = Math.min(bottomY1 + height1, bottomY2 + height2);

    /*
     * If the top of either rectangle is greater than the bottom 
     * of either triangle, then there's y-overlap
     */
    if (innerBottomSide >= outerTopSide) {
        return { bottom: null, height: null };
    }

    return {
        bottom: innerBottomSide,
        height: innerBottomSide - outerTopSide,
    };
}

function findIntersection(rec1, rec2) {
    var xOverlap = findXOverlap(rec1, rec2);
    var yOverlap = findYOverlap(rec1, rec2);

    if (!xOverlap.width || !yOverlap.height) {
        return {
            left: null,
            bottom: null,
            width: null,
            height: null,
        };
    }

    return {
        left: xOverlap.left,
        bottom: yOverlap.bottom,
        width: xOverlap.width,
        height: yOverlap.height,
    };
}

var rec1 = {
    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 1,

    // width and height
    width: 6,
    height: 3,
};

var rec2 = {
    // coordinates of bottom-left corner
    leftX: 3,
    bottomY: 2,

    // width and height
    width: 6,
    height: 3,
};

var intersectionArea = findIntersection(rec1, rec2);
console.log("intersectionArea", intersectionArea);

// Solution 2
function findRangeOverlap(point1, length1, point2, length2) {
    // find the highest start point and lowest end point.
    // the highest ("rightmost" or "upmost") start point is
    // the start point of the overlap.
    // the lowest end point is the end point of the overlap.
    var highestStartPoint = Math.max(point1, point2);
    var lowestEndPoint = Math.min(point1 + length1, point2 + length2);

    // return null overlap if there is no overlap
    if (highestStartPoint >= lowestEndPoint) {
        return { startPoint: null, overlapLength: null };
    }

    // compute the overlap length
    var overlapLength = lowestEndPoint - highestStartPoint;

    return { startPoint: highestStartPoint, overlapLength: overlapLength };
}

function findRectangularOverlap(rect1, rect2) {
    // get the x and y overlap points and lengths
    var xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
    var yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

    // return null rectangle if there is no overlap
    if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
        return {
            leftX: null,
            bottomY: null,
            width: null,
            height: null,
        };
    }

    return {
        leftX: xOverlap.startPoint,
        bottomY: yOverlap.startPoint,
        width: xOverlap.overlapLength,
        height: yOverlap.overlapLength,
    };
}
