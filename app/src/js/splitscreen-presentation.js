// (function() {
const config = {
  intervalTime: 500
};

const slides = [
  {
    index: 0,
    img: "/img/slides/slide-1.png",
    startTime: 0,
    endTime: 12
  },
  {
    index: 1,
    img: "/img/slides/slide-2.png",
    startTime: 12,
    endTime: 24
  },
  {
    index: 2,
    img: "/img/slides/slide-3.png",
    startTime: 24,
    endTime: 111
  },
  {
    index: 3,
    img: "/img/slides/slide-4.png",
    startTime: 111,
    endTime: 113
  },
  {
    index: 4,
    img: "/img/slides/slide-5.png",
    startTime: 114,
    endTime: 150
  },
  {
    index: 5,
    img: "/img/slides/slide-6.png",
    startTime: 150,
    endTime: 180
  }
];

const subtitles = {
  interval: null,
  subtitles: subs,
  subtitleEl: document.querySelector(".subtitle"),
  alignSubs: function(side) {
    this.subtitleEl.classList.remove("right");
    this.subtitleEl.classList.remove("left");
    this.subtitleEl.classList.add(side);
  },
  getSubtitle: function(timestamp) {
    let vidTime = presentation.video.currentTime * 1000;

    const currentSubtitles = this.subtitles.filter(function(sub) {
      if (vidTime > sub.startTime && vidTime < sub.endTime) {
        return sub;
      }
    });

    let currentSub = currentSubtitles[currentSubtitles.length - 1];
    return currentSub;
  },
  setSubtitle: function() {
    let currentSub = this.getSubtitle();
    let text = "";

    if (currentSub) {
      text = currentSub.text;
    }

    this.subtitleEl.innerText = text;
  },
  checkCursorSide: function(cursorPos) {
    let screenWidth = window.innerWidth;
    let screenCenter = screenWidth / 2;
    let side;

    if (cursorPos > screenCenter) {
      side = "right";
    } else {
      side = "left";
    }

    return side;
  },
  setCursorEvent: function() {
    presentation.media.addEventListener("mousemove", ev => {
      let side = this.checkCursorSide(ev.screenX);
      this.alignSubs(side);
    });
  },
  init: function() {
    this.setCursorEvent();
  }
};

const presentation = {
  media: document.querySelector(".media"),
  video: document.querySelector(".media video"),
  slideEl: document.querySelector(".media .current-slide"),
  slidesEl: document.querySelector(".slides"),
  seekerEl: document.querySelector(".seeker"),
  speedUpEl: document.querySelector(".speed-up"),
  speedDownEl: document.querySelector(".speed-down"),
  speedDropdown: document.querySelector("#set-speed"),
  currentSlideEl: null,
  playing: false,
  slideNodes: [],
  videoDuration: 0,
  interval: null,
  createSlides: function() {
    slides.forEach(slide => {
      let img = document.createElement("img");
      img.src = slide.img;

      img.addEventListener("click", ev => {
        this.changeTime(slide.startTime);
        this.updatePresentation();
      });

      this.slideNodes.push(img);
      this.slidesEl.insertAdjacentElement("beforeend", img);
    });
  },
  getSlide: function(currentTime) {
    let currentSlide = null;

    slides.filter(function(slide) {
      if (currentTime >= slide.startTime && currentTime <= slide.endTime) {
        currentSlide = slide;
      }
    });

    return currentSlide;
  },
  setActiveSlide: function(slide) {
    this.slideNodes.forEach(function(slide) {
      slide.classList.remove("active");
    });

    this.currentSlideEl = this.slideNodes[slide.index];
    this.currentSlideEl.classList.add("active");
  },
  setSlide: function() {
    let slide = this.getSlide(this.video.currentTime);
    if (slide) {
      this.slideEl.src = slide.img;
      this.setActiveSlide(slide);
    }
  },
  slideChanged: function() {},
  changeTime: function(time) {
    this.video.currentTime = time;
  },
  setSeeker: function() {
    this.video.addEventListener("durationchange", ev => {
      this.duration = this.video.duration;
      this.seekerEl.max = this.duration;
    });
  },
  updateSeeker: function() {
    this.seekerEl.value = this.video.currentTime;
  },
  handleSeeker: function() {
    const _this = this;
    this.seekerEl.addEventListener("change", function() {
      _this.changeTime(this.value);
      _this.updatePresentation();
    });
  },
  startInterval: function() {
    const _this = this;
    this.interval = setInterval(function() {
      _this.updatePresentation();
    }, config.intervalTime);
  },
  updatePresentation: function() {
    this.setSlide();
    this.updateSeeker();
    subtitles.setSubtitle();

    if (this.video.currentTime === this.duration) {
      this.pause();
    }
  },
  play: function() {
    location.href = "#presentation";
    this.video.play();
    this.playing = true;
    this.media.classList.remove("paused");
    this.startInterval();
  },
  pause: function() {
    this.video.pause();
    this.playing = false;
    this.media.classList.add("paused");
    clearInterval(this.interval);
  },
  playPause: function() {
    if (!this.playing) {
      this.play();
    } else {
      this.pause();
    }
  },
  speedUp: function() {
    this.video.playbackRate += 0.2;
    console.log(this.video.playbackRate);
  },
  speedDown: function() {
    this.video.playbackRate -= 0.2;
    console.log(this.video.playbackRate);
  },
  setSpeed: function(speed) {
    this.video.playbackRate = speed;
    console.log(this.video.playbackRate);
  },
  addEvents: function() {
    this.media.addEventListener("click", ev => {
      this.playPause();
    });

    if (this.speedDropdown) {
      this.speedDropdown.addEventListener("change", ev => {
        this.setSpeed(Number(ev.target.value));
      });
    }

    if (this.speedDownEl) {
      this.speedDownEl.addEventListener("click", ev => {
        this.speedDown();
      });
    }

    if (this.speedUpEl) {
      this.speedUpEl.addEventListener("click", ev => {
        this.speedUp();
      });
    }
  },
  init: function() {
    this.createSlides();
    this.setSeeker();
    this.handleSeeker();
    this.updatePresentation();
    this.addEvents();
  }
};

if (document.querySelector(".presentation")) {
  presentation.init();
  subtitles.init();
}
