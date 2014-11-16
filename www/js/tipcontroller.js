angular.module('starter.controllers')
.controller('TipCtrl', function($scope, $stateParams, $rootScope) {

//    $scope.tip = $rootScope.tips[$stateParams.tipId-1];

    $scope.tip = _.find($rootScope.tips, function (item) {
        return item.id == $stateParams.tipId;
    });

    console.log($scope.tip);
    $scope.enterTip = function () {
//        alert('FUUU');
    };

    $scope.cardDestroyed = function(index) {
        $scope.tip.challenges.splice(index, 1);
    };

    $scope.cardSwipedLeft = function(index) {
        console.log('LEFT SWIPE');
//            $scope.addCard();
    };
    $scope.cardSwipedRight = function(index) {
        console.log('RIGHT SWIPE');
//            $scope.addCard();
    };

    jQuery(function () {
        jQuery('#tip-graph1').highcharts({
            title: null,
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            chart: {
                type: 'column',
                height: 225
            },
            xAxis: {
                title: {
                    text: null
                },
                categories: [
                    '12-01', '01-02', '02-03', '03-04', '04-05', '05-06', '06-07', '07-08'],
                labels:{
                    enabled: false
                }
            },
            yAxis: {
                enabled: false,
                min: 0,
                title: {
                    text: null
                }
            },
            plotOptions: {
                column: {
                    enableMouseTracking: false,
                    pointPadding: 0,
                    borderWidth: 0
                }
            },
            series: [{
                color: "#0063A2",
                name: 'Ditt forbruk',
                data: [6, 5, 4.5, 4.5, 4, 3.5, 4, 4]
            }]
        });
    });

    jQuery(function () {
        jQuery('#tip-graph2').highcharts({
            title: null,
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            chart: {
                type: 'column',
                height: 225
            },
            xAxis: {
                title: {
                    text: null
                },
                categories: [
                    '12-01', '01-02', '02-03', '03-04', '04-05', '05-06', '06-07', '07-08'],
                labels:{
                    enabled: false
                }

            },
            yAxis: {
                enabled: false,
                min: 0,
                title: {
                    text: null
                }
            },
            plotOptions: {
                column: {
                    enableMouseTracking: false,
                    pointPadding: 0,
                    borderWidth: 0
                }
            },
            series: [{
                color: "#0063A2",
                name: 'Gjennomsnitt',
                data: [5.5, 4, 3.5, 2.5, 3, 2.5, 3, 3]
            }]
        });
    });

});
