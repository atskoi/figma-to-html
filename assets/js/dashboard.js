
  $(document).ready(function () {
    // Initializing state
    /****************************************** 
     *  Event listening
     * ***************************************/
     $('#filter-datepicker-from').datepicker();
     $('#filter-datepicker-to').datepicker();
     $('#export-datepicker-from').datepicker();
     $('#export-datepicker-to').datepicker();

    let g_curCaseId = "";   // Modal case id
    //  $("#modal-history-transactiondetails").modal('show');

    // Dashboard sidebar collapsible effect
    $('#btn-logo').on('click', function () {
      window.location.replace("index.html");
    });
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggle();
      // $('#sidebar').width(0);
    });
    // Sidebar button events
    $("#navmenubtn-dashboard").click(function() {
      $(this).addClass("nav-hotbtn-active");
      $("#navmenubtn-currencies").removeClass("nav-hotbtn-active")
      $("#navmenubtn-settings").removeClass("nav-hotbtn-active")
      $("#contentbox-history").hide();
      $("#contentbox-currencies").hide();
      $("#contentbox-currencies").hide();
      $("#contentbox-settings").hide();
      $("#contentbox-settings-security").hide();
      $("#contentbox-settings-privacypolicy").hide();      
      $("#contentbox-settings-faqs").hide();
      $("#contentbox-settings-cancellation").hide();
      $("#contentbox-dashboard").show();
    })
    $("#navmenubtn-currencies").click(function() {
      $(this).addClass("nav-hotbtn-active");
      $("#navmenubtn-settings").removeClass("nav-hotbtn-active")
      $("#navmenubtn-dashboard").removeClass("nav-hotbtn-active")
      $("#contentbox-history").hide();
      $("#contentbox-dashboard").hide();
      $("#contentbox-settings").hide();
      $("#contentbox-settings-security").hide();
      $("#contentbox-settings-privacypolicy").hide();      
      $("#contentbox-settings-faqs").hide();
      $("#contentbox-settings-cancellation").hide();
      $("#contentbox-currencies").show();
    })
    $("#navmenubtn-profile").click(function() {
      $("#modal-profile").show();

    })    
    $("#navmenubtn-settings, #setting-security-btn-back, #setting-privacypolicy-btn-back, #setting-faqs-btn-back, #setting-cancellation-btn-back").click(function() {  /* Please concern that this event happens on settings/ security setting */
      $("#navmenubtn-settings").addClass("nav-hotbtn-active");
      $("#navmenubtn-currencies").removeClass("nav-hotbtn-active")
      $("#navmenubtn-dashboard").removeClass("nav-hotbtn-active")
      $("#contentbox-currencies").hide();
      $("#contentbox-dashboard").hide();
      $("#contentbox-settings-security").hide();
      $("#contentbox-history").hide();
      $("#contentbox-settings-privacypolicy").hide();      
      $("#contentbox-settings-faqs").hide();
      $("#contentbox-settings-cancellation").hide();
      $("#contentbox-settings").show();
    })    
    $("#dashboard-btn-history").click(function() {  /* Please concern that this event happens on dashboard*/
      $("#contentbox-currencies").hide();
      $("#contentbox-dashboard").hide();
      $("#contentbox-settings").hide();
      $("#contentbox-settings-security").hide();
      $("#contentbox-settings-privacypolicy").hide();      
      $("#contentbox-settings-faqs").hide();
      $("#contentbox-settings-cancellation").hide();
      $("#contentbox-history").show();
    })
    $("#settings-btn-security").click(function() {  /* Please concern that this event happens on dashboard*/
      $("#contentbox-currencies").hide();
      $("#contentbox-dashboard").hide();
      $("#contentbox-history").hide();
      $("#contentbox-settings").hide();
      $("#contentbox-settings-privacypolicy").hide();      
      $("#contentbox-settings-faqs").hide();
      $("#contentbox-settings-cancellation").hide();
      $("#contentbox-settings-security").show();
    })
    $("#settings-btn-privacypolicy").click(function() {  /* Please concern that this event happens on dashboard*/
      $("#contentbox-currencies").hide();
      $("#contentbox-dashboard").hide();
      $("#contentbox-history").hide();
      $("#contentbox-settings").hide();
      $("#contentbox-settings-security").hide();
      $("#contentbox-settings-faqs").hide();
      $("#contentbox-settings-cancellation").hide();
      $("#contentbox-settings-privacypolicy").show();
    })
    $("#settings-btn-faqs").click(function() {  /* Please concern that this event happens on dashboard*/
      $("#contentbox-currencies").hide();
      $("#contentbox-dashboard").hide();
      $("#contentbox-history").hide();
      $("#contentbox-settings").hide();
      $("#contentbox-settings-security").hide();
      $("#contentbox-settings-cancellation").hide();
      $("#contentbox-settings-privacypolicy").hide();
      $("#contentbox-settings-faqs").show();
    })    
    $("#settings-btn-cancellation").click(function() {  /* Please concern that this event happens on dashboard*/
      $("#contentbox-currencies").hide();
      $("#contentbox-dashboard").hide();
      $("#contentbox-history").hide();
      $("#contentbox-settings").hide();
      $("#contentbox-settings-security").hide();
      $("#contentbox-settings-privacypolicy").hide();
      $("#contentbox-settings-faqs").hide();
      $("#contentbox-settings-cancellation").show();
    })    
    // dashboard button events
    $("#dashboard-btn-sendmoney").click(function () {
      $("#modal-sendmoney").modal('show');
    });
    $("#dashboard-btn-beneficiary").click(function () {
      $("#modal-beneficiary").modal('show');
    });
    $("#modal-btn-payconfirm").click(function () {
      // Here you must send data to remote server
      // .....
      $("#modal-sendmoney").modal('hide');
      $("#modal-sendmoney-success").modal('show');
    })
    $("#modal-btn-sendmoney").click(function () {
      // Here you must push some parameters for confirm modal
      // .....
      $("#modal-btnicon-sendmoney").hide();
      $(".spinner").show();
      $("#modal-confirm").modal('show');
    })
    $("#modal-btn-delbeneficiary").click(function () {
      $("#modal-delbeneficiary").modal('show');
    })
    $("#modal-btn-editbeneficiary").click(function () {
      $("#modal-beneficiary-details").modal('show');
    })
    $("#modal-btn-benedetails-procced").click(function () {
      $("#modal-beneficiary-account-details").modal('show');
    })
    $("#modal-btn-accountdetails-procced").click(function () {
      $("#modal-beneficiary-confirm-details").modal('show');
    })
    $("#modal-btn-editbeneficiary-finish").click(function () {
      $("#modal-beneficiary-confirm-details").modal('hide');
      $("#modal-beneficiary-account-details").modal('hide');
      $("#modal-beneficiary-details").modal('hide');
      $("#modal-beneedit-success").modal('show');
    })    

    // dashboard / Transaction history events
    $("#history-btn-filter").click(function() {
     $('#filter-datepicker-from').datepicker('setDate', null);
     $('#filter-datepicker-to').datepicker('setDate', null);   
     $("#modal-history-filter").modal('show');    
    })
    $("#modal-filter-clearall").click(function() {
      $('#filter-datepicker-from').datepicker('setDate', null);
     $('#filter-datepicker-to').datepicker('setDate', null);   
    })
    $("#modal-btn-filter-procced").click(function() {
      // Here add you filtering code
      $("#modal-history-filter").modal('hide');    
    })
    $("#history-btn-sortby").click(function() {
     $("#modal-history-sortby").modal('show');    
    })
    $("#modal-btn-sortby-procced").click(function() {
      // Here add you filtering code
      $("#modal-history-sortby").modal('hide');    
    })
    $("#history-btn-export").click(function() {
     $('#export-datepicker-from').datepicker('setDate', null);
     $('#export-datepicker-to').datepicker('setDate', null);   
     $("#modal-history-export").modal('show');    
    })
    $("#modal-export-clearall").click(function() {
      $('#export-datepicker-from').datepicker('setDate', null);
     $('#export-datepicker-to').datepicker('setDate', null);   
    })
    $("#modal-btn-export-procced").click(function() {
      // Here add you filtering code
      $("#modal-history-export").modal('hide');    
    })

    // Setting events
    $("#setting-security-btn-password").click(function() {
        g_curCaseId = "verifydigit-for-pwd";
        initCaseConfirmDigit();
      $("#modal-setting-security-verify").modal("show");
    })
    $("#setting-security-btn-twostep").click(function() {
        g_curCaseId = "verifydigit-for-twostep";
        initCaseConfirmDigit();
      $("#modal-setting-security-twostep").modal('show');    
    })
    $("#setting-security-btn-registerednumber").click(function() {
        g_curCaseId = "verifydigit-for-registerednumber";
        initCaseConfirmDigit();
      $("#modal-setting-security-twostep").modal('show');    
    }) 
    $("#modal-btn-verify-submit").click(function() {  //digit verification modal events
        if (g_curCaseId == "verifydigit-for-pwd") {
            $("#modal-setting-security-changepwd").modal('show');    
        } else if(g_curCaseId == "verifydigit-for-twostep") {
            $("#modal-setting-security-twostep-success").modal('show');    
        } else if(g_curCaseId == "verifydigit-for-registerednumber") {
            $("#modal-setting-security-registerednumber-success").modal('show');    
        }
    })    
    $("#modal-btn-twostepstart").click(function() {  // When the button ""Set Two-Step Verification" is pressed in two setp firs modal
      $("#modal-setting-security-verify").modal("show");        
    })           
    $("#settings-btn-contactus").click(function() {
      $("#modal-setting-contactus-welcome").modal('show'); 
    })      
    $("#modal-setting-btn-contactus-proceed").click(function() {
      $("#modal-setting-contactus-rateus").modal('show'); 
    })    
    $("#modal-setting-btn-contactus-submit").click(function() {
      $("#modal-setting-contactus-reviewdone").modal('show'); 
    })  
    $("#settings-btn-language").click(function() {
      $("#modal-setting-selectlanguage").modal('show'); 
    })    
    $("#settings-btn-notifications").click(function() {
      $("#modal-setting-notifications").modal('show'); 
    })     
    $("#settings-btn-rateus").click(function() {
      $("#modal-setting-contactus-rateus").modal('show'); 
    })    

    // digit verify dialog event
    let g_curCaretPos = 0;
    $(document).keydown(function (event) {
        // var key = (event.keyCode ? event.keyCode : event.which);alert(key)
        //   var ch=String.fromCharCode(key)
        //   alert('You pressed key : ' +ch);
        if (g_curCaseId == "verifydigit-for-pwd" || g_curCaseId == "verifydigit-for-twostep"  || g_curCaseId == "verifydigit-for-registerednumber") {
          var key = (event.keyCode ? event.keyCode : event.which);
          if (key == 8) {// backspace pressed
            $("#number-pan").children('.' + g_curCaretPos).text("0");
            if (g_curCaretPos > 0) {
              $("#number-pan").children('.' + g_curCaretPos).removeClass("u-numpan-active")
              g_curCaretPos--;
              $("#number-pan").children('.' + g_curCaretPos).addClass("u-numpan-active")
            }
            return;
          } else if (key == 37) {// if (37 <= key && key <= 40) { // left=37, top=38, right=39, bottom=40
            if (g_curCaretPos > 0) {
              $("#number-pan").children('.' + g_curCaretPos).removeClass("u-numpan-active")
              g_curCaretPos--;
              $("#number-pan").children('.' + g_curCaretPos).addClass("u-numpan-active")
            }
          } else if (key == 39) { // right arrow button pressed
            if (g_curCaretPos < 3) {
              $("#number-pan").children('.' + g_curCaretPos).removeClass("u-numpan-active")
              g_curCaretPos++;
              $("#number-pan").children('.' + g_curCaretPos).addClass("u-numpan-active")
            }
          }
          if (48 <= key && key <= 57) {
            var ch = String.fromCharCode(key);
            $("#number-pan").children('.' + g_curCaretPos).text(ch);
            if (g_curCaretPos < 3) {
              $("#number-pan").children('.' + g_curCaretPos).removeClass("u-numpan-active")
              g_curCaretPos++;
              $("#number-pan").children('.' + g_curCaretPos).addClass("u-numpan-active")
            }
          }
  
        }
      });
      function initCaseConfirmDigit() {
        g_curCaretPos = 0;
        $("#number-pan").children('.0').text("0");
        $("#number-pan").children('.1').text("0");
        $("#number-pan").children('.2').text("0");
        $("#number-pan").children('.3').text("0");
        $("#number-pan").children('.0').addClass("u-numpan-active");
        $("#number-pan").children('.1').removeClass("u-numpan-active");
        $("#number-pan").children('.2').removeClass("u-numpan-active");
        $("#number-pan").children('.3').removeClass("u-numpan-active");
      }
      $(".0").click(function () {
        $("#number-pan").children('.' + g_curCaretPos).removeClass("u-numpan-active")
        g_curCaretPos = 0;
        $("#number-pan").children('.0').addClass("u-numpan-active");
      })
      $(".1").click(function () {
        $("#number-pan").children('.' + g_curCaretPos).removeClass("u-numpan-active")
        g_curCaretPos = 1;
        $("#number-pan").children('.1').addClass("u-numpan-active");
      })
      $(".2").click(function () {
        $("#number-pan").children('.' + g_curCaretPos).removeClass("u-numpan-active")
        g_curCaretPos = 2;
        $("#number-pan").children('.2').addClass("u-numpan-active");
      })
      $(".3").click(function () {
        $("#number-pan").children('.' + g_curCaretPos).removeClass("u-numpan-active")
        g_curCaretPos = 3;
        $("#number-pan").children('.3').addClass("u-numpan-active");
      })


    // Profile edit event
    $("#profile-save").click(function() {
      $("#modal-profile").hide();
    })       
    $("#profile-tabbtn-personalinfo").click(function() {
      $("#profile-tabbtn-addressinfo").removeClass("border-bottom border-secondary border-3 text-dark");
      $("#profile-tabbtn-personalinfo").addClass("border-bottom border-secondary border-3 text-dark");
      $("#tabcontent-addressinfo").hide();      
      $("#tabcontent-userinfo").show();      
    })       
    $("#profile-tabbtn-addressinfo").click(function() {
      $("#profile-tabbtn-personalinfo").removeClass("border-bottom border-secondary border-3 text-dark");
      $("#profile-tabbtn-addressinfo").addClass("border-bottom border-secondary border-3 text-dark");
      $("#tabcontent-userinfo").hide();      
      $("#tabcontent-addressinfo").show();      
    })        
  });

  // Transaction history view
  function onTransactionRow(rowEle) {
    $("#modal-history-transactiondetails").modal('show');
  }

  $(".langselmark").hide();
  $("#english").show();
  function onLanguageItem(rowEle) {
    $(".langselmark").hide();
    // $(this).find(".langselmark").addClass("bg-danger");
    $(rowEle).find(".langselmark").show();
  }

  function onNotificationIcon(iconEle) {
    $(iconEle).toggleClass("bg-danger");
  }