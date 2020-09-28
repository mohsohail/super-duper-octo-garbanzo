import { types } from "mobx-state-tree";
import Item from "./Item";

const ItemsList = types.model("ItemsList", {
  items: types.array(Item),
});

export default ItemsList;
