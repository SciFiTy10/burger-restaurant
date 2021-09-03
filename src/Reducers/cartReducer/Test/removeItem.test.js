import { cartReducer } from "../cartReducer";

describe("removing one of an item from the cartReducer", () => {
  //initialize an array
  const initialState = [];
  beforeEach(() => {
    //add an item to the array
    initialState.push({
      id: 1,
      title: "Royale With Cheese",
      price: 9.99,
      amount: 2,
    });
  });

  afterEach(() => {
    //reset the original array
    initialState.splice(0, initialState.length);
  });

  it("should remove one of an item from the cart and decrement its amount", () => {
    const updateAction = {
      type: "REMOVE_ITEM",
      payload: {
        id: 1,
        title: "Royale With Cheese",
        price: 9.99,
        amount: 1,
      },
    };
    const updatedState = cartReducer(initialState, updateAction);
    expect(updatedState).toEqual([
      { id: 1, title: "Royale With Cheese", price: 9.99, amount: 1 },
    ]);
  });
});
