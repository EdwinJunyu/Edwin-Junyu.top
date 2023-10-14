function preloadExperience() {   //预加载experience页面
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = '../Experience/myExperience.html';
  
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'Experience/myExperience.css';
  
    document.head.appendChild(link);
    document.body.appendChild(iframe);
  }


  function preloadGallery() { //预加载御坂美琴图片集
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = '../动漫/御坂美琴/图片集.html';
  
    document.head.appendChild(link);
    document.body.appendChild(iframe);
  }

  function preloadMap() {  //预加载御坂美琴地图
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = '../动漫/御坂美琴/map-picture.html';
  
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '../动漫/御坂美琴/map-picture.css';
  
    document.head.appendChild(link);
    document.body.appendChild(iframe);
  }

  function preloadTravel() {  //预加载Travel图片
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'Hobby/travel/travel.html';
  
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'Hobby/travel/travel.css';
  
    document.head.appendChild(link);
    document.body.appendChild(iframe);
  }