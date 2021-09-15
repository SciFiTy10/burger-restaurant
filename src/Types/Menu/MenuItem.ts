import { ItemInfo } from "../Item/ItemInfo";

export type MenuItem = ItemInfo & {
  readonly description: string;
};
