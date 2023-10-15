window.onload = function() {
    if (!sessionStorage.getItem('visited')) {
        // 如果标志不存在，显示欢迎消息
        alert("欢迎来到Edwin的个人网页👏👏👏\n此网页是一个简易的静态网页\n采用HTML，CSS和少量的Javascript！\n之后我还会继续更新网站内容\n注：电脑端及iPad观看最佳（不同平台设计上还有点适配问题，新手出品大佬请见谅！）");

        // 将标志存储到会话存储中，以表示用户已经访问过页面
        sessionStorage.setItem('visited', 'true');
    }
};

  