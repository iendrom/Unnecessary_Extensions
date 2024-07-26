function enableLoop() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.loop = true;
    });
  }
  
  window.addEventListener('load', enableLoop);
  
