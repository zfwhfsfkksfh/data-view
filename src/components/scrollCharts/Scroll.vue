<!-- eslint-disable vue/multi-word-component-names -->
/* 仿dv-scroll-ranking-board 带点击事件 config：{ name:'', // 名称 value:'' // 排名值 。。。。// 其他自定义需要点击事件携带的参数 } */
<template>
    <div class="container">
        <div :id="scrollWrapper" class="wrapper" style="top: 0">
            <ul :id="scrollList" class="scroll-list">
                <li v-for="(item, index) in showDataList" :key="index" @click="$emit('click', item)">
                    <ul>
                        <div class="total-title">
                            <div class="">No. {{ index + 1 }}</div>
                            <div class="total-name">
                                {{ item.name }}
                            </div>
                            <div class="total-num">{{ item.value }}{{ config.unit }}</div>
                        </div>
                        <div class="total">
                            <div class="total-item" :style="'width:' + Number(item.value / maxNum) * 100 + '%'" />
                        </div>
                    </ul>
                </li>
            </ul>
            <ul class="scroll-list">
                <li v-for="(item, index) in showDataList" :key="index" @click="$emit('click', item)">
                    <ul>
                        <div class="total-title">
                            <div class="">No. {{ index + 1 }}</div>
                            <div class="total-name">
                                {{ item.name }}
                            </div>
                            <div class="total-num">{{ item.value }}{{ config.unit }}</div>
                        </div>
                        <div class="total">
                            <div class="total-item" :style="'width:' + Number(item.value / maxNum) * 100 + '%'" />
                        </div>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        config: {
            type: Object,
            require: true,
        },
        scrollWrapper: {
            type: String,
            require: true,
        },
        scrollList: {
            type: String,
            require: true,
        },
        // dataList: [
        // 	{ name: '名称1', value: 21 },
        // 	{ name: '名称2', value: 123 },
        // ],
    },
    data() {
        return {
            // 100%的基数
            maxNum: 100,
            showDataList: [],
        };
    },
    mounted() {
        this.showDataList = this.config.data;
        this.setNum(this.showDataList);
        setTimeout(() => {
            this.initEquScroll();
        }, 100);
    },
    methods: {
        // 设置滚动事件
        initEquScroll() {
            // 单条数据滚播速度
            let ROLL_SPEED = 2500;
            // ul
            let noticeList1 = document.getElementById(this.scrollList);
            // 外层的div
            let listWrapper = document.getElementById(this.scrollWrapper);
            let timer;
            setTimeout(() => {
                listWrapper.scrollTop = 0;
                timer = setInterval(rollStart, ROLL_SPEED);
            }, 100);
            function rollStart() {
                if (Math.abs(subStr(listWrapper.style.top)) >= noticeList1.clientHeight) {
                    listWrapper.style.top = '0px';
                } else {
                    let top = listWrapper.style.top;
                    setTop(subStr(top), 0);
                }
            }
            // 截取px前数值
            function subStr(str) {
                let index = str.indexOf('px');
                if (index > -1) {
                    return parseFloat(str.substr(0, index + 1));
                }
            }
            // 平滑滚动一条数据
            function setTop(top, index) {
                if (index == 34) {
                    return;
                } else {
                    setTimeout(() => {
                        listWrapper.style.top = top - index + 'px';
                        setTop(top, index + 1);
                    }, 10);
                }
            }
            listWrapper.onmouseover = function () {
                clearInterval(timer);
            };
            listWrapper.onmouseout = function () {
                timer = setInterval(rollStart, ROLL_SPEED);
            };
        },
        // 处理数据
        setNum(dataArr) {
            // 寻找最大值作为100%的基数
            let max = dataArr[0].value;
            dataArr.forEach((item) => {
                if (item.value > max) {
                    max = item.value;
                }
            });
            this.maxNum = max;

            function compare(key) {
                return function (obj1, obj2) {
                    if (Number(obj1[key]) > Number(obj2[key])) {
                        return -1;
                    } else if (obj1[key] === obj2[key]) {
                        return 0;
                    } else {
                        return 1;
                    }
                };
            }
            this.showDataList.sort(compare('value'));
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    overflow: hidden;
    width: 170px;
    height: 220px;
    font-size: 14px;
    ul {
        list-style: none;
        padding: 0;
    }
    .wrapper {
        position: relative;
        height: 220px;
        .scroll-list {
            cursor: pointer;
            ul {
                .total-title {
                    display: flex;
                    justify-content: space-between;
                    line-height: 20px;
                    width: 100%;
                    align-items: center;
                    padding-top: 15px;
                    .total-name {
                        padding-left: 1%;
                        // width: 59%;
                        text-align: left;
                    }
                    .total-num {
                        padding-right: 2%;
                        // width: 38%;
                        text-align: right;
                    }
                }
                .total {
                    width: 100%;
                    line-height: 7px;
                    background: none;
                    padding: 3px 5px 3px 0px;
                    border-bottom: 1px solid #699502;
                    .total-item {
                        border-radius: 1px;
                        background-image: linear-gradient(to right, #699502, #0ad6eb);
                        text-align: right;
                        padding-right: 20px;
                        height: 7px;
                        color: white;
                    }
                }
            }
        }
    }
}
</style>
