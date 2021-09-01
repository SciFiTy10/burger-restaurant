import { cartReducer } from "../cartReducer";

describe("ordering items", () => {
  //initialize an array
  const initialState = [];
  beforeEach(() => {
    //add an item to the array
    initialState.push({
      id: 1,
      title: "Royale With Cheese",
      price: 9.99,
      amount: 1,
    });
    //add a 2nd item
    initialState.push({
      id: 2,
      title: "What Burger",
      price: 10.99,
      amount: 2,
    });
  });

  afterEach(() => {
    //reset the original array
    initialState.splice(0, initialState.length);
  });

  it("should order all items in the cart", () => {
    const updateAction = {
      type: "ORDER_ITEMS",
      payload: [],
    };
    const updatedState = cartReducer(initialState, updateAction);
    expect(updatedState).toEqual([]);
  });
});
