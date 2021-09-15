import { ItemInfo } from "../Item/ItemInfo";
export type CartItem = ItemInfo & {
  amount: number;
};
