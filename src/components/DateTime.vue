<template>
    <dv-border-box-10 class="DateTime">
        <!-- <dv-digital-flop :config="config" style="width: 500px; height: 200px" /> -->
        <span class="digital-font">{{ dateString }}</span>
    </dv-border-box-10>
</template>

<script>
import * as dayjs from 'dayjs';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'DateTime',
    data() {
        return {
            config: {
                number: [0, 0, 0, 0, 0, 0],
                content: '{nt}年{nt}月{nt}日 {nt}:{nt}:{nt}',
            },
            date: dayjs(),
        };
    },
    computed: {
        dateString() {
            return this.date.format('YYYY年MM月DD日 HH:mm:ss');
        },
    },
    created() {},
    mounted() {
        setInterval(() => {
            const date = dayjs();
            // console.debug('date:', this);
            // console.debug('date:', date.format('ss'));
            this.config = {
                number: [+date.format('YYYY'), +date.format('MM'), +date.format('DD'), +date.format('HH'), +date.format('mm'), +date.format('ss')],
                content: '{nt}年{nt}月{nt}日 {nt}:{nt}:{nt}',
            };

            this.date = date;
        }, 1000);
    },
    methods: {},
};
</script>
<style scoped lang="scss">
.DateTime {
    height: 5rem;
    width: 40rem;

    .digital-font {
        margin: 10px;
        font-family: 'sa-digital-number', Arial, Helvetica, sans-serif;
        font-size: 2rem;
        font-weight: bold;
        font-style: italic;
        color: #eee;
        text-shadow: 1px 1px black;
    }
}
</style>

<style lang="scss">
.DateTime {
    .border-box-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
