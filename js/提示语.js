if (!sessionStorage.getItem('visited')) {
    // 如果标志不存在，显示欢迎消息
    alert("欢迎来到Edwin的个人网页👏👏👏\n此网页为静态网页\n采用HTML，CSS和少量的Javascript！\n之后我还会继续更新网站内容\n并且往后做的Java项目会链接此主页，敬请期待！\n注：不同平台设计上仍需要改进分辨率适配问题\n新手出品大佬请见谅！\nWelcome to Edwin's personal webpage 👏👏👏\nThis webpage is a simple static page,\nbuilt with HTML, CSS, and a few JavaScript!\nI will continue updating the site content in the future,\nand upcoming Java projects will connect this homepage as one of the entry point. Stay tuned!\nNote: Resolution adaptation for different platforms still needs improvement");
    // 将标志存储到会话存储中，以表示用户已经访问过页面
    sessionStorage.setItem('visited', 'true');
}


  