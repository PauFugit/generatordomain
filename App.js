var pronoun = ['the','our','this', 'those'];
var adj = ['great', 'big', 'magical', 'amazing'];
var noun = ['jogger','racoon', 'cat', 'dolphin'];

let pronounIndex = Math.floor(Math.random() * pronoun.length);
let adjIndex = Math.floor(Math.random() * adj.length);
let nounIndex = Math.floor(Math.random() * noun.length);

let resultado=pronoun[pronounIndex]+adj[adjIndex]+noun[nounIndex]+ '.com';
console.log(resultado);

