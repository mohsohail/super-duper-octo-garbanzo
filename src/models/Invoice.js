import { types } from "mobx-state-tree";
import ItemsList from "./ItemsList";

const Invoice = types
  .model("Invoice", {
    currency: types.string,
    is_paid: false,
    itemsList: types.optional(ItemsList, { items: [] }),
  })
  .actions((self) => {
    const markPaid = () => {
      return (self.is_paid = true);
    };
    return {
      markPaid,
    };
  })
  .views((self) => {
    const status = () => {
      return self.is_paid;
    };
    return {
      status,
    };
  });

export default Invoice;
