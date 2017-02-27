// console.log('jquery loaded');

$(document).ready(function() {

function currentJokes(){
  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(response){
      // console.log('response ', response);;
    }
  }); //ends ajax
}

//2:37pm take added joke and post to DOM

// var newJokeObject;

$('#submitJoke').on('click', function(){
  // console.log('button working');
  var newJoker = $('#jokerNameInput').val();
  var newJoke = $('#jokerJokeInput').val();
  var newPunchline = $('#jokerPunchlineInput').val();
  var newJokeObject = {
    whoseJoke: newJoker,
    jokeQuestion: newJoke,
    punchline: newPunchline
  };
  $('#appendJokes').text(newJokeObject);
  console.log(newJokeObject);
  $.ajax({
    type: 'POST',
    url: '/newJoke',
    data: newJokeObject,
    success: function(response){
      // console.log('response: ', response);
      currentJokes();
    },
    // error: function(error){
    //   console.log('error ', error);
    // }
  }); //ends ajax



});//ends button click

// 3:55pm get current joeks displayed on DOM!


}); //ends doc ready



// //2:59pm this stuff? append? blah
// function jokesOnDom(jokesList){
//   $('#showJoke').text('#appendJokes');
// }
