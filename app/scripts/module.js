(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ArcCamera = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ArcCamera = ArcCamera;
  function ArcCamera(canvas, scene) {
    //should the cameras be attached to the scene or the player
    var arcCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
    arcCamera.attachControl(canvas, false);
    return arcCamera;
  }
});

},{}],2:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.MageClass = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var MageClass =
  /*skills 100-199*/
  function MageClass() {
    _classCallCheck(this, MageClass);

    this._name = "Mage";
    this._stats = {
      str: -1,
      dex: -1,
      int: 5,
      char: 0,
      apt: 3,
      con: -2
    };
  };

  exports.default = MageClass;
});

},{}],3:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.PaladinClass = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var PaladinClass =
  /*skills 400-499*/
  function PaladinClass() {
    _classCallCheck(this, PaladinClass);

    this._name = "Paladin";
    this._stats = {
      str: 2,
      dex: -2,
      int: -1,
      char: 3,
      apt: 1,
      con: 2
    };
  };

  exports.default = PaladinClass;
});

},{}],4:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.RogueClass = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var RogueClass = function RogueClass() {
    _classCallCheck(this, RogueClass);

    this._name = "Rogue";
    /*skills 300-399*/
    this.classStats = "i am a Rogue with these stats";
    this._stats = {
      str: 0,
      dex: 5,
      int: -2,
      char: 3,
      apt: 0,
      con: -1
    };
  };

  exports.default = RogueClass;
});

},{}],5:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.WarriorClass = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var WarriorClass =
  /*skills 200-299*/
  function WarriorClass() {
    _classCallCheck(this, WarriorClass);

    this._name = "Warrior";
    this._stats = {
      str: 4,
      dex: 1,
      int: -1,
      char: -1,
      apt: -1,
      con: 3
    };
  };

  exports.default = WarriorClass;
});

},{}],6:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./WorldScene.js", "./PlayerActor.js", "./ArcCamera.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./WorldScene.js"), require("./PlayerActor.js"), require("./ArcCamera.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.WorldScene, global.PlayerActor, global.ArcCamera);
    global.GameInstance = mod.exports;
  }
})(this, function (exports, _WorldScene, _PlayerActor, _ArcCamera) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _PlayerActor2 = _interopRequireDefault(_PlayerActor);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var GameInstance = function () {
    /*TODO: at some point the GameInstance should stop asking the Player Account for information
    * It should already have the object that it needs to build the player actor
    *
    * */

    function GameInstance() {
      _classCallCheck(this, GameInstance);

      this._playerAccount = null;
      this._playerCharactersArr = [];
      this._canvas = document.querySelector("#renderCanvas");
      this._engine = new BABYLON.Engine(this._canvas, true);
      this._scene = new _WorldScene.WorldScene(this._engine);
      this._camera = new _ArcCamera.ArcCamera(this._canvas, this._scene);
      this._playerActorPlayer = {};
    }

    _createClass(GameInstance, [{
      key: "validatePlayerAccount",
      value: function validatePlayerAccount(playerAccount) {
        /*TODO: if player account is valid set it, this may need to be a seperate function for setting and validating
        * in which case it may return a boolean for the validation*/
        this._playerAccount = playerAccount;
      }
    }, {
      key: "makeAccountPlayer",
      value: function makeAccountPlayer() {
        this._playerActorPlayer = new _PlayerActor2.default(this._playerAccount);
        /*get player info from DB account and setup player*/
        /*
        * TODO: make a PlayerAccount Object to Query the game object for information
        * the game object will be responsible for facilitating the instantiation of
        * object the Player Account object will house the specific data for the client
        * verified by the database
        *
        * */
        this._playerActorPlayer.init();
        /*_playerActorPlayer.getCharacterItems();*/
      }
    }, {
      key: "addPlayerToScene",
      value: function addPlayerToScene() {
        /*TODO: add validation error handling for the method variables*/
        var playerAccount = this._playerAccount;
        var pos = playerAccount.character.location;
        this._playerActorPlayer.playerModel = BABYLON.Mesh.CreateSphere(playerAccount.character.archetype, 8, 1, this._scene);
        this._playerActorPlayer.position = new BABYLON.Vector3(pos.x, pos.y, pos.z);
      }
    }, {
      key: "setPlayerToInstance",
      value: function setPlayerToInstance() {
        this._playerCharactersArr.push(this._playerAccount.character);
      }
    }, {
      key: "player",
      get: function get() {
        return this._playerActorPlayer;
      }
    }, {
      key: "engine",
      get: function get() {
        return this._engine;
      }
    }, {
      key: "scene",
      get: function get() {
        return this._scene;
      }
    }, {
      key: "camera",
      get: function get() {
        return this._camera;
      }
    }, {
      key: "canvas",
      get: function get() {
        return this._canvas;
      }
    }]);

    return GameInstance;
  }();

  exports.default = GameInstance;
});

},{"./ArcCamera.js":1,"./PlayerActor.js":9,"./WorldScene.js":16}],7:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.Items = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Items = Items;


  /*SystemJS.import('Items/ItemDB.js');*/
  function Items() {

    /*TODO: this function will facilitate the connection to the inventory tables on the DB
    *
    *
    *
    * */

    return this;
  }

  Items.prototype.getCharacterItems = function (playerActor) {
    var characterInvArr = playerActor.character.items;
    var itemDatabase = new ItemDB();
    var dbresult = [];
    itemDatabase.connect();

    for (var i = 0; i < characterInvArr.length; i++) {
      var itemID = characterInvArr[i];

      /*once each item is read it will need to be sorted into inventory and equipped by reading a flag
      * the new bjects should be pushed into the items array in 2 new objs accordingly
      *
      *
      * */
      dbresult.push(itemDatabase.fetch(itemID));
    }

    itemDatabase.close('finished getting items');

    return dbresult;
  };
});

},{}],8:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.PlayerAccount = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var PlayerAccount = function PlayerAccount() {
    _classCallCheck(this, PlayerAccount);

    this.accountID = "xFER3ik9l";
    this.accountType = "VIP";
    this.accountStatus = "Current";

    this.characterIDArr = ['12345mage', "12345warrior", "12345rogue", "12345paladin"];
    this.character = {
      characterID: "12345warrior",
      archetype: "warrior",
      race: 'human',
      age: 25,
      items: ['itm10000', 'itm20000'],
      location: { x: 0, y: 0, z: 1 }
    };
  };

  exports.default = PlayerAccount;
});

},{}],9:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Items.js", "./PlayerClass.js", "./PlayerRace.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Items.js"), require("./PlayerClass.js"), require("./PlayerRace.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Items, global.PlayerClass, global.PlayerRace);
    global.PlayerActor = mod.exports;
  }
})(this, function (exports, _Items, _PlayerClass, _PlayerRace) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _PlayerClass2 = _interopRequireDefault(_PlayerClass);

  var _PlayerRace2 = _interopRequireDefault(_PlayerRace);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var PlayerActor = function () {
    /*The player actor should graft things from the playerAccount and other entities like Items, Skills,Archetypes*/
    function PlayerActor(playerAccount) {
      _classCallCheck(this, PlayerActor);

      this._baseStatNum = 10;
      this._stats = {
        str: 0,
        dex: 0,
        int: 0,
        char: 0,
        apt: 0,
        con: 0
      };

      this._character = playerAccount.character;
      this._animations = [];
      this._class = new _PlayerClass2.default(this._character.archetype);
      this._race = new _PlayerRace2.default(this._character.race);

      this._items = {
        eq: {},
        inv: {}
      };

      /*this should call the account to see what has been saved to his inventory*/
      this.skills = []; /*this should call the account to see what skill IDs the account has available*/

      this._age = {};

      this._model = {};
    }

    _createClass(PlayerActor, [{
      key: "initStats",
      value: function initStats() {
        /*if no arg passed then get them all*/
        var baseStatNum = this._baseStatNum;
        var archeTypeStatMod = this._class.stats;
        var racialStatMod = this._race.stats;

        for (var key in this._stats) {

          var randomBaseStat = Math.random() * baseStatNum + 5;
          var modifiedStat = Math.ceil(randomBaseStat) + archeTypeStatMod[key] * 1 + racialStatMod[key] * 1;
          if (modifiedStat < 5) {
            modifiedStat = 5;
          }
          this._stats[key] = modifiedStat;
        }
      }
    }, {
      key: "init",
      value: function init() {
        this.initStats();
      }
    }, {
      key: "getCharacterItems",
      value: function getCharacterItems() {
        var self = this;
        var items = new _Items.Items();

        this.items.objArr = items.getCharacterItems(self);

        /* if(dbresult.equipped){
         characterInvArr.eq[itemID] = dbresult;
         }else{
         characterInvArr.inv[itemID] = dbresult;
         }*/
        console.log('itams: ', this.items.objArr);
      }
    }, {
      key: "stats",
      get: function get() {

        console.log("here is the class ", this._class.name);
        console.log("here are the class stats ", this._class.stats);
        console.log("here are the modified stats", this._stats);
      }
    }, {
      key: "playerModel",
      set: function set(meshObj) {
        this._model = meshObj;
      },
      get: function get() {
        return this._model;
      }
    }]);

    return PlayerActor;
  }();

  exports.default = PlayerActor;
});

},{"./Items.js":7,"./PlayerClass.js":10,"./PlayerRace.js":11}],10:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ArcheTypes/MageClass.js", "./ArcheTypes/WarriorClass.js", "./ArcheTypes/PaladinClass.js", "./ArcheTypes/RogueClass.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ArcheTypes/MageClass.js"), require("./ArcheTypes/WarriorClass.js"), require("./ArcheTypes/PaladinClass.js"), require("./ArcheTypes/RogueClass.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.MageClass, global.WarriorClass, global.PaladinClass, global.RogueClass);
    global.PlayerClass = mod.exports;
  }
})(this, function (exports, _MageClass, _WarriorClass, _PaladinClass, _RogueClass) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _MageClass2 = _interopRequireDefault(_MageClass);

  var _WarriorClass2 = _interopRequireDefault(_WarriorClass);

  var _PaladinClass2 = _interopRequireDefault(_PaladinClass);

  var _RogueClass2 = _interopRequireDefault(_RogueClass);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var PlayerClass = function () {
    function PlayerClass(className) {
      _classCallCheck(this, PlayerClass);

      this._archetypeListObj = {
        mage: new _MageClass2.default(),
        warrior: new _WarriorClass2.default(),
        paladin: new _PaladinClass2.default(),
        rogue: new _RogueClass2.default()
      };

      this._archetype = this._archetypeListObj[className];
    }

    _createClass(PlayerClass, [{
      key: "name",
      get: function get() {
        return this._archetype._name;
      }
    }, {
      key: "stats",
      get: function get() {
        return this._archetype._stats;
      }
    }]);

    return PlayerClass;
  }();

  exports.default = PlayerClass;
});

},{"./ArcheTypes/MageClass.js":2,"./ArcheTypes/PaladinClass.js":3,"./ArcheTypes/RogueClass.js":4,"./ArcheTypes/WarriorClass.js":5}],11:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Race/HumanRace.js", "./Race/ElfRace.js", "./Race/SpiderRace.js", "./Race/DragonRace.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Race/HumanRace.js"), require("./Race/ElfRace.js"), require("./Race/SpiderRace.js"), require("./Race/DragonRace.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.HumanRace, global.ElfRace, global.SpiderRace, global.DragonRace);
    global.PlayerRace = mod.exports;
  }
})(this, function (exports, _HumanRace, _ElfRace, _SpiderRace, _DragonRace) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _HumanRace2 = _interopRequireDefault(_HumanRace);

  var _ElfRace2 = _interopRequireDefault(_ElfRace);

  var _SpiderRace2 = _interopRequireDefault(_SpiderRace);

  var _DragonRace2 = _interopRequireDefault(_DragonRace);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var PlayerRace = function () {
    function PlayerRace(raceName) {
      _classCallCheck(this, PlayerRace);

      this._raceListObj = {

        human: new _HumanRace2.default(),
        /*  vampire:  new VampireRace(),*/
        elf: new _ElfRace2.default(),
        spider: new _SpiderRace2.default(),
        dragon: new _DragonRace2.default()

      };

      this._race = this._raceListObj[raceName];
    }

    _createClass(PlayerRace, [{
      key: "name",
      get: function get() {
        return this._race._name;
      }
    }, {
      key: "stats",
      get: function get() {
        return this._race._stats;
      }
    }]);

    return PlayerRace;
  }();

  exports.default = PlayerRace;
});

},{"./Race/DragonRace.js":12,"./Race/ElfRace.js":13,"./Race/HumanRace.js":14,"./Race/SpiderRace.js":15}],12:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.DragonRace = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DragonRace = function DragonRace() {
    _classCallCheck(this, DragonRace);

    this._name = "Dragon";
    this._stats = {
      str: -1,
      dex: -1,
      int: 5,
      char: 0,
      apt: 3,
      con: -2

    };
  };

  exports.default = DragonRace;
});

},{}],13:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ElfRace = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ElfRace = function ElfRace() {
    _classCallCheck(this, ElfRace);

    this._name = "Elven";
    this._stats = {
      str: -2,
      dex: 1,
      int: 1,
      char: 1,
      apt: 1,
      con: -2
    };
  };

  exports.default = ElfRace;
});

},{}],14:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.HumanRace = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var HumanRace = function HumanRace() {
    _classCallCheck(this, HumanRace);

    this._name = "Human";
    this._stats = {
      str: 1,
      dex: 1,
      int: 1,
      char: 1,
      apt: 1,
      con: 1
    };
  };

  exports.default = HumanRace;
});

},{}],15:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.SpiderRace = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SpiderRace = function SpiderRace() {
    _classCallCheck(this, SpiderRace);

    this._name = "Spider";
    this._stats = {
      str: -1,
      dex: 2,
      int: -1,
      char: 2,
      apt: -1,
      con: -1
    };
  };

  exports.default = SpiderRace;
});

},{}],16:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.WorldScene = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WorldScene = WorldScene;
  function WorldScene(engine) {
    // Now create a basic Babylon Scene object
    var worldScene = new BABYLON.Scene(engine);
    // Change the scene background color to green.
    worldScene.clearColor = new BABYLON.Color3(1, 1, 1);
    return worldScene;
  }
});

},{}],17:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../Package/scripts/GameInstance.js", "../Package/scripts/PlayerAccount.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("../Package/scripts/GameInstance.js"), require("../Package/scripts/PlayerAccount.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.GameInstance, global.PlayerAccount);
    global.main = mod.exports;
  }
})(this, function (_GameInstance, _PlayerAccount) {
  "use strict";

  var _GameInstance2 = _interopRequireDefault(_GameInstance);

  var _PlayerAccount2 = _interopRequireDefault(_PlayerAccount);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  //import GameUtils from "../Package/scripts/GameUtils.js";
  var gameInstance, player;

  //var gameUtils = new GameUtils() ;
  //console.log(gameUtils);


  //var scriptArr = ['PlayerRace.js','PlayerClass.js','GameDB.js','Items.js','Items/ItemDB.js'];


  createScene();

  // -------------------------------------------------------------
  // Here begins a function that we will 'call' just after it's built
  function createScene() {
    /* TODO: more specific playerAccount info needs to be retrieved from database and passed into the gameInstance*/
    /*the player account should have objects ready to finish fleshing out the playerActor
     * it should also send an ID to the DB and return a character object
     * */
    var playerAccount = new _PlayerAccount2.default();
    /*********************************************end************************************************************/

    gameInstance = new _GameInstance2.default();

    var scene = gameInstance.scene;

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = .5;

    var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);

    gameInstance.validatePlayerAccount(playerAccount); /*TODO: This maybe could be a boolean return*/

    gameInstance.makeAccountPlayer();
    gameInstance.addPlayerToScene();
    player = gameInstance.player;
    console.log(player);
    //gameInstance.setPlayerToInstance();

    startEngine(gameInstance);
  }

  function startEngine(gameInstance) {
    windowCanvasResizeEvent(gameInstance);
    // Register a render loop to repeatedly render the scene
    gameInstance.engine.runRenderLoop(function () {
      //player.position.x +=.005;
      //scene.activeCamera.alpha += .01;
      gameInstance.scene.render();
    });
  }

  function windowCanvasResizeEvent(gameInstance) {
    window.addEventListener("resize", function () {
      gameInstance.engine.resize();
    });
  }
  // Watch for browser/canvas resize events
});

},{"../Package/scripts/GameInstance.js":6,"../Package/scripts/PlayerAccount.js":8}]},{},[17]);
