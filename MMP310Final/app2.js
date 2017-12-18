var url = 'https://deckofcardsapi.com/api/deck/';
var deckId = '';

function loadDeck() {
  var req = new XMLHttpRequest();
  req.open('GET', url + 'new/shuffle', true);
  req.addEventListener('load', function(){
    var response = JSON.parse(req.responseText);
    if ( response.success == true ) {
      deckId = response.deck_id;
    }
    else {
      console.log('Error Loading Deck!');
    }
  });
  req.send(null);
}
function deal( numberOfCards ) {
  var req = new XMLHttpRequest();
  req.open('GET', url + deckId + '/draw/?count=' + numberOfCards, false);
  req.send(null);
  var response = JSON.parse(req.responseText);
  if ( response.success == true ) {
    var cards = response.cards;
    /* Take Some Action With Cards */
  }
  else {
    console.log('Error Drawing Cards!');
  }
}
function BlackJackDeck() {

  this.id = null;

  /*  LOAD DECK  */
  this.loadDeck = function() {
    var self = this;
    var req = new XMLHttpRequest();
    req.open('GET', url + 'new/shuffle', true);
    req.addEventListener('load', function(){
      var response = JSON.parse(req.responseText);
      if ( response.success == true ) {
        self.id = response.deck_id;
      }
      else {
        console.log('Error Loading Deck!');
      }
    });
    req.send(null);
  }

  /*  DEAL  */
  this.draw = function( numberOfCards ) {
    var req = new XMLHttpRequest();
    req.open('GET', url + this.id + '/draw/?count=' + numberOfCards, false);
    req.send(null);
    var response = JSON.parse(req.responseText);
    if ( response.success == true ) {
      return response.cards;
    }
    else {
      console.log('Error Drawing Cards!');
      return null;
    }
  }

  /*  SHUFFLE  */
  this.shuffle = function() {
    var req = new XMLHttpRequest();
    req.open('GET', url + this.id + '/shuffle', true);
    req.addEventListener('load', function(){
      var response = JSON.parse(req.responseText);
      if ( response.success == false ) {
        console.log('Error Shuffling Deck!');
      }
    });
    req.send(null);
  }

} /* end BLACKJACK DECK */



function BlackJackPlayer( name ) {

  this.name = name;
  this.cards = [];
  this.hand = 0;
  this.bust = false;

  /*  ADD CARDS  */
  this.addCards = function(newCards) {
    var self = this;
    newCards.forEach(function(newCard){
      self.cards.push(newCard);
    })
    this.updateScore();
  }

  /*  REMOVE CARDS  */
  this.removeCards = function() {
    this.cards = [];
    this.hand = 0;
    this.bust = false;
  }

  /*  UPDATE SCORE  */
  this.updateScore = function() {
    var self = this;
    self.hand = 0;
    self.cards.forEach(function(card){
      self.hand += cardValues[card.value];
    });
    self.checkAces();
    if (self.hand > 21) {
      self.bust = true;
    }
  }

  /*  CHECK ACES  */
  this.checkAces = function() {
    var self = this;
    if ( self.hand > 21 ) {
      self.cards.forEach(function(card){
        if ( card.value == 'ACE' && self.hand > 21 ) {
          card.value = 'ACE-LOW';
          self.updateScore();
        }
      });
    }
  }

} /* end BLACKJACK PLAYER */

var cardValues = { '1':       1,
                   '2':       2,
                   '3':       3,
                   '4':       4,
                   '5':       5,
                   '6':       6,
                   '7':       7,
                   '8':       8,
                   '9':       9,
                   '10':      10,
                   'JACK':    10,
                   'QUEEN':   10,
                   'KING':    10,
                   'ACE':     11,
                   'ACE-LOW': 1
                 }

