$(function () {

  //  *********   GLOBAL VARIABLES   ************

  //default color object
  const DEFAULT_COLORS = {
    A:{
      pending_color:"#43C769",
      completed_color:"#8cf28c",
      locked_color:"#000000"
    },
    B:{
      pending_color:"#EC6063",
      completed_color:"#f7baba",
      locked_color:"#ff0000"
    },
    C:{
      pending_color:"#93CE67",
      completed_color:"#f7d3ba",
      locked_color:"#ff6600"
    },
    D:{
      pending_color:"#4EBBD4",
      completed_color:"#e8e8fc",
      locked_color:"#3333ff"
    },
    E:{
      pending_color:"#DEC772",
      completed_color:"#f7d3ba",
      locked_color:"#ff6600"
    },
    F:{
      pending_color:"#BA8F79",
      completed_color:"#eda65e",
      locked_color:"#994d00"
    },
    G:{
      pending_color:"#CAA6DD",
      completed_color:"#eda65e",
      locked_color:"#994d00"
    },
    S:{
      pending_color:"#EC6063",
      completed_color:"#f7baba",
      locked_color:"#ff0000"
    },
    W:{
      pending_color:"#FDD0F0",
      completed_color:"#fce8f7",
      locked_color:"#ff33cc"
    },
    nightMode:false,
    pending:{
      border:false,
      border_color:'#000000',
      border_width:5,
      ribbon:true,
      ribbon_color:'#ff0000',
      ribbon_size:0.75,
      background:false,
      background_mode:'Manual',
      background_light:100,
      background_saturation:0,
      background_color:'#ff0000'
    },
    completed:{
      border:true,
      border_color:'#000000',
      border_width:5,
      ribbon:false,
      ribbon_color:'#000000',
      ribbon_size:0.75,
      background:true,
      background_mode:'Auto',
      background_light:35,
      background_saturation:-20,
      background_color:'#ffffff'
    },
    locked:{
      border:false,
      border_color:'#000000',
      border_width:5,
      ribbon:false,
      ribbon_color:'#000000',
      ribbon_size:0.75,
      background:false,
      background_mode:'Auto',
      background_light:0,
      background_saturation:-75,
      background_color:'#ffffff'
    },
    notHighlighted:{
      border:false,
      border_color:'#000000',
      border_width:3,
      ribbon:false,
      ribbon_color:'#000000',
      ribbon_size:0.75,
      background:true,
      background_mode:'Manual',
      background_light:100,
      background_saturation:100,
      background_color:'#ffffff'
    },
    selected:{
      border:true,
      border_color:'#00ff00',
      border_width:25,
      ribbon:false,
      ribbon_color:'#ffffff',
      ribbon_size:0.75,
      background:true,
      background_mode:'Auto',
      background_light:0,
      background_saturation:0,
      background_color:'#ffffff'
    }
  };

  var COLORS     //COLORS parameters currently used
  var ALL_QUEST_STATE = {};                     // current quests state
  var ALL_QUEST_STATE_TMP = {};                 // temporary object used to calculate quests state, global because multiple functions use it
  var myDiagram;                                // the GOJS diagram

  // function used at the loading of the page
  function initialisation(){

    // if there is a color cookie, load it else load the default colors
    var colorsCookie = getCookie('colors');
    COLORS = ( colorsCookie !== '' ) ? JSON.parse(colorsCookie) : cloneObject(DEFAULT_COLORS);

    //load various data in the DOM
    loadRequiredShipList();
    loadRewardList();

    displayAllQuestBoxes(Object.keys(ALL_QUESTS_LIST));
    loadColorPanel();
    //load the pending quests saved in the cookie, or an empty one if no cookie are saved
    calculateQuestState(getCookie('pending_quests').split(', ') || ['A3']);

    loadFlowchart();
    resizeFlowchart( $(window).height() - 280 - 4, $(window).width() - 175 -20);
    displayFlowchart();
    updateAllColors();
  }





  //  ***********    Flowchart functions     ************

  function loadFlowchart() {

    var $ = go.GraphObject.make;  // for conciseness in defining templates

    var bigfont = "bold 70pt Helvetica, Arial, sans-serif";

    //general parameter of diagram
    myDiagram =
    $(go.Diagram, "myDiagramDiv",
    {
      // have mouse wheel events zoom in and out instead of scroll up and down
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
      "toolManager.hoverDelay": 200,
      initialAutoScale: go.Diagram.Uniform,
      "linkingTool.direction": go.LinkingTool.ForwardsOnly,
      initialContentAlignment: go.Spot.Center,
      isReadOnly: true,
      "undoManager.isEnabled": true,
      layout: $(go.LayeredDigraphLayout, {
        isInitial: false,
        isOngoing: false,
        layerSpacing: 250,
        initializeOption: go.LayeredDigraphLayout.InitDepthFirstOut,
        layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource
      })
    });

    var defaultAdornment =
    $(go.Adornment, "Spot",
    $(go.Panel, "Auto",
    $(go.Shape, { fill: null, stroke: "#e60000", strokeWidth: 20 }),
    $(go.Placeholder))
  );

  myDiagram.nodeTemplate =
  $(go.Node, "Auto",
  { selectionAdornmentTemplate: defaultAdornment},
  new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
  $(go.Shape, "Rectangle",
  { portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer",
  toEndSegmentLength: 50, fromEndSegmentLength: 40, name:"SHAPE",
  minSize: new go.Size(200, 150)},
  new go.Binding("fill", "color"),
  new go.Binding("stroke", "strokeColor"),
  new go.Binding("strokeWidth", "strokeWidth")),
  $(go.TextBlock, "Page",
  { margin: 6,
    font: bigfont,
    editable: false,
    name:"TEXT"
  },
  new go.Binding("text", "text").makeTwoWay(),
  new go.Binding("stroke", "text_color")),

  new go.Binding("visible", "visible"),

  $(go.Panel, "Spot",
  new go.Binding("opacity", "ribbon", function(t) { return t ? 1 : 0; }),
  new go.Binding("scale", "ribbon_size"),
  // note that the opacity defaults to zero (not visible),
  // in case there is no "ribbon" property
  { opacity: 0,
    alignment: new go.Spot(1, 0, 5, -5),
    alignmentFocus: go.Spot.TopRight,
    name:"RIBBON"},
    $(go.Shape,  // the ribbon itself
      { geometryString: "F1 M0 0 L30 0 70 40 70 70z",
      stroke: null, strokeWidth: 0 },

      new go.Binding("fill", "ribbon_color")),
      $(go.TextBlock,
        new go.Binding("text", "ribbon_text"),
        { alignment: new go.Spot(1, 0, -29, 29),
          angle: 45, maxSize: new go.Size(100, NaN),
          stroke: "white", font: "bold 13px sans-serif", textAlign: "center",
          name:"RIBBON_TEXT" })
        ),
        { toolTip:
          $(go.Adornment, "Auto",
          $(go.Shape, { fill: "#FFFFCC" }),
          $(go.TextBlock, { margin: 4 },
            new go.Binding("text", "tooltip"))
          )
        }
      );

      // replace the default Link template in the linkTemplateMap
      myDiagram.linkTemplate =
      $(go.Link,  // the whole link panel
        new go.Binding("points").makeTwoWay(),
        { curve: go.Link.None , toShortLength: 25, curviness: 1 },
        $(go.Shape,  // the link shape
          { stroke: "#2F4F4F", strokeWidth:8},
          new go.Binding("stroke", "isHighlighted",
          function(h) { return h ? "#2F4F4F" : "silver"; })
          .ofObject()
        ),
        $(go.Shape,  // the arrowhead
          { toArrow: "Standard", fill: "#2F4F4F", stroke: null, scale:5},
          new go.Binding("fill", "isHighlighted",
          function(h) { return h ? "#2F4F4F" : "silver"; })
          .ofObject()
        )
      );

      //event listenner on click on the background to unselect all
      myDiagram.click = function(e) {
        myDiagram.startTransaction("no highlighteds");
        myDiagram.clearHighlighteds();
        myDiagram.nodes.each(function(n) {
          updateNodeDisplay(n, getQuestColor(n.data.key,ALL_QUEST_STATE[n.data.key],true,false), ALL_QUEST_STATE[n.data.key]);
        });
        myDiagram.commitTransaction("no highlighteds");
      };

      // event listenner that highlight on click on a node
      myDiagram.addDiagramListener("ObjectSingleClicked", function(e) {
        var part = e.subject.part;
        if (!(part instanceof go.Link)){
          hightlightQuest(part.data.key);
        }
      });

      // event listenner that highlight and zoom on double click on a node
      myDiagram.addDiagramListener("ObjectDoubleClicked", function(e) {
        var part = e.subject.part;
        if (!(part instanceof go.Link)){
          zoom(part.data.key);
          hightlightQuest(part.data.key);
        }
      });
    }

    // read in the JSON-format data from the and display it
    function displayFlowchart() {
      myDiagram.model = go.Model.fromJson(buildFlowchart());
      myDiagram.layoutDiagram(true);

    }

    // zoom on the specified node
    function zoom(key) {
      var scale = myDiagram.scale;
      if (scale <0.13){
        scale = 0.18;
      }
      myDiagram.scale = scale;
      var  nodePosition = myDiagram.model.findNodeDataForKey(key).loc.split(' ');
      var   windowSize = {height:$('#myDiagramDiv').height() ,width: $('#myDiagramDiv').width()};
      myDiagram.position = new go.Point(Math.floor(nodePosition[0] - (windowSize.width/2/scale)),Math.floor(nodePosition[1] - (windowSize.height/2/scale)));
    }

    // only display the listed node and recenter the view and the node position
    function displayPartialTree(questList) {
      myDiagram.model.startTransaction("displayPartialTree");
      myDiagram.nodes.each(function(n) { n.visible = !($.inArray(n.data.key,questList) === -1) });
      myDiagram.layoutDiagram(true);
      myDiagram.model.commitTransaction("displayPartialTree");
      myDiagram.zoomToFit();
      myDiagram.alignDocument(go.Spot.Center, go.Spot.Center);
      $("#FC_RM_loading_btn").prop("disabled", true);
    }

    // highlight the quests linked to the selected quests
    function hightlightQuest(quest) {
      //update the footer diplayed data
      $('#FC_FT_select_quest_list').val(quest);
      displayQuestData(quest);
      let  node = myDiagram.findNodeForKey(quest);
      var model = myDiagram.model;
      var requieredQuestList = [];
      model.startTransaction("highlight");
      myDiagram.clearHighlighteds();
      myDiagram.clearSelection();
      myDiagram.nodes.each(function(n) {
        updateNodeDisplay(n, getQuestColor(n.data.key,ALL_QUEST_STATE[n.data.key],false,false),"notHighlighted");
      });
      if($("#FC_RM_highlight_upward").is(':checked')){
        highlightUpward(node);
      }
      //for requirements calculation purposes, the highlight downward will always be run, but only displayed is the checkbox is checked
      highlightDownward(node, requieredQuestList);
      updateNodeDisplay(node, getQuestColor(node.data.key, ALL_QUEST_STATE[node.data.key],true,true), "selected");

      model.commitTransaction("highlight");
      // delete doubles
      requieredQuestList = requieredQuestList.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) === index;
      });
      displayQuestRequirements(requieredQuestList);
    }

    // recrusive function that highlight unlocked quests
    function highlightUpward(node){
      updateNodeDisplay(node, getQuestColor(node.data.key,ALL_QUEST_STATE[node.data.key],true,false),ALL_QUEST_STATE[node.data.key]);
      node.findLinksOutOf().each(function(link) {
        link.isHighlighted = true;
        highlightUpward(link.toNode);
      });
    }

    // recrusive function that highlight required quests
    function highlightDownward(node,requieredQuestList){
      if(node !== null){
        if($.inArray(node.data.key,requieredQuestList)){
          requieredQuestList.push(node.data.key);
        }
        // display only if highlight_downward is checked
        if($("#FC_RM_highlight_downward").is(':checked')){
          updateNodeDisplay(node, getQuestColor(node.data.key,ALL_QUEST_STATE[node.data.key],true,false), ALL_QUEST_STATE[node.data.key]);
        }
        node.findLinksInto().each(function(link) {
          // display only if highlight_downward is checked
          if($("#FC_RM_highlight_downward").is(':checked')){
            link.isHighlighted = true;
          }
          highlightDownward(link.fromNode, requieredQuestList);
        });
      }
    }

    // change the state of a quest and update the unlocked ones
    function setQuestAsCompleted(quest){
      var pendingQuests = getCookie('pending_quests').split(', ');
      //set the quest as completed
      ALL_QUEST_STATE[quest] = 'completed';
      updateQuestStateDisplay(quest);
      pendingQuests.splice(pendingQuests.indexOf(quest),1);

      //set the following quests to pending if all other requierments are completed
      ALL_QUESTS_LIST[quest].unlocks.forEach(unlockedQuest => {
        if ( ALL_QUESTS_LIST[unlockedQuest].requires.every(function(requiredQuest){return ALL_QUEST_STATE[requiredQuest] === 'completed';})){
          ALL_QUEST_STATE[unlockedQuest] = 'pending';
          updateQuestStateDisplay(unlockedQuest);
          updateQuestListDisplay();
          pendingQuests.push(unlockedQuest);
        }
      });
      updateAllColors();
      setCookie('pending_quests',pendingQuests.join(', '),365);
    }


    // ******      FLOWCHART CREATION     *********

    // create the flowchart  from all quests data
    function buildFlowchart(){
      let questNodeDataArray = [];
      let questLinkDataArray = [];
      Object.keys(ALL_QUESTS_LIST).forEach(quest => {
        //create a node
        let color = getQuestColor(quest,ALL_QUEST_STATE[quest],true,false);
        let state = ALL_QUEST_STATE[quest];
        questNodeDataArray.push({
          "key": quest,
          "color": color,
          "text": quest,
          "strokeWidth":(state==='pending' ? 25 : 5),
          "strokeColor": (state==='pending' ? "yellow" : "Black"),
          "visible": true,
          "tooltip":formatTextLineBreak(ALL_QUESTS_LIST[quest].content,65),
          "ribbon_text":state,
          "ribbon":COLORS[state].ribbon,
          "ribbon_size":COLORS[state].ribbon_size,
          "ribbon_color":COLORS[state].ribbon_color,
          "text_color":tinycolor(color).isLight() ? "#000000" : "#ffffff"
        });
        // create its links
        if (ALL_QUESTS_LIST[quest].requires.length !== 0){
          ALL_QUESTS_LIST[quest].requires.forEach(requirement => {
            questLinkDataArray.push({ "from": requirement, "to": quest});
          });
        }
      });
      displayQuestListSelect(Object.keys(ALL_QUESTS_LIST));
      return JSON.stringify({nodeDataArray:questNodeDataArray, linkDataArray:questLinkDataArray});
    };

    // generate and display the quest list select
    function displayQuestListSelect(questList){
      var questListHTML = '';
      questList.forEach(quest => {
        questListHTML += `<option value="${quest}" style="background-color:${getQuestColor(quest,ALL_QUEST_STATE[quest],true,false)};">${quest}</option>`;
      });
      //put the quest list in order
      var optionsList = $(questListHTML);
      optionsList.sort(function(a,b) {
        if (a.text.replace(/[0-9]/g, '') > b.text.replace(/[0-9]/g, '')) return 1;
        if (a.text.replace(/[0-9]/g, '') < b.text.replace(/[0-9]/g, '')) return -1;
        if (a.text.replace(/[0-9]/g, '') == b.text.replace(/[0-9]/g, '')) {
          if (parseInt(a.text.replace( /^\D+/g, ''),10) > parseInt(b.text.replace( /^\D+/g, ''),10)) return 1;
          if (parseInt(a.text.replace( /^\D+/g, ''),10) < parseInt(b.text.replace( /^\D+/g, ''),10)) return -1;
        }
        return 0
      });
      $("#FC_FT_select_quest_list").empty().append( optionsList );
    }

    // sort all the node to display only the one which correspond to starting and ending quests
    function buildPartialFlowchart(){
      let partialQuestList = [];
      let startingQuestsList = questInputToArray($('#FC_RM_starting_quests').val());
      let endingQuestsList =questInputToArray($('#FC_RM_ending_quests').val());
      let direction = (endingQuestsList.length === 0) ? "up" : "down" ;

      $('#FC_RM_starting_quests').val(startingQuestsList.join(', '));
      $('#FC_RM_ending_quests').val(endingQuestsList.join(', '));

      //loopthrough all unlocks and add them to the list. stop if nothing
      //if something is already there remove the whole branch that lead to it (it's a quest that reset itself)
      if(startingQuestsList.length === 0 && endingQuestsList.length === 0){
        displayPartialTree(Object.keys(ALL_QUESTS_LIST));
        displayQuestListSelect(Object.keys(ALL_QUESTS_LIST));
      } else {
        if(direction === 'up'){
          startingQuestsList.forEach(quest => {
            addUnlockedQuests(partialQuestList, quest);
          });
        } else if (direction == 'down'){
          endingQuestsList.forEach(quest => {
            addRequiredQuests(partialQuestList, startingQuestsList, quest);
          });
        }
        displayPartialTree(partialQuestList);
        displayQuestListSelect(partialQuestList);
      }
    }

    // add the quest that are unlocked
    function addUnlockedQuests(partialQuestList, quest){
      if ($.inArray(quest,partialQuestList) === -1){
        partialQuestList.push(quest);
        if(ALL_QUESTS_LIST[quest].unlocks.length !== 0){
          ALL_QUESTS_LIST[quest].unlocks.forEach(unlockedQuest => {
            addUnlockedQuests(partialQuestList,unlockedQuest);
          });
        }
      }
    }

    // add quest that are required to unlock this quest
    function addRequiredQuests(partialQuestList, startingQuestsList, quest){
      if ($.inArray(quest,partialQuestList) === -1){
        partialQuestList.push(quest);
        //if the quest hqve requirement qnd isn't listed as a starting quest
        if(ALL_QUESTS_LIST[quest].requires.length !== 0 && $.inArray(quest,startingQuestsList) === -1){
          ALL_QUESTS_LIST[quest].requires.forEach(requiredQuest => {
            addRequiredQuests(partialQuestList, startingQuestsList, requiredQuest);
          });
        }
      }
    }

    // using pending quests  list calculate the state of all quests
    function calculateQuestState(pendingQuests){
      ALL_QUEST_STATE_TMP = {};
      let inconsistencies_msg = '';

      //reset all states to completed
      Object.keys(ALL_QUESTS_LIST).forEach(quest=>{
        ALL_QUEST_STATE_TMP[quest] = 'completed';
      });
<<<<<<< HEAD
<<<<<<< HEAD
=======
console.log(pendingQuests);
>>>>>>> origin/master
=======
      
>>>>>>> origin/master
      pendingQuests.forEach(quest=>{
        //only for the one-time quests
        if(ALL_QUESTS_LIST[quest].period === 'once') {
          //check if there is inconsistencies <=> its requiered quest aren't completed
          inconsistenciesDownward(quest).forEach(inconsistency => {
            inconsistencies_msg += `${quest} can't be pending if ${inconsistency} hasn't be completed\n`;
          });
          // set the quest to pending
          ALL_QUEST_STATE_TMP[quest] = 'pending';
          //set the following quest to locked
          // since it's not a periodic quest, the following quests are have to be locked
          setQuestStateUpward(quest,'locked').forEach(inconsistency =>{
            inconsistencies_msg += `${inconsistency} can't be pending if ${quest} hasn't be completed\n`;
          });
        } else {
          //just put them in pending quest, but don't bother with the rest
          // since they are periodic, they could have been cleared once
          ALL_QUEST_STATE_TMP[quest] = 'pending';
        }
      });

      //if no inconsistencies were found apply the changes to the list and to the DOM elements classes
      if(inconsistencies_msg === ''){
        ALL_QUEST_STATE = cloneObject(ALL_QUEST_STATE_TMP);
        $(".QL_questBox").removeClass("pending locked completed");
        Object.keys(ALL_QUEST_STATE).forEach(quest =>{
          updateQuestStateDisplay(quest);
        });

        setCookie('pending_quests',pendingQuests.join(', '),365);
      } else {
        $("#IPQ_error_msg").text(inconsistencies_msg);
      }
      return inconsistencies_msg;
    }

    // recusrsive function that update the quests state moving upward and check inconsistencies
    function setQuestStateUpward(quest,state){
      let inconsistencies = [];
      ALL_QUESTS_LIST[quest].unlocks.forEach(nextQuest=>{
        if(ALL_QUEST_STATE_TMP[nextQuest] !== 'pending' && ALL_QUEST_STATE_TMP[nextQuest] !== 'locked'){
          ALL_QUEST_STATE_TMP[nextQuest] = state;
          inconsistencies = inconsistencies.concat(setQuestStateUpward(nextQuest,state));
        }
        if(ALL_QUEST_STATE_TMP[nextQuest] === 'pending'){
          inconsistencies = [nextQuest];
        }
      });
      return inconsistencies;
    }

    // recusrsive function that  check inconsistencies moving downward
    function inconsistenciesDownward(quest){
      let inconsistencies = [];
      ALL_QUESTS_LIST[quest].requires.forEach(previousQuest => {
        if(ALL_QUEST_STATE_TMP[previousQuest] === 'pending'){
          inconsistencies = [previousQuest];
        }
        if(ALL_QUEST_STATE_TMP[previousQuest] === 'locked'){
          inconsistencies = inconsistencies.concat(inconsistenciesDownward(previousQuest));
        }
      });
      return inconsistencies;
    }

    // calculate the requierments for the selected quest (by analyzing the required quest list)
    function calculateQuestRequirements(questList){
      var requirements = {S:[],E:[],M:[],C:[],O:[],Q:[],R:[]};
      var rewardsList = {};

      // if the "hide quest rewards" is checked, the items got as reward and required in following quests won't be displayed
      // so all the reward items are saved in the rewardsList object
      if($("#hideQuestRewards").is(':checked')){
        questList.forEach(quest => {
          ALL_QUESTS_LIST[quest].reward.forEach(reward => {
            rewardsList[reward[1]] = (rewardsList[reward[1]] || 0 ) + reward[2];
          });
        })
      }

      // for each quest save the requierments
      questList.forEach(quest => {
        Object.keys(ALL_QUESTS_LIST[quest].needs).forEach(category =>{
          ALL_QUESTS_LIST[quest].needs[category].forEach(item =>{
            // depending of the category, the data are saved as string or as array, so there are different processes
            if(typeof item === 'string'){
              // string are requierments that doesn't need a quentity (ship, maps...)
              // (so they just need to be in the table once)
              // if the item is not in the table or in the rewards, add it
              if ($.inArray(item,requirements[category]) === -1 && !has.call(rewardsList, item)){
                requirements[category].push(item);
              }
            } else {
              // if the object is an array, it's associated with a quentity (equipemnt, ressources ...)
              var i=0;
              var isInArray = false;
              // for each object in the category array
              while (i<requirements[category].length && !isInArray){
                //check if the name of the item to add is the same as one element of the array
                if (item[0] === requirements[category][i][0]){
                  // if it's the case, it just add its quantity to the quantity saved in array,
                  requirements[category][i][1] += item[1];
                  isInArray = true;
                }
                i++;
              }
              //if the object isn't in the array
              if (!isInArray){
                //check the quantity of the item get as reward before
                var quantity = item[1];
                if(has.call(rewardsList, item[0])){
                  //if it's a reward, substract it's quantity and if there is some left add it to the requierment array
                  quantity = quantity - rewardsList[item[0]];
                  rewardsList[item[0]] = rewardsList[item[0]] - item[1];
                  if (rewardsList[item[0]] <= 0){
                    //TODO test if this is needed or not
                    delete rewardsList[item[0]];
                  }
                }
                if (quantity > 0){
                  requirements[category].push([item[0],quantity]);
                }
              }
            }
          });
        });
      });
      return requirements;
    }

    // create the HTML code for a quest box in the questlist panel
    function createQuestBox(questCode){
      let quest = ALL_QUESTS_LIST[questCode];
      return `<div class="QL_questBox ${quest.period}" id='QL_questBox_${questCode}'>
      <div class="cellDiv" style="width:100%; height:75px;  top:0px; left:0px;">
      <div class="centeredContent">
      ${questCode}: ${quest.Jp}
      <button type="button" class="complete_btn" id='QL_complete_btn_${questCode}' style="width:80px; margin-left:5%; float:right; display:inline-block;">set as completed</button>
      <br>${quest.En}
      </div>
      </div>

      <div class="cellDiv" style="width:100%; height:148px;  top:75px; left:0px;">
      <div class="centeredContent">${quest.content}</div>
      </div>

      <div class="cellDiv" style="width:40%; height:75px;  bottom:75px; left:0px;">
      <div class="centeredContent">${quest.ressources.F} / ${quest.ressources.A} / ${quest.ressources.S} / ${quest.ressources.B}</div>
      </div>

      <div class="cellDiv" style="width:60%; height:75px;  bottom:75px; left:40%;">
      <div class="centeredContent">${parseRewardObject(quest.reward)}</div>
      </div>

      <div class="cellDiv" style="width:50%; height:75px;  bottom:0px; left:0px;">
      <div class="centeredContent">${(quest.requires.length !== 0) ? 'Requires: ' : ''}${quest.requires.join(', ')}</div>
      </div>

      <div class="cellDiv" style="width:50%; height:75px;  bottom:0px; left:50%;">
      <div class="centeredContent">${(quest.unlocks.length !== 0) ? 'Unlocks: ' : ''}${quest.unlocks.join(', ')}</div>
      </div>


      </div>`;
    }

    /*
    <table style="width:100%;height:100%;">
    <tr>
    <td colspan="3" height="75px">${questCode}: ${quest.Jp}
    <button type="button" class="complete_btn" id='QL_complete_btn_${questCode}' style="width:80px; margin-left:5%; float:right; display:inline-block;">set as completed</button>
    <br>${quest.En}
    </td>
    </tr>
    <tr>
    <td colspan="3" height="150px">${quest.content}</td>
    </tr>
    <tr>
    <td width="40%">${quest.ressources.F} / ${quest.ressources.A} / ${quest.ressources.S} / ${quest.ressources.B}</td>
    <td colspan="2" height="50px">${parseRewardObject(quest.reward)}</td>
    </tr>
    <tr>
    <td colspan="2" height="50px">${(quest.requires.length !== 0) ? 'Requires: ' : ''}${quest.requires}</td>
    <td width="50%">${(quest.unlocks.length !== 0) ? 'Unlocks: ' : ''}${quest.unlocks}</td>
    </tr>
    </table>

    */




    // **********    DISPLAY FUNCTIONS   ***********

    // change the colors of a node
    function updateNodeDisplay(node,fill, state){
      node.findObject("SHAPE").fill = fill;
      node.findObject("SHAPE").stroke = COLORS[state].border ? COLORS[state].border_color : "#000000";
      node.findObject("SHAPE").strokeWidth =  COLORS[state].border ? COLORS[state].border_width : 5;
      node.findObject("TEXT").stroke = tinycolor(fill).isLight() ? "#000000" : "#ffffff";
      node.findObject("RIBBON").opacity = COLORS[state].ribbon ? 1 : 0;
      node.findObject("RIBBON_TEXT").text = state;
      node.findObject("RIBBON").fill = COLORS[state].ribbon_color;
      node.findObject("RIBBON").scale = COLORS[state].ribbon_size;
    }

    // change the display of one quest everywhere depending on its state
    function updateQuestStateDisplay(quest){
      var questBox = $(`#QL_questBox_${quest}`);
      var state = ALL_QUEST_STATE[quest];
      questBox.removeClass("pending completed locked").addClass(state);

      if(state === 'pending'){
        $(`#QL_complete_btn_${quest}`).show();
      } else {
        $(`#QL_complete_btn_${quest}`).hide();
      }
    }

    // display quest data in the footer
    function displayQuestData(questCode){
      var quest = ALL_QUESTS_LIST[questCode];
      var color = getQuestColor(questCode,'default')
      $('#FC_FT .cellDiv').css('background', color).css('color',tinycolor(color).isLight() ? "#000000" : "#ffffff");
      $('#FC_FT_quest_info_quest_code').text(questCode);
      $('#FC_FT_quest_info_name_Japanese').text(quest.Jp);
      $('#FC_FT_quest_info_name_English').text(quest.En);
      $('#FC_FT_quest_info_content').text(quest.content);
      $('#FC_FT_quest_info_ressources').text(`${quest.ressources.F} / ${quest.ressources.A} / ${quest.ressources.S} / ${quest.ressources.B}`);
      $('#FC_FT_quest_info_reward').html(parseRewardObject(quest.reward));
      $('#FC_FT_quest_info_requires').html(((quest.requires.length !== 0) ? `Requires: <br>${quest.requires}` : ''));
      $('#FC_FT_quest_info_unlocks').html(((quest.unlocks.length !== 0) ? `Unlocks: <br>${quest.unlocks}` : ''));
      if(ALL_QUEST_STATE[questCode] === 'pending'){
        $(`#FC_FT_quest_info_complete_btn`).show();
      } else {
        $(`#FC_FT_quest_info_complete_btn`).hide();
      }
      /*
      if(COLORS[ALL_QUEST_STATE[questCode]].border){
      $("#FC_FT")
      .css("border-width",COLORS[ALL_QUEST_STATE[questCode]].border_width)
      .css("border-color",COLORS[ALL_QUEST_STATE[questCode]].border_color);
    } else {
    $("#FC_FT").css("border-width",'2px').css("border-color",'black');
  }*/
}

