<template>
    <div id="line1" style="height:600px;padding-top:30px"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name:"LineOne",
    data () {
        return {

        }
    },
    mounted() {
        const line1 = document.getElementById('line1')
        const chart = this.$echarts.init(line1)
        const option = {
            // backgroundColor: '#05163B',
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                iconStyle: {
                    borderColor: "#5ABE64",  // 图标默认颜色
                },
                feature: {
                    mark: { show: true },
                    // dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            grid: {
                // top: 'middle',
                left: '3%',
                right: '4%',
                bottom: '15%',
                top:'15%',
                containLabel: true
            },
            legend: {
                data: ['压力', '温度', '累计', '累计2'],
                left:'left',
                textStyle: {
                    color: "#fff"
                }

            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#ebf8ac" //X轴文字颜色
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#01FCE3'
                        }
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '压力',
                    axisLabel: {
                        formatter: '{value} KPa',
                        textStyle: {
                            color: "#2EC7C9" //X轴文字颜色
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#01FCE3'
                        }
                    },
                },
                {
                    type: 'value',
                    name: '温度',
                    nameTextStyle: {
                        color: "#2EC7C9"
                    },
                    axisLabel: {
                        formatter: '{value} °C',
                        textStyle: {
                            color: "#2EC7C9" //X轴文字颜色
                        }
                    }
                }
            ],
            series: [

                {
                    name: '压力',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#00FFE3"
                            },
                            {
                                offset: 1,
                                color: "#4693EC"
                            }
                            ])
                        }
                    },
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name: '温度',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#C1B2EA"
                            },
                            {
                                offset: 1,
                                color: "#8362C6"
                            }
                            ])
                        }
                    },
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: '累计',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                    lineStyle: {
                        normal: {
                            width: 5,
                            color: {
                                type: 'linear',

                                colorStops: [{
                                    offset: 0,
                                    color: '#AAF487' // 0% 处的颜色
                                },
                                {
                                    offset: 0.4,
                                    color: '#47D8BE' // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#47D8BE' // 100% 处的颜色
                                }
                                ],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(71,216,190, 0.5)',
                            shadowBlur: 10,
                            shadowOffsetY: 7
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#AAF487',
                            borderWidth: 10,
                            /*shadowColor: 'rgba(72,216,191, 0.3)',
                            shadowBlur: 100,*/
                            borderColor: "#AAF487"
                        }
                    },
                    smooth: true,
                },
                {
                    name: '累计2',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [4.0, 3.2, 2.3, 5.5, 4.3, 11.2, 15.3, 22.4, 21.0, 13.5, 12.0, 10.2],
                    lineStyle: {
                        normal: {
                            width: 5,
                            color: {
                                type: 'linear',

                                colorStops: [{
                                    offset: 0,
                                    color: '#F8B854' // 0% 处的颜色
                                },
                                {
                                    offset: 0.4,
                                    color: '#DE801C' // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#DE801C' // 100% 处的颜色
                                }
                                ],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(71,216,190, 0.5)',
                            shadowBlur: 10,
                            shadowOffsetY: 7
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F7AD3E',
                            borderWidth: 10,
                            /*shadowColor: 'rgba(72,216,191, 0.3)',
                            shadowBlur: 100,*/
                            borderColor: "#F7AD3E"
                        }
                    },
                    smooth: true,
                }
            ]
        };
        chart.setOption(option);
    }
}
</script>
