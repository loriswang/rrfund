<template>
    <div>
        <div class="home-nav">
            <div class="logo">
                <img src="@/assets/img/logo.png"/>
                <div class="clear"></div>
            </div>
            <ul class="nav">
                <li>
                    <!--<a href="javascript:void(0)" v-anchor="0">首页</a>-->
                    <router-link to="/">首页</router-link>
                </li>
            </ul>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    export default {
        data () {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
    .home-nav
        width: 100rem
        margin: 0 auto
        display: flex
        justify-content: space-between
        .logo
            flex: 0 0 9.16rem
            width: 9.16rem
            & > img
                width: 100%
        .nav
            flex: 1
            & > li
                float: right
                line-height: 10.6rem
                list-style: none
                & > a
                    margin: 0 3.4rem
                    font-size: 2rem

</style>
