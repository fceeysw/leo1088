;!function (window, undefined) {
    "use strict";

    var layer = window.layer;
    layer.localesConfig = layer.localesConfig || {};

    layer.v = layer.v + "-i18n";

    function defineLocale(names, config) {
        for (var i in names) {
            layer.localesConfig[names[i]] = config
        }
    }

    defineLocale(['zh', 'zh-CN'], {
        btn: ['确定', '取消'],
        title: '消息',
        noImage: '有没图片',
        imageBtn: ['下一张', '不看了'],
        imageError: '当前图片地址异常<br>是否继续查看下一张？',
        maxLengthError: '最多输入{}个数字'
    })

    defineLocale(['en',], {
        btn: ['Ok', 'Cancel'],
        title: 'Information',
        noImage: 'No image',
        imageBtn: ['Next', 'Cancel'],
        imageError: 'The image url is error.<br>To the next one?',
        maxLengthError: 'Enter a maximum of {} digits.'
    })
}(window);
