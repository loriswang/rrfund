<template>
    <v-chart :options="polar"/>
</template>

<style>
    .echarts {
        width: 100%;
        height: 100%;
    }
</style>

<script>
    import ECharts from 'vue-echarts/components/ECharts'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/polar'

    export default {
        components: {
            'v-chart': ECharts
        },
        data: function () {
            let data = []

            for (let i = 0; i <= 360; i++) {
                let t = i / 180 * Math.PI
                let r = Math.sin(2 * t) * Math.cos(2 * t)
                data.push([r, i])
            }

            return {
                polar: {
//                    title: {
//                        text: '极坐标双数值轴'
//                    },
//                    legend: {
//                        data: ['line']
//                    },
//                    polar: {
//                        center: ['50%', '54%']
//                    },
//                    tooltip: {
//                        trigger: 'axis',
//                        axisPointer: {
//                            type: 'cross'
//                        }
//                    },
//                    angleAxis: {
//                        type: 'value',
//                        startAngle: 0
//                    },
//                    radiusAxis: {
//                        min: 0
//                    },
//                    series: [
//                        {
//                            coordinateSystem: 'polar',
//                            name: 'line',
//                            type: 'line',
//                            showSymbol: false,
//                            data: data
//                        }
//                    ],
//                    animationDuration: 2000
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['RRfund量化一号(usdt)', 'usdt累计增长率', 'ETH累计增长率']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2017-01-01', '2017-01-02', '2017-01-03', '2017-01-04', '2017-01-05', '2017-01-06', '2017-01-07', '2017-01-08', '2017-01-09', '2017-01-10']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310, 90, 230, 210, 191, 234]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410, 90, 230, 210, 191, 234]
                        }
                    ]
                }
            }
        }
    }
</script>