    $(document).ready(function () {
      // Initializing state
      // $("#tabcontent-useremail").hide();
      // $('.selectpicker').selectpicker();
  
      let g_curCaseId = "casename_login"
      /*
      g_modalIdName :
        login-phone-confirm, login-email-confirm, resetpwd-phone-confirm, resetpwd-email-confirm
      */
      let g_modalIdName = "login-phone-confirm";
  
      // Global functions and event handlers
      function doModal(modalType, title, bodytitle, bodytext) {
        g_modalIdName = modalType;
        $("#modal-title").text(title);
        $("#modal-bodytitle").text(bodytitle);
        $("#modal-bodytext").text(bodytext);
        $("#modal-confirm").modal('show');
      }
      // function switchCaseTo(newCaseId) {
      //   $("#"+g_curCaseId).hide();
      //   $("#"+newCaseId).show();
      //   g_curCaseId = newCaseId;
      // }
      $("#modal-confirm-btn-accept").click(function () {
        switch (g_modalIdName) {
          case "login-phone-confirm":
          case "login-email-confirm":
            g_curCaseId = "verifydigit-for-login";
            $("#casename-login").hide();
            break;
          case "resetpwd-phone-confirm":
          case "resetpwd-email-confirm":
            g_curCaseId = "verifydigit-for-resetpwd";
            $("#casename-forgotpwd").hide();
            break;
          case 'createaccount-phone-confirm':
            $("#casename-createaccount-phoneverify").hide();
            g_curCaseId = "verifydigit-for-createaccount-phone";
            break;
          case 'createaccount-email-confirm':
            $("#casename-createaccount-emailverify").hide();
            g_curCaseId = "verifydigit-for-createaccount-email";
            break;
        }
        initCaseConfirmDigit();
        $("#casename-digitconfirm").show();
  
      })
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Login case events
      $("#case-login-tabbtn-phone").click(function () {
        $("#case-login-tabbtn-email").removeClass("u-tabbtn-active");
        $("#case-login-tabcontent-useremail").hide();
        $("#case-login-tabcontent-userphone").show();
        $(this).addClass("u-tabbtn-active");
        $("#password").val("");
        $("#phone").val("");
      });
      $("#case-login-tabbtn-email").click(function () {
        $("#case-login-tabcontent-userphone").hide();
        $("#case-login-tabbtn-phone").removeClass("u-tabbtn-active");
        $("#case-login-tabcontent-useremail").show();
        $(this).addClass("u-tabbtn-active");
        $("#password").val("");
        $("#email").val("");
      });
      $("#login-btn-submit").click(function () {
        // $(".signicon").hide();
        // $(".spinner").show();
        if ($("#case-login-tabbtn-phone").hasClass("u-tabbtn-active")) {
          // $("#input").checkValidity()
          doModal(
            "login-phone-confirm",
            "Login with Phone number",
            "(+20) 5217 2823 53",
            "We will send the authentication code to the phone number you entered. Do you want to continue?");
        } else { // "login-email-confirm",
          doModal(
            "login-email-confirm",
            "Email Verification",
            "Mist4227s@gmail.com",
            "We will send the authentication code to the email address you entered. Do you want to continue?");
        }
      });
      $("#login-btn-forgot").click(function () {
        $("#casename-login").hide();
        $("#casename-forgotpwd").show();
        g_curCaseId = "forgotpwd"
      });
  
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Forgot password case events (This screen shows when the user click the "Forgot it" button on login screen)
      $("#case-pwdrecovery-tabbtn-phone").click(function () {
        $("#case-pwdrecovery-tabbtn-email").removeClass("u-iconbtn-active");
        $("#case-pwdrecovery-tabcontent-useremail").hide();
        $("#case-pwdrecovery-tabcontent-userphone").show();
        $(this).addClass("u-iconbtn-active");
      });
      $("#case-pwdrecovery-tabbtn-email").click(function () {
        $("#case-pwdrecovery-tabbtn-phone").removeClass("u-iconbtn-active");
        $("#case-pwdrecovery-tabcontent-userphone").hide();
        $("#case-pwdrecovery-tabcontent-useremail").show();
        $(this).addClass("u-iconbtn-active");
      });
      $("#forgotpwd-btn-submit").click(function () {
        if ($("#case-pwdrecovery-tabbtn-phone").hasClass("u-iconbtn-active")) {
          doModal(
            "resetpwd-phone-confirm",
            "Login with Phone number",
            "(+20) 5217 2823 53",
            "We will send the authentication code to the phone number you entered. Do you want to continue?");
        } else {
          doModal(
            "resetpwd-email-confirm",
            "Email Verification",
            "Mist4227s@gmail.com",
            "We will send the authentication code to the email address you entered. Do you want to continue?");
        }
      });
      $("#forgotpwd-btn-back").click(function () {
        $("#casename-forgotpwd").hide();
        $("#casename-login").show();
        g_curCaseId = "login";
      });
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Cofirm digit case events
      let g_curCaretPos = 0;
      $(document).keydown(function (event) {
        // var key = (event.keyCode ? event.keyCode : event.which);alert(key)
        //   var ch=String.fromCharCode(key)
        //   alert('You pressed key : ' +ch); 
        if (g_curCaseId == "verifydigit-for-login" || 
            g_curCaseId == "verifydigit-for-resetpwd" ||
            g_curCaseId == "verifydigit-for-createaccount-phone" ||
            g_curCaseId == "verifydigit-for-createaccount-email" 
            ) {
          var key = (event.keyCode ? event.keyCode : event.which);
          if (key == 8) {// backspace pressed
            $("#number-pan").children('.' + g_curCaretPos).text("0");
            if (g_curCaretPos > 0) {
              $("#number-pan").children('.' + g_curCaretPos).removeClass("u-tabbtn-active")
              g_curCaretPos--;
              $("#number-pan").children('.' + g_curCaretPos).addClass("u-tabbtn-active")
            }
            return;
          } else if (key == 37) {// if (37 <= key && key <= 40) { // left=37, top=38, right=39, bottom=40
            if (g_curCaretPos > 0) {
              $("#number-pan").children('.' + g_curCaretPos).removeClass("u-tabbtn-active")
              g_curCaretPos--;
              $("#number-pan").children('.' + g_curCaretPos).addClass("u-tabbtn-active")
            }
          } else if (key == 39) { // right arrow button pressed
            if (g_curCaretPos < 3) {
              $("#number-pan").children('.' + g_curCaretPos).removeClass("u-tabbtn-active")
              g_curCaretPos++;
              $("#number-pan").children('.' + g_curCaretPos).addClass("u-tabbtn-active")
            }
          }
          if (48 <= key && key <= 57) {
            var ch = String.fromCharCode(key);
            $("#number-pan").children('.' + g_curCaretPos).text(ch);
            if (g_curCaretPos < 3) {
              $("#number-pan").children('.' + g_curCaretPos).removeClass("u-tabbtn-active")
              g_curCaretPos++;
              $("#number-pan").children('.' + g_curCaretPos).addClass("u-tabbtn-active")
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
        $("#number-pan").children('.0').addClass("u-tabbtn-active");
        $("#number-pan").children('.1').removeClass("u-tabbtn-active");
        $("#number-pan").children('.2').removeClass("u-tabbtn-active");
        $("#number-pan").children('.3').removeClass("u-tabbtn-active");
      }
      $(".0").click(function () {
        $("#number-pan").children('.' + g_curCaretPos).removeClass("u-tabbtn-active")
        g_curCaretPos = 0;
        $("#number-pan").children('.0').addClass("u-tabbtn-active");
      })
      $(".1").click(function () {
        $("#number-pan").children('.' + g_curCaretPos).removeClass("u-tabbtn-active")
        g_curCaretPos = 1;
        $("#number-pan").children('.1').addClass("u-tabbtn-active");
      })
      $(".2").click(function () {
        $("#number-pan").children('.' + g_curCaretPos).removeClass("u-tabbtn-active")
        g_curCaretPos = 2;
        $("#number-pan").children('.2').addClass("u-tabbtn-active");
      })
      $(".3").click(function () {
        $("#number-pan").children('.' + g_curCaretPos).removeClass("u-tabbtn-active")
        g_curCaretPos = 3;
        $("#number-pan").children('.3').addClass("u-tabbtn-active");
      })
      $("#confirmdigit-btn-back").click(function () {
        $("#casename-digitconfirm").hide();
        if (g_curCaseId == "verifydigit-for-login") {
          $("#casename-login").show();
          g_curCaseId = "login";
        } else if (g_curCaseId == "verifydigit-for-resetpwd") {
          $("#casename-forgotpwd").show();
          g_curCaseId = "forgotpwd";
        } else if (g_curCaseId == 'verifydigit-for-createaccount-phone') {
          $("#verifydigit-for-createaccount-email").show();
          g_curCaseId = "createaccount-emailverify";
        } else if (g_curCaseId == 'verifydigit-for-createaccount-email') {
          $("#verifydigit-for-createaccount-email").show();
          g_curCaseId = "createaccount-emailverify";
        }
      });
      $("#verifydigit-btn-submit").click(function () {
        $("#casename-digitconfirm").hide(); console.log(g_curCaseId)
        if (g_curCaseId == "verifydigit-for-login") {
          // If the use is new to your site
          $("#casename-createaccount-emailverify").show();
          // Else you have to navigate to dashboard here
          // alert(" This is the login screen")
        } else if (g_curCaseId == "verifydigit-for-resetpwd") {
          $("#casename-resetpwd").show();
          g_curCaseId = "resetpwd";
        } else if (g_curCaseId == "verifydigit-for-createaccount-phone") {
          $("#casename-createaccount-setpwd").show();
          g_curCaseId = "createaccount-setpwd";
        } else if (g_curCaseId == "verifydigit-for-createaccount-email") {
          $("#casename-createaccount-phoneverify").show();
          g_curCaseId = "createaccount-phoneeverify";
        }
      })
      ////////////////////////////////////////////////////////////////////////////////////
      // Reset password input case
      $("#resetpwd-btn-back").click(function () {
        $("#casename-resetpwd").hide();
        $("#casename-forgotpwd").show();
      })
      $("#resetpwd-btn-submit").click(function () {
        $("#casename-resetpwd").hide();
        $("#casename-resetpwd-success").show();
      })
      // reset password success and login
      $("#resetpwdsuccess-btn-login").click(function () {
        $("#casename-resetpwd-success").hide();
        window.location.replace("dashboard.html");
      })      
      ////////////////////////////////////////////////////////////////////////////////////
      // Create account case step1: email verfiy events
      $("#createaccount-btn-emailsubmit").click(function () {
        // $("#casename-createaccount-emailverify").hide();
        // $("#ccasename-createaccount-phoneverify").show();
        doModal(
          "createaccount-email-confirm",
          "Email Verification",
          "Mist4227s@gmail.com",
          "We will send the authentication code to the email address you entered. Do you want to continue?");
      })
      // Create account case step2: phoneverify events
      $("#createaccount-btn-phonesubmit").click(function () {
        // $("#casename-createaccount-phoneverify").hide();
        // $("#ccasename-createaccount-phoneverify").show();
        doModal(
          "createaccount-phone-confirm",
          "Login with Phone number",
          "(+20) 5217 2823 53",
          "We will send the authentication code to the phone number you entered. Do you want to continue?");
      })
      // Create account case step3:  password set events
      $("#createaccount-btn-pwdset").click(function () {
        $("#casename-createaccount-setpwd").hide();
        $("#casename-completeprofile-personalinfo").show();
      })
      ////////////////////////////////////////////////////////////////////////////////////
      // Complete profile step1: Personal information
      $("#completeprofile-btn-personalinfo").click(function () {
        $("#casename-completeprofile-personalinfo").hide();
        $("#casename-completeprofile-addressinfo").show();
      })
      // Complete profile step2: Address information
      $("#completeprofile-btn-addressinfo").click(function () {
        $("#casename-completeprofile-addressinfo").hide();
        $("#casename-completeprofile-identificationinfo").show();
      })
      // Complete profile step3: Identification information
      $("#completeprofile-btn-identificationinfo").click(function () {
        $("#casename-completeprofile-identificationinfo").hide();
        $("#casename-faceverification").show();
      })
      // Face verification
      $("#faceverification-btn-submit").click(function () {
        $("#casename-faceverification").hide();
        $("#casename-welldone").show();
      })
      $("#faceverification-btn-image").click(function () {
        document.getElementById("faceverification-btnreal-image").click();
      })
      $("#faceverification-btn-frontimage").click(function () {
        document.getElementById("faceverification-btnreal-frontimage").click();
      })
      $("#faceverification-btn-backimage").click(function () {
        document.getElementById("faceverification-btnreal-backimage").click();
      })           
      // Well done
      $("#welldone-btn-submit").click(function () {
        $("#casename-welldone").hide();
        window.location.replace("dashboard.html");
      })
      const $_SELECT_PICKER = $('.my-image-selectpicker');

    $_SELECT_PICKER.find('option').each((idx, elem) => {
        const $OPTION = $(elem);
        const IMAGE_URL = $OPTION.attr('data-thumbnail');

        if (IMAGE_URL) {
            $OPTION.attr('data-content', "<img src='%i'/> %s".replace(/%i/, BASE_URL + IMAGE_URL).replace(/%s/, $OPTION.text()))
        }

        console.warn('option:', idx, $OPTION)
});

$_SELECT_PICKER.selectpicker(); 
  
    });
  