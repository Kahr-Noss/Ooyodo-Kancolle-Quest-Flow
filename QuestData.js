/*QUESTS TO VERIFY
B83 req
B93 req
B97 req
F60
A79
B104

*/
const ICONS_LINK = {

  //consummables
  "Improvement material":"files/webpage/game_icons/Improvement_Material.png",
  "Development material":"files/webpage/game_icons/Development_Material.png",
  "Instant construction":"files/webpage/game_icons/Instant_construction.png",
  "Instant repair":"files/webpage/game_icons/Instant_repair.png",

  //items
  "Repair Team":"files/webpage/game_icons/Emergency_repair.png",
  "Mamiya":"files/webpage/game_icons/Mamiya.png",
  "Furniture box small":"files/webpage/game_icons/Furniture_box_small.png",
  "Furniture box medium":"files/webpage/game_icons/Furniture_box_medium.png",
  "Large furniture box":"files/webpage/game_icons/Furniture_box_large.png",
  "Skilled Crew Member":"files/webpage/game_icons/Skilled_Crew_Member.png",
  "Irako":"files/webpage/game_icons/Irako.png",
  "Combat Ration":"files/webpage/game_icons/Combat_Ration.png",
  "Combat Ration (Special Onigiri)":"files/webpage/game_icons/Combat_Ration.png",
  "Furniture Fairy":"files/webpage/game_icons/Furniture_fairy.png",
  "Medal":"files/webpage/game_icons/Medal.png",
  "Present box":"files/webpage/game_icons/Present_box.png",
  "Combat provision":"files/webpage/game_icons/Combat_Provisions.png",
  "New Model Gun Mount Improvement Material":"files/webpage/game_icons/New_Model_Gun_Mount_Improvement_Material.png",
  "Underway Replenishment":"files/webpage/game_icons/Underway_Replenishment.png",
  "Construction Corps":"files/webpage/game_icons/Construction_Corps.png",
  "Reinforcement Expansion":"files/webpage/game_icons/Reinforcement_expansion.png",
  "Headquarters Personnel":"files/webpage/game_icons/Headquarters_Personnel.png",
  "New Technology Aircraft Blueprint":"files/webpage/game_icons/New_Technology_Aircraft_Blueprint.png",
  "Ne Type Engine":"files/webpage/game_icons/Ne_Type_Engine.png",
  "Prototype Flight Deck Catapult":"files/webpage/game_icons/Prototype_Deck_Catapult.png",
  "Marriage Ring and Documents":"files/webpage/game_icons/Marriage_Papers.png",

  //equipment
  "Type 13 Air Radar Kai":"files/webpage/game_icons/Radar.png",
  "Type 22 Surface RADAR Kai 4":"files/webpage/game_icons/Radar.png",
  "Prototype 35.6cm Triple Gun Mount":"files/webpage/game_icons/RedGunHeavy.png",
  "Searchlight":"files/webpage/game_icons/Searchlight.png",
  "Skilled Carrier-based Aircraft Maintenance Personnel":"files/webpage/game_icons/SCAMP.png",
  "Type 1 AP Shell":"files/webpage/game_icons/AP_Shell.png",
  "Type 91 AP Shell":"files/webpage/game_icons/AP_Shell.png",
  "Type 93 Passive Sonar":"files/webpage/game_icons/Sonar.png",
  "Type 4 Passive Sonar":"files/webpage/game_icons/Sonar.png",
  "Type 3 Active Sonar":"files/webpage/game_icons/Sonar.png",
  "Type 3 Sonar":"files/webpage/game_icons/Sonar.png",
  "Type 3 Shell":"files/webpage/game_icons/T3_Shell.png",
  "25mm Triple Autocannon Mount":"files/webpage/game_icons/AA_gun.png",
  "25mm Triple Autocannon Mount (Concentrated Deployment)":"files/webpage/game_icons/AA_gun.png",
  "Daihatsu Landing Craft":"files/webpage/game_icons/LandingCraft.png",
  "53cm Submarine Bow Torpedo Mount (8 tubes)":"files/webpage/game_icons/Torpedo.png",
  "Prototype 61cm Sextuple (Oxygen) Torpedo Mount":"files/webpage/game_icons/Torpedo.png",
  "Late Model Bow Torpedo Mount (6 tubes)":"files/webpage/game_icons/Torpedo.png",
  "Type 91 Anti-Aircraft Fire Director":"files/webpage/game_icons/Aafd.png",
  "Special Type 2 Amphibious Tank":"files/webpage/game_icons/Special_Amphibious_Tank.png",
  "Drum Canister (Transport Use)":"files/webpage/game_icons/Drum.png",
  "Drum Canister":"files/webpage/game_icons/Drum.png",
  "New Kanhon Design Anti-torpedo Bulge (Large)":"files/webpage/game_icons/Armor_Bulge.png",
  "8cm High-angle Gun Kai + Additional Machine Guns":"files/webpage/game_icons/GreenGun.png",
  "New Kanhon Design Anti-torpedo Bulge (Medium)":"files/webpage/game_icons/Armor_Bulge.png",
  "Improved Kanhon Type Turbine":"files/webpage/game_icons/Engine.png",
  "Enhanced Kanhon Type Boiler":"files/webpage/game_icons/Engine.png",
  "12.7mm Single Machine Gun Mount":"files/webpage/game_icons/GreenGun.png",
  "7.7mm Machine Gun":"files/webpage/game_icons/AA_gun.png",
  "7.7mm AA Gun":"files/webpage/game_icons/AA_gun.png",
  "61cm Quintuple (Oxygen) Torpedo Mount":"files/webpage/game_icons/Torpedo.png",
  "61cm Quadruple (Oxygen) Torpedo Mount":"files/webpage/game_icons/Torpedo.png",
  "61cm Triple (Oxygen) Torpedo Mount":"files/webpage/game_icons/Torpedo.png",
  "61cm Triple Torpedo Mount":"files/webpage/game_icons/Torpedo.png",
  "25mm Twin Autocannon Mount":"files/webpage/game_icons/AA_gun.png",
  "25mm Single Autocannon Mount":"files/webpage/game_icons/AA_gun.png",
  "14cm Single Gun Mount":"files/webpage/game_icons/RedGunMedium.png",
  "12.7cm Twin High-angle Gun Mount":"files/webpage/game_icons/GreenGun.png",
  "15.2cm Single Gun Mount":"files/webpage/game_icons/RedGunMedium.png",
  "12.7cm Main Gun":"files/webpage/game_icons/GreenGun.png",
  "Secondary gun":"files/webpage/game_icons/YellowGun.png",
  "Heavy gun":"files/webpage/game_icons/RedGunHeavy.png",
  "Anti-Air gun":"files/webpage/game_icons/AA_gun.png",


  // planes
  "Ju 87C Kai":"files/webpage/game_icons/RedPlane.png",
  "Zuiun (631 Air Group)":"files/webpage/game_icons/Seaplane.png",
  "Zuiun (634 Air Group)":"files/webpage/game_icons/Seaplane.png",
  "Zuiun":"files/webpage/game_icons/Seaplane.png",
  "Seiran (631 Air Group)":"files/webpage/game_icons/Seaplane.png",
  "Type 2 Seaplane Fighter Kai (Skilled)":"files/webpage/game_icons/Seaplane_Fighter.png",
  "Kikka Kai":"files/webpage/game_icons/Jet-powered_Fighter-Bomber.png",
  "Prototype Keiun (Carrier-based Reconnaissance Model)":"files/webpage/game_icons/YellowPlane.png",
  "Type 1 Land-based Attack Aircraft Model 22A":"files/webpage/game_icons/Land-based_Attack_Aircraft.png",
  "Type 1 Land-based Attack Aircraft":"files/webpage/game_icons/Land-based_Attack_Aircraft.png",
  "Type 96 Land-based Attack Aircraft":"files/webpage/game_icons/Land-based_Attack_Aircraft.png",
  "Type 0 Fighter Model 53 (Iwamoto Squadron)":"files/webpage/game_icons/GreenPlane.png",
  "Zero Fighter Model 52A (w/ Iwamoto Flight)":"files/webpage/game_icons/GreenPlane.png",
  "Zero Fighter Model 21 (w/ Iwamoto Flight)":"files/webpage/game_icons/GreenPlane.png",
  "Zero Fighter Model 62 (Fighter-bomber / Iwai Squadron)":"files/webpage/game_icons/RedPlane.png",
  "Zero Fighter Model 52C (w/ Iwai Flight)":"files/webpage/game_icons/GreenPlane.png",
  "Type 0 Fighter Model 52 (Skilled)":"files/webpage/game_icons/GreenPlane.png",
  "Type 0 Fighter Model 21 (Skilled)":"files/webpage/game_icons/GreenPlane.png",
  "Type 97 Torpedo Bomber (Murata Squadron)":"files/webpage/game_icons/BluePlane.png",
  "Reppuu (601 Air Group)":"files/webpage/game_icons/GreenPlane.png",
  "Suisei (Egusa Squadron)":"files/webpage/game_icons/RedPlane.png",
  "Tenzan Model 12 (Tomonaga Squadron)":"files/webpage/game_icons/BluePlane.png",
  "Type 0 Fighter Model 63 (Fighter-bomber)":"files/webpage/game_icons/RedPlane.png",
  "Tenzan Model 12 (Murata Squadron)":"files/webpage/game_icons/BluePlane.png",
  "Kyoufuu Kai":"files/webpage/game_icons/Seaplane_Fighter.png",
  "Type 2 Seaplane Fighter Kai":"files/webpage/game_icons/Seaplane_Fighter.png",
  "PBY-5A Catalina":"files/webpage/game_icons/Large_Flying_Boat.png",
  "Type 97 Torpedo Bomber (Tomonaga Squadron)":"files/webpage/game_icons/BluePlane.png",
  "Tenzan":"files/webpage/game_icons/BluePlane.png",
  "Type 99 Dive Bomber (Egusa Squadron)":"files/webpage/game_icons/RedPlane.png",
  "Suisei":"files/webpage/game_icons/RedPlane.png",
  "Zero Fighter Model 52C (601 Air Group)":"files/webpage/game_icons/GreenPlane.png",
  "Reppuu":"files/webpage/game_icons/GreenPlane.png",
  "Type 97 Torpedo Bomber (Murata Squadron)":"files/webpage/game_icons/BluePlane.png",
  "Type 97 Torpedo Bomber":"files/webpage/game_icons/BluePlane.png",
  "Type 0 Fighter Model 21":"files/webpage/game_icons/GreenPlane.png",
  "Type 96 Fighter":"files/webpage/game_icons/GreenPlane.png",
  "Type 0 Fighter Model 52":"files/webpage/game_icons/GreenPlane.png",
  "Type 0 Fighter Model 52 (Skilled)":"files/webpage/game_icons/GreenPlane.png",
  "Type 0 Fighter Model 62 (Fighter-bomber)":"files/webpage/game_icons/RedPlane.png",
  "Saiun":"files/webpage/game_icons/YellowPlane.png",
  "Type 96 Fighter":"files/webpage/game_icons/GreenPlane.png",
  "Type 99 Dive Bomber":"files/webpage/game_icons/RedPlane.png",
  "Type 0 Reconnaissance Seaplane":"files/webpage/game_icons/Seaplane.png",
  "Shiden Kai 2":"files/webpage/game_icons/GreenPlane.png",
  "Prototype Seiran":"files/webpage/game_icons/Seaplane.png",
"Ryuusei":"files/webpage/game_icons/BluePlane.png",
"Zuiun (634 Air Group/Skilled)":"files/webpage/game_icons/Seaplane.png",
  //other
  "350 Ranking points":"files/webpage/game_icons/Ranking_point.png",
  "Fuel":"files/webpage/game_icons/Fuel.png",
  "Ammo":"files/webpage/game_icons/Ammo.png",
  "Steel":"files/webpage/game_icons/Steel.png",
  "Bauxite":"files/webpage/game_icons/Bauxite.png",
}


