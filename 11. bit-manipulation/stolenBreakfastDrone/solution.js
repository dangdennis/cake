/**
 * Given the array of IDs, which contains many duplicate integers
 * and one unique integer, find the unique integer.
 * bitwise operations AND, OR, XOR, NOT and bit shifts.
 *
 * When to maybe use bit manipulation:
 * 1. You want to multiply or divide by 2 (use a left shift
 * to multiply by 2, right shift to divide by 2).
 * 2. You want to "cancel out" matching numbers (use XOR).
 */

/**
 * Solution 1
 * @param {Array} arrID
 */
function findUniqueID(arrID) {
    const map = new Map();
    let unique = null;

    for (let i = 0; i < arrID.length; i++) {
        if (!map.get(arrID[i])) {
            map.set(arrID[i], 1);
            unique = arrID[i];
            return;
        }

        map.set(arrID[i], map.get(arrID[i]) + 1);
    }

    if (!map.get(unique) || map.get(unique) <= 1) {
        return unique;
    }
}

const ids = [a, b, c, b, a, d, d, e, e, f, f, a, b];
console.log(findUniqueID(ids));

/**
 * Solution 2:
 * XOR
 */

function findUniqueDeliveryId(deliveryIds) {
    var uniqueDeliveryId = 0;

    deliveryIds.forEach(function(deliveryId) {
        uniqueDeliveryId ^= deliveryId;
    });

    return uniqueDeliveryId;
}
