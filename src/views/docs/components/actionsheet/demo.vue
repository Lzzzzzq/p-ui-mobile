<template>
    <div style="min-height: 100vh">
        <n-wing-blank>
            <n-white-space></n-white-space>
            <n-button @click="actionSheetInit()">上拉action</n-button>
            <n-white-space></n-white-space>
            <n-button @click="nocancelAction()">不带cancel按钮action</n-button>
            <n-white-space></n-white-space>

            <n-action-sheet
                v-model="sheetVisible"
                :actions="actions"
                :cancelText="cancelText"
                @selected="handelSelect">
            </n-action-sheet>
        </n-wing-blank>
    </div>
</template>

<script>
export default {
    name: 'ActionSheetDemo',
    data () {
        return {
            actions: [
                '拍照',
                '从相册中选择',
                '从网页中选择'
            ],
            sheetVisible: false,
            cancelText:'取消'
        }
    },
    methods: {
        actionSheetInit(){
            this.sheetVisible = true
            this.cancelText = '取消'
        },
        nocancelAction(){
            this.sheetVisible = true
            this.cancelText = ''
        },
        handelSelect(item,index){
            this.$toast.info('item:'+item+'===index:'+index)
        }
    }
}
</script>
