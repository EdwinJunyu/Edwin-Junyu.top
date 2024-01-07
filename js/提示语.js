if (!sessionStorage.getItem('visited')) {
    // 如果标志不存在，显示欢迎消息
    alert("欢迎来到Edwin的个人网页👏👏👏\n此网页是一个简易的静态网页\n采用HTML，CSS和少量的Javascript！\n之后我还会继续更新网站内容\n并且往后做的Java项目会以此主页作为入口，敬请期待！\n注：不同平台设计上仍需要改进分辨率适配问题\n新手出品大佬请见谅！");
    alert("Welcome to Edwin's personal webpage! 👏👏👏\nThis is a simple static website, made with HTML, CSS, and a bit of JavaScript!\nI will continue to update the content of this site, and future Java projects will be accessible through this homepage, so stay tuned!\nNote: The design still needs improvement for resolution adaptation across different platforms.\nPlease excuse any shortcomings, as this is a beginner's work!");
    // 将标志存储到会话存储中，以表示用户已经访问过页面
    sessionStorage.setItem('visited', 'true');
}


  