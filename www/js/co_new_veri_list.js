$(document).on('pageshow', '#co_new_veri_list', function(){  
//alert("supervisor_verified_list one");
$('#list_align_co_new_veri').empty();
//alert("supervisor_list_view");

 $(document).off('click', '#codashboardlistinproveri').on('click', '#codashboardlistinproveri', function() {

  $.mobile.changePage($('#co_dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

   
 $(document).off('click', '#inproveri').on('click', '#inproveri', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#new_verilistfromverified').on('click', '#new_verilistfromverified ', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

    $(document).off('click', '#colistviewnew_signout').on('click', '#colistviewnew_signout', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

co_new_veri_list_count_array =  JSON.parse(sessionStorage.getItem("co_new_veri_list_count_array"));
  
	   employment_records_array =  JSON.parse(sessionStorage.getItem("employment_records_array"));
    co_addressid_records_array =  JSON.parse(sessionStorage.getItem("co_addressid_records_array"));
    co_educational_records_array =  JSON.parse(sessionStorage.getItem("co_educational_records_array"));
     co_basic_profile_records_array =  JSON.parse(sessionStorage.getItem("co_basic_profile_records_array"));
  /*  view_assigned_address_download_array =  JSON.parse(sessionStorage.getItem("view_assigned_address_download_array"));*/



var superempty=co_new_veri_list_count_array;

if(superempty == ""){
  alert(superempty+'No record Found');
  $.mobile.changePage($('#co_dashboard'), { transition: "none", changeHash: true, reverse: false });
}

		for(a=0;a<co_new_veri_list_count_array.length;a++){
			co_new = co_new_veri_list_count_array[a];
     alert(co_new.First_Name+'');
var sup=co_new.First_Name;
//qualification_id=superr_objj.type;

if( typeof sup !== 'undefined'){
//alert(superr_objj.city_name)
//var list='<div class="ui-grid-a" > <div class="ui-block-a grid_2" style="margin-top: 16px;"><h2 class="h2_text">Name:'+superr_objj.name+'</h2> <p>'+superr_objj.verification_for+'</p><p>'+superr_objj.qualification_name+'</p></div> <div class="ui-block-b grid_3" style="margin-top: 25px;">  <a href="#pageview" class="ui-corner-all ui-shadow button" onclick="callnextp('+a+')">'+superr_objj.verification_user_id+'View Details</a><br></div> </div><hr>'
//$('#listshow').append(list);

var list_align_verified='<li class="bottom-colour"><a href="#" onclick="callnextco_new('+a+')"><h2 class="">Name:'+co_new.First_Name+'</h2> <p class="paralimit">'+co_new.Doc+'</p><p class="paralimit">'+co_new.Doc+'</p><p class="ui-li-aside"><strong><a href="#" class="ui-btn ui-corner-all ui-icon-carat-r ui-btn-icon-notext" >Carat-r Icon</a></strong></p></a></li>'
$('#list_align_co_new_veri').append(list_align_verified);
//var list_align_verified='<li><a ><h2 style="color: rgb(84, 86, 107);">Name:'+superr_objj.name+'</h2><p>'+superr_objj.verification_for+'</p><p>'+superr_objj.qualification_name+'</p><p></p><p class="ui-li-aside"> <a href="#pageview" class="ui-corner-all ui-shadow button" onclick="callnextpv('+a+')">'+superr_objj.verification_user_id+'View Details</a></p></a></li><hr>'
//$('#list_align_verified').append(list_align_verified);

 }
   
}

});
/*superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
 for(a=0;a<superArray_array.length;a++){
      super_obja = superArray_array[a];

$("#supervisor_name_verilist").text(super_obja.First_Name);
$("#city_name_verilist").text(super_obja.city_name);
    }  
});
*/


function callnextco_new(index){

  superr_objj = co_new_veri_list_count_array[index];
  qualification_id =superr_objj.Verification_Master_Id;
  alert(qualification_id);


//alert('function address id 12 to 15');
        for(a=0;a<co_addressid_records_array.length;a++){
      address_obj = co_addressid_records_array[a];
   
superr_objj = co_new_veri_list_count_array[index];
      h =address_obj.user_id;
     hadd=address_obj.proof_type_id;
  
      g =superr_objj.Verification_Master_Id;
  
if( h == g  ){
address_obja = co_addressid_records_array[a];
alert(address_obja.user_id+'one addrreeedss idddd');
}

    }

  for(a=0;a<co_basic_profile_records_array.length;a++){
      basic_profile_obj = co_basic_profile_records_array[a];
   
superr_objj = co_new_veri_list_count_array[index];
      h =basic_profile_obj.user_id;
  
      g =superr_objj.Verification_Master_Id;
  
if( h == g  ){
basic_profile_obja = co_basic_profile_records_array[a];
alert(basic_profile_obja.user_id+'one basic_profile_obja idddd');
}

    }

/*if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('function eduction id 1 to 5');
    for(a=0;a<educational_records_array.length;a++){
      eductional_obj = educational_records_array[a];

superr_objj = sup_verified_array[index];
      h =eductional_obj.user_id;
       hedu=eductional_obj.education_type;
      //alert(h+'hh');
      g =superr_objj.verification_user_id;
      //alert(g+'gg');
if( h == g && hedu == qualification_id){
eductional_objq = educational_records_array[a];
//alert(eductional_objq.user_id+'educational_records_arrayeducational_records_array'+g);
}

    }
}*/

/*if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('function employmen id 7 to 11');
   for(a=0;a<employment_records_array.length;a++){
      employment_obj = employment_records_array[a];


superr_objj = sup_verified_array[index];
      hu =employment_obj.user_id;
     huemploy=employment_obj.employment_type;
      gu =superr_objj.verification_user_id;
      //alert(g+'gg');
if( hu == gu && huemploy == qualification_id ){
   //alert(hu+'iiiiiiiiiiin');
employment_objad = employment_records_array[a];

//alert(employment_objad.user_id+"emp----o"+employment_objad.employment_type)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
    }
}
*/

/*var eductional_objq=eductional_objq;
var employment_objad=employment_objad;
var address_obja=address_obja;

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
 //alert('currentob education succes');
 sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobj_educational_records_veri",JSON.stringify(eductional_objq));
   $.mobile.changePage($('#supervisor_verified_view_inside'), { transition: "none", changeHash: true, reverse: false });
       return false;
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
 //alert('currentob address succes');
  sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
         sessionStorage.setItem("currentobja_addressid_veri",JSON.stringify(address_obja ));
   $.mobile.changePage($('#supervisor_verified_view_inside'), { transition: "none", changeHash: true, reverse: false });
       return false;
}
         
 if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
 //alert('currentob employment succes');
 sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
         sessionStorage.setItem("currentobja_emnployment_veri",JSON.stringify(employment_objad ));
   $.mobile.changePage($('#supervisor_verified_view_inside'), { transition: "none", changeHash: true, reverse: false });
       return false;
}*/
   
         
         


    
        }