Le module :
Et voilà, encore un nouveau terme insensé et une nouvelle chose à apprendre… Où pas vraiment en fait .

Par définition, un module est un fichier contenant plusieurs codes (variables, fonctions, objets, classes etc.) pouvant être appelés dans un autre fichier.
Pensez un peu à vos links css ou vos scripts JS sur vos fichiers html, est bien c’est presque pareil ! Mais attention, je dis presque...

Comment cela fonctionne  ?

Tout d’abbord il nous faut créer une page « app.js » sur laquelle  écrire votre code


  var sayHelloInEnglish= function() {
    return "HELLO";
  }

une fois cela fait, il faut expliquer à l’ordianteur que nous voulons exporter cet element pour l’utiliser sur une autre page JS, que nous allons appeler ici « use.js »



Etape 1, l’export

ici, rien de plus simple, à la fin de votre code, ajoutez :

 module.exports.[le nom que vous voulez]= les nom de votre variable, fonction, etc...

Dans cet exemple, nous aurons ceci :

var sayHelloInEnglish= function() {
    return "HELLO";
}
module.exports.English= sayHelloInEnglish ;

part2 Require :

maintenant que le module est exporté, il faut l’importer dans use.js.
pour se faire, il suffit d’utiliser la méthode « require » qui va aller chercher votre module et le rendre utilisable.

Voici son mode d’emploi, premièrement la méthode doit être appélée dans une varible afin de pouvoir l’utiliser : var Something= require().

Puis il faut indiquer la position du module à la méthode require, tout comme le href dans un link css : var Something= require(«app.js ») ;

Et voila, votre fonction est importée, maintenant pour l’utiliser il vous suffit de l’appeler sous le nom de votre require plus le nom que vous avez donné à votre export (dans notre cas le Something et le English).

Dans notre exemple :
var Something= require(«app.js ») ;

console.log(Something.English ()) // va nous logger HELLO ;


Pourquoi devoir donner un nom à notre export ?

Très souvant dans des modules, il n’y a pas qu’un seul élément, il faut donc donner un nom à nos différents éléments pour pouvoir les utiliser, par exemple :

var sayHelloInEnglish= function() {
    return "HELLO";
}
var sayHelloInSpanish= function() {
    return "Hola";
}

module.exports.English= sayHelloInEnglish ;
module.exports.Spanish=  sayHelloInSpanish ;

Nous avons maintenant deux fonctions dans un seul module, toutes les deux importables et utilisables sous un seul et même require.

var Something= require(«app.js ») ;

console.log(Something.English ()) // va nous logger HELLO ;
console.log(Something.Spanish ()) // va nous logger Hola ;


Et voilà.





https://www.youtube.com/watch?v=xHLd36QoS4k&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=6
