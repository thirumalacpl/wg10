		$(document).on('pageshow', '#co_dashboard', function(){  
      
//alert("dashboard");

  co_regionarray =  JSON.parse(sessionStorage.getItem("co_regionarray"));

		co_new_veri_list_count_array = 	JSON.parse(sessionStorage.getItem("co_new_veri_list_count_array"));
    co_new_veri_list =  JSON.parse(sessionStorage.getItem("co_new_veri_list"));

//alert(regionArray_array.region);
var region=co_regionarray.co_region;
 //alert(region);

    for(a=0;a<co_new_veri_list.length;a++){
      co_n = co_new_veri_list[a];
      user_id =co_n.assigned_to;

alert(user_id);
 }
   


$(document).off('click', '#co_new_verification').on('click', '#co_new_verification', function() { 
   alert(user_id+'user id refresh');
alert(region+'region refresh');

$.ajax({url: "http://staging.eimpressive.com/slimrestapi-watch/co_dashnewveri.php?userid="+user_id+"&region="+region,
    data:$('#update_to_inprogress').serialize(),
    type: 'post',                   
    async: 'true',
    crossDomain: true,
    dataType: 'json',
    beforeSend: function() {
    },
    complete: function() {
    },
    success: function (result) {
      console.log('searchlpa' +result);
      if(result[0]){
        $("#popupsearchmade").popup("open");
        sessionStorage.setItem("co_new_veri_list_count_array",JSON.stringify(result[0]));

        $.mobile.loading().hide();
        $.mobile.changePage($('#co_new_veri_list'), { transition: "none", changeHash: true, reverse: false });
        //$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
      }else {
        alert('No Data Found for the search record'); 
      }

      return false;
    },
    error: function (request,error) {    
      console.log(request);
      console.log(error);  
      $("#Network").popup("open");         
      alert('Network error has occurred please try again!');
    }
  });

});



		for(a=0;a<co_new_veri_list_count_array.length;a++){
			new_count = co_new_veri_list_count_array[a];

     $("#co_new_veri_count").html(new_count.co_new_veri_list_count);
}


/*  for(a=0;a<supervisor_inprogress_count_array.length;a++){
      inprogress_count = supervisor_inprogress_count_array[a];
     //alert(inprogress_count.supervisor_inprogress_count+'supervisor_inprogress_count');
     $("#inprogress_count").html(inprogress_count.supervisor_inprogress_count);

}

  for(a=0;a<supervisor_verified_count_array.length;a++){
      verified_count = supervisor_verified_count_array[a];
    // alert(verified_count.supervisor_verified_count+'new_verification_count');
     $("#verified_count").html(verified_count.supervisor_verified_count);

}*/

   
 

        $(document).off('click', '#not_verified').on('click', '#not_verified', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});
        $(document).off('click', '#dashlogout').on('click', '#dashlogout', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

/*          $(document).off('click', '#verified').on('click', '#verified', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});*/
 
  
});
