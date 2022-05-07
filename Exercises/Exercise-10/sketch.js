// writeQuote = function () {
//     var quote = new Array();
//     quote[0] = "Action is the real measure of intelligence.";
//     quote[1] = "Baseball has the great advantage over cricket of being sooner ended.";
//     quote[2] = "Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one's level of peace of mind.";
//     quote[3] = "A good head and a good heart are always a formidable combination.";
//     var rand = Math.floor(Math.random()*quote.length);
//     document.getElementById('quote').innerHTML = quote[randNum];
//   }

  function writeQuote() {
    var randNum = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[randNum];  }

  var quotes = ["Suckin' at something is the first step at being sorta good at something.\"<br>-  Jake <small><em>(Adventure Time)</em></small>", "\"Either I will find a way, or I will make one.\"<br> - Philip Sidney", "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- Thomas A. Edison", "\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis", "\"If you can dream it, you can do it.\"<br>- Walt Disney", "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali"];