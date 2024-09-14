<template>
    <div id="dashboard1" style="height:300px"></div>
</template>

<script>
export default {
    name:"DashBoardOne",
    data () {
        return {

        }
    },
    mounted() {
        const dashboard1 = document.getElementById('dashboard1')
        const chart = this.$echarts.init(dashboard1)
        // 获取容器尺寸
        const w = document.documentElement.clientWidth - 20
        const h = document.documentElement.clientHeight - 30

        // 默认设置数据值
        const baseValue = 3
        // 描述信息
        const baseText = '安全风险等级'
        // 等级
        let baseGrade = '较低'
        if (baseValue <= 3) {
            baseGrade = '较低'
        } else if (baseValue <= 7) {
            baseGrade = '居中'
        } else {
            baseGrade = '较高'
        }
        // 边缘圆弧基础半径
        const baseRadius0 = '69%'
        const baseRadius1 = '74%'
        // 边缘圆弧开始圆角圆心位置
        // 边缘圆弧半径绝对值
        let baseRadiusAbs0 = 0
        let baseRadiusAbs1 = 0
        let baseRadiusAbs = 0
        if (w < h) {
            baseRadiusAbs0 = w * baseRadius0.substr(0, baseRadius0.length - 1) / 100 / 2
            baseRadiusAbs1 = w * baseRadius1.substr(0, baseRadius1.length - 1) / 100 / 2
        } else {
            baseRadiusAbs0 = h * baseRadius0.substr(0, baseRadius0.length - 1) / 100 / 2
            baseRadiusAbs1 = h * baseRadius1.substr(0, baseRadius1.length - 1) / 100 / 2
        }
        baseRadiusAbs = (baseRadiusAbs0 + baseRadiusAbs1) / 2
        // 开始圆角中心
        // const startCenterX = w / 2 - baseRadiusAbs
        // 开始圆角半径
        const startRadius = (baseRadiusAbs1 - baseRadiusAbs0) / 2
        // 结束圆基底坐标x,y
        const endBaseCenterX = w / 2 - baseRadiusAbs * Math.cos(baseValue / 10 * Math.PI)
        const endBaseCenterY = h / 2 - baseRadiusAbs * Math.sin(baseValue / 10 * Math.PI)
        // 边缘圆弧渐变色
        let edgeGradient = [{
            offset: 0,
            color: '#02F7D7' // 0% 处的颜色
        }, {
            offset: 0.2,
            color: '#09EAE2' // 20% 处的颜色
        }, {
            offset: 0.4,
            color: '#22A2F9' // 40% 处的颜色
        }, {
            offset: 0.6,
            color: '#2E43EB' // 60% 处的颜色
        }, {
            offset: 0.8,
            color: '#A5107A' // 80% 处的颜色
        }, {
            offset: 1,
            color: '#D20C58' // 100% 处的颜色
        }]
        if (baseValue <= 2) {
            edgeGradient = [{
                offset: 0,
                color: '#02F7D7'
            }, {
                offset: 1,
                color: '#09EAE2'
            }]
        } else if (baseValue <= 4) {
            edgeGradient = [{
                offset: 0,
                color: '#02F7D7'
            }, {
                offset: 0.5,
                color: '#09EAE2'
            }, {
                offset: 1,
                color: '#22A2F9'
            }]
        } else if (baseValue <= 6) {
            edgeGradient = [{
                offset: 0,
                color: '#02F7D7'
            }, {
                offset: 0.33,
                color: '#09EAE2'
            }, {
                offset: 0.66,
                color: '#22A2F9'
            }, {
                offset: 1,
                color: '#2E43EB'
            }]
        } else if (baseValue <= 8) {
            edgeGradient = [{
                offset: 0,
                color: '#02F7D7'
            }, {
                offset: 0.33,
                color: '#09EAE2'
            }, {
                offset: 0.66,
                color: '#22A2F9'
            }, {
                offset: 0.88,
                color: '#2E43EB'
            }, {
                offset: 1,
                color: '#A5107A'
            }]
        }
        const option = {
            // backgroundColor: '#000312',
            title: {
                // text: '仪表盘',
                textStyle: {
                    color: '#fff'
                }
            },
            series: [
                // 底部仪表
                {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    min: 0,
                    max: 10,
                    splitNumber: 5,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        length: 10,
                        lineStyle: {
                            width: 1
                        }
                    },
                    axisTick: {
                        splitNumber: 20,
                        length: 1,
                        lineStyle: {
                            color: '#4A90E2'
                        }
                    },
                    axisLabel: {
                        distance: -40,
                        formatter: function (value) {
                            let richIndex = 'a'
                            switch (value) {
                                case 0:
                                    richIndex = 'a';
                                    break;
                                case 2:
                                    richIndex = 'b';
                                    break;
                                case 4:
                                    richIndex = 'c';
                                    break;
                                case 6:
                                    richIndex = 'd';
                                    break;
                                case 8:
                                    richIndex = 'e';
                                    break;
                                case 10:
                                    richIndex = 'f';
                                    break;
                            }
                            return `{${richIndex}|${value}}`
                        },
                        rich: {
                            a: {
                                color: '#02F7D7'
                            },
                            b: {
                                color: '#09EAE2'
                            },
                            c: {
                                color: '#22A2F9'
                            },
                            d: {
                                color: '#2E43EB'
                            },
                            e: {
                                color: '#A5107A'
                            },
                            f: {
                                color: '#D20C58'
                            }
                        }
                    },
                    pointer: {
                        width: 60
                    },
                    itemStyle: {
                        color: '#023A79'

                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        name: "完成率",
                        value: baseValue
                    }]
                },
                // 外层环形
                {
                    type: 'pie',
                    hoverAnimation: false,
                    legendHoverLink: false,
                    startAngle: 200,
                    radius: ['55%', '74%'],
                    z: 1,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    silent: true,
                    data: [{
                        value: 220,
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0,
                                    color: 'RGBA(8, 27, 63, 1)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(0, 3, 18, 0.1)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    }, {
                        value: 140,
                        itemStyle: {
                            color: 'rgba(0,0,0,0)'
                        }
                    }]
                },
                // 中层窄圆环
                {
                    type: 'pie',
                    hoverAnimation: false,
                    legendHoverLink: false,
                    radius: ['50%', '55%'],
                    z: 10,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    silent: true,
                    data: [{
                        value: 220,
                        itemStyle: {
                            color: 'RGBA(9, 27, 61, 1)'
                        }
                    }]
                },
                // 内部圆
                {
                    type: 'pie',
                    hoverAnimation: false,
                    legendHoverLink: false,
                    radius: [0, '50%'],
                    z: 10,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    // 模拟中间文字
                    label: {
                        show: true,
                        position: 'center',
                        formatter: function () {
                            return `{a|${baseValue}}\n{b|${baseGrade}}\n{c|${baseText}}`
                        },
                        rich: {
                            a: {
                                fontSize: 72,
                                color: '#fff'
                            },
                            b: {
                                fontSize: 13,
                                color: '#fff'
                            },
                            c: {
                                fontSize: 12,
                                color: '#fff'
                            }
                        }
                    },
                    silent: true,
                    data: [{
                        value: 220,
                        itemStyle: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(0, 88, 170, 1)' // 0% 处的颜色
                                }, {
                                    offset: .6,
                                    color: 'rgba(2, 49, 108, 1)' // 50% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(3, 11, 48, 1)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    }]
                },
                // 边缘圆弧
                {
                    type: 'pie',
                    hoverAnimation: false,
                    legendHoverLink: false,
                    startAngle: 180,
                    radius: [baseRadius0, baseRadius1],
                    z: 1,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    silent: true,
                    data: [{
                        value: baseValue,
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: edgeGradient,
                                global: false // 缺省为 false
                            }
                        }
                    }, {
                        value: 20 - baseValue,
                        itemStyle: {
                            color: 'rgba(0,0,0,0)'
                        }
                    }]
                },
                // 边缘圆弧开始圆角
                {
                    type: 'pie',
                    hoverAnimation: false,
                    legendHoverLink: false,
                    radius: [0, startRadius],
                    center: [w / 2 - baseRadiusAbs, '50%'],
                    z: 20,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    silent: true,
                    data: [{
                        value: 100,
                        itemStyle: {
                            color: '#02F7D7'

                        }
                    }]
                },
                // 边缘圆弧结束圆白底
                {
                    type: 'pie',
                    hoverAnimation: false,
                    legendHoverLink: false,
                    radius: [0, startRadius + 3],
                    center: [endBaseCenterX, endBaseCenterY + 1],
                    z: 20,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    silent: true,
                    data: [{
                        value: 100,
                        itemStyle: {
                            color: '#fff'
                        }
                    }]
                },
                // 边缘圆弧结束圆红底
                {
                    type: 'pie',
                    hoverAnimation: false,
                    legendHoverLink: false,
                    radius: [startRadius, startRadius + 3],
                    center: [endBaseCenterX, endBaseCenterY],
                    z: 20,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    silent: true,
                    data: [{
                        value: 100,
                        itemStyle: {
                            color: edgeGradient[edgeGradient.length - 1].color

                        }
                    }]
                },
                // 边缘圆弧结束中间圆
                {
                    type: 'pie',
                    hoverAnimation: false,
                    legendHoverLink: false,
                    radius: [0, startRadius - 2],
                    center: [endBaseCenterX, endBaseCenterY],
                    z: 20,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    silent: true,
                    data: [{
                        value: 100,
                        itemStyle: {
                            color: edgeGradient[edgeGradient.length - 1].color

                        }
                    }]
                }
            ]
        };
        chart.setOption(option);
    }
}
</script>
