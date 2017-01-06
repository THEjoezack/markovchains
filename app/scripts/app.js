/**
 * scripts/app.js
 *
 * This is a sample CommonJS module.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

function App() {
  console.log('app initialized');
}

module.exports = App;

App.prototype.beep = function () {
  console.log('boop');
};

var MarkovChain = require('markovchain');

$('#generate').on('click', function() {
  debugger;
  var inputData = $('#input').val();
  var m = new MarkovChain(inputData);
  $('#output').val(m.end().process());
});