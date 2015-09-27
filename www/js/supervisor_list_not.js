$(document).on('pageshow', '#supervisor_list_notveri', function(){  
//alert("supervisor_list_notveri one");
$('#lis_notveri').empty();
//alert("supervisor_list_view");

$(document).off('click', '#dashinvn').on('click', '#dashinvn', function() {

$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inprogressinvn').on('click', '#inprogressinvn', function() {

$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

/*$(document).off('click', '#verifiedinv').on('click', '#verifiedinv', function() {

$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});*/

$(document).off('click', '#verifiedinvn').on('click', '#verifiedinvn', function() {

$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#not_verifiedinvn').on('click', '#not_verifiedinvn', function() {

$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#completedinvn').on('click', '#completedinvn', function() {

  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutinvn').on('click', '#signoutinvn', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

not_veri_array =  JSON.parse(sessionStorage.getItem("supervisor_not_verified_array"));

addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));
employment_records_array =  JSON.parse(sessionStorage.getItem("employment_records_array"));
educational_records_array =  JSON.parse(sessionStorage.getItem("educational_records_array"));
supervisor_final_command_array =  JSON.parse(sessionStorage.getItem("supervisor_final_command_array"));
//employment_upload_array =  JSON.parse(sessionStorage.getItem("employment_upload_array"));

regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
username=regionArray_array.username;
//alert(username);
$("#userlistinvn").text(username);

var superempty=not_veri_array;

if(superempty == ""){
alert('No record Found');
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}

//alert(not_veri_array);
for(a=0;a<not_veri_array.length;a++){
  super_obj = not_veri_array[a];
// alert(super_obj.verification_user_id+'superArray'+super_obj.qualification_id);

qualification_id=super_obj.type;
//alert(qualification_id);

var sup=super_obj.name;

var date_new=super_obj.assigned_on;
//alert(date_new);
var s = date_new;
var bits = s.split(/\D/);
var date = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);

var date=date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear();


if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){

//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnotveri('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs"><h2 class="li_h2">'+super_obj.First_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">11/2/2015</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnotveri('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.taskname+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_notveri').append(lis);

}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){

//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnotveri('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs"><h2 class="li_h2">'+super_obj.First_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">11/2/2015</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnotveri('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.taskname+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_notveri').append(lis);
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){

//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnotveri('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs"><h2 class="li_h2">'+super_obj.First_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">11/2/2015</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnotveri('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.taskname+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_notveri').append(lis);
}

//var lis='<li class="bottom-colour"><a href="#" onclick="callnextpnotveri('+a+')"><h2 class="">Name:'+super_obj.name+'</h2> <p class="paralimit">'+super_obj.verification_for+'</p><p class="paralimit">'+super_obj.qualification_name+'</p><p class="ui-li-aside"><strong><a href="#" class="ui-btn ui-corner-all ui-icon-carat-r ui-btn-icon-notext" >Carat-r Icon</a></strong></p></a></li>'
//$('#lis_notveri').append(lis);





}



});


function callnextpnotveri(index){



  super_obj = not_veri_array[index];
  qualification_id =super_obj.type;

  //alert(qualification_id +'hw');

  if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('function address id 12 to 15');
for(a=0;a<addressid_records_array.length;a++){
  address_obj = addressid_records_array[a];

  super_obj = not_veri_array[index];
  h =address_obj.user_id;
  hadd=address_obj.proof_type_id;

  g =super_obj.verification_user_id;

  if( h == g && hadd == qualification_id){
    address_objag = addressid_records_array[a];
    //alert(address_objag.user_id+'addressid_records_array'+g);
  }

}
}

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('function eduction id 1 to 5');
for(a=0;a<educational_records_array.length;a++){
  eductional_obj = educational_records_array[a];

  super_obj = not_veri_array[index];
  h =eductional_obj.user_id;
  hedu=eductional_obj.education_type;
//alert(hedu+'hdeducompare'+qualification_id); 
g =super_obj.verification_user_id;
//alert(g+'gg');

if( h == g && hedu == qualification_id){
/*   alert(h+'inside');
alert(hedu);
alert(g);
alert(qualification_id);*/
eductional_objaa = educational_records_array[a];
//alert(hedu+'heducompare'+qualification_id); 
//alert(eductional_objaa+"inside eductional_objaa");
//alert(eductional_objaa.user_id+'educational_records_arrayeducationalttttttttttttt_records_array'+g);
}

}
}

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('function employmen id 7 to 11');
for(a=0;a<employment_records_array.length;a++){
  employment_obj = employment_records_array[a];

  super_obj = not_veri_array[index];
  hu =employment_obj.user_id;
  huemploy=employment_obj.employment_type;
  gu =super_obj.verification_user_id;
//alert(gu+'gg'+hu+'hu');
//alert(huemploy+qualification_id)
if( hu == gu && huemploy == qualification_id ){
  //alert(hu+'iiiiiiiiiiin'+gu);
  //alert(huemploy+'iiiiiiiiiiin'+qualification_id);
  employment_objad = employment_records_array[a];

  //alert(employment_objad.user_id+"emp----o"+employment_objad.employment_type)

}
}
}

var final = supervisor_final_command_array;
//alert(final);
if( final !== null){
for(a=0;a<supervisor_final_command_array.length;a++){
  supervisor_final_command = supervisor_final_command_array[a];
  super_obj = not_veri_array[index];
 

  hj =supervisor_final_command.verification_id;
  huemploy=supervisor_final_command.type;
  gj =super_obj.verification_user_id;
  if( hj == gj && huemploy == qualification_id){
  // alert("if log");
  supervisor_final_commanda = supervisor_final_command_array[a];
 //alert(supervisor_final_commanda.verification_id);
}

}
}

var supervisor_final_commanda=supervisor_final_commanda;
var eductional_objaa=eductional_objaa;
var employment_objad=employment_objad;
var address_objag=address_objag;

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('currentob education succes');
if(supervisor_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_not_veri",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_not_educational_records",JSON.stringify(eductional_objaa));
$.mobile.changePage($('#pagedesign_not_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj_not_veri",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_not_educational_records",JSON.stringify(eductional_objaa));
$.mobile.changePage($('#pagedesign_not_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('currentob address succes');
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_not_veri",JSON.stringify(super_obj));
sessionStorage.setItem("currentobja_not_addressid",JSON.stringify(address_objag ));
$.mobile.changePage($('#pagedesign_not_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj_not_veri",JSON.stringify(super_obj));
sessionStorage.setItem("currentobja_not_addressid",JSON.stringify(address_objag ));
$.mobile.changePage($('#pagedesign_not_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('currentob employment succes');
if(supervisor_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_not_veri",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_not_employment_records",JSON.stringify(employment_objad));
$.mobile.changePage($('#pagedesign_not_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj_not_veri",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_not_employment_records",JSON.stringify(employment_objad));
$.mobile.changePage($('#pagedesign_not_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}

/*if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('currentob education succes');
sessionStorage.setItem("currentobj_not_veri",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_not_educational_records",JSON.stringify(eductional_objaa));
$.mobile.changePage($('#pagedesign_not_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('currentob address succes');
sessionStorage.setItem("currentobj_not_veri",JSON.stringify(super_obj));
sessionStorage.setItem("currentobja_not_addressid",JSON.stringify(address_objag ));
$.mobile.changePage($('#pagedesign_not_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('currentob employment succes');
sessionStorage.setItem("currentobj_not_veri",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_not_employment_records",JSON.stringify(employment_objad));
$.mobile.changePage($('#pagedesign_not_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}*/


}
