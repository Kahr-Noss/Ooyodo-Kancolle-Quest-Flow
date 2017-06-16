$(function () {

  if (getCookie("pending_quests") === ""){
    step_1_openningPanel();
  }

  function step_1_openningPanel(){
    var tutorial = $(`<div id="tuto" style="top:100px; left:100px">
    <img src="files/webpage/Ooyodo.jpg">
    <div id="tuto_content"  style="display:inline-block; height:100%">
    <center><span id="tuto_text">
    Hello, it seems that's the first time you come here!
    <br>
    Do you want to follow the tutorial?
    </span>
    <br>
    <button id="tuto_no" style="height:30px; width:80px;">No</button>
    <button id="tuto_yes" style="height:30px; width:80px;">Yes!</button>
    </center>
    </div>
    </div>`);
    $("body").append(tutorial);
    $("#tuto_no").click(function(){
      $("#tuto").remove();
    });
    $("#tuto_yes").click(function(){
      step_2_acceptCookies();
    });
  }

  function step_2_acceptCookies(){
    $("#tuto_text").html(`If you want me to remember your quest progression and your settings,<br>
      you have to allow me to use cookies for this website.<br>
      Is that OK with you?`);
      $("#tuto_yes, tuto_no").off("click");
      $("#tuto_no").click(function(){
        step_3_flowchartPresentation();
      });
      $("#tuto_yes").click(function(){
        setCookie('acceptCookies', 'true', 365);
        step_3_flowchartPresentation();
      });
    }

    function step_3_flowchartPresentation(){
      $("#tuto_text").html(`As you can see, I've already written the flowchart.<br>
      It might have taken me some time, but there was a lot of data to write.<br>
      <br>
      But right now the display is very messy and it's difficult to find<br>
      the information you want.<br>
      Let's tidy it a bit!`);
      $("#tuto_yes, #tuto_no").remove();
      $("#tuto_content").append($(`<button id="tuto_next" style="height:30px; width:80px;">Next =></button>`));
      $("#tuto_next").click(function(){
        step_4_inputPendingQuests();
      });
    }

    function   step_4_inputPendingQuests(){
      $("#tuto_text").html(`Let's firstly input your pending quests, in other words<br>
      the quests that are waiting to be completed in your<br>
      in-game quest panel. You can easily find their code on the<br>
      flowchart tab of KC3 viewer.<br>
      <br>
      To input them, click on this button and type their code <b>separated by commas</b>.<br>
      You only need to input the one-time quests, and not the periodic ones (daily, weekly...).<br>
      If there is any inconsistencies in what you input, I'll tell you.<br>
      The case and spacing doesn't matter, I'll always be able to understand what you type, Admiral.<br>
      <br>
      For this tutorial, let's input the following quests (you can copy/paste them): <br>
      A29, A46, A65, A71, B12, B32, B44, Bd8, Bw7, D21, D23, F36, F42<br>
      Click on OK when you are done.`);
      drawSquareAroundElement($(".HD_option_btn[value='IPQ']"));
      $("#tuto_next").remove();
      $("#IPQ_btn_OK").bind("click.tutorial_answer", function(){
        var inputArray = $("#IPQ_txt_area").val().toUpperCase().replace(/\s/g, '').split(',').sort();

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
          step_4_2_UnknownQuests();
        } else {
          step_4_fail();
        }
      });
    }

    function step_4_fail(){
      $("#tuto_text").html(`That's not what I told you!<br>
      Please stay focused Admiral and type the following quests in the box:<br>
      A22, A29, A31<br>
      Click on OK when you are done.`);
    }

    function step_4_2_UnknownQuests(){
      $("#IPQ_btn_OK").unbind("click.tutorial_answer");
      $(".square").remove();
      $("#tuto_text").html(`Sometimes, just inputing your current quests isn't enough<br>
      to know all your progression. In that case, I'll ask you to tell me if you completed<br>
      or not some group of quests. I'll display them one by one on the flowchart and wait for your answer.<br>
      If you answer "I don't know", I'll consider that you completed them, and at the end I'll give<br>
      you a list of quests to complete to before reinputing your pending quests.<br>
      For this tutorial your answers don't matter (it's not your real progression), so click whatever you want!`);
        drawSquareAroundElement($("#MSG_ask_quest_state"));
//TODO
/*        $("#FC_RM_loading_btn").bind("click.tutorial_answer", function(){
step_5_startingQuests();
        });*/
      }

    function step_5_startingQuests(){
      //TODO
      $("#IPQ_btn_OK").unbind("click.tutorial_answer");
      $(".square").remove();
      $("#tuto_text").html(`Perfect!<br>
        With all these information, I'm able to deduce your progression in the quest tree.<br>
        Now, let's update the flochart by removing all the quests you have already completed.<br>
        <br>
        You can type from which quest you want the flowchart to start with in the "starting quests"<br>
        box. As usual, separate the quests by commas. You can check the box "Use pending quests as starter"<br>
        to fill it automatically with the pending quests you have already entered.<br>
        If you don't want to specify any specific starting quests and see all the quests from the beginning,<br>
        just leave it blank.<br>
        <br>
        For the tutorial, let's input the same quests as before by checking the checkbox,<br>
        then click on the "LOAD" button.`);
        drawSquareAroundElement($("#FC_RM_starting_quests"));
        drawSquareAroundElement($("#FC_RM_use_pending_quests"));
        drawSquareAroundElement($("#FC_RM_loading_btn"));

        $("#FC_RM_loading_btn").bind("click.tutorial_answer", function(){
          var inputArray = $("#FC_RM_starting_quests").val().toUpperCase().replace(/\s/g, '').split(',').sort();

          if (inputArray[0] === "A22" && inputArray[1] === "A29" && inputArray[2] === "A31"){
            step_6_endingQuests();
          } else {
            step_5_fail();
          }
        });
      }

      function step_5_fail(){
        $("#tuto_text").html(`That's not what I told you!<br>
        Please stay focused Admiral, check the checkbox and<br>
        then click on the "LOAD" button.`);
      }


      function step_6_endingQuests(){
        $("#FC_RM_loading_btn").unbind("click.tutorial_answer");
        $(".square").remove();

        $("#tuto_text").html(`Good!<br>
          You can see that the fowchart's display just changed to show only the quests<br>
          that will be unlocked by the three specified quests, making it easier to see than earlier.<br>
          <br>
          Let's be even more specific and precise which quests we want to unlock. Just type<br>
          the quests in the "Ending quests" box to filter the result.<br>
          Because it can be bothersome to find which quest is the one you are searching for,<br>
          there is a list of the most important quest chains that you can select among.<br>
          <br>
          Now select the quest chain "Cataplut 2" that unlock the second Prototype Flight Deck Catapult`
        );
        drawSquareAroundElement($("#FC_RM_ending_quests"));
        drawSquareAroundElement($("#FC_RM_select_preset_quests"));

        $("#FC_RM_select_preset_quests").bind("change.tutorial_answer", function(){

          if ($("#FC_RM_select_preset_quests").val() === "F23"){
            step_7_selectingQuests();
          } else {
            step_6_fail();
          }
        });
      }

      function step_6_fail(){
        $("#tuto_text").html(`Not this quest Admiral!
          I told you to select the Catapult 2!`
        );
      }

      function step_7_selectingQuests(){
        $("#FC_RM_select_preset_quests").unbind("change.tutorial_answer");
        $(".square").remove();

        $("#tuto_text").html(`Good!<br>
          Now it's way easier to check your progression admiral, but seeing only<br>
          quests' code is a bit lacking.<br>
          You can select a specific quest to display its information at the bottom of the screen.<br>
          You can do it by clicking on the quest on the flowchart (double click will zoom on it),<br>
          by selecting one of the quest in the list on the left, or by typing the questr's code in the textbox.<br>
          <br>
          Let's try to select quest "A56".`
        );

        drawSquareAroundElement($("#FC_FT_quest_list"));

        $('#FC_FT_quest_info_quest_code').on('DOMSubtreeModified',function(){
          if ( $("#FC_FT_quest_info_quest_code").text() === "A56"){
            step_8_QuestRequierments();
          } else {
            step_7_fail();
          }
        });
      }

      function step_7_fail(){
        $("#tuto_text").html(`Not this quest Admiral!
          I told you to select the quest A56!`
        );
      }

      function step_8_QuestRequierments(){
        $('#FC_FT_quest_info_quest_code').off('DOMSubtreeModified');

        $(".square").remove();

        $("#tuto_text").html(`OK!<br>
          All the information about this quest are now displayed. You can also hover your cursor on one<br>
          of the flowcahrt's quest to see what you should do to complete it.<br>
          But here is something more intereesting: on the right of the quest data, there is a requierments list.<br>
          I wrote here all the stuff you need to complete the selected quest (ship, equipment, maps...)<br>
          considering the quest currently displayed (that's why specifiying the starting quests is important).<br>
          <br>
          On the right menu, you have a checkbox option "Hide loots from previous quests". Checking it will hide<br>
          requiered elements that will be obtained in a previous quest.<br>
          <br>
          You can also right click on multiple quests on the flowchart to add up all their requierments at the same time.<br>
          Click on the flowchart background to unselect everything.`
        );

        drawSquareAroundElement($("#FC_FT_quest_requirement"));
        drawSquareAroundElement($("#FC_FT_quest_requirement_hide_quest_rewards"));

        $("#tuto_content").append($(`<button id="tuto_next" style="height:30px; width:80px;">Next =></button>`));
        $("#tuto_next").click(function(){
          step_9_FlowchartOptions();
        });
      }

      function step_9_FlowchartOptions(){
        $("#tuto_next").remove();
        $(".square").remove();

        $("#tuto_text").html(`Admiral, you also have some options you can toggle to improve your utilization of this tool.<br>
          The "Highlight downward" option will show all quests needed to unlock the selected one.<br>
          The "Highlight upwrad" option will show all quests unlocked by the selected one.<br>
          The "Use Use quest state colors" option will change the color of the quests<br>
          displayed depending if they arecompleted, pending or locked.<br>
          <br>
          The colors used can be changed using the color setting panel on top right of the creen.<br>`
        );

        drawSquareAroundElement($("#FC_RM_highlight_downward"));
        drawSquareAroundElement($("#FC_RM_highlight_upward"));
        drawSquareAroundElement($("#FC_RM_show_state_colors"));
        drawSquareAroundElement($(".HD_option_btn[value='CP']"));

        $("#tuto_content").append($(`<button id="tuto_next" style="height:30px; width:80px;">Next =></button>`));
        $("#tuto_next").click(function(){
          step_10_openQuestList();
        });
      }

      function step_10_openQuestList(){
        $("#tuto_next").remove();
        $(".square").remove();

        $("#tuto_text").html(`That's it for the flowchart tool.<br>
        Now let me explain about the quest list tool.<br>
        <br>
        Click on the button at the top to switch to this tool.`);

        drawSquareAroundElement($(".HD_main_tab_btn[value='QL']"));
        $(".HD_main_tab_btn[value='QL']").bind("click.tutorial_answer", function(){
          step_11_shipRequired();
        });

      }

      function step_11_shipRequired(){
        $(".HD_main_tab_btn[value='QL']").unbind("click.tutorial_answer");
        $(".square").remove();

        $("#tuto_text").html(`Here is a full list of all the quests in the game.<br>
          On the right there is a search menu that will help you to find what you need.<br>
          <br>
          For example let's search in which quests I'm required...<br>
          <br>
          Select the reserch mode "By ship required" and then select "Ooyodo".`
        );

        drawSquareAroundElement($("#QL_RM_select_search_method"));
        $("#QL_RM_select_required_ship").bind("change.tutorial_answer", function(){
          if ( $("#QL_RM_select_required_ship").text() === "Ooyodo"){
            step_12_setQuestAsCompleted();
          } else {
            step_11_fail();
          }
        });
      }

      function step_11_fail(){
        $("#tuto_text").html(`A...Admiral!<br>
          I asked you to choose me, not ${ $("#QL_RM_select_required_ship").text()}!!`
        );
      }

      function step_12_setQuestAsCompleted(){
        $("#QL_RM_select_required_ship").unbind("change.tutorial_answer");
        $(".square").remove();

        $("#tuto_text").html(`Do you see?<br>
          You will need me for those two quests... <br>
          But don't scrap me after please!!<br>
          <br>
          By the way, you have just finiched quest A69`
        );

        drawSquareAroundElement($("#QL_RM_select_search_method"));
        $("#QL_RM_select_required_ship").bind("change.tutorial_answer", function(){
          if ( $("#QL_RM_select_required_ship").text() === "Ooyodo"){
            step_12_questCompleted();
          } else {
            step_11_fail();
          }
        });
      }


      function step_13_weeklyQuests(){

        $(".square").remove();

        $("#tuto_text").html(`

          <br>
          Ah... Admiral... I got a message from Akashi... We are getting low<br>
          on screws and need to replenish our stocks with some weekly and monthly quests.<br>
          <br>
          Choose the search mode "By quest period", then check only "Weekly" and "Monthly".`);

          drawSquareAroundElement($("#QL_RM_select_search_method"));

          $(".QL_RM_display_period").bind("change.tutorial_answer", function(){
            var checkBoxesSelected = [];
            $('.QL_RM_display_period').each(function() {
              if ($(this).is(":checked")) {
                checkBoxesSelected.push($(this).val());
              }
            });
            if (checkBoxesSelected.sort()[0] === "monthly" &&   checkBoxesSelected.sort()[1] === "weekly" && checkBoxesSelected.length === 2){
              step_14_selectRewardScrews();
            }
          });
        }


        function step_14_selectRewardScrews(){
          $(".QL_RM_display_period").unbind("change.tutorial_answer");
          $(".square").remove();

          $("#tuto_text").html(`OK! Only monthly and weekly quests will be displayed.<br>
            This research option along with the "By quest state" options are kept when using the others filters.<br>
            You can clear them by clicking on the reset button.<br>
            <br>
            Now let's show only the quests rewarding screws.<br>
            Choose the search mode "By reward", then click on the option "Consumable".<br>
            In the dropdown list choose "Improvement material"`);

            drawSquareAroundElement($("#QL_RM_select_search_method"));
            $("#QL_RM_search_select_reward").bind("change.tutorial_answer", function(){
              if ($(this).text() === "Improvement material"){
                step_14_doubleClick();
              } else {
                step_13_fail();
              }
            });
          }

          function step_14_fail(){
            $("#tuto_text").html(`Admiral!<br>
              We need Improvement materials, <br>
              not ${ $(this).text()}!!<br>
              We need screws!!`
            );
          }

          function step_15_doubleClick(){
            $("#QL_RM_search_select_reward").unbind("change.tutorial_answer");
            $(".square").remove();

            $("#tuto_text").html(`That's it!<br>
            Now double click on any quest you want to complete to load<br>
            it as a final quest in the flowchart.`);

            $(".QL_questBox").bind("dblclick.tutorial_answer", function(){
              step_15_EndOfTutorial();
            });
          }

          function step_16_EndOfTutorial(){
            $(".QL_questBox").unbind("dblclick.tutorial_answer");
            $(".square").remove();

            $("#tuto_text").html(`Perfect Admiral!<br>
              This concludes the tutorial for this tool<br>
              I hope you will make good use of it!`);

              $("#tuto_content").append($(`<button id="tuto_end" style="height:30px; width:80px;">Next =></button>`));
              $("#tuto_end").click(function(){
                $("#tuto").remove();
              });
            }




            function drawSquareAroundElement(element){
              var width = Math.round(element.outerWidth()  + 10) ;
              var height = Math.round(element.outerHeight() + 10) ;
              var top = Math.round(element.offset().top -12);
              var left =  Math.round(element.offset().left -12);
              var square = $(`<div class="square" style="
              top:${top}px;
              left:${left}px;
              width:${width}px;
              height:${height}px;">
              </div>`);
              $("body").append(square);
            }

            //  drawSquareAroundElement($("#FC_RM_highlight_downward"));

          });