// display all the quest boxes listed
function displayAllQuestBoxes(listQuests){
  listQuests.forEach(quest => {
    $("#QL_quest_boxes").append(createQuestBox(quest));
  });
}

// display selected quest requirements in the footer
function displayQuestRequirements(questList){
  var requirements = calculateQuestRequirements(questList);
  var requirementsHTML = '';

  Object.keys(requirements).forEach(category =>{
    if(requirements[category].length > 0){
      requirements[category].sort();
      var categoryTxt = letterCodeNameCorrespondance("requirements",category);
      requirementsHTML += `<input type="checkbox" class="FC_FT_show_requirements" id="FC_FT_show_requirements_${categoryTxt}">
      <strong>${categoryTxt}</strong><br>
      <div id="requirements_${categoryTxt}">`;
      requirements[category].forEach(item => {
        if(typeof item === 'string'){
          requirementsHTML += `${item}<br>`;
        } else {
          requirementsHTML += `${item[1]} x ${item[0]}<br>`;
        }
      });
      requirementsHTML += "</div>";
    }
  });
  if(requirementsHTML === ''){
    requirementsHTML = '<center><br><br>NONE</center>';
  }
  $("#FC_FT_quest_requirement_list").html(requirementsHTML);
  $(".FC_FT_show_requirements").change(function(){
    var divId = $(this).attr("id").substring(11);
    if ($(this).is(':checked')){
      $(`#${divId}`).show();
    } else {
      $(`#${divId}`).hide();
    }
  }).trigger('change');;
}

