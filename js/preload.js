function preloadPage(iframeSrc, cssHref) {
  console.log(`Preloading page with iframeSrc: ${iframeSrc} and cssHref: ${cssHref}`); 
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = encodeURI(iframeSrc);

  iframe.onload = () => {
    console.log(`Iframe loaded successfully: ${iframeSrc}`);
  };
  iframe.onerror = () => {
    console.error(`Error loading iframe: ${iframeSrc}`);
  };


  if (cssHref) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = encodeURI(cssHref);
      document.head.appendChild(link);
      console.log(`CSS link added: ${cssHref}`);
  }

  document.body.appendChild(iframe);
  console.log(`Iframe added with src: ${iframeSrc}`); 
}

// 预加载 experience 页面
function preloadExperience() {
  preloadPage('Experience/myExperience.html', 'Experience/myExperience.css');
}

// 预加载御坂美琴图片集
function preloadGallery() {
  preloadPage('../动漫/御坂美琴/图片集.html');
}

// 预加载御坂美琴地图
function preloadMap() {
  preloadPage('Hobby/动漫/御坂美琴/map-picture.html', 'Hobby/动漫/御坂美琴/map-picture.css');
}

// 预加载 Travel 页面
function preloadTravel() {
  preloadPage('Hobby/travel/travel.html', 'Hobby/travel/travel.css');
}

console.log('JavaScript file loaded successfully!');
