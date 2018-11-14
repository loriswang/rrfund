<template>
    <div>
        <detail-nav></detail-nav>
        <echarts></echarts>
    </div>
</template>
<script type="text/ecmascript-6">
    import DetailNav from './detailNav.vue'
    import Echarts from './echarts.vue'

    export default {
        name: 'detail',
        data () {
            return {}
        },
        methods: {},
        components: {
            DetailNav,
            Echarts
        }
    }
</script>

<style lang="stylus" scoped>

</style>
