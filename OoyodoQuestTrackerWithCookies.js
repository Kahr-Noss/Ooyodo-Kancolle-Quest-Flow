$(function () {

  //  *********   GLOBAL VARIABLES   ************

  //default color object
  const COLORS = {
    A:{
      pending_color:"#43C769",
      completed_color:"#8cf28c",
      locked_color:"#43C769"
    },
    B:{
      pending_color:"#EC6063",
      completed_color:"#f7baba",
      locked_color:"#EC6063"
    },
    C:{
      pending_color:"#93CE67",
      completed_color:"#f7d3ba",
      locked_color:"#93CE67"
    },
    D:{
      pending_color:"#4EBBD4",
      completed_color:"#e8e8fc",
      locked_color:"#4EBBD4"
    },
    E:{
      pending_color:"#DEC772",
      completed_color:"#f7d3ba",
      locked_color:"#DEC772"
    },
    F:{
      pending_color:"#BA8F79",
      completed_color:"#eda65e",
      locked_color:"#BA8F79"
    },
    G:{
      pending_color:"#CAA6DD",
      completed_color:"#eda65e",
      locked_color:"#CAA6DD"
    },
    S:{
      pending_color:"#EC6063",
      completed_color:"#f7baba",
      locked_color:"#EC6063"
    },
    W:{
      pending_color:"#FDD0F0",
      completed_color:"#fce8f7",
      locked_color:"#FDD0F0"
    },
    nightMode:false,
    pending:{
      border:false,
      border_color:'#000000',
      border_width:5,
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
      background:true,
      background_mode:'Auto',
      background_light:-100,
      background_saturation:-20,
      background_color:'#ffffff'
    },
    locked:{
      border:false,
      border_color:'#000000',
      border_width:5,
      background:true,
      background_mode:'Auto',
      background_light:100,
      background_saturation:-75,
      background_color:'#ffffff'
    },
    notHighlighted:{
      border:false,
      border_color:'#000000',
      border_width:3,
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
      background:true,
      background_mode:'Auto',
      background_light:0,
      background_saturation:0,
      background_color:'#ffffff'
    }
  };


  var ALL_QUEST_STATE = {};                     // current quests state
  var ALL_QUEST_STATE_TMP = {};                 // temporary object used to calculate quests state, global because multiple functions use it
  var myDiagram;                                // the GOJS diagram
  var selectedNodes = [];                       // array of nodes selected on the diagram

  // function used at the loading of the page
  function initialisation(){

    //load various data in the DOM
    loadRequiredShipList();
    loadRewardList();
    loadRequiredMapList();

    displayAllQuestBoxes(Object.keys(ALL_QUESTS_LIST));

    //load the pending quests saved in the cookie, or an empty one if no cookie are saved

    // load the user quest cookie or create an empty one

    var cookieContent = getCookie('user_quests');
    console.log(cookieContent);
    var questCookie = {};
    if (cookieContent === ""){
      questCookie =  {pendingQuests:[], userDecisions:{}, periodicCompleted:false, questAdvice:[], timeStamp:moment().format()};
    } else {
      questCookie = JSON.parse(cookieContent);
    }

    console.log(questCookie);

    timeVerificationLoop(questCookie.timeStamp);

    calculateQuestState(questCookie);


    loadFlowchart();
    resizeWindow();
    displayFlowchart();
    updateFlowchartColors();
  }





  //  ***********    Flowchart functions     ************

  function loadFlowchart() {

    var $ = go.GraphObject.make;  // for conciseness in defining templates

    var bigfont = "bold 45pt Helvetica, Arial, sans-serif";

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

    $(go.Adornment, "Spot",
    $(go.Panel, "Auto",
    $(go.Shape, { fill: null, stroke: "#e60000", strokeWidth: 20 }),
    $(go.Placeholder))
  );

  myDiagram.nodeTemplate =
  $(go.Node, "Auto",
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
  // note that the opacity defaults to zero (not visible),
  // in case there is no "ribbon" property
  { opacity: 0,
    alignment: new go.Spot(1, 0, 5, -5),
    alignmentFocus: go.Spot.TopRight,
    name:"RIBBON", scale:1.5 },
    $(go.Shape,  // the ribbon itself
      { geometryString: "F1 M0 0 L30 0 70 40 70 70z",
      stroke: null, strokeWidth: 0},

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
          { stroke: "#000000", strokeWidth:8},
          new go.Binding("stroke", "isHighlighted",
          function(h) { return h ? "#000000" : "#ffffff"; })
          .ofObject()
        ),
        $(go.Shape,  // the arrowhead
          { toArrow: "Standard", fill: "#000000", stroke: null, scale:5},
          new go.Binding("fill", "isHighlighted",
          function(h) { return h ? "#000000" : "#ffffff"; })
          .ofObject()
        )
      );

      //event listenner on click on the background to unselect all
      myDiagram.click = function(e) {
        selectedNodes = [];
        myDiagram.startTransaction("no highlighteds");
        myDiagram.clearHighlighteds();
        myDiagram.nodes.each(function(n) {
          updateNodeDisplay(n, getQuestColor(n.data.key,ALL_QUEST_STATE[n.data.key],true,false), ALL_QUEST_STATE[n.data.key], ALL_QUESTS_LIST[n.data.key].period);
        });
        myDiagram.commitTransaction("no highlighteds");
      };

      // event listenner that highlight on click on a node
      myDiagram.addDiagramListener("ObjectSingleClicked", function(e) {
        var part = e.subject.part;
        if (!(part instanceof go.Link)){
          selectedNodes = [part.data.key];
          hightlightQuest();
        }
      });

      // event listenner that highlight and zoom on double click on a node
      myDiagram.addDiagramListener("ObjectDoubleClicked", function(e) {
        var part = e.subject.part;
        if (!(part instanceof go.Link)){
          selectedNodes = [part.data.key];
          zoom(part.data.key);
          hightlightQuest();
        }
      });

      // event listenner that add one more node to the already selected ones highlight on right click on a node
      myDiagram.addDiagramListener("ObjectContextClicked", function(e) {
        var part = e.subject.part;
        if (!(part instanceof go.Link)){
          selectedNodes.push(part.data.key);
          hightlightQuest();
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
      $("#FC_RM_loading_btn").prop("disabled", false);
    }

    // highlight the quests linked to the selected quests
    function hightlightQuest() {
      //update the footer diplayed data
      $('#FC_FT_select_quest_list').val(selectedNodes.slice(-1)[0]); //display the last item in the array
      displayQuestData(selectedNodes.slice(-1)[0]);


      var model = myDiagram.model;
      var requieredQuestList = [];
      model.startTransaction("highlight");
      myDiagram.clearHighlighteds();
      myDiagram.clearSelection();
      myDiagram.nodes.each(function(n) {
        updateNodeDisplay(n, getQuestColor(n.data.key,ALL_QUEST_STATE[n.data.key],false,false),"notHighlighted",ALL_QUESTS_LIST[n.data.key].period);
      });

      selectedNodes.forEach(quest => {
        var  node = myDiagram.findNodeForKey(quest);
        if($("#FC_RM_highlight_upward").is(':checked')){
          highlightUpward(node);
        }
        //for requirements calculation purposes, the highlight downward will always be run, but only displayed is the checkbox is checked
        highlightDownward(node, requieredQuestList);
        updateNodeDisplay(node, getQuestColor(node.data.key, ALL_QUEST_STATE[node.data.key],true,true), "selected",ALL_QUESTS_LIST[node.data.key].period);
      });
      model.commitTransaction("highlight");
      // delete doubles
      requieredQuestList = requieredQuestList.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) === index;
      });
      displayQuestRequirements(requieredQuestList);
    }

    // recrusive function that highlight unlocked quests
    function highlightUpward(node){
      updateNodeDisplay(node, getQuestColor(node.data.key,ALL_QUEST_STATE[node.data.key],true,false),ALL_QUEST_STATE[node.data.key],ALL_QUESTS_LIST[node.data.key].period);
      node.findLinksOutOf().each(function(link) {
        link.isHighlighted = true;
        if(link.toNode.visible){
          highlightUpward(link.toNode);
        }
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
          updateNodeDisplay(node, getQuestColor(node.data.key,ALL_QUEST_STATE[node.data.key],true,false), ALL_QUEST_STATE[node.data.key],ALL_QUESTS_LIST[node.data.key].period);
        }
        node.findLinksInto().each(function(link) {
          // display only if highlight_downward is checked
          if($("#FC_RM_highlight_downward").is(':checked')){
            link.isHighlighted = true;
          }
          if (link.fromNode.visible){
            highlightDownward(link.fromNode, requieredQuestList);
          }
        });
      }
    }

    // change the state of a quest and update the unlocked ones
    function setQuestAsCompleted(quest){
      // TODO decommenter les cookies
      var questsCookie = JSON.parse(getCookie('user_quests'));
      questsCookie.timeStamp = moment().utcOffset("+09:00").format();
      //set the quest as completed
      ALL_QUEST_STATE[quest] = 'completed';
      updateQuestStateDisplay(quest);
      questsCookie.pendingQuests.splice(questsCookie.pendingQuests.indexOf(quest),1);

      //set the following quests to pending if all other requierments are completed
      ALL_QUESTS_LIST[quest].unlocks.forEach(unlockedQuest => {
        if ( ALL_QUESTS_LIST[unlockedQuest].requires.every(function(requiredQuest){return ALL_QUEST_STATE[requiredQuest] === 'completed';})){
          ALL_QUEST_STATE[unlockedQuest] = 'pending';
          updateQuestStateDisplay(unlockedQuest);

          questsCookie.pendingQuests.push(unlockedQuest);
        }
      });
      //get all currently displayed quest to display them again
      var visibleQuests = [];
      $(`.QL_questBox:visible`).each(function(){
        visibleQuests.push($(this).attr("id").split('_')[2]);
      });

      updateQuestListDisplay(visibleQuests);
      updateFlowchartColors();

      setCookie('user_quests',JSON.stringify(questsCookie),365);
    }

    // reset the periodic quests of the secified period
    function resetPeriodicQuest(period){
      // TODO decommenter les cookies
      var questsCookie = JSON.parse(getCookie('user_quests'));
      questsCookie.timeStamp = moment().utcOffset("+09:00").format();
      var periodicQuestsList = Object.keys(ALL_QUESTS_LIST).filter(function(quest){return ALL_QUESTS_LIST[quest].period === period});
      // set all periodic quests to ??? state (to remove any problem to set the pending state)
      periodicQuestsList.forEach(quest =>{
        ALL_QUEST_STATE[quest] = "???";
      });
      questsCookie.pendingQuests.filter(function(quest){return ALL_QUESTS_LIST[quest].period === period}).forEach(quest =>{
        questsCookie.pendingQuests.splice(questsCookie.pendingQuests.indexOf(quest),1);
      });
      periodicQuestsList.forEach(quest =>{
        if( ALL_QUESTS_LIST[quest].requires.every(function(requiredQuest){return ALL_QUEST_STATE[requiredQuest] === 'completed';})){
          ALL_QUEST_STATE[quest] = "pending";
          questsCookie.pendingQuests.push(quest);
        } else {
          ALL_QUEST_STATE[quest] = "locked";
        }
        updateQuestStateDisplay(quest);
      });
      updateQuestListDisplay([]);
      updateFlowchartColors();
      setCookie('user_quests',JSON.stringify(questsCookie),365);
    }

    // ******      FLOWCHART CREATION     *********

    // create the flowchart  from all quests data
    function buildFlowchart(){
      var questNodeDataArray = [];
      var questLinkDataArray = [];
      Object.keys(ALL_QUESTS_LIST).forEach(quest => {
        //create a node
        var color = getQuestColor(quest,ALL_QUEST_STATE[quest],true,false);
        var state = ALL_QUEST_STATE[quest];
        questNodeDataArray.push({
          "key": quest,
          "color": color,
          "text": quest,
          "strokeWidth":(state==='pending' ? 25 : 5),
          "strokeColor": (state==='pending' ? "yellow" : "Black"),
          "visible": true,
          "tooltip":formatTextLineBreak(ALL_QUESTS_LIST[quest].content,65),
          "ribbon_text":state,
          "ribbon":ALL_QUESTS_LIST[quest].period !== 'once',
          "ribbon_color":getRibbonColor(ALL_QUESTS_LIST[quest].period),
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
        questListHTML += `<option value="${quest}" style="background-color:${getQuestColor(quest,"default")};">${quest}</option>`;
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
      $("#FC_RM_loading_btn").prop("disabled", true);
      var partialQuestList = [];
      var startingQuestsList = questInputToArray($('#FC_RM_starting_quests').val());
      var endingQuestsList =questInputToArray($('#FC_RM_ending_quests').val());
      var direction = (endingQuestsList.length === 0) ? "up" : "down" ;
      var usePending = $("#FC_RM_use_pending_quests").is(":checked");
      var showPeriodic =  $("#FC_RM_use_periodic_quests").is(":checked");

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
            addUnlockedQuests(quest).forEach(qst => {
              if($.inArray(qst,partialQuestList) === -1){
                partialQuestList.push(qst);
              }
            });
          });
        } else if (direction == 'down'){
          if (usePending){
            endingQuestsList.forEach(quest => {
              addUncompletedRequiredQuests(quest, showPeriodic).forEach(qst => {
                if($.inArray(qst,partialQuestList) === -1){
                  partialQuestList.push(qst);
                }
              });
            });
          } else {
            //if not using pending quests , just go down all quests and sop on starting ones
            endingQuestsList.forEach(quest => {
              addRequiredQuests(startingQuestsList, quest).forEach(qst => {
                if($.inArray(qst,partialQuestList) === -1){
                  partialQuestList.push(qst);
                }
              });
            });
          }
        }
        displayPartialTree(partialQuestList);
        displayQuestListSelect(partialQuestList);

        //    hightlightQuest()
      }
    }

    // add the quest that are unlocked
    function addUnlockedQuests(quest){
      var partialQuestList = [];
      partialQuestList.push(quest);
      ALL_QUESTS_LIST[quest].unlocks.forEach(unlockedQuest => {
        addUnlockedQuests(unlockedQuest).forEach(qst => {
          if($.inArray(qst,partialQuestList) === -1){
            partialQuestList.push(qst);
          }
        });
      });

      return partialQuestList;
    }

    // add quest that are required to unlock this quest
    function addRequiredQuests(startingQuestsList, quest){
      var partialQuestList = [];
      partialQuestList.push(quest);
      //if the quest have requirement qnd isn't listed as a starting quest
      if($.inArray(quest,startingQuestsList) === -1){
        ALL_QUESTS_LIST[quest].requires.forEach(requiredQuest => {
          addRequiredQuests(startingQuestsList, requiredQuest).forEach(qst=>{
            if($.inArray(qst,partialQuestList) === -1){
              partialQuestList.push(qst);
            }
          });
        });

      }
      return partialQuestList;
    }


    // add quest that are required to unlock this quest
    function addUncompletedRequiredQuests(quest, showPeriodic){
      var partialQuestList = [];
      if (ALL_QUEST_STATE[quest] !== "completed"){
        //if the quest have requirement qnd isn't listed as a starting quest
        ALL_QUESTS_LIST[quest].requires.forEach(requiredQuest => {
          addUncompletedRequiredQuests(requiredQuest, showPeriodic).forEach(qst => {
            if($.inArray(qst,partialQuestList) === -1){
              partialQuestList.push(qst);
            }
          });
        });
        if (showPeriodic){
          partialQuestList.push(quest);
        } else {
          if (ALL_QUESTS_LIST[quest].period === 'once'){
            partialQuestList.push(quest);
          } else if (partialQuestList.length > 0){
            partialQuestList.push(quest);
          }
        }
      }
      return partialQuestList;
    }

    // using pending quests  list calculate the state of all quests
    function calculateQuestState(userQuestCookie){
      ALL_QUEST_STATE_TMP = {};
      // no pending quests input => everything is set to completed and color state mode is disabled
      if (userQuestCookie.pendingQuests.length === 0){
        Object.keys(ALL_QUESTS_LIST).forEach(quest => {
          ALL_QUEST_STATE_TMP[quest] = 'completed';
        });
        $("#FC_RM_show_state_colors").prop("checked",false);
        implementQuestsStateUpdated([],{},[],false);
      } else {
        //normal procedure

        //reset all states to ???
        Object.keys(ALL_QUESTS_LIST).forEach(quest=>{
          ALL_QUEST_STATE_TMP[quest] = '???';
        });

        // if setPeriodicQuestCompleted is true, we set all the periodic quests to completed
        if(userQuestCookie.setPeriodicQuestCompleted){
          Object.keys(ALL_QUESTS_LIST).filter(function(quest){return ALL_QUESTS_LIST[quest].period !== 'once'}).forEach(quest => {
            ALL_QUEST_STATE_TMP[quest] = 'completed';
          });
        }

        //set inputed quests to pending
        userQuestCookie.pendingQuests.forEach(quest=>{
          ALL_QUEST_STATE_TMP[quest] = 'pending';
        });
        var inconsistenciesList = setQuestStateLinkedToPendingQuests(userQuestCookie.pendingQuests);

        // there are problems with the inputed quests
        if(inconsistenciesList.length !== 0){
          var inconsistencies_msg = "";
          inconsistenciesList.forEach(inconsistency =>{
            inconsistencies_msg += `${inconsistency[0]} can't be pending if ${inconsistency[1]} hasn't be completed\n`;
          });
          $("#IPQ_error_msg").text(inconsistencies_msg);
        } else {

          // if it's created from a cookie that have recorded user decisions, implement them
          Object.keys(userQuestCookie.userDecisions).forEach(quest => {
            var state = userQuestCookie.userDecisions[quest];
            ALL_QUEST_STATE_TMP[quest] = state;
            ALL_QUESTS_LIST[quest].unlocks.forEach(nextQuest => {
              setUnknowOnceQuestsUpward(nextQuest,state);
            });
          });



          var unknowQuests = setRemainingOnceQuestStateByDeduction();
          var unknownQuestsGroups = [];
          unknowQuests.forEach(quest => {
            unknownQuestsGroups.push(createUnknownOnceQuestGroup(quest,unknowQuests));
          });

          unknownQuestsGroups = separateGroupDoublons(unknownQuestsGroups, unknowQuests);

          //for the one time quests that were not deductible, ask the user about it by displaying it on the flowchart
          askForUnknowQuestState(unknownQuestsGroups,userQuestCookie.userDecisions, userQuestCookie.questAdvice, function(userDecisions, advice){
            // this is called after the user answerd to all unknowQuests
            //Now the periodic quests not set yet
            setPeriodicQuestState();

            // update the ALL_QUEST STATE list with the one just cqlculated if on inconsistencies
            $("#FC_RM_show_state_colors").prop("checked",true);
            implementQuestsStateUpdated(userQuestCookie.pendingQuests,userDecisions, advice, userQuestCookie.setPeriodicQuestCompleted);
          });
        }
      }
    }


    // this function will ask the user if he remember doing one time quests that can't be calculated
    function askForUnknowQuestState(unknowQuestsGroup, userDecisions, advice, callback){
      // if there is unknown quests remaining
      updateFlowchartColors();
      if (unknowQuestsGroup.length > 0){

        var questsGroup = unknowQuestsGroup.shift();
        //    if (ALL_QUEST_STATE_TMP[quest] === "???"){
        if (ALL_QUESTS_LIST[questsGroup[0]].requires.every(function(requiredQuest){return ALL_QUEST_STATE_TMP[requiredQuest] === "completed"})){
          questsGroup.forEach(quest => {
            ALL_QUEST_STATE_TMP[quest] = "completed";
          });
          askForUnknowQuestState(unknowQuestsGroup, userDecisions, advice, callback);
        } else if (ALL_QUESTS_LIST[questsGroup[0]].requires.some(function(requiredQuest){return ALL_QUEST_STATE_TMP[requiredQuest] === "locked" && ALL_QUESTS_LIST[requiredQuest].period === 'once'})){
          questsGroup.forEach(quest => {
            ALL_QUEST_STATE_TMP[quest] = "locked";
          });
          askForUnknowQuestState(unknowQuestsGroup,userDecisions, advice, callback);
        } else {
          $("#QL").hide();
          $("#FC").show('fast');
          displayPartialTree(questsGroup);
          displayQuestData(questsGroup[0]);

          displayBubbleMessage(`Admiral, I need some help to<br>
            complete your progression on the quest flowchart...<br>
            Do you already completed those quests ?<br>
            <button type="button" class="MSG_btn" value="completed">Yes !</button>
            <button type="button" class="MSG_btn idk" value="completed">I don't know</button>
            <button type="button" class="MSG_btn" value="locked">No, not yet</button>`,
            "writing","MSG_ask_quest_state",false);

            $(".MSG_btn").click(function(){
              $("#MSG_ask_quest_state").remove();
              questsGroup.forEach(quest => {
                ALL_QUEST_STATE_TMP[quest] = $(this).val();
              });
              userDecisions[questsGroup[0]] =  $(this).val();
              if ($(this).hasClass("idk")){
                ALL_QUESTS_LIST[questsGroup[0]].requires.filter(function(quest){return ALL_QUESTS_LIST[quest].period !== 'once'}).forEach(quest =>{
                  if (advice.indexOf(quest) === -1){
                    advice.push(quest);
                  }
                });
              }
              askForUnknowQuestState(unknowQuestsGroup, userDecisions, advice, callback);
            });
          }
        } else {
          callback(userDecisions, advice);
        }
      }

      //this function is called at the end and implement the newly calculated states if there is no inconsistencies, else error message
      function implementQuestsStateUpdated(pendingQuests, userDecisions, advice, setPeriodicQuestCompleted){
        ALL_QUEST_STATE = cloneObject(ALL_QUEST_STATE_TMP);
        console.log(JSON.stringify(userDecisions));

        $(".QL_questBox").removeClass("pending locked completed");
        Object.keys(ALL_QUEST_STATE).forEach(quest =>{
          updateQuestStateDisplay(quest);
        });
        $("#IPQ_error_msg").text("");
        $(`#IPQ`).hide("fast");
        updateFlowchartColors();
        setCookie('user_quests',JSON.stringify({pendingQuests:pendingQuests, userDecisions:userDecisions, periodicCompleted:setPeriodicQuestCompleted, questAdvice:advice, timeStamp:moment().utcOffset("+09:00").format()}),365);

        if (advice.length >0){
          displayBubbleMessage(`Admiral, about those quests that you din't know the state, you should complete those quests:<br>
          ${advice.join(', ')}<br>
          Input again your pending quests once you are done.`,
          "???","MSG_quest_completion_advice",true);
        }

        // display the diagram
        if(myDiagram){
          $("#FC_RM_use_pending_quests").prop("checked",true).trigger("change");
          buildPartialFlowchart();
        }

        //fire event for tutorial_answer
        if($("#tuto").is(':visible')){
          $("#tuto").trigger("tutorial_answer");
        }

      }

      //set quests's state based on link to the inputed pending quests
      function setQuestStateLinkedToPendingQuests(pendingQuests){
        var inconsistenciesList = [];
        // starting by one time (5) quests to daily (1), do for each period
        for (var i=5; i>0; i--){
          pendingQuests.forEach(quest=>{
            //if the quest period match the current loop
            if(periodNumberEquvalence(ALL_QUESTS_LIST[quest].period) === i) {
              //check if there is inconsistencies <=> its requiered quest aren't completed
              setQuestStateDownward(quest,i).forEach(inconsistency => {
                var isPresent = false;
                inconsistenciesList.forEach(couple => {
                  isPresent = isPresent || (couple[0] === quest && couple[1] === inconsistency);
                });
                if (! isPresent){
                  inconsistenciesList.push([quest,inconsistency]);
                }
              });

              //set the following quest to locked
              // since it's not a periodic quest, the following quests are have to be locked
              setQuestStateUpward(quest,i).forEach(inconsistency =>{
                var isPresent = false;
                inconsistenciesList.forEach(couple => {
                  isPresent = isPresent || (couple[0] === inconsistency && couple[1] === quest);
                });
                if (! isPresent){
                  inconsistenciesList.push([inconsistency,quest]);
                }
              });
            }
          });
        }
        return inconsistenciesList;
      }

      //set the state on one time quests that haven't been affected
      function setRemainingOnceQuestStateByDeduction(){
        var askForState = [];
        // set state of unknow quests
        // first check once quests.
        getQuestsInState(ALL_QUEST_STATE_TMP,'???').forEach(quest=>{
          if(periodNumberEquvalence(ALL_QUESTS_LIST[quest].period) === 5){
            if (ALL_QUESTS_LIST[quest].requires.every(function(requiredQuest){return ALL_QUEST_STATE_TMP[requiredQuest] === "completed";})){
              //if they have no requierments or if all are completed, means that it's an isolated once chain list.
              setUnknowOnceQuestsUpward(quest,"completed");
            } else if (ALL_QUESTS_LIST[quest].requires.every(function(requiredQuest){return periodNumberEquvalence(ALL_QUESTS_LIST[requiredQuest].period) === 5;})){
              // if all required quests are one time quests and there is at least one once quest witha ??? state => do nothing, it will be treated when the previous quest turn come
              // if there is none with ?? it will be treated before
            } else if (ALL_QUESTS_LIST[quest].requires.length === 1){
              // if there is only one peridodic quest in the required list , it means that the quest and the one after are already completed
              // (else they could hqve been completed at different times so didn't unlock the quest)
              var previousQuest = ALL_QUESTS_LIST[quest].requires[0];
              if (searchPendingOrCompletedQuestInUnlocks(previousQuest) &&  periodNumberEquvalence(ALL_QUESTS_LIST[previousQuest].period) <= 4){
                ALL_QUEST_STATE_TMP[quest] = "completed";
                ALL_QUESTS_LIST[quest].unlocks.forEach(nextQuest => {
                  setUnknowOnceQuestsUpward(nextQuest,"completed");
                });
              } else {
                askForState.push(quest);
              }
            } else {
              askForState.push(quest);
            }
          }
        });
        return askForState;
      }

      // set periodic quests either as pending if all requierments are completed or to locked
      function setPeriodicQuestState(){
        getQuestsInState(ALL_QUEST_STATE_TMP,'???').forEach(quest=>{
          if(periodNumberEquvalence(ALL_QUESTS_LIST[quest].period) <= 4){
            if (ALL_QUESTS_LIST[quest].requires.every(function(requiredQuest){return ALL_QUEST_STATE_TMP[requiredQuest] === "completed";})){
              //if they have no requierments or if all are completed, we assume that it means that this one is pending, and the one after are locked
              ALL_QUEST_STATE_TMP[quest] = "pending";
            } else {
              ALL_QUEST_STATE_TMP[quest] = "locked";
            }
          }
        });
      }

      // return a number depending of the period's string, for loop comparison purposes
      function periodNumberEquvalence(period){
        switch (period){
          case "daily" : return 1;
          case "weekly" : return 2;
          case "monthly" : return 3;
          case "quarterly" : return 4;
          case "once" : return 5;
        }
      }

      // recusrsive function that update the quests state moving upward and check inconsistencies
      function setQuestStateUpward(quest,period){
        let inconsistencies = [];
        ALL_QUESTS_LIST[quest].unlocks.forEach(nextQuest=>{
          if( ALL_QUEST_STATE_TMP[nextQuest] === '???'){
            // if not yet filled in, update state to 'locked' if period inferior or equal
            if(periodNumberEquvalence(ALL_QUESTS_LIST[nextQuest].period) <= period){
              ALL_QUEST_STATE_TMP[nextQuest] = 'locked';
            }
            // ... and continue
            inconsistencies = inconsistencies.concat(setQuestStateUpward(nextQuest,period));
          } else {
            //il already updated
            if(periodNumberEquvalence(ALL_QUESTS_LIST[nextQuest].period) <= period){
              //problem ou stop if period inferior or equal
              if (ALL_QUEST_STATE_TMP[nextQuest] === 'pending' ){//||  ALL_QUEST_STATE_TMP[nextQuest] === 'completed'){
                inconsistencies = [nextQuest];
              }
              if (ALL_QUEST_STATE_TMP[nextQuest] === 'completed' ){//||  ALL_QUEST_STATE_TMP[previousQuest] === 'locked'){
                inconsistencies = inconsistencies.concat(setQuestStateUpward(nextQuest,period));
              }
              //else no recurence so stopping here
            } else {
              //if  period superior continue
              inconsistencies = inconsistencies.concat(setQuestStateUpward(nextQuest,period));
            }
          }
        });
        return inconsistencies;
      }

      // recusrsive function that  check inconsistencies moving downward
      function setQuestStateDownward(quest,period){
        let inconsistencies = [];
        ALL_QUESTS_LIST[quest].requires.forEach(previousQuest => {
          if( ALL_QUEST_STATE_TMP[previousQuest] === '???'){

            // if not yet filled in, update state to 'completed' if period superior or equal
            if(periodNumberEquvalence(ALL_QUESTS_LIST[previousQuest].period) >= period){
              ALL_QUEST_STATE_TMP[previousQuest] = 'completed';
            }
            // ...and continue
            inconsistencies = inconsistencies.concat(setQuestStateDownward(previousQuest,period));
          } else {
            //if already updateNodeDisplay
            if(periodNumberEquvalence(ALL_QUESTS_LIST[previousQuest].period) >= period){
              //problem ou stop if period superior or equal
              if (ALL_QUEST_STATE_TMP[previousQuest] === 'pending' ){//||  ALL_QUEST_STATE_TMP[previousQuest] === 'locked'){
                inconsistencies = [previousQuest];
              }
              if (ALL_QUEST_STATE_TMP[previousQuest] === 'locked' ){//||  ALL_QUEST_STATE_TMP[previousQuest] === 'locked'){
                inconsistencies = inconsistencies.concat(setQuestStateDownward(previousQuest,period));
              }
              //else no recurence so stopping here
            } else {
              //if  period inferior continue
              inconsistencies = inconsistencies.concat(setQuestStateDownward(previousQuest,period));
            }
          }
        });
        return inconsistencies;
      }

      // set one time quests to 'completed' or "locked" starting form one quest
      function setUnknowOnceQuestsUpward(quest,state){
        if ( ALL_QUEST_STATE_TMP[quest] === "???" &&
        ((state === 'completed'
        && ALL_QUESTS_LIST[quest].requires.every(function(requiredQuest){return ALL_QUEST_STATE_TMP[requiredQuest] === "completed";})
        && ALL_QUESTS_LIST[quest].period === "once")
        || state === 'locked')){
          ALL_QUEST_STATE_TMP[quest] = state;
          ALL_QUESTS_LIST[quest].unlocks.forEach(nextQuest => {
            setUnknowOnceQuestsUpward(nextQuest,state);
          });
        }
      }
      // this function take all the quests with the ??? state (unknown) and regroup the by block that are in the same state (completed or lacked)
      function createUnknownOnceQuestGroup(quest,startingUnknownQuestsList){
        var unknownQuestGroup = [quest];
        ALL_QUESTS_LIST[quest].unlocks.forEach(nextQuest => {
          if (startingUnknownQuestsList.indexOf(nextQuest) === -1 && ALL_QUEST_STATE_TMP[nextQuest] === "???" && ALL_QUESTS_LIST[nextQuest].period==="once"){
            unknownQuestGroup = unknownQuestGroup.concat(createUnknownOnceQuestGroup(nextQuest,startingUnknownQuestsList));
          }
        });
        return unknownQuestGroup;
      }

      // check if there is any double in the tables and separate them into new groups
      function separateGroupDoublons(GroupsList, startingUnknownQuestsList){

        var counter = 0;
        //clone the array
        unknowQuestsGroup = GroupsList.slice(0);
        GroupListOutput = [];

        while (unknowQuestsGroup.length > 0 ){

          counter ++;

          var group = unknowQuestsGroup.shift();
          var groupOutput = [];

          //clone the group and iterate through it (because there is index problem if it iterate in the group where we delete the quests and some quests aren't treated)
          group.slice(0).forEach(quest => {
            //test if the quest is always in the orginal array or if it has been removed. if it's the case skip an do the next quest
            if(group.indexOf(quest) !== -1){

              var listOfGroups = [group];

              //check if there is any double
              unknowQuestsGroup.forEach(otherGroup =>{
                if(otherGroup.indexOf(quest) !== -1){
                  listOfGroups.push(otherGroup)
                }
              });

              // if any double are found
              if (listOfGroups.length >1){
                //create the new group
                var newGroup= createUnknownOnceQuestGroup(quest,startingUnknownQuestsList);
                //add the subGroup to the list of group
                unknowQuestsGroup.push(newGroup);
                // set the quest as a new starter
                startingUnknownQuestsList.push(quest);
                //remove the elements from newGroup from the other groups
                listOfGroups.forEach(grp => {
                  newGroup.forEach(qst =>{
                    grp.splice(grp.indexOf(qst), 1);
                  });
                });
              } else {
                //just add the quest to the group
                groupOutput.push(quest);
              }

            }
          });
          GroupListOutput.push(groupOutput);
        }

        return GroupListOutput;
      }


      // serach if there is any "pendind" or "completed" quest in the quests unlocked by this one
      function searchPendingOrCompletedQuestInUnlocks(quest){
        var isFound = false;
        ALL_QUESTS_LIST[quest].unlocks.forEach(unlockedQuest =>{
          if (ALL_QUEST_STATE_TMP[unlockedQuest] === 'pending' || ALL_QUEST_STATE_TMP[unlockedQuest] === 'completed'){
            isFound = true;
          } else {
            isFound = isFound || searchPendingOrCompletedQuestInUnlocks(unlockedQuest);
          }
        });
        return isFound;
      }




      // calculate the requierments for the selected quest (by analyzing the required quest list)
      function calculateQuestRequirements(questList){
        var requirements = {S:[],E:[],M:[],C:[],I:[],Q:[],R:[]};
        var rewardsList = {};

        // if the "hide quest rewards" is checked, the items got as reward and required in following quests won't be displayed
        // so all the reward items are saved in the rewardsList object
        if($("#FC_FT_quest_requirement_hide_quest_rewards").is(':checked')){
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
        var quest = ALL_QUESTS_LIST[questCode];
        var color = getQuestColor(questCode,"default");
        return `<div class="QL_questBox ${quest.period}" id='QL_questBox_${questCode}' style="background-color:${color}; color:${tinycolor(color).isLight() ? "#000000" : "#ffffff"};">
        <div class="cellDiv" style=" height:40px;  top:0px; left:0px; width: calc(100% - 40px); padding-right:40px; line-height:40px;">


        <input type="checkbox" class="QL_selected_checkbox" id="QL_selected_${questCode}">
        <b> ${questCode}</b>
        <span><img class="quest_state_icon" src="file/webpage/${ALL_QUEST_STATE[questCode]}.png"></span>
        <button type="button" class="QL_questBox_goToChart_btn" id='QL_goToChart_btn_${questCode}'>See on flowchart</button>
        <button type="button" class="QL_questBox_complete_btn" id='QL_complete_btn_${questCode}'>Set as completed</button>


        </div>
        <div class="cellDiv" style=" height:75px;  top:40px; left:0px; width:100%;"}">
        <div class="centeredContent">
        ${quest.Jp}
        <br>${quest.En}
        </div>
        </div>

        <div class="cellDiv" style="width:100%; height:123px;  top:115px; left:0px; position:relative">

        <div class="centeredContent">${addShipImageToContent(quest)}</div>
        <button type="button" class="quest_tips" id='QL_quest_tips_${questCode}'>+</button>
        </div>

        <div class="cellDiv" style="width:25%; height:110px;  bottom:75px; left:0px;">
        <div class="centeredContent" style="text-align:left; overflow-y:hidden; padding-left:10px;">
        &nbsp;<span><img class="reward_icon" src="files/webpage/game_icons/Fuel.png"></span> &nbsp;${quest.ressources.F} <br>
        &nbsp;<span><img class="reward_icon" src="files/webpage/game_icons/Ammo.png"></span> &nbsp;${quest.ressources.A} <br>
        &nbsp;<span><img class="reward_icon" src="files/webpage/game_icons/Steel.png"></span> &nbsp;${quest.ressources.S} <br>
        &nbsp;<span><img class="reward_icon" src="files/webpage/game_icons/Bauxite.png"></span> &nbsp;${quest.ressources.B}</div>
        </div>

        <div class="cellDiv" style="width:75%; height:110px;  bottom:75px; left:25%;">
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





      // **********    DISPLAY FUNCTIONS   ***********

      // change the colors of a node
      function updateNodeDisplay(node,fill, state, period){
        node.findObject("SHAPE").fill = fill;
        node.findObject("SHAPE").stroke = COLORS[state].border ? COLORS[state].border_color : "#000000";
        node.findObject("SHAPE").strokeWidth =  COLORS[state].border ? COLORS[state].border_width : 5;
        node.findObject("TEXT").stroke = tinycolor(fill).isLight() ? "#000000" : "#ffffff";
        node.findObject("RIBBON").opacity = period !== 'once' ? 1 : 0;
        node.findObject("RIBBON_TEXT").text = period;
        node.findObject("RIBBON").fill = getRibbonColor(period);
      }

      // change the display of one quest everywhere depending on its state
      function updateQuestStateDisplay(quest){
        var questBox = $(`#QL_questBox_${quest}`);
        var state = ALL_QUEST_STATE[quest];
        questBox.removeClass("pending completed locked").addClass(state);
        questBox.find(".quest_state_icon").attr("src",`file/webpage/${state}.png`);
        if(state === 'pending'){
          $(`#QL_complete_btn_${quest}`).css('visibility', 'visible');
        } else {
          $(`#QL_complete_btn_${quest}`).css('visibility', 'hidden');
        }
      }

      // display quest data in the footer
      function displayQuestData(questCode){
        var quest = ALL_QUESTS_LIST[questCode];
        var color = getQuestColor(questCode,'default');
        $('#FC_FT .cellDiv').css('background', color).css('color',tinycolor(color).isLight() ? "#000000" : "#ffffff");
        $("#FC_FT_quest_info_state_icon").attr("src",`file/webpage/${ALL_QUEST_STATE[questCode]}.png`);
        $('#FC_FT_quest_info_quest_code').text(questCode);
        $('#FC_FT_quest_info_name_Japanese').text(quest.Jp);
        $('#FC_FT_quest_info_name_English').text(quest.En);
        $('#FC_FT_quest_info_content').html(addShipImageToContent(quest));
        addShipNameHoveringEvents($('#FC_FT_quest_info_content'));
        $('#FC_FT_quest_info_ressources').text(`${quest.ressources.F} / ${quest.ressources.A} / ${quest.ressources.S} / ${quest.ressources.B}`);
        $('#FC_FT_quest_info_reward').html(parseRewardObject(quest.reward));
        $('#FC_FT_quest_info_requires').html(((quest.requires.length !== 0) ? `Requires: ${quest.requires.join(", ")}` : ''));
        $('#FC_FT_quest_info_unlocks').html(((quest.unlocks.length !== 0) ? `Unlocks: ${quest.unlocks.join(", ")}` : ''));
        $("#FC_FT").find(".quest_tips").attr("id",`FC_quest_tips_${questCode}`)
        if(ALL_QUEST_STATE[questCode] === 'pending'){
          $(`#FC_FT_quest_info_complete_btn`).show();
        } else {
          $(`#FC_FT_quest_info_complete_btn`).hide();
        }
        if(ALL_QUESTS_LIST[questCode].period !== "once"){
          addRibbonToDiv($("#FC_FT_ribbon_support"),getRibbonColor(ALL_QUESTS_LIST[questCode].period), ALL_QUESTS_LIST[questCode].period);
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
      addShipNameHoveringEvents($(`#QL_questBox_${quest}`));
      if(ALL_QUESTS_LIST[quest].period !== "once"){
        addRibbonToDiv($(`#QL_questBox_${quest}`),getRibbonColor(ALL_QUESTS_LIST[quest].period), ALL_QUESTS_LIST[quest].period);
      }
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
          if (category === "S"){
            requirementsHTML += `<span><img class="ship_icon" src="files/webpage/ships/${item}.png"></span> &nbsp;`;
          }
          if(typeof item === 'string'){
            requirementsHTML += `${item}<br>`;
          } else {
            if (has.call(ICONS_LINK, item[0])){
              // if the item icon is listed, show it
              requirementsHTML += `${item[1]} x <span><img class="reward_icon" src="${ICONS_LINK[item]}"></span> ${item[0]}<br>`;
            } else{
              requirementsHTML += `${item[1]} x ${item[0]}<br>`;
            }
          }
        });
        requirementsHTML += "<br></div>";
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
    }).prop('checked', true).trigger('change');;
  }

  function getRibbonColor(period){
    switch (period) {
      case "once": return "#e6e600";
      case "daily": return "#e60000";
      case "weekly": return "#0052cc";
      case "monthly": return "#009900";
      case "quarterly": return "#ff471a";
    }
  }

  function getQuestColor(quest,state,highlight,selected){
    //get the base color
    var questLetter = quest.charAt(0);


    //if the state is "default", it will just retrun the pending color of quest without modifications
    if(state === 'default' ){
      color = tinycolor(COLORS[questLetter].pending_color);
    } else {
      if( $("#FC_RM_show_state_colors").is(':checked')){

        // return the quest colors depending its state
        var color = tinycolor(COLORS[questLetter][`${state}_color`]);
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
      } else {
        color = tinycolor(COLORS[questLetter].pending_color);
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
  function updateFlowchartColors(){

    /*     ****************    This is for dispalying state colors on questboxes  *********
    it's removed because it's replaced with small icons

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
if(ALL_QUESTS_LIST[quest].period !== "once"){
addRibbonToDiv($(this),getRibbonColor(ALL_QUESTS_LIST[quest].period), ALL_QUESTS_LIST[quest].period);
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
}*/
//nodes on flowchart
if(myDiagram){
  var model = myDiagram.model;
  model.startTransaction("state_color");
  myDiagram.clearHighlighteds();
  myDiagram.clearSelection();
  myDiagram.nodes.each(function(n) {
    updateNodeDisplay(n, getQuestColor(n.data.key,ALL_QUEST_STATE[n.data.key],true,false),ALL_QUEST_STATE[n.data.key],ALL_QUESTS_LIST[n.data.key].period);
  });
  model.commitTransaction("state_color");
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
  var requiredShipListHTML = "<option value='[]' disabled>Select a ship</option>";
  Object.keys(requiredShipList).sort().forEach(ship => {
    requiredShipListHTML += `<option value='${JSON.stringify(requiredShipList[ship])}'>${ship}</option>`;
  });
  $("#QL_RM_select_required_ship").html(requiredShipListHTML);
}

// put the list of required ships in the dropdown list
function loadRequiredMapList(){
  var requiredMapList = {};
  Object.keys(ALL_QUESTS_LIST).forEach(quest => {
    if (has.call(ALL_QUESTS_LIST[quest].needs, 'M')){
      ALL_QUESTS_LIST[quest].needs.M.forEach(map => {
        var questArray = (requiredMapList[map] || []);
        questArray.push(quest);
        requiredMapList[map] = questArray;
      });
    }
  });
  var requiredMapListHTML = "<option value='[]' disabled>Select a map</option>";
  Object.keys(requiredMapList).sort().forEach(map => {
    requiredMapListHTML += `<option value='${JSON.stringify(requiredMapList[map])}'>${map}</option>`;
  });
  $("#QL_RM_select_required_map").html(requiredMapListHTML);
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

  var rewardListHTML = "<option value='[]' disabled>Select a reward</option>";
  Object.keys(rewardList).sort().forEach(reward => {
    rewardListHTML += `<option value='${JSON.stringify(rewardList[reward])}'>${reward}</option>`;
  });
  $("#QL_RM_search_select_reward").html(rewardListHTML);
}

// show only the questboxes listed
function updateQuestListDisplay(questList){
  $('body').scrollTop(0);
  $(`.QL_questBox`).hide();
  var displayedState = JSON.parse($("input[name=QL_RM_display_state]:checked").val()).state;
  var displayedPeriod = [];
  $( ".QL_RM_display_period:checked" ).each(function(){
    displayedPeriod.push($(this).val());
  });

  displayedPeriod.forEach(period => {
    displayedState.forEach(state => {
      if (questList.length === 0){
        $(`.QL_questBox.${period}.${state}`).show();
      } else {
        questList.forEach(quest => {
          $(`#QL_questBox_${quest}.${period}.${state}`).show();
        });
      }
    });
  });

  $("#QL_RM_displayed_state").text(displayedState.length === 3 ? "All" : displayedState);
  $("#QL_RM_displayed_period").text(displayedPeriod.length === 5 ? "All" :
  displayedPeriod.length === 0 ? "None" : formatTextLineBreak(displayedPeriod.toString().replace(/,/g,", "),25) );
}


function resizeFlowchart(height,width){
  var div = myDiagram.div;
  div.style.height = `${height}px`;
  div.style.width = `${width}px`;
  myDiagram.requestUpdate();

}

// add a ribbon to the top right corner of a div
function addRibbonToDiv(divJQ, color,  text){
  removeRibbonFromDiv(divJQ);
  var ribbon = $(`<div class="ribbon-wrapper"><div class="ribbon">${text}</div></div>`);
  ribbon.find(".ribbon").css("background-color", color);
  divJQ.addClass("wrapper").append(ribbon);
}

//remove the ribbon from a div
function removeRibbonFromDiv(divJQ){
  divJQ.removeClass("wrapper").find(".ribbon-wrapper").remove();
}

//add hte events to shipnames that display the face on hovering
function addShipNameHoveringEvents(JqueryText){
  JqueryText.find(".ship_hover").mouseenter(function(){
    var position = $(this).offset();
    position.top -= 70;
    var imageTag=`<div class="hovering_icon" style="position:absolute;z-index:200"><img src="files/webpage/ships/${$(this).attr("value")}.png"></span></div>`;
    $("body").append(imageTag).find(".hovering_icon").offset(position);
    $(this).css("text-decoration", "underline");
  });
  JqueryText.find(".ship_hover").mouseleave(function(){
    $(".hovering_icon").remove();
    $(this).css("text-decoration", "");
  });
}

//show a message in a bubble speech on the top of bottom right Ooyodo and update the image
function displayBubbleMessage(html, image, id, timeout){
  var isOtherBubbleDisplayed = $(".bubble:visible").length > 0;
  var popup = $(`<div class="bubble" data-timeout=${timeout} id="${id}">
  <div class="closeBtn" id="closeBtn_${id}">X</div>
  ${html}
  </div>`);
  changeOoyodoImage(image);
  $('body').append(popup);
  if (isOtherBubbleDisplayed){
    popup.hide();
  }
  $(`#closeBtn_${id}`).click(function(){
    closeBubbleMessage($(`#${id}`))
  });
  // if it's a timing out message and there is no other message start time out
  if(timeout && !isOtherBubbleDisplayed){
    setTimeout(function(){ closeBubbleMessage($(`#${id}`));},20000);
  }
}

function closeBubbleMessage(idJQ){
  idJQ.remove();
  if($(".bubble:hidden").length > 0){
    var nextBubble = $(".bubble:hidden").first();
    nextBubble.show("fast");
    if (nextBubble.attr("data-timeout") === "true"){
      setTimeout(function(){ closeBubbleMessage(nextBubble);},20000);
    }
  }
}

function changeOoyodoImage(image){
  //TODO
}

//   *******    TEXT MODIFICATIONS   **********

// take a reward as input and output a nice string
function parseRewardObject(reward){
  var output = '';
  reward.forEach(loot => {
    // if it's an unique object
    output += `<br>${loot[3] ? loot[3] : ""}`;
    if (has.call(ICONS_LINK, loot[1])){
      // if the item icon is listed, show it
      output += `<span><img class="reward_icon" src="${ICONS_LINK[loot[1]]}"></span> &nbsp;`;
    } else if( loot[0] === 'S'){
      // if it's a ship show the icon
      output += `<span><img class="ship_icon" src="files/webpage/ships/${loot[1]}.png"></span> &nbsp;`;
    }
    output += `${loot[1]}`;
    if(loot[0] !== 'A' && loot[0] !== 'S' && loot[0] !== 'F' && loot[2] !== 1){
      //show the quantity
      output += ` x ${loot[2]}`;
    }

  });
  //delete the first <br>
  if(output.length >=4){
    output =  output.substring(4);
  } else {
    output = "No reward"
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
        case "I":return "Misc";
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

//search for required ship in the content text and put the link to their icon in the text
function addShipImageToContent(quest){
  var contentWithImages = quest.content;
  if (has.call(quest.needs, 'S')){
    quest.needs.S.forEach(ship =>{
      var position = contentWithImages.indexOf(ship);
      if (position !== -1){
        contentWithImages = `${contentWithImages.substr(0, position)}<span class="ship_hover" value="${ship}">${ship}</span> ${contentWithImages.substr(position + ship.length)}`;

      }
    });
  }
  return contentWithImages;
}

/*
// version with  image in text
function addShipImageToContent(quest){
var contentWithImages = quest.content;
if (has.call(quest.needs, 'S')){
quest.needs.S.forEach(ship =>{
var position = contentWithImages.indexOf(ship);
if (position !== -1){
contentWithImages = `${contentWithImages.substr(0, position)}<span><img class="mini_ship_icon" src="files/webpage/ships/${ship}.png"></span>${contentWithImages.substr(position)}`;
}
});
}
return contentWithImages;
}
*/

// **********  TIME FUNCTIONS  ************

//check time every minute
function timeVerificationLoop(lastTime){
  // get the time in Tokyo (place of the servers)
  var now =  moment();
  var resetTimes = getResetTime(lastTime);
  var resetPeriods = [];
  Object.keys(resetTimes).forEach(period => {
    if(checkQuestReset(now,resetTimes[period])){
      resetPeriodicQuest(period);
      resetPeriods.push(period);
    }
  });
  if(resetPeriods.length >0){
    displayBubbleMessage(`Admiral, ${resetPeriods.join(', ')} quests have just been reset.`
    ,"smiling","MSG_reset_notification",true);
  }
  //send a request next daily reset
  var millisecondsUntilNextReset = resetTimes.daily.diff( now ) + 10000;
  setTimeout(function(){timeVerificationLoop(now);},millisecondsUntilNextReset);
}

function getResetTime(lastTime){

  var resetTimes = {};
  //daily
  // reset every day at 5 AM  <=> 20 PM UTC
  var dailyReset =  moment(lastTime).utcOffset("+00:00",false).hour(20).minute(0).second(0);
  resetTimes.daily = moment(lastTime).diff(dailyReset) < 0 ? dailyReset : dailyReset.add(1,"days");
  //weekly
  // reset every monday at 5 AM
  var weeklyReset =  moment(lastTime).utcOffset("+00:00",false).isoWeekday(1).hour(20).minute(0).second(0);
  resetTimes.weekly = moment(lastTime).diff(weeklyReset) < 0 ? weeklyReset : weeklyReset.add(1,"weeks");
  //monthly
  // reset every month at 5 AM
  var MonthlyReset =  moment(lastTime).utcOffset("+00:00",false).date(1).hour(20).minute(0).second(0);
  resetTimes.monthly = moment(lastTime).diff(MonthlyReset) < 0 ? MonthlyReset : MonthlyReset.add(1,"months");
  //quarterly
  // reset first of march, june, september and December => the day before UTC su substract one day
  // months are 0 indexed
  var thisYear_March = moment(lastTime).utcOffset("+00:00",false).month(2).date(1).hour(20).minute(0).second(0).subtract(1,"days");
  var thisYear_June = moment(lastTime).utcOffset("+00:00",false).month(5).date(1).hour(20).minute(0).second(0).subtract(1,"days");
  var thisYear_September = moment(lastTime).utcOffset("+00:00",false).month(8).date(1).hour(20).minute(0).second(0).subtract(1,"days");
  var thisYear_December =moment(lastTime).utcOffset("+00:00",false).month(11).date(1).hour(20).minute(0).second(0).subtract(1,"days");
  var nextYear_March = moment(lastTime).utcOffset("+00:00",false).add(1,"years").month(2).date(1).hour(20).minute(0).second(0).subtract(1,"days");
  if (moment(lastTime).diff(thisYear_March)<0){resetTimes.quarterly = thisYear_March;}
  else  if (moment(lastTime).diff(thisYear_June)<0){resetTimes.quarterly = thisYear_June;}
  else  if (moment(lastTime).diff(thisYear_September)<0){resetTimes.quarterly = thisYear_September;}
  else  if (moment(lastTime).diff(thisYear_December)<0){resetTimes.quarterly = thisYear_December;}
  else  {resetTimes.quarterly = nextYear_March;}
  return resetTimes;

}

// check if now time is over resetTime
function checkQuestReset(now,resetTime){
  return now.diff(resetTime,'minutes')>0;
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
function getQuestsInState(list,state){
  var pendingQuests = [];
  Object.keys(list).forEach(quest =>{
    if (list[quest] === state){
      pendingQuests.push(quest);
    }
  });
  return pendingQuests;
}









initialisation();


//  *******    EVENT LISTENERS   **********



//change between the two mains tabs
$(".HD_main_tab_btn").click(function () {
  $(".main_tab").hide();
  $(".POP").hide("fast");
  $(`#${$(this).val()}`).show("fast");
  //unselect the selected quests in quest list
});

//open option panel
$(".HD_option_btn").click(function () {
  var popup = $(this).val();
  if($(`#${popup}`).is(":visible")){
    $(".POP").hide("fast");
  } else {
    $(".POP").hide();
    if(popup === "IPQ"){
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
    zoom(input.slice(-1)[0]);
    selectedNodes = input;
    hightlightQuest();
  } else {
    $(this).css('outline-color','red');
  }
});

//select a quest in the list
$('#FC_FT_select_quest_list').change(function () {
  let quest = $( "#FC_FT_select_quest_list option:selected" ).val();
  selectedNodes = [quest];
  zoom(quest);
  hightlightQuest();
});

//apply the changes to the flowchart
$('#FC_RM_loading_btn').click(function () {
  buildPartialFlowchart();
});

// GUI changes on manual inputs
$('#FC_RM_starting_quests, #FC_RM_ending_quests').on('input',function () {
  $('#FC_RM_select_preset_quests')[0].selectedIndex = 0;
});

// write the pending quests in the starting quests textbox
$("#FC_RM_use_pending_quests, #FC_RM_use_periodic_quests").change(function(){
  $('#FC_RM_select_preset_quests')[0].selectedIndex = 0;
  if ($("#FC_RM_use_pending_quests").is(':checked')){
    $("#FC_RM_starting_quests").val(getQuestsInState(ALL_QUEST_STATE,'pending').filter(function(quest){
      if($("#FC_RM_use_periodic_quests").is(':checked')){
        return true;
      } else {
        return ALL_QUESTS_LIST[quest].period === "once";
      }
    }).toString()).prop("disabled",true);
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
  updateFlowchartColors();
});

// update the flowchart displayed on change
$("#FC_RM_show_state_colors").change(function(){
  buildPartialFlowchart();
});

// **********   QUEST LIST PANEL MENU LISTENNERS    ***************

// switch between the differents search methods
$("#QL_RM_select_search_method").change(function(){
  $(".QL_RM_select_search_method").hide();
  $(`#QL_RM_search_${$(this).val()}`).find('select').each(function(){
    $(this)[0].selectedIndex = 0;
  });
  $(`#QL_RM_search_${$(this).val()}`).show("fast").find(':text').first().val("").focus();

});

// update quest display on period change
$( ".QL_RM_display_period" ).change(function(){  $
  updateQuestListDisplay([]);
  // enable or disable the All checkbox depending on the number of box checked
  $("#QL_RM_display_period_all").prop('checked', ($( ".QL_RM_display_period:checked" ).length === 5));
});

// check or uncheck all period boxes
$( "#QL_RM_display_period_all" ).change(function(){
  $(".QL_RM_display_period").prop('checked', $("#QL_RM_display_period_all").is(':checked'));
  updateQuestListDisplay([]);
});

// display the quests with corresponding codes
$('#QL_RM_searchQuest').on('input',function () {
  var input = questInputToArray($(this).val());
  if(input.length > 0){
    $(this).css('outline-color','');
  } else {
    $(this).css('outline-color','red');
  }
  updateQuestListDisplay(input);
});

// display the quests requiring this ship/map/reward
$("#QL_RM_select_required_ship, #QL_RM_select_required_map, #QL_RM_search_select_reward").change(function(){
  var questList = JSON.parse($(this).val());
  updateQuestListDisplay(questList);
});


//change the type of displayed rewards
$(`input[name=QL_RM_search_reward]`).change(function(){
  $('body').scrollTop(0);
  loadRewardList();
});

//change the state of displayed quests
$( "input[name=QL_RM_display_state]:radio" ).change(function(){
  updateQuestListDisplay([]);
});


// validate the input of pending quests
$('#IPQ_btn_OK').click(function () {
  var inputedPendingQuests = questInputToArray($("#IPQ_txt_area").val());

  // if no periodic quests are inputed
  if (inputedPendingQuests.every(function(quest){return ALL_QUESTS_LIST[quest].period === 'once'})){
    var popup = $(`<div class="MSG" id="MSG_ask_periodic_quests">Admiral, it seems that you<br>
    didn't input any periodic quests...<br>
    Do you have completed all of them right now?<br>
    Care, it may change my calculation's result of your progression!!<br>
    <button type="button" class="MSG_btn" value="true">Yes !</button>
    <button type="button" class="MSG_btn" value="false">No</button>
    </div>`);
    $('body').append(popup);
    $(".MSG_btn").click(function(){
      $("#MSG_ask_periodic_quests").hide("fast").remove();
      calculateQuestState({pendingQuests:inputedPendingQuests,userDecisions:{},setPeriodicQuestCompleted:$(this).val() === 'true',questAdvice:[]});
    });
  } else {
    calculateQuestState({pendingQuests:inputedPendingQuests,userDecisions:{},setPeriodicQuestCompleted:false,questAdvice:[]});
  }

});

//cancel the input of pending quests
$('#IPQ_btn_cancel').click(function () {
  $(`#IPQ`).hide("fast");
});

// on doubleclick set it as finalquest in the flowchart
$(".QL_questBox_goToChart_btn").click(function(e){
  $(`#QL_selected_${$(this).attr("id").split('_')[3]}`).prop("checked",true).trigger("change");
  selectedNodes = [];
  $(".QL_selected_checkbox:checked").each(function(){
    selectedNodes.push($(this).attr("id").split('_')[2]);
  });
  $("#QL").hide();
  $("#FC").show('fast');
  $("#FC_RM_ending_quests").val(selectedNodes.join(', ')).trigger("change");
  buildPartialFlowchart();
  hightlightQuest();
});

//reset all the research parameters
$("#QL_RM_reset_search").click(function(){
  $(".QL_RM_display_period, #QL_RM_display_period_all").prop("checked",true);
  $("input[name=QL_RM_display_state]:radio").first().prop("checked",true);
  $(`.QL_RM_select_search_method`).find('select').each(function(){
    $(this)[0].selectedIndex = 0;
  });
  $(`.QL_RM_select_search_method`).find(':text').first().val("");
  updateQuestListDisplay([]);
});

$("#QL_RM_reset_selection").click(function(){
  $(".QL_selected_checkbox").prop("checked",false).trigger("change");
});



// set the quest as completed
$(".complete_btn, .QL_questBox_complete_btn").click(function(){
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

//show the tips in the bubble message when clicked
$(".quest_tips").click(function(){
  var quest = $(this).attr("id").split('_')[3];
  var tipsMsg = ALL_QUESTS_LIST[quest].tips;
  if(tipsMsg === ""){
    tipsMsg = `Admiral, there is no tips for the quest ${quest}, sorry.`;
  } else {
    tipsMsg = `Tips and avices for quest <b>${quest}</b>:<br>
    ${tipsMsg.replace(/※/g,"<br>●")}`;
  }
  displayBubbleMessage(tipsMsg ,"???", "MSG_tips_quest",false);
});

//hide the button after clicking on it
$(`#FC_FT_quest_info_complete_btn`).click(function(){
  $(this).hide();
});

$(".QL_selected_checkbox").change(function(){
  var questBox = $(`#QL_questBox_${$(this).attr('id').split("_")[2]}`);
  if($(this).is(":checked")){
    questBox.css("border-width",COLORS.selected.border_width)
    .css("border-color",COLORS.selected.border_color)
    .css("margin",12 - COLORS.selected.border_width);
  } else {
    //TODO put the right size of border
    questBox.css("border-width",'2px').css("border-color",'black').css("margin",10);
  }
});


// change the diagram size when the window size is changed
$( window ).resize(function() {
  resizeWindow();
});

function resizeWindow(){
  resizeFlowchart( $(window).height() - 240 - 4, $(window).width() - 175 -20);
}

});

//create a cookie
function setCookie(cname, cvalue, exdays) {
  if(getCookie("acceptCookies")){
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }
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
  // if the cookie doesn't exist
  if (cname === "user_quests"){
    // the empty cookie so the code don't bug if cookies are disabled
    return JSON.stringify({pendingQuests:[], userDecisions:{}, periodicCompleted:false, questAdvice:[], timeStamp:moment().format()});
  } else {
    return "";
  }
}
