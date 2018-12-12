<template>
    <div class="animated fadeInUp">
        <div class="navbar-header">
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
            </button>
            <!-- lOGO -->
            <div id="logo">
                <a href="#"><img id="logo-img" class="logo-img" src="https://mornmist.daijiale.cn/websitelogo.png"></a>
            </div>
        </div>
        <div class="collapse navbar-collapse">
            <ul id="menulist" class="nav navbar-nav navbar-right">
                <li data-menuanchor="home" style="margin-top:15px" class="active"><a id='menu-list-home' href="#home">{{
                        $t("menu.home ")}}</a></li>
                <li data-menuanchor="service" style="margin-top:15px"><a id='menu-list-service' href="#service">{{
                        $t("menu.service ")}}</a></li>
                <li data-menuanchor="news" style="margin-top:15px"><a id='menu-list-news' href="#news">{{
                        $t("menu.news ")}}</a></li>
                <li data-menuanchor="about" style="margin-top:15px"><a id='menu-list-about' href="#about">{{
                        $t("menu.about ")}}</a></li>
                <li style="margin-top:15px"><a id='menu-list-rec' href="https://www.zhipin.com/gongsi/149a6e989092f03d1XJ62d-8GA~~.html?ka=search_rcmd_company_149a6e989092f03d1XJ62d-8GA~~"
                        target="_blank">{{ $t("menu.recruitment ")}}</a></li>
                <li><a id='menu-list-lab' href="https://github.com/mornmist" class="smoothScroll" target="_blank"><i id='menu-list-lab-i'
                            class="menu-icon-github"></i>{{$t("menu.lab")}}</a></li>
                <li><a id='menu-list-slack' href="https://mornmist.slack.com" class="smoothScroll" target="_blank"><i
                            class="menu-icon-slack"></i>{{$t("menu.community")}}</a></li>
                <li>
                    <div id="lang-select-wrap">
                        <label id="lang-select-label"><i class="fa fa-globe"></i><span> {{ $t("menu.lang") }}</span></label>
                        <select v-model="$i18n.locale" id="lang-select" data-canonical="">
                            <option value="zh_cn">简体中文</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #logo {
        position: relative;
        display: inline-block;
        float: left;
        width: 250px;
        height: 90px;
        margin: 1px;
        z-index: 99;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
    }

    .logo-img {
        width: 100%;
        height: 100%;
        margin-bottom: 1px;
    }

    .menu-icon-github {
        display: inline-block;
        height: 30px;
        width: 30px;
        background: url('../assets/images/icon-github-w.png') no-repeat 0 0;
        background-size: 24px auto;
        position: relative;
        top: 5px;
    }

    .menu-icon-github-b {
        display: inline-block;
        height: 30px;
        width: 30px;
        background: url('../assets/images/icon-github-b.png') no-repeat 0 0;
        background-size: 24px auto;
        position: relative;
        top: 5px;
    }

    .menu-icon-slack {
        display: inline-block;
        height: 30px;
        width: 30px;
        background: url('../assets/images/icon-slack.png') no-repeat 0 0;
        background-size: 24px auto;
        position: relative;
        top: 6px;
    }
</style>