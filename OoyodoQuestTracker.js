$(function () {

  var ALL_QUEST_STATE = {};                     // current quests state
      const has = Object.prototype.hasOwnProperty;
  // function used at the loading of the page
  function initialisation(){
        //load various data in the DOM
        var questCookie = JSON.parse(getCookie('user_quests'));
        loadQuestStateFromCookie(questCookie);
        // if the cookie had a save
        $("#pending_quests").text(getQuestsInState(ALL_QUEST_STATE,"pending").join(", "));
    }

    // return a list of quests with the specified state
    function getQuestsInState(list,state){
      var pendingQuests = [];
      Object.keys(list).forEach(quest =>{
        if (list[quest] === state){
          pendingQuests.push(quest);
        }
      });
      return pendingQuests;
    }

          // load the cookie with the saved state
          function loadQuestStateFromCookie(userQuestCookie){
          var  ALL_QUEST_STATE_TMP = {};
            Object.keys(ALL_QUESTS_LIST).forEach(quest=>{
              ALL_QUEST_STATE_TMP[quest] = '???';
            });

            var progress = JSON.parse(userQuestCookie.progress);
            var missingState = "";

            ["c","p","l"].forEach(key => {
              var state = "";
              switch (key) {
                case "l":
                state = "locked";
                break;
                case "c":
                state = "completed";
                break;
                case "p":
                state = "pending";
                break;
              }
              if (has.call(progress, key)){
                Object.keys(progress[key]).forEach(category=>{
                  progress[key][category].split(",").forEach(questNB=>{
                    ALL_QUEST_STATE_TMP[`${category}${questNB}`] = state;
                  });
                });
              } else {
                missingState = state;
              }
            });

            getQuestsInState(ALL_QUEST_STATE_TMP,"???").forEach(quest => {
              ALL_QUEST_STATE_TMP[quest] = missingState;
            });

          //implement the states
          ALL_QUEST_STATE = cloneObject(ALL_QUEST_STATE_TMP);

          };


          function cloneObject(object) {
            var clone = {};
            Object.keys(object).forEach(key => {
              if (typeof(object[key]) === 'object'){
                clone[key] = cloneObject(object[key]);
              } else {
                clone[key] = object[key];
              }
            });
            return clone;
          }


      initialisation();


      //get cookie data
      function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        // if the cookie doesn't exist
        if (cname === "user_quests"){
          // the empty cookie so the code don't bug if cookies are disabled
          return JSON.stringify({progress:'{"p":{},"l":{}}', undeterminedQuests:[], bookmark:[]});
        } else {
          return "";
        }
      }
    });
