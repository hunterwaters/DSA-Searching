  
const BinarySearchTree = require('./binary-search-tree');
const Queue = require('./queue');


function binarySearch(arr, value, start = 0, end = arr.length - 1) {

    if(start > end) {
        return -1
    }
    let index = Math.floor((start + end) / 2);
    let item = arr[index]

    console.log(`start and end:` , start, end);
    if(item === value) {
        return index;
    }
    else if( item < value ) {
        return binarySearch(arr, value, index + 1, end);
    }
    //item greater then value
    else if(item > value) {
        return binarySearch(arr, value, start, index - 1);
    }
}

//REACT UI IN REACT-UI FILES

//FIND A BOOK
//express dewy decimal index as a search algo
const books = [
     { dewy: '003.445', title: 'a'},
     { dewy: '003.447', title: 'b'},
     { dewy: '003.447', title: 'c'},
     { dewy: '003.447', title: 'd'},
     { dewy: '003.450', title: 'e'},
];

function findBook(array, dewy, title) {
    //object.keys at beginning index
    const keys = Object.keys(array[0]);
    array.forEach(book => {
        if (book[keys[0]] === dewy && book[keys[1]] === title) {
            return book;
        }
    });
}
findBook(books, '003.449', 'c')


//searching in a BST

//implement different tree transversals
function treeTraversals() {
    let BST = new BinarySearchTree();
    BST.insert(25, '25');
    BST.insert(15, '15');
    BST.insert(50, '50');
    BST.insert(10, '10');
    BST.insert(24, '24');
    BST.insert(35, '35');
    BST.insert(70, '70');
    BST.insert(4, '4');
    BST.insert(12, '12');
    BST.insert(18, '18');
    BST.insert(31, '31');
    BST.insert(44, '44');
    BST.insert(66, '66');
    BST.insert(90, '90');
    BST.insert(22, '22');
    //inOrder() preOrder() postOrder()

    const preOrder = (bst) => {
        console.log({ preOrder: bst.key });
        if(bst.left) {
            preOrder(bst.left)
        }
        if(bst.right) {
            preOrder(bst.right)
        }
    };

    const inOrder = (bst) => {

        if(bst.left) {
            inOrder(bst.left);
        }
        console.log(`bst.key`, { inOrder: bst.key});
        if(bst.right) {
            inOrder(bst.right)
        }
    };
    const postOrder = (bst) => {
        if(pst.left) {
            postOrder(pst.left)
        }
        if(pst.right) {
            postOrder(pst.right)
        }
        console.log(`postOrder bst.key`, { postOrder: bst.key });
    }
    preOrder(BST);
    inOrder(BST);
    postOrder(BST);
}

//Write a program that will take this tree of commanding officers and outlines the ranking /officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.

function nextCommandingOfficer() {
    let BST  = new BinarySearchTree();
    BST.insert(5, 'Captain Picard');
    BST.insert(3, 'Captain Riker');
    BST.insert(6, 'Captain Data');
    
    BST.insert(8, 'Lt. Cmdr. Crusher');
    BST.insert(7, 'Lieutenant Selar');
    BST.insert(3, 'Lt. Cmdr. Worf');
    BST.insert(4, 'Lt. Cmdr. LaForge');
    BST.insert(1, 'Lt. security-officer');

    commanders(BST)
}

nextCommandingOfficer();


//MAX PROFIT
//write an algorithm to work out what the maximum profit you could make would be 
function maxProfit(array) {
    //start at 0
    let max = 0;
    //loop through the given array and set max
    for(let i = 0; i < array.length; i++) {
        if(array[i + 1] - array[i] > max) {
            max = array[i + 1] - array[i];
        }
    }
    console.log(`max:`, max);
    return max;
}
maxProfit([128, 97, 121, 123, 98, 97, 105]);

/*
//Linear Search
function indexOf(array,value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == value) {
            return i;
        }
    }
    return -1;
}

//Binary Searches
function binarySearch(array, value, start, end) {
    var start = start == undefined ? 0 : start;
    var end = end == undefine ? array.length : end;

    if(start > end) {
        reutrn -1;
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if(item == value) {
        return index;
    }
    else if(item < value) {
        return binarySearch(array,value, index + 1, end);
    }
    else if(item > value) {
        return binarySearch(array, value, start, index - 1);
    }
}

//Depth-first search (DFS)
class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null
        this.right = null;
    }
    dfs(values=[] ) {
        if(this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if(this.right) {
            values = this.right.dfs(values)
        }
        return values;
    }
    bfs(tree, values =[] ) {
        const queue = newQueue(); // Assuming a queue is already implemented
        const node = tree.root;
        queue.enqueue(node);
        while(queue.length) {
            const node = queue.dequeue(); // remove from the queue
            values.push(node.value); //add that value from the queue to the array

            if(node.left) {
                queue.enqueue(node.left) //add left child to the queue
            }
            if(node.right) {
                queue.enqueue(node.right); //add right child to the queue
            }
        }
        return values;
    }
}
*/
//HOW MANY SEARCHES
//given a sorted list, identify the sequence of numbers that each recirsive call will search to find 8






