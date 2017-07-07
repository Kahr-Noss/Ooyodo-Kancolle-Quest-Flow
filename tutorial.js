$(function () {

  var closeStep = function(){};

  $(document).on("start_tutorial", function(){
    closeStep();
    step_1_openningPanel();
  });


  function step_1_openningPanel(){
    var tutorial = $(`<div id="tuto" style="top:100px; left:100px">
    <div class="closeBtn" id="closeBtn_tuto">X</div>
    <img id="Ooyodo_tuto" src="files/webpage/Ooyodo.jpg" width="195px" height="195px">
    <div id="tuto_content"  style="display:inline-block; width:calc(100% - 200px)">
    <center><p id="tuto_text">
    Hello, welcome to the Ooyodo Quest Tracker admiral!
    I'll explain to you step by step how to use this application. Follow me!
    </p>
    <br>
    <button id="tuto_next" style="height:30px; width:80px;">Next =></button>
    </center>
    </div>
    </div>`);
    $("body").append(tutorial)
    $("#tuto").hide().show('slow');
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
    $("#tuto").show('slow');
    $("#tuto_text").html(`As you can see, I've already written the flowchart.
    It might have taken me some time, but there was a lot of data to write, sorry.
    <br>
    But right now, as you can see, the display is very messy and it's difficult to find
    the information you want.
    <br>
    Let's tidy it a bit by affecting a progression state to each quest among those three:<br>
    <div style="text-align:left">
    <span><img class="quest_state_icon" src="file/webpage/completed.png"></span> Completed: You have already cleared this quest.<br>
    <span><img class="quest_state_icon" src="file/webpage/pending.png"></span> Pending: This quest is waiting for completion, and is visible in your in-game quest menu.<br>
    <span><img class="quest_state_icon" src="file/webpage/locked.png"></span>Locked: This quest is unavailable because some of its required quests haven't been completed yet.
    </div>`);

    closeStep = function(){
      $("#tuto").hide();
      $("#tuto_next").remove();
    };

    $("#tuto_next").click(function(){
      closeStep();
      step_4_inputPendingQuests();
    });
  }

  function   step_4_inputPendingQuests(){
    $("#tuto").show('slow');
    $("#tuto_text").html(`Let's firstly input your pending quests, in other words the quests that are waiting to be
    completed in your in-game quest panel. You can easily find their code on the flowchart tab of KC3 viewer.
    <br><br>
    To input them, click on the button at the top right of the screen and type their code <b>separated by commas</b>.
    If there is any inconsistencies in what you input, I'll tell you.
    The case and spacing doesn't matter, I'll always be able to understand what you type, Admiral.
    <br><br>
    For this tutorial, let's input the following quests (you can copy/paste them): <br>
    //TODO      A29, A46, A65, A71, B12, B32, B44, Bd8, Bw7, D21, D23, F36, F42<br>
    Click on OK when you are done.`);
    drawSquareAroundElements([$(".HD_option_btn[value='IPQ']")]);

    closeStep = function(){
      $("#tuto").hide();
      $("#MSG_IPQ_btn_OK").off("click.tutorial_answer");
      $(".square").remove();
    };
    //TODO changer ca, le boutton est pas encore la quand on cree le event listenner
    $(document).on("bubble_displayed", function(e,bubble){
      if(bubble === "MSG_IPQ"){
        $(document).off("bubble_displayed");

        $("#MSG_IPQ_btn_OK").on("click.tutorial_answer", function(){
          var inputArray = $("#MSG_IPQ_txt_area").val().toUpperCase().replace(/\s/g, '').split(',').sort();
          if (inputArray[0] === "A29"
          && inputArray[1] === "A46"
          && inputArray[2] === "A65"
          && inputArray[3] === "A71"
          && inputArray[4] === "B12"
          && inputArray[5] === "B32"
          && inputArray[6] === "B44"
          && inputArray[7] === "BD8"
          && inputArray[8] === "BW7"
          && inputArray[9] === "D21"
          && inputArray[10] === "D23"
          && inputArray[11] === "F36"
          && inputArray[12] === "F42"){
            closeStep();
            step_4_2_UnknownQuests();
          } else {
            step_4_fail();
          }
        });
      }
    });
  }

  function step_4_fail(){
    $("#tuto").hide().show('slow');
    $("#tuto_text").html(`That's not what I told you!
    Please stay focused Admiral and type the following quests in the box:<br>
    A29, A46, A65, A71, B12, B32, B44, Bd8, Bw7, D21, D23, F36, F42<br>
    Click on OK when you are done.`);
  }

  function step_4_2_UnknownQuests(){

    $("#tuto").show('slow');
    $("#tuto_text").html(`Sometimes, just inputing your current quests isn't enough
    to know all your progression. In that case, I'll ask you to tell me if you completed
    or not some group of quests. I'll display them one by one on the flowchart and wait for your answer.<br>
    If you answer "I don't know", I'll consider that you didn't completed them yet. At the end I'll give
    you a list of quests to complete to clarify the state of those unknown quests.<br><br>
    For this tutorial your answers don't matter (it's not your real progression), so click whatever you want!`);
    drawSquareAroundElements([$("#MSG_ask_quest_state")]);

    closeStep = function(){
      $("#tuto").hide();
      $("#tuto").off("tutorial_answer");
      $(".square").remove();
    };

    $("#tuto").on("tutorial_answer", function(){
      closeStep();
      step_5_startingQuests();
    });
  }


  function step_5_startingQuests(){

    $("#tuto").show('slow');

    $("#tuto_text").html(`Perfect!<br>
      With all these information, I'm able to deduce your progression in the quest tree.
      Now, let's update the flochart by removing all the quests you have already completed.
      <br><br>
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
    //TODO
    $("#FC_RM_loading_btn").on("click.tutorial_answer", function(){
      var inputArray = $("#FC_RM_starting_quests").val().toUpperCase().replace(/\s/g, '').split(',').sort();
      console.log(inputArray);
      if (inputArray[0] === "A29"
      && inputArray[1] === "A46"
      && inputArray[2] === "A65"
      && inputArray[3] === "A71"
      && inputArray[4] === "B12"
      && inputArray[5] === "B32"
      && inputArray[6] === "B44"
      && inputArray[7] === "D21"
      && inputArray[8] === "D23"
      && inputArray[9] === "F36"
      && inputArray[10] === "F42"){
        closeStep();
        step_6_endingQuests();
      } else {
        step_5_fail();
      }
    });
  }

  function step_5_fail(){
    $("#tuto").hide().show('slow');
    $("#tuto_text").html(`That's not what I told you!<br>
    Please stay focused Admiral, check the first checkbox and uncheck the second one,
    then click on the "LOAD" button.`);
  }


  function step_6_endingQuests(){

    $("#tuto").show('slow');

    $("#tuto_text").html(`Good!<br>
      You can see that the fowchart's display just changed to show only the quests
      that you haven't completed yet, making it easier to see than earlier.
      <br>
      Let's be even more specific and precise which quests we want to unlock. Just type
      the quests in the "Ending quests" box to filter the result.<br>
      To make it easier, there is also a list of the most important quests chains that you can select among.
      <br><br>
      //TODO          Now select the quest chain "Catapult 2" that unlock the second Prototype Flight Deck Catapult`
    );
    drawSquareAroundElements([$("#FC_RM_ending_quests"),$("#FC_RM_select_preset_quests")]);

    closeStep = function(){
      $("#tuto").hide();
      $("#FC_RM_select_preset_quests").off("change.tutorial_answer");
      $(".square").remove();
    };

    $("#FC_RM_select_preset_quests").on("change.tutorial_answer", function(){

      if ($("#FC_RM_select_preset_quests").val() === "F23"){
        closeStep();
        step_7_selectingQuests();
      } else {
        step_6_fail();
      }
    });
  }

  function step_6_fail(){
    $("#tuto").hide().show('slow');
    $("#tuto_text").html(`Not this quest Admiral!
      //TODO          I told you to select the Catapult 2!`
    );
  }


  function step_7_selectingQuests(){

    $("#tuto").show('slow');

    $("#tuto_text").html(`Good!<br>
      Now it's way easier to check your progression admiral, but seeing only quests' code is a bit lacking.
      You can select a specific quest to display its information at the bottom of the screen.
      You can do it by clicking on the quest on the flowchart (double click will zoom on it),
      by selecting one of the quest in the list on the left, or by typing the quest's code in the textbox.<br>
      <br>
      //TODO        Let's try to select quest "A59".`
    );

    drawSquareAroundElements([$("#FC_FT_quest_list")]);

    closeStep = function(){
      //no hide because the event fire several time
      $('#FC_FT_quest_info_quest_code').off('DOMSubtreeModified');
      $(".square").remove();
    };

    $('#FC_FT_quest_info_quest_code').on('DOMSubtreeModified',function(){
      if ( $("#FC_FT_quest_info_quest_code").text() === "A59"){
        closeStep();
        step_8_QuestRequierments();
      } else {
        step_7_fail();
      }
    });
  }


  function step_7_fail(){

    $("#tuto").hide().show('slow');
    $("#tuto_text").html(`Not this quest Admiral!
      I told you to select the quest A59!`
    );

  }

  function step_8_QuestRequierments(){
    $("#tuto").hide().show('slow');

    $("#tuto_text").html(`OK!<br>
      All the information about this quest are now displayed. You can also hover your cursor on one
      of the flowcahrt's quest to see what you should do to complete it.<br>
      But here is something more interesting: on the right of the quest data, there is a requierments list.
      I wrote here all the stuff you need to obtain in order to complete the selected quest (ship, equipment, maps...)
      considering the quest currently displayed on the flowchart (that's why specifiying the starting quests is important).
      <br><br>

      You can also right click on multiple quests on the flowchart to add up all their requierments at the same time.<br>
      To unselect everything, just click on the flowchart background.`
    );

    drawSquareAroundElements([$("#FC_FT_quest_requirement")]);

    closeStep = function(){
      $("#tuto").hide();
      $("#tuto_next").remove();
      $(".square").remove();
    };

    $("#tuto_content").append($(`<button id="tuto_next" style="height:30px; width:80px;">Next =></button>`));
    $("#tuto_next").click(function(){
      closeStep();
      step_9_FlowchartOptions();
    });
  }


  function step_9_FlowchartOptions(){
    $("#tuto").show('slow');

    $("#tuto_text").html(`Admiral, you also have some options you can toggle to improve your utilization of this tool.<br>
      The "Highlight downward" option will show all quests needed to unlock the selected one.<br>
      The "Highlight upwrad" option will show all quests unlocked by the selected one.<br>
      The "Hide loots from previous quests" option will hide requiered elements that will be obtained in a previous quest in the requirement list.`
    );

    drawSquareAroundElements([$("#FC_RM_highlight_downward"), $("#FC_RM_highlight_upward"), $("#FC_FT_quest_requirement_hide_quest_rewards")]);

    closeStep = function(){
      $("#tuto").hide();
      $("#tuto_next").remove();
      $(".square").remove();
    };

    $("#tuto_content").append($(`<button id="tuto_next" style="height:30px; width:80px;">Next =></button>`));
    $("#tuto_next").click(function(){
      closeStep();
      step_10_openQuestList();
    });
  }


  function step_10_openQuestList(){
    $("#tuto").show('slow');


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
    $("#tuto").show('slow');

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

    $("#tuto").hide().show('slow');
    $("#tuto_text").html(`A...Admiral!<br>
      I asked you to choose me, not ${ $("#QL_RM_select_required_ship option:selected").text()}!!`
    );

  }

  function step_12_setQuestAsCompleted(){

    $("#tuto").show('slow');

    $("#tuto_text").html(`Do you see?<br>
      You will need me for those two quests...
      But don't scrap me after please!!<br>
      <br>
      By the way, you have just finiched quest A69 earlier. Let's update your data and set it as completed.
      Click on the button "Set quest as completed" for the A69 quest.`
    );

    drawSquareAroundElements([$("#QL_complete_btn_A65")]);

    closeStep = function(){
      $("#tuto").hide();
      $(".square").remove();
      $("#QL_complete_btn_A65").off("click.tutorial_answer");
    };

    $("#QL_complete_btn_A65").on("click.tutorial_answer", function(){
      closeStep();
      step_13_weeklyQuests();
    });
  }



  function step_13_weeklyQuests(){

    $("#tuto").show('slow');
    $("#tuto_text").html(`
      As you can see, the quest has been set to completed, and the next one, B57 is now pending like it should be in your game.
      <br>
      Ah... Admiral... I got a message from Akashi... We are getting low
      on screws and need to replenish our stocks doing some weekly and monthly quests. Let plan out our action.<br>
      <br>
      Choose the search mode "By quest period", then check only "Weekly" and "Monthly".`
    );

    drawSquareAroundElements([$("#QL_RM_select_search_method")]);
    $("#QL_RM_select_search_method option").filter(function () { return $(this).val() === "period"; }).css("background-color","red");

    closeStep = function(){
      $("#tuto").hide();
      $(".QL_RM_display_period").off("change.tutorial_answer");
      $("#QL_RM_select_search_method option").filter(function () { return $(this).val() === "period"; }).css("background-color","");
      $(".square").remove();
    };

    $(".QL_RM_display_period").on("change.tutorial_answer", function(){
      var checkBoxesSelected = [];
      $('.QL_RM_display_period').each(function() {
        if ($(this).is(":checked")) {
          checkBoxesSelected.push($(this).val());
        }
      });
      if (checkBoxesSelected.sort()[0] === "monthly" &&  checkBoxesSelected.sort()[1] === "weekly" && checkBoxesSelected.length === 2){
        closeStep();
        step_14_selectRewardScrews();
      }
    });
  }



  function step_14_selectRewardScrews(){
    $("#tuto").show('slow');

    $("#tuto_text").html(`OK! Only monthly and weekly quests will be displayed.<br>
      This research option along with the "By quest state" options are kept when using the others filters.<br>
      You can clear them by clicking on the reset button.<br>
      <br>
      Now let's show only the quests rewarding screws.<br>
      Choose the search mode "By reward", then click on the option "Consumable".<br>
      In the dropdown list choose "Improvement material"`
    );

    drawSquareAroundElements([$("#QL_RM_select_search_method")]);
    $("#QL_RM_select_search_method option").filter(function () { return $(this).val() === "reward"; }).css("background-color","red");
    $("#QL_RM_select_search_method, input[name=QL_RM_search_reward][value=C]").on("change.tutorial_answer", function(){
      $("#QL_RM_search_select_reward option").filter(function () { return $(this).text() === "Improvement material"; }).css("background-color","red");
    });


    closeStep = function(){
      $("#tuto").hide();
      $("#QL_RM_search_select_reward").off("change.tutorial_answer");
      $("#QL_RM_select_search_method option").filter(function () { return $(this).val() === "reward"; }).css("background-color","");
      $("#QL_RM_select_search_method,  input[name=QL_RM_search_reward][value=C]").off("change.tutorial_answer");
      $("#QL_RM_search_select_reward option").filter(function () { return $(this).text() === "Improvement material"; }).css("background-color","");

      $(".square").remove();
    };

    $("#QL_RM_search_select_reward").on("change.tutorial_answer", function(){

      if ($("#QL_RM_search_select_reward option:selected").text() === "Improvement material"){
        closeStep();
        step_15_selectQuests();
      } else {
        step_14_fail();
      }
    });
  }


  function step_14_fail(){

    $("#tuto").hide().show('slow');
    $("#tuto_text").html(`Admiral!<br>
      We need Improvement materials, <br>
      not ${  $("#QL_RM_search_select_reward option:selected").text()}!!<br>
      We need screws!!`
    );

  }

  function step_15_selectQuests(){
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

    $("#tuto").show('slow');

    $("#tuto_text").html(`Perfect Admiral!<br>
      This concludes the tutorial for this tool,
      I hope you will make good use of it!<br>
      I recommend you to start by inputing right now your own pending quests.
      I'll stay in the bottom right corner, so click on me if you need any help!`);

      closeStep = function(){};

      $("#tuto_content").append($(`<button id="tuto_end" style="height:30px; width:80px;">Close</button>`));
      $("#tuto_end").click(function(){
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

  });
