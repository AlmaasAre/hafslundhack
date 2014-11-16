// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic.contrib.ui.tinderCards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

   $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.usage', {
      url: "/usage",
      views: {
        'menuContent' :{
          templateUrl: "templates/usage.html",
          controller:'UsageController'
        }
      }
    })
   .state('app.yes', {
       url: "/yes",
       views: {
           'menuContent' :{
               templateUrl: "templates/yes.html",
               controller:'YesCtrl'
           }
       }
   })
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })

      .state('app.challenges', {
          url: "/challenges",
          views: {
              'menuContent' :{
                  templateUrl: "templates/challenges.html",
                  controller: 'ChallengesCtrl'
              }
          }
      })

    .state('app.challenge', {
      url: "/challenges/:challengeId",
      views: {
        'menuContent' :{
          templateUrl: "templates/challenge.html",
          controller: 'ChallengeCtrl'
        }
      }
    })

       .state('app.tips', {
           url: "/tips",
           views: {
               'menuContent' :{
                   templateUrl: "templates/tips.html",
                   controller: 'TipsCtrl'
               }
           }
       })

       .state('app.tip', {
           url: "/tips/:tipId",
           views: {
               'menuContent' :{
                   templateUrl: "templates/tip.html",
                   controller: 'TipCtrl'
               }
           }
       })

      .state('app.green', {
          url: "/green",
          views: {
              'menuContent' :{
                  templateUrl: "templates/green.html",
                  controller: 'GreenCtrl'
              }
          }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