function BlackJackGame() {

  this.deck = null;
  this.players = { dealer: null,
                   user:   null
                 }

  /*  DEAL  */
  this.deal = function( player, cards ) {
    player.addCards(cards);
    this.checkForBust(player);
    display.displayCards(player);
    display.updateScoreDisplay(player);
  }

  /*  CHECK FOR BUST  */
  this.checkForBust = function( player ) {
    if ( player.bust ) {
      display.playerBust(player);
      this.results();
    }
  }

  /*  START DEAL  */
  this.startDeal = function() {
    this.deal(this.players.user, this.deck.draw(2));
    this.deal(this.players.dealer, this.deck.draw(1));
    display.adjustButtons('deal');
  }

  /*  USER HIT  */
  this.userHit = function() {
    this.deal(this.players.user, this.deck.draw(1));
  }

  /*  USER STAY  */
  this.userStay = function() {
    this.dealerRound();
    this.results();
    display.adjustButtons('stay');
  }

  /*  DEALER ROUND  */
  this.dealerRound = function() {
    while ( this.players.dealer.hand < 16) {
      this.deal(this.players.dealer, this.deck.draw(1));
    }
  }

  /*  RESULTS  */
  this.results = function() {
    if ( this.players.user.hand > 21 ) {
      display.setRoundResult('You Lose');
    }
    else {
      if ( this.players.dealer.hand > 21 ||
           this.players.user.hand > this.players.dealer.hand) {
        display.setRoundResult('You Win');
      }
      else if ( this.players.dealer.hand > this.players.user.hand ) {
        display.setRoundResult('You Lose');
      }
      else {
        display.setRoundResult('Push');
      }
    }
  }

  /*  END ROUND  */
  this.endRound = function() {
    for ( player in this.players ) {
      this.players[player].removeCards();
      display.removeCardImgs(this.players[player]);
      display.updateScoreDisplay(this.players[player]);
    }
    display.adjustButtons('reset');
    display.resetResultDisplays();
    this.deck.shuffle();
  }

} /* end BLACKJACK GAME */

/*******************************************************************************
 * DISPLAY
*******************************************************************************/
var display = {

  /*  ADJUST BUTTONS  */
  adjustButtons: function( adjustFor ) {
    switch (adjustFor) {
      case 'deal':
        document.getElementById('deal').disabled = true;
        document.getElementById('hit').disabled = false;
        document.getElementById('stay').disabled = false;
        break;
      case 'reset':
        document.getElementById('hit').disabled = true;
        document.getElementById('stay').disabled = true;
        document.getElementById('reset').disabled = true;
        document.getElementById('deal').disabled = false;
        break;
      case 'stay':
        /* fallthrough */
      case 'bust':
        document.getElementById('deal').disabled = true;
        document.getElementById('hit').disabled = true;
        document.getElementById('stay').disabled = true;
        document.getElementById('reset').disabled = false;
        break;
      default:
    }
  },

  /* SET ROUND RESULT */
  setRoundResult: function(result) {
    document.getElementById('roundResult').innerText = result;
  },

  /*  RESET RESULT DISPLAYS  */
  resetResultDisplays: function() {
    document.getElementById('userResult').innerText = '';
    document.getElementById('dealerResult').innerText = '';
    document.getElementById('roundResult').innerText = '';
  },

  /*  UPDATE SCORE DISPLAY  */
  updateScoreDisplay: function( person ) {
    var scoreBoxName = person.name + 'Score';
    document.getElementById(scoreBoxName).innerText = person.hand;
  },

  /*  DISPLAY CARDS  */
  displayCards: function( person ) {
    person.cards.forEach(function(card){
      if ( document.getElementById(card.code) == undefined ) {
        var newCardImg = document.createElement('img');
        newCardImg.id = card.code;
        newCardImg.src = card.image;
        newCardImg.style.width = '100px';
        var personCardSection = person.name + 'Cards';
        document.getElementById(personCardSection).appendChild(newCardImg);
      }
    });
  },

  /* PLAYER BUST */
  playerBust: function( player ) {
    this.adjustButtons('bust');
    var playerResult = player.name + 'Result';
    document.getElementById(playerResult).innerText = 'Bust!';
  },

  /*  REMOVE CARD IMGS  */
  removeCardImgs: function( person ) {
    var cardsDivName = person.name + 'Cards';
    var cardsDiv = document.getElementById(cardsDivName);
    while (cardsDiv.firstChild) {
      cardsDiv.removeChild(cardsDiv.firstChild);
    }
  }

} /* end DISPLAY */
/*******************************************************************************
 *  EVENT LISTENERS
*******************************************************************************/
/*  DEAL  */
document.getElementById('deal').addEventListener('click', function(event){
  game.startDeal();
});

/*  HIT  */
document.getElementById('hit').addEventListener('click', function(event){
  game.userHit();
});

/*  STAY  */
document.getElementById('stay').addEventListener('click', function(event){
  game.userStay();
});

/*  RESET  */
document.getElementById('reset').addEventListener('click', function(event){
  game.endRound();
});

var game = new BlackJackGame();
game.deck = new BlackJackDeck();
game.deck.loadDeck();
game.players['user'] = new BlackJackPlayer('user');
game.players['dealer'] = new BlackJackPlayer('dealer');
display.adjustButtons('reset');
display.resetResultDisplays();