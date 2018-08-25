// Storage Controller

// Item Controller
const ItemCtrl = (() => {
  //Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / Set
  const data = {
    items: [
      { id: 0, name: 'Steak Dinner', calories: 1400 },
      { id: 1, name: 'Cookie', calories: 400 },
      { id: 2, name: 'Eggs', calories: 300 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  //Public Methods
  return {
    getItems() {
      return data.items;
    },
    addItem(name, calories) {
      //Create ID
      let ID;
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      //Calories to number
      const intCalories = parseInt(calories);

      //Create new item
      const newItem = new Item(ID, name, intCalories);

      //Add to items array
      data.items.push(newItem);

      return newItem;
    },
    logData() {
      return data;
    }
  };
})();

// UI Controller
const UICtrl = (() => {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  };

  //Public methods
  return {
    populateItemList(items) {
      let html = '';

      items.forEach(item => {
        html += `
        <li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
        </li>
        `;
      });

      //Append li to ul
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getItemInput() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      };
    },

    getSelectors() {
      return UISelectors;
    }
  };
})();

// App Controller
const App = ((ItemCtrl, UICtrl) => {
  //Load Event Listeners
  const loadEventListeners = () => {
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    //Add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);
  };

  //Add item submit
  const itemAddSubmit = e => {
    //Get form input from UI Ctrl
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if (input.name !== '' && input.calories !== '') {
      //Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
    } else {
      alert('All inputs are required!!');
    }

    e.preventDefault();
  };

  //Public methods
  return {
    init() {
      console.log('Initializing App....');

      //Fetch items from data structure
      const items = ItemCtrl.getItems();

      //Populate list with items
      UICtrl.populateItemList(items);

      //Load Event listeners
      loadEventListeners();
    }
  };
})(ItemCtrl, UICtrl);

//Initialize App
App.init();
