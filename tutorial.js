$(function () {

  var closeStep = function(){};

  $(document).on("start_tutorial", function(){
    closeStep();
    step_1_openningPanel();
  });

  $(document).on("start_new_functions", function(){
    closeStep();
    newFunctions_1();
  });


  function step_1_openningPanel(){
    $("#tuto").remove();
    var tutorial = $(`<div id="tuto" hidden>
    <div id="closeBtn_tuto">X</div>
    <img id="Ooyodo_tuto" src="files/webpage/Ooyodo/welcome.png">
    <div id="tuto_content"  style="display:inline-block;">
    <p id="tuto_text" style="padding:15px; margin-left:200px;">
    Hello, welcome to the Ooyodo Quest Tracker admiral!
    I'll explain to you step by step how to use this application. Follow me!
    </p>
    <center>
    <button id="tuto_next" style="height:30px; width:80px;">Next =></button>
    </center>
    </div>
    </div>`);
    $("body").append(tutorial);
    $("#tuto").width(400).offset({top:100,left:($(window).width() - 400)/2});

    $("#tuto").show('slow');
    closeStep = function(){
      $("#tuto").hide();
      $("#tuto_next").off("click");
    };

    $("#closeBtn_tuto").click(function(){
      closeStep();
      $("#tuto").remove();
    });
    $("#tuto_next").click(function(){
      closeStep();
      step_2_acceptCookies();
    });


  }

  function step_2_acceptCookies(){


    $("#tuto").width(600).css("left",`${($(window).width() - 600)/2}px`);
    $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/smiling.png`);
    $("#tuto").show('slow');
    $("#tuto_text").html(`This tracker offer an interactive flowchart with all the quests available in the game.
      There are filters to adapt the content displayed to your needs.
      <br> If you want, I can also calculate your current progression and recording it in your browser's cookies,
      so next time you come your current progress will still be there.`
    );

    closeStep = function(){
      $("#tuto").hide();
      $("#tuto_next").off("click");
    };

    $("#tuto_next").click(function(){
      closeStep();
      step_3_flowchartPresentation();
    });
  }


  function step_3_flowchartPresentation(){

    $("#tuto").width(600).css("left",`${($(window).width() - 600)/2}px`);
    $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/explaining.png`);
    $("#tuto").show('slow');

    $("#tuto_text").html(`As you can see, I've already written the flowchart.
    It might have taken me some time, but there was a lot of data to write, sorry.
    <br>
    But right now, as you can see, the display is very messy and it's difficult to find
    the information you want.
    <br>
    Let's tidy it a bit by affecting a progression state to each quest among those three:<br>
    <hr>
    <div style="text-align:left">
    <div><span><img class="quest_state_icon" src="files/webpage/completed.png" style="float:left;"></span><br><span> &nbsp;<b>Completed:</b> You have already cleared this quest.</span></div><hr>
    <div><span><img class="quest_state_icon" src="files/webpage/pending.png" style="float:left;"></span><span> &nbsp;<b>Pending:</b> This quest is waiting for completion, and is visible in your in-game quest menu.</span></div><hr>
    <div><span><img class="quest_state_icon" src="files/webpage/locked.png" style="float:left;"></span><span> &nbsp;<b>Locked:</b> This quest is unavailable because some of its required quests haven't been completed yet.</span></div>
    <hr>
    </div>`);

    closeStep = function(){
      $("#tuto").hide();
      $("#tuto_next").off("click").hide();
    };

    $("#tuto_next").click(function(){
      closeStep();
      step_4_inputPendingQuests();
    });
  }

  function   step_4_inputPendingQuests(){
    $("#tuto").width(500).css("left","50px");
    $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/complete.png`);
    $("#tuto").show('slow');
    $("#tuto_text").html(`Let's firstly input your pending quests, in other words the quests that are waiting to be
    completed in your in-game quest panel. You can easily find their code on the flowchart tab of KC3 viewer.
    <br><br>
    To input them, click on the button at the top right of the screen and type their code <b>separated by commas</b>.
    If there is any inconsistencies in what you input, I'll tell you.
    The case and spacing doesn't matter, I'll always be able to understand what you type, Admiral.
    <br><br>
    For this tutorial, let's input the following quests (you can copy/paste them): <br>
    A42, A65, B53, B62, F25, Bw1<br>
    Click on OK when you are done.`);
    drawSquareAroundElements([$(".HD_option_btn[value='IPQ']")]);

    closeStep = function(){
      $("#tuto").hide();
      $("#MSG_IPQ_btn_OK").off("click.tutorial_answer");
      $(".square").remove();
    };

    $(document).on("bubble_displayed", function(e,bubble){
      if(bubble === "MSG_IPQ"){
        $(document).off("bubble_displayed");

        $("#MSG_IPQ_btn_OK").on("click.tutorial_answer", function(){
          closeStep();
          step_4_2_UnknownQuests();
        });
      }
    });
  }

  function step_4_fail(){
    $("#tuto").hide().show('slow');
    $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/bored.png`);
    $("#tuto_text").html(`That's not what I told you!
    Please stay focused Admiral and type the following quests in the box:<br>
    A42, A65, B53, B62, F25, Bw1<br>
    Click on OK when you are done.`);
  }

  function step_4_2_UnknownQuests(){
    $("#tuto").css("max-width","1000px").css("width","").css("top","").css("left","0px").css("bottom","0px").css("height","195px");
    $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/explaining.png`);
    $("#tuto").show('slow');
    $("#tuto_text").html(`Sometimes, just inputing your current quests isn't enough
    to know all your progression. In that case, I'll ask you to tell me if you completed
    or not some group of quests. I'll display them one by one on the flowchart and wait for your answer.<br>
    If you answer "I don't know", I'll consider that you didn't completed them yet. At the end I'll give
    you a list of quests to complete to clarify the state of those unknown quests.<br><br>
    For this tutorial your answers don't matter (it's not your real progression), so click whatever you want!`);
    $(document).on("bubble_displayed", function(e,bubble){
      if(bubble === "MSG_ask_quest_state"){
        $(document).off("bubble_displayed");
        drawSquareAroundElements([$("#MSG_ask_quest_state")]);
      }
    });

    closeStep = function(){
      $("#tuto").hide();
      $("#tuto").off("tutorial_answer");
      $(".square").remove();
    };

    $("#tuto").on("tutorial_answer", function(){
      if ($("#FC_RM_starting_quests").val() === "A42, A65, B53, B62, F25, Bw1"){
        closeStep();
        step_5_startingQuests();
      } else {
        step_4_fail();
      }

    });
  }


  function step_5_startingQuests(){
    $("#tuto").css("max-width","");
    $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/writing.png`);
    $("#tuto").show('slow');

    $("#tuto_text").html(`Perfect! With all these information, I'm able to deduce your progression in the quest tree.
    Now, let's update the flochart by removing all the quests you have already completed.
    <br>
    You can type from which quest you want the flowchart to start with in the "starting quests"
    box. As usual, separate the quests by commas. You can check the box "Use pending quests as starter"
    to fill it automatically with the pending quests you have already entered. If you want to ignore your
    currently pending periodic quests for starters, uncheck the box "Include periodic quests" to also display the periodic quests on the flowchart.<br>
    If you don't want to specify any specific starting quests and see all the quests from the beginning,
    just leave it blank.
    <br><br>
    For the tutorial, let's input the same quests as before by checking the "Use pending quests" and uncheck "Include periodic quests",  then click on the "LOAD" button.`
  );
  drawSquareAroundElements([$("#FC_RM_starting_quests")]);
  drawSquareAroundElements([$("#FC_RM_use_pending_quests"),$("#FC_RM_use_periodic_quests")]);
  drawSquareAroundElements([$("#FC_RM_loading_btn")]);

  closeStep = function(){
    $("#tuto").hide();
    $("#FC_RM_loading_btn").off("click.tutorial_answer");
    $(".square").remove();
  };

  $("#FC_RM_loading_btn").on("click.tutorial_answer", function(){
    if ($("#FC_RM_starting_quests").val() === "A42, A65, B53, B62"){
      closeStep();
      step_6_endingQuests();
    } else {
      step_5_fail();
    }
  });
}

