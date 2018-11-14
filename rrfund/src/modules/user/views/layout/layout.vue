<template>
    <div>
        <el-container class="container-wrap">
            <!--<el-header class="content"></el-header>-->
            <el-main class="el-main">
                <router-view></router-view>
            </el-main>
            <el-footer>
                <index-footer></index-footer>
            </el-footer>
        </el-container>
    </div>
</template>
<script type="text/ecmascript-6">
    import IndexFooter from '@/modules/user/views/home/indexFooter'

    export default {
        data () {
            return {}
        },
        methods: {},
        components: {
            IndexFooter
        }
    }
</script>

<style lang="stylus" scoped>
    .container-wrap
        display: flex
        min-height: 100vh
        flex-direction: column
        background: url('~@/assets/img/banner2_01.jpg')
        background-repeat: no-repeat
        background-size: 100% auto
        .el-header
        .el-main
            flex: 1
</style>
