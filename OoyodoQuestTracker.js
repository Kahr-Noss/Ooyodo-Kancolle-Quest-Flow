$(function () {
  //  *********   GLOBAL VARIABLES   ************

  //default color object
  const COLORS = {
    A:"#43C769",
    B:"#EC6063",
    C:"#93CE67",
    D:"#4EBBD4",
    E:"#DEC772",
    F:"#BA8F79",
    G:"#CAA6DD",
    S:"#EC6063",
    W:"#FDD0F0",
    selected:{
      border_color:"#ff0000",
      border_width:10,
    },
    notHighlighted:{
      background_color:"#ffffff",
      border_color:"#000000",
      border_width:5,
    },
    default:{
      border_width:5,
      border_color:"#000000",
    }


  };

  var questStateCalculated = false;
  var ALL_QUEST_STATE = {};                     // current quests state
  var myDiagram;                                // the GOJS diagram
  var selectedNodes = [];                       // array of nodes selected on the diagram
  var diagramAnimationCompleteFunction = function(){};
  var bubbleTimeout;

  // function used at the loading of the page
  function initialisation(){



    $(document).on("bubble_displayed",function(e,bubble){
      if(bubble === "MSG_welcome"){
        $(document).off("bubble_displayed");
        //load various data in the DOM
        loadRequiredShipList();
        loadRewardList();
        loadRequiredMapList();
        displayAllQuestBoxes(Object.keys(ALL_QUESTS_LIST));
        activateQuestBoxesEventListenners();
        var questCookie = JSON.parse(getCookie('user_quests'));
        questCookie.timeStamp = moment().subtract(3,"months");

        console.log(questCookie);
        loadFlowchart();
        resizeWindow();
        displayFlowchart();
        loadQuestStateFromCookie(questCookie);
        timeVerificationLoop(questCookie.timeStamp);

        displayBubbleMessage(`<span id="MSG_welcome_progress">Flowchart generation complete!</span>`
        ,"complete","MSG_welcome",true, true, true, function(){
          $("#MSG_welcome_progress").text("Flowchart generation complete!");
        });

        if(!questStateCalculated){
          $(document).trigger("start_tutorial");
        }

      }
    });


    // welcome message
    if (document.cookie.indexOf('user_quests=') === -1){
      displayBubbleMessage(`Nice to meet you, it seems that's the first time you are coming here. Let me just a moment to write all the flowchart. Please follow the tutorial to learn how to use this application.<br>
      <br>
      <i><span id="MSG_welcome_progress">Flowchart generation in progress...</span></i>`
      ,"writing","MSG_welcome",true, true,true);
    } else {
      displayBubbleMessage(`Admiral, welcome back! Let me just a moment to prepare everything.<br>
        <span id="MSG_welcome_progress">Flowchart generation in progress...</span>`
        ,"writing","MSG_welcome",true, true,true);
      }

    }



    //  ***********    Flowchart functions     ************

    function loadFlowchart() {

      var $ = go.GraphObject.make;  // for conciseness in defining templates

      var bigfont = "bold 23pt Helvetica, Arial, sans-serif";

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
          layerSpacing: 125,
          initializeOption: go.LayeredDigraphLayout.InitDepthFirstOut,
          layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource })
        });

        $(go.Adornment, "Spot",
        $(go.Panel, "Auto",
        $(go.Shape, { fill: null, stroke: "#e60000", strokeWidth: 10 }),
        $(go.Placeholder))
      );

      myDiagram.nodeTemplate =
      $(go.Node, "Auto",
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
      $(go.Shape, "Rectangle",
      { portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer",
      toEndSegmentLength: 25, fromEndSegmentLength: 20, name:"SHAPE",
      minSize: new go.Size(100, 75)},
      new go.Binding("fill", "color"),
      new go.Binding("stroke", "strokeColor"),
      new go.Binding("strokeWidth", "strokeWidth")),
      $(go.Panel, "Horizontal",{ padding: new go.Margin(10,40,10,10) },
      $(go.Picture,
        { margin: 2, name: "STATE_ICON" },
        new go.Binding("source", "source")
      ),
      $(go.TextBlock, "Page",
      { margin: 6,
        font: bigfont,
        editable: false,
        column:1,
        name:"TEXT",
        verticalAlignment: go.Spot.Center
      },
      new go.Binding("text", "text").makeTwoWay(),
      new go.Binding("stroke", "text_color"))),

      new go.Binding("visible", "visible"),

      $(go.Panel, "Spot",
      new go.Binding("opacity", "ribbon", function(t) { return t ? 1 : 0; }),
      // note that the opacity defaults to zero (not visible),
      // in case there is no "ribbon" property
      {
        opacity: 0,
        alignment: new go.Spot(1, 0, 5, -5),
        alignmentFocus: go.Spot.TopRight,
        name:"RIBBON", scale:1
      },
      $(go.Shape,  // the ribbon itself
        { geometryString: "F1 M0 0 L30 0 70 40 70 70z",
        stroke: null, strokeWidth: 0},

        new go.Binding("fill", "ribbon_color")
      ),
      $(go.TextBlock,
        new go.Binding("text", "ribbon_text"),
        { alignment: new go.Spot(1, 0, -29, 29),
          angle: 45, maxSize: new go.Size(50, NaN),
          stroke: "white", font: "bold 11px sans-serif", textAlign: "center",
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
        { curve: go.Link.None , toShortLength: 13, curviness: 1 , layerName: "Background"},
        $(go.Shape,  // the link shape
          { stroke: "#000000", strokeWidth:4},
          new go.Binding("stroke", "isHighlighted",
          function(h) { return h ? "#000000" : "#ffffff"; })
          .ofObject()
        ),
        $(go.Shape,  // the arrowhead
          { toArrow: "Standard", fill: "#000000", stroke: null, scale:2.5},
          new go.Binding("fill", "isHighlighted",
          function(h) { return h ? "#000000" : "#ffffff"; })
          .ofObject()
        )
      );

      //event listenner on click on the background to unselect all
      myDiagram.click = function(e) {
        clearHighlights();
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

      myDiagram.addDiagramListener('AnimationFinished',function(e){
        diagramAnimationCompleteFunction();
        diagramAnimationCompleteFunction = function(){};
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
      if (scale <0.30){
        scale = 0.45;
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
      centerView();

    }

    function centerView(){
      myDiagram.zoomToFit();
      myDiagram.alignDocument(go.Spot.Center, go.Spot.Center);

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
        updateNodeDisplay(n, COLORS.notHighlighted.background_color,"notHighlighted",ALL_QUESTS_LIST[n.data.key].period);
      });

      selectedNodes.forEach(quest => {
        var  node = myDiagram.findNodeForKey(quest);
        if($("#FC_RM_highlight_upward").is(':checked')){
          highlightUpward(node);
        }
        //for requirements calculation purposes, the highlight downward will always be run, but only displayed is the checkbox is checked
        highlightDownward(node, requieredQuestList);
        updateNodeDisplay(node, getQuestColor(node.data.key), "selected",ALL_QUESTS_LIST[node.data.key].period);
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
      updateNodeDisplay(node, getQuestColor(node.data.key),"default",ALL_QUESTS_LIST[node.data.key].period);
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
          updateNodeDisplay(node, getQuestColor(node.data.key),"default",ALL_QUESTS_LIST[node.data.key].period);
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

    function clearHighlights(){
      selectedNodes = [];
      myDiagram.startTransaction("no highlighteds");
      myDiagram.clearHighlighteds();
      myDiagram.nodes.each(function(n) {
        updateNodeDisplay(n, getQuestColor(n.data.key),"default", ALL_QUESTS_LIST[n.data.key].period);
      });
      myDiagram.commitTransaction("no highlighteds");
    }

    // change the state of a quest and update the unlocked ones
    function setQuestAsCompleted(quest){
      var questsCookie = JSON.parse(getCookie('user_quests'));
      var questsToAsk = [];
      var questsUnlocked = [];
      //get all currently displayed quest to display them again
      var visibleQuests = [];
      $(`.QL_questBox:visible`).each(function(){
        visibleQuests.push($(this).attr("id").split('_')[2]);
      });

      questsCookie.timeStamp = moment().utcOffset("+09:00").format();
      //set the quest as completed
      ALL_QUEST_STATE[quest] = 'completed';
      updateQuestStateDisplay(quest);

      //set the following quests to pending if all other requierments are completed
      ALL_QUESTS_LIST[quest].unlocks.forEach(unlockedQuest => {
        //only do this if the quest is locked
        if(ALL_QUEST_STATE[unlockedQuest] === "locked"){
          if ( ALL_QUESTS_LIST[unlockedQuest].requires.every(function(requiredQuest){return ALL_QUEST_STATE[requiredQuest] === 'completed';})){
            // if all requierments for this quest are completed
            //check if it was an undetermined quest or not
            if($.inArray(unlockedQuest,questsCookie.undeterminedQuests) === -1){
              // if not, set is as pending
              ALL_QUEST_STATE[unlockedQuest] = 'pending';
              updateQuestStateDisplay(unlockedQuest);
              questsUnlocked.push(unlockedQuest);
            } else {
              //if yes ask the user if the quest is displayed in game or not.

              askToCheckIfQuestIsPendingInGame(unlockedQuest,visibleQuests);
            }
          } else if (ALL_QUESTS_LIST[unlockedQuest].requires.every(function(requiredQuest){return (ALL_QUESTS_LIST[requiredQuest].period === 'once' && ALL_QUEST_STATE[requiredQuest] === 'completed') || ALL_QUESTS_LIST[requiredQuest].period !== 'once';})){
            // if all once quests are completed and only periodic quests aren't completed, we ask the user if those quests are completed or not (maybe he didn't update them)
            questsToAsk.push(unlockedQuest);
          }
        }
      });

      // ask the user if he finished some periodic quests to see if he unlocks or not the next quest
      askForPeriodicQuestsToUnlock(quest,questsToAsk,questsUnlocked,questsCookie,visibleQuests);

      //display all changes except those where you ask (if the user doesn't eanswer, no changes are made)
      updateQuestListDisplay(visibleQuests);
      questsCookie.progress = getSaveStringForCookie();
      setCookie('user_quests',JSON.stringify(questsCookie),365);
    }

    // aske the user if he completed some periodic quests in case of he didn't update them
    function askForPeriodicQuestsToUnlock(quest,questsToAsk,questsUnlocked,questsCookie,visibleQuests){

      function closingProcess(){
        //add all the quests to the undetermined list

        if(questsUnlocked.length > 0){
          displayBubbleMessage(`Admiral, you have unlocked the following quests:<br>
            <span id="MSG_quest_unlocked_quests">${questsUnlocked.join(', ')}</span>`,
            "welcome","MSG_quest_unlocked",true,false,true,function(){$("#MSG_quest_unlocked_quests").text(`${$("#MSG_quest_unlocked_quests").text()}, ${questsUnlocked.join(', ')}`);}
          );
        }
        updateQuestListDisplay(visibleQuests);
        questsCookie.progress = getSaveStringForCookie();
        setCookie('user_quests',JSON.stringify(questsCookie),365);
      };

      if (questsToAsk.length > 0){

        var unlockedQuest = questsToAsk.shift();
        var periodicQuestsList = ALL_QUESTS_LIST[unlockedQuest].requires.filter(function(requiredQuest){return ALL_QUESTS_LIST[requiredQuest].period !== 'once' && ALL_QUEST_STATE[requiredQuest] !== 'completed';});

        displayBubbleMessage(`Admiral, just a question, since you achieved quest ${quest}, did you complete those periodic quests without notifying me?<br>
          <span class="link" id="MSG_completed_quest_display_${unlockedQuest}">${periodicQuestsList.join(", ")}</span><br>
          <button type="button" class="MSG_completed_quest_${quest}_btn" value="pending">Yes</button>
          <button type="button" class="MSG_completed_quest_${quest}_btn" value="locked">I don't know</button>
          <button type="button" class="MSG_completed_quest_${quest}_btn" value="locked">No</button>`,
          "writing",`MSG_completed_quest_${quest}`,false,true,false
        );

        $(`.MSG_completed_quest_${quest}_btn`).click(function(){
          closeBubbleMessage( $(`#MSG_completed_quest_${quest}`));
          if($(this).val()==="pending"){
            ALL_QUEST_STATE[unlockedQuest] ="pending";
            updateQuestStateDisplay(unlockedQuest);
            questsUnlocked.push(unlockedQuest);
          }
          askForPeriodicQuestsToUnlock(quest,questsToAsk,questsUnlocked,questsCookie,visibleQuests);
        });

        //display the quest on flowchart when clicking on the link
        $(`#MSG_completed_quest_display_${unlockedQuest}`).click(function(){
          $("#QL").hide();
          $("#FC").show('fast');
          displayPartialTree(periodicQuestsList);
          displayQuestData(periodicQuestsList[0]);
        });

        //when closing the bubble => display result
        $(`#closeBtn_MSG_completed_quest_${unlockedQuest}`).click(function(){
          closingProcess();
        });
      } else {
        closingProcess();
      }
    }




    function askToCheckIfQuestIsPendingInGame(unlockedQuest,visibleQuests){
      //default function, set it as pending / and update the cookie
      function setAsPending(){
        var questsCookie = JSON.parse(getCookie('user_quests'));
        ALL_QUEST_STATE[unlockedQuest]="pending";
        updateQuestStateDisplay(unlockedQuest);
        questsCookie.pendingQuests.push(unlockedQuest);
        questsCookie.undeterminedQuests.splice(questsCookie.undeterminedQuests.indexOf(unlockedQuest), 1);
        updateQuestListDisplay(visibleQuests);
        setCookie('user_quests',JSON.stringify(questsCookie),365);
        displayBubbleMessage(`Admiral, you have unlocked the following quests:<br>
          <span id="MSG_quest_unlocked_quests">${unlockedQuest}</span>`,
          "welcome","MSG_quest_unlocked",true,false,true,function(){$("#MSG_quest_unlocked_quests").text(`${$("#MSG_quest_unlocked_quests").text()}, ${unlockedQuest}`);}
        );
      };

      displayBubbleMessage(`Admiral, just a moment...<br>
        Last time I calculated your progression, you told me that you didn't remember if you completed or not some quests.<br>
        With the quest you just completed, we can settle this question. Go in the quest tab of your game and tell me if the quest
        <span class="link" id="MSG_check_unknown_quest_display_${unlockedQuest}">${unlockedQuest}</span><br>
        is present or not.
        <button type="button" class="MSG_check_unknown_quest_${unlockedQuest}_btn" value="locked">Yes, it's here</button>
        <button type="button" class="MSG_check_unknown_quest_${unlockedQuest}_btn" value="completed">No, I can't found it</button>`,
        "writing",`MSG_check_unknown_quest_${unlockedQuest}`,false,true,false
      );

      //display the quest on flowchart when clicking on the link
      $(`#MSG_check_unknown_quest_display_${unlockedQuest}`).click(function(){
        $("#QL").hide();
        $("#FC").show('fast');
        displayPartialTree([unlockedQuest]);
        displayQuestData(unlockedQuest);
      });

      $(`.MSG_check_unknown_quest_${unlockedQuest}_btn`).click(function(){
        closeBubbleMessage( $(`#MSG_check_unknown_quest_${unlockedQuest}`));
        if($(this).val()==="completed"){
          //if not found it means it was already comnpleted so set all quest after to completed and remove the quest from teh undertermined in the cookie
          var questsCookie = JSON.parse(getCookie('user_quests'));
          addUnlockedQuests(unlockedQuest).forEach(qst => {
            ALL_QUEST_STATE[qst]="completed";
            updateQuestStateDisplay(qst);
          });
          questsCookie.undeterminedQuests.splice(questsCookie.undeterminedQuests.indexOf(unlockedQuest), 1);
          updateQuestListDisplay(visibleQuests);
          setCookie('user_quests',JSON.stringify(questsCookie),365);
        } else if ($(this).val()==="locked"){
          //if found, it means that the quest hasn't been completed yet
          setAsPending();
        }
      });

      //if closing without answer, set is as pending by default
      $(`#closeBtn_MSG_completed_quest_${unlockedQuest}`).click(function(){
        setAsPending();
      });

    }



    // reset the periodic quests of the secified period
    function resetPeriodicQuest(period){
      var questsCookie = JSON.parse(getCookie('user_quests'));
      questsCookie.timeStamp = moment().utcOffset("+09:00").format();
      var periodicQuestsList = Object.keys(ALL_QUESTS_LIST).filter(function(quest){return ALL_QUESTS_LIST[quest].period === period});
      // set all periodic quests to ??? state (to remove any problem to set the pending state)
      periodicQuestsList.forEach(quest =>{
        ALL_QUEST_STATE[quest] = "???";
      });

      periodicQuestsList.forEach(quest =>{
        if( ALL_QUESTS_LIST[quest].requires.every(function(requiredQuest){return ALL_QUEST_STATE[requiredQuest] === 'completed';})){
          ALL_QUEST_STATE[quest] = "pending";
        } else {
          ALL_QUEST_STATE[quest] = "locked";
        }
        updateQuestStateDisplay(quest);
      });
      updateQuestListDisplay([]);
    questsCookie.progress = getSaveStringForCookie();

      setCookie('user_quests',JSON.stringify(questsCookie),365);
    }

    // ******      FLOWCHART CREATION     *********

    // create the flowchart  from all quests data
    function buildFlowchart(){
      var questNodeDataArray = [];
      var questLinkDataArray = [];
      Object.keys(ALL_QUESTS_LIST).forEach(quest => {
        //create a node
        var color = getQuestColor(quest);
        var state = "completed";
        questNodeDataArray.push({
          "key": quest,
          "color": color,
          "text": quest,
          "strokeWidth":5,
          "strokeColor":"#000000",
          "visible": true,
          "tooltip":formatTextLineBreak(ALL_QUESTS_LIST[quest].content,65),
          "ribbon_text":ALL_QUESTS_LIST[quest].period,
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
        questListHTML += `<option value="${quest}" style="background-color:${getQuestColor(quest)};">${quest}</option>`;
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
      var partialQuestList = [];
      var startingQuestsList = questInputToArray($('#FC_RM_starting_quests').val());
      var endingQuestsList =questInputToArray($('#FC_RM_ending_quests').val());
      var direction = (endingQuestsList.length === 0) ? "up" : "down" ;
      var usePending = $("#FC_RM_use_pending_quests").is(":checked") && questStateCalculated;
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

// load the cookie with the saved state
    function loadQuestStateFromCookie(userQuestCookie){
      ALL_QUEST_STATE_TMP = {};
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
  $("#MSG_quest_unlocked").remove();


          // affect a function to be runned after the animation is completed
          diagramAnimationCompleteFunction = function(){
            $(".QL_questBox").removeClass("pending locked completed");
            Object.keys(ALL_QUEST_STATE).forEach(quest =>{
              updateQuestStateDisplay(quest);
            });
          };

if (getQuestsInState(ALL_QUEST_STATE,"completed").length !== Object.keys(ALL_QUEST_STATE).length){
  questStateCalculated = true;
          displayRemainingQuests();
        }
    }

    function displayRemainingQuests(){
      var remainingQuestsList =  getQuestsInState(ALL_QUEST_STATE,"pending").concat(getQuestsInState(ALL_QUEST_STATE,"locked"));
      displayQuestListSelect(remainingQuestsList);
      displayPartialTree(remainingQuestsList);
    }


    // using pending quests  list calculate the state of all quests
    function calculateQuestState(pendingQuests){

var undeterminedQuests = [];
      var ALL_QUEST_STATE_TMP = {};

        //reset all states to ???
        Object.keys(ALL_QUESTS_LIST).forEach(quest=>{
          ALL_QUEST_STATE_TMP[quest] = '???';
        });

        //set inputed quests to pending
        pendingQuests.forEach(quest=>{
          ALL_QUEST_STATE_TMP[quest] = 'pending';
        });

        // set all the quest linked to pending quests to completed or locked
        var inconsistenciesList = setQuestStateLinkedToPendingQuests();

        // there are problems with the inputed quests
        if(inconsistenciesList.length !== 0){
          var inconsistencies_msg = "";
          inconsistenciesList.forEach(inconsistency =>{
            inconsistencies_msg += `${inconsistency[0]} can't be pending if ${inconsistency[1]} hasn't be completed<br>`;
          });
          $("#MSG_IPQ_error_msg").html(inconsistencies_msg);

        } else {
          // if no problem, close the input bubble and proceed the next calculations

          clearHighlights();
          completeRemainingQuestsLoop(function(){
            closeBubbleMessage($("#MSG_IPQ"));
            questStateCalculated = true;
            implementQuestsStateUpdated();
          });
        }


      //  -------- FUNCTIONS NESTED FOR CALCULATE QUEST STATE ------------

      //set quests's state based on link to the inputed pending quests
      function setQuestStateLinkedToPendingQuests(){
        var inconsistenciesList = [];
        // starting by one time (5) quests to daily (1), do for each period
        for (var i=5; i>0; i--){
          pendingQuests.forEach(quest=>{
            //if the quest period match the current loop
            if(periodNumberEquivalence(ALL_QUESTS_LIST[quest].period) === i) {
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

        // ******** NESTED RECURSIVE FUNCTIONS ***********

        // recusrsive function that update the quests state moving upward and check inconsistencies
        function setQuestStateUpward(quest,period){
          let inconsistencies = [];
          ALL_QUESTS_LIST[quest].unlocks.forEach(nextQuest=>{
            if( ALL_QUEST_STATE_TMP[nextQuest] === '???'){
              // if not yet filled in, update state to 'locked' if period inferior or equal
              if(periodNumberEquivalence(ALL_QUESTS_LIST[nextQuest].period) <= period){
                ALL_QUEST_STATE_TMP[nextQuest] = 'locked';
              }
              // ... and continue
              inconsistencies = inconsistencies.concat(setQuestStateUpward(nextQuest,period));
            } else {
              //il already updated
              if(periodNumberEquivalence(ALL_QUESTS_LIST[nextQuest].period) <= period){
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
              if(periodNumberEquivalence(ALL_QUESTS_LIST[previousQuest].period) >= period){
                ALL_QUEST_STATE_TMP[previousQuest] = 'completed';
              }
              // ...and continue
              inconsistencies = inconsistencies.concat(setQuestStateDownward(previousQuest,period));
            } else {
              //if already updated
              if(periodNumberEquivalence(ALL_QUESTS_LIST[previousQuest].period) >= period){
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
        // *************** END OF NESTED RECURSIVE FUNCTIONS  ***************

        return inconsistenciesList;
      }

      //---------------------------------------------------------------------------------------------------------
      //--------------------------------------------------------------------------------------------------------

      // Loop to set remaining quests
      function completeRemainingQuestsLoop(callback){

        var unknownQuestNbBef = Object.keys(ALL_QUEST_STATE_TMP).length;
        var unknownQuestNbAft = getQuestsInState(ALL_QUEST_STATE_TMP,"???").length;
        //for each period starting with once , then periodic starting with small periods, set to complete the quests with all the required quests completed
        // do this until the number of unknown quest stop reducing
        while (unknownQuestNbBef > unknownQuestNbAft){
          unknownQuestNbBef = unknownQuestNbAft;
          ["once","daily","weekly","monthly","quarterly"].forEach(period => {
            setRemainingQuestState(period);
          });
          unknownQuestNbAft = getQuestsInState(ALL_QUEST_STATE_TMP,"???").length;
        }
        // once all the quest that could have been determined are set, check if there are still unknown quests
        if(unknownQuestNbAft > 0){
          //get the undefined quests, ask the user about their state  and rerun the loop
          var startingUnknownQuestsList = getQuestsInState(ALL_QUEST_STATE_TMP,"???").filter(function(quest){
            return ALL_QUESTS_LIST[quest].requires.every(function(q){return ALL_QUEST_STATE_TMP[q] !== "???"});
          });
          askForUnknowQuestState();

        } else {
          // end
          callback();
        }


        // this function will ask the user if he remember doing one time quests that can't be calculated
        function askForUnknowQuestState(){
          // if there is unknown quests remaining
          if (startingUnknownQuestsList.length > 0){
            var startingQuest = startingUnknownQuestsList.shift();

              $("#QL").hide();
              $("#FC").show('fast');
              displayPartialTree([startingQuest]);
              displayQuestData(startingQuest);

              displayBubbleMessage(`Admiral, I need some help to<br>
                complete your progression on the quest flowchart...<br>
                Do you already completed this quest?<br>
                <span class="link" id="MSG_ask_quest_state_display">${startingQuest}</span><br>
                <button type="button" class="MSG_btn" value="completed">Yes !</button>
                <button type="button" class="MSG_btn idk" value="locked">I don't know</button>
                <button type="button" class="MSG_btn" value="locked">No, not yet</button>`,
                "writing","MSG_ask_quest_state",false,true,false
              );

              $(".MSG_btn").click(function(){
                closeBubbleMessage($("#MSG_ask_quest_state"));
                ALL_QUEST_STATE_TMP[startingQuest] = $(this).val();
                if ($(this).hasClass("idk")){
                  if (undeterminedQuests.indexOf(startingQuest) === -1){
                    undeterminedQuests.push(startingQuest);
                  }
                }
                askForUnknowQuestState();
              });

              //display the quest on flowchart when clicking on the link
              $(`#MSG_ask_quest_state_display`).click(function(){
                $("#QL").hide();
                $("#FC").show('fast');
                displayPartialTree(startingQuest);
                displayQuestData(startingQuest);
              });

          } else {
            //when all the quest have been answered, rerun the loop
            completeRemainingQuestsLoop(callback);
          }
        }
      }



      // set periodic quests either as pending if all requierments are completed or to locked
      function setRemainingQuestState(period){

        //select the quests with state "???" and corresponding to the period
        getQuestsInState(ALL_QUEST_STATE_TMP,'???').filter(function(qst){return ALL_QUESTS_LIST[qst].period === period}).forEach(quest=>{
          if (ALL_QUESTS_LIST[quest].requires.every(function(requiredQuest){return ALL_QUEST_STATE_TMP[requiredQuest] === "completed";})){
            //if they have no requierments or if all are completed, we assume that it means that this one is completed, and the one (with the same period) after also
            //(if not one of them should have been listed with the pending quests)
            ALL_QUEST_STATE_TMP[quest] = "completed";

          } else if(ALL_QUESTS_LIST[quest].requires.some(function(requiredQuest){return ALL_QUESTS_LIST[requiredQuest].period === period && (ALL_QUEST_STATE_TMP[requiredQuest] === "pending" || ALL_QUEST_STATE_TMP[requiredQuest] === "locked");})){
            // if a quest of same period is not completed in the required quests => locked
            ALL_QUEST_STATE_TMP[quest] = "locked";

          } else if(ALL_QUESTS_LIST[quest].requires.length === 1){
            //if there is only one the required quest state and it's not completed and the period is shorter, check if one quest with the same period as the current quest is pending / completed in the quests unlocked by the required quest
            // or the user ansered that he already done all the monthly quests
            var previousQuest = ALL_QUESTS_LIST[quest].requires[0];
            if (searchPendingOrCompletedQuestInUnlocks(previousQuest,period) &&  periodNumberEquivalence(ALL_QUESTS_LIST[previousQuest].period) <= periodNumberEquivalence(period)){
              ALL_QUEST_STATE_TMP[quest] = "completed";
            }

          }
        });

        //  ######################     RECUSRSIVE SEARCH FUNCTION   ###################

        // serach if there is any "pendind" or "completed" quest in the quests unlocked by this one
        function searchPendingOrCompletedQuestInUnlocks(quest,period){
          var isFound = false;
          ALL_QUESTS_LIST[quest].unlocks.forEach(unlockedQuest =>{
            if ((ALL_QUEST_STATE_TMP[unlockedQuest] === 'pending' || ALL_QUEST_STATE_TMP[unlockedQuest] === 'completed')
            && periodNumberEquivalence(ALL_QUESTS_LIST[unlockedQuest].period) <= periodNumberEquivalence(period)){
              isFound = true;
            } else {
              isFound = isFound || searchPendingOrCompletedQuestInUnlocks(unlockedQuest,period);
            }
          });
          return isFound;
        }
      }






      //========================     IMPLEMENT CHANGES    ============================


      //this function is called at the end and implement the newly calculated states if there is no inconsistencies, else error message
      function implementQuestsStateUpdated(){
        //remove the message corresponding to the previous state of flowchart
        $("#MSG_quest_unlocked").remove();
        ALL_QUEST_STATE = cloneObject(ALL_QUEST_STATE_TMP);


        $("#MSG_IPQ_error_msg").text("");

        var userQuestCookie = {};
        // reset the last updated timestamp
              userQuestCookie.timeStamp = moment().utcOffset("+09:00").format();
        userQuestCookie.progress = getSaveStringForCookie();
        userQuestCookie.undeterminedQuests = undeterminedQuests;

        setCookie('user_quests',JSON.stringify(userQuestCookie),365);

        if (undeterminedQuests.length >0){
          displayBubbleMessage(`Admiral, about those quests that you didn't know the state, you should complete those quests:<br>
          <span id="MSG_quest_completion_advice_quests">${getBlockingPeriodicQuests(undeterminedQuests).join(', ')}</span><br>
          Update your progress once you are done.`,
          "explaining","MSG_quest_completion_advice",true,false,true,function(){$("#MSG_quest_completion_advice_quests").text($("#MSG_quest_completion_advice_quests").text() + questsUnlocked.join(', '));});
        }

        //fire event for tutorial_answer
        if($("#tuto").is(':visible')){
          $("#tuto").trigger("tutorial_answer");
        }

        // affect a function to be runned after the animation is completed
        diagramAnimationCompleteFunction = function(){
          $(".QL_questBox").removeClass("pending locked completed");
          Object.keys(ALL_QUEST_STATE).forEach(quest =>{
            updateQuestStateDisplay(quest);
          });
        };


        // display the diagram
        if(myDiagram){
          if (questStateCalculated){
            $("#FC_RM_use_pending_quests").prop("checked",true).trigger("change");
          }
          $("#FC_RM_ending_quests").val("");
          buildPartialFlowchart();
        }

      }
    }


    function getSaveStringForCookie(){
      var output_tmp = {};

      ["pending","completed","locked"].forEach(state => {
        output_tmp[state] = {};
        getQuestsInState(ALL_QUEST_STATE,state).forEach(quest => {
          if (output_tmp[state][quest.charAt(0)] === undefined){
            output_tmp[state][quest.charAt(0)] = quest.substr(1);
          }  else {
            output_tmp[state][quest.charAt(0)] += "," + quest.substr(1) ;
          }
        });
      });

      var outputString = [];
      Object.keys(output_tmp).forEach(state => {
        outputString.push(state.charAt(0) + ":" + JSON.stringify(output_tmp[state]));
      });
      outputString = outputString.sort(function (a, b) { return b.length - a.length; })
      outputString.shift();

      var output = {};

      outputString.forEach(string => {
        output[string.charAt(0)] = JSON.parse(string.substr(2));
      });
      return JSON.stringify(output);
    }

    // return the quests that require the completion of a periodic quest to became pending
    function getBlockedQuests(){
      //get all the once quests in locked state, with all once quests completed and periodic uncompleted
      return getQuestsInState(ALL_QUEST_STATE,"locked")
      .filter(function(qst){return ALL_QUEST_STATE[qst] === "locked" && ALL_QUESTS_LIST[qst].period === "once";})
      .filter(function(qst){return ALL_QUESTS_LIST[qst].requires.every(function(q){
        return (ALL_QUEST_STATE[q] === 'completed' && ALL_QUESTS_LIST[q].period === 'once') ||  ALL_QUESTS_LIST[q].period !== 'once';
      });});
    }

    function getBlockingPeriodicQuests(blockedQuests){

      function checkIfQuestIsLockedOnlyByPeriodicQuests(quest){
        var result = true;
        ALL_QUESTS_LIST[quest].requires.forEach(req =>{
          if (ALL_QUESTS_LIST[req].period === 'once' && ALL_QUEST_STATE[req] !== 'completed'){
            // if there is a one time quest uncompleted, return directly false
            result = false;
          } else if (ALL_QUESTS_LIST[req].period !== 'once'  && ALL_QUEST_STATE[req] === 'locked'){
            //if there is a periodic quest locked, go deeper
            result = result && checkIfQuestIsLockedOnlyByPeriodicQuests(req);
          }
        });
        return result;
      };

      var blockingQuests = []
      blockedQuests.forEach(quest => {
        if (checkIfQuestIsLockedOnlyByPeriodicQuests(quest)){
          blockingQuests = blockingQuests.concat(ALL_QUESTS_LIST[quest].requires.filter(function(qst){return ALL_QUESTS_LIST[qst].period !== "once" && ALL_QUEST_STATE[qst] !== "completed"}));
        }
      });
      return removeDoublonFromArray(blockingQuests);
    }




    // return a number depending of the period's string, for loop comparison purposes
    function periodNumberEquivalence(period){
      switch (period){
        case "daily" : return 1;
        case "weekly" : return 2;
        case "monthly" : return 3;
        case "quarterly" : return 4;
        case "once" : return 5;
      }
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
      var color = getQuestColor(questCode);
      return `<div class="QL_questBox ${quest.period}" id='QL_questBox_${questCode}' style="background-color:${color}; color:${tinycolor(color).isLight() ? "#000000" : "#ffffff"};">
      <div class="cellDiv" style=" height:40px;  top:0px; left:0px; width: calc(100% - 40px); padding-right:40px; line-height:40px; overflow-y:hidden;">
      &nbsp;
      <input type="checkbox" class="QL_selected_checkbox" id="QL_selected_${questCode}">
      <b> ${questCode}</b>
      <span><img class="quest_state_icon" src="files/webpage/${ALL_QUEST_STATE[questCode]}.png"></span>
      <button type="button" class="QL_questBox_goToChart_btn" id='QL_goToChart_btn_${questCode}'>See on flowchart</button>
      <button type="button" class="QL_questBox_complete_btn" id='QL_complete_btn_${questCode}'>Set as completed</button>


      </div>
      <div class="cellDiv" style=" height:75px;  top:40px; left:0px; width:100%;"}">
      <div class="centeredContent">
      ${quest.Jp}
      <br>${quest.En}
      </div>
      </div>

      <div class="cellDiv" style="width:100%; height:123px;  top:115px; left:0px; position:relative;">

      <div class="centeredContent" style="padding:5px;">${addShipImageToContent(quest)}</div>
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

    // change the colors of a node on flowchart
    function updateNodeDisplay(node,fill, displayMode, period){
      node.findObject("SHAPE").fill = fill;
      node.findObject("SHAPE").stroke = COLORS[displayMode].border_color;
      node.findObject("SHAPE").strokeWidth =  COLORS[displayMode].border_width;
      node.findObject("TEXT").stroke = tinycolor(fill).isLight() ? "#000000" : "#ffffff";
    }

    // change the display of one quest everywhere depending on its state
    function updateQuestStateDisplay(quest){
      var questBox = $(`#QL_questBox_${quest}`);
      var state = ALL_QUEST_STATE[quest];
      questBox.removeClass("pending completed locked").addClass(state);
      questBox.find(".quest_state_icon").attr("src",`files/webpage/${state}.png`);
      if(state === 'pending'){
        $(`#QL_complete_btn_${quest}`).css('visibility', 'visible');
      } else {
        $(`#QL_complete_btn_${quest}`).css('visibility', 'hidden');
      }
      var icon = myDiagram.findNodeForKey(quest).findObject("STATE_ICON");
      icon.source = questStateCalculated ? `files/webpage/${ALL_QUEST_STATE[quest]}.png` : "files/webpage/undefined.png";
    }

    // display quest data in the footer
    function displayQuestData(questCode){
      var quest = ALL_QUESTS_LIST[questCode];
      var color = getQuestColor(questCode);
      $('#FC_FT .cellDiv').css('background', color).css('color',tinycolor(color).isLight() ? "#000000" : "#ffffff");
      $("#FC_FT_quest_info_state_icon").attr("src",`files/webpage/${questStateCalculated ? ALL_QUEST_STATE[questCode] : "undefined"}.png`);
      $('#FC_FT_quest_info_quest_code').text(questCode);
      $('#FC_FT_quest_info_name_Japanese').text(quest.Jp);
      $('#FC_FT_quest_info_name_English').text(quest.En);
      $('#FC_FT_quest_info_content').html(addShipImageToContent(quest));
      addShipNameHoveringEvents($('#FC_FT_quest_info_content'));
      $('#FC_FT_quest_info_ressources').html(`<span><img class="reward_icon" src="files/webpage/game_icons/Fuel.png"></span> &nbsp;${quest.ressources.F} / <span><img class="reward_icon" src="files/webpage/game_icons/Ammo.png"></span> &nbsp;${quest.ressources.A} / <span><img class="reward_icon" src="files/webpage/game_icons/Steel.png"></span> &nbsp;${quest.ressources.S} / <span><img class="reward_icon" src="files/webpage/game_icons/Bauxite.png"></span> &nbsp;${quest.ressources.B}`);
      $('#FC_FT_quest_info_reward').html(parseRewardObject(quest.reward));
      $('#FC_FT_quest_info_requires').html(((quest.requires.length !== 0) ? `Requires: ${quest.requires.join(", ")}` : ''));
      $('#FC_FT_quest_info_unlocks').html(((quest.unlocks.length !== 0) ? `Unlocks: ${quest.unlocks.join(", ")}` : ''));
      $("#FC_FT").find(".quest_tips").attr("id",`FC_quest_tips_${questCode}`)
      if(ALL_QUEST_STATE[questCode] === 'pending'){
        $(`#FC_FT_quest_info_complete_btn`).show();
      } else {
        $(`#FC_FT_quest_info_complete_btn`).hide();
      }
      removeRibbonFromDiv($("#FC_FT_ribbon_support"));
      if(ALL_QUESTS_LIST[questCode].period !== "once"){
        addRibbonToDiv($("#FC_FT_ribbon_support"),getRibbonColor(ALL_QUESTS_LIST[questCode].period), ALL_QUESTS_LIST[questCode].period);
      }
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

    function activateQuestBoxesEventListenners(){
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
          displayBubbleMessage(`Admiral, there is no tips for the quest ${quest}, sorry.` ,"shamed", "MSG_tips_quest",false, true, true);
        } else {
          tipsMsg = `Tips and avices for quest <b>${quest}</b>:<br>
          ${tipsMsg.replace(/※/g,"<br>●")}`;
          displayBubbleMessage(tipsMsg ,"explaining", "MSG_tips_quest",false, true, true);
        }

      });

      $(".QL_selected_checkbox").change(function(){
        var questBox = $(`#QL_questBox_${$(this).attr('id').split("_")[2]}`);
        if($(this).is(":checked")){
          questBox.css("border-width",COLORS.selected.border_width)
          .css("border-color",COLORS.selected.border_color)
          .css("margin",12 - COLORS.selected.border_width);
        } else {
          questBox.css("border-width",'3px').css("border-color",'black').css("margin",10);
        }
      });

      // on click set all the selected quests  as final quest in the flowchart (will also select the box where the button has been clicked)
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

    // return the color of the ribbon depending of period
    function getRibbonColor(period){
      switch (period) {
        case "once": return "#e6e600";
        case "daily": return "#e60000";
        case "weekly": return "#0052cc";
        case "monthly": return "#009900";
        case "quarterly": return "#ff471a";
      }
    }

    //return the quest's color
    function getQuestColor(quest){

      var questLetter = quest.charAt(0);
      return COLORS[questLetter];
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

      $("#QL_displayed_state").text(displayedState.length === 3 ? "All" : displayedState.join(", "));
      $("#QL_displayed_period").text(displayedPeriod.length === 5 ? "All" :
      displayedPeriod.length === 0 ? "None" : displayedPeriod.join(", "));
    }

    // change the size of the flowchart
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

      JqueryText.find(".ship_hover").hover(function(){
        var position = $(this).offset();
        position.top -= 70;
        var imageTag=`<div class="hovering_icon" style="position:absolute;z-index:200"><img src="files/webpage/ships/${$(this).attr("value")}.png"></span></div>`;
        $("body").append(imageTag).find(".hovering_icon").offset(position);
        $(this).css("text-decoration", "underline");
      },function(){
        $(".hovering_icon").remove();
        $(this).css("text-decoration", "");
      });
    }

    //show a message in a bubble speech on the top of bottom right Ooyodo and update the image
    function displayBubbleMessage(html, image, id, timeout, priority, oneTime, updateFunction){

      var popup = $(`<div class="bubble" data-timeout=${timeout} data-img="${image}" data-oneTime="${oneTime}" id="${id}" hidden>
      <div class="closeBtn" id="closeBtn_${id}">X</div>
      ${html}
      </div>`);
      // if existing messages with same id call the update function instead of doing a new message
      // if no update function, remove the popup and create the new popup
      // else create the popup
      if($(`#${id}`).length > 0){
        if (updateFunction){
          updateFunction();
        } else {
          $(`#${id}`).remove();
          if(priority){
            $('#BBL').prepend(popup);
          } else {
            $('#BBL').append(popup);
          }
        }
      } else {
        if(priority){
          $('#BBL').prepend(popup);
        } else {
          $('#BBL').append(popup);
        }
      }

      $(`#closeBtn_${id}`).click(function(){
        closeBubbleMessage($(`#${id}`));
      });

      var isOtherBubble = $(".bubble").length > 1;
      if ( (isOtherBubble && priority) || !isOtherBubble){
        // if priority, hide all other bubble
        if (priority){
          // if priority, delete the timeout for the previous bubbles
          $(`.bubble:visible[data-oneTime='true'][id!='${id}']`).remove();
          $(".bubble:visible").hide();
          clearTimeout(bubbleTimeout);
        }
        $(`#${id}`).show("fast",function(){$(document).trigger("bubble_displayed",[id]);});
        changeOoyodoImage(image);
        // if it's a timing out message and the message is displayed start time out
        if(timeout){
          clearTimeout(bubbleTimeout);
          bubbleTimeout = setTimeout(function(){
            //only close if displayed
            closeBubbleMessage($(`#${id}`));
          },20000);
        }
      }

    }

    // close the bubble and open the next one that is hidden, with a timer if required
    function closeBubbleMessage(idJQ){
      clearTimeout(bubbleTimeout);
      idJQ.remove();
      if($(".bubble:hidden").length > 0){
        var nextBubble = $(".bubble:hidden").first();
        nextBubble.show("fast");
        changeOoyodoImage(nextBubble.attr("data-img"));
        if (nextBubble.attr("data-timeout") === "true"){
          bubbleTimeout = setTimeout(function(){ closeBubbleMessage(nextBubble);},20000);
        }
      }
    }

    // change the display of Ooyodo
    function changeOoyodoImage(image){
      $("#Ooyodo").attr("src",`files/webpage/Ooyodo/${image}.png`);
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

    function removeDoublonFromArray(array){
      var output = [];
      array.forEach(elt => {
        if($.inArray(elt,output) === -1){
          output.push(elt);
        }
      });
      return output;
    }

    function getOneMsgRandom(messageList){
      return messageList[Math.floor(Math.random() * messageList.length)];
    }

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
        ,"smiling","MSG_reset_notification",true, false, true);
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

      if($(this).val() === "IPQ"){
        displayBubbleMessage(`<center><textarea id="MSG_IPQ_txt_area" rows="8" cols="22">A42,A65,B53,B62,F25,Bw1</textarea>
        <br>  Type <strong>ALL</strong> your pending quests code separated by commas.
        <br>
        <span id="MSG_IPQ_error_msg" style="color:red;"></span>
        <br>
        <button type="button" id='MSG_IPQ_btn_OK' style="width:40%;">OK</button>
        <button type="button" id='MSG_IPQ_btn_cancel' style="width:40%;">Cancel</button>
        </center>`
        ,"complete","MSG_IPQ",false, true, false);

        $('#MSG_IPQ_txt_area').focus();

        //cancel the input of pending quests
        $('#MSG_IPQ_btn_cancel').click(function () {
          closeBubbleMessage($(`#MSG_IPQ`));
        });

        // validate the input of pending quests
        $('#MSG_IPQ_btn_OK').click(function () {
          var inputedPendingQuests = questInputToArray($("#MSG_IPQ_txt_area").val());
          calculateQuestState(inputedPendingQuests);
        });
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

    // displqy only the remaining quests
    $('#FC_RM_remaining_btn').click(function () {
displayRemainingQuests();
    });

    //recenter the flowchart viewport
    $('#FC_RM_center_btn').click(function () {
      centerView();
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
        }).join(", ")).prop("disabled",true);
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




    //hide the button after clicking on it
    $(`#FC_FT_quest_info_complete_btn`).click(function(){
      $(this).hide();
    });




    // change the diagram size when the window size is changed
    $( window ).resize(function() {
      resizeWindow();
    });

    function resizeWindow(){
      resizeFlowchart( $(window).height() - 240 - 4, $(window).width() - 175 -20);
    }

    // a click on Ooyodo display a bubble with different interactions
    $(`#Ooyodo`).click(function(){
      displayBubbleMessage(`Yes Admiral, do you need something?<br>
        <button type="button" class="MSG_click_Ooyodo_btn" value="advice">What quests do you need me to do to complete my progression calculation?</button>
        <button type="button" class="MSG_click_Ooyodo_btn" value="reddit">I would like to make some feedback.</button>
        <button type="button" class="MSG_click_Ooyodo_btn" value="tutorial">Can you explain me again the application?</button>
        <button type="button" class="MSG_click_Ooyodo_btn" value="teasing">Just teasing you...</button>`,
        "welcome",`MSG_click_Ooyodo`,true,true,true
      );

      $(".MSG_click_Ooyodo_btn").click(function(){
        closeBubbleMessage($("#MSG_click_Ooyodo"));
        switch ($(this).val()){
          case "advice":{
            var blockingQuests = getBlockingPeriodicQuests(getBlockedQuests()).join(', ');
            if (!questStateCalculated){
              displayBubbleMessage(`Admiral... You didn't asked me to track your progression so I have no clue...`,
              "shamed",`MSG_click_Ooyodo_advice`,true,true,true );
            } else if (blockingQuests !== ""){
              displayBubbleMessage(`Oh yes, there are some periodic quests you still need to complete...<br>
                ${blockingQuests}<br>
                Please set each quest as completed when you have done it so I can finish your progress calculation.`,
                "explaining",`MSG_click_Ooyodo_advice`,true,true,true
              );
            } else {
              displayBubbleMessage(`You don't need to do anything. I've recorded everything from your progression.`,
              "complete",`MSG_click_Ooyodo_advice`,true,true,true );
            }
            break;
          }
          case "reddit":{
            displayBubbleMessage(`Thanks a lot, feedbacks are always welcomed!<br>
              <a href="TODO">Here is the link to the reddit thread.</a> <br>
              Just post in the comments.`,
              "welcome",`MSG_click_Ooyodo_reddit`,true,true,true );
              break;
            }
            case "teasing":{
              messageList = ["Admiral!! Really?? Do you have nothing better to do?",
              "Please focus on the mission..."];
              displayBubbleMessage(getOneMsgRandom(messageList),
              "bored",`MSG_click_Ooyodo_teasing`,true,true,true );
              break;
            }
            case "tutorial":{
              $(document).trigger("start_tutorial");
              break;
            }

          }
        });
      });

    });

    //create a cookie
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = `${cname}=${cvalue};${expires};path=/`;
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
          return JSON.stringify({progress:'{"p":{},"l":{}}', undeterminedQuests:[], timeStamp:moment().format()});
      } else {
        return "";
      }
    }
