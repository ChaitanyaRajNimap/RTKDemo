const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/iceCream/iceCreamSlice").iceCreamActions;

console.log("Initial state : ", store.getState());

//When using with middleware
// const unsubscribe = store.subscribe(() => {});

//Subscribing to store
const unsubscribe = store.subscribe(() => {
  console.log("Updated state : ", store.getState());
});

//Dispatching actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(2));

//Unsubscribing store
unsubscribe();
