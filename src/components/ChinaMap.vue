<template>
    <div class="ChinaMap" id="chartRef" ref="chartRef"></div>
</template>

<script>
import * as eCharts from 'echarts';
import ChinaGeo from './ChinaGeo';

eCharts.registerMap('China', ChinaGeo, {});

const mapOption = {
    darkMode: true,
    title: {
        text: '全国设备销售概览',
        subtext: '',
        sublink: '',
        left: 'right',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'item',
        showDelay: 0.3,
        transitionDuration: 0,
    },
    visualMap: {
        right: 50,
        bottom: 150,
        min: 50,
        max: 10000,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
        },
        textStyle: { color: '#fff' },
        text: ['', ''],
        calculable: true,
    },
};

const barOption = {
    darkMode: true,
    xAxis: {
        type: 'value',
        name: '已销售设备数',
        left: 500,
        axisLabel: {
            color: '#fff',
        },
        nameTextStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'item',
        showDelay: 0.3,
        transitionDuration: 0,
    },
    animationDurationUpdate: 1000,
};

function getHeaderWidth() {
    const arr = document.getElementsByClassName('header');
    const element = arr ? arr[0] : null;
    // console.debug('getHeaderWidth arr:', arr);
    // console.debug('getHeaderWidth element:', element);
    // console.debug('getHeaderWidth element:', element.clientHeight);
    return element ? element.clientHeight + 100 : 200;
}

function getDeviceBoxWidth() {
    const arr = document.getElementsByClassName('device-box');
    const element = arr ? arr[0] : null;
    // console.debug('getDeviceBoxWidth arr:', arr);
    // console.debug('getDeviceBoxWidth element:', element);
    return element ? element.clientWidth + 100 : 600;
}

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'ChinaMap',
    props: {
        onclick: {
            type: Function,
        },
    },
    data() {
        return {
            // chartRef: null,
        };
    },
    created() {
        const data = [
            { name: '山东', value: 8000 },
            { name: '上海', value: 500 },
            { name: '江苏', value: 200 },
            { name: '黑龙江', value: 1000 },
        ];

        data.sort((a, b) => a.value - b.value);

        this.data = data;

        this.mapOption = {
            ...mapOption,

            series: [
                {
                    id: 'population',
                    name: '已销售设备数',
                    type: 'map',
                    roam: true,
                    map: 'China',
                    animationDurationUpdate: 1000,
                    universalTransition: true,
                    data,
                },
            ],
        };

        this.barOption = {
            ...barOption,
            grid: {
                left: getDeviceBoxWidth(),
                bottom: getHeaderWidth(),
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    rotate: 30,
                    color: '#fff',
                },
                data: data.map((item) => item.name),
            },
            series: {
                type: 'bar',
                id: 'population',
                data: data.map((item) => item.value),
                universalTransition: true,
            },
        };

        this.currentOption = this.mapOption;
    },
    mounted() {
        const { chartRef } = this.$refs;
        // const chartRef = document.getElementById("chartRef");

        if (chartRef) {
            const { mapOption } = this;

            const chart = eCharts.init(chartRef); // echart初始化容器
            chart.setOption(mapOption);

            chart.on('click', this.onclickHandler);

            this.chart = chart;
        }
    },
    methods: {
        onclickHandler: function (param) {
            // eslint-disable-next-line no-console
            // console.debug('chart param:', param);

            if (this.currentOption === this.mapOption) {
                this.currentOption = this.barOption;
            } else {
                this.currentOption = this.mapOption;
                if (this.onclick) {
                    this.onclick(param);
                }
            }

            this.chart.setOption(this.currentOption, true);
        },
    },
};
</script>
<style scoped lang="scss">
.ChinaMap {
    width: 100vw;
    height: 100vh;
    position: absolute;
}
</style>
