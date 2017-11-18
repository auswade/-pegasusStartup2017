$(window).on('load', function() {
  $.getJSON("http://localhost:9000/api/horse", function (data) {

    console.log(data);
    //Stats
    document.getElementById('horsename').innerHTML = data.horsename;
    document.getElementById('horsetype').innerHTML = data.horsetype;
    document.getElementById('competingat').innerHTML = data.competingat;
    document.getElementById('appointment').innerHTML = data.appointment;

    //Personal
    document.getElementById('dob').innerHTML = data.dob;
    document.getElementById('breed').innerHTML = data.breed;
    document.getElementById('sire').innerHTML = data.sire;
    document.getElementById('dam').innerHTML = data.dam;
    document.getElementById('gsire').innerHTML = data.gsire;
    document.getElementById('damsire').innerHTML = data.damsire;

    //Fei
    document.getElementById('ea').innerHTML = data.ea;
    document.getElementById('fei').innerHTML = data.fei;
    document.getElementById('iq').innerHTML = data.iq;

    //Care Instructions
    document.getElementById('feed').innerHTML = data.feed;
    document.getElementById('supplements').innerHTML = data.supplements;
    document.getElementById('rugging').innerHTML = data.rugging;
    document.getElementById('medications').innerHTML = data.medications;
    document.getElementById('notes').innerHTML = data.notes;

    //Weekly Schedule
    // document.getElementById('schedmon').innerHTML = data.schedmon;
    // document.getElementById('schedtues').innerHTML = data.schedtues;
    // document.getElementById('schedwed').innerHTML = data.schedwed;
    // document.getElementById('schedthurs').innerHTML = data.schedthurs;
    // document.getElementById('schedfri').innerHTML = data.schedfri;
    // document.getElementById('schedsat').innerHTML = data.schedsat;
    // document.getElementById('schedsun').innerHTML = data.schedsun;
  });
})

// window.document.onload = function () {
//   console.log("hello World");
//   console.log(document.getElementById('horsename').innerHTML);
//   document.getElementById('dob').innerHTML = "23/05/1996";
//
//   $.getJSON("http://localhost:8080/", function (data) {
//     //Stats
//     document.getElementById('horsename').innerHTML = data.horsename;
//     document.getElementById('horsetype').innerHTML = data.horsetype;
//     document.getElementById('appointment').innerHTML = data.appointment;
//
//     //Personal
//     document.getElementById('dob').innerHTML = data.dob;
//     document.getElementById('breed').innerHTML = data.breed;
//     document.getElementById('sire').innerHTML = data.sire;
//     document.getElementById('dam').innerHTML = data.dam;
//     document.getElementById('gsire').innerHTML = data.gsire;
//     document.getElementById('damsire').innerHTML = data.damsire;
//
//     //Fei
//     document.getElementById('fei').innerHTML = data.fei;
//
//     //Care Instructions
//     document.getElementById('feed').innerHTML = data.feed;
//     document.getElementById('supplements').innerHTML = data.supplements;
//     document.getElementById('rugging').innerHTML = data.rugging;
//     document.getElementById('medications').innerHTML = data.medications;
//     document.getElementById('notes').innerHTML = data.notes;
//
//     //Weekly Schedule
//     document.getElementById('schedmon').innerHTML = data.schedmon;
//     document.getElementById('schedtues').innerHTML = data.schedtues;
//     document.getElementById('schedwed').innerHTML = data.schedwed;
//     document.getElementById('schedthurs').innerHTML = data.schedthurs;
//     document.getElementById('schedfri').innerHTML = data.schedfri;
//     document.getElementById('schedsat').innerHTML = data.schedsat;
//     document.getElementById('schedsun').innerHTML = data.schedsun;
//   });
// }