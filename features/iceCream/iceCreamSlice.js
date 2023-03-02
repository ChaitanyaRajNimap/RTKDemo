const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

//Initial state for slice
const initialState = {
  numOfIceCreams: 20,
};

//Creating slice
const iceCreamSlice = createSlice({
  name: "iceCream", //Name of a slice
  initialState, //Defining slice initial state
  //Defining reducers mapping
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  //Defining extra reducers (Buy 1 cake and get 1 ice-cream free)
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIceCreams--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
