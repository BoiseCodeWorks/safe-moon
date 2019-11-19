import store from "../store.js";

class GameService {
  buyUpgrade() {
    if (store.State.count < store.State.pickaxe.price) {
      throw new Error("You broke");
    }

    store.State.count -= store.State.pickaxe.price;
    store.State.pickaxe.quantity++;
    store.State.pickaxe.price *= 1.25;
  }

  updateCount() {
    let n = 1;
    n += store.State.pickaxe.quantity * store.State.pickaxe.multiplier;

    store.State.count += n;
  }
}

const GAMESERVICE = new GameService();

export default GAMESERVICE;
