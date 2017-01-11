

export default class PlayerAccount{
constructor(){
  /*TODO: build a test interface and..
  in the final implementation this should go out to the db and build an object
  based on the account info ID that would be passed into the constructor
   */
  this.accountID = "xFER3ik9l";
  this.accountType = "VIP";
  this.accountStatus = "Current";

  this.characterIDArr = ['12345mage',"12345warrior","12345rogue","12345paladin"];
  this.character = {
    characterID:"12345warrior",
    archetype:"warrior",
    race:'human',
    age: 25,
    items : ['itm10000','itm20000'],
    location:{x:0,y:0,z:1}
  };


}

}


