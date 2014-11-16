angular.module('starter.controllers')
.controller('HomeCtrl', function($scope, $timeout, $rootScope) {

    $rootScope.cards = $rootScope.cards || [];
    $scope.cards = $rootScope.cards;

    if(!$rootScope.cards.length)
    {
        if($rootScope.tips[0])
        {
            $scope.cards.push($rootScope.tips[0])
        }

        for(var i = 0;i < $rootScope.challenges.length;i++)
        {
            if($rootScope.challenges[i].horse)
            {
                $scope.cards.push($rootScope.challenges[i]);
                break;
            }
        }
        if($rootScope.tips[1])
        {
            $scope.cards.push($rootScope.tips[1])
        }
    }

    $scope.cardDestroyed = function(index) {

        $scope.cards[index] = angular.copy($scope.cards[index]);
//            angular.copy($rootScope.challenges[0]);
        $scope.cards.splice(index, 1);
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
        jQuery('#graph-container').highcharts({
            // Edit chart spacing
            spacingBottom: 0,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
            marginRight:0,
            marginLeft:0,
            // Explicitly tell the width and height of a chart
//            width: null,
            title: null,
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
                text: 'Forbruk sist uke'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories: [
                    '1', '2', '3', '4', '5', '6', '7'
                ],
                labels: {
//                    enabled: false
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
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                color: '#0063A2',
                name: null,
                showInLegend: false,
                enableMouseTracking: false,
                marker: {
                    enabled: false
                },
                data: [30, 37.5, 34, 18, 22, 31, 33]
            }, {
                type: 'spline',
                color: '#000000',
                name: 'Jane',
                showInLegend: false,
                enableMouseTracking: false,
                dashStyle: 'longDash',
                marker: {
                    enabled: false
                },
                data: [35, 38, 39, 22, 29, 36, 35]
            }]
        });
    });
});