const ALL_QUESTS_LIST = {
  "A1":{
    "Jp":"はじめての「編成」！",
    "En":"The First Organization",
    "content":"Have 2 ships in your main fleet.",
    "tips":"",
    "ressources":{
      "F":"20",
      "A":"20",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["S","Shirayuki",1]
    ],
    "requires":[],
    "unlocks":["A2"],
    "period":"once",
    "needs":{}
  },
  "A2":{
    "Jp":"「駆逐隊」を編成せよ！",
    "En":"Organize a Destroyer Division",
    "content":"Have 4 Destroyers in your fleet",
    "tips":"",
    "ressources":{
      "F":"30",
      "A":"30",
      "S":"30",
      "B":"0"
    },
    "reward":[
      ["C","Instant construction",1]
    ],
    "requires":["A1"],
    "unlocks":["A3"],
    "period":"once",
    "needs":{}
  },
  "A3":{
    "Jp":"「水雷戦隊」を編成せよ！",
    "En":"Organize a Torpedo Squadron",
    "content":"Consists of a Light Cruiser as your flagship and 3 Destroyers",
    "tips":"",
    "ressources":{
      "F":"40",
      "A":"40",
      "S":"0",
      "B":"40"
    },
    "reward":[
      ["I","Repair Team",1]
    ],
    "requires":["A2"],
    "unlocks":["A4", "A5"],
    "period":"once",
    "needs":{}
  },
  "A4":{
    "Jp":"6隻編成の艦隊を編成せよ！",
    "En":"Organize a Fleet of 6 Ships",
    "content":"Have 6 ships in your fleet",
    "tips":"",
    "ressources":{
      "F":"50",
      "A":"0",
      "S":"50",
      "B":"0"
    },
    "reward":[
      ["A","Unlocks the second fleet",1],
      ["A","Unlocks the expeditions tab",1]
    ],
    "requires":["A3"],
    "unlocks":["A6", "A9"],
    "period":"once",
    "needs":{}
  },
  "A5":{
    "Jp":"軽巡2隻を擁する隊を編成せよ！",
    "En":"Organize a Fleet of 2 Light Cruisers",
    "content":"Have 2 Light Cruisers in your fleet",
    "tips":"",
    "ressources":{
      "F":"60",
      "A":"60",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["A3"],
    "unlocks":["A7","A8", "B29", "D1","B67","F11"],
    "period":"once",
    "needs":{}
  },
  "A6":{
    "Jp":"第2艦隊を編成せよ！",
    "En":"Organize the Second Fleet",
    "content":"Have a flagship in your second fleet",
    "tips":"",
    "ressources":{
      "F":"50",
      "A":"50",
      "S":"100",
      "B":"0"
    },
    "reward":[
      ["C","Instant construction",1]
    ],
    "requires":["A4"],
    "unlocks":["B3"],
    "period":"once",
    "needs":{}
  },
  "A7":{
    "Jp":"「重巡戦隊」を編成せよ！",
    "En":"Organize a Heavy Cruiser Division",
    "content":"Have 2 Heavy Cruisers in your fleet (Aviation Cruisers don't count)",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"70",
      "S":"0",
      "B":"30"
    },
    "reward":[
      ["C","Instant construction",1]
    ],
    "requires":["A5"],
    "unlocks":["A14","A12"],
    "period":"once",
    "needs":{}
  },
  "A8":{
    "Jp":"「天龍」型軽巡姉妹の全2艦を編成せよ！",
    "En":"Organize both Sisters of the Tenryuu-class Light Cruisers",
    "content":"Have Tenryuu and Tatsuta in your main fleet",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"100",
      "S":"100",
      "B":"50"
    },
    "reward":[
      ["C","Instant construction",2]
    ],
    "requires":["A5"],
    "unlocks":["A17"],
    "period":"once",
    "needs":{
      "S":["Tenryuu","Tatsuta"]
    }
  },
  "A9":{
    "Jp":"「水上機母艦」を配備せよ！",
    "En":"Deploy a Seaplane Tender",
    "content":"Have a Seaplane Tender in your fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["A4"],
    "unlocks":["A10", "A45","B87","A69"],
    "period":"once",
    "needs":{}
  },
  "A10":{
    "Jp":"「第六駆逐隊」を編成せよ！",
    "En":"Organize the 6th Destroyer Division",
    "content":"Have ONLY Akatsuki, Hibiki, Ikazuchi and Inazuma in your second fleet",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"150",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Repair Team",1]
    ],
    "requires":["A9"],
    "unlocks":["A28", "B12", "B42"],
    "period":"once",
    "needs":{
      "S":["Akatsuki","Hibiki","Ikazuchi","Inazuma"]
    }
  },
  "A11":{
    "Jp":"第2艦隊で空母機動部隊を編成せよ！",
    "En":"Organize a Carrier Task Force in Your Second Fleet",
    "content":"Have an Aircraft Carrier / Light Aircraft Carrier and 3 Destroyers in your SECOND fleet",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"0",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["C","Instant construction",2]
    ],
    "requires":["B3"],
    "unlocks":["B10"],
    "period":"once",
    "needs":{}
  },
  "A12":{
    "Jp":"「空母機動部隊」を編成せよ！",
    "En":"Organize a Carrier Task Force",
    "content":"Have an Aircraft Carrier / Light Aircraft Carrier and 3 Destroyers in your main fleet",
    "tips":"",
    "ressources":{
      "F":"50",
      "A":"0",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["A7"],
    "unlocks":["A13"],
    "period":"once",
    "needs":{}
  },
  "A13":{
    "Jp":"戦艦と重巡による主力艦隊を編成せよ！",
    "En":"Organize the Main Fleet with a Battleship and Heavy Cruisers",
    "content":"Have a Battleship and 2 Heavy Cruisers in your main fleet(Aviation Battleships don't count)",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"150",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant construction",2]
    ],
    "requires":["A12"],
    "unlocks":["A19", "A20","F32"],
    "period":"once",
    "needs":{}
  },
  "A14":{
    "Jp":"「川内」型軽巡姉妹の全3艦を編成せよ！",
    "En":"Organize All 3 Sisters of the Sendai-class Light Cruisers",
    "content":"Have Sendai, Jintsuu, and Naka in your main fleet",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"0",
      "S":"100",
      "B":"0"
    },
    "reward":[
      ["A","Unlocks the third fleet",1]
    ],
    "requires":["A7"],
    "unlocks":["A15", "G4"],
    "period":"once",
    "needs":{
      "S":["Sendai","Jintsuu","Naka"]
    }
  },
  "A15":{
    "Jp":"「妙高」型重巡姉妹の全4隻を編成せよ！",
    "En":"Organize All 4 Sisters of the Myoukou-class Heavy Cruisers",
    "content":"Have Myoukou, Nachi, Ashigara and Haguro in your main fleet",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"100",
      "S":"150",
      "B":"100"
    },
    "reward":[
      ["C","Instant repair",1],
      ["C","Development material",1]
    ],
    "requires":["A14"],
    "unlocks":["A16","F42"],
    "period":"once",
    "needs":{
      "S":["Myoukou", "Nachi", "Ashigara", "Haguro"]
    }
  },
  "A16":{
    "Jp":"「金剛」型による高速戦艦部隊を編成せよ！",
    "En":"Organize a Fast Battleship Force with the Kongou-class",
    "content":"Have Kongou, Hiei, Haruna and Kirishima in your main fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["A","Unlocks the fourth fleet",1]
    ],
    "requires":["A15"],
    "unlocks":["WF01"],
    "period":"once",
    "needs":{
      "S":["Kongou","Haruna","Hiei","Kirishima"]
    }
  },
  "A17":{
    "Jp":"「扶桑」型戦艦姉妹の全2隻を編成せよ！",
    "En":"Organize Both Sisters of the Fusou-class Battleships",
    "content":"Have Fusou and Yamashiro in your main fleet",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"200",
      "B":"200"
    },
    "reward":[
      ["C","Instant repair",1],
      ["C","Development material",1]
    ],
    "requires":["A8"],
    "unlocks":["A18"],
    "period":"once",
    "needs":{
      "S":["Fusou","Yamashiro"]
    }
  },
  "A18":{
    "Jp":"「伊勢」型戦艦姉妹の全2隻を編成せよ！",
    "En":"Organize Both Sisters of the Ise-class Battleships",
    "content":"Have Ise and Hyuuga in your main fleet",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"200",
      "S":"300",
      "B":"200"
    },
    "reward":[
      ["C","Instant repair",2],
      ["C","Development material",2]
    ],
    "requires":["A17"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "S":["Ise","Hyuuga"]
    }
  },
  "A19":{
    "Jp":"「南雲機動部隊」を編成せよ！",
    "En":"Organize the Nagumo Carrier Task Force",
    "content":"Have ONLY Akagi, Kaga, Hiryuu and Souryuu in your main fleet",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"500",
      "S":"500",
      "B":"500"
    },
    "reward":[
      ["C","Instant construction",2],
      ["C","Development material",4]
    ],
    "requires":["A13"],
    "unlocks":["F22"],
    "period":"once",
    "needs":{
      "S":["Akagi","Kaga","Hiryuu","Souryuu"]
    }
  },
  "A20":{
    "Jp":"「三川艦隊」を編成せよ！",
    "En":"Organize the Mikawa Fleet",
    "content":"Have Choukai, Aoba, Kako,Furutaka,and Tenryuu in your main fleet,with one additional FAST ship",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"0",
      "S":"200",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",3]
    ],
    "requires":["A13"],
    "unlocks":["A21","B11","A58"],
    "period":"once",
    "needs":{
      "S":["Choukai","Aoba","Kako","Furutaka","Tenryuu"]
    }
  },
  "A21":{
    "Jp":"「第四戦隊」を編成せよ！",
    "En":"Organize the 4th Cruiser Division",
    "content":"Have Takao, Atago, Choukai, and Maya in your main fleet",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"150",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["C","Development material",1]
    ],
    "requires":["A20"],
    "unlocks":["A22", "A24", "A25","A27", "A29", "B13"],
    "period":"once",
    "needs":{
      "S":["Takao","Atago","Choukai","Maya"]
    }
  },
  "A22":{
    "Jp":"「西村艦隊」を編成せよ！",
    "En":"Organize the Nishimura Fleet",
    "content":"Have Fusou, Yamashiro, Mogami, and Shigure in your main fleet",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"200",
      "B":"0"
    },
    "reward":[
      ["I","Mamiya",1]
    ],
    "requires":["A21"],
    "unlocks":["A23", "A26", "B14"],
    "period":"once",
    "needs":{
      "S":["Fusou","Yamashiro","Mogami","Shigure"]
    }
  },
  "A23":{
    "Jp":"「第五航空戦隊」を編成せよ！",
    "En":"Organize the 5th Carrier Division",
    "content":"Have both Shoukaku, Zuikaku, and 2 Destroyers in your main fleet",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"0",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["I","Repair Team",1]
    ],
    "requires":["A22"],
    "unlocks":["A41", "A46", "A56","B15"],
    "period":"once",
    "needs":{
      "S":["Shoukaku","Zuikaku"]
    }
  },
  "A24":{
    "Jp":"新「三川艦隊」を編成せよ！",
    "En":"Organize the New Mikawa Fleet",
    "content":"Have Choukai, Aoba, Kinugasa, Kako, Furutaka, and Tenryuu in your main fleet",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"0",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["I","Mamiya",1]
    ],
    "requires":["A21"],
    "unlocks":["B16"],
    "period":"once",
    "needs":{
      "S":["Choukai","Aoba","Kinugasa","Kako","Furutaka","Tenryuu"]
    }
  },
  "A25":{
    "Jp":"潜水艦隊を編成せよ！",
    "En":"Organize a Submarine Fleet",
    "content":"Have 2 Submarines in any one of your fleets",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"150",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Repair Team",1]
    ],
    "requires":["A21"],
    "unlocks":["A31", "B17"],
    "period":"once",
    "needs":{}
  },
  "A26":{
    "Jp":"航空水上打撃艦隊を編成せよ！",
    "En":"Organize an Aviation Surface Attack Fleet",
    "content":"Have ONLY 2 Aviation Battleships and 2 Aviation Cruisers in your main fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"200",
      "B":"200"
    },
    "reward":[
      ["C","Instant repair",2]
    ],
    "requires":["A22"],
    "unlocks":["B18"],
    "period":"once",
    "needs":{}
  },
  "A27":{
    "Jp":"中規模潜水艦隊を編成せよ！",
    "En":"Organize a Medium-sized Submarine Fleet",
    "content":"Have 3 Submarines in any one of your fleets",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"150",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Mamiya",1]
    ],
    "requires":["A21"],
    "unlocks":["A37", "D5"],
    "period":"once",
    "needs":{}
  },
  "A28":{
    "Jp":"「第六戦隊」を編成せよ！",
    "En":"Organize the 6th Cruiser Division",
    "content":"Have Furutaka, Kako, Kinugasa, and Aoba in your main fleet",
    "tips":"",
    "ressources":{
      "F":"250",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Mamiya",1]
    ],
    "requires":["A10"],
    "unlocks":["A36", "B19"],
    "period":"once",
    "needs":{
      "S":["Kinugasa","Aoba","Kako","Furutaka"]
    }
  },
  "A29":{
    "Jp":"「第五艦隊」を編成せよ！",
    "En":"Organize the 5th Fleet",
    "content":"Have Nachi, Ashigara, Tama, and Kiso in your main fleet",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"0",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",3]
    ],
    "requires":["A21"],
    "unlocks":["A30"],
    "period":"once",
    "needs":{
      "S":["Nachi","Ashigara","Tama","Kiso"]
    }
  },
  "A30":{
    "Jp":"「第一水雷戦隊」を編成せよ！",
    "En":"Organize the 1st Torpedo Squadron",
    "content":"Have Abukuma, Akebono, Ushio, Kasumi, and Shiranui in your main fleet",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Repair Team",1]
    ],
    "requires":["A29"],
    "unlocks":["D9"],
    "period":"once",
    "needs":{
      "S":["Abukuma","Akebono","Ushio","Kasumi","Shiranui"]
    }
  },
  "A31":{
    "Jp":"「第八駆逐隊」を編成せよ！",
    "En":"Organize the 8th Destroyer Division",
    "content":"Have ONLY Asashio, Michishio, Ooshio, and Arashio in your main fleet",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"150",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",3]
    ],
    "requires":["A25"],
    "unlocks":["A33", "B20","A67"],
    "period":"once",
    "needs":{
      "S":["Asashio","Michishio","Ooshio","Arashio"]
    }
  },
  "A32":{
    "Jp":"「第十八駆逐隊」を編成せよ！",
    "En":"Organize the 18th Destroyer Division",
    "content":"Have ONLY Kasumi, Arare, Kagerou, and Shiranui in your main fleet",
    "tips":"",
    "ressources":{
      "F":"180",
      "A":"180",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",1],
      ["I","Repair Team",1]
    ],
    "requires":["B20"],
    "unlocks":["A42", "A47", "B21", "B58"],
    "period":"once",
    "needs":{
      "S":["Kasumi","Arare","Kagerou","Shiranui"]
    }
  },
  "A33":{
    "Jp":"「第三十駆逐隊（第一次）」を編成せよ！",
    "En":"Organize the 30th Destroyer Division (First GeneRation)",
    "content":"Have ONLY Mutsuki, Kisaragi, Yayoi, and Mochizuki in your main fleet",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["I","Repair Team",1]
    ],
    "requires":["A31"],
    "unlocks":["A34", "B22"],
    "period":"once",
    "needs":{
      "S":["Mutsuki","Kisaragi","Yayoi","Mochizuki"]
    }
  },
  "A34":{
    "Jp":"「第三十駆逐隊(第二次)」を編成せよ！",
    "En":"Organize the 30th Destroyer Division (Second GeneRation)",
    "content":"Have ONLY Mutsuki, Yayoi, Uzuki, and Mochizuki in your main fleet",
    "tips":"",
    "ressources":{
      "F":"220",
      "A":"220",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",3]
    ],
    "requires":["A33"],
    "unlocks":["A50", "B24"],
    "period":"once",
    "needs":{
      "S":["Mutsuki","Kisaragi","Yayoi","Uzuki","Mochizuki"]
    }
  },
  "A35":{
    "Jp":"「第五戦隊」を編成せよ！",
    "En":"Organize the 5th Cruiser Division",
    "content":"Have Myoukou, Nachi, and Haguro in your main fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["C","Development material",5]
    ],
    "requires":["B24"],
    "unlocks":["A38", "A44", "Bm1", "D17"],
    "period":"once",
    "needs":{
      "S":["Myoukou","Nachi","Haguro"]
    }
  },
  "A36":{
    "Jp":"新編「第二航空戦隊」を編成せよ！",
    "En":"Organize the New 2nd Carrier Division",
    "content":"Have Hiryuu Kai Ni as flagship, Souryuu and 2 Destroyers in your main fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"400"
    },
    "reward":[
      ["C","Instant repair",2],
      ["C","Development material",2]
    ],
    "requires":["A28"],
    "unlocks":["B25"],
    "period":"once",
    "needs":{
      "S":["Hiryuu Kai Ni","Souryuu"]
    }
  },
  "A37":{
    "Jp":"潜水艦隊「第六艦隊」を編成せよ！",
    "En":"Organize the Submarine Fleet: \"6th Fleet\"",
    "content":"Have a Submarine Tender as flagship and 4 Submarines or more in your main fleet",
    "tips":"",
    "ressources":{
      "F":"250",
      "A":"250",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",3]
    ],
    "requires":["A27"],
    "unlocks":["D13"],
    "period":"once",
    "needs":{
      "S":["Taigei"]
    }
  },
  "A38":{
    "Jp":"新型電探を配備せよ！",
    "En":"Deploy the New Radar Type",
    "content":"Have Myoukou Kai Ni as flagship",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"0",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["E","Type 22 Surface RADAR Kai 4",1]
    ],
    "requires":["A35"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "S":["Myoukou Kai Ni"]
    }
  },
  "A39":{
    "Jp":"再編成「第二航空戦隊」を強化せよ！",
    "En":"Strengthen the Reorganized 2nd Carrier Division",
    "content":"Have Souryuu Kai Ni as flagship with Hiryuu Kai Ni and 2 Destroyers in your main fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"450"
    },
    "reward":[
      ["C","Development material",2],
      ["C","Instant construction",2]
    ],
    "requires":["B25"],
    "unlocks":["B26"],
    "period":"once",
    "needs":{
      "S":["Souryuu Kai Ni"]
    }
  },
  "A40":{
    "Jp":"精鋭「第三戦隊」全艦集結せよ！",
    "En":"Gather All of the Elite 3rd Battleship Division",
    "content":"Have Kongou Kai Ni, Hiei Kai Ni, Haruna Kai Ni, and Kirishima Kai Ni in your main fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"100",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","Prototype 35.6cm Triple Gun Mount",1]
    ],
    "requires":["WB02"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "S":["Kongou Kai Ni","Hiei Kai Ni","Haruna Kai Ni","Kirishima Kai Ni"]
    }
  },
  "A41":{
    "Jp":"「新型正規空母」を配備せよ！",
    "En":"Deploy the New Standard Aircraft Carrier Class",
    "content":"Have Unryuu in your fleet as flagship",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"100",
      "S":"100",
      "B":"300"
    },
    "reward":[
      ["C","Development material",2]
    ],
    "requires":["A23"],
    "unlocks":["B28"],
    "period":"once",
    "needs":{
      "S":["Unryuu"]
    }
  },
  "A42":{
    "Jp":"主力戦艦部隊「第二戦隊」を編成せよ！",
    "En":"Organize the Main Battleship Force: \"The 2nd Squadron\"",
    "content":"Have Nagato, Mutsu, Fusou, and Yamashiro in your main fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"250",
      "S":"250",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2]
    ],
    "requires":["A32"],
    "unlocks":["B31"],
    "period":"once",
    "needs":{
      "S":["Nagato","Mutsu","Fusou","Yamashiro"]
    }
  },
  "A43":{
    "Jp":"戦艦を主力とした水上打撃部隊を編成せよ！",
    "En":"Organize a Surface Task Force with Battleships Comprising the Main Force",
    "content":"Have 3 of any ship from either the Nagato,Ise,Fusou, or Yamato classes and 1 Light Cruiser in your main fleet",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",3]
    ],
    "requires":["B31"],
    "unlocks":["Bm4"],
    "period":"once",
    "needs":{}
  },
  "A44":{
    "Jp":"「西村艦隊」を再編成せよ！",
    "En":"Reorganize the Nishimura Fleet",
    "content":"Have Fusou, Yamashiro, Mogami, Shigure, and Michishio in your main fleet",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",3],
      ["C","Improvement material",3]
    ],
    "requires":["A35", "B14"],
    "unlocks":["B33"],
    "period":"once",
    "needs":{
      "S":["Fusou","Yamashiro","Mogami","Shigure","Michishio"]
    }
  },
  "A45":{
    "Jp":"改修工廠を準備せよ！",
    "En":"Prepare the Improvement Arsenal",
    "content":"Have Akashi as flagship in your main fleet",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"0",
      "S":"100",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",5]
    ],
    "requires":["A9"],
    "unlocks":["Bw10","F17","F54"],
    "period":"once",
    "needs":{
      "S":["Akashi"]
    }
  },
  "A46":{
    "Jp":"軽快な「水上反撃部隊」を編成せよ！",
    "En":"Organize a Light Surface Counterattack Fleet",
    "content":"Have Kasumi as flagship, Ashigara, 1 Light Cruiser, and 3 Destroyers in your main fleet",
    "tips":"",
    "ressources":{
      "F":"250",
      "A":"250",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["C","Instant repair",2],
      ["C","Development material",2]
    ],
    "requires":["A23"],
    "unlocks":["Bm7","A65"],
    "period":"once",
    "needs":{
      "S":["Kasumi","Ashigara"]
    }
  },
  "A47":{
    "Jp":"「第十一駆逐隊」を編成せよ！",
    "En":"Organize the 11th Destroyer Division",
    "content":"Have ONLY Fubuki, Shirayuki, Hatsuyuki, and Murakumo in your main fleet",
    "tips":"",
    "ressources":{
      "F":"110",
      "A":"110",
      "S":"110",
      "B":"0"
    },
    "reward":[
      ["C","Development material",3]
    ],
    "requires":["A32"],
    "unlocks":["B35", "B36"],
    "period":"once",
    "needs":{
      "S":["Fubuki","Shirayuki","Hatsuyuki","Murakumo"]
    }
  },
  "A48":{
    "Jp":"「第二一駆逐隊」を編成せよ！",
    "En":"Organize the 21st Destroyer Division",
    "content":"Have ONLY Hatsuharu, Hatsushimo, Nenohi, and Wakaba in your main fleet",
    "tips":"",
    "ressources":{
      "F":"210",
      "A":"210",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",3]
    ],
    "requires":["B35"],
    "unlocks":["B37"],
    "period":"once",
    "needs":{
      "S":["Hatsuharu","Hatsushimo","Nenohi","Wakaba"]
    }
  },
  "A49":{
    "Jp":"「第二二駆逐隊」を編成せよ！",
    "En":"Organize the 22nd Destroyer Division",
    "content":"Have ONLY Satsuki, Fumizuki, Nagatsuki, and 1 more Destroyer in your main fleet",
    "tips":"",
    "ressources":{
      "F":"220",
      "A":"220",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["C","Improvement material",2]
    ],
    "requires":["B38"],
    "unlocks":["B39"],
    "period":"once",
    "needs":{
      "S":["Satsuki","Fumizuki","Nagatsuki"]
    }
  },
  "A50":{
    "Jp":"「三川艦隊」を新編、突入準備せよ！",
    "En":"Reorganize the Mikawa Fleet and Prepare to Rush in",
    "content":"Have Choukai Kai Ni as flagship and fill the rest of the fleet with any combination of Furutaka, Kako, Aoba, Kinugasa, Yuubari, or Tenryuu for a total of 6 ships.",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2]
    ],
    "requires":["A34", "B16"],
    "unlocks":["A57", "C5"],
    "period":"once",
    "needs":{
      "S":["Choukai Kai Ni","Aoba","Kako","Furutaka","Kinugasa","Yuubari","Tenryuu"]
    }
  },
  "A51":{
    "Jp":"「第十八戦隊」を新編成せよ！",
    "En":"Reorganize the 18th Squadron",
    "content":"Have Tenryuu, Tatsuta, and at least two other ships in your fleet",
    "tips":"",
    "ressources":{
      "F":"180",
      "A":"180",
      "S":"0",
      "B":"180"
    },
    "reward":[
      ["C","Development material",2]
    ],
    "requires":["B42"],
    "unlocks":["B43"],
    "period":"once",
    "needs":{
      "S":["Tenryuu","Tatsuta"]
    }
  },
  "A52":{
    "Jp":"海上突入部隊を編成せよ！",
    "En":"Organize the Marine Rush Fleet",
    "content":"Have Hiei, Kirishima, Nagara, Akatsuki, Ikazuchi, and Inazuma in your main fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["C","Development material",2]
    ],
    "requires":["B16"],
    "unlocks":["B44"],
    "period":"once",
    "needs":{
      "S":["Hiei","Kirishima","Nagara","Akatsuki","Ikazuchi","Inazuma"]
    }
  },
  "A53":{
    "Jp":"新編「第六駆逐隊」を編成せよ！",
    "En":"Organize the New 6th Destroyer Division",
    "content":"Have only Akatsuki Kai Ni as flagship with Hibiki (Верный is ok), Ikazuchi, and Inazuma in your main fleet",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"150",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","Searchlight",1]
    ],
    "requires":["B14"],
    "unlocks":["B45"],
    "period":"once",
    "needs":{
      "S":["Akatsuki","Hibiki","Ikazuchi","Inazuma"]
    }
  },
  "A54":{
    "Jp":"「第一水雷戦隊」北方突入準備！",
    "En":"1st Torpedo Squadron, Prepare for a Rush to the Northern Sea",
    "content":"Have Abukuma as flagship with Hibiki (Верный is ok), Hatsushimo, Wakaba, Samidare and Shimakaze in your main fleet",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"150",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["I","Furniture box medium",1]
    ],
    "requires":["B21", "Bd1"],
    "unlocks":["B46","A78"],
    "period":"once",
    "needs":{
      "S":["Abukuma","Hibiki","Hatsushimo","Wakaba","Samidare","Shimakaze"]
    }
  },
  "A55":{
    "Jp":"「第一水雷戦隊」北方再突入準備！",
    "En":"1st Torpedo Squadron, Prepare for Another Rush to the Northern Sea",
    "content":"Have Abukuma Kai Ni as flagship with Hibiki (Верный is ok), Yuugumo, Naganami, Akigumo and Shimakaze in your main fleet",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",3],
      ["I","Large furniture box",1]
    ],
    "requires":["C7"],
    "unlocks":["B47"],
    "period":"once",
    "needs":{
      "S":["Abukuma Kai Ni","Hibiki","Yuugumo","Naganami","Akigumo","Shimakaze"]
    }
  },
  "A56":{
    "Jp":"「第五航空戦隊」を再編成せよ！",
    "En":"Reorganize the 5th Carrier Division",
    "content":"Have Shoukaku, Zuikaku, Oboro and Akigumo in your main fleet",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"0",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["C","Development material",3]
    ],
    "requires":["A23", "Bm6"],
    "unlocks":["B50"],
    "period":"once",
    "needs":{
      "S":["Shoukaku","Zuikaku","Oboro","Akigumo"]
    }
  },
  "A57":{
    "Jp":"新編「第二一戦隊」出撃準備！",
    "En":"Prepare the New 21st Squadron for Sortie",
    "content":"Have Nachi Kai Ni, Ashigara Kai Ni, Tama and Kiso in your main fleet",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"150",
      "S":"150",
      "B":"0"
    },
    "reward":[
      ["C","Development material",2],
      ["C","Improvement material",2]
    ],
    "requires":["A50", "B34"],
    "unlocks":["B51"],
    "period":"once",
    "needs":{
      "S":["Nachi Kai Ni","Ashigara Kai Ni","Tama","Kiso"]
    }
  },
  "A58":{
    "Jp":"「第十六戦隊(第一次)」を編成せよ！",
    "En":"Organize the 16th Squadron (First GeneRation)",
    "content":"Have Ashigara as flagship with Kuma and Nagara in your main fleet",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"150",
      "S":"150",
      "B":"0"
    },
    "reward":[
      ["C","Development material",2],
      ["C","Instant repair",2]
    ],
    "requires":["A20"],
    "unlocks":["B52"],
    "period":"once",
    "needs":{
      "S":["Ashigara","Kuma","Nagara"]
    }
  },
  "A59":{
    "Jp":"「第三航空戦隊」を編成せよ！",
    "En":"Organize the 3rd Carrier Division",
    "content":"Have Zuikaku Kai as flagship, Zuihou, Chitose Carrier and Chiyoda Carrier (both as CVL, not AV) in your main fleet",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["C","Development material",2],
      ["I","Skilled Crew Member",1]
    ],
    "requires":["Bm6", "F21"],
    "unlocks":["B53", "F24","F23"],
    "period":"once",
    "needs":{
      "S":["Zuikaku","Zuihou","Chitose Carrier","Chiyoda Carrier"]
    }
  },
  "A60":{
    "Jp":"「第四航空戦隊」を編成せよ！",
    "En":"Organize the 4th Carrier Division",
    "content":"Have Ise Kai and Hyuuga Kai in your main fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"200",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["C","Improvement material",2],
      ["E","Zuiun (634 Air Group)",1]
    ],
    "requires":["B53"],
    "unlocks":["A61","A77"],
    "period":"once",
    "needs":{
      "S":["Ise Kai","Hyuuga Kai"]
    }
  },
  "A61":{
    "Jp":"「小沢艦隊」を編成せよ！",
    "En":"Organize Ozawa's Fleet",
    "content":"Have Zuikaku Kai as flagship, Zuihou Kai, Chitose Carrier, Chiyoda Carrier, Ise Kai and Hyuuga Kai in your main fleet",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"0",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["C","Development material",2],
      ["I","Repair Team",1]
    ],
    "requires":["Bm7", "A60"],
    "unlocks":["B54","F28"],
    "period":"once",
    "needs":{
      "S":["Zuikaku Kai","Zuihou","Chitose Carrier","Chiyoda Carrier","Ise Kai","Hyuuga Kai"]
    }
  },
  "A62":{
    "Jp":"新航空戦隊を編成せよ！",
    "En":"Organize the New Carrier Division",
    "content":"Have Zuikaku Kai Ni, Shoukaku Kai Ni and two Destroyers in your fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"300",
      "S":"300",
      "B":"300"
    },
    "reward":[
      ["I","Skilled Crew Member",1],
      ["I","Irako",1]
    ],
    "requires":["F29","F23"],
    "unlocks":["F30","F45"],
    "period":"once",
    "needs":{
      "S":["Zuikaku Kai Ni","Shoukaku Kai Ni"],
      "Q":["F21","F23"]
    }
  },
  "A63":{
    "Jp":"「第十六戦隊(第二次)」を編成せよ！",
    "En":"Organize the 16th Squadron (Second GeneRation)",
    "content":"Have Natori as flagship, Isuzu and Kinu in your fleet",
    "tips":"",
    "ressources":{
      "F":"160",
      "A":"160",
      "S":"160",
      "B":"0"
    },
    "reward":[
      ["C","Development material",2],
      ["C","Instant repair",2]
    ],
    "requires":["B52"],
    "unlocks":["B55"],
    "period":"once",
    "needs":{
      "S":["Natori","Isuzu","Kinu"]
    }
  },
  "A64":{
    "Jp":"「新編成航空戦隊」を編成せよ！",
    "En":"Organize the New Carrier Division",
    "content":"Have 2 Aircraft Carrier / Light Aircraft Carrier, 2 Aviation Battleships or Aviation Cruisers and 2 Destroyers in your fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"200",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["C","Improvement material",2],
      ["C","Development material",2]
    ],
    "requires":["B50", "B55"],
    "unlocks":["B56"],
    "period":"once",
    "needs":{}
  },
  "A65":{
    "Jp":"精強な「水上反撃部隊」を再編成せよ！",
    "En":"Reorganize the Strengthened Surface Counterattack Fleet",
    "content":"Have Kasumi as flagship, Ashigara, Ooyodo, Asashimo and Kiyoshimo in your fleet",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",3]
    ],
    "requires":["B56","A46"],
    "unlocks":["B57"],
    "period":"once",
    "needs":{
      "S":["Kasumi","Ashigara","Ooyodo","Asashimo","Kiyoshimo"]
    }
  },
  "A66":{
    "Jp":"「第三十一戦隊(第一次)」を編成せよ！",
    "En":"Organize the 31st Division (First GeneRation)",
    "content":"Have Isuzu Kai Ni as flagship, Satsuki Kai Ni and Uzuki Kai in your fleet",
    "tips":"",
    "ressources":{
      "F":"310",
      "A":"310",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["I","Irako",1]
    ],
    "requires":["Bd2", "B55"],
    "unlocks":["B60", "B72"],
    "period":"once",
    "needs":{
      "S":["Isuzu Kai Ni","Satsuki Kai Ni","Uzuki Kai"]
    }
  },
  "A67":{
    "Jp":"「第二七駆逐隊」を編成せよ！",
    "En":"Organize the 27th Destroyer Division",
    "content":"Have ONLY Shiratsuyu Kai, Shigure, Harusame and Samidare in your fleet, with Shiratsuyu set as the flagship.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"270",
      "S":"270",
      "B":"0"
    },
    "reward":[
      ["C","Development material",2],
      ["C","Instant repair",2]
    ],
    "requires":["A31","Bd2"],
    "unlocks":["B61"],
    "period":"once",
    "needs":{
      "S":["Shiratsuyu Kai","Shigure","Harusame","Samidare"]
    }
  },
  "A68":{
    "Jp":"強行高速輸送部隊を編成せよ！",
    "En":"Organise a Forced High-speed Transport Fleet!",
    "content":"Have Sendai Kai Ni as flagship, Kawakaze Kai Ni, Shigure Kai Ni and two other destroyers in your fleet.",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"100",
      "S":"100",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2]
    ],
    "requires":["B53"],
    "unlocks":["B68"],
    "period":"once",
    "needs":{
      "S":["Sendai Kai Ni","Kawakaze Kai Ni","Shigure Kai Ni"]
    }
  },
  "A69":{
    "Jp":"新編「水雷戦隊」を含む艦隊を再編成せよ！",
    "En":"Organise a New Torpedo Squadron!",
    "content":"Have a CL/CLT/CT as the flagship and 4 DD in any of your fleets.",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2]
    ],
    "requires":["A9"],
    "unlocks":["B70"],
    "period":"once",
    "needs":{}
  },
  "A70":{
    "Jp":"新編「第八駆逐隊」を再編成せよ！",
    "En":"Reorganise the New 8th Destroyer Division!",
    "content":"Have ONLY Asashio Kai Ni/Asashio Kai Ni D as flagship, Michishio, Ooshio and Arashio in your fleet.",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",3]
    ],
    "requires":["B20"],
    "unlocks":["B73"],
    "period":"once",
    "needs":{
      "S":["Asashio Kai Ni","Michishio","Ooshio","Arashio"]
    },
    "tips":" If you put Asashio into your fleet, remodel her and then activate the quest you can't clear it for some reason. Either remove her from the fleet and put her back in, or turn the quest off and on again."
  },
  "A71":{
    "Jp":"精鋭！八駆第一小隊！",
    "En":"Elite! DesDiv 8, 1st platoon!",
    "content":"Have Asashio Kai Ni D and Ooshio Kai Ni in your fleet.",
    "tips":"",
    "ressources":{
      "F":"250",
      "A":"250",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",3],
      ["I","Irako",1]
    ],
    "requires":["B72"],
    "unlocks":["B74"],
    "period":"once",
    "needs":{
      "S":["Asashio Kai Ni D","Ooshio Kai Ni"]
    }
  },
  "A72":{
    "Jp":"「第十九駆逐隊」を編成せよ！",
    "En":"Organise the 19th Destroyer Division!",
    "content":"Have Isonami, Uranami, Ayanami and Shikinami in your fleet.",
    "tips":"",
    "ressources":{
      "F":"190",
      "A":"190",
      "S":"190",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["I","Combat Ration",1]
    ],
    "requires":["B21", "Bd1"],
    "unlocks":["B78"],
    "period":"once",
    "needs":{
      "S":["Isonami","Uranami","Ayanami","Shikinami"]
    }
  },
  "A73":{
    "Jp":"「第十六戦隊(第三次)」を編成せよ！",
    "En":"Form the 16th Cruiser Division (Third GeneRation)!",
    "content":"Have Kinu, Aoba, Kitakami and Ooi in your fleet.",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"200",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["C","Development material",2]
    ],
    "requires":["B55"],
    "unlocks":["B84"],
    "period":"once",
    "needs":{
      "S":["Kinu","Aoba","Kitakami","Ooi"]
    }
  },
  "A74":{
    "Jp":"精鋭「第十六戦隊」を再編成せよ！",
    "En":"Reorganise the Elite 16th Cruiser Division!",
    "content":"Have Kinu Kai Ni as flagship, Kitakami Kai Ni, Ooi Kai Ni, Kuma Kai, Aoba Kai, Uranami Kai, Shikinami Kai.",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",3],
      ["I","Repair Team",1]
    ],
    "requires":["B84"],
    "unlocks":["B85"],
    "period":"once",
    "needs":{
      "S":["Kinu Kai Ni","Kitakami Kai Ni","Ooi Kai Ni","Kuma Kai","Aoba Kai", "Uranami Kai", "Shikinami Kai"]
    }
  },
  "A75":{
    "Jp":"新編「第一戦隊」を編成せよ！",
    "En":"Organize the New First Squadron!",
    "content":"Have Nagato Kai Ni as flagship and Mutsu Kai as second ship in your main fleet.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"880",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["I","Irako",1]
    ],
    "requires":["B31","B52"],
    "unlocks":["B99"],
    "period":"once",
    "needs":{
      "S":["Nagato Kai Ni","Mutsu Kai"]
    }
  },
  "A76":{
    "Jp":"新編「第七戦隊」を編成せよ！",
    "En":"Organize the New Seventh Squadron!",
    "content":"Have Kumano Kai Ni as flagship, Suzuya Kai Ni as second ship, Mogami Kai and Mikuma Kai in your main fleet.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"700"
    },
    "reward":[
      ["C","Instant repair",2],
      ["I","Irako",1]
    ],
    "requires":["B95","C2"],
    "unlocks":["B101"],
    "period":"once",
    "needs":{
      "S":["Kumano Kai Ni", "Suzuya Kai Ni" ,"Mogami Kai", "Mikuma Kai"]
    }
  },
  "A77":{
    "Jp":"精鋭「第四航空戦隊」を再編成せよ！",
    "En":'Reorganize the Elite "Fourth Carrier Division"!',
    "content":"Have Ise and Hyuuga both above level 50 as flagship and 2nd ship along with 1CL + 2 DD and 1 additional ship in your main fleet.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"400"
    },
    "reward":[
      ["C","Development material",4],
      ["I","Skilled Crew Member",1]
    ],
    "requires":["A60","B14"],
    "unlocks":["B102"],
    "period":"once",
    "needs":{
      "S":["Ise", "Hyuuga"]
    }
  },
  "A78":{
    "Jp":"新編「第四水雷戦隊」を編成せよ！",
    "En":"Organize the New 4th Torpedo Squadron!",
    "content":"Have Yura Kai Ni as flagship, Murasame, Yuudachi, Harusame, Samidare and 1 DD in your main fleet.",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",4],
      ["I","Repair Team",1]
    ],
    "requires":["A54","B15"],
    "unlocks":["B103"],
    "period":"once",
    "needs":{
      "S":["Yura Kai Ni", "Murasame" ,"Yuudachi", "Harusame", "Samidare"]
    }
  },
  "A79":{
    "Jp":"精鋭「第二二駆逐隊」を再編成せよ！",
    "En":"Reorganize the Elite 22th Destroyer Squadron!",
    "content":"Have Fumizuki Kai Ni, Satsuki Kai Ni, Minazuki Kai and Nagatsuki Kai in your first fleet",
    "tips":"",
    "ressources":{
      "F":"220",
      "A":"0",
      "S":"220",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["I","Combat Ration",2]
    ],
    "requires":["Unknown"],
    "unlocks":["B104"],
    "period":"once",
    "needs":{
      "S":["Fumizuki Kai Ni", "Satsuki Kai Ni" ,"Nagatsuki Kai", "Minazuki Kai"]
    },
  },
  "B1":{
    "Jp":"はじめての「出撃」！",
    "En":"The First Sortie",
    "content":"Sortie your main fleet",
    "tips":"",
    "ressources":{
      "F":"20",
      "A":"20",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",1]
    ],
    "requires":[],
    "unlocks":["B2"],
    "period":"once",
    "needs":{}
  },
  "B2":{
    "Jp":"鎮守府正面海域を護れ！",
    "En":"Guard the Sea in Front of the Naval Base",
    "content":"Sortie to World 1-1 and clear the stage",
    "tips":"",
    "ressources":{
      "F":"30",
      "A":"30",
      "S":"30",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",1]
    ],
    "requires":["B1"],
    "unlocks":["E1", "E2","B4","F16"],
    "period":"once",
    "needs":{}
  },
  "B3":{
    "Jp":"第2艦隊、出撃せよ！",
    "En":"Sortie The 2nd Fleet",
    "content":"Sortie your second fleet",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"200",
      "B":"200"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["A6"],
    "unlocks":["A11"],
    "period":"once",
    "needs":{}
  },
  "B4":{
    "Jp":"南西諸島沖に出撃せよ！",
    "En":"Sortie to World 1-2 and clear the stage",
    "content":"Sortie to World 1-2, defeat the boss and clear the stage",
    "tips":"",
    "ressources":{
      "F":"40",
      "A":"40",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",1]
    ],
    "requires":["B2"],
    "unlocks":["Bd1","B5"],
    "period":"once",
    "needs":{
      "M":["1-2"]
    }
  },
  "B5":{
    "Jp":"接近する「敵前衛艦隊」を迎撃せよ！",
    "En":"Intercept the Approaching Enemy Vanguard Fleet",
    "content":"Sortie to World 1-2 AGAIN and clear the stage",
    "tips":"",
    "ressources":{
      "F":"50",
      "A":"0",
      "S":"50",
      "B":"0"
    },
    "reward":[
      ["C","Development material",1],
      ["S","Miyuki",1]
    ],
    "requires":["B4"],
    "unlocks":["B6","B48"],
    "period":"once",
    "needs":{
      "M":["1-2"]
    }
  },
  "B6":{
    "Jp":"「水雷戦隊」で出撃せよ！",
    "En":"Sortie a Torpedo Squadron",
    "content":"Sortie a Light Cruiser as flagship and 3 Destroyers",
    "tips":"",
    "ressources":{
      "F":"60",
      "A":"60",
      "S":"0",
      "B":"60"
    },
    "reward":[
      ["S","Tatsuta",1]
    ],
    "requires":["B5"],
    "unlocks":["B7", "B30","B67"],
    "period":"once",
    "needs":{}
  },
  "B7":{
    "Jp":"「重巡洋艦」を出撃させよ！",
    "En":"Sortie a Heavy Cruiser",
    "content":"Sortie a fleet with a Heavy Cruiser as flagship",
    "tips":"",
    "ressources":{
      "F":"70",
      "A":"0",
      "S":"70",
      "B":"0"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["B6"],
    "unlocks":["B8", "D15"],
    "period":"once",
    "needs":{}
  },
  "B8":{
    "Jp":"「戦艦」を出撃させよ！",
    "En":"Sortie a Battleship",
    "content":"Sortie a fleet with a Battleship as flagship. Aviation Battleships (BBVs) don't count",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"150",
      "S":"150",
      "B":"0"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["B7"],
    "unlocks":["B9","B88"],
    "period":"once",
    "needs":{}
  },
  "B9":{
    "Jp":"「空母機動部隊」出撃せよ！",
    "En":"Sortie a Carrier Task Force",
    "content":"Sortie a Light or Standard Carrier flagship and 5 Light Cruisers, Destroyers, or Seaplane Tenders",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"0",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["B8"],
    "unlocks":["F35","B76"],
    "period":"once",
    "needs":{}
  },
  "B10":{
    "Jp":"敵空母を撃沈せよ！",
    "En":"Sink an Enemy Carrier",
    "content":"Sink an enemy Aircraft Carrier / Light Aircraft Carrier.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["S","Akagi",1]
    ],
    "requires":["A11"],
    "unlocks":["Bq3"],
    "period":"once",
    "needs":{}
  },
  "B11":{
    "Jp":"「三川艦隊」出撃せよ！",
    "En":"Sortie the Mikawa Fleet",
    "content":"Sortie Choukai, Aoba, Kako, Furutaka and Tenryuu, with one additional fast ship to any map",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"200",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Repair Team",1]
    ],
    "requires":["A20"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "S":["Choukai", "Aoba", "Kako", "Furutaka" , "Tenryuu"]
    }
  },
  "B12":{
    "Jp":"「第六駆逐隊」出撃せよ！",
    "En":"Sortie the 6th Destroyer Division",
    "content":"Sortie ONLY Akatsuki, Hibiki, Ikazuchi, and Inazuma to any map",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",1]
    ],
    "requires":["A10", "Bw3"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "S":["Akatsuki", "Hibiki", "Ikazuchi", "Inazuma"]
    }
  },
  "B13":{
    "Jp":"「第四戦隊」出撃せよ！",
    "En":"Sortie the 4th Cruiser Division",
    "content":"Sortie Takao, Atago, Maya, Choukai and 2 additional ships to World 2-2 and defeat the boss",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"100",
      "S":"150",
      "B":"100"
    },
    "reward":[
      ["C","Instant repair",1]
    ],
    "requires":["A21"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["2-2"],
      "S":["Takao", "Atago", "Maya", "Choukai"]
    }
  },
  "B14":{
    "Jp":"「西村艦隊」出撃せよ！",
    "En":"Sortie the Nishimura Fleet",
    "content":"Sortie Fusou, Yamashiro, Mogami, Shigure and 2 additional ships to World 2-3 and defeat the boss",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"0",
      "S":"400",
      "B":"0"
    },
    "reward":[
      ["I","Furniture box small",1],
      ["C","Instant repair",2]
    ],
    "requires":["A22"],
    "unlocks":["A44", "A53","A77"],
    "period":"once",
    "needs":{
      "M":["2-3"],
      "S":["Fusou", "Yamashiro", "Mogami", "Shigure"]
    }
  },
  "B15":{
    "Jp":"「第五航空戦隊」出撃せよ！",
    "En":"Sortie the 5th Carrier Division",
    "content":"Sortie Shoukaku, Zuikaku, and 4 additional ships to World 3-1 and defeat the boss",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"0",
      "B":"700"
    },
    "reward":[
      ["I","Furniture box medium",1],
      ["C","Instant repair",2]
    ],
    "requires":["A23"],
    "unlocks":["A78"],
    "period":"once",
    "needs":{
      "M":["3-1"],
      "S":["Shoukaku", "Zuikaku"]
    }
  },
  "B16":{
    "Jp":"新「三川艦隊」出撃せよ！",
    "En":"Sortie the New Mikawa Fleet",
    "content":"Sortie Choukai, Furutaka, Kako, Aoba, Kinugasa, and Tenryuu to World 2-3 and defeat the boss",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"150",
      "S":"100",
      "B":"150"
    },
    "reward":[
      ["I","Repair Team",1]
    ],
    "requires":["A24"],
    "unlocks":["A50", "A52"],
    "period":"once",
    "needs":{
      "M":["2-3"],
      "S":["Choukai", "Furutaka", "Kako", "Aoba", "Kinugasa", "Tenryuu"]
    }
  },
  "B17":{
    "Jp":"「潜水艦隊」出撃せよ！?",
    "En":"Sortie a Submarine Fleet",
    "content":"Sortie 2 Submarines and 4 additional ships to World 2-3 and defeat the boss",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"0",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["I","Furniture Fairy",1]
    ],
    "requires":["A25"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["2-3"]
    }
  },
  "B18":{
    "Jp":"「航空水上打撃艦隊」出撃せよ！",
    "En":"Sortie an Aviation Surface Attack Fleet",
    "content":"Sortie 2 Aviation Cruisers, 2 Aviation Battleships, and 2 additional ships to World 4-2 and defeat the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"150",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["I","Mamiya",1]
    ],
    "requires":["A26"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["4-2"]
    }
  },
  "B19":{
    "Jp":"「第六戦隊」出撃せよ！",
    "En":"Sortie the 6th Cruiser Division",
    "content":"Sortie Aoba, Furutaka, Kako, Kinugasa and 2 additional ships to World 2-3 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"150",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["I","Furniture box medium",1],
      ["I","Repair Team",1]
    ],
    "requires":["A28"],
    "unlocks":["B34", "Bq1","B89"],
    "period":"once",
    "needs":{
      "M":["2-3"],
      "S":["Aoba", "Furutaka", "Kako", "Kinugasa"]
    }
  },
  "B20":{
    "Jp":"「第八駆逐隊」出撃せよ！",
    "En":"Sortie the 8th Destroyer Division",
    "content":"Sortie Arashio, Asashio, Michishio, Ooshio and 2 additional ships to World 2-3 and defeat the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"100",
      "S":"400",
      "B":"0"
    },
    "reward":[
      ["I","Furniture box medium",1],
      ["C","Development material",1]
    ],
    "requires":["A31"],
    "unlocks":["A32", "A70", "B65", "Bm6", "D10"],
    "period":"once",
    "needs":{
      "M":["2-3"],
      "S":["Arashio", "Asashio", "Michishio", "Ooshio"]
    }
  },
  "B21":{
    "Jp":"「第十八駆逐隊」出撃せよ！",
    "En":"Sortie the 18th Destroyer Division",
    "content":"Sortie Arare, Kagerou, Kasumi, Shiranui and 2 additional ships to World 3-1 and defeat the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"100",
      "S":"0",
      "B":"400"
    },
    "reward":[
      ["I","Large furniture box",1],
      ["C","Development material",2]
    ],
    "requires":["A32"],
    "unlocks":["Bm5","A54","A72"],
    "period":"once",
    "needs":{
      "M":["3-1"],
      "S":["Arare", "Kagerou", "Kasumi", "Shiranui"]
    }
  },
  "B22":{
    "Jp":"「第三十駆逐隊(第一次)」出撃せよ！",
    "En":"Sortie the 30th Destroyer Division (First GeneRation)",
    "content":"Sortie Mutsuki, Kisaragi, Mochizuki, Yayoi and 2 additional Destroyers (or Destroyer and Light Cruiser flagship) to World 3-2 and obtain a C-Rank or better at the boss",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"100",
      "S":"100",
      "B":"500"
    },
    "reward":[
      ["I","Mamiya",1]
    ],
    "requires":["A33"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["3-2"],
      "S":[ "Mutsuki", "Kisaragi", "Mochizuki", "Yayoi"]
    }
  },
  "B23":{
    "Jp":"「航空戦艦」抜錨せよ！",
    "En":"Sortie an Aviation Battleship",
    "content":"Sortie a fleet with at least 2 Aviation Battleships to World 4-4 and defeat the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"300",
      "S":"300",
      "B":"900"
    },
    "reward":[
      ["I","Large furniture box",1],
      ["C","Instant repair",3]
    ],
    "requires":["D10"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["4-4"]
    }
  },
  "B24":{
    "Jp":"「第三十駆逐隊」対潜哨戒！",
    "En":"The 30th Destroyer Division Anti-Submarine Patrol",
    "content":"Sortie Mutsuki, Mochizuki, Uzuki and Yayoi to World 1-5 and obtain a C-Rank or better at the boss",
    "tips":"",
    "ressources":{
      "F":"330",
      "A":"330",
      "S":"330",
      "B":"0"
    },
    "reward":[
      ["I","Furniture Fairy",1]
    ],
    "requires":["A34"],
    "unlocks":["A35", "B27"],
    "period":"once",
    "needs":{
      "M":["1-5"],
      "S":["Mutsuki", "Mochizuki", "Uzuki" , "Yayoi"]
    }
  },
  "B25":{
    "Jp":"新編「第二航空戦隊」出撃せよ！",
    "En":"Sortie the New 2nd Carrier Division",
    "content":"Sortie Hiryuu Kai Ni as flagship, Souryuu (Kai or Kai-2 is ok), and 2 Destroyers (you may add additional ships) to World 5-2 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"500",
      "S":"0",
      "B":"500"
    },
    "reward":[
      ["I","Mamiya",1]
    ],
    "requires":["A36"],
    "unlocks":["A39", "F13", "F14"],
    "period":"once",
    "needs":{
      "M":["5-2"],
      "S":["Hiryuu Kai Ni", "Souryuu"]
    }
  },
  "B26":{
    "Jp":"精鋭「第二航空戦隊」抜錨せよ！",
    "En":"Sortie the Elite 2nd Carrier Division",
    "content":"Sortie Souryuu Kai Ni as flagship, Hiryuu Kai Ni, 2 Destroyers and 2 additional ship to World 4-3 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"0",
      "S":"500",
      "B":"0"
    },
    "reward":[
      ["I","Furniture Fairy",1]
    ],
    "requires":["A39"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["4-3"],
      "S":["Souryuu Kai Ni", "Hiryuu Kai Ni"]
    }
  },
  "B27":{
    "Jp":"戦艦「榛名」出撃せよ！",
    "En":"Sortie the Battleship: \"Haruna\"",
    "content":"Sortie Haruna Kai Ni and 5 additional ships to World 5-1 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","Prototype 35.6cm Triple Gun Mount",1]
    ],
    "requires":["B24"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["5-1"],
      "S":["Haruna Kai Ni"]
    }
  },
  "B28":{
    "Jp":"「第六〇一航空隊」出撃せよ！",
    "En":"Sortie the 601st Naval Air Group",
    "content":"Sortie Unryuu Kai and 5 additional ships to World 5-2 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"300",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["E","Skilled Carrier-based Aircraft Maintenance Personnel",1]
    ],
    "requires":["A41"],
    "unlocks":["F15"],
    "period":"once",
    "needs":{
      "M":["5-2"],
      "S":["Unryuu Kai"]
    }
  },
  "B29":{
    "Jp":"「軽空母」戦隊、出撃せよ！",
    "En":"Sortie a Light Carrier Squadron",
    "content":"Sortie 1-2 Light Carriers, 1 Light Cruiser, and 3-4 Destroyers to World 2-1 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"300",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["C","Instant repair",3],
      ["I","Repair Team",1]
    ],
    "requires":["A5"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["2-1"]
    }
  },
  "B30":{
    "Jp":"「水雷戦隊」バシー島沖緊急展開",
    "En":"The Torpedo Squadron Bashi Island Emergency Deployment",
    "content":"Sortie 1-2 Light Cruisers, which one of must be the flagship, and 4-5 Destroyers to World 2-2 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Large furniture box",1],
      ["I","Furniture Fairy",1]
    ],
    "requires":["B6"],
    "unlocks":["Bm2"],
    "period":"once",
    "needs":{
      "M":["2-2"]
    }
  },
  "B31":{
    "Jp":"「第二戦隊」抜錨！",
    "En":"Sortie the 2nd Squadron",
    "content":"Sortie Fusou, Mutsu, Nagato, Yamashiro and 2 additional ships to World 4-2 and obtain two S-Rank victories at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"400",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","Type 1 AP Shell",1]
    ],
    "requires":["A42"],
    "unlocks":["A43","A75"],
    "period":"once",
    "needs":{
      "M":["4-2"],
      "S":["Fusou", "Mutsu", "Nagato", "Yamashiro"]
    }
  },
  "B32":{
    "Jp":"「戦艦部隊」北方海域に突入せよ！",
    "En":"Rush the Battleship Force to the Northern Sea",
    "content":"Sortie 2 Battleships (Aviation Battleships do not count), 1 Light Carrier, and 3 additional ships to World 3-5 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"500",
      "S":"0",
      "B":"250"
    },
    "reward":[
      ["C","Development material",2],
      ["E","Type 1 AP Shell",1]
    ],
    "requires":["Bm4"],
    "unlocks":["B49"],
    "period":"once",
    "needs":{
      "M":["3-5"]
    }
  },
  "B33":{
    "Jp":"「西村艦隊」南方海域へ進出せよ！",
    "En":"Advance the Nishimura Fleet to the Southern Sea",
    "content":"Sortie Fusou, Yamashiro, Mogami, Shigure, Michishio and 1 additional ship to World 5-1, and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"500",
      "B":"300"
    },
    "reward":[
      ["C","Improvement material",5],
      ["I","Medal",1]
    ],
    "requires":["A44"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["5-1"],
      "S":["Fusou", "Yamashiro", "Mogami", "Shigure", "Michishio"]
    }
  },
  "B34":{
    "Jp":"「第六戦隊」南西海域へ出撃せよ！",
    "En":"Sortie the 6th Squadron to the Southwestern Sea",
    "content":"Sortie Furutaka, Kako, Aoba, Kinugasa and 2 additional ships to World 2-5 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"400",
      "S":"0",
      "B":"400"
    },
    "reward":[
      ["I","Large furniture box",1],
      ["I","Furniture Fairy",1]
    ],
    "requires":["B19"],
    "unlocks":["A57"],
    "period":"once",
    "needs":{
      "M":["2-5"],
      "S":["Furutaka", "Kako", "Aoba", "Kinugasa"]
    }
  },
  "B35":{
    "Jp":"「第十一駆逐隊」 出撃せよ！",
    "En":"Sortie the 11th Destroyer Division",
    "content":"Sortie Fubuki, Shirayuki, Hatsuyuki, Murakumo, and 2 additional ships to World 2-3 and defeat the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"300",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["I","Mamiya",1]
    ],
    "requires":["A47"],
    "unlocks":["A48"],
    "period":"once",
    "needs":{
      "M":["2-3"],
      "S":["Fubuki", "Shirayuki", "Hatsuyuki", "Murakumo"]
    }
  },
  "B36":{
    "Jp":"「第十一駆逐隊」対潜哨戒!",
    "En":"The 11th Destroyer Division Anti-Submarine Patrol",
    "content":"Sortie Fubuki, Shirayuki, Hatsuyuki, and Murakumo to World 1-5 and obtain at least a C or above Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"0",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["C","Development material",2],
      ["E","Type 3 Sonar",1]
    ],
    "requires":["A47"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["1-5"],
      "S":["Fubuki", "Shirayuki", "Hatsuyuki", "Murakumo"]
    }
  },
  "B37":{
    "Jp":"「第二一駆逐隊」出撃せよ！",
    "En":"Sortie the 21st Destroyer Division",
    "content":"Sortie Hatsuharu, Nenohi, Wakaba, Hatsushimo, and 2 additional ships to World 3-1 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["I","Present box",1]
    ],
    "requires":["A48"],
    "unlocks":["B38"],
    "period":"once",
    "needs":{
      "M":["3-1"],
      "S":["Hatsuharu", "Nenohi", "Wakaba", "Hatsushimo"]
    }
  },
  "B38":{
    "Jp":"「那智戦隊」抜錨せよ！",
    "En":"Sortie the Nachi Squadron",
    "content":"Sortie Nachi as flagship, Hatsushimo, Kasumi, Ushio, Akebono, and 1 other ship to World 2-2 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Large furniture box",1],
      ["C","Improvement material",2]
    ],
    "requires":["B37","Bm1"],
    "unlocks":["A49"],
    "period":"once",
    "needs":{
      "M":["2-2"],
      "S":["Nachi", "Hatsushimo", "Kasumi", "Ushio", "Akebono"]
    }
  },
  "B39":{
    "Jp":"「第二二駆逐隊」出撃せよ！",
    "En":"Sortie the 22nd Destroyer Division",
    "content":"Sortie Satsuki, Fumizuki, Nagatsuki, 1 other Destroyer, and 2 other additional ships to World 1-4 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"400"
    },
    "reward":[
      ["I","Furniture box medium",1],
      ["I","Irako",1]
    ],
    "requires":["A49"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["1-4"],
      "S":["Satsuki", "Fumizuki", "Nagatsuki"]
    }
  },
  "B40":{
    "Jp":"「改装防空重巡」出撃せよ！",
    "En":"Sortie the Remodeled Anti-Air Heavy Cruiser",
    "content":"Sortie Maya (Kai or Kai-2), 1 Light Cruiser, and 2 Destroyers (you may add additional ships) to World 2-3 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"0",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["E","25mm Triple Autocannon Mount",1],
      ["E","Type 3 Shell",1]
    ],
    "requires":["D15"],
    "unlocks":["D16"],
    "period":"once",
    "needs":{
      "M":["2-3"],
      "S":["Maya Kai"]
    }
  },
  "B41":{
    "Jp":"新編「三川艦隊」ソロモン方面へ！",
    "En":"Sortie the New Mikawa Fleet to the Solomon Waters",
    "content":"Sortie Choukai Kai Ni as flagship and any combination of Furutaka, Kako, Aoba, Kinugasa, Yuubari, or Tenryuu to World 5-1 and obtain an S-Rank at the boss (One of them will have to be left out)",
    "tips":"",
    "ressources":{
      "F":"480",
      "A":"480",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",3],
      ["C","Improvement material",3]
    ],
    "requires":["C5"],
    "unlocks":["B80"],
    "period":"once",
    "needs":{
      "M":["5-1"],
      "S":["Choukai Kai Ni", "Furutaka", "Kako", "Aoba", "Kinugasa", "Yuubari", "Tenryuu"]
    }
  },
  "B42":{
    "Jp":"「第六駆逐隊」対潜哨戒なのです！",
    "En":"The 6th Destroyer Division Anti-Submarine Patrol nanodesu",
    "content":"Sortie Akatsuki, Hibiki (Верный is ok), Ikazuchi, and Inazuma to World 1-5 and obtain a C-Rank or better at the boss",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"200",
      "B":"0"
    },
    "reward":[
      ["C","Development material",3],
      ["E","Type 93 Passive Sonar",1]
    ],
    "requires":["A10"],
    "unlocks":["A51", "B45"],
    "period":"once",
    "needs":{
      "M":["1-5"],
      "S":["Akatsuki", "Hibiki", "Ikazuchi", "Inazuma"]
    }
  },
  "B43":{
    "Jp":"抜錨！「第十八戦隊」",
    "En":"Set Sail! The 18th Squadron",
    "content":"Sortie Tenryuu, Tatsuta, and at least two other ships to World 2-3 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"350",
      "A":"0",
      "S":"0",
      "B":"250"
    },
    "reward":[
      ["C","Instant repair",3],
      ["I","Furniture Fairy",1]
    ],
    "requires":["A51"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["2-3"],
      "S":["Tenryuu", "Tatsuta"]
    }
  },
  "B44":{
    "Jp":"海上突入部隊、進発せよ！",
    "En":"Deploy the Marine Rush Fleet",
    "content":"Sortie Hiei, Kirishima, Nagara, Akatsuki, Ikazuchi, and Inazuma to World 5-1 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"0",
      "S":"500",
      "B":"0"
    },
    "reward":[
      ["C","Development material",5],
      ["C","Improvement material",2]
    ],
    "requires":["A52", "Bw9"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["5-1"],
      "S":["Hiei", "Kirishima", "Nagara", "Akatsuki", "Ikazuchi", "Inazuma"]
    }
  },
  "B45":{
    "Jp":"「第六駆逐隊」対潜哨戒を徹底なのです！",
    "En":"A Thorough 6th Destroyer Division Anti-Submarine Patrol nanodesu",
    "content":"Sortie Akatsuki Kai Ni, Hibiki (Верный is ok), Ikazuchi, and Inazuma to World 1-5 and obtain an A-Rank or better at the boss",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",2],
      ["E","Type 93 Passive Sonar",1]
    ],
    "requires":["A53", "B42"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["1-5"],
      "S":["Akatsuki Kai Ni", "Hibiki", "Ikazuchi", "Inazuma"]
    }
  },
  "B46":{
    "Jp":"「第一水雷戦隊」ケ号作戦、突入せよ！",
    "En":"Rush the 1st Torpedo Squadron to OpeRation KE",
    "content":"Sortie Abukuma as flagship with Hibiki (Верный is ok), Hatsushimo, Wakaba, Samidare and Shimakaze to World 3-2 and obtain a victory (B-Rank or better) at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"300",
      "S":"0",
      "B":"400"
    },
    "reward":[
      ["C","Instant repair",3],
      ["I","Furniture Fairy",1]
    ],
    "requires":["A54"],
    "unlocks":["C7", "F33"],
    "period":"once",
    "needs":{
      "M":["3-2"],
      "S":["Abukuma", "Hibiki" , "Hatsushimo", "Wakaba", "Samidare" , "Shimakaze" ]
    }
  },
  "B47":{
    "Jp":"「第一水雷戦隊」北方ケ号作戦、再突入！",
    "En":"Rush the 1st Torpedo Squadron to OpeRation KE Again",
    "content":"Sortie Abukuma Kai Ni as flagship with Hibiki (Верный is ok), Yuugumo, Naganami, Akigumo and Shimakaze to World 3-2 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"400",
      "S":"0",
      "B":"500"
    },
    "reward":[
      ["C","Development material",4],
      ["C","Improvement material",4]
    ],
    "requires":["A55","C7"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["3-2"],
      "S":["Abukuma Kai Ni", "Hibiki", "Yuugumo", "Naganami", "Akigumo" , "Shimakaze"]
    }
  },
  "B48":{
    "Jp":"鎮守府正面の対潜哨戒を強化せよ！",
    "En":"Strengthen the Anti-Submarine Patrol in Front of the Naval Base!",
    "content":"Sortie to World 1-5 and obtain four A-Ranks (or better) at the boss.",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Furniture Fairy",1]
    ],
    "requires":["Bd2","B5"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["1-5"]
    }
  },
  "B49":{
    "Jp":"「空母機動部隊」北方海域に進出せよ！",
    "En":"\"Carrier Task Force\", advance to the Northern Sea!",
    "content":"Sortie a fleet with an aircraft carrier as flagship to World 3-5 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"0",
      "S":"500",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",3],
      ["I","Combat provision",2]
    ],
    "requires":["Bd8", "B32"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["3-5"]
    }
  },
  "B50":{
    "Jp":"「第五航空戦隊」珊瑚諸島沖に出撃せよ！",
    "En":"Sortie the 5th Carrier Division to the Southern Sea Coral Islands",
    "content":"Sortie Shoukaku, Zuikaku, Oboro, Akigumo and up to 2 additional ships to World 5-2 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"500",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",3],
      ["I","Irako",1]
    ],
    "requires":["A56"],
    "unlocks":["A64", "F19", "F20", "D19","B95"],
    "period":"once",
    "needs":{
      "M":["5-2"],
      "S":["Shoukaku", "Zuikaku", "Oboro", "Akigumo"]
    }
  },
  "B51":{
    "Jp":"新編「第二一戦隊」北方へ出撃せよ！",
    "En":"Sortie the New 21st Squadron to the North",
    "content":"Sortie Nachi Kai Ni, Ashigara Kai Ni, Tama, Kiso and up to 2 additional ships to World 3-1 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Combat provision",1],
      ["I","Present box",1]
    ],
    "requires":["A57"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["3-1"],
      "S":["Nachi Kai Ni", "Ashigara Kai Ni", "Tama", "Kiso"]
    }
  },
  "B52":{
    "Jp":"「第十六戦隊(第一次)」出撃せよ！",
    "En":"Sortie the 16th Squadron (First GeneRation)",
    "content":"Sortie Ashigara as flagship, Kuma, Nagara and up to 3 additional ships to World 2-2 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"0",
      "S":"200",
      "B":"0"
    },
    "reward":[
      ["I","Furniture box medium",1],
      ["I","Present box",1]
    ],
    "requires":["A58"],
    "unlocks":["A63","A75"],
    "period":"once",
    "needs":{
      "M":["2-2"],
      "S":["Ashigara", "Kuma", "Nagara"]
    }
  },
  "B53":{
    "Jp":"「第三航空戦隊」南西諸島防衛線に出撃！",
    "En":"3rd Carrier Division: defend the Nansei Islands",
    "content":"Sortie Zuikaku Kai as flagship, Zuihou, Chitose Carrier and Chiyoda Carrier (both as CVL) (you can add 2 more ships) to World 1-4 and score an S-rank victory at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["I","Irako",1]
    ],
    "requires":["A59"],
    "unlocks":["A60","A68","F26"],
    "period":"once",
    "needs":{
      "M":["1-4"],
      "S":["Zuikaku Kai" , "Zuihou", "Chitose Carrier" , "Chiyoda Carrier"]
    }
  },
  "B54":{
    "Jp":"「小沢艦隊」出撃せよ！",
    "En":"Sortie the Ozawa's fleet",
    "content":"Sortie Zuikaku Kai(Kai Ni is OK) as flagship, Zuihou Kai, Chitose Carrier, Chiyoda Carrier, Ise Kai and Hyuuga Kai to World 2-4 and score an S-rank victory at the boss",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"0",
      "S":"300",
      "B":"300"
    },
    "reward":[
      ["C","Instant repair",3],
      ["E","Zero Fighter Model 52C (601 Air Group)",1]
    ],
    "requires":["A61"],
    "unlocks":["F23", "F27", "F41"],
    "period":"once",
    "needs":{
      "M":["2-4"],
      "S":["Zuikaku Kai", "Zuihou Kai", "Chitose Carrier", "Chiyoda Carrier", "Ise Kai" , "Hyuuga Kai"]
    }
  },
  "B55":{
    "Jp":"「第十六戦隊(第二次)」出撃せよ！",
    "En":"Sortie the 16th Squadron (Second GeneRation)",
    "content":"Sortie Natori as flagship, Isuzu, Kinu and up to 3 additional ships to World 2-3 and score an S-rank victory at the boss",
    "tips":"",
    "ressources":{
      "F":"320",
      "A":"0",
      "S":"320",
      "B":"0"
    },
    "reward":[
      ["I","Large furniture box",1]
    ],
    "requires":["A63"],
    "unlocks":["A64", "A73", "A66"],
    "period":"once",
    "needs":{
      "M":["2-3"],
      "S":["Natori", "Isuzu", "Kinu"]
    }
  },
  "B56":{
    "Jp":"新編成航空戦隊、北方へ進出せよ！",
    "En":"Sortie the New Carrier Division to the North",
    "content":"Sortie 2 Aircraft Carriers or Light Aircraft Carriers, 2 Aviation Battleships or Aviation Cruisers and 2 Destroyers to World 3-3 and score an S-rank victory at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"400",
      "S":"0",
      "B":"400"
    },
    "reward":[
      ["C","Improvement material",2],
      ["I","Furniture Fairy",1]
    ],
    "requires":["A64"],
    "unlocks":["A65", "F37"],
    "period":"once",
    "needs":{
      "M":["3-3"]
    }
  },
  "B57":{
    "Jp":"「礼号作戦」実施せよ！",
    "En":"Carry Out OpeRation Rei-go",
    "content":"Sortie Kasumi as flagship, Ashigara, Ooyodo, Asashimo, Kiyoshimo and up to one additional ship to World 2-5 and score an S-rank victory at the boss",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"700",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",3],
      ["I","Present box",1]
    ],
    "requires":["A65", "Bm5"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["2-5"],
      "S":["Kasumi" , "Ashigara", "Ooyodo", "Asashimo", "Kiyoshimo"]
    }
  },
  "B58":{
    "Jp":"旗艦「霞」北方海域を哨戒せよ！",
    "En":"Send the Flagship Kasumi to Patrol the Northern Sea",
    "content":"Sortie a fleet with Kasumi Kai Ni as flagship, 3 DD and up to 2 additional ships to World 3-1 and score a victory at the boss node.",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"0",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["E","Type 13 Air Radar Kai",1],
      ["I","Combat provision",1]
    ],
    "requires":["A32", "C2"],
    "unlocks":["B59"],
    "period":"once",
    "needs":{
      "M":["3-1"],
      "S":["Kasumi Kai Ni"]
    }
  },
  "B59":{
    "Jp":"旗艦「霞」出撃！敵艦隊を撃滅せよ！",
    "En":"Flagship Kasumi, Sortieing! Destroy the Enemy Fleet",
    "content":"Sortie a fleet with Kasumi Kai Ni as flagship, 2 DD and up to 3 additional ships to World 2-5 and score an S rank victory at the boss node.",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"500",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",3],
      ["E","25mm Triple Autocannon Mount (Concentrated Deployment)",1]
    ],
    "requires":["B58", "D2"],
    "unlocks":["B66"],
    "period":"once",
    "needs":{
      "M":["2-5"],
      "S":["Kasumi Kai Ni"]
    }
  },
  "B60":{
    "Jp":"「第三十一戦隊」出撃せよ！",
    "En":"Sortie the 31st Division",
    "content":"Sortie Isuzu Kai Ni as flagship, Satsuki Kai Ni, Uzuki Kai and up to 3 additional ships to World 1-6 and reach the end node",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"600",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",3],
      ["I","Hishimochi",1]
    ],
    "requires":["A66","Bd1"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["1-6"],
      "S":["Isuzu Kai Ni", "Satsuki Kai Ni", "Uzuki Kai"]
    }
  },
  "B61":{
    "Jp":"「第二七駆逐隊」出撃せよ！",
    "En":"Sortie the 27th Destroyer Division",
    "content":"Sortie Shiratsuyu Kai as flagship, Shigure, Harusame and Samidare and up to 2 additional ships to World 2-3 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"0",
      "S":"500",
      "B":"0"
    },
    "reward":[
      ["F","\"Spring is number 1\" scroll",1]
    ],
    "requires":["A67"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["2-3"],
      "S":["Shiratsuyu Kai", "Shigure", "Harusame" , "Samidare"]
    }
  },
  "B62":{
    "Jp":"強襲上陸作戦用戦力を増強せよ！",
    "En":"Bolster the Capability for Amphibious Assault OpeRations!",
    "content":"Sortie to World 6-3 and obtain an B-Rank or better at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"600",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",3],
      ["E","Daihatsu Landing Craft",1]
    ],
    "requires":["Bw9","D19"],
    "unlocks":["B80","F43"],
    "period":"once",
    "needs":{
      "M":["6-3"]
    }
  },
  "B63":{
    "Jp":"製油所地帯を防衛せよ！",
    "En":"Defend the Oil Refinery Zone!",
    "content":"Sortie a torpedo squadron (1 CL 5 DD) to World 1-3 and obtain three S-Ranks at the boss",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Combat Ration",1],
      ["I","Medal",1]
    ],
    "requires":["Bd2"],
    "unlocks":["B64","D24"],
    "period":"once",
    "needs":{
      "M":["1-3"]
    }
  },
  "B64":{
    "Jp":"南西諸島防衛線を強化せよ！",
    "En":"Reinforce the Nansei Islands Defence Line!",
    "content":"Sortie to World 1-4 and obtain five S-Ranks at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"400",
      "B":"0"
    },
    "reward":[
      ["I","Combat Ration",1],
      ["I","Furniture Fairy",1]
    ],
    "requires":["B63", "F31"],
    "unlocks":["B65"],
    "period":"once",
    "needs":{
      "M":["1-4"]
    }
  },
  "B65":{
    "Jp":"オリョール海の制海権を確保せよ！",
    "En":"Secure Control of the Orel Sea!",
    "content":"Sortie a fleet with Ooshio (model doesn't matter) as flagship to World 2-3 and obtain six S-Ranks at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"400",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["I","Medal",1],
      ["I","Irako",2]
    ],
    "requires":["B20","B64"],
    "unlocks":["B66"],
    "period":"once",
    "needs":{
      "M":["2-3"],
      "S":["Ooshio"]
    }
  },
  "B66":{
    "Jp":"旗艦「大潮」出撃せよ！",
    "En":"Sortie the flagship \"Ooshio\"!",
    "content":"Sortie a fleet with Ooshio Kai Ni as flagship to World 3-5 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"500",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Combat Ration",1],
      ["C","Improvement material",3]
    ],
    "requires":["B59", "B65"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["3-5"],
      "S":["Ooshio Kai Ni"]
    }
  },
  "B67":{
    "Jp":"艦隊、三周年！",
    "En":"Fleet, Third Anniversary!",
    "content":"Sortie a fleet to World 2-2 and World 2-3 and obtain an S-Rank at both bosses.",
    "tips":"",
    "ressources":{
      "F":"1000",
      "A":"1000",
      "S":"1000",
      "B":"0"
    },
    "reward":[
      ["F","3rd Anniversary wallscroll",1]
    ],
    "requires":["B6","A5"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["2-2","2-3"]
    }
  },
  "B68":{
    "Jp":"強行高速輸送部隊、出撃せよ！",
    "En":"Forced High-speed Transport Fleet, sortie!",
    "content":"Sortie a fleet with Sendai Kai Ni (she doesn't have to be the flagship), Kawakaze Kai Ni, Shigure Kai Ni, two other destroyers and up to one wildcard to World 4-1 and obtain at least an A-Rank at the boss.",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"0",
      "S":"500",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",2],
      ["I","Irako",1]
    ],
    "requires":["A68"],
    "unlocks":["B69"],
    "period":"once",
    "needs":{
      "M":["4-1"],
      "S":["Sendai Kai Ni", "Kawakaze Kai Ni", "Shigure Kai Ni"]
    }
  },
  "B69":{
    "Jp":"「第一航空戦隊」西へ！",
    "En":"\"1st Carrier Division\", into the West!",
    "content":"Sortie a fleet with Akagi as flagship, Kaga and up to four wildcards to World 4-5 and obtain an S-Rank at the boss.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"800",
      "S":"0",
      "B":"800"
    },
    "reward":[
      ["C","Improvement material",3],
      ["I","Skilled Crew Member",1]
    ],
    "requires":["B68","F33"],
    "unlocks":["B91"],
    "period":"once",
    "needs":{
      "M":["4-5"],
      "S":["Akagi","Kaga"]
    }
  },
  "B70":{
    "Jp":"新編艦隊、南西諸島防衛線へ急行せよ！",
    "En":"Set Sail Towards the Nansei Islands Defence Line",
    "content":"Sortie a fleet with a CL/CLT/CT flagship, 4 DD, and up to 1 additional ship to World 1-4 and obtain at least an A-rank at the boss.",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["I","Mamiya",1],
      ["C","Instant repair",3]
    ],
    "requires":["A69"],
    "unlocks":["B71","B75"],
    "period":"once",
    "needs":{
      "M":["1-4"]
    }
  },
  "B71":{
    "Jp":"鎮守府近海航路の安全確保を強化せよ！",
    "En":"Ensure the Safety of the Naval Base's Nearby Routes",
    "content":"Sortie a fleet with a CL flagship, 4 DD, and up to 1 additional ship to World 1-6 and complete the map.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"900",
      "S":"900",
      "B":"900"
    },
    "reward":[
      ["C","Development material",4],
      ["I","Furniture Fairy",1]
    ],
    "requires":["B70"],
    "unlocks":["F36"],
    "period":"once",
    "needs":{
      "M":["1-6"]
    }
  },
  "B72":{
    "Jp":"「第三十一戦隊」敵潜を制圧せよ！",
    "En":"31st Cruiser Division, suppress the enemy submarines!",
    "content":"Sortie a fleet with Isuzu Kai Ni as flagship, Satsuki Kai Ni, Uzuki Kai, and three wildcards to World 1-6 and reach the goal point twice.",
    "tips":"",
    "ressources":{
      "F":"310",
      "A":"310",
      "S":"0",
      "B":"310"
    },
    "reward":[
      ["C","Improvement material",2],
      ["E","Type 3 Active Sonar",1]
    ],
    "requires":["Bw5", "A66"],
    "unlocks":["A71"],
    "period":"once",
    "needs":{
      "M":["1-6"],
      "S":["Isuzu Kai Ni" , "Satsuki Kai Ni", "Uzuki Kai"]
    }
  },
  "B73":{
    "Jp":"新編「第八駆逐隊」出撃せよ！",
    "En":"New 8th Destroyer Division, sortie!",
    "content":"Sortie a fleet with Asashio Kai Ni/Asashio Kai Ni D as flagship, Michishio, Ooshio, Arashio, and two wildcards to World 1-6 and reach the goal point.",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"400",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","Searchlight",1],
      ["E", "Daihatsu Landing Craft",1]
    ],
    "requires":["A70"],
    "unlocks":["B90"],
    "period":"once",
    "needs":{
      "M":["1-6"],
      "S":["Asashio Kai Ni", "Michishio", "Ooshio", "Arashio"]
    }
  },
  "B74":{
    "Jp":"精鋭「八駆第一小隊」対潜哨戒！",
    "En":"Elite 8th Destroyer Division on ASW patrol!",
    "content":"Sortie a fleet that includes Asashio Kai Ni D and Ooshio Kai Ni to World 1-5 and score two S-Ranks at the boss node.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"800",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["C","Improvement material",4],
      ["E","Type 4 Passive Sonar",1]
    ],
    "requires":["A71"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["1-5"],
      "S":["Asashio Kai Ni D" , "Ooshio Kai Ni"]
    }
  },
  "B75":{
    "Jp":"水雷戦隊,南西諸島防衛線に反復出撃せよ！",
    "En":"Torpedo Squadron, repeatedly sortie to the Nansei Islands defence line!",
    "content":"Sortie a fleet with light cruiser type (i.e. CL/CLT/CT) as flagship, four destroyers and a wildcard to World 1-4 and score two S-Ranks at the boss node.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"350",
      "S":"0",
      "B":"350"
    },
    "reward":[
      ["C","Instant repair",4],
      ["I","Irako",1]
    ],
    "requires":["B70"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["1-4"]
    }
  },
  "B76":{
    "Jp":"製油所地帯沿岸の哨戒を実施せよ！",
    "En":"Patrol the Coastal Refinery Zone!",
    "content":"Sortie a fleet with a light aircraft carrier as flagship, three destroyers and two wildcards to World 1-3 and score an S-Rank at the boss node.",
    "tips":"",
    "ressources":{
      "F":"600",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Furniture box medium",1],
      ["I","Furniture Fairy", 1]
    ],
    "requires":["B9"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["1-3"]
    }
  },
  "B77":{
    "Jp":"水雷戦隊、南西諸島海域を哨戒せよ！",
    "En":"Torpedo Squadron, patrol the Nansei Islands area!",
    "content":"Sortie a fleet with a light cruiser as flagship, four destroyers and one wildcard to both World 2-2 and World 2-3, and score an S-Rank at each boss node.",
    "tips":"",
    "ressources":{
      "F":"600",
      "A":"600",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Furniture Fairy",1],
      ["I","Irako",1]
    ],
    "requires":["C2"],
    "unlocks":["F38","B82"],
    "period":"once",
    "needs":{
      "M":["2-2","2-3"]
    }
  },
  "B78":{
    "Jp":"「第十九駆逐隊」出撃せよ！",
    "En":"19th Destroyer Division, sortie!",
    "content":"Sortie a fleet with Isonami, Uranami, Ayanami and Shikinami to World 1-5, and score at least an A-Rank at the boss node.",
    "tips":"※Because of the branching rules you can have only these four in your fleet. Enjoy the pre-boss compass trolling.",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",3],
      ["I","Irako", 1]
    ],
    "requires":["A72"],
    "unlocks":["B79"],
    "period":"once",
    "needs":{
      "M":["1-5"]
    }
  },
  "B79":{
    "Jp":"「第十九駆逐隊」敵主力に突入せよ！",
    "En":"19th Destroyer Division, engage the enemy main forces!",
    "content":"Sortie a fleet with Isonami, Uranami, Ayanami, Shikinami and up to two wildcards to World 2-5, and score at least an A-Rank at the boss node.",
    "tips":"",
    "ressources":{
      "F":"600",
      "A":"600",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["C","Improvement material",4],
      ["I","Underway Replenishment",1]
    ],
    "requires":["B78"],
    "unlocks":["B86"],
    "period":"once",
    "needs":{
      "M":["2-5"],
      "S":["Isonami", "Uranami", "Ayanami", "Shikinami"]
    }
  },
  "B80":{
    "Jp":"飛行場設営の準備を実施せよ！",
    "En":"Prepare for the Construction of the Land-Base!",
    "content":"Sortie to World 6-3 and obtain an S-rank at the boss node.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Construction Corps",1]
    ],
    "requires":["B41", "B62"],
    "unlocks":["B81","F49"],
    "period":"once",
    "needs":{
      "M":["6-3"]
    }
  },
  "B81":{
    "Jp":"夜間突入！敵上陸部隊を叩け！",
    "En":"Rush into Night Battle! Attack the Enemy Landing Forces!",
    "content":"Sortie to World 5-3 and obtain at least an A-rank at the boss node.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Construction Corps",1]
    ],
    "requires":["B80"],
    "unlocks":["B90"],
    "period":"once",
    "needs":{
      "M":["5-3"]
    }
  },
  "B82":{
    "Jp":"夜の海を照らす「灯り」を入手せよ！",
    "En":"Obtain the Searchlight that brightens the Dark Sea!",
    "content":"Sortie to World 2-1 and obtain an S-rank at the boss node.",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"100",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","Searchlight",1],
      ["I","Combat Ration",1]
    ],
    "requires":["B77"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["2-1"]
    }
  },
  "B83":{
    "Jp":"南西諸島防衛線を増強せよ！",
    "En":"Reinforce the Nansei Islands Defense Line!",
    "content":"Sortie a fleet with an AV or CAV as flagship and up to five wildcards to World 1-4 and obtain an S-rank at the boss node.",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Furniture box medium",1],
      ["I","Furniture Fairy",1]
    ],
    "requires":["Unknown"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["1-4"]
    },
  },
  "B84":{
    "Jp":"「第十六戦隊(第三次)」出撃せよ！",
    "En":"16th Cruiser Division (3rd GeneRation), sortie!",
    "content":"Sortie a fleet with Kinu, Aoba, Kitakami, Ooi and up to two wildcards to World 2-4 and obtain at least an A-Rank at the boss node.",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"0",
      "S":"0",
      "B":"400"
    },
    "reward":[
      ["I","Irako",1],
      ["F","Furniture: \"Ship Girl Cushion Floor\"",1]
    ],
    "requires":["A73"],
    "unlocks":["A74"],
    "period":"once",
    "needs":{
      "M":["2-4"],
      "S":["Kinu", "Aoba", "Kitakami", "Ooi"]
    }
  },
  "B85":{
    "Jp":"精鋭「第十六戦隊」突入せよ！",
    "En":"Elite 16th Cruiser Division, engage the enemy!",
    "content":"Sortie a fleet with Kinu Kai Ni as flagship and any combination of Kitakami Kai Ni, Ooi Kai Ni, Kuma Kai, Aoba Kai, Uranami Kai or Shikinami Kai to World 2-5 and obtain an S-Rank at the boss node.",
    "tips":"",
    "ressources":{
      "F":"600",
      "A":"600",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","Toku Daihatsu Landing Craft",1]
    ],
    "requires":["A74"],
    "unlocks":["B86"],
    "period":"once",
    "needs":{
      "M":["2-5"],
      "S":["Kinu Kai Ni", "Kitakami Kai Ni", "Ooi Kai Ni", "Kuma Kai", "Aoba Kai", "Uranami Kai", "Shikinami Kai"]
    }
  },
  "B86":{
    "Jp":"輸送作戦を成功させ、帰還せよ！",
    "En":"Complete a transport mission and return!",
    "content":"Sortie a fleet with Kinu Kai Ni as flagship, Uranami Kai, exactly three other destroyers, and up to one wildcard (not a DD) to World 2-2 and obtain an S-Rank at the boss node.",
    "tips":"",
    "ressources":{
      "F":"1000",
      "A":"0",
      "S":"1000",
      "B":"3000"
    },
    "reward":[
      ["C","Improvement material",5],
      ["I","Underway Replenishment",1]
    ],
    "requires":["B79", "B85"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["2-2"],
      "S":["Kinu Kai Ni", "Uranami Kai"]
    }
  },
  "B87":{
    "Jp":"重巡戦隊、抜錨せよ！",
    "En":"Heavy Cruiser Division, Set Sail!",
    "content":"Sortie a CA(V) as flagship, three other CA(V), and two additional ships to World 2-3 and obtain an S-Rank at the boss node.",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"400",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Irako",1],
      ["F","Furniture: \"Knit and Flooring\"",1]
    ],
    "requires":["A9"],
    "unlocks":["B88","B95","G5"],
    "period":"once",
    "needs":{
      "M":["2-3"]
    }
  },
  "B88":{
    "Jp":"戦艦戦隊、出撃せよ！",
    "En":"Sortie a Battleship Division!",
    "content":"Sortie a (F)BB(V) as flagship, 1 other (F)BB(V) and up to 4 additional ships to World 3-3 and obtain an S-Rank at the boss node.",
    "tips":"※Due to the branching rules you're required to bring at least 2 CV(L).※You will be prompted to choose between one of the two equipment rewards, so choose wisely.",
    "ressources":{
      "F":"0",
      "A":"800",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["C","Improvement material",2],
      ["E","PBY-5A Catalina",1,"Choose one: "],
      ["E","Type 2 Seaplane Fighter Kai",1,"or "]
    ],
    "requires":["B8", "B87"],
    "unlocks":["F51","D21"],
    "period":"once",
    "needs":{
      "M":["3-3"]
    }
  },
  "B89":{
    "Jp":"主力戦艦戦隊、抜錨せよ！",
    "En":"Main BB Fleet, Sortie out!",
    "content":"Sortie a fleet which includes 2 or more slow BB/BBV Obtain S-Rank Victory at the Boss node of World 2-4",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"800",
      "S":"400",
      "B":"0"
    },
    "reward":[
      ["I","Irako",1],
      ["E","Improved Kanhon Type Turbine",1,"Choose one: "],
      ["E","Enhanced Kanhon Type Boiler",1,"or "]
    ],
    "requires":["B19"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["2-4"]
    }
  },
  "B90":{
    "Jp":"精鋭「第八駆逐隊」突入せよ！",
    "En":"Elite 8th DD Division, Sortie!",
    "content":"Sortie a Fleet with Arashio Kai Ni as Flagship, which includes at least one of either Asashio, Ooshio or Michishio as well.Sortie to World 5-5 and obtain 2 A-rank or higher victories!",
    "tips":"",
    "ressources":{
      "F":"800",
      "A":"800",
      "S":"0",
      "B":"800"
    },
    "reward":[
      ["I","Reinforcement Expansion",1],
      ["C","Improvement material",4]
    ],
    "requires":["B73", "B81"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["5-5"],
      "S":["Arashio Kai Ni", "Asashio", "Ooshio" , "Michishio"]
    }
  },
  "B91":{
    "Jp":"潜水艦隊、中部海域の哨戒を実施せよ！",
    "En":"Submarine Fleet, patrol the Central Waters!",
    "content":"Sortie a Fleet consisting of 4 SS(V) with an SS(V) as flagship and 2 additional ships.Sortie to World 6-1 and score a victory at the boss node.",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",3],
      ["I","Irako",1]
    ],
    "requires":["B69", "Bd5"],
    "unlocks":["B92", "Bq2","B94","F49","F50","Bq4"],
    "period":"once",
    "needs":{
      "M":["6-1"]
    }
  },
  "B92":{
    "Jp":"重装甲巡洋艦、鉄底海峡に突入せよ！",
    "En":"Heavy Armored Cruiser, Embark into the Iron Bottom Sound!",
    "content":"Sortie Zara due as Flagship with 5 additional ships.Sortie to World 5-3 and score an A-rank or higher victory at the boss node.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"700",
      "B":"0"
    },
    "reward":[
      ["E","New Kanhon Design Anti-torpedo Bulge (Medium)",1]
    ],
    "requires":["B91"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["5-3"],
      "S":["Zara due"]
    }
  },
  "B93":{
    "Jp":"南西諸島方面の敵艦隊を撃破せよ！",
    "En":"Defeat the Enemy Fleet at the Nansei Islands!",
    "content":"Sortie a Fleet with a CL as flagship and 5 additional ships.Sortie to World 1-4, 2-2, 2-3 and score S rank victories at the boss nodes.",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"0",
      "S":"300",
      "B":"300"
    },
    "reward":[
      ["I","Irako",1],
      ["I","Mamiya",1]
    ],
    "requires":["Unknown"],
    "unlocks":["B94"],
    "period":"once",
    "needs":{
      "M":["1-4","2-3","2-2"]
    }
  },
  "B94":{
    "Jp":"洋上航空戦力を拡充せよ！",
    "En":"Expand the Offshore Aviation Forces!",
    "content":"Sortie a Fleet with an AV/CV/CVL/CVB as Flagship and 5 additional ships.Sortie to World 3-5, 4-4, 6-2 and score S-rank victories at the boss nodes.",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"500",
      "S":"0",
      "B":"1000"
    },
    "reward":[
      ["C","Development material",5],
      ["I","Skilled Crew Member",1]
    ],
    "requires":["B93", "B91"],
    "unlocks":["F52"],
    "period":"once",
    "needs":{
      "M":["3-5", "4-4", "6-2"]
    }
  },
  "B95":{
    "Jp":"改装航空巡洋艦、出撃！",
    "En":"Remodeled Aviation Cruiser, Sortie!",
    "content":"Sortie a Fleet with Suzuya Kai Ni as the flagship.Sortie to World 5-1, 5-3 and obtain A rank or higher victories at the boss nodes.",
    "tips":"※The CVL version cannot complete the quest. Must be CAV.",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"300",
      "B":"700"
    },
    "reward":[
      ["C","Improvement material",4],
      ["E","Kyoufuu Kai",1,"Choose one: "],
      ["E","New Kanhon Design Anti-torpedo Bulge (Medium)",1,"or "]
    ],
    "requires":["B87","B50"],
    "unlocks":["B96","A76"],
    "period":"once",
    "needs":{
      "M":["5-1","5-3"],
      "S":["Suzuya Kai Ni"]
    }
  },
  "B96":{
    "Jp":"改装攻撃型軽空母、前線展開せよ！",
    "En":"Remodeled Attack Light Aircraft Carrier, Deploy to the Frontlines!",
    "content":"Sortie a Fleet with Suzuya Carrier Kai Ni as the flagship.Sortie to World 6-2, 6-5 and obtain S-rank victories at the Boss nodes.",
    "tips":"※The CAV version cannot complete the quest. Must be CVL.",
    "ressources":{
      "F":"0",
      "A":"1000",
      "S":"0",
      "B":"1000"
    },
    "reward":[
      ["E"," Type 0 Fighter Model 63 (Fighter-bomber)",1],
      ["E","8cm High-angle Gun Kai + Extra Machine Guns",1]
    ],
    "requires":["B95"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["6-2","6-5"],
      "S":["Suzuya Carrier Kai Ni"]
    }
  },
  "B97":{
    "Jp":"鎮守府海域警戒を厳とせよ！",
    "En":"Patrol the Naval Base Ocean Areas Vigilantly!",
    "content":"Sortie a fleet with a Cruiser as the flagship, with at least 2 Destroyers.Sortie to World 1-2, 1-3, 1-4, 1-5 and obtain S-rank victories at the Boss nodes.",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"400",
      "S":"400",
      "B":"0"
    },
    "reward":[
      ["I","Irako",2],
      ["I","Furniture Fairy",1]
    ],
    "requires":["Unknown"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["1-2", "1-3", "1-4", "1-5"]
    }
  },
  "B98":{
    "Jp":"海上護衛体制の強化に努めよ！",
    "En":"Focus the Strengthening of the Maritime Escort !",
    "content":"Sortie a fleet with at least 3 Destroyers or Coastal Defense Ships to world 1-3, 1-4, 1-5, S rank the boss nodes. Sortie to world 1-6 and reqch node N.",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"0",
      "S":"0",
      "B":"400"
    },
    "reward":[
      ["C","Development material",4],
      ["I","Furniture Fairy",1]
    ],
    "requires":["Bd2"],
    "unlocks":["B99","B100"],
    "period":"once",
    "needs":{
      "M":["1-6", "1-3", "1-4", "1-5"]
    }
  },
  "B99":{
    "Jp":"新編「第一戦隊」、抜錨せよ！",
    "En":"Sortie the New First Squadron!",
    "content":"Sortie a fleet with Nagato Kai Ni as flagship, Mutsu Kai as second ship and up to 4 additional ships to world 4-5 and 5-5. S rank the boss nodes.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"880",
      "S":"880",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",4],
      ["E","New Kanhon Design Anti-torpedo Bulge (Large)",1]
    ],
    "requires":["A75","B98"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["4-5", "5-5"],
      "S":["Nagato Kai Ni","Mutsu Kai"]
    }
  },
  "B100":{
    "Jp":"増強海上護衛総隊、抜錨せよ！",
    "En":"Enhanced Maritime Escort Fleet, Sortie!",
    "content":"Sortie a fleet with 1 Light Cruiser, 2 Destroyers or Coastal Defense Ships, 1 Aviation Cruiser or Light Carrier, up to 2 additional ships to world 2-2, 2-3, 2-4, 2-5 and obtain A rank victories at the boss nodes.",
    "tips":"",
    "ressources":{
      "F":"700",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Medal",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ],
    "requires":["Bw5","B98"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["2-2", "2-3", "2-4", "2-5"]
    }
  },
  "B101":{
    "Jp":"新編「第七戦隊」、出撃せよ！",
    "En":"New Seventh Squadron, Sortie!",
    "content":"Sortie a fleet with Kumano Kai Ni/Kumano Carrier Kai Ni as flagship, Suzuya Kai Ni/Suzuya Carrier Kai Ni as second ship, Mogami Kai, Mikuma Kai, up to 2 additional ships to world 4-5, 6-2 and obtain S rank victories at the boss nodes.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"1000",
      "B":"500"
    },
    "reward":[
      ["C","Improvement material",4],
      ["I","Medal",1],
      ["I","New Model Gun Mount Improvement Material",1],
      ["E","Type 0 Fighter Model 63 (Fighter-bomber)",1],
    ],
    "requires":["A76","C2"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "S":["Kumano Kai Ni", "Suzuya Kai Ni", "Mogami Kai", "Mikuma Kai"],
      "M":["4-5", "6-2"]
    }
  },
  "B102":{
    "Jp":"精鋭「第四航空戦隊」、抜錨せよ！",
    "En":'Elite "Fourth Carrier Division", set sail!',
    "content":"Sortie Ise and Hyuuga both above level 50 as flagship and 2nd ship along with 1CL + 2 DD and 1 additional ship to World 2-5, 3-5 and obatain at least A rank victory at the boss node.",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"0",
      "S":"500",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",4],
      ["I","Medal",1,"Choose one: "],
      ["I","Skilled Crew Member",1,"or "]
    ],
    "requires":["A77"],
    "unlocks":["F58"],
    "period":"once",
    "needs":{
      "S":["Ise", "Hyuuga"],
      "M":["2-5", "3-5"]
    }
  },
  "B103":{
    "Jp":"旗艦「由良」、抜錨！",
    "En":"Flagship Yura, set sail!",
    "content":"Sortie Yura Kai Ni as flagship, with at least 2 of the following ships: Murasame, Yuudachi, Harusame, Samidare, Akizuki, up to 3 additional ships to World 2-3, 5-1 and obtain A rank or above victory at the boss node.",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"400",
      "S":"0",
      "B":"400"
    },
    "reward":[
      ["I","Skilled Crew Member",1],
      ["I","Reinforcement Expansion",1,"Choose one: "],
      ["E","Daihatsu Landing Craft",1,"or "]
    ],
    "requires":["A78"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "S":["Yura Kai Ni", "Murasame", "Yuudachi", "Harusame", "Samidare", "Akizuki"],
      "M":["2-3", "5-1"]
    }
  },
  "B104":{
    "Jp":"精鋭「第二二駆逐隊」出撃せよ!",
    "En":"Sortie the Elite 22th Destroyer Squadron!",
    "content":"Sortie a torpedo squadron consists of Fumizuki Kai Ni, Satsuki Kai Ni, Minazuki Kai and Nagatsuki Kai to world 3-2 and obtain an S-rank victory at the boss node.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"700",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["I","Reinforcement Expansion",1,"Choose one: "],
      ["E","Daihatsu Landing Craft",1,"or "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ],
    "requires":["A79"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "S":["Fumizuki Kai Ni", "Satsuki Kai Ni", "Minazuki Kai", "Nagatsuki Kai"],
      "M":["3-2"]
    }
  },


  "WF01":{
    "Jp":"式の準備！(その壱)",
    "En":"PrepaRation for the Ceremony (Part I)",
    "content":"Scrap equipment twice",
    "tips":"",
    "ressources":{
      "F":"88",
      "A":"88",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["A16"],
    "unlocks":["WC01"],
    "period":"once",
    "needs":{}
  },
  "WC01":{
    "Jp":"式の準備！(その弐)",
    "En":"PrepaRation for the Ceremony (Part II)",
    "content":"Win two battles in Exercises",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"88",
      "B":"88"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["WF01"],
    "unlocks":["WA01"],
    "period":"once",
    "needs":{}
  },
  "WA01":{
    "Jp":"式の準備！(その参)",
    "En":"PrepaRation for the Ceremony (Part III)",
    "content":"Have a level 90 to 99 ship as your flagship",
    "tips":"",
    "ressources":{
      "F":"88",
      "A":"88",
      "S":"88",
      "B":"88"
    },
    "reward":[
      ["I","Large furniture box",1]
    ],
    "requires":["WC01"],
    "unlocks":["WB01"],
    "period":"once",
    "needs":{}
  },
  "WB01":{
    "Jp":"式の準備！(最終)",
    "En":"PrepaRation for the Ceremony (Final)",
    "content":"Defeat the boss in 2-3 with a Level 90-99 flagship (with S rank)",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Marriage Ring and Documents",1]
    ],
    "requires":["WA01"],
    "unlocks":["WA02"],
    "period":"once",
    "needs":{
      "M":["2-3"]
    }
  },
  "WA02":{
    "Jp":"新たなる旅立ち！",
    "En":"A New Voyage",
    "content":"Have a Level 100 ship as your flagship along with five others in your main fleet",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"200",
      "B":"200"
    },
    "reward":[
      ["I","Repair Team",1]
    ],
    "requires":["WB01"],
    "unlocks":["WB02"],
    "period":"once",
    "needs":{
      "I":["Marriage Ring and Documents",1]
    }
  },
  "WB02":{
    "Jp":"二人でする初めての任務！",
    "En":"A Couple's First Quest",
    "content":"Defeat the boss in 4-3 with a level 100+ flagship (with S rank)",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"300",
      "B":"300"
    },
    "reward":[
      ["F","Thin Futon",1]
    ],
    "requires":["WA02"],
    "unlocks":["A40"],
    "period":"once",
    "needs":{
      "M":["4-3"]
    }
  },
  "G1":{
    "Jp":"はじめての「近代化改修」！",
    "En":"The First Modernization",
    "content":"Perform a successful modernization",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"50",
      "B":"30"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":[],
    "unlocks":["G2"],
    "period":"once",
    "needs":{}
  },
  "G2":{
    "Jp":"艦の「近代化改修」を実施せよ！",
    "En":"Carry Out Ship Modernizations",
    "content":"Perform 2 successful modernizations within the same day",
    "tips":"",
    "ressources":{
      "F":"20",
      "A":"20",
      "S":"50",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",1]
    ],
    "requires":["G1"],
    "unlocks":["G3"],
    "period":"daily",
    "needs":{}
  },
  "G3":{
    "Jp":"「近代化改修」を進め、戦備を整えよ！",
    "En":"Proceed with Modernization, and Prepare for War",
    "content":"Perform 15 successful modernizations within the same week",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"300",
      "B":"100"
    },
    "reward":[
      ["C","Instant construction",1],
      ["C","Development material",2]
    ],
    "requires":["G2"],
    "unlocks":["G5"],
    "period":"weekly",
    "needs":{}
  },
  "G4":{
    "Jp":"「大型艦建造」の準備！(その壱)",
    "En":"PrepaRation for Large Ship Construction (Part I)",
    "content":"Perform 4 successful modernizations",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"400",
      "B":"400"
    },
    "reward":[],
    "requires":["A14"],
    "unlocks":["F10"],
    "period":"once",
    "needs":{}
  },
  "G5":{
    "Jp":"航空艤装の近代化改修",
    "En":"Modernisation of Aircraft Carrier Rigging",
    "content":"Prepare 5500 steel & 2500 bauxite, then perform 2 successful modernizations on a CV(B) each with 5 carriers as material.",
    "tips":"※Modernisation target must be a CV(B). CVL and AV do not count.※Modernisation materials can be CV or CVL. AV does not count.※You don't have to modernise the same carrier twice.※You must use 5 CV(L) at once for each modernisation attempt.※The specified resources will be consumed upon clearing the quest.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","New Technology Aircraft Blueprint",1]
    ],
    "requires":["G3", "B87"],
    "unlocks":[],
    "period":"once",
    "needs":{}
  },
  "F1":{
    "Jp":"はじめての「建造」！",
    "En":"The First Construction",
    "content":"Craft a ship",
    "tips":"",
    "ressources":{
      "F":"50",
      "A":"50",
      "S":"50",
      "B":"50"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":[],
    "unlocks":["F2"],
    "period":"once",
    "needs":{}
  },
  "F2":{
    "Jp":"はじめての「開発」！",
    "En":"The First Development",
    "content":"Craft a piece of equipment",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"100",
      "S":"100",
      "B":"100"
    },
    "reward":[
      ["C","Development material",2]
    ],
    "requires":["F1"],
    "unlocks":["F3","F5"],
    "period":"once",
    "needs":{}
  },
  "F3":{
    "Jp":"はじめての「解体」！",
    "En":"The First Dismantling",
    "content":"Dismantle a ship",
    "tips":"",
    "ressources":{
      "F":"60",
      "A":"60",
      "S":"60",
      "B":"60"
    },
    "reward":[
      ["C","Instant construction",1],
      ["C","Development material",1]
    ],
    "requires":["F2"],
    "unlocks":["F4"],
    "period":"once",
    "needs":{}
  },
  "F4":{
    "Jp":"はじめての「廃棄」！",
    "En":"The First Scrapping",
    "content":"Scrap a piece of equipment",
    "tips":"",
    "ressources":{
      "F":"80",
      "A":"80",
      "S":"80",
      "B":"80"
    },
    "reward":[
      ["C","Instant repair",2],
      ["C","Development material",1]
    ],
    "requires":["F3"],
    "unlocks":["F42","F48"],
    "period":"once",
    "needs":{}
  },
  "F5":{
    "Jp":"新装備「開発」指令",
    "En":"Instructions to Develop New Equipment",
    "content":"Craft a piece of equipment(Failures are OK)",
    "tips":"",
    "ressources":{
      "F":"40",
      "A":"40",
      "S":"40",
      "B":"40"
    },
    "reward":[
      ["C","Instant construction",1],
      ["C","Development material",1]
    ],
    "requires":["F2"],
    "unlocks":["F6"],
    "period":"daily",
    "needs":{}
  },
  "F6":{
    "Jp":"新造艦「建造」指令",
    "En":"Instructions to Construct New Ship",
    "content":"Craft a ship",
    "tips":"",
    "ressources":{
      "F":"50",
      "A":"50",
      "S":"50",
      "B":"50"
    },
    "reward":[
      ["C","Instant repair",1],
      ["C","Development material",1]
    ],
    "requires":["F5"],
    "unlocks":["F7"],
    "period":"daily",
    "needs":{}
  },
  "F7":{
    "Jp":"装備「開発」集中強化！",
    "En":"Intensify the ConcentRation in Developing Equipment",
    "content":"Craft 3 pieces of equipment(Failures are OK)",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"100",
      "S":"100",
      "B":"100"
    },
    "reward":[
      ["C","Development material",2]
    ],
    "requires":["F6"],
    "unlocks":["F8","F51","F53","F58"],
    "period":"daily",
    "needs":{}
  },
  "F8":{
    "Jp":"艦娘「建造」艦隊強化！",
    "En":"Strengthen the Fleet by Constructing Shipgirls",
    "content":"Craft 3 ships",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"300",
      "B":"100"
    },
    "reward":[
      ["C","Instant construction",1],
      ["C","Development material",2]
    ],
    "requires":["F7"],
    "unlocks":["F9", "F16", "F18"],
    "period":"daily",
    "needs":{}
  },
  "F9":{
    "Jp":"軍縮条約対応！",
    "En":"Response to Disarmament Treaty",
    "content":"Scrap 2 ships",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["C","Instant repair",1]
    ],
    "requires":["F8"],
    "unlocks":[],
    "period":"daily",
    "needs":{}
  },
  "F10":{
    "Jp":"「大型艦建造」の準備！(その弐)",
    "En":"PrepaRation for Large Ship Construction (Part II)",
    "content":"Scrap equipment 4 times",
    "tips":"",
    "ressources":{
      "F":"800",
      "A":"800",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["A","Unlocks Large Ship Construction",1]
    ],
    "requires":["G4"],
    "unlocks":[],
    "period":"once",
    "needs":{}
  },
  "F11":{
    "Jp":"輸送用ドラム缶の準備",
    "En":"PrepaRation for Transport Use Drum Canister",
    "content":"Scrap equipment 3 times",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"30",
      "B":"0"
    },
    "reward":[
      ["E","Drum Canister (Transport Use)",3]
    ],
    "requires":["A5"],
    "unlocks":[],
    "period":"once",
    "needs":{}
  },
  "F12":{
    "Jp":"資源の再利用(その弐)",
    "En":"Recycling Resources (Part II)",
    "content":"Scrap equipment 24 times",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"100",
      "B":"0"
    },
    "reward":[
      ["E","Drum Canister (Transport Use)",1]
    ],
    "requires":["Bw5"],
    "unlocks":["C9"],
    "period":"weekly",
    "needs":{}
  },
  "F13":{
    "Jp":"機種転換",
    "En":"Model Conversion: Type 97 Torpedo Bomber (Tomonaga Squadron)",
    "content":"Have a Carrier secretary equipped with Type 97 Torpedo Bomber (Tomonaga Squadron), scrap 2 Tenzan.",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Tenzan Model 12 (Tomonaga Squadron)",1]
    ],
    "requires":["B25"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["Type 97 Torpedo Bomber (Tomonaga Squadron)",1],["Tenzan",2]]
    }
  },
  "F14":{
    "Jp":"機種転換",
    "En":"Model Conversion: Type 99 Dive Bomber (Egusa Squadron)",
    "content":"Have a Carrier secretary equipped with Type 99 Dive Bomber (Egusa Squadron), then scrap 2 Suisei.",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Suisei (Egusa Squadron)",1]
    ],
    "requires":["B25"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["Type 99 Dive Bomber (Egusa Squadron)",1],["Suisei",2]]
    }
  },
  "F15":{
    "Jp":"機種転換",
    "En":"Model Conversion: Zero Fighter Model 52C (601 Air Group)",
    "content":"Have a Carrier secretary equipped with Zero Fighter Model 52C (601 Air Group), then scrap 2 Reppuu.",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Reppuu (601 Air Group)",1]
    ],
    "requires":["B28"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["Zero Fighter Model 52C (601 Air Group)",1],["Reppuu",2]]
    }
  },
  "F16":{
    "Jp":"「伊良湖」の準備",
    "En":"PrepaRation for Irako",
    "content":"Scrap equipment 10 times",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Irako",4]
    ],
    "requires":["F8","B2"],
    "unlocks":[],
    "period":"once",
    "needs":{}
  },
  "F17":{
    "Jp":"はじめての「装備改修」！",
    "En":"The First Equipment Improvement",
    "content":"Do equipment modernization 1 time",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"100",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",7]
    ],
    "requires":["A45"],
    "unlocks":["F18","F54"],
    "period":"once",
    "needs":{}
  },
  "F18":{
    "Jp":"装備の改修強化",
    "En":"Reinforce Improvement for Equipment",
    "content":"Do equipment modernization 1 time",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"50",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",1]
    ],
    "requires":["F8", "F17"],
    "unlocks":["F34","F50"],
    "period":"daily",
    "needs":{}
  },
  "F19":{
    "Jp":"機種転換",
    "En":"Model Conversion: Type 97 Torpedo Bomber (Murata Squadron)",
    "content":"Have Shoukaku equipped with Type 97 Torpedo Bomber (Murata Squadron) as secretary, scrap 2 Tenzan.",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Tenzan Model 12 (Murata Squadron)",1]
    ],
    "requires":["B50"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["Type 97 Torpedo Bomber (Murata Squadron)",1],["Tenzan",2]],
      "S":["Shoukaku"]
    }
  },
  "F20":{
    "Jp":"精鋭「九七式艦攻」部隊の編成",
    "En":"Organize the Elite Type 97 Torpedo Bomber Force",
    "content":"Have Shoukaku or Akagi as secretary, scrap 3 Type 97 Torpedo Bomber",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Type 97 Torpedo Bomber (Murata Squadron)",1]
    ],
    "requires":["B50"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["Type 97 Torpedo Bomber",3]],
      "S":["Akagi","Shoukaku"]
    }
  },
  "F21":{
    "Jp":"試作艤装の準備",
    "En":"PrepaRation of the Prototype Equipment",
    "content":"Scrap equipment 7 times",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"100",
      "B":"0"
    },
    "reward":[
      ["I","Prototype Flight Deck Catapult",1]
    ],
    "requires":["D19"],
    "unlocks":["A59","F26"],
    "period":"once",
    "needs":{}
  },
  "F22":{
    "Jp":"精鋭「艦戦」隊の新編成",
    "En":"Organize the New Elite Fighter Force",
    "content":"Prepare a Skilled Crew Member in your inventory, have Houshou equipped a rank 7 Type 0 Fighter Model 21 as secretary , then scrap 2 Type 0 Fighter Model 21 and a Type 96 Fighter.",
    "tips":"※Equipment must be unlocked.※One is consumed in the process.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Type 0 Fighter Model 21 (Skilled)",1]
    ],
    "requires":["A19", "Bm6"],
    "unlocks":["F24", "F28"],
    "period":"monthly",
    "needs":{
      "E":[["Type 0 Fighter Model 21",3],["Type 96 Fighter",1]],
      "S":["Houshou"],
      "I":[["Skilled Crew Member",1]]
    }
  },
  "F23":{
    "Jp":"試製航空艤装の追加試作",
    "En":"Addition to Prototype Aviation Equipment",
    "content":"Scrap equipment 9 times",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"100",
      "B":"50"
    },
    "reward":[
      ["I","Prototype Flight Deck Catapult",1]
    ],
    "requires":["B54","A59"],
    "unlocks":["F29","A62"],
    "period":"once",
    "needs":{}
  },
  "F24":{
    "Jp":"機種転換",
    "En":"Model Conversion: Type 0 Fighter Model 21 (Skilled)",
    "content":"Equip a Type 0 Fighter Model 21 (Skilled) on a Carrier secretary, then scrap 2 Type 0 Fighter Model 52.",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Type 0 Fighter Model 52 (Skilled)",1]
    ],
    "requires":["F22", "A59"],
    "unlocks":["F25", "F26"],
    "period":"once",
    "needs":{
      "E":[["Type 0 Fighter Model 21 (Skilled)",1],["Type 0 Fighter Model 52",2]]
    }
  },
  "F25":{
    "Jp":"機種転換",
    "En":"Model Conversion: Type 0 Fighter Model 21 (Skilled)",
    "content":"Equip a rank 7 Type 0 Fighter Model 21 (Skilled) on a Carrier secretary, then scrap 2 Type 0 Fighter Model 52.",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Type 0 Fighter Model 52 (Skilled)",1]
    ],
    "requires":["Bm5", "F24"],
    "unlocks":[],
    "period":"monthly",
    "needs":{
      "E":[["Type 0 Fighter Model 21 (Skilled)",1],["Type 0 Fighter Model 52",2]]
    }
  },
  "F26":{
    "Jp":"「艦戦」隊の再編成",
    "En":"Reorganize the Fighter Force: Type 0 Fighter Model 52 (Skilled)",
    "content":"Equip a rank 7 Type 0 Fighter Model 52 (Skilled) on Zuikaku as secretary, then scrap Zero Fighter Model 52C (601 Air Group).",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Zero Fighter Model 52C (w/ Iwai Flight)",1]
    ],
    "requires":["B53", "F24","F21"],
    "unlocks":["F27"],
    "period":"once",
    "needs":{
      "E":[["Type 0 Fighter Model 52 (Skilled)",1],["Zero Fighter Model 52C (601 Air Group)",1]],
      "S":["Zuikaku"]
    }
  },
  "F27":{
    "Jp":"機種転換",
    "En":"Model Conversion & Reorganization: Zero Fighter Model 52C (w/ Iwai Flight)",
    "content":"Equip a rank 7 Zero Fighter Model 52C (w/ Iwai Flight) on Zuikaku as secretary, then scrap 2 Type 0 Fighter Model 62 (Fighter-bomber).",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Zero Fighter Model 62 (Fighter-bomber / Iwai Squadron)",1]
    ],
    "requires":["F26", "B54"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["Zero Fighter Model 52C (w/ Iwai Flight)",1],["Type 0 Fighter Model 62 (Fighter-bomber)",2]],
      "S":["Zuikaku"]
    }
  },
  "F28":{
    "Jp":"「艦戦」隊の再編成",
    "En":"Reorganize the Fighter Force: Type 0 Fighter Model 21 (Skilled)",
    "content":"Equip a rank 7 Type 0 Fighter Model 21 (Skilled) on Zuikaku as secretary, then scrap 2 Type 0 Fighter Model 21.",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Zero Fighter Model 21 (w/ Iwamoto Flight)",1]
    ],
    "requires":["A61", "F22"],
    "unlocks":["F29"],
    "period":"once",
    "needs":{
      "E":[["Type 0 Fighter Model 21 (Skilled)",1],["Type 0 Fighter Model 21",2]]
    }
  },
  "F29":{
    "Jp":"機種転換",
    "En":"Model Conversion: Zero Fighter Model 21 (w/ Iwamoto Flight)",
    "content":"Equip a rank 7 Zero Fighter Model 21 (w/ Iwamoto Flight) on Zuikaku as secretary, then scrap 2 Type 0 Fighter Model 52.",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Zero Fighter Model 52A (w/ Iwamoto Flight)",1]
    ],
    "requires":["F23", "F28"],
    "unlocks":["A62"],
    "period":"once",
    "needs":{
      "E":[["Zero Fighter Model 21 (w/ Iwamoto Flight)",1],["Type 0 Fighter Model 52",2]],
      "S":["Zuikaku"]
    }
  },
  "F30":{
    "Jp":"機種転換",
    "En":"Model Conversion & Reorganization: Zero Fighter Model 52A (w/ Iwamoto Flight)",
    "content":"Equip a rank 7 Zero Fighter Model 52A (w/ Iwamoto Flight) on Zuikaku as secretary, then scrap 2 Saiun.",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Type 0 Fighter Model 53 (Iwamoto Squadron)",1]
    ],
    "requires":["A62"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["Zero Fighter Model 52A (w/ Iwamoto Flight)",1],["Saiun",2]],
      "S":["Zuikaku"]
    }
  },
  "F31":{
    "Jp":"新家具の準備",
    "En":"PrepaRations for New Furniture",
    "content":"Scrap 9 pieces of equipment",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"90",
      "B":"0"
    },
    "reward":[
      ["I","Furniture Fairy",1]
    ],
    "requires":["Bd2"],
    "unlocks":["B64"],
    "period":"once",
    "needs":{}
  },
  "F32":{
    "Jp":"新装備の準備",
    "En":"PrepaRations for New Equipment",
    "content":"Scrap 5 pieces of equipment.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"50",
      "B":"0"
    },
    "reward":[
      ["I","Furniture box medium",1]
    ],
    "requires":["Bw2","A13"],
    "unlocks":["C9"],
    "period":"once",
    "needs":{}
  },
  "F33":{
    "Jp":"上陸戦用新装備の調達",
    "En":"Supply of New Landing Force Equipment",
    "content":"Scrap two 7.7mm Machine Gun and two 12.7mm Single Machine Gun Mount",
    "tips":"",
    "ressources":{
      "F":"50",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","Special Type 2 Amphibious Tank",1]
    ],
    "requires":["C9","B46"],
    "unlocks":["B69"],
    "period":"once",
    "needs":{
      "E":[["12.7mm Single Machine Gun Mount",2],["7.7mm Machine Gun",2]]
    }
  },
  "F34":{
    "Jp":"対空機銃量産",
    "En":"Anti-Air Gun Mass Production",
    "content":"Scrap 6 pieces of Anti-Air Guns.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"100",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["C","Improvement material",1],
      ["C","Development material",2]
    ],
    "requires":["F18"],
    "unlocks":["F36"],
    "period":"weekly",
    "needs":{}
  },
  "F35":{
    "Jp":"「熟練搭乗員」養成",
    "En":"Skilled Crew Member Training",
    "content":"Have Houshou equipped with a Type 96 Fighter that is both rank 7 and ★max as secretary . 2 Medals are consumed in the process.",
    "tips":"※Consumes the equipment. ※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["C","Improvement material",4],
      ["I","Skilled Crew Member",1]
    ],
    "requires":["B9"],
    "unlocks":[],
    "period":"quarterly",
    "needs":{
      "E":[["Type 96 Fighter",1]],
      "S":["Houshou"],
      "I":[["Medal",2]]
    }
  },
  "F36":{
    "Jp":"新型魚雷兵装の開発",
    "En":"Development of a New Torpedo Armament",
    "content":"Have Shimakaze as secretary equipped with a ★max 61cm Quintuple (Oxygen) Torpedo Mount and a ★max 61cm Triple (Oxygen) Torpedo Mount. 2 Medals are consumed in the process.",
    "tips":"※Consumes the equipment.※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"600",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","Prototype 61cm Sextuple (Oxygen) Torpedo Mount",1]
    ],
    "requires":["B71","F34"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["61cm Quintuple (Oxygen) Torpedo Mount",1],["61cm Triple (Oxygen) Torpedo Mount",1]],
      "I":[["Medal",2]]
    }
  },
  "F37":{
    "Jp":"「航空基地設営」事前準備",
    "En":"PrepaRations for the Construction of an Air Base",
    "content":"Have two 7.7mm Machine Guns & two Type 96 Fighters in your inventory, and scrap two Drum Canisters.",
    "tips":"※Equipment must be unlocked.※Consumes the equipment. ※It doesn't matter whether you scrap the drums before or after procuring the other items.",
    "ressources":{
      "F":"200",
      "A":"0",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["C","Development material",3],
      ["E","Type 96 Land-based Attack Aircraft",1]
    ],
    "requires":["B56"],
    "unlocks":["F38"],
    "period":"once",
    "needs":{
      "E":[["7.7mm Machine Gun",2],["Type 96 Fighter",2],["Drum Canister",2]]
    }
  },
  "F38":{
    "Jp":"「陸攻」隊の増勢",
    "En":"Expansion of Land-based Air Groups",
    "content":"Have two 7.7mm Machine Guns & two Type 99 Dive Bombers in your inventory.",
    "tips":"※Equipment must be unlocked.※Consumes the equipment.",
    "ressources":{
      "F":"0",
      "A":"200",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["E","Type 96 Land-based Attack Aircraft",1]
    ],
    "requires":["F37", "B77"],
    "unlocks":["F39","F43"],
    "period":"once",
    "needs":{
      "E":[["7.7mm Machine Gun",2],["Type 99 Dive Bomber",2]]
    }
  },
  "F39":{
    "Jp":"主力「陸攻」の調達",
    "En":"Supply of the Land-based Main Bomber Force",
    "content":"Have a Type 96 Land-based Attack Aircraft & two Type 97 Torpedo Bombers in your inventory, and scrap two Type 0 Fighters Model 21.",
    "tips":"※Equipment must be unlocked. ※Consumes the equipment.※It doesn't matter whether you scrap the fighters before or after procuring the other items.",
    "ressources":{
      "F":"250",
      "A":"250",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","Type 1 Land-based Attack Aircraft",1]
    ],
    "requires":["F38", "D9"],
    "unlocks":["F40"],
    "period":"quarterly",
    "needs":{
      "E":[["Type 96 Land-based Attack Aircraft",1],["Type 97 Torpedo Bomber",2],["Type 0 Fighter Model 21",2]]
    }
  },
  "F40":{
    "Jp":"「一式陸攻」性能向上型の調達",
    "En":"Procurement of the improved Type 1 Land-based Attack Aircraft",
    "content":"Have a Type 1 Land-based Attack Aircraft & two Tenzan in your inventory.",
    "tips":"※Equipment must be unlocked. ※Consumes the equipment. ※The land-based aircraft's proficiency level carries over to the reward.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["E","Type 1 Land-based Attack Aircraft Model 22A",1]
    ],
    "requires":["F39", "C10"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["Type 1 Land-based Attack Aircraft",1],["Tenzan",2]]
    }
  },
  "F41":{
    "Jp":"「洋上補給」物資の調達",
    "En":"Monthly Procurement of Maritime Supply Goods",
    "content":"Have 750 fuel, 750 ammo, two Drum Canisters, one Type 91 AP Shell in your inventory, and scrap one Type 3 Shell.",
    "tips":"※Equipment must be unlocked. ※Consumes all the resources and equipment. ※It doesn't matter whether you scrap the shell before or after procuring the other items.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Underway Replenishment",1]
    ],
    "requires":["B54", "Bw5"],
    "unlocks":[],
    "period":"monthly",
    "needs":{
      "E":[["Type 91 AP Shell",1],["Drum Canister",2],["Type 3 Shell",1]],
      "R":[["Fuel",750],["Ammo",750]]
    }
  },
  "F42":{
    "Jp":"「特注家具」の調達",
    "En":"Procurement of Custom-Made Furniture",
    "content":"Have 5000 Furniture Coins, two 25mm Twin Autocannon Mount, two 25mm Triple Autocannon Mount in your inventory, and scrap one 25mm Single Autocannon Mount.",
    "tips":"※Equipment must be unlocked.※Consumes all the resources and equipment. ※It doesn't matter whether you scrap the autocannon before or after procuring the other items.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["I","Furniture Fairy",1]
    ],
    "requires":["F4","A15","C4"],
    "unlocks":["F44"],
    "period":"once",
    "needs":{
      "E":[["25mm Triple Autocannon Mount",2],["25mm Twin Autocannon Mount",2],["25mm Single Autocannon Mount",1]],
      "R":[["Furniture Coins",5000]]
    }
  },
  "F43":{
    "Jp":"中部海域「基地航空隊」展開！",
    "En":"Launch the LBAS to the Central Ocean Area",
    "content":"Prepare 1200 fuel, 3000 bauxite and a Construction Corps in your inventory, scrap 2 Drum Canister (Transport Use)",
    "tips":"※Consumes all the resources and equipment.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["A","Unlocks the first LBAS in World 6",1]
    ],
    "requires":["B62", "F38"],
    "unlocks":["F45"],
    "period":"once",
    "needs":{
      "E":[["Drum Canister",2]],
      "I":[["Construction Corps",1]],
      "R":[["Fuel",1200],["Bauxite",3000]]
    }
  },
  "F44":{
    "Jp":"「特注家具」の調達",
    "En":"Procurement of Custom-made furniture",
    "content":"Scrap 2 12.7cm Twin High-angle Gun Mount, prepare 5000 furniture coin, 2 14cm Single Gun Mount and 2 15.2cm Single Gun Mount (all are consumed upon Quest completion).",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"100",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Furniture Fairy",1]
    ],
    "requires":["F42", "C2"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["14cm Single Gun Mount",2],["12.7cm Twin High-angle Gun Mount",2],["15.2cm Single Gun Mount",2]],
      "R":[["Furniture Coins",5000]]
    }
  },
  "F45":{
    "Jp":"新機軸偵察機の開発",
    "En":"Development of a New Reconnaissance Aircraft",
    "content":"Have one Type 1 Land-based Attack Aircraft, two Saiun in your inventory, and scrap two Type 0 Reconnaissance Seaplane.",
    "tips":"※Equipment must be unlocked. ※Consumes all the equipment.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["C","Development material",2],
      ["E","Prototype Keiun (Carrier-based Reconnaissance Model)",1]
    ],
    "requires":["F43", "A62"],
    "unlocks":["F46","F47"],
    "period":"once",
    "needs":{
      "E":[["Type 1 Land-based Attack Aircraft",1],["Saiun",2],["Type 0 Reconnaissance Seaplane",2]]
    }
  },
  "F46":{
    "Jp":"噴式戦闘爆撃機の開発",
    "En":"Development of Jet-type Bomber",
    "content":"Scrap 3 Shiden Kai 2, have 2 New Technology Aircraft Blueprint and 1 Ne Type Engine prepared.",
    "tips":"※The New Technology Aircraft Blueprints & Ne Type Engine are consumed upon quest completion.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["E","Kikka Kai",1],
      ["C","Development material",2]
    ],
    "requires":["C3", "F45","D21"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["Shiden Kai 2",3]],
      "I":[["New Technology Aircraft Blueprint",2],["Ne Type Engine",1]]
    }
  },
  "F47":{
    "Jp":"ネ式エンジンの増産",
    "En":"Increased Production of the Ne-type Engine",
    "content":"Scrap 3 Type 0 Fighter Model 52. Prepare 2 Reppuu, 2 Ryuusei, and 8000 steel.",
    "tips":"※Equipment must be unlocked.※Consumes the equipment.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Ne Type Engine",1]
    ],
    "requires":["D21", "F45"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["Type 0 Fighter Model 52",3],["Reppuu",2],["Ryuusei",2]],
      "R":[["Steel",8000]]
    }
  },
  "F48":{
    "Jp":"「特注家具」の調達",
    "En":"Procurement of Custom made Furniture (Arsenal Quest)",
    "content":"Scrap 12.7cm Main Gun two times, prepare 5000 furniture coins, 2x 7.7mm AA Gun and 2x Type 96 Fighter. The Equipment and Furniture Coins will all be consumed upon quest completion",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["I","Furniture Fairy",1]
    ],
    "requires":["F4"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["7.7mm AA Gun",2],["12.7cm Main Gun",2],["Type 96 Fighter",2]],
      "R":[["Furniture Coins",5000]]
    }
  },
  "F49":{
    "Jp":"六三一空「晴嵐」隊の編成",
    "En":"Organize the Seiran 631 Air Group!",
    "content":"Equip a Prototype Seiran in first slot and a Zuiun (631 Air Group) in second slot on either I-401, I-13 or I-14 as secretary.",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","Seiran (631 Air Group)",1]
    ],
    "requires":["B91", "B80"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["Prototype Seiran",1],["Zuiun (631 Air Group)",1]],
      "S":["I-401", "I-13", "I-14" ]
    }
  },
  "F50":{
    "Jp":"潜水艦武装の強化",
    "En":"Enhance Submarine Armaments",
    "content":"Prepare 3x 61cm Quadruple (Oxygen) Torpedo Mount, 3x Type 93 Passive Sonar and 120 development materials in your inventory. Scrap 4x 61cm Triple Torpedo Mount.",
    "tips":"※Equipment must be unlocked.",
    "ressources":{
      "F":"0",
      "A":"100",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","Late Model Bow Torpedo Mount (6 tubes)",1]
    ],
    "requires":["F18","B91"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["61cm Quadruple (Oxygen) Torpedo Mount",3],["Type 93 Passive Sonar",3],["61cm Triple Torpedo Mount",4]],
      "C":[["Development material",120]]
    }
  },
  "F51":{
    "Jp":"精鋭「水戦」隊の新編成",
    "En":"Organize the New Elite Seaplane Group",
    "content":"Prepare one Skilled Crew Member in your inventory, equip a Type 2 Seaplane Fighter Kai that is both rank 7 and ★max in the first slot of your Secretary Ship, then scrap 2 Type 0 Fighter Model 21 and 2 Zuiun.",
    "tips":"※Equipment must be unlocked.※One Skilled Crew Member is consumed in the process.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Type 2 Seaplane Fighter Kai (Skilled)",1]
    ],
    "requires":["F7", "B88"],
    "unlocks":["F52"],
    "period":"once",
    "needs":{
      "E":[["Type 2 Seaplane Fighter Kai",1],["Type 0 Fighter Model 21",2],["Zuiun",2]],
      "I":[["Skilled Crew Member",1]]
    }
  },
  "F52":{
    "Jp":"精鋭「水戦」隊の増勢",
    "En":"Expand the New Elite Seaplane Group",
    "content":"Prepare one Skilled Crew Member in your inventory, equip a Type 2 Seaplane Fighter Kai that is both rank 7 and ★max in the first slot of your Secretary Ship, then scrap 2 Type 0 Fighter Model 21 and 2 Zuiun.",
    "tips":"※Equipment must be unlocked.※One Skilled Crew Member is consumed in the process.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["E","Type 2 Seaplane Fighter Kai (Skilled)",1]
    ],
    "requires":["F51", "B94"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "E":[["Type 2 Seaplane Fighter Kai",1],["Type 0 Fighter Model 21",2],["Zuiun",2]],
      "I":[["Skilled Crew Member",1]]
    }
  },
  "F53":{
    "Jp":"新型砲熕兵装、戦力化開始！",
    "En":"Reinforcement of New Model Cannon Improvement, Start!",
    "content":"Prepare 6000 Steel, scrap 10 secondary guns.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"400",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Furniture box medium",1],
      ["I","New Model Gun Mount Improvement Material",1]
    ],
    "requires":["F7"],
    "unlocks":["F54","F56"],
    "period":"once",
    "needs":{
      "R":[["Steel",6000]],
      "E":[["Secondary gun",10]]
    }
  },
  "F54":{
    "Jp":"新型艤装の開発研究",
    "En":"Development of New Type Equipment Fitting Research",
    "content":"Prepare 12000 Steel, scrap 10 secondary guns.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"400",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",2],
      ["I","Medal",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ],
    "requires":["F53","A45","F17"],
    "unlocks":["D23","F55"],
    "period":"once",
    "needs":{
      "R":[["Steel",12000]],
      "E":[["Secondary gun",10]]
    }
  },
  "F55":{
    "Jp":"新型艤装の継続研究",
    "En":"Continuation of New Type Equipment Fitting Research",
    "content":"Prepare 18000 Steel, scrap 10 heavy guns.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"600",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",3],
      ["I","Medal",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ],
    "requires":["D23","F54"],
    "unlocks":[],
    "period":"quarterly",
    "needs":{
      "R":[["Steel",18000]],
      "E":[["Heavy gun",10]]
    }
  },
  "F56":{
    "Jp":"電探技術の射撃装置への活用",
    "En":"Utilizing radar technology for shooting equipment",
    "content":"Prepare 8000 Ammo and Steel, scrap 10 radars.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["C","Development material",2],
      ["I","Medal",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ],
    "requires":["F53"],
    "unlocks":["F57"],
    "period":"once",
    "needs":{
      "R":[["Ammo",8000]],
      "E":[["Radar",10]]
    }
  },
  "F57":{
    "Jp":"民生産業への協力",
    "En":"CoopeRation with the consumer industry",
    "content":"Prepare 12000 fuel, scrap 16 small guns.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"600",
      "B":"0"
    },
    "reward":[
      ["I","Furniture Fairy",1],
      ["I","Medal",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ],
    "requires":["F56"],
    "unlocks":["F59"],
    "period":"once",
    "needs":{
      "R":[["Fuel",12000]],
      "E":[["small gun",16]]
    }
  },
  "F58":{
    "Jp":"精鋭「瑞雲」隊の編成",
    "En":"Organize the Elite Zuiun Group.",
    "content":"Prepare 2 Type 99 Dive Bomber, 2 Zuiun and a Skilled Crew Member in your inventory, have Hyuuga Kai equipped a ★max Zuiun (634 Air Group) in her 4th slot as secretary. Scrap 2 Drum Canister (Transport Use).",
    "tips":"※Equipment must be unlocked.※One Skilled Crew Member Icon is consumed in the process.",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["E","Zuiun (634 Air Group/Skilled)",1]
    ],
    "requires":["B102","F7"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "S":["Hyuuga Kai"],
      "I":[["Skilled Crew Member",1]],
      "E":[["Type 99 Dive Bomber",2],["Zuiun",2],["Drum Canister",2]]
    }
  },
  "F59":{
    "Jp":"民生産業への協力を継続せよ！",
    "En":"Continue your coopeRation with the Consumer Industry.",
    "content":"Prepare 15000 Steel and scrap 10 Anti-Air Guns.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["I","Combat Ration",2],
      ["I","Medal",1,"Choose one: "],
      ["I","Furniture Fairy",1,"or "]
    ],
    "requires":["F57"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "R":[["Steel",15000]],
      "E":[["Anti-Air gun",10]]
    }
  },
  "F60":{
    "Jp":"新型戦闘糧食の試作",
    "En":"The Start of the Special Combat Rations.",
    "content":"Prepare 2 Combat Rations, 800 Fuel and 150 Bauxite.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"100",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Combat Ration (Special Onigiri)",1]
    ],
    "requires":["Unknown"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "R":[["Fuel",800],["Bauxite",150]],
      "I":[["Combat Ration",2]]
    }
  },



  "E1":{
    "Jp":"はじめての「補給」",
    "En":"The First Resupply",
    "content":"Resupply a ship",
    "tips":"",
    "ressources":{
      "F":"20",
      "A":"20",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",1]
    ],
    "requires":["B2"],
    "unlocks":[],
    "period":"once",
    "needs":{}
  },
  "E2":{
    "Jp":"はじめての「入渠」！",
    "En":"The First Repair",
    "content":"Repair a ship",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"30",
      "B":"0"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["B2"],
    "unlocks":["E3"],
    "period":"once",
    "needs":{}
  },
  "E3":{
    "Jp":"艦隊大整備！",
    "En":"The Fleet's Large Maintenance",
    "content":"Repair 5 ships",
    "tips":"",
    "ressources":{
      "F":"30",
      "A":"30",
      "S":"30",
      "B":"30"
    },
    "reward":[
      ["C","Instant repair",2]
    ],
    "requires":["E2"],
    "unlocks":["E4"],
    "period":"daily",
    "needs":{}
  },
  "E4":{
    "Jp":"艦隊酒保祭り！",
    "En":"The Fleet's Canteen Festival",
    "content":"Resupply 15 times (1 time is 1 click of the resupply button)",
    "tips":"",
    "ressources":{
      "F":"50",
      "A":"50",
      "S":"50",
      "B":"50"
    },
    "reward":[
      ["C","Instant construction",1],
      ["C","Development material",1]
    ],
    "requires":["E3"],
    "unlocks":[],
    "period":"daily",
    "needs":{}
  },
  "D1":{
    "Jp":"はじめての「遠征」",
    "En":"The First Expedition",
    "content":"Perform an expedition",
    "tips":"",
    "ressources":{
      "F":"30",
      "A":"30",
      "S":"30",
      "B":"30"
    },
    "reward":[
      ["I","Furniture box small",1]
    ],
    "requires":["A5"],
    "unlocks":["D4","D2"],
    "period":"once",
    "needs":{}
  },
  "D2":{
    "Jp":"「遠征」を3回成功させよう！",
    "En":"Complete 3 Expeditions",
    "content":"Perform 3 successful expeditions within the same day.",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"100",
      "S":"100",
      "B":"100"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["D1"],
    "unlocks":["D3","D22", "B59"],
    "period":"daily",
    "needs":{}
  },
  "D3":{
    "Jp":"「遠征」を10回成功させよう！",
    "En":"Complete 10 Expeditions",
    "content":"Perform 10 successful expeditions within the same day.",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"300",
      "S":"300",
      "B":"150"
    },
    "reward":[
      ["I","Furniture box small",1],
      ["I","Furniture box medium",1]
    ],
    "requires":["D2"],
    "unlocks":[],
    "period":"daily",
    "needs":{}
  },
  "D4":{
    "Jp":"大規模遠征作戦、発令！",
    "En":"Official Announcement, OpeRation Large-scale Expedition",
    "content":"Perform 30 successful expeditions within the same week.",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"500",
      "S":"500",
      "B":"300"
    },
    "reward":[
      ["I","Large furniture box",1],
      ["C","Development material",3]
    ],
    "requires":["D1"],
    "unlocks":[],
    "period":"weekly",
    "needs":{}
  },
  "D5":{
    "Jp":"第一次潜水艦派遣作戦",
    "En":"The First Submarine Dispatch OpeRation",
    "content":"Complete Expedition 30 for the first time",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"10",
      "B":"10"
    },
    "reward":[
      ["I","Repair Team",1]
    ],
    "requires":["A27"],
    "unlocks":["D6"],
    "period":"once",
    "needs":{
      "M":["Exp. 30"]
    }
  },
  "D6":{
    "Jp":"第二次潜水艦派遣作戦",
    "En":"The Second Submarine Dispatch OpeRation",
    "content":"Complete Expedition 30 one more time",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"10",
      "B":"10"
    },
    "reward":[
      ["E","Ju 87C Kai",1]
    ],
    "requires":["D5"],
    "unlocks":["D7", "D20"],
    "period":"once",
    "needs":{
      "M":["Exp. 30"]
    }
  },
  "D7":{
    "Jp":"潜水艦派遣作戦による技術入手の継続",
    "En":"Continue to Obtain Technology through Submarine Dispatch OpeRations",
    "content":"Complete Expedition 30 two more times",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"800"
    },
    "reward":[
      ["E","Ju 87C Kai",1],
      ["I","Furniture Fairy",1]
    ],
    "requires":["D6"],
    "unlocks":["D8"],
    "period":"once",
    "needs":{
      "M":["Exp. 30"]
    }
  },
  "D8":{
    "Jp":"潜水艦派遣による海外艦との接触作戦",
    "En":"OpeRation Contact Foreign Ship through Submarine Dispatch",
    "content":"Complete Expedition 31",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"100",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Furniture box medium",1],
      ["S","Z1",1]
    ],
    "requires":["D7"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["Exp. 31"]
    }
  },
  "D9":{
    "Jp":"南方への輸送作戦を成功させよ！",
    "En":"Complete the Transport OpeRations towards South",
    "content":"Complete Expedition 37 or 38",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Furniture box small",1]
    ],
    "requires":["A30"],
    "unlocks":["D11", "D19","F39"],
    "period":"weekly",
    "needs":{
      "M":["Exp. 37","Exp. 38"]
    }
  },
  "D10":{
    "Jp":"航空火力艦の運用を強化せよ！",
    "En":"Enhance the Use of Aviation Firepower",
    "content":"Complete Expedition 23",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["E","Zuiun (634 Air Group)",1]
    ],
    "requires":["B20"],
    "unlocks":["B23", "D12"],
    "period":"once",
    "needs":{
      "M":["Exp. 23"]
    }
  },
  "D11":{
    "Jp":"南方への鼠輸送を継続実施せよ!",
    "En":"Continue Carrying Out the Rat Transportation (Tokyo Express) towards South",
    "content":"Complete Expedition 37 or 38 a total of 7 times in a week",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"0",
      "S":"0",
      "B":"400"
    },
    "reward":[
      ["C","Development material",2],
      ["C","Improvement material",1]
    ],
    "requires":["D9"],
    "unlocks":[],
    "period":"weekly",
    "needs":{
      "M":["Exp. 37","Exp. 38"]
    }
  },
  "D12":{
    "Jp":"(続)航空火力艦の運用を強化せよ！",
    "En":"(Continuation) Enhance the Use of Aviation Firepower",
    "content":"Complete Expedition 23 four more times",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["E","Zuiun (634 Air Group)",1]
    ],
    "requires":["D10"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["Exp. 23"]
    }
  },
  "D13":{
    "Jp":"遠洋潜水艦作戦を実施せよ！",
    "En":"Carry Out the Deep Sea Submarine OpeRations",
    "content":"Complete Expedition 39",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"200",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","53cm Submarine Bow Torpedo Mount (8 tubes)",1]
    ],
    "requires":["A37"],
    "unlocks":["D14"],
    "period":"once",
    "needs":{
      "M":["Exp. 39"],
      "S":["Taigei"]
    }
  },
  "D14":{
    "Jp":"遠洋潜水艦作戦の成果を拡大せよ！",
    "En":"Expand the Result of the Deep Sea Submarine OpeRations",
    "content":"Complete Expedition 39 two more times",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"400",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["E","53cm Submarine Bow Torpedo Mount (8 tubes)",1]
    ],
    "requires":["D13"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["Exp. 39"],
      "S":["Taigei"]
    }
  },
  "D15":{
    "Jp":"防空射撃演習を実施せよ！",
    "En":"Carry Out Air Defense Exercises",
    "content":"Complete Expedition 6 three times",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"200",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["E","25mm Triple Autocannon Mount",1],
      ["C","Development material",2]
    ],
    "requires":["B7"],
    "unlocks":["B40"],
    "period":"once",
    "needs":{
      "M":["Exp. 6"]
    }
  },
  "D16":{
    "Jp":"囮機動部隊支援作戦を実施せよ！",
    "En":"Carry Out the Decoy Task Force Support OpeRation",
    "content":"Complete Expedition 15",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"0",
      "S":"0",
      "B":"400"
    },
    "reward":[
      ["E","Type 91 Anti-Aircraft Fire Director",1],
      ["C","Development material",2]
    ],
    "requires":["B40"],
    "unlocks":[],
    "period":"once",
    "needs":{
      "M":["Exp. 15"]
    }
  },
  "D17":{
    "Jp":"観艦式予行を実施せよ！",
    "En":"Carry Out Naval Review Rehearsals",
    "content":"Complete Expedition 7 twice",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"0",
      "S":"0",
      "B":"150"
    },
    "reward":[
      ["C","Development material",2]
    ],
    "requires":["A35"],
    "unlocks":["C6"],
    "period":"once",
    "needs":{
      "M":["Exp. 7"]
    }
  },
  "D18":{
    "Jp":"観艦式を敢行せよ！",
    "En":"Execute Naval Review",
    "content":"Complete Expedition 8",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",1],
      ["I","Headquarters Personnel",1]
    ],
    "requires":["C6"],
    "unlocks":["D22"],
    "period":"once",
    "needs":{
      "M":["Exp. 8"]
    }
  },
  "D19":{
    "Jp":"機動部隊の運用を強化せよ！",
    "En":"Enhance the Use of the Task Force",
    "content":"Complete Expeditions 35 and 26",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"400",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",2],
      ["I","Large furniture box",1]
    ],
    "requires":["D9", "B50"],
    "unlocks":["F21","B62"],
    "period":"once",
    "needs":{
      "M":["Exp. 35","Exp. 26"]
    }
  },
  "D20":{
    "Jp":"潜水艦派遣作戦による航空機技術入手",
    "En":"Submarine Dispatch OpeRation to Acquire Aircraft Technology",
    "content":"Complete Expedition 30 & 31",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"100",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["I","New Technology Aircraft Blueprint",1]
    ],
    "requires":["D6"],
    "unlocks":["D21"],
    "period":"once",
    "needs":{
      "M":["Exp. 30","Exp. 31"]
    }
  },
  "D21":{
    "Jp":"潜水艦派遣作戦による噴式技術の入手",
    "En":"Submarine Dispatch OpeRation to Acquire Jet Engine Technology",
    "content":"Have 5000 steel and 1500 bauxite. Complete Expedition 30 and 31 once each. (The resources will be consumed upon Quest Completion)",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"0",
      "S":"0",
      "B":"100"
    },
    "reward":[
      ["I","Ne Type Engine",1],
      ["C","Development material",2]
    ],
    "requires":["D20", "B88"],
    "unlocks":["F47","F46"],
    "period":"once",
    "needs":{
      "M":["Exp. 30","Exp. 31"],
      "R":[["Steel",5000],["Bauxite",1500]]
    }
  },
  "D22":{
    "Jp":"輸送船団護衛を強化せよ！",
    "En":"Reinforce the Transport Escort !",
    "content":"Complete Expedition 5 four times.",
    "tips":"",
    "ressources":{
      "F":"1000",
      "A":"0",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["I","Furniture box medium",2]
    ],
    "requires":["D2", "D18"],
    "unlocks":["D23"],
    "period":"monthly",
    "needs":{
      "M":["Exp. 5"]
    }
  },
  "D23":{
    "Jp":"海上護衛総隊、遠征開始！",
    "En":"Maritime Escort Squadron, Expedition Start!",
    "content":"Complete expedition 4, 5 and 9.",
    "tips":"",
    "ressources":{
      "F":"700",
      "A":"700",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",2],
      ["C","Instant repair",2]
    ],
    "requires":["D22", "F54"],
    "unlocks":["F55"],
    "period":"once",
    "needs":{
      "M":["Exp. 4","Exp. 5","Exp. 9"]
    }
  },
  "D24":{
    "Jp":"海上通商航路の警戒を厳とせよ！",
    "En":"Stay Alert on the Maritime Routes!",
    "content":"Complete expedition 3, expedition 4, expedition 5, expedition 10 once. ",
    "tips":"",
    "ressources":{
      "F":"800",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",4],
      ["I","Combat Ration",2]
    ],
    "requires":["B63"],
    "unlocks":[],
    "period":"quarterly",
    "needs":{
      "M":["Exp. 3","Exp. 4","Exp. 5","Exp. 10"]
    }
  },



  "C1":{
    "Jp":"はじめての「演習」！",
    "En":"The First Exercise",
    "content":"Challenge another fleet in Exercise",
    "tips":"",
    "ressources":{
      "F":"10",
      "A":"10",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":[],
    "unlocks":["C2"],
    "period":"once",
    "needs":{}
  },
  "C2":{
    "Jp":"「演習」で練度向上！",
    "En":"Increase the Level of Training by Exercising",
    "content":"Challenge 3 other fleets in Exercises (defeat is ok) within the same day",
    "tips":"",
    "ressources":{
      "F":"50",
      "A":"0",
      "S":"50",
      "B":"0"
    },
    "reward":[
      ["C","Instant construction",1]
    ],
    "requires":["C1"],
    "unlocks":["C3", "C4", "B58", "B77", "C10", "C11", "F44","A76", "B101"],
    "period":"daily",
    "needs":{}
  },
  "C3":{
    "Jp":"「演習」で他提督を圧倒せよ！",
    "En":"Overwhelm the Other Admirals through Exercises",
    "content":"Get 5 victories in Exercises within the same day",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"50",
      "S":"0",
      "B":"50"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["C2"],
    "unlocks":["F46"],
    "period":"daily",
    "needs":{}
  },
  "C4":{
    "Jp":"大規模演習",
    "En":"Large-scale Exercises",
    "content":"Get 20 victories in Exercises within the same week",
    "tips":"",
    "ressources":{
      "F":"200",
      "A":"200",
      "S":"200",
      "B":"200"
    },
    "reward":[
      ["C","Development material",2],
      ["C","Improvement material",1]
    ],
    "requires":["C2"],
    "unlocks":["F42"],
    "period":"weekly",
    "needs":{}
  },
  "C5":{
    "Jp":"艦隊の練度向上に努めよ！",
    "En":"Strive to Increase the Level of the Fleet's Training",
    "content":"Get 3 victories in Exercises within the same day",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"300",
      "B":"300"
    },
    "reward":[
      ["C","Instant repair",2]
    ],
    "requires":["A50"],
    "unlocks":["B41"],
    "period":"once",
    "needs":{}
  },
  "C6":{
    "Jp":"演習を強化、艦隊の練度向上に努めよ！",
    "En":"Continue Exercising, and Strive to Increase the Level of Fleet's Training",
    "content":"Get 4 victories in Exercises within the same day",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"300",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["C","Improvement material",1]
    ],
    "requires":["D17"],
    "unlocks":["D18"],
    "period":"once",
    "needs":{}
  },
  "C7":{
    "Jp":"北方再突入に備え、練度向上に努めよ！",
    "En":"Strive to Increase the Level of Training in PrepaRation for Another Rush to the Northern Sea",
    "content":"Get 4 victories in Exercises within the same day",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["C","Improvement material",1]
    ],
    "requires":["B46"],
    "unlocks":["A55","B47"],
    "period":"once",
    "needs":{}
  },
  "C8":{
    "Jp":"精鋭艦隊演習",
    "En":"Elite Fleet Practice",
    "content":"Get 7 victories in Exercises within the same day",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"400",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["C","Instant repair",2],
      ["I","Combat provision",1]
    ],
    "requires":["Bd2"],
    "unlocks":[],
    "period":"monthly",
    "needs":{}
  },
  "C9":{
    "Jp":"上陸部隊演習",
    "En":"Landing Force Practice",
    "content":"Get 4 victories in Exercises within the same day",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"200",
      "S":"200",
      "B":"0"
    },
    "reward":[
      ["C","Development material",2],
      ["I","Combat provision",1]
    ],
    "requires":["F32", "Bd2","F12"],
    "unlocks":["F33"],
    "period":"once",
    "needs":{}
  },
  "C10":{
    "Jp":"秋季大演習",
    "En":"Large-scale Autumn Season Exercise",
    "content":"Get 8 victories in Exercises within the same day",
    "tips":"",
    "ressources":{
      "F":"1000",
      "A":"0",
      "S":"300",
      "B":"0"
    },
    "reward":[
      ["I","Mamiya",1],
      ["I","Present box",1]
    ],
    "requires":["C2"],
    "unlocks":["F40"],
    "period":"once",
    "needs":{}
  },
  "C11":{
    "Jp":"冬季大演習",
    "En":"Large-scale Winter Season Exercise",
    "content":"Get 8 victories in Exercises within the same day",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"1000",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Mamiya",1],
      ["C","Instant repair",3]
    ],
    "requires":["C2"],
    "unlocks":[],
    "period":"once",
    "needs":{}
  },



  "Bq1":{
    "Jp":"沖ノ島海域迎撃戦",
    "En":"Okinoshima Sea Counter Attack",
    "content":"Sortie a fleet to World 2-4 and obtain two S-Ranks at the boss node.",
    "tips":"",
    "ressources":{
      "F":"800",
      "A":"800",
      "S":"800",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",5],
      ["I","Mamiya",1]
    ],
    "requires":["Bm6", "B19"],
    "unlocks":[],
    "period":"quarterly",
    "needs":{
      "M":["2-4"]
    }
  },
  "Bq2":{
    "Jp":"戦果拡張任務！「Ｚ作戦」前段作戦",
    "En":"Ranking Expansion Mission: 'OpeRation Z' Frontal OpeRation!",
    "content":"Sortie to World 2-4, 6-1, 6-3 and obtain A-rank or higher victories at the Boss nodes. Sortie to World 6-4 and obtain an S-rank victory at the Boss node.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"2000",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Irako",3],
      ["C","Improvement material",4],
      ["A","350 Ranking points",1]
    ],
    "requires":["Bw2", "B91"],
    "unlocks":[],
    "period":"quarterly",
    "needs":{
      "M":["2-4","6-1","6-3","6-4"]
    }
  },
  "Bq3":{
    "Jp":"強行輸送艦隊、抜錨！",
    "En":"Transport Fleet Forces, Launch!",
    "content":"Sortie a fleet with either 2 Aviation Battleships and up to 4 additional ships or 2 Fleet Oilers along with up to 4 additional ships to world 1-6 and reach the goal point twice.",
    "tips":"",
    "ressources":{
      "F":"1000",
      "A":"400",
      "S":"400",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",4],
    ["I","Underway Replenishment",1]
    ],
    "requires":["B10"],
    "unlocks":["Bq4"],
    "period":"quarterly",
    "needs":{
      "M":["1-6"]
    }
  },
  "Bq4":{
    "Jp":"前線の航空偵察を実施せよ！",
    "En":"Perform aerial reconnaissance on the frontlines!",
    "content":"Sortie a fleet with 1 Seaplane Tender, 2 Light Cruisers + 3 additional ships to world 6-3 and score 2 A-rank or better victories at the boss node.",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"800",
      "S":"0",
      "B":"1000"
    },
    "reward":[
      ["C","Development material",8],
    ["C","Improvement material",4]
    ],
    "requires":["B91","Bq3"],
    "unlocks":[],
    "period":"quarterly",
    "needs":{
      "M":["6-3"]
    }
  },
  "Bm1":{
    "Jp":"「第五戦隊」出撃せよ！",
    "En":"Sortie the 5th Squadron",
    "content":"Sortie Myoukou, Nachi, Haguro and 3 additional ships to World 2-5 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"550",
      "S":"550",
      "B":"0"
    },
    "reward":[
      ["I","Large furniture box",1],
      ["C","Development material",5]
    ],
    "requires":["A35"],
    "unlocks":["B38", "Bm5"],
    "period":"monthly",
    "needs":{
      "M":["2-5"],
      "S":["Myoukou", "Nachi", "Haguro"]
    }
  },
  "Bm2":{
    "Jp":"「潜水艦隊」出撃せよ！?",
    "En":"Sortie the Submarine Fleet",
    "content":"Sortie to World 6-1 and obtain an S-Rank at the boss three times",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"600",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["I","Large furniture box",1],
      ["I","Irako",1]
    ],
    "requires":["B30"],
    "unlocks":[],
    "period":"monthly",
    "needs":{
      "M":["6-1"]
    }
  },
  "Bm3":{
    "Jp":"「水雷戦隊」南西へ！",
    "En":"Torpedo Squadron, toward Southwest",
    "content":"Sortie 1-3 Light Cruisers, with one as flagship, and 3-5 Destroyers to World 1-4 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"0",
      "S":"0",
      "B":"300"
    },
    "reward":[
      ["C","Improvement material",3],
      ["I","Irako",1]
    ],
    "requires":["Bw4"],
    "unlocks":[],
    "period":"monthly",
    "needs":{
      "M":["1-4"]
    }
  },
  "Bm4":{
    "Jp":"「水上打撃部隊」南方へ！",
    "En":"Surface Task Force, toward South",
    "content":"Sortie only 3 of the following classes: Yamato-class, Nagato-class, Ise-class and Fusou-class Slow Battleships, 1 Light Cruiser and 2 additional ships to World 5-1 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"350",
      "A":"400",
      "S":"350",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",3],
      ["C","Improvement material",4]
    ],
    "requires":["A43"],
    "unlocks":["B32"],
    "period":"monthly",
    "needs":{
      "M":["5-1"]
    }
  },
  "Bm5":{
    "Jp":"海上護衛強化月間",
    "En":"Month-long Strengthening of the Marine Escort",
    "content":"Sortie to World 1-5 and obtain an A-Rank or higher at the boss 10 times",
    "tips":"",
    "ressources":{
      "F":"800",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",5],
      ["C","Improvement material",3]
    ],
    "requires":["B21", "Bm1"],
    "unlocks":["B57", "F25"],
    "period":"monthly",
    "needs":{
      "M":["1-5"]
    }
  },
  "Bm6":{
    "Jp":"「空母機動部隊」西へ！",
    "En":"Carrier Task Force, toward West",
    "content":"Sortie 2 Aircraft Carriers (CVL/CV/CVB), 2 Destroyers and 2 additional ships to World 4-2 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"0",
      "S":"600",
      "B":"800"
    },
    "reward":[
      ["I","Large furniture box",2],
      ["C","Improvement material",2]
    ],
    "requires":["B20", "Bw4"],
    "unlocks":["Bm7", "Bq1", "A56", "A59", "F22"],
    "period":"monthly",
    "needs":{
      "M":["4-2"]
    }
  },
  "Bm7":{
    "Jp":"「水上反撃部隊」突入せよ！",
    "En":"Send in the Surface Counterattack Fleet",
    "content":"Sortie a Destroyer as flagship, 1 Heavy Cruiser (CAVs don't count), 1 Light Cruiser and 3 other Destroyers to World 2-5 and obtain an S-Rank at the boss",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"600",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["C","Development material",4],
      ["C","Improvement material",2]
    ],
    "requires":["A46", "Bm6"],
    "unlocks":["A61"],
    "period":"monthly",
    "needs":{
      "M":["2-5"]
    }
  },
  "Bw1":{
    "Jp":"あ号作戦",
    "En":"OpeRation A-gou",
    "content":"Launch your fleet 36 times, encounter 24 bosses, kill 12 bosses, and get 6 S-Rank victories",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"300",
      "B":"100"
    },
    "reward":[
      ["C","Instant construction",2],
      ["C","Development material",2]
    ],
    "requires":["Bd2"],
    "unlocks":["Bw4"],
    "period":"weekly",
    "needs":{}
  },
  "Bw2":{
    "Jp":"い号作戦",
    "En":"OpeRation I-gou",
    "content":"Sink 20 Aircraft Carriers.Light Carriers are fine too",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"500",
      "S":"0",
      "B":"500"
    },
    "reward":[
      ["C","Development material",2]
    ],
    "requires":["Bd5"],
    "unlocks":["Bw5", "F32","Bq2"],
    "period":"weekly",
    "needs":{}
  },
  "Bw3":{
    "Jp":"海上通商破壊作戦",
    "En":"Maritime Trade Disrupt OpeRation",
    "content":"Sink 20 Transport Ships",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"0",
      "S":"400",
      "B":"0"
    },
    "reward":[
      ["C","Development material",3]
    ],
    "requires":["Bd2"],
    "unlocks":["B12"],
    "period":"weekly",
    "needs":{}
  },
  "Bw4":{
    "Jp":"ろ号作戦",
    "En":"OpeRation Ro-gou",
    "content":"Sink 50 Transport Ships",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"0",
      "S":"800",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",3]
    ],
    "requires":["Bw1"],
    "unlocks":["Bw10", "Bm3","Bm6"],
    "period":"weekly",
    "needs":{}
  },
  "Bw5":{
    "Jp":"海上護衛戦",
    "En":"Marine Escort Battle",
    "content":"Sink 15 Submarines",
    "tips":"",
    "ressources":{
      "F":"600",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",2],
      ["C","Improvement material",1]
    ],
    "requires":["Bw2"],
    "unlocks":["Bw6", "Bw7", "F12", "B72", "F41","B100"],
    "period":"weekly",
    "needs":{}
  },
  "Bw6":{
    "Jp":"敵東方艦隊を撃滅せよ！",
    "En":"Destroy the Enemy's Eastern Fleet",
    "content":"Defeat 12 bosses in the World 4: 西方海域",
    "tips":"",
    "ressources":{
      "F":"400",
      "A":"0",
      "S":"0",
      "B":"700"
    },
    "reward":[
      ["C","Development material",2]
    ],
    "requires":["Bw5"],
    "unlocks":["Bw8"],
    "period":"weekly",
    "needs":{
      "M":["4-1","4-2","4-3","4-4","4-5"]
    }
  },
  "Bw7":{
    "Jp":"敵北方艦隊主力を撃滅せよ！",
    "En":"Destroy the Main Force of the Enemy's Northern Fleet",
    "content":"Defeat 5 bosses in the Northern Sea 3-3,  3-4, or 3-5",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"300",
      "S":"400",
      "B":"300"
    },
    "reward":[
      ["I","Furniture box medium",1],
      ["C","Development material",3],
      ["C","Improvement material",3]
    ],
    "requires":["Bw5"],
    "unlocks":[],
    "period":"weekly",
    "needs":{
      "M":["3-3","3-4","3-5"]
    }
  },
  "Bw8":{
    "Jp":"敵東方中枢艦隊を撃破せよ！",
    "En":"Crush the Core of the Enemy's Eastern Fleet",
    "content":"Defeat the boss in 4-4",
    "tips":"",
    "ressources":{
      "F":"500",
      "A":"0",
      "S":"500",
      "B":"0"
    },
    "reward":[
      ["C","Instant repair",1],
      ["C","Development material",1]
    ],
    "requires":["Bw6"],
    "unlocks":["Bw9"],
    "period":"weekly",
    "needs":{
      "M":["4-4"]
    }
  },
  "Bw9":{
    "Jp":"南方海域珊瑚諸島沖の制空権を握れ！",
    "En":"Seize Air Superiority on the Southern Sea Coral Islands",
    "content":"Sortie to 5-2 and get an S-Rank at the boss node 2 times",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"300",
      "S":"0",
      "B":"800"
    },
    "reward":[
      ["C","Development material",2],
      ["C","Improvement material",2]
    ],
    "requires":["Bw8"],
    "unlocks":["B44", "B62"],
    "period":"weekly",
    "needs":{
      "M":["5-2"]
    }
  },
  "Bw10":{
    "Jp":"海上輸送路の安全確保に努めよ！",
    "En":"Strive to Ensure the Security of the Marine Transportation Route",
    "content":"Sortie to 1-5 and get at least an A-rank at the boss node 3 times",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"0",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Improvement material",3]
    ],
    "requires":["A45", "Bw4"],
    "unlocks":[],
    "period":"weekly",
    "needs":{
      "M":["1-5"]
    }
  },
  "Bd1":{
    "Jp":"敵艦隊を撃破せよ！",
    "En":"Crush the Enemy Fleet",
    "content":"Defeat an enemy fleet",
    "tips":"",
    "ressources":{
      "F":"50",
      "A":"50",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["B4"],
    "unlocks":["Bd2", "Bd4", "Bd6", "A54", "A72","B60"],
    "period":"daily",
    "needs":{}
  },
  "Bd2":{
    "Jp":"敵艦隊主力を撃滅せよ！",
    "En":"Destroy the Main Force of the Enemy Fleet",
    "content":"Complete a battle.",
    "tips":"",
    "ressources":{
      "F":"50",
      "A":"50",
      "S":"50",
      "B":"50"
    },
    "reward":[
      ["C","Instant repair",1],
      ["C","Development material",1]
    ],
    "requires":["Bd1"],
    "unlocks":["Bd3", "Bd5", "Bw1", "Bw3", "A66", "A67", "B48", "B63", "C8", "C9", "F31", "B98"],
    "period":"daily",
    "needs":{}
  },
  "Bd3":{
    "Jp":"敵艦隊を10回邀撃せよ！",
    "En":"Ambush the Enemy Fleet 10 Times",
    "content":"Defeat 10 enemy fleets.",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"150",
      "S":"200",
      "B":"100"
    },
    "reward":[
      ["C","Development material",1]
    ],
    "requires":["Bd2"],
    "unlocks":[],
    "period":"daily",
    "needs":{}
  },
  "Bd4":{
    "Jp":"敵空母を3隻撃沈せよ！",
    "En":"Sink 3 Enemy Carriers",
    "content":"Sink 3 enemy Aircraft Carriers. Light Carriers are fine too. Armored Carrier Princess does not workNeed to verify for Seaplane Tender Princess",
    "tips":"",
    "ressources":{
      "F":"150",
      "A":"150",
      "S":"150",
      "B":"300"
    },
    "reward":[
      ["C","Instant repair",2]
    ],
    "requires":["Bd1"],
    "unlocks":[],
    "period":"daily",
    "needs":{}
  },
  "Bd5":{
    "Jp":"敵補給艦を3隻撃沈せよ！",
    "En":"Sink 3 Enemy Transport Ships",
    "content":"Sink 3 enemy Transport Ships",
    "tips":"",
    "ressources":{
      "F":"100",
      "A":"50",
      "S":"200",
      "B":"50"
    },
    "reward":[
      ["C","Instant repair",1],
      ["C","Development material",1]
    ],
    "requires":["Bd2"],
    "unlocks":["Bd7", "Bw2","B91"],
    "period":"daily",
    "needs":{}
  },
  "Bd6":{
    "Jp":"敵輸送船団を叩け！",
    "En":"Strike the Enemy Transport Group",
    "content":"Sink 5 enemy Transport Ships",
    "tips":"",
    "ressources":{
      "F":"0",
      "A":"200",
      "S":"0",
      "B":"0"
    },
    "reward":[
      ["C","Development material",2]
    ],
    "requires":["Bd1"],
    "unlocks":[],
    "period":"daily",
    "needs":{}
  },
  "Bd7":{
    "Jp":"南西諸島海域の制海権を握れ！",
    "En":"Seize Control of the Southwestern Archipelago Sea",
    "content":"Defeat 5 boss nodes in World 2: 南西諸島海域",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"0",
      "S":"0",
      "B":"200"
    },
    "reward":[
      ["C","Instant repair",1],
      ["C","Instant construction",1]
    ],
    "requires":["Bd5"],
    "unlocks":["Bd8"],
    "period":"daily",
    "needs":{
      "M":["2-1", "2-2", "2-3", "2-4", "2-5"]
    }
  },
  "Bd8":{
    "Jp":"敵潜水艦を制圧せよ！",
    "En":"Suppress the Enemy Submarines",
    "content":"Sink 6 enemy Submarines",
    "tips":"",
    "ressources":{
      "F":"300",
      "A":"30",
      "S":"300",
      "B":"30"
    },
    "reward":[
      ["C","Instant repair",1]
    ],
    "requires":["Bd7"],
    "unlocks":["B49"],
    "period":"daily",
    "needs":{}
  },
  "Unknown":{
    "Jp":"知らない必要クエスト",
    "En":"Unknown requierments",
    "content":"The quests linked to this haven't their requiered quests figured out yet.",
    "tips":"Just wqit for qn update",
    "ressources":{
      "F":"#",
      "A":"#",
      "S":"#",
      "B":"#"
    },
    "reward":[],
    "requires":[],
    "unlocks":["B83","B93","B97","F60","A79"],
    "period":"once",
    "needs":{}
  }
}

//test to check if links between quests are correct
Object.keys(ALL_QUESTS_LIST).forEach(quest => {
  ALL_QUESTS_LIST[quest].requires.forEach(req => {

    if (ALL_QUESTS_LIST[req].unlocks.indexOf(quest) === -1){
      console.log(`la quete ${quest} n'est pas dans la liste d'unlocks de la quete ${req}`);
    }
  });
});

Object.keys(ALL_QUESTS_LIST).forEach(quest => {
  ALL_QUESTS_LIST[quest].unlocks.forEach(unlk => {

    if (ALL_QUESTS_LIST[unlk].requires.indexOf(quest) === -1){
      console.log(`la quete ${quest} n'est pas dans la liste de requires de la quete ${unlk}`);
    }
  });
});