// return the quest colors depending its state
function getQuestColor(quest,state,highlight,selected){
  //get the base color
  var questLetter = quest.charAt(0);
  var color = tinycolor(COLORS[questLetter][`${state}_color`]);

  //if the state is "default", it will just retrun the pending color of quest without modifications
  if(state === 'default'  /*||   !$("#showStateColors").is(':checked')*/){
    color = tinycolor(COLORS[questLetter].pending_color);
  } else {

    // if the background is activated for this state, update the color
    // manual will set the color to manual color
    if(COLORS[state].background){
      if(COLORS[state].background_mode === 'Manual'){
        color = tinycolor(COLORS[state].background_color);
      }
      // auto will apply change to the pending color
      if(COLORS[state].background_mode === 'Auto'){
        color = lightSaturationModifications(COLORS[questLetter].pending_color,COLORS[state].background_light,COLORS[state].background_saturation);
      }
    }

    //after the definition of base color depending quest and state,
    // the selected and highlighted parameter are considered if they have background modificators
    //selected option take priorioty on highlight

    if(selected && COLORS.selected.background){
      if(COLORS.selected.background_mode === 'Auto'){
        color = lightSaturationModifications(color,COLORS.selected.background_light,COLORS.selected.background_saturation);
      } else if(COLORS.selected.background_mode === 'Manual') {
        color = tinycolor(COLORS.selected.background_color);
      }
    } else if(!highlight && COLORS.notHighlighted.background){
      if(COLORS.notHighlighted.background_mode === 'Auto'){
        color = lightSaturationModifications(color,COLORS.notHighlighted.background_light,COLORS.notHighlighted.background_saturation);
      } else if(COLORS.notHighlighted.background_mode === 'Manual'){
        color = tinycolor(COLORS.notHighlighted.background_color);
      }
    }
  }

  return color.toHexString();
}

