import PlayerClass from "../PlayerClass"
export default class MageClass extends PlayerClass{
/*skills 100-199*/
  constructor(){
    super();
    this._name = "Mage";
    this._stats = {
      str:  -2,
      dex:  -1,
      int:  3,
      char: 0,
      apt:  2,
      con:  -2
    };

  }


}





