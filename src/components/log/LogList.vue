<template>
    <div>
        <div class="export">导出</div>
        <dv-border-box-11 class="LogList" title="故障告警日志">
            <table class="data-table" data-testid="data-table-alarm">
                <thead>
                    <tr class="data-table-header">
                        <th>序号</th>
                        <th>报警对象</th>
                        <th>优先级</th>
                        <th>故障代码</th>
                        <th>处理状态</th>
    
                        <th>处理者</th>
                        <th>创建时间</th>
                        <th>处理时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="data-table-row" v-for="(r, i) in searchResult" :key="i">
                        <td>{{ i }}</td>
                        <td>{{ `${dataDefine.alarmObject[+r.alarmObject] || ''}` }}</td>
                        <td>{{ `${dataDefine.priorityLevel[`${r?.priorityLevel}`]?.title || ''}` }}</td>
                        <td>{{ `${r?.failureCode || ''}` }}</td>
                        <td>{{ `${dataDefine.status[+r.status] || ''}` }}</td>
    
                        <td>{{ `${r?.nickName || ''}${r?.userName ? `(${r?.userName})` : ''}` }}</td>
                        <td>{{ `${r?.createTime || ''}` }}</td>
                        <td>{{ `${r?.updateTime || ''}` }}</td>
                    </tr>
                </tbody>
            </table>
        </dv-border-box-11>
    </div>
</template>

<script>
import alarmData from './alarm.json';

const dataDefine = {
    priorityLevel: {
        '-1': { label: '全部', key: '-1', title: '全部' },
        // '0': { label: '信息', key: '0', title: '信息' },
        1: { label: '低级别警报', key: '1', title: '低级' },
        2: { label: '中级别警报', key: '2', title: '中级' },
        3: { label: '高级别警报', key: '3', title: '高级' },
    },
    source: { 1: '手柄', 2: '触屏' },
    alarmObject: { 1: '导丝1', 2: '导丝2', 3: '导管', 4: '球囊支架', 7: '软件' },
    status: { 0: '未处理', 1: '忽略', 2: '确认', 3: '重启', 4: '关机' },
    loginType: { 0: '登入', 1: '登出' },
    loginStatus: { 0: '成功', 1: '失败' },
    opStatus: { 0: '成功', 1: '失败' },
    opCmdName: { 1: '导丝1', 2: '导丝2', 3: '导管', 4: '设备', 5: '重启', 6: '关机' },
    opCode: { 0: '针对关机重启', 1: '位移+', 2: '位移-', 3: '角度+(顺时针)', 4: '角度-(逆时针)' },
    // page: [
    //     { url: `/view${PAGE_URL.LOG_REPORT_ALARM}`, searchAPI: API.ALARM_LIST, exportAPI: API.ALARM_EXPORT },
    //     { url: `/view${PAGE_URL.LOGIN_LOG}`, searchAPI: API.LOGIN_LOG_LIST, exportAPI: API.LOGIN_LOG_EXPORT },
    //     { url: `/view${PAGE_URL.OPERATE_LOG}`, searchAPI: API.OPERATE_LOG_LIST, exportAPI: API.OPERATE_LOG_EXPORT },
    // ],
};

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'LogList',
    props: {
        type: String,
    },
    data() {
        return { searchResult: alarmData.rows, dataDefine };
    },
    mounted() {},
};
</script>

<style scoped lang="scss">
.export {
    font-size: 20px;
    color: #3998fd;
    position: absolute;
    top: -10px;
    right: 24px;
    z-index: 10;
    width: 100px;
}
.LogList {
    padding: 50px 20px 20px 20px;
    width: 480px;
    height: 600px;
    overflow: hidden;
    position: absolute;
    right: 10px;
    box-sizing: border-box;
    top: -10px;
    
    .data-table {
        color: #fff;
        width: inherit;

        thead {
            background-color: rgb(10, 39, 50);
        }

        .data-table-row {
            &:nth-child(2n) {
                background-color: rgb(0, 59, 81);
            }

            &:nth-child(2n - 1) {
                background-color: rgb(10, 39, 50);
            }
        }
    }
}
</style>

<style lang="scss">
.LogList {
    .border-box-content {
        overflow-y: scroll;

        /* 滚动条整体 */
        &::-webkit-scrollbar {
            height: 20px;
            width: 10px;
        }
        /* 两个滚动条交接处 -- x轴和y轴 */
        &::-webkit-scrollbar-corner {
            background-color: transparent;
        }

        /* 滚动条滑块 */
        &:-webkit-scrollbar-thumb {
            border-radius: 10px;
            width: 10px;
            -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            background: white;
        }

        /* 滚动条轨道 */
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            background: rgb(10, 39, 50);
        }

        /* 滚动条两端按钮 */
        &::-webkit-scrollbar-button {
        }
    }
}
</style>