// update all colors everywhere after change in the COLORS object
function updateAllColors(){
  //diagram nodes
  // quest boxes
  $(".QL_questBox").each(function(){
    var quest = $(this).attr("id").split('_')[2];
    var color = getQuestColor(quest,ALL_QUEST_STATE[quest],true,false);
    var state = ALL_QUEST_STATE[quest];
    $(this).css("background-color",color)
    .css("color",tinycolor(color).isLight() ? "#000000" : "#ffffff")
    .find(".cellDiv").css("border-color", tinycolor(color).isLight() ? "#000000" : "#ffffff");
    if(COLORS[ALL_QUEST_STATE[quest]].border){
      $(this).css("border-width",COLORS[ALL_QUEST_STATE[quest]].border_width)
      .css("border-color",COLORS[ALL_QUEST_STATE[quest]].border_color)
      .css("margin",12 - COLORS[ALL_QUEST_STATE[quest]].border_width);
    } else {
      $(this).css("border-width",'2px').css("border-color",'black').css("margin",10);
    }
    if(COLORS[state].ribbon){
      addRibbonToDiv($(this),COLORS[state].ribbon_color, COLORS[state].ribbon_size, state);
    } else {
      removeRibbonFromDiv($(this));
    }
  });
  //select quest list box
  $("#FC_FT_select_quest_list option").each(function(){
    var quest = $(this).val();
    var color = getQuestColor(quest,ALL_QUEST_STATE[quest],true,false);
    $(this).css("background-color",color).css("color",tinycolor(color).isLight() ? "#000000" : "#ffffff");
  });
  //quest info panel
  var selectedQuest = $("#FC_FT_select_quest_list option:selected").val();
  if (selectedQuest){
    $("#FC_FT_quest_info").css("background-color",getQuestColor(selectedQuest,'default'));
    if(COLORS[ALL_QUEST_STATE[selectedQuest]].border){
      $("#FC_FT_quest_info").css("border-width",COLORS[ALL_QUEST_STATE[selectedQuest]].border_width)
      .css("border-color",COLORS[ALL_QUEST_STATE[selectedQuest]].border_color);
    }else{
      $("#FC_FT_quest_info").css("border-width",'2px').css("border-color",'black');
    }
  }
  //nodes on flowchart
  if(myDiagram){
    var model = myDiagram.model;
    model.startTransaction("highlight");
    myDiagram.clearHighlighteds();
    myDiagram.clearSelection();
    myDiagram.nodes.each(function(n) {
      updateNodeDisplay(n, getQuestColor(n.data.key,ALL_QUEST_STATE[n.data.key],true,false),ALL_QUEST_STATE[n.data.key]);
    });
    model.commitTransaction("highlight");
  }
}

