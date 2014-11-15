angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

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



.controller('GreenCtrl', function($scope, $stateParams) {


})

.controller('ChallengesCtrl', function($scope, $stateParams) {
        $scope.challenges = [
            { title: 'Drep mordi', id: 1 },
            { title: 'Knull kåre', id: 2 },
            { title: 'hest', id: 3 },
            { title: 'Katt', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];
})
.controller('ChallengeCtrl', function($scope, $stateParams) {

        $scope.challenges = [
            { title: 'Drep mordi', id: 1 },
            { title: 'Knull kåre', id: 2 },
            { title: 'hest', id: 3 },
            { title: 'Katt', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];

        $scope.challenge = $scope.challenges[$stateParams.challengeId-1];
})

.controller('HomeCtrl', function($scope, $timeout) {

        $scope.refreshGraph = function () {
            $timeout(function () {
                jQuery('#graph-container').highcharts().redraw();
            }, 1000);
        };


    jQuery(function () {
        jQuery('#graph-container').highcharts({
            title: null,
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            chart: {
                type: 'area'
            },
            xAxis: {
                title: {
                    text: null
                },
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        return this.value; // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return this.value / 10000 + 'kW';
                    },
                    enabled:false
                }
            },
            plotOptions: {
                area: {
                    pointStart: 0,
                    color: '#0063A2',
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }, line: {
                    color: '#000000',
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                type: 'area',
                showInLegend: false,
                data: [6000, 4700, 4500, 3900, 4200, 4400, 4250, 4050, 5200, 5500, 6000, 6500, 6300, 7200,
                    6900, 6500, 7500, 8500, 9000, 9500, 10500, 10900, 11200, 10200]
            }, {
                type: 'line',
                showInLegend: false,
                data: [6250, 4200, 3600, 3200, 2840, 3150, 3500, 3750, 4700, 5300, 6000, 6700, 6700, 7300,
                    7500, 7100, 8300, 9400, 10250, 10500, 11500, 11900, 12100, 10900],
                dashStyle: 'longdash'
            }]
        });
    });
});
