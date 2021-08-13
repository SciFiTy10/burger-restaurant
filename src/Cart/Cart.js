import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
} from "@material-ui/core";
import { AppContext } from "../Context/app-context";

const Cart = () => {
  const ctx = useContext(AppContext);
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <List component="nav" aria-label="cart">
          {ctx.cart.length > 0
            ? ctx.cart.map((item) => {
                return (
                  <>
                    <CartItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      amount={item.amount}
                      onAddItem={ctx.onAddItem}
                    />
                    <Divider />
                  </>
                );
              })
            : null}
        </List>
        <CartTotal />
      </CardContent>
      <CardActions>
        <Button>Close</Button>
        <Button>Order</Button>
      </CardActions>
    </Card>
  );
};

export default Cart;