function step_5_fail(){
  $("#tuto").hide().show('slow');
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/bored.png`);
  $("#tuto_text").html(`That's not what I told you!<br>
  Please stay focused Admiral, check the first checkbox and uncheck the second one,
  then click on the "LOAD" button.`);
}


function step_6_endingQuests(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/smiling.png`);
  $("#tuto").show('slow');

  $("#tuto_text").html(`Good!<br>
    You can see that the flowchart's display just changed to show only the quests
    that you haven't completed yet, making it easier to see than earlier.
    <br>
    Let's be even more specific and precise which quests we want to unlock. Just type
    the quests in the "Ending quests" box to filter the result.<br>
    To make it easier, there is also a list of the most important quests chains that you can select among.
    <br><br>
    Now select the quest chain "Jets" that rewards the jet planes.`
  );
  drawSquareAroundElements([$("#FC_RM_ending_quests"),$("#FC_RM_select_preset_quests")]);

  closeStep = function(){
    $("#tuto").hide();
    $("#FC_RM_select_preset_quests").off("change.tutorial_answer");
    $(".square").remove();
  };

  $("#FC_RM_select_preset_quests").on("change.tutorial_answer", function(){

    if ($("#FC_RM_ending_quests").val() === "F45, F46"){
      closeStep();
      step_7_selectingQuests();
    } else {
      step_6_fail();
    }
  });
}

