/* Given the array of IDs, which contains many duplicate integers 
and one unique integer, find the unique integer. */

// Time / space
// O(n) / O(n)
function findUniqueID(arrID) {
    const map = new Map()
    let unique = null;

    for(let i = 0; i < arrID.length; i++) {
        if(!map.get(arrID[i])) {
            map.set(arrID[i], 1)
            unique = arrID[i]
            return;
        }

        map.set(arrID[i], map.get(arrID[i]) + 1)
    }

    if(!map.get(unique) || map.get(unique) <= 1) {
        return unique;
    }
}

const ids = [a,b,c,b,a,d,d,e,e,f,f,a,b]
console.log(findUniqueID(ids))