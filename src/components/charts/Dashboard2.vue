<template>
    <div id="dashboard2" style="height:250px"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name:"DashBoardTwo",
    data () {
        return {

        }
    },
    mounted() {
        const dashboard2 = document.getElementById('dashboard2')
        const chart = this.$echarts.init(dashboard2)
        var dataArr = 44;
        var colorSet = {
            color: '#468EFD'
        };
        const option = {
            // backgroundColor: '#0E1327',
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },

            series: [{
                name: "最外部进度条",
                type: "gauge",
                radius: '70%',
                splitNumber: 100,
                axisLine: {
                    lineStyle: {
                        color: [
                            [1, '#33507A']
                        ],
                        width: 10,
                        shadowColor: 'rgba(145,207,255,.5)',
                        shadowBlur: 6,
                        shadowOffsetX: 0,
                    }
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,

                },
                splitLine: {
                    show: false,
                },
                itemStyle: {
                    show: false,
                },
                detail: {
                    show: false
                },
                title: { //标题
                    show: false,
                },
                data: [{
                    name: "title",
                    value: dataArr,
                }],
                pointer: {
                    show: false,
                },
                animationDuration: 4000,
            },
            {
                name: "内部进度条",
                type: "gauge",
                // center: ['50%', '50%'],
                radius: '54%',
                z: 4,
                splitNumber: 10,
                axisLine: {
                    lineStyle: {
                        color: [
                            [dataArr / 100, new echarts.graphic.LinearGradient(
                                0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(0,191,194,.1)',
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(0,191,194,0.4)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,191,194,0.8)',
                                }
                            ]
                            )],
                            [
                                1, 'rgba(28,128,245,.0)'
                            ]
                        ],
                        width: 170
                    }
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,

                },
                splitLine: {
                    show: false,
                },
                // itemStyle: {
                //     show: false,
                // },
                detail: {
                    formatter: function (value) {
                        if (value !== 0) {
                            var num = Math.round(value);
                            return parseInt(num).toFixed(0) + "";
                        } else {
                            return 0;
                        }
                    },
                    offsetCenter: [0, 50],
                    textStyle: {
                        padding: [0, 0, 0, 0],
                        fontSize: 30,
                        fontWeight: '700',
                        color: colorSet.color
                    }
                },
                title: { //标题
                    show: false,
                    offsetCenter: [0, 46], // x, y，单位px
                    textStyle: {
                        color: "rgba(46, 143, 255, 1)",
                        fontSize: 30, //表盘上的标题文字大小
                        fontWeight: 700,
                        fontFamily: 'PingFangSC'
                    }
                },
                data: [{
                    name: dataArr,
                    value: dataArr,
                }],
                itemStyle: {
                    normal: {
                        color: 'rgba(46, 143, 255, 1)'
                    }
                },
                pointer: {
                    show: true,
                    length: '80%',
                    radius: '20%',
                    width: 3, //指针粗细
                },
                animationDuration: 4000,
            },
            // 内圆
            {
                "name": '内圆',
                "type": 'pie',
                "hoverAnimation": false,
                "legendHoverLink": false,
                "radius": '4%',
                "z": 4,

                "labelLine": {
                    "normal": {
                        "show": false
                    }
                },
                "data": [{
                    "value": 0,
                }, {
                    "value": 10,

                    itemStyle: {
                        normal: {
                            color: "#0E1327"
                        },
                        emphasis: {
                            color: "#0E1327"
                        }
                    }
                }]
            },
            // 圆环
            {
                "name": '小圆形',
                "type": 'pie',
                "hoverAnimation": false,
                "legendHoverLink": false,
                "radius": ['4%', '3%'],
                "z": 5,
                "labelLine": {
                    "normal": {
                        "show": false
                    }
                },
                "data": [{
                    "value": 0,
                }, {
                    "value": 10,

                    itemStyle: {
                        normal: {
                            color: "rgba(46, 143, 255, 1)",
                        },

                    }
                }]
            },
            {
                name: '外部刻度',
                type: 'gauge',
                //  center: ['20%', '50%'],
                radius: '60%',
                min: 0, //最小刻度
                max: 100, //最大刻度
                splitNumber: 10, //刻度数量
                startAngle: 225,
                endAngle: -45,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 1,
                        color: [
                            [1, 'rgba(0,0,0,0)']
                        ]
                    }
                }, //仪表盘轴线
                axisLabel: {
                    show: true,
                    color: 'rgba(255,255,255,.5)',
                    distance: 25,
                    formatter: function (v) {
                        switch (v + '') {
                            case '0':
                                return '0';
                            case '10':
                                return '10';
                            case '20':
                                return '20';
                            case '30':
                                return '30';
                            case '40':
                                return '40';
                            case '50':
                                return '50';
                            case '60':
                                return '60';
                            case '70':
                                return '70';
                            case '80':
                                return '80';
                            case '90':
                                return '90';
                            case '100':
                                return '100';
                        }
                    }
                }, //刻度标签。
                axisTick: {
                    show: true,
                    splitNumber: 7,
                    lineStyle: {
                        color: '#42E5FB', //用颜色渐变函数不起作用
                        width: 2,
                    },
                    length: 8
                }, //刻度样式
                splitLine: {
                    show: true,
                    length: 15,
                    lineStyle: {
                        color: '#42E5FB', //用颜色渐变函数不起作用
                    }
                }, //分隔线样式
                detail: {
                    show: false
                },
                pointer: {
                    show: true
                }
            },
            ]
        };

        chart.setOption(option);
    }
}
</script>
