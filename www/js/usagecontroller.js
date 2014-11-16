angular.module('starter.controllers')
.controller('UsageController', function ($scope) {


        jQuery(function () {
            jQuery('#usage-graph1').highcharts({
                title: null,
                exporting: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'areaspline'
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


        jQuery(function () {
            jQuery('#usage-graph2').highcharts({
                title: null,
                exporting: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'areaspline'
                },
                title: {
                    text: 'Forbruk sist måned'
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
                        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20', '7', '8', '9', '10', '11', '12', '13', '14'
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



