<template>
    <div>
        <home-nav></home-nav>
        <home-banner></home-banner>
        <home-product></home-product>
        <home-three></home-three>
        <about-us></about-us>
    </div>
</template>
<script type="text/ecmascript-6">
    import HomeNav from '@/modules/user/views/home/homeNav'
    import HomeBanner from '@/modules/user/views/home/homeBanner'
    import homeProduct from '@/modules/user/views/home/homeProduct'
    import homeThree from '@/modules/user/views/home/homeThree'
    import AboutUs from '@/modules/user/views/home/aboutUs'
    export default {
        data () {
            return {}
        },
        methods: {},
        components: {
            HomeNav,
            HomeBanner,
            homeProduct,
            homeThree,
            AboutUs
        }
    }
</script>

<style lang="stylus" scoped>

</style>
