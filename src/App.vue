<template>
    <div id="app">
        <!-- PRE LOADER
        <div class="preloader">
            <div class="spinner">
                <span class="sk-inner-circle"></span>
            </div>
        </div> -->
        <div role="navigation" class="navbar custom-navbar navbar-fixed-top">
            <div class="container">
                <!-- NAVBAR HEADER -->
                <Menu />
            </div>
        </div>

        <full-page :options="options" id="fullpage">
            <div id="home-section" class="section home-gif">
                <BannerSection />
            </div>
            <div class="section">
                <ServiceSection />
            </div>
            <div class="section">
                <NewsSection />
            </div>
            <div class="section">
                <AboutSection />
                <footer>
                </footer>
            </div>
        </full-page>
    </div>
</template>

<script>
    import Menu from './components/Menu.vue'
    import ServiceSection from './components/ServiceSection.vue'
    import NewsSection from './components/NewsSection.vue'
    import AboutSection from './components/AboutSection.vue'
    import BannerSection from './components/BannerSection.vue'

    export default {
        name: "app",
        components: {
            Menu,
            BannerSection,
            ServiceSection,
            NewsSection,
            AboutSection
        },
        data() {
            return {
                options: {
                    afterLoad: this.afterLoad,
                    lazyLoading: true,
                    menu: "#menulist",
                    scrollingSpeed: 1500,
                    navigation: true,
                    licenseKey: null,
                    anchors: ["home", "service", "news", "about"],
                    sectionsColor: [
                        "#000",
                        "#fff",
                        "#fff",
                        "#fff"
                    ]
                }
            };
        },
        methods: {
            moveSectionDown() {
                fullpage_api.moveSectionDown();
            },
            toggleMenuColor() {
                if ('home' == fullpage_api.getActiveSection().anchor) {
                    document.getElementById("logo-img").src = "https://mornmist.daijiale.cn/mornmist-logo-w.png";
                    document.querySelector("#menu-list-lab-i").setAttribute('class', 'menu-icon-github');
                    document.querySelector("#menu-list-home").setAttribute('style', 'color:white;backgroud:white');
                    document.querySelector("#menu-list-service").setAttribute('style', 'color:white');
                    document.querySelector("#menu-list-news").setAttribute('style', 'color:white');
                    document.querySelector("#menu-list-rec").setAttribute('style', 'color:white');
                    document.querySelector("#menu-list-about").setAttribute('style', 'color:white');
                    document.querySelector("#menu-list-lab").setAttribute('style', 'color:white');
                    document.querySelector("#menu-list-slack").setAttribute('style', 'color:white');
                    document.querySelector("#lang-select-label").setAttribute('style', 'color:white');

                } else {
                    document.getElementById("logo-img").src =
                        "https://mornmist.daijiale.cn/mornmist-logo-b.png";
                    document.querySelector("#menu-list-lab-i").setAttribute('class', 'menu-icon-github-b');
                    document.querySelector("#menu-list-home").setAttribute('style', 'color:black');
                    document.querySelector("#menu-list-service").setAttribute('style', 'color:black');
                    document.querySelector("#menu-list-news").setAttribute('style', 'color:black');
                    document.querySelector("#menu-list-rec").setAttribute('style', 'color:black');
                    document.querySelector("#menu-list-about").setAttribute('style', 'color:black');
                    document.querySelector("#menu-list-lab").setAttribute('style', 'color:black');
                    document.querySelector("#menu-list-slack").setAttribute('style', 'color:black');
                    document.querySelector("#lang-select-label").setAttribute('style', 'color:black');
                    document.querySelector("#menu-list-lab-i").setAttribute('class', 'menu-icon-github-b');

                }
            },
            afterLoad() {
                //增加animate.css动效
                this.toggleMenuColor();
                if ('home' == fullpage_api.getActiveSection().anchor) {
                    document.querySelector("#banner h1").setAttribute('class', 'a-delay5 animated zoomIn');
                    document.querySelector("#banner p").setAttribute('class', 'a-delay9 animated fadeInUp');
                    document.querySelector("#banner button").setAttribute('class',
                        'a-delay9 animated bounceInUp next button-next');
                } 
            }
        }
    };
</script>

<style>
    .title-center {
        margin-top: 7%;
        text-align: center;
    }

    #banner {
        color: #fff;
        text-align: center;
        margin-top: 24%;
    }

    #banner h1 {
        font-size: 5em;
        line-height: 1.5em;
        font-weight: 120;
    }

    #banner p {
        color: #fff;
        font-size: 1.6em;
    }

    .a-delay5 {
        animation-delay: .5s;
    }

    .a-delay9 {
        animation-delay: .9s;
    }

    .button-next {
        position: relative;
        margin-top: 5%;
        font-size: 18px;
        font-weight: normal;
        letter-spacing: 0.5px;
        padding: 10px 25px;
        background: #000;
        color: #fff;
        border-radius: 3px;
        min-width: 100px;
        border: none;
        outline: none;
        vertical-align: middle;
        cursor: pointer;
        white-space: nowrap;
        touch-action: manipulation;
    }

    .button-next:hover {
        background: #fff;
        color: #000;
    }


    .spinner {
        border: 1px solid transparent;
        border-radius: 5px;
        position: relative;
    }

    .spinner:before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 45px;
        height: 45px;
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 50%;
        border: 1px solid #959595;
        border-top-color: #ffffff;
        animation: spinner 0.9s linear infinite;
    }

    @keyframes spinner {
        to {
            transform: rotate(360deg);
        }
    }

    .overlay-home {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    /* 提取组件footer */
    .footer-bg{
        position: relative;
        color: #000;
    }
</style>