function step_6_fail(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/bored.png`);
  $("#tuto").hide().show('slow');
  $("#tuto_text").html(`Not this quest Admiral!
    I told you to select Jet questline!!`
  );
}


function step_7_selectingQuests(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/explaining.png`);
  $("#tuto").css("left","120px");

  $("#tuto").show('slow');

  $("#tuto_text").html(`Good! Now it's way easier to check your progression admiral, but seeing only quests' code is a bit lacking.
  You can select a specific quest to display its information at the bottom of the screen.
  You can do it by clicking on the quest on the flowchart (double click will zoom on it),
  by selecting one of the quest in the list on the left, or by typing the quest's code in the textbox.<br>
  <br>
  Let's try to select quest "A62".`
);

drawSquareAroundElements([$("#FC_FT_quest_list")]);

closeStep = function(){
  //no hide because the event fire several time
  $('#FC_FT_quest_info_quest_code').off('DOMSubtreeModified');
  $(".square").remove();
};

$('#FC_FT_quest_info_quest_code').on('DOMSubtreeModified',function(){

  if ( $("#FC_FT_quest_info_quest_code").text() === "A62"){
    closeStep();
    step_8_QuestRequierments();
  } else if($("#FC_FT_quest_info_quest_code").text() !== ""){
    step_7_fail();
  }
});
}


