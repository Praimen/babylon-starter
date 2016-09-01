
(function (){

  var itemsCollection = {

    itm20000:{
      name: "sword of finding",
      type: "weapon",
      damage: 20,
      bal: 10,
      wgt: 15,
      lor: 13,
      stack: false,
      desc: "This is a smallish blade that begs you to ask a question",
      effect_skill: ['locate','track']

    },
    itm10000:{
      name: "vial of mending",
      type: "potion",
      target:"self",
      bal: 15,
      wgt: 1,
      lor: 15,
      stack: true,
      desc: "this vial is filled with a reddish liquid",
      effect_skill: ['cure_minor']
    },
    itm30000:{
      name: "common hide armor",
      type: "armor",
      target: 'torso',
      bal: 5,
      wgt: 5,
      lor: 5,
      stack: true,
      desc: "this is composed of stitched animal hide",
      effect_skill: ['defense']
    }



  };

  return itemsCollection;
})();