// put the list of required ships in the dropdown list
function loadRequiredShipList(){
  var requiredShipList = {};
  Object.keys(ALL_QUESTS_LIST).forEach(quest => {
    if (has.call(ALL_QUESTS_LIST[quest].needs, 'S')){
      ALL_QUESTS_LIST[quest].needs.S.forEach(ship => {
        var shipName = ship.split(" ")[0];
        var questArray = (requiredShipList[shipName] || []);
        questArray.push(quest);
        requiredShipList[shipName] = questArray;
      });
    }
  });
  var requiredShipListHTML = "<option value='[]'>Select a ship</option>";
  Object.keys(requiredShipList).forEach(ship => {
    requiredShipListHTML += `<option value='${JSON.stringify(requiredShipList[ship])}'>${ship}</option>`;
  });
  $("#QL_RM_select_required_ship").html(requiredShipListHTML);
}

// put the list of required ships in the dropdown list
function loadRewardList(){
  var rewardList = {};
  var rewardType = $(`input[name=QL_RM_search_reward]:checked`).val();
  Object.keys(ALL_QUESTS_LIST).forEach(quest => {
    ALL_QUESTS_LIST[quest].reward.forEach(reward => {
      if(reward[0] === rewardType){
        var questArray = (rewardList[reward[1]] || []);
        questArray.push(quest);
        rewardList[reward[1]] = questArray;
      }
    });
  });

  var rewardListHTML = "<option value='[]'>Select a reward</option>";
  Object.keys(rewardList).sort().forEach(reward => {
    rewardListHTML += `<option value='${JSON.stringify(rewardList[reward])}'>${reward}</option>`;
  });
  $("#QL_RM_search_select_reward").html(rewardListHTML);
}

