/*

How can I trim down the amount of space taken up by a web crawler that stores a set of visited URLs?
The crawler will only visit a URL from a page that hasn't been visited now.

Solution: Use a trie data structure

Use a nested object with keys as sections of the URL

*/

// Naive solution 1 - nested objects
// visited['www.']['google.com'] = true and visited['www.']['interviewcake.com'] = true.

visited = {
    "www.": {
        "google.com": true,
        "interviewcake.com": true
    },
    "stg1.": {
        "experian.com": true
    }
};

// Space 
// To store all possible permutations of 1, 2, 3, 4, or 5 character URLs,
// O(n26^n) : n26^n + (n-1)26^(n-1) + ... + 1 * 26^1 -------------- that's alot of memory needed

// Solution 2 - Trie, recursively share prefixes
// Example: google.com
visited["g"]["o"]["o"]["g"]["l"]["e"]["."]["c"]["o"]["m"]["*"] = true;
// * marks the end of an entry. So how do you implement a trie? Nested objects, nodes and pointers, or combination of both.

// Evaluate the pros and cons of the different implementations

class Trie {
    constructor() {
        this.rootNode = {};
    }

    addWord(word) {
        let currentNode = this.rootNode;
        let isNewWord = false;

        // Work down the trie, add nodes as necessary,
        // track whether new nodes are added
        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            if (!currentNode.hasOwnProperty(char)) {
                isNewWord = true;
                currentNode[char] = {};
            }

            currentNode = currentNode[char];
        }

        if (!currentNode.hasOwnProperty("End of Word")) {
            isNewWord = true;
            currentNode["End of Word"] = {};
        }

        return isNewWord;
    }
}

// Space
// O(26^n) : 26^n + 26^(n-1) + ... + 26^1
// The first layer of nodes has 26 nodes, one for each letter. The second layer
// has 26 nodes, one at each first layer node.

// Takeaway: Start with a small optimization, and ask "how can we can take 
// this same idea even further?"













