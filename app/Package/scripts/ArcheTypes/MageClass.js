/**
 * Created by B16552 on 8/10/2016.
 */
import PlayerClass from "../../../Package/scripts/PlayerClass.js";
export default class MageClass extends PlayerClass{
/*skills 100-199*/
  constructor(){
    super();
    this._name = "Mage class";
    this._stats = {
      str:  -1,
      dex:  -1,
      int:  5,
      char: 0,
      apt:  3,
      con:  -2
    };
  }

  get name(){
    return this._name;
  }

}





