<template>
    <div class="footer-wrap">
        <div class="footer-left">
            <div class="contact-email">
                <div class="email-title">合作邮箱:</div>
                <div class="email-inner">
                    <a href="mailto:leo@fbank.org">leo@fbank.org</a>
                    <a href="mailto:xuefeng@fbank.org">xuefeng@fbank.org</a>
                </div>
            </div>
            <div class="contact-email">
                <div class="email-title">合作电话:</div>
                <div class="email-inner">
                    <a href="javascript:void(0)">+86 186 1283 8288</a>
                    <a href="javascript:void(0)">+86 185 1802 8484</a>
                </div>
            </div>
        </div>
        <div class="footer-right">
            <div class=" footer-img img-kefu">
                <img src="@/assets/img/erweicode1.jpg"/>
                <p>客服微信</p>
            </div>
            <div class="footer-img img-wechat">
                <img src="@/assets/img/erweicode2.jpg"/>
                <p>微信公众号</p>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" scoped>
    .footer-wrap
        width: 100rem
        margin: 0 auto
        .footer-left
            width: 50%
            float: left
            .contact-email
                display: flex
                line-height: 2.67rem
                .email-title
                    flex: 0 0 6.67rem
                    font-size: 1.5rem
                .email-inner
                    flex: 1
                    margin-left: 1rem
                    text-align: left
                    & > a
                        display: block
                        text-decoration: none
                        font-size: 2rem
                        color: #ffffff
            .contact-email:nth-child(2)
                margin-top: 1rem
        .footer-right
            display: flex
            float: right
            .footer-img
                flex: 1
                padding: 0.5rem
                & > p
                    font-size: 1.5rem
                    line-height: 2.67rem

</style>
