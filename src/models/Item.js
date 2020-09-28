import { types } from "mobx-state-tree";

const Item = types.model("item", {
  name: types.string,
  quantiy: types.number,
  price: types.number,
});

export default Item;
