
_.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;
    var result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function() {
      if (!alreadyCalled) {
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // The new function always returns the originally computed result.
      return result;
    };
  };
  var log = function() {
  	return arguments;
  }
  var logOnce = _.once(log);
  console.log(logOnce(1, 2, 3));
  console.log(logOnce('asdf',3,4,5));
// var geo = function(arr) {
//   var a = arr[1]-arr[0];
//   var g = arr[1]/arr[0];
//   var aFlag = true;
//   var gFlag = true;
//   for(var i = 1; i<arr.length; i++) {
//     if(arr[i]-arr[i-1] !== a) {
//       aFlag = false;
//     }
//     if(arr[i]/arr[i-1] !== g) {
//     	gFlag = false;
//     }
//   }
//   if(aFlag) {
//   	return "Arithmetic";
//   } else if(gFlag) {
//   	return "Geometric";
//   } else {
//   	return -1;
//   }
// }

// a = [1,3,5,7];
// console.log(geo(a))

// a = [1,2,4,8]
// console.log(geo(a))

// a = [1,2,4,8,9,.5]
// console.log(geo(a))


// //input is github array of repo objects.  The function gets objects of the languages used in each repo then attaches a language object to each repo object.
// var getLanguages = function(repos) {
// 	return Promise.all(repos.map(function(repo) {
// 		return $$.ajax({
// 			url: repo.languages_url,
// 			type: 'GET'
// 		})
// 	})).then(function(languageObjects) {
// 		for(var i = 0; i<repos.length; i++) {
// 			repos[i].languageObj = languageObjects[i];
// 		};
// 		return repos;
// 	})
// };

// getRepos(url).then(function(repos) {
// 	console.log(repos);
// })

// getRepos(url).then(getLanguages).then(function(languages) {
// 	console.log(languages);
// });








		










// /*
// $(document).ready(function () {
// 	var time = performance.now();
// 	console.log(time);
// 	//$("h1").append(time);

// 	window.navigator.vibrate(20000);

// });
// */

// /*
// var Person = function() {
// 	//this.name = name;
// }
// Person.prototype.p = 'hello';

// var s = new Person();

// Array.prototype.foo = 'foo';

// var a = [1,2]

// var Foo = function Foo(){};
// Foo.prototype.x = 1;
// var FooInstance = new Foo();
// console.log(FooInstance.x); // logs 1
// Foo.prototype.x = 2;
// console.log(FooInstance.x); // logs 2, the FooInstance
// */ 
// /*
// var Person = function() {};
// // all Person instances inherit a legs, arms, and countLimbs properties
// Person.prototype.legs = 2;
// Person.prototype.arms = 2;
// Person.prototype.countLimbs = function() {return this.legs + this.arms;};
// var chuck = new Person();
// console.log(chuck.countLimbs()); // logs 4
// */
// /*
// var Speakers = function(vol) {
// 	var obj = Object.create(Speakers.prototype)
// 	obj.vol = vol;
// 	return obj;
// }
// Speakers.prototype.sound = 'yes';

// var rok = Speakers(10);
// */

// /*
// var Speakers = function(vol) {
// 	this.vol = vol;
// }
// Speakers.prototype.sound = 'yes';

// var Rockits = function(color, vol) {
// 	this.color = color;
// 	Speakers.call(this, vol)
// }
// Rockits.prototype = Object.create(Speakers.prototype);
// Rockits.prototype.constructor = Rockits;
// Rockits.prototype.shape = 'rectangular';
// var rok = new Rockits('black', 10);

// //custom events
// var elem = document.querySelector('body');
// var eventTime = new CustomEvent('build', {'detail': elem.dataset.time});
// var eventHandler = function(e) {
// 	console.log('the time is '+ e.detail);
// };
// document.elm.addEventListener('build', eventHandler() );

// document.elem.dispatchEvent(eventTime);
// */



