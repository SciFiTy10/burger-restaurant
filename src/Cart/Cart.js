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
                    <MenuItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      amount={1}
                      onItemChange={ctx.onItemChange}
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
