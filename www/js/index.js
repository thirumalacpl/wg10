$(document).on('pageshow', '#pageone', function(){ 
    //alert("hidash");
    if(sessionStorage.getItem("logged_in")=="1"){
          $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false }); 
    }
$(document).off('click', '#submit').on('click', '#submit', function() { 
    if($('#username').val().length > 0 && $('#password').val().length > 0){
        console.log($('#check-watchuser').serialize());
        $.ajax({url: 'http://staging.eimpressive.com/slimrestapi-watch/index.php',
            data:$('#check-watchuser').serialize(),
            type: 'post',                   
            async: 'true',
            crossDomain: true,
            dataType: 'json',
            beforeSend: function() {
$('body').addClass('ui-loading');
},
complete: function() {
},
success: function (result) {
    console.log(result);
    var pas=result[0];
     var pass=result[14];
   // alert(pas+'pas'); 
      // alert(pass+'pass');
          if(pas == '' &&  pass == ''){
    alert('username or password entered is invalid');
    $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
    return false; 
}
    if(pas != ''){
      //alert(pas+'pas');
        sessionStorage.setItem("logged_in","1");
        sessionStorage.setItem("regionArray",JSON.stringify(result[0]));
        //sessionStorage.setItem("usernamearray",JSON.stringify(result[0]));
        sessionStorage.setItem("supervisor_new_array",JSON.stringify(result[1]));
        sessionStorage.setItem("new_verification_count_array",JSON.stringify(result[2]));
        sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[3]));
        sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[4]));
        sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[5]));
        sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[6]));
        sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[7]));
        sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[8]));
        sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[9]));
        sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[10]));
        sessionStorage.setItem("multiple_documents_array",JSON.stringify(result[11]));
        sessionStorage.setItem("addressid_records_array",JSON.stringify(result[12]));
        sessionStorage.setItem("educational_records_array",JSON.stringify(result[13]));
        sessionStorage.setItem("employment_records_array",JSON.stringify(result[14]));
        sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(result[15]));

        $.mobile.loading().hide();
        $(".ui-icon-loading").hide();
         $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false }); 


    }
/*    if( pass != ''){
      //alert(pass+'pass');
         sessionStorage.setItem("logged_in","1");
       
            sessionStorage.setItem("co_regionarray",JSON.stringify(result[12]));
            sessionStorage.setItem("co_new_veri_list",JSON.stringify(result[13]));
             sessionStorage.setItem("co_new_veri_list_count_array",JSON.stringify(result[14]));
             sessionStorage.setItem("co_addressid_records_array",JSON.stringify(result[15]));
            sessionStorage.setItem("co_educational_records_array",JSON.stringify(result[16]));
             sessionStorage.setItem("co_multiple_documents_array",JSON.stringify(result[17]));
              sessionStorage.setItem("co_basic_profile_records_array",JSON.stringify(result[18]));

        $.mobile.loading().hide();
        $(".ui-icon-loading").hide();
        
        $.mobile.changePage($('#tabpage'), { transition: "none", changeHash: true, reverse: false });
   return false;

    }*/
    
},
error: function (request,error) {
    console.log(error);
    console.log(request);              
alert('Network error has occurred please try again!');
}
}); 
 
  
}
});
});

