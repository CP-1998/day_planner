$('#currentDay').append(moment().format("MMM Do YY"));
let realTime = $('#first').text();
if (realTime != moment().format('h a')) {
  $('#eiAM').css({ 'background-color': 'red' })
}
let realTime2 = $('#second').text()
if (realTime2 != moment().format('h a')) {
  $('#tenAM').css({ 'background-color': 'red' })
}
let realTime3 = $('#third').text()
if (realTime3 != moment().format('h a')) {
  $('#twelAM').css({ 'background-color': 'red' })
} else { $('#twelAM').css({ 'background-color': 'green' }) }
let realTime4 = $('#fourth').text()
let realTime5 = $('#fifth').text()
let realTime6 = $('#sixth').text()
let realTime7 = $('#seventh').text()


$('#yo').append(moment().format('h a'))



