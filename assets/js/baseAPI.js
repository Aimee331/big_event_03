$(function () {
    //http://api-breakingnews-web.itheima.net
    $.ajaxPrefilter(function (options) {
        const baseUrl = 'http://api-breakingnews-web.itheima.net'
        options.url = baseUrl + options.url
    })
})  