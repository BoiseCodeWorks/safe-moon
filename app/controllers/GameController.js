import store from "../store.js";
import GameService from "../services/GameService.js";

//PRIVATE PARTS
let _countElem = document.getElementById("count");

function _draw() {
  //update the UI
  _countElem.innerText = store.State.count.toFixed(2);
}

export default class GameController {
  // PUBLIC PARTS
  // STUFF THE USER CAN INTERACT WITH
  
  mine() {
    console.log("ARE WE MINING");
    GameService.updateCount();
    _draw();
  }

  buyUpgrade(){
    GameService.buyUpgrade()
    _draw()
  }


}