function step_7_fail(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/bored.png`);
  $("#tuto").hide().show('slow');
  $("#tuto_text").html(`Not this quest Admiral!
    I told you to select the quest A62!`
  );

}

function step_8_QuestRequierments(){
  $("#tuto").remove();
  var tutorial = $(`<div id="tuto" hidden>
  <div class="closeBtn" id="closeBtn_tuto">X</div>
  <img id="Ooyodo_tuto" src="files/webpage/Ooyodo/welcome.png">
  <div id="tuto_content"  style="display:inline-block;">
  <p id="tuto_text" style="padding:15px; margin-left:200px;">
  OK! All the information about this quest are now displayed. You can also hover your cursor on one
  of the flowcahrt's quest to see what you should do to complete it.<br>
  But here is something more interesting: on the right of the quest data, there is a requierments list.
  I wrote here all the stuff you need to obtain in order to complete the selected quest (ship, equipment, maps...)
  considering the quest currently displayed on the flowchart (that's why specifiying the starting quests is important).
  <br><br>

  You can also right click on multiple quests on the flowchart to add up all their requierments at the same time.<br>
  To unselect everything, just click on the flowchart background.
  </p>
  <center>
  <button id="tuto_next" style="height:30px; width:80px;">Next =></button>
  </center>
  </div>
  </div>`);
  $("body").append(tutorial);
  $("#tuto").width(600).offset({top:150,left:($(window).width() - 600)/2});

  $("#tuto").show('slow');
  closeStep = function(){
    $("#tuto").hide();
    $("#tuto_next").off("click");
  };

  $("#closeBtn_tuto").click(function(){
    closeStep();
    $("#tuto").remove();
  });

  drawSquareAroundElements([$("#FC_FT_quest_requirement")]);

  closeStep = function(){
    $("#tuto").hide();
    $("#tuto_next").off("click");
    $(".square").remove();
  };

  $("#tuto_next").click(function(){
    closeStep();
    step_9_FlowchartOptions();
  });
}


function step_9_FlowchartOptions(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/explaining.png`);
  $("#tuto").show('slow');

  $("#tuto_text").html(`Admiral, you also have some options you can toggle to improve your utilization of this tool.<br>
    The "Highlight downward" option will show all quests needed to unlock the selected one.<br>
    The "Highlight upwrad" option will show all quests unlocked by the selected one.<br>
    The "Hide loots from previous quests" option will hide requiered elements that will be obtained in a previous quest in the requirement list.`
  );

  drawSquareAroundElements([$("#FC_RM_highlight_downward"), $("#FC_RM_highlight_upward"), $("#FC_FT_quest_requirement_hide_quest_rewards")]);

  closeStep = function(){
    $("#tuto").hide();
    $("#tuto_next").off("click").hide();
    $(".square").remove();
  };

  $("#tuto_next").click(function(){
    closeStep();
    step_10_openQuestList();
  });
}


function step_10_openQuestList(){
  $("#tuto").show('slow');
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/complete.png`);

  $("#tuto_text").html(`That's it for the flowchart use.
  Now let me explain about the quest research function.<br>
  <br>
  Click on the "Quest list" button at the top to switch to this tool.`);

  drawSquareAroundElements([$(".HD_main_tab_btn[value='QL']")]);

  closeStep = function(){
    $("#tuto").hide();
    $(".HD_main_tab_btn[value='QL']").off("click.tutorial_answer");
    $(".square").remove();
  };

  $(".HD_main_tab_btn[value='QL']").on("click.tutorial_answer", function(){
    closeStep();
    step_11_shipRequired();
  });
}

function step_11_shipRequired(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/smiling.png`);
  $("#tuto").show('slow');
  $("#tuto").css("right",'200px').css("left","");

  $("#tuto_text").html(`Here is a full list of all the quests in the game.
    On the right there is a search menu that will help you to find what you need using different filters.<br>
    <br>
    For example let's search in which quests I'm required...<br>
    <br>
    Select the reserch mode "By ship required" and then choose "Ooyodo".`
  );

  drawSquareAroundElements([$("#QL_RM_select_search_method")]);
  $("#QL_RM_select_search_method option").filter(function () { return $(this).val() === "ship_required"; }).css("background-color","red");
  $("#QL_RM_select_required_ship option").filter(function () { return $(this).text() === "Ooyodo"; }).css("background-color","red");
  closeStep = function(){
    $("#tuto").hide();
    $("#QL_RM_select_required_ship option").filter(function () { return $(this).text() === "Ooyodo"; }).css("background-color","");
    $("#QL_RM_select_search_method option").filter(function () { return $(this).val() === "ship_required"; }).css("background-color","");
    $("#QL_RM_select_required_ship").off("change.tutorial_answer");
    $(".square").remove();
  };

  $("#QL_RM_select_required_ship").on("change.tutorial_answer", function(){
    if ( $("#QL_RM_select_required_ship option:selected").text() === "Ooyodo"){
      closeStep();
      step_12_setQuestAsCompleted();
    } else {
      step_11_fail();
    }
  });

}

