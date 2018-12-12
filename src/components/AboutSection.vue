<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 title-center title-top">
                <h2 id="news-h2">{{$t("page.fourthtitle")}}</h2>
            </div>
            <div class="col-md-6 title-about-center">
                <h1 class="about-h1">{{$t("aboutus.understandus")}}</h1>
                <p class="about-p">&nbsp;&nbsp;&nbsp;&nbsp;{{$t("aboutus.groups")}}</p>
                <div class="row">
                    <img class="about-pic" src="https://mornmist.daijiale.cn/chinamobile.png">
                    <img class="about-pic" src="https://mornmist.daijiale.cn/baidu.png">
                    <img class="about-pic" src="https://mornmist.daijiale.cn/huawei">
                </div>

                <div class="row">
                    <img class="about-pic" src="https://mornmist.daijiale.cn/tecent.png">
                    <img class="about-pic" src="https://mornmist.daijiale.cn/didi.png">
                    <img class="about-pic" src="https://mornmist.daijiale.cn/protocollab.jpg">
                </div>
            </div>
            <div class="col-md-6 title-about-center">
                <h1 class="about-h1">{{$t("aboutus.contactus")}}</h1>
                <p class="about-p">{{$t("aboutus.contact")}}</p>
                <h5><img class="icon-about" src="https://mornmist.daijiale.cn/icon-wx.png">{{$t("aboutus.wechat")}}</h5>
                <img style="width:250px" src="https://mornmist.daijiale.cn/qrcode_mornmist.jpg">
            </div>
        </div>

        <div class="row title-center footer-bg">
            Copyright © 2018 MornMist Inc. All Rights Reserved.
        </div>
    </div>
</template>


<script>
    export default {
        name: 'AboutSection',
        props: {},
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .title-about-center {
        margin-top: 2%;
        text-align: center;
    }

    .title-top {
        margin-top: 14%;
    }

    .about-h1 {
        font-size: 1.8em;
        font-weight: 300;

    }

    .icon-about {
        width: 25px;
        height: 25px;
    }

    .about-p {
        font-size: 1.2em;
        font-weight: 400;
    }

    .about-pic {
        padding: 2px;
        width: 150px;
    }
</style>