// show only the questboxes listed
function updateQuestListDisplay(){
  $(`.QL_questBox`).hide();
  var displayedState = JSON.parse($("input[name=QL_RM_display_state]:checked").val()).state;
  var displayedPeriod = [];
  $( ".QL_RM_display_period:checked" ).each(function(){
    displayedPeriod.push($(this).val());
    displayedState.forEach(state => {
      $(`.QL_questBox.${$(this).val()}.${state}`).show();
    });
  });
  $("#QL_RM_displayed_state").text(displayedState.length === 3 ? "All" : displayedState);
  $("#QL_RM_displayed_period").text(displayedPeriod.length === 5 ? "All" :
  displayedPeriod.length === 0 ? "None" : formatTextLineBreak(displayedPeriod.toString().replace(/,/g,", "),25) );
}

//load the color setting panel with the cookies / default data
function loadColorPanel(){
  //Create the HTML code of color panel
  var questLetters = ['A','B','C','D','E','F','G','S','W'];

  var tbodyColorHTML = '';
  questLetters.forEach(letter =>{
    tbodyColorHTML += `<tr>
    <td> ${letter} :</td>
    <td> <input type='text' class="colorpicker" id="CP_${letter}_pending_color"/></td>
    <td> <input type='text' class="colorpicker" id="CP_${letter}_completed_color"/></td>
    <td> <input type='text' class="colorpicker" id="CP_${letter}_locked_color"/></td>
    </tr>`;
  });
  $('#CP_tbodyColor').html(tbodyColorHTML);

  //fill the HTML with COLORS Values
  $(".colorpicker").each(function(){
    var id = $(this).attr("id").split('_');
    $(this).spectrum({
      showInitial: true,
      clickoutFiresChange: false,
      color: getQuestColor(id[1],id[2],true,false),//COLORS[id[1]][`${id[2]}_${id[3]}`],
      disabled: COLORS[id[2]].background,
      change: function(color){
        COLORS[id[1]][`${id[2]}_${id[3]}`] = color.toHexString();
        updateExampleBox(id[1],id[2]);
      }

    });
  });

  $(".state_colorpicker").each(function(){
    var id = $(this).attr("id").split('_');

    $(this).spectrum({
      showInitial: true,
      clickoutFiresChange: false,
      change: function(color){
        var state = $("#CP_state_settings :radio[name=CP_select_setting_state]:checked").val();
        COLORS[state][`${id[2]}_${id[3]}`] = color.toHexString();
        updateExampleBox('',state);
      }
    });

    if($(this).attr("id") === 'CP_settings_background_color'){
      $(this).on('change.spectrum', function(e, color) {
        var state = $("#CP_state_settings :radio[name=CP_select_setting_state]:checked").val();
        displayColorInPickerBoxes(state);
      });
    }

  });

  // when changing state selection, reload the new state settings
  $("#CP_state_settings :radio[name=CP_select_setting_state]").change(function(){
    var state = $(this).val();

    //check the right mode for background
    $(`#CP_state_settings :radio[name=CP_settings_background][value="${COLORS[state].background_mode}"]`).prop('checked',true);


    //check the boxes
    $(".CP_toogle_setting_element").each(function(){
      var setting = $(this).attr("id").split("_")[2];
      var checked = COLORS[state][setting];
      $(this).prop("checked", checked);
      $(this).trigger("change");
    });

    //load the settings range
    $(".settings_range").each(function(){
      var id = $(this).attr("id").split('_');
      var value = COLORS[state][`${id[2]}_${id[3]}`];
      $(this).val(value);
      $(`#${$(this).attr("id")}_value`).text(value);
    });

    //load the color pickers
    $(".state_colorpicker").each(function(){
      var id=$(this).attr("id").split('_');
      $(this).spectrum("set",  COLORS[state][`${id[2]}_${id[3]}`]);
    });

    // load the example box
    updateExampleBox("", state);
  });
}


// load all the colors for one state column in the color panel
function displayColorInPickerBoxes(state){
  var availability = $("#CP_settings_background").is(":checked")  ? 'disable' : 'enable' ;
  $(`input[id$=${state}_color]`).each(function(){
    var quest = $(this).prop("id").split('_')[1];
    $(this).spectrum(availability).spectrum("set",  getQuestColor(quest,state,true,false));
  });
}

// show the color changes on the example box
function updateExampleBox(_quest, _state){
  var value = $("#CP_example").attr("value").split("_");
  var quest = _quest || value[0];
  var state = '';
  var selected = false;
  var notHighlighted = false;
  switch (_state){
    case 'selected':{
      state = value[1];
      selected = true;
      notHighlighted = false;
      break;
    }
    case 'notHighlighted':{
      state = value[1];
      selected = false;
      notHighlighted = true;
      break;
    }
    default:{
      state = _state || value[1];
      selected = false;
      notHighlighted = false;
    }
  }

  $("#CP_example").attr("value",`${quest}_${state}`)
  .css('background-color',getQuestColor(quest,state,!notHighlighted, selected))
  .css('border-width',COLORS[_state || state].border_width)
  .css('border-color',COLORS[_state || state].border_color)
  .children().text(`${quest}${Math.floor((Math.random() * 99) + 1)}`);

  if (COLORS[_state || state].ribbon){
    addRibbonToDiv($("#CP_example"), COLORS[_state || state].ribbon_color, COLORS[_state || state].ribbon_size, state);
  } else {
    removeRibbonFromDiv($("#CP_example"));
  }
}


