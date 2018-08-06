var logo = new Vue({
    el: '#logo',
    data: {
        logoimg: './images/logo.png',
        logourl:'index.html'
    }
});

var menu = new Vue({
    el: '#menu',
    data: {
        home: '首页',
        service:'服务',
        product:'产品',
        recruitment:'招聘',
        partner:'伙伴',
        lab:'Github|晨雾Lab',
        community:'Slack|晨雾社区',
        language:'English',

        homeurl: 'index.html',
        serviceurl:'',
        producturl:'',
        recruitmenturl:'',
        partnerurl:'',
        laburl:'https://github.com/mornmist',
        communityurl:'https://mornmist.slack.com',
        languageurl:'',
    }
});


var slogan = new Vue({
    el: '#slogan',
    data: {
        slogantitle: '让更多人看见并迈入雾计算时代',
        slogansubtitle:'专注于雾存储、边缘计算、分布式计算、网格计算等科技产品落地',
    }
});
