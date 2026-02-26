// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = ["grapes","bread", "tea","apple","banana","coffe"
    // add more items here
];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const list = document.getElementById('list');
const textInput = document.getElementById('text');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');



// 3. Write a function to display all items in the #list element
function updateList() {
    // add your code here
    list.innerHTML = "";

    // if no items, show empty message
    if (todoItems.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.textContent = "No items yet…";
        emptyMessage.classList.add("empty");
        list.appendChild(emptyMessage);
        return;
    }

    // loop through items and add to page
    todoItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;

        // remove item when clicked
        li.addEventListener("click", () => {
            todoItems.splice(index, 1);
            updateList();
        });

        list.appendChild(li);
    });
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    const newItem = textInput.value.trim();

    // don't add empty text
    if (newItem === "") return;

    todoItems.push(newItem);
    textInput.value = ""; // clear input

    updateList();
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    todoItems.sort((a, b) => a.localeCompare(b));
    updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    todoItems = [];
    updateList();
});