function step_11_fail(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/shamed.png`);
  $("#tuto").hide().show('slow');
  $("#tuto_text").html(`A...Admiral!<br>
    I asked you to choose me, not ${ $("#QL_RM_select_required_ship option:selected").text()}!!`
  );

}

function step_12_setQuestAsCompleted(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/complete.png`);
  $("#tuto").css("right",'200px').css("left","150px").css("bottom","0px").css("top","");
  $("#tuto").show('slow');

  $("#tuto_text").html(`Do you see?<br>
    You will need me for those two quests...
    But don't scrap me after please!!<br>
    <br>
    By the way, you have just finiched quest A69 earlier. Let's update your data and set it as completed.
    Click on the button "Set as..." for the A69 quest, then choose "completed" on the bubble message that appears.
    I will then ask you if you want to change the state of all linked quests regardless of their period, or if I should
    just update the bare minimum of related quests.
    <br>For example if you completed a monthly quest that required a daily quest completion beforehand yesterday and you
    only updated it today, selecting "update everything" will also put the daily quest as completed whereas the minimum will leave the daily quest uncompleted.`
  );

  drawSquareAroundElements([$("#QL_set_as_A65")]);

  closeStep = function(){
    $("#tuto").hide();
    $(".square").remove();
    $("#tuto").off("tutorial_answer");
  };

  $("#tuto").on("tutorial_answer", function(){
    closeStep();
    step_13_uncompletedQuest();
  });
}



function step_13_uncompletedQuest(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/welcome.png`);
  $("#tuto").show('slow');
  $("#tuto_text").html(`
    As you can see, the quest has been set to completed, and the next one, B57 is now pending like it should be in your game.
    <br>
    Ah... Admiral... I got a message from Akashi... We are getting low
    on screws and need to replenish our stocks. Let's plan out our action.<br>
    <br>
    Choose the search mode "By state / period", then click on "Uncompleted".`
  );

  drawSquareAroundElements([$("#QL_RM_select_search_method")]);
  $("#QL_RM_select_search_method option").filter(function () { return $(this).val() === "filter"; }).css("background-color","red");

  closeStep = function(){
    $("#tuto").hide();
    $("input[type=radio][name=QL_RM_display_state]").off("change.tutorial_answer");
    $("#QL_RM_select_search_method option").filter(function () { return $(this).val() === "filter"; }).css("background-color","");
    $(".square").remove();
  };

  $("input[type=radio][name=QL_RM_display_state]").on("change.tutorial_answer", function(){
    if ($(this).val() === '{"state":["pending","locked"]}'){
      closeStep();
      step_14_selectRewardScrews();
    }
  });
}



function step_14_selectRewardScrews(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/explaining.png`);
  $("#tuto").show('slow');

  $("#tuto_text").html(`OK! Only pending and locked quests will be displayed.<br>
    This research option along with the period options are kept when using the others filters.<br>
    You can clear them by clicking on the reset button.<br>
    <br>
    Now let's show only the quests rewarding screws.<br>
    Choose the search mode "By reward", then click on the option "Consumable".<br>
    In the dropdown list choose "Improvement Material"`
  );

  drawSquareAroundElements([$("#QL_RM_select_search_method")]);
  $("#QL_RM_select_search_method option").filter(function () { return $(this).val() === "reward"; }).css("background-color","red");
  $("#QL_RM_select_search_method, input[name=QL_RM_search_reward][value=C]").on("change.tutorial_answer", function(){
    $("#QL_RM_search_select_reward option").filter(function () { return $(this).text() === "Improvement Material"; }).css("background-color","red");
  });


  closeStep = function(){
    $("#tuto").hide();
    $("#QL_RM_search_select_reward").off("change.tutorial_answer");
    $("#QL_RM_select_search_method option").filter(function () { return $(this).val() === "reward"; }).css("background-color","");
    $("#QL_RM_select_search_method,  input[name=QL_RM_search_reward][value=C]").off("change.tutorial_answer");
    $("#QL_RM_search_select_reward option").filter(function () { return $(this).text() === "Improvement Material"; }).css("background-color","");

    $(".square").remove();
  };

  $("#QL_RM_search_select_reward").on("change.tutorial_answer", function(){

    if ($("#QL_RM_search_select_reward option:selected").text() === "Improvement Material"){
      closeStep();
      step_15_selectQuests();
    } else {
      step_14_fail();
    }
  });
}


function step_14_fail(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/bored.png`);
  $("#tuto").hide().show('slow');
  $("#tuto_text").html(`Admiral!<br>
    We need Improvement materials, <br>
    not ${  $("#QL_RM_search_select_reward option:selected").text()}!!<br>
    We need screws!!`
  );

}

function step_15_selectQuests(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/smiling.png`);
  $("#tuto").show('slow');

  $("#tuto_text").html(`That's it!<br>
  Now check the boxes of the quest you want to display in the flowchart to select them,
  and click on the "See on flowchart" button.`);

  closeStep = function(){
    $("#tuto").hide();
    $(".QL_questBox_goToChart_btn").off("dblclick.tutorial_answer");
    $(".square").remove();
  };

  $(".QL_questBox_goToChart_btn").on("click.tutorial_answer", function(){
    closeStep();
    step_16_EndOfTutorial();
  });
}


function step_16_EndOfTutorial(){
  $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/complete.png`);
  $("#tuto").show('slow');

  $("#tuto_text").html(`Perfect Admiral!<br>
    This concludes the tutorial for this tool,
    I hope you will make good use of it!<br>
    I recommend you to start by inputing right now your own pending quests.
    I'll stay in the bottom right corner, so click on me if you need any help!`);

    closeStep = function(){};

    $("#tuto_next").text("Close").show();
    $("#tuto_next").click(function(){
      $("#tuto").remove();
    });
  }




  function drawSquareAroundElements(elements){
    var width = 0 ;
    var height = 0 ;
    var top = Infinity;
    var left = Infinity;
    // find the more top left elements
    elements.forEach(element =>{
      top = Math.min(Math.round(element.offset().top -12),top);
      left =  Math.min(Math.round(element.offset().left -12),left);
    });
    elements.forEach(element =>{
      width = Math.max(Math.round(element.outerWidth() + element.offset().left), width + left) - left ;
      height = Math.max(Math.round(element.outerHeight() + element.offset().top), height + top ) - top ;
    });

    var square = $(`<div class="square" style="
    top:${top}px;
    left:${left}px;
    width:${width}px;
    height:${height}px;">
    </div>`);
    $("body").append(square);
  }




  function newFunctions_1(){
    $("#tuto").remove();
    var tutorial = $(`<div id="NF_guide" hidden>
    <div id="closeBtn_tuto">X</div>
    <img id="Ooyodo_tuto" src="files/webpage/Ooyodo/welcome.png">
    <div id="tuto_content"  style="display:inline-block;">
    <p id="tuto_text" style="padding:15px; margin-left:200px;">
    Welcome Admiral to this new version of the application.
    Thanks to a lot of feedbacks, we have been able to improve the user experience of this tool.
    There were some improvements on the way the flochart is displayed (colors and quests' period display),
    but more importamtly addition of new functionalities.
    <br>I will show them to you right now, let's go!
    </p>
    <center>
    <button id="tuto_next" style="height:30px; width:80px;">Next =></button>
    </center>
    </div>
    </div>`);
    $("body").append(tutorial);
    $("#NF_guide").width(600).offset({top:100,left:($(window).width() - 600)/2});

    $("#NF_guide").show('slow');
    closeStep = function(){
      $("#NF_guide").hide();
      $("#tuto_next").off("click");
    };

    $("#closeBtn_tuto").click(function(){
      closeStep();
      $("#NF_guide").remove();
    });
    $("#tuto_next").click(function(){
      closeStep();
      newFunctions_2_Hide_Footer();
    });
  }

  function newFunctions_2_Hide_Footer(){

    $("#QL").hide();
    $("#FC").show('fast');

      $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/smiling.png`);
    $("#NF_guide").show('slow');
    $("#tuto_text").html(`First, when using the flowchart, you can hide the footer panel to make the chart bigger.
      You only have to click on this button.`
    );

    drawSquareAroundElements([$("#FT_showHide")]);

    closeStep = function(){
      $("#NF_guide").hide();
      $("#tuto_next").off("click");
      $(".square").remove();
    };

    $("#tuto_next").click(function(){
      closeStep();
      newFunctions_3_Quest_Link();
    });
  }


  function newFunctions_3_Quest_Link(){
    $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/smiling.png`);
    $("#NF_guide").show('slow');
    $("#tuto_text").html(`Now, you can click on quests in the requirements / unlocks section of a quest description (or in a bubble)
    to display it and the closest quest linked to it on the flochart, or show its card on the Quest List pannel.
    <br> Try it out!`  );

    closeStep = function(){
      $("#NF_guide").hide();
      $("#tuto_next").off("click");
    };

    $("#tuto_next").click(function(){
      closeStep();
      newFunctions_4_Set_As();
    });
  }

  function newFunctions_4_Set_As(){
    $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/smiling.png`);
    $("#NF_guide").show('slow');
    $("#tuto_text").html(`Before to update your progression, your only option was to set your pending quests as completed.
      It was impossible to cancel a change, and if was bothersome to do multiple time this procedure when updating a lot of quests.
      <br>
      <br>Now, all the quests regardless of hteir state have a "Set as" button that allows you to set them as pending or completed.
      (but not locked, in that case, just put one of its required quest as pending and it will do the trick.)
      <br>This function will update the state of all the quests linked to this quest.
      <br>Completed all your dailies? Set Bd8 as completed and all the previous daily sortie quests will also be set as completed!`
    );

    closeStep = function(){
      $("#NF_guide").hide();
      $("#tuto_next").off("click");
    };

    $("#tuto_next").click(function(){
      closeStep();
      newFunctions_5_Search_filter();
    });
  }

  function newFunctions_5_Search_filter(){

    $("#FC").hide();
    $("#QL").show('fast');
    $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/smiling.png`);
    $("#NF_guide").show('slow');
    $("#tuto_text").html(`A new serch filter has been added to the Quest List mode.
      <br> You can now filter the quest by the equipment required to complete it, useful to know if you can scrap it or not.`
    );

    drawSquareAroundElements([$("#QL_RM_select_search_method")]);
    $("#QL_RM_select_search_method option").filter(function () { return $(this).val() === "equipment_required"; }).css("background-color","red");

    closeStep = function(){
      $("#NF_guide").hide();
      $("#QL_RM_select_search_method option").filter(function () { return $(this).val() === "equipment_required"; }).css("background-color","");
      $("#tuto_next").off("click");
      $(".square").remove();
    };

    $("#tuto_next").click(function(){
      closeStep();
      newFunctions_6_Bookmark();
    });
  }

  function newFunctions_6_Bookmark(){

    $("#Ooyodo_tuto").attr("src",`files/webpage/Ooyodo/smiling.png`);
    $("#NF_guide").show('slow');
    $("#tuto_text").html(`And we arrive at the last function, Bookmarking!
      <br>Tired of always doing the same process to find the quest you are focusing on?
      <br>It is now possible to bookmark quests to have fast access to them everytime you connect.
      Just click on the bookmark to save or remove them from your favorite.
      TODO put images.
      <br>Like your progression, these will be stored in your browser's cookies, and since the size is limited, don't bookmark everything...
      <br><br>
      This is all for the new functions, I hope they will make your experience better!`
    );
      $("#tuto_next").text("END");

    closeStep = function(){
      $("#NF_guide").hide();
      $("#tuto_next").off("click");
    $("#NF_guide").remove();
      closeStep = function(){};
    };

    $("#tuto_next").click(function(){
      closeStep();
    });
  }


});
