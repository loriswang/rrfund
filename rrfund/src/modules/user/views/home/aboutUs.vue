<template>
    <div class="about-wrap">
        <div class="about-inner">
            <div class="about-left">
                <div class="about-l-t">
                    <div class="chinese">
                        <h6>关于收益</h6>
                        <p>让每个人都可以参与区块链资产的量化交易</p>
                        <p>投资获得超高收益</p>
                        <p>近一年年化收益超过120%</p>
                    </div>
                    <div class="eng">
                        <h6>Receipts on</h6>
                        <p>
                            Allow everyone to participate in the quantified transaction investment of blockchain assets to obtain ultra-high returns and provide professional services, and the annual return is more than 120.</p>
                    </div>
                </div>
                <div class="about-l-b">
                    <div class="chinese">
                        <h6>RRFUND团队</h6>
                        <p>团队核心成员来自于国内外一线金融机构（中银集团、摩根斯坦利、摩根大通等），具备丰富的低风险程序化对冲交易经验。拥有独立研发的量</p>
                    </div>
                    <div class="eng">
                        <h6>RRFUND Team</h6>
                        <p>
                            The core members of the team come from domestic and foreign front-line financial institutions (bank of China, Morgan Stanley, jp Morgan, etc.). They have rich experience in low-risk programmed hedging trading, have independently developed quantitative hedging trading system and relatively mature cross-market, inter-period and inter-variety hedging arbitrage trading model.</p>
                    </div>
                </div>
            </div>
            <div class="about-right">
                <div class="chinese">
                    <h6>关于我们</h6>
                    <p>
                        RRFUND是全球领先的区块链资产量化基金。旗下有区块链资产量化管理、市值管理等业务，交易市场覆盖美国、韩国、澳大利亚、欧洲、新加坡等多个全球知名交易市场，目前服务的客户覆盖美国、韩国、新加坡、马来西亚、中国大陆等区域。</p>
                </div>
                <div class="eng">
                    <h6>About Us</h6>
                    <p>
                        RRFUND is  the world's leading blockchain asset quantitative fund. Its business includes quantitative asset management of blockchain, market value management, etc. Its trading market covers a number of well-known global trading markets such as the United States, South Korea, Australia, Europe and Singapore. Currently, the clients it serves cover the United States, South Korea, Singapore, Malaysia, mainland China and other regions.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" scoped>
    .about-wrap
        width: 100%
        height: 83.3rem
        text-align: left
        background: url("~@/assets/img/about-bg_03.jpg") center no-repeat
        background-size: 100% auto
        margin-bottom: 5.2rem
        .about-inner
            display: flex
            width: 100rem
            margin: 0 auto
            height: 100%
            .about-left
                flex: 1
                height: 100%
                .about-l-t
                    height: 40%
                    background-color: #ffffff
                    color: #333333
                .about-l-b
                    height: 60%
                    background-color: #2738aa
                .about-l-t, .about-l-b
                    position: relative
                    width: 100%
                    & > .chinese
                        position: absolute
                        top: 2.83rem
                        left: 5rem
                        width: 30.4rem
                        & > h6
                            font-size: 3.33rem
                            line-height: 5.67rem
                            font-weight: 300
                        & > p
                            font-size: 1.5rem
                            line-height: 2rem
                    & > .eng
                        position: absolute
                        bottom: 2.83rem
                        right: 5rem
                        width: 18.6rem
                        & > h6
                            line-height: 4rem
                            font-size: 1.8rem
                            font-weight: 500
                        & > p
                            font-size: 1.16rem
                            line-height: 1.5rem
            .about-right
                flex: 1
                height: 100%
                background-color: #132b66
                position: relative
                & > .chinese
                    position: absolute
                    top: 2.83rem
                    left: 5rem
                    width: 30.4rem
                    & > h6
                        font-size: 3.33rem
                        line-height: 5.67rem
                        font-weight: 300
                    & > p
                        font-size: 1.5rem
                        line-height: 2rem
                & > .eng
                    position: absolute
                    bottom: 2.83rem
                    right: 5rem
                    width: 18.6rem
                    & > h6
                        line-height: 4rem
                        font-size: 1.8rem
                        font-weight: 500
                    & > p
                        font-size: 1.16rem
                        line-height: 1.5rem
</style>