function resizeFlowchart(height,width){
  var div = myDiagram.div;
  div.style.height = `${height}px`;
  div.style.width = `${width}px`;
  myDiagram.requestUpdate();

}


function addRibbonToDiv(divJQ, color, scale, text){
  removeRibbonFromDiv(divJQ);
  var ribbon = $(`<div class="ribbon-wrapper"><div class="ribbon">${text}</div></div>`);
  ribbon.css("transform", `scale(${scale})`).find(".ribbon").css("background-color", color);
  divJQ.addClass("wrapper").append(ribbon);
}

function removeRibbonFromDiv(divJQ){
  divJQ.removeClass("wrapper").find(".ribbon-wrapper").remove();
}


//   *******    TEXT MODIFICATIONS   **********

// take a reward as input and output a nice string
function parseRewardObject(reward){
  var output = '';
  reward.forEach(loot => {
    if(loot[0] === 'A'){
      output += `<br>${loot[1]}`;
    } else {
      output += `<br>${loot[1]} x ${loot[2]}`;
    }
  });
  //delete the first <br>
  if(output.length >=4){
    output = output.substring(4);
  }
  return output;
}

// return full name for abreviations
function letterCodeNameCorrespondance(domain,letter){
  switch (domain) {
    case "requirements":{
      switch (letter) {
        case "S":return "Ships";
        case "E":return "Equipments";
        case "M":return "Maps";
        case "C":return "Consummables";
        case "O":return "Misc";
        case "Q":return "Quests";
        case "R":return "Ressources"
      }
    }
  }
}

// put the upper and lower case to the questcode to match the database
function setQuestInputCase(input){
  let inputCorrected = '';
  if(input.length >= 2){
    if(isNaN(parseInt(input.charAt(1),10)) && input.charAt(0).toUpperCase() !== 'W'){
      inputCorrected = `${input.charAt(0).toUpperCase()}${input.charAt(1).toLowerCase()}${input.substring(2)}`;
    } else {
      inputCorrected = input.toUpperCase();
    }
  }
  return inputCorrected;
}

// take the input and return an array of quests
function questInputToArray(input){
  var inputCut = input.replace(/\s{1,10}/g, '').split(',');
  var output = [];
  inputCut.forEach(input => {
    var cleanInput = setQuestInputCase(input);
    if (has.call(ALL_QUESTS_LIST, cleanInput)){
      output.push(cleanInput)
    }
  });
  return output;
}

// insert endofline charachers to match the character length
function formatTextLineBreak(text, length){
  var textWords = text.split(" ");
  var counter = 0;
  var output = "";
  textWords.forEach(word => {
    if (counter + word.length >= length){
      output+=`\n${word}`;
      counter = word.length;
    } else {
      output+=` ${word}`;
      counter += word.length + 1;
    }
  });
  return output;
}


// *********    GENERAL FUNCTIONS    *********

// used to check if an object has a certain key
const has = Object.prototype.hasOwnProperty;

// create a copy of an object without references
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

//create a cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
  return "";
}

// change the color according to the light and saturation values
function lightSaturationModifications(color,light,saturation){
  colorModified = tinycolor(color);

  if (light > 0){
    colorModified = tinycolor(colorModified).lighten(light);
  } else {
    colorModified = tinycolor(colorModified).darken(-light);
  }

  if (saturation > 0){
    colorModified = tinycolor(colorModified).saturate(saturation);
  } else {
    colorModified = tinycolor(colorModified).desaturate(-saturation);
  }
  return colorModified;
}

// return a list of quests with the specified state
function getQuestsInState(state){
  var pendingQuestsTxt = '';
  Object.keys(ALL_QUEST_STATE).forEach(quest =>{
    if (ALL_QUEST_STATE[quest] === state){
      pendingQuestsTxt += `${quest}, `;
    }
  });
  return pendingQuestsTxt;
}









initialisation();


//  *******    EVENT LISTENERS   **********



//change between the two mains tabs
$(".HD_main_tab_btn").click(function () {
  $(".main_tab").hide();
  $(".POP").hide("fast");
  $(`#${$(this).val()}`).show("fast");
});

//open option panel
$(".HD_option_btn").click(function () {
  var popup = $(this).val();
  if($(`#${popup}`).is(":visible")){
    $(".POP").hide("fast");
  } else {
    $(".POP").hide();
    if(popup === "CP"){
      $("#CP_state_settings :radio[name=CP_select_setting_state][value='pending']").prop('checked', true).trigger("change");
      $("#CP").show("fast");
    } else if(popup === "IPQ"){
      $('#IPQ').show("fast");
      $('#IPQ_txt_area').focus();
    }
  }
});

// **********   FLOWCHART PANEL RIGHT MENU LISTENNERS    ***************

//input a quest code to search
$('#FC_FT_search_Quest').on('input',function () {
  var input = questInputToArray($('#FC_FT_search_Quest').val());
  if(input[0]){
    $(this).css('outline-color','');
    zoom(input[0]);
    hightlightQuest(input[0]);
  } else {
    $(this).css('outline-color','red');
  }
});

//select a quest in the list
$('#FC_FT_select_quest_list').change(function () {
  let quest = $( "#FC_FT_select_quest_list option:selected" ).val();
  zoom(quest);
  hightlightQuest(quest);
});

//apply the changes to the flowchart
$('#FC_RM_loading_btn').click(function () {
  buildPartialFlowchart( $('#FC_RM_starting_quests').val(),$('#FC_RM_ending_quests').val());
});

// GUI changes on manual inputs
$('#FC_RM_starting_quests, #FC_RM_ending_quests').on('input',function () {
  $('#FC_RM_select_preset_quests')[0].selectedIndex = 0;;
  $("#FC_RM_loading_btn").prop("disabled", false);
});

// write the pending quests in the starting quests textbox
$("#FC_RM_use_pending_quests").change(function(){
  $("#FC_RM_loading_btn").prop("disabled", false);
  if ($("#FC_RM_use_pending_quests").is(':checked')){
    $("#FC_RM_starting_quests").val(getQuestsInState('pending')).prop("disabled",true);
  } else {
    $("#FC_RM_starting_quests").prop("disabled",false).focus();
  }
});

//when typing on enter launch the loading of flowchart
$('#FC_RM_starting_quests, #FC_RM_ending_quests').keydown(function (e) {
  if(e.which === 13){
    e.preventDefault();
    buildPartialFlowchart();
  }
});

// when selecting a quest chain in the drop list, will write the ending quests and load the flowchart
$('#FC_RM_select_preset_quests').change(function () {
  var endingQuests = $( "#FC_RM_select_preset_quests option:selected" ).val();
  if (endingQuests !== ''){
    $("#FC_RM_highlight_downward").prop('checked', true);
    if (endingQuests !== 'all'){
      $("#FC_RM_ending_quests").val(endingQuests);
      $("#FC_RM_highlight_upward").prop('checked', false);
    } else {
      $("#FC_RM_ending_quests").val('');
      $("#FC_RM_highlight_upward").prop('checked', true);
    }
    buildPartialFlowchart();
  }
});

