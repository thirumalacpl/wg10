$(document).on('pageshow', '#pagedesign_not_veri', function(){  
//alert("supervisor_view_inside");
$('#sda_newverinot').empty();
$('#lii_newverinot').empty();
$('.document_imag_inproone_notveria').empty();
$('.document_imag_inproone_notverib').empty()
$('.document_imag_inproone_notveric').empty()
$('.document_imag_inproone_notverid').empty()
$('.document_imag_inproone_notverie').empty()
$('.document_imag_inproone_notverif').empty()


$(document).off('click', '#dashinvnnn').on('click', '#dashinvnnn', function() {

$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inprogressinvnnn').on('click', '#inprogressinvnnn', function() {

$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

/*$(document).off('click', '#verifiedinv').on('click', '#verifiedinv', function() {

$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});*/

$(document).off('click', '#verifiedinvnnn').on('click', '#verifiedinvnnn', function() {

$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#not_verifiedinvnnn').on('click', '#not_verifiedinvnnn', function() {

$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#completedinvnnn').on('click', '#completedinvnnn', function() {

  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutinvnnn').on('click', '#signoutinvnnn', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#bfg_not').on('click', '#bfg_not', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});

/*end*/


//alert("success");
$('.document_imag').empty();
$('#percent').empty();
$('#select').empty();
//$('#name').empty();
assignValues();




function assignValues(){
  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
  user_obja = JSON.parse(sessionStorage.getItem("currentobj_not_veri"));
//alert(user_obja);
currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_not_addressid"));
//alert( currentobja_addressid+ 'address no');
currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_not_educational_records"));
//alert( currentobj_educational_records.user_id+'education no');
//currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobj_employment_records"));
addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));

currentobj_employment_records =  JSON.parse(sessionStorage.getItem("currentobj_not_employment_records"));
//alert(currentobj_employment_records.user_id+'employment');

employment_upload_array = JSON.parse(sessionStorage.getItem("multiple_documents_array"));

superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));

supervisor_final_commanda = JSON.parse(sessionStorage.getItem("supervisor_final_commanda"));


regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
username=regionArray_array.username;
//alert(username);
$("#userlistinverinot").text(username);

var qualification_id = user_obja.type;
var city_name=user_obja.city_name;
var state=user_obja.state;
var remarksnot=user_obja.sremarks;
//alert(remarksnot);
// alert(qualification_id);
var verification_user_id = user_obja.verification_user_id;
// alert(verification_user_id);

var region_num=region_array.region;
//alert(region_array.region+'regionnnnnn');

//alert(supervisor_final_commanda);

var fin=supervisor_final_commanda;

if( fin !== null){
$('#final_commentnotsuper').text(supervisor_final_commanda.final_Command);
}
$('#notverifiedremarks').text(remarksnot);



var select='<div class="ui-select"><div id="status_val-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><div class="ui-select"><div id="status_val-button" class="ui-btn  ui-btn-icon-right ui-corner-all ui-shadow"><span>Select Status</span><select id="status_val"><option value="New">Select Status</option><option value="Inprogress">Inprogress</option> </select></div></div></div></div>' 
//var select=' <div class="ui-select"><div id="status_val-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><div class="ui-select"><div id="status_val-button" class=""><span>Select Status</span><select id="status_val"> <option value="New">Select Status</option><option value="Inprogress">Inprogress</option> </select></div></div></div></div>'
//var select=' <div class="ui-select"><div id="status_val-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><div class="ui-select"><div id="status_val-button"><select id="status_val"><option value="New">Select Status</option> <option value="Inprogress">Inprogress</option></select></div></div></div></div>'
$('#select').append(select);



if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
  //alert('emplo inside');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_final_salary+'</p><span class="pri_span">Salary</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+user_obja.city_name+'</p><span class="pri_span">City</span></div>'
$('#sda_newverinot').append(sd);
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+currentobj_employment_records.working_from+'&nbsp;To &nbsp;'+currentobj_employment_records.working_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newverinot').append(liii);


/*var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Degree</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" alt=""><p class="pri_p">'+currentobj_employment_records.employee_final_salary+'</p><span class="pri_span">Salary</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" alt=""><p class="pri_p">'+user_obja.city_name+'</p><span class="pri_span">City</span></div>'
$('#sda_newverinot').append(sd);
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Tam</p></li>'
$('#lii_newverinot').append(liii);
*/
  var oneemploy = new Array(10);
  k = -1;
  for(a=0;a<employment_upload_array.length;a++){

    employimg_obj = employment_upload_array[a];

    var empimgempl=employimg_obj.verification_type_id;
    var empidempl=employimg_obj.verification_master_id;


    if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert("if employimg_obj");
//alert(currentobj_educational_records.percentage+"if empimg after");
//alert(empid+"if empid after");
//alert(verification_user_id+"if verification_user_id after");
//var oneemploy=employimg_obj.document;


k++;
oneemploy[k]=employimg_obj.document;


if ( k == 0){
  var one=oneemploy[k];
//alert(one+'oneoooooooooooooooooooooooooo');
$('.document_imag_inproone_notveric').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


}
if ( k == 1){
  var oneo=oneemploy[k];
//alert(oneo+'two');
$('.document_imag_inproone_notverib').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( k == 2){
  var oneoo=oneemploy[k];
//alert(oneoo+'3');
$('.document_imag_inproone_notveria').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneoo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( k == 3){
  var oneooo=oneemploy[k];
// alert(oneooo+'4');
$('.document_imag_inproone_notverid').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneooo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( k == 4){
  var oner=oneemploy[k];
// alert(oner+'5');
$('.document_imag_inproone_notverie').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

if ( k == 5){
  var oner=oneemploy[k];
// alert(oner+'6');
$('.document_imag_inproone_notverif').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}


$('#from_not_veri').html(' <h1 class="sdah1">From-To</h1><p class="sdap">'+currentobj_employment_records.working_from+'</p><p class="sdap">'+currentobj_employment_records.working_to+'</p>');
$('#designation_not_Veri').html('<h1 class="sdah1">Company</h1><p class="sdap">'+currentobj_employment_records.employer_name+'</p>');
$('#percentage_not_veriqw').html('<h1 class="sdah1">Salary</h1><p class="sdap">'+currentobj_employment_records.employee_final_salary+'</p>');
$('#year_of_passing_veriiiog').html('<h1 class="sdah1">location</h1><p class="sdap">'+currentobj_employment_records.employer_addressone+'</p>');
$('#institute_inproo_not_veri').text(user_obja.qualification_name);
$('#address_inproo_not_veri').text(currentobj_employment_records.employer_addressone);
$('#pincode_inproo_not_veri').text(currentobj_employment_records.employer_zipcode);


}

}

}


if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
  //alert('if education');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.year_of_passing+'</p><span class="pri_span">Year_of_passing</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png"  class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.percentage+'</p><span class="pri_span">Percentage</span></div>'
$('#sda_newverinot').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newverinot').append(liii);


/*  var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Degree</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" alt=""><p class="pri_p">'+currentobj_educational_records.year_of_passing+'</p><span class="pri_span">Year_of_passing</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" alt=""><p class="pri_p">'+currentobj_educational_records.percentage+'</p><span class="pri_span">Percentage</span></div>'
$('#sda_newverinot').append(sd);
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li>'
$('#lii_newverinot').append(liii);
 */
  var oneemp = new Array(10);
  j = -1;
  for(a=0;a<employment_upload_array.length;a++){

    employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");
//alert(empid+'empid');
if(empimg == qualification_id && empid == verification_user_id ) {

//var oneemp=employimg_obj.document;
j++;
oneemp[j]=employimg_obj.document;
var arr_a=oneemp[0];
var arr_b=oneemp[1];
var arr_c=oneemp[2];
//alert(a+"a data");
/// alert(arr_a+'0');
//alert(arr_b+'1');
//alert(arr_c+'2');

if ( j == 0){
  var one=oneemp[j];
//alert(one+'one');
$('.document_imag_inproone_notveric').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


}
if ( j == 1){
  var oneo=oneemp[j];
//alert(oneo+'two');
$('.document_imag_inproone_notverid').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 2){
  var oneoo=oneemp[j];
//alert(oneoo+'3');
$('.document_imag_inproone_notverib').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneoo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 3){
  var oneooo=oneemp[j];
//alert(oneooo+'4');
$('.document_imag_inproone_notveria').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneooo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 4){
  var oner=oneemp[j];
//alert(oner+'5');
$('.document_imag_inproone_notverie').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

if ( j == 5){
  var oner=oneemp[j];
//alert(oner+'6');
$('.document_imag_inproone_notverif').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

/*$('#from').html(' <p class="tabsss">From & To</p><p>'+currentobj_educational_records.from+'</p><p>'+currentobj_educational_records.to+'</p>');
$('#designation').html('<p class="tabsss ">Qualification</p><p>'+user_obja.qualification_name+'</p>');
$('#percentage').html('<p class="tabsss ">Percentage</p><p>'+currentobj_educational_records.percentage+'%</p>');
$('#year_of_passing').html('<p class="tabsss ">year_of_passing</p><p>'+currentobj_educational_records.year_of_passing+'</p>');
$('#institute_inproo').text(currentobj_educational_records.institute_name);
$('#address_inproo').text(currentobj_educational_records.address);
$('#pincode_inproo').text(currentobj_educational_records.pincode);
*/
$('#from_nt').html(' <h1 class="sdah1">From-To</h1><p class="sdap">'+currentobj_educational_records.from+'</p><p class="sdap">'+currentobj_educational_records.to+'</p>');
$('#designation_nt').html('<h1 class="sdah1">Qualification</h1><p class="sdap">'+user_obja.qualification_name+'</p>');
$('#percentage_nt').html('<h1 class="sdah1">Percentage</h1><p class="sdap">'+currentobj_educational_records.percentage+'%</p>');
$('#year_of_passing_nt').html('<h1 class="sdah1">year_of_passing</h1><p class="sdap">'+currentobj_educational_records.year_of_passing+'</p>');
$('#institute_inproo_nt').text(currentobj_educational_records.institute_name);
$('#address_inproo_nt').text(currentobj_educational_records.address);
$('#pincode_inproo_nt').text(currentobj_educational_records.pincode);


}

}


}


if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
  //alert("if addressid");
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.qualification_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newverinot').append(liii);

/*var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.qualification_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Tam</p></li>'
$('#lii_newverinot').append(liii);
*/
  var oneaddress = new Array(10);
  j = -1;
  for(a=0;a<addressid_records_array.length;a++){
//alert("addressid for");
addressimg_obj = addressid_records_array[a];
// alert(addressimg_obj.document_name);
var oneimg=addressimg_obj.proof_type_id;
var oneid=addressimg_obj.user_id;
//alert(qualification_id+"oneimg");

if(oneimg == qualification_id && oneid == verification_user_id ){
//alert("if address proof");
j++;
oneaddress[j]=addressimg_obj.document_name;

if ( j == 0){
  var one=oneaddress[j];
  //alert(one+'oneiiiiiiiiiiiiiiiiiiiiiiiiiii');
  $('.document_imag_inproone_notveric').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


}
if ( j == 1){
  var oneo=oneaddress[j];
//alert(oneo+'two');
$('.document_imag_inproone_notverib').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 2){
  var oneoo=oneaddress[j];
//alert(oneoo+'3');
$('.document_imag_inproone_notveria').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneoo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 3){
  var oneooo=oneaddress[j];
//alert(oneooo+'4');
$('.document_imag_inproone_notverid').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneooo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 4){
  var oner=oneaddress[j];
// alert(oner+'5');
$('.document_imag_inproone_notverie').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

if ( j == 5){
  var oner=oneaddress[j];
//alert(oner+'6');
$('.document_imag_inproone_notverif').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}



$('#institute_inproo_notveri').text(user_obja.qualification_name);
// $('#address_inproo').text(currentobj_educational_records.address);
// $('#pincode_inproo').text(currentobj_educational_records.pincode);



}

}

}

$(document).off('click', '#inprogress').on('click', '#inprogress', function() { 
  var status_val=document.getElementById('status_val').value;
  var remark=document.getElementById('remark').value;
//alert(region_num);

$.ajax({url: "http://staging.eimpressive.com/slimrestapi-watch/supervisor_status_to_inprogress.php?status_val="+status_val+"&verification_user_id="+verification_user_id+"&remark="+remark+"&qualification_id="+qualification_id+"&region_num="+region_num,
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
      sessionStorage.setItem("new_verification_count_array",JSON.stringify(result[0]));
      sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[1]));
      sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[2]));
      $.mobile.loading().hide();
      $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
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


}






});









