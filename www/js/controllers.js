angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {
  // Form data for the login modal
  $scope.loginData = {};

  //Global data for the application
    $rootScope.challenges = [
        {
            id: 1,
            title: 'Kjøp sparedusj',
            description: '<span>Montering av sparedusj er et sparetiltak som har meget god lønnsomhet. Tommelfinger-regelen sier: <br/>'
            +'Skifter du til sparedusj, halverer du dusjkostnadene'
            +'dine. Eldre dusjer bruker opptil 24 liter per minutt –'
            +'nye sparedusjer 6-10 liter i minuttet.</span>',
            ingress:'Montering av sparedusj er et godt tiltak.',
            option:'Kjøp sparedusj',
            choices: ['Jeg vil gjøre dette', 'Gjør det allerede'],
            href: '#/app/challenges/1',
            icon:'ion-android-lightbulb',
            imgUrl: 'http://www.telinetprodukter.no/media/catalog/product/cache/2/image/265x265/9df78eab33525d08d6e5fb8d27136e95/s/p/sparedusj_small.jpg',
            horse:true
        },
        {
            id: 2,
            title: 'Senk temperaturen om natten',
            description: '<span>Nattsenking av temperaturen i boligen '
            +'er ett av de enkle sparetiltakene som gir størst effekt.'
            +'For hver grad du senker temperaturen sparer du ca 5%'
            +'på strømutgiftene til oppvarming!',
            ingress:'Nattsenking av temperaturen i boligen er ett av de enkle sparetiltakene som gir størst effekt.',
            option:'Senk nattemperaturen de neste 7 dagene</span>',
            choices: ['Jeg vil gjøre dette', 'Gjør det allerede'],
            href: '#/app/challenges/2',
            icon:'ion-android-lightbulb',
            horse:true
        },
        {
            id: 3,
            title: 'Koble fra elektronisk utstyr i hvilemodus',
            description: '<span>2% av alt forbruk går til elektroniske komponenter som ikke er i bruk.'
                +' Når TV ikke er i bruk, bør den slås helt av.</span>',
            ingress:'2% av alt forbruk går til elektroniske komponenter som ikke er i bruk.',
            option:'Koble fra alt elektronisk utstyr om natten',
            choices: ['Jeg vil gjøre dette', 'Gjør det allerede'],
            href: '#/app/challenges/3',
            icon:'ion-android-lightbulb',
            horse:true
        }
    ];

    $rootScope.tips = [
        {
            id: 1,
            title: 'Spar strøm når du sover',
            description: '<span>Du har et høyt strømforbruk om natten. Dette er '
            +'ofte grunnet lys og varme i rom som ikke er i bruk.'
            +'Her er en liste med enkle tiltak:</span>',
            choices:['Slå av lys i ubrukte rom',
                'Slå av el-produkter i hvilemodus'],
            ingress:'Du har et høyt strømforbruk om natten. Dette er ofte grunnet lys og varme i rom som ikke...',
            href: '#/app/tips/1',
            icon:'ion-pie-graph',
            imgUrl: 'http://i.c-b.co/is/image/Crate/LangBedQueenS14',
            challenges:[
                $rootScope.challenges[1],
                $rootScope.challenges[2]
            ]
        },
        {
            id: 2,
            title: 'Reduser forbruket når huset står tomt',
            description: '<span>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.</span>',
            ingress:'Eu sollicitudin urna dolor sagittis lacus.',
            choices:['Slå av lys i ubrukte rom',
                'Slå av el-produkter i hvilemodus'],
            icon:'ion-pie-graph'
        }
    ];

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/home-modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeHomeModal = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.homeModal = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.directive('noScroll', function($document) {

    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {

            $document.on('touchmove', function(e) {
                e.preventDefault();
            });
        }
    }
})

.controller('GreenCtrl', function($scope, $stateParams) {

})

.controller('YesCtrl', function($scope, $stateParams) {

        jQuery(function () {
            jQuery('#yes-container').highcharts({

                exporting: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'areaspline',
                    height: 225
                },
                title: {
                    text: 'Forbruk oktober'
                },
                xAxis: {
                    categories: [
                        '1', '2', '3', '4', '5', '6', '7'
                    ],
                    labels: {
                        enabled: false
                    }
                },
                yAxis: {
                    title: {
                        text: null
                    },
                    labels: {
                        enabled: false
                    }
                },
                tooltip: {
                    shared: true,
                    valueSuffix: ' units'
                },
                plotOptions: {
                    areaspline: {
                        fillOpacity: 0.5
                    }
                },
                series: [{
                    color: '#0063A2',
                    name: '2014',
                    enableMouseTracking: false,
                    marker: {
                        enabled: false
                    },
                    data: [10, 8, 7.5, 6.5, 7, 9.5, 9]
                }, {
                    type: 'spline',
                    color: '#000000',
                    name: '2013',
                    enableMouseTracking: false,
                    dashStyle: 'longDash',
                    marker: {
                        enabled: false
                    },
                    data: [13, 12, 9.5, 9, 10, 11, 11.5]
                }]
            });
        });



})

.controller('ChallengesCtrl', function($scope, $stateParams, $rootScope) {
    $scope.challenges = $rootScope.challenges;

    $scope.cardDestroyed = function(index) {
        $scope.challenges.splice(index, 1);
    };

    $scope.cardSwipedLeft = function(index) {
        console.log('LEFT SWIPE');
//            $scope.addCard();
    };
    $scope.cardSwipedRight = function(index) {
        console.log('RIGHT SWIPE');
//            $scope.addCard();
    };

})
.controller('ChallengeCtrl', function($scope, $stateParams, $rootScope, $state, $window, $ionicViewService) {

//    $scope.challenge = $rootScope.challenges[$stateParams.challengeId-1];

    $scope.challenge = _.find($rootScope.challenges, function (item) {
        return item.id == $stateParams.challengeId;
    });

    $scope.enterChallenge = function () {
        $rootScope.challenges.splice([$stateParams.challengeId-1], 1);
        $rootScope.cards.unshift(
        {
            id: $rootScope.cards.length+13,
            title: 'Godt jobbet!',
            description: '<span>Montering av sparedusj er et sparetiltak som har meget god lønnsomhet. Tommelfinger-regelen sier: <br/>',
            ingress:'Det har redusert ditt forbruk med 10% fra i fjor!',
            option:'Kjøp sparedusj',
            choices: ['Jeg vil gjøre dette', 'Gjør det allerede'],
            href: '#/app/yes',
            icon:'ion-thumbsup',
            imgUrl: 'http://www.telinetprodukter.no/media/catalog/product/cache/2/image/265x265/9df78eab33525d08d6e5fb8d27136e95/s/p/sparedusj_small.jpg'
        });

//        $rootScope.challenges.splice($stateParams.challengeId-1, 1);
//        $window.location.href = '#/app/challenges';
//        $ionicViewService.goToHistoryRoot("001");
        $ionicViewService.nextViewOptions({
            disableBack: true
        });
        $window.location.href = '#/app/home';

    };

})

.controller('TipsCtrl', function($scope, $stateParams, $rootScope) {

    $scope.tips = $rootScope.tips;

    $scope.cardDestroyed = function(index) {
        $scope.challenges.splice(index, 1);
    };

    $scope.cardSwipedLeft = function(index) {
        console.log('LEFT SWIPE');
//            $scope.addCard();
    };
    $scope.cardSwipedRight = function(index) {
        console.log('RIGHT SWIPE');
//            $scope.addCard();
    };

});

