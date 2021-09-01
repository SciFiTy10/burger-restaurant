import { cartReducer } from "../cartReducer";

describe("cartReducer", () => {
  const initialState = [];
  beforeEach(() => {
    initialState.push({
      id: 1,
      title: "Royale With Cheese",
      price: 9.99,
      amount: 1,
    });
  });

  it("should add a new item to the cart", () => {
    const updateAction = {
      type: "ADD_ITEM",
      payload: { id: 2, title: "What Burger", price: 10.99, amount: 1 },
    };
    const updatedState = cartReducer(initialState, updateAction);
    expect(updatedState).toEqual([
      { id: 1, title: "Royale With Cheese", price: 9.99, amount: 1 },
      { id: 2, title: "What Burger", price: 10.99, amount: 1 },
    ]);
  });

  it("should receive items that exist within the cart and increment their amount", () => {
    const updateAction = {
      type: "ADD_ITEM",
      payload: {
        id: 1,
        title: "Royale With Cheese",
        price: 9.99,
        amount: 1,
      },
    };
    const updatedState = cartReducer(initialState, updateAction);
    expect(updatedState).toEqual([
      { id: 1, title: "Royale With Cheese", price: 9.99, amount: 2 },
    ]);
  });
});
