<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 title-center">
                    <h2 id="news-h2">{{$t("page.thirdtitle")}}</h2>
                </div>
            </div>
            <div id="swiper" class="minCarousel">
                <Swiper />
            </div>
            <div id="news-feed" class="row" style="margin-top:20px;">
                <div class="col-md-6">
                    <a v-bind:href="mediaData.fourthnews.url" target="_blank" style="color:#000">
                    <div class="media media-bottom">
                        <div class="media-left media-middle">
                            <img v-bind:src="mediaData.fourthnews.img" class="media-object media-img"  alt="">
                        </div>
                        <div class="media-body">
                             <h4 class="media-heading media-news-title">{{$t("media.fourthnews.title") }}</h4>
                            {{$t("media.fourthnews.content") }}
                            <br><span class="media-date">{{$t("media.fourthnews.date") }}</span>
                        </div>
                    </div>
                    </a>
                    <a v-bind:href="mediaData.secondnews.url" target="_blank" style="color:#000">
                    <div class="media media-bottom">
                        <div class="media-left media-middle">
                                <img v-bind:src="mediaData.secondnews.img" class="media-object media-img" alt="">
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading media-news-title">{{$t("media.secondnews.title") }}</h4>
                            {{$t("media.secondnews.content") }}
                            <br><span class="media-date">{{$t("media.secondnews.date") }}</span>
                        </div>
                    </div>
                    </a>
                </div>
                <div class="col-md-6">
                    <a v-bind:href="mediaData.thirdnews.url" target="_blank" style="color:#000">
                    <div class="media media-bottom">
                        <div class="media-left media-middle">
                                <img v-bind:src="mediaData.thirdnews.img" class="media-object media-img" alt="" />
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading media-news-title">{{$t("media.thirdnews.title") }}</h4>
                            {{$t("media.thirdnews.content") }}
                            <br><span class="media-date">{{$t("media.thirdnews.date") }}</span>
                        </div>
                    </div>
                    </a>
                    <a v-bind:href="mediaData.firstnews.url" target="_blank" style="color:#000">
                    <div class="media media-bottom">
                        <div class="media-left media-middle">
                            <a href="#">
                                <img v-bind:src="mediaData.firstnews.img" class="media-object media-img"  alt="">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading media-news-title">{{$t("media.firstnews.title") }}</h4>
                            {{$t("media.firstnews.content") }}
                            <br><span class="media-date">{{$t("media.firstnews.date") }}</span>
                        </div>
                    </div>
                    </a>
                </div>
                <div id="news-button" class="row col-md-12 text-center">
                <button class="next button-next" @click="moveMoreNewsPage();">{{$t("button.moreinfo")}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from './Swiper.vue'
    var zh_json_data = require('../lang/app_zh.json')
    export default {
        name: 'NewsSection',
        components: {
            Swiper
        },
        data () {
            return {
             mediaData: zh_json_data.media
            }
        },
        methods:{
            moveMoreNewsPage(){
                    
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .media-date {
        color: rgb(110, 109, 109);
    }
    .media-img {
        width: 200px;
    }
    .media-news-title {
        color: #000;
        font-weight: 500;
    }
    .media-bottom{
        margin-bottom:15px;
    }
    .minCarousel {
        position: relative;
        margin: 0 auto;
        width: 100%;
        display: block;
    }

</style>