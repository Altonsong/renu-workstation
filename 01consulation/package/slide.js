
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(console.error);
  } else {
    document.exitFullscreen().catch(console.error); 
  }
}

function fullScreenImage() {

  const slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
  if (!document.fullscreenElement) {
    slideshowContainer.requestFullscreen().catch(console.error);
    const slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.width = "100vw";
      slides[i].style.height = "100vh";
    }
    
    // 添加键盘事件监听器
    document.addEventListener('keydown', handleKeyPress);
  } else {
    document.exitFullscreen().catch(console.error);
  }


  // const slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
  // if (!document.fullscreenElement) {
  //   slideshowContainer.requestFullscreen().catch(console.error);
  //   const slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
  //   for (let i = 0; i < slides.length; i++) {
  //     slides[i].style.width = "100vw";
  //     slides[i].style.height = "100vh";
  //   }
  // } else {
  //   document.exitFullscreen().catch(console.error);
  // }

  // document.addEventListener('keydown', exitFullScreenImageOnEsc);
  // document.addEventListener('keydown', changeSlideOnArrowKey);
}

function handleKeyPress(event) {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    if (event.key === "ArrowLeft") {
      plusSlides(-1);
    } else {
      plusSlides(1);
    }
    event.preventDefault(); // 防止浏览器默认行为
  }
}


function exitFullScreenImageOnEsc(event) {
  if (event.key === "Escape") {
    exitFullScreenImage();
  }
}

function exitFullScreenImage() {
  if (document.exitFullscreen) {
    document.exitFullscreen().catch(console.error);
  }

  document.removeEventListener('keydown', exitFullScreenImageOnEsc);
  document.removeEventListener('keydown', changeSlideOnArrowKey);
}

function changeSlideOnArrowKey(event) {
  if (event.key === "ArrowLeft") {
    plusSlides(-1);
    event.preventDefault(); // 防止浏览器默认行为
  } else if (event.key === "ArrowRight") {
    plusSlides(1);
    event.preventDefault(); // 防止浏览器默认行为
  }
}