// update all the colors if the shaow state color checkbox change
$("#FC_RM_show_state_colors").change(function(){
  updateAllColors();
});

// **********   QUEST LIST PANEL MENU LISTENNERS    ***************

// switch between the differents search methods
$("#QL_RM_select_search_method").change(function(){
  $(".QL_RM_select_search_method").hide();
  $(`#QL_RM_search_${$(this).val()}`).show("fast").find(':text').first().focus();
});

// update quest display on period change
$( ".QL_RM_display_period" ).change(function(){
  $('body').scrollTop(0);
  updateQuestListDisplay();
  // enable or disable the All checkbox depending on the number of box checked
  $("#QL_RM_display_period_all").prop('checked', ($( ".QL_RM_display_period:checked" ).length === 5));
});

// check or uncheck all period boxes
$( "#QL_RM_display_period_all" ).change(function(){
  $(".QL_RM_display_period").prop('checked', $("#QL_RM_display_period_all").is(':checked')).trigger('change');
});

// display the quests with corresponding codes
$('#QL_RM_searchQuest').on('input',function () {
  var input = questInputToArray($(this).val());
  if(input.length > 0){
    $(this).css('outline-color','');
    $(".QL_questBox").hide();
    input.forEach(quest => {
      $(`#QL_questBox_${quest}`).show();
    });
  } else {
    $(this).css('outline-color','red');
    updateQuestListDisplay();
    $('body').scrollTop(0);
  }
});

// display the quests requiring this ship
$("#QL_RM_select_required_ship").change(function(){
  $('body').scrollTop(0);
  var questList = JSON.parse($(this).val());
  if(questList.length > 0){
    $(".QL_questBox").hide();
    questList.forEach(quest=>{
      $(`#QL_questBox_${quest}`).show();
    });
  } else {
    updateQuestListDisplay();
  }

});

// display the quest with the selected reward
$("#QL_RM_search_select_reward").change(function(){
  $('body').scrollTop(0);
  var questList = JSON.parse($(this).val());
  if(questList.length > 0){
    $(".QL_questBox").hide();
    questList.forEach(quest=>{
      $(`#QL_questBox_${quest}`).show();
    });
  } else {
    updateQuestListDisplay();
  }
});

//change the type of displayed rewards
$(`input[name=QL_RM_search_reward]`).change(function(){
  $('body').scrollTop(0);
  loadRewardList();
});

//change the state of displayed quests
$( "input[name=QL_RM_display_state]:radio" ).change(function(){
  $('body').scrollTop(0);
  updateQuestListDisplay();
});


// validate the input of pending quests
$('#IPQ_btn_OK').click(function () {
  let result =  calculateQuestState(questInputToArray($("#IPQ_txt_area").val()));
  if( result === ''){
    $(`#IPQ`).hide("fast");
    updateAllColors();
  } else {
    $("#IPQ_error_msg").text(result);
  }

});

//cancel the input of pending quests
$('#IPQ_btn_cancel').click(function () {
  $(`#IPQ`).hide("fast");
});

// on doubleclick set it as finalquest in the flowchart
$(".QL_questBox").dblclick(function(){
  var quest = $(this).attr("id").split('_')[1];
  $("#QL").hide();
  $("#flowchart_tab").show('fast');
  $("#FC_RM_ending_quests").val(quest);
  buildPartialFlowchart( $('#FC_RM_starting_quests').val(),$('#FC_RM_ending_quests').val());
});

// set the quest as completed
$(".complete_btn").click(function(){
  var id = $(this).attr("id").split('_');
  var quest = '';
  if(id[0] === 'FC'){
    quest = $("#FC_FT_quest_info_quest_code").text();
  } else if (id[0] === 'QL'){
    quest = id[3];
  }
  if (quest !== ''){
    setQuestAsCompleted(quest);
  }
});

//hide the button after clicking on it
$(`#FC_FT_quest_info_complete_btn`).click(function(){
  $(this).hide();
});


// *****  color panel event listenner  *****

// cancel the modifications and close the panel
$("#CP_color_cancel").click(function(){
  // TODO activer quand yaura les cookies
  //  COLORS = JSON.parse(getCookie("colors"));
  $("#CP").hide("fast");
});

// save the colors modifications and close the panel
$("#CP_color_ok").click(function(){
  setCookie('colors', JSON.stringify(COLORS), 365);
  updateAllColors();
  $("#CP").hide("fast");
});

// reset all changes to default and keep  the panel open
$("#CP_color_reset").click(function(){
  COLORS = cloneObject(DEFAULT_COLORS);
  loadColorPanel();
});

// on click on the auto / manuel button for background
$("#CP_state_settings :radio[name=CP_settings_background]").change(function(){
  var mode = $("#CP_state_settings :radio[name=CP_settings_background]:checked").val();
  var state = $("#CP_state_settings :radio[name=CP_select_setting_state]:checked").val();
  //COLORS[state].background_mode = mode;
  if( COLORS[state].background){
    if ( (($(this).is(":checked") && mode === 'Auto') || (!$(this).is(":checked") && mode === 'Manual'))){
      $("#CP_settings_background_light, #CP_settings_background_saturation").attr("disabled", false);
      $("#CP_settings_background_color").spectrum("disable");
    } else {
      $("#CP_settings_background_light, #CP_settings_background_saturation").attr("disabled", true);
      $("#CP_settings_background_color").spectrum("enable");
    }
  }
  displayColorInPickerBoxes(state);
  updateExampleBox("", state);
});

// on click on the checkboxes border / ribbon / background
$(".CP_toogle_setting_element").change(function(){
  var element = $(this).attr("id").split("_")[2];
  var state = $("#CP_state_settings :radio[name=CP_select_setting_state]:checked").val();
  var isChecked = $(this).is(":checked");

  // disable input if checkbox is unchecked
  if ($(this).is(":checked")){
    $(this).closest("td").next().find("input").attr("disabled", false);
    $(this).closest("td").next().find(".state_colorpicker").spectrum("enable");
  } else {
    $(this).closest("td").next().find("input").attr("disabled", true);
    $(this).closest("td").next().find(".state_colorpicker").spectrum("disable");
  }

  COLORS[state][element] = isChecked;

  if(element === 'background'){
    //if no option have been checked for background mode, select Auto on acitvation, else, select the recorded one
    $("#CP_state_settings :radio[name=CP_settings_background]:checked").trigger("change");
  }
  updateExampleBox("", state);

});

// save to COLORS when the cursor value is changed
$(".settings_range").change(function(){
  var state = $("#CP_state_settings :radio[name=CP_select_setting_state]:checked").val();
  var id = $(this).attr("id").split('_');
  COLORS[state][`${id[2]}_${id[3]}`] = parseFloat($(this).val());
  displayColorInPickerBoxes(state);
  updateExampleBox("", state);
});

// display the cursor value as it moves
$(".settings_range").on('input',function(){
  var id = $(this).attr("id");
  $(`#${id}_value`).text($(this).val());
  $("#CP_example").find(".ribbon-wrapper").css("transform", `scale(${$(this).val()})`);
});



});
