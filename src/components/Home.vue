<template>
    <dv-full-screen-container class="content">
        <div class="title">设备状态实时监控</div>
        <dv-decoration-5 class="header"></dv-decoration-5>
        <ChinaMap v-show="isDetail" class="animate__animated animate__zoomIn animate__slow" />
        <div class="content-left">
            <dv-border-box-11 title="设备" class="device-box animate__fadeInLeft animate__slow" :class="{ animate__animated: isAnimated }" v-drag>
                <div class="device" @click="isDetail = !isDetail">
                    <dv-conical-column-chart :config="configDevice" style="width: 400px; height: 220px" />
                </div>
            </dv-border-box-11>
            <dv-border-box-11 title="控制" class="control-box animate__fadeInLeft animate__slow animate-delay-half" :class="{ animate__animated: isAnimated }" v-drag>
                <div class="control">
                    <Scroll
                        :config="configControl"
                        scroll-wrapper="peopleScrollWrapperOne"
                        scroll-list="peopleScrollListOne"
                        style="width: 400px; height: 200px"
                        @click="getControlIndex"
                    />
                    <!-- <dv-scroll-ranking-board :config="configControl" style="width: 400px; height: 200px" @click="getControlIndex" /> -->
                </div>
            </dv-border-box-11>
            <dv-border-box-9 class="control-modal" v-if="modalShow">
                <div class="modal-content" @click="modalShow = false">
                    <span>{{ control.name }}</span>
                    <button @click="modalShow = false">发送</button>
                </div>
            </dv-border-box-9>
        </div>
        <div class="content-middle" v-if="!isDetail">
            <dv-border-box-12 class="detail-box" v-drag>
                <div @click="isList = !isList">
                    <DashBoardOne class="animate__animated animate__rollIn animate__slow"></DashBoardOne>
                </div>
                <!-- <DashBoardTwo></DashBoardTwo> -->
                <dv-decoration-9 class="decoration-9 animate__animated animate__rollIn animate__slow">
                    <div>96%</div>
                    <span class="font-little">利用率</span>
                </dv-decoration-9>
            </dv-border-box-12>
        </div>
        <div class="content-right" v-drag>
            <dv-border-box-8 v-if="!isDetail && !isList" class="detail-box animate__animated animate__lightSpeedInRight animate__slow">
                <LineOne></LineOne>
            </dv-border-box-8>
            <LogList v-if="!isDetail && isList" class="animate__animated animate__lightSpeedInRight animate__slow"></LogList>
        </div>
    </dv-full-screen-container>
</template>

<script>
import ChinaMap from './ChinaMap.vue';
// import DateTime from './DateTime.vue';
import LogList from './log/LogList.vue';

import DashBoardOne from './charts/Dashboard1.vue';
// import DashBoardTwo from './charts/Dashboard2.vue'
import LineOne from './charts/LineOne.vue';
import Scroll from './scrollCharts/Scroll.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: {
        ChinaMap,
        // DateTime,
        LogList,
        DashBoardOne,
        // DashBoardTwo,
        LineOne,
        Scroll,
    },
    data() {
        return {
            isAnimated: true,
            isDetail: true,
            isList: false,
            control: {},
            modalShow: false,
            configDevice: {
                data: [
                    {
                        name: '设备一',
                        value: 55,
                    },
                    {
                        name: '设备二',
                        value: 120,
                    },
                    {
                        name: '设备三',
                        value: 71,
                    },
                    {
                        name: '设备四',
                        value: 66,
                    },
                    {
                        name: '设备五',
                        value: 80,
                    },
                    {
                        name: '设备六',
                        value: 35,
                    },
                    {
                        name: '设备七',
                        value: 15,
                    },
                ],
                showValue: true,
            },
            configControl: {
                data: [
                    {
                        name: '控制一',
                        value: 55123,
                    },
                    {
                        name: '控制二',
                        value: 12022,
                    },
                    {
                        name: '控制三',
                        value: 78932,
                    },
                    {
                        name: '控制四',
                        value: 63411,
                    },
                    {
                        name: '控制五',
                        value: 44231,
                    },
                    {
                        name: '控制六',
                        value: 44831,
                    },
                    {
                        name: '控制七',
                        value: 74231,
                    },
                ],
                unit: '',
                // valueFormatter({ value }) {
                //     console.warn(arguments);
                //     const reverseNumber = (value + '').split('').reverse();
                //     let valueStr = '';

                //     while (reverseNumber.length) {
                //         const seg = reverseNumber.splice(0, 3).join('');
                //         valueStr += seg;
                //         if (seg.length === 3) valueStr += ',';
                //     }

                //     return valueStr.split('').reverse().join('');
                // },
            },
        };
    },
    mounted() {
        this.setAnimation();
        this.setDeviceData();
    },
    methods: {
        getControlIndex(config) {
            console.log('config', config);
            this.control = { ...config };
            this.modalShow = true;
        },
        setAnimation() {
            setTimeout(() => {
                this.isAnimated = false;
            }, 2000);
            clearTimeout();
        },
        setDeviceData() {
            let datas = JSON.parse(JSON.stringify([...this.configDevice.data]));
            console.log(datas);
            setInterval(() => {
                datas.forEach((item) => {
                    item.value = 120 * Math.floor(Math.random() * 10 + 1);
                });
                this.configDevice = {
                    data: datas,
                    showValue: true,
                };
            }, 3000);
        },
    },
};
</script>
<style scoped lang="scss">
.header {
    width: 100%;
    height: 100px;
}
.animate-delay-half {
    animation-delay: 0.3s;
}
.control-modal {
    position: absolute;
    left: 510px;
    top: 400px;
    z-index: 100;
    width: 200px;
    height: 70px;
}
.modal-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    color: #014521;
    button {
        background: #037db6;
        color: #fff;
        border: 1px solid #023b56;
        width: 60px;
        height: 30px;
        border-radius: 3px;
    }
}
.title {
    position: fixed;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
}
.content {
    /* background:url('../assets/bg4.jpeg') no-repeat;
        background-size: cover; */
    // background: #282c34;
    background-image: radial-gradient(#037db6, #023b56);
}
.content-left {
    position: absolute;
    left: 0;
    top: 80px;
}
.content-middle {
    position: absolute;
    right: 520px;
    top: 108px;
}
.content-right {
    position: absolute;
    right: 10px;
    top: 108px;
}
.detail-box {
    width: 480px;
    height: 580px;
}
.decoration-9 {
    width: 250px;
    height: 250px;
    color: aquamarine;
    font-size: 38px;
    font-weight: bold;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .font-little {
        display: block;
        font-size: 20px;
        color: #dfdddd;
    }
}
.device-box {
    width: 500px;
    height: 300px;
    margin-left: 10px;
    margin-top: 10px;
    color: #fff;
    .device {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
    }
}

.date-time {
    margin-left: 10px;
    bottom: 130px;
    position: fixed;
}

.log-list {
    width: 960px;
    height: 600px;
    right: 10px;
    position: absolute;
}

.control-box {
    width: 500px;
    height: 300px;
    margin-left: 10px;
    margin-top: 10px;
    color: #fff;
    .control {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 330px;
    }
}
/deep/ .dv-scroll-ranking-board .ranking-column .inside-column {
    background-color: #81b702;
}
/deep/ .dv-scroll-ranking-board .ranking-info .rank {
    color: #fff;
}
/deep/ .dv-scroll-ranking-board .ranking-column {
    border-bottom: 1px solid #699502;
}
</style>
