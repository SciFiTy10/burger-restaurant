import { MenuItem } from "./MenuItem";

export type Menu = MenuItem & {
  items: Array<MenuItem>;
};
