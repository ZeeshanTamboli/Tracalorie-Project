// Storage Controller



// Item Controller
const ItemCtrl = (() => {

  //Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / Set
  const data = {
    item: [
      {id: 0, name: 'Steak Dinner', calories: 1400},
      {id: 1, name: 'Cookie', calories: 400},
      {id: 0, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  //Public Methods
  return {
    logData() {
      return data;
    }
  }

})();



// UI Controller
const UICtrl = (() => {
  
  //Public methods
  return {

  }
})();



// App Controller
const App = ((ItemCtrl, UICtrl) => {

  //Public methods
  return {
    init() {
      console.log('Initializing App....');
    }
  }
})(ItemCtrl, UICtrl);

//Initialize App
App.init();