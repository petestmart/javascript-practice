console.log('functionalScript Ready');

// Learning Functional Programming with JavaScript - LinkedIn Learning Course
// https://www.linkedin.com/learning/learning-functional-programming-with-javascript/welcome

// ** OOP Example ** //

class ShoppingList {
    constructor(items) {
        this.items = items
    }
    addItem(item) {
        this.items.push(item)
    }
}

class ShoppingItem {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

// Creating an object with OOP
// Creates a new object for each piece of data
// OOP actually mutates the data
let myShoppingList = new ShoppingList([
    new ShoppingItem("milk", 4.99),
    new ShoppingItem("eggs", 3.99),
    new ShoppingItem("beer", 6.99)
])

myShoppingList.addItem(
    New ShoppingItem("bananas", 1.99)
)

// ** Functional Programming Example ** //
// This is represented by the same thing as above

function addItem(list, item) {
    return list.concat(item)
}

// Creating an object with FP
// Simple hash with name and value keys
// Less concerned with defining everything
// More concerned with raw data and what operations and transformations can be performed on it
const myShoppingList = [
    { name: "milk", price: 4.99},
    { name: "eggs", price: 3.99},
    { name: "beer", price: 6.99}
]

// Functional creating of new object gives a new name (OOP doesn't always provide context when transforming the state)
const nextWeekShoppingList = 
    addItem(myShoppingList,
        {name: "bananas", price: 1.99})

