var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function(){
  var $nums = MatchGame.generateCardValues();
  MatchGame.renderCards($nums,'#game');
});

/*
  Generates and returns an array of matching card values.
 */
var numPairs = 8;
MatchGame.generateCardValues = function () {
  var $values1 = [];
  var x = 1;
  while (x<=numPairs) {
    $values1.push(x);
    $values1.push(x);
    x++;
  }

  var $values2 = [];
  x = numPairs * 2;
  var y = 0;
  while (x>0) {
    y = Math.floor((Math.random()*(x)));
    $values2.push($values1[y]);
    $values1.splice(y, 1);
    x--;
  }
  return $values2;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var x = 0;
  var y = cardValues.length;
  var $card;
  $($game).data("flipped", []);
  var colorList = ['hsl(25, 85%, 65%)', 'hsl(55, 85%, 65%)', 'hsl(90, 85%, 65%)', 'hsl(160, 85%, 65%)', 'hsl(220, 85%, 65%)', 'hsl(265, 85%, 65%)', 'hsl(310, 85%, 65%)', 'hsl(360, 85%, 65%)'];
  while (x<y) {
    $($card).data( {number: cardValues[x]} );
    console.log($($card).data("number"));
    $($game).append("<div class='col-xs-3 card up' style='background-color: " + colorList[cardValues[x]] + "'>" + cardValues[x] + "</div>");
    x++;
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
