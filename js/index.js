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


var home = new Vue({
    el: '#home',
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
        serviceurl:'服务',
        producturl:'产品',
        recruitmenturl:'招聘',
        partnerurl:'伙伴',
        laburl:'https://github.com/mornmist',
        communityurl:'https://mornmist.slack.com',
        languageurl:'English',
    }
});
