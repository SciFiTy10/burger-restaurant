import { cartReducer } from "../cartReducer";

describe("loading items", () => {
  //initialize an empty array
  let initialState = [];
  //initialize an array to be loaded with values from localStorage
  let loadedState = [];
  beforeEach(() => {
    //set an existing item in localStorage
    localStorage.setItem(
      "cart",
      JSON.stringify([
        {
          id: 1,
          title: "Royale With Cheese",
          price: 9.99,
          amount: 1,
        },
        {
          id: 2,
          title: "What Burger",
          price: 10.99,
          amount: 2,
        },
      ])
    );
    //load the initial state via the existing cart from localStorage
    loadedState = JSON.parse(localStorage.getItem("cart"));
  });

  afterEach(() => {
    //clear localStorage
    localStorage.clear();
    //reset the loadedState
    loadedState.splice(0, initialState.length);
  });

  it("should load all items from local storage", () => {
    const updateAction = {
      type: "LOAD_ITEMS",
      payload: loadedState,
    };
    const updatedState = cartReducer(initialState, updateAction);
    expect(updatedState).toEqual([
      {
        id: 1,
        title: "Royale With Cheese",
        price: 9.99,
        amount: 1,
      },
      {
        id: 2,
        title: "What Burger",
        price: 10.99,
        amount: 2,
      },
    ]);
  });
});
