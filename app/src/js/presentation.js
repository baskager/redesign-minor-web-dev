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

class Subtitles {
  constructor(element, subtitles, mouseEventElement) {
    this.interval = null;
    this.subtitleEl = element;
    this.subtitles = subtitles;

    this.alignSubs = function(side) {
      this.subtitleEl.classList.remove("right");
      this.subtitleEl.classList.remove("left");
      this.subtitleEl.classList.add(side);
    };

    this.getSubtitle = function(timestamp) {
      let vidTime = presentation.video.currentTime * 1000;

      const currentSubtitles = this.subtitles.filter(function(sub) {
        if (vidTime > sub.startTime && vidTime < sub.endTime) {
          return sub;
        }
      });

      let currentSub = currentSubtitles[currentSubtitles.length - 1];
      return currentSub;
    };

    this.setSubtitle = function() {
      let currentSub = this.getSubtitle();
      let text = "";

      if (currentSub) {
        text = currentSub.text;
      }

      this.subtitleEl.innerText = text;
    };

    this.checkCursorSide = function(cursorPos) {
      let screenWidth = window.innerWidth;
      let screenCenter = screenWidth / 2;
      let side;

      if (cursorPos > screenCenter) {
        side = "right";
      } else {
        side = "left";
      }

      return side;
    };

    this.addEvents = function() {
      console.log("events added");

      mouseEventElement.addEventListener("mousemove", ev => {
        let side = this.checkCursorSide(ev.screenX);
        this.alignSubs(side);
      });

      document.addEventListener("keydown", ev => {
        const keyCode = event.keyCode;
        // keycode 37 = arrowLeft
        // keycode 39 = arrowRight
        if (keyCode == 37) {
          this.alignSubs("left");
        } else if (keyCode == 39) {
          this.alignSubs("right");
        }
      });
    };

    this.init = function() {
      this.addEvents();
    };
  }
}

class Presentation {
  constructor(element, subtitleObj) {
    this.wrapper = element;
    this.media = this.wrapper.querySelector(".media");
    this.video = this.wrapper.querySelector(".media video");
    this.slideEl = this.wrapper.querySelector(".media .current-slide");
    this.slidesEl = this.wrapper.querySelector(".slides");
    this.seekerEl = this.wrapper.querySelector(".seeker");
    this.speedUpEl = this.wrapper.querySelector(".speed-up");
    this.speedDownEl = this.wrapper.querySelector(".speed-down");
    this.speedDropdown = this.wrapper.querySelector("#set-speed");
    this.currentSlideEl = null;
    this.playing = false;
    this.slideNodes = [];
    this.videoDuration = 0;
    this.interval = null;

    this.createSlides = function() {
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
    };

    this.getSlide = function(currentTime) {
      let currentSlide = null;

      slides.filter(function(slide) {
        if (currentTime >= slide.startTime && currentTime <= slide.endTime) {
          currentSlide = slide;
        }
      });

      return currentSlide;
    };

    this.setActiveSlide = function(slide) {
      this.slideNodes.forEach(function(slide) {
        slide.classList.remove("active");
      });

      this.currentSlideEl = this.slideNodes[slide.index];
      this.currentSlideEl.classList.add("active");
    };

    this.setSlide = function() {
      let slide = this.getSlide(this.video.currentTime);
      if (slide) {
        this.slideEl.src = slide.img;
        this.setActiveSlide(slide);
      }
    };

    this.changeTime = function(time) {
      this.video.currentTime = time;
    };

    this.setSeeker = function() {
      this.video.addEventListener("durationchange", ev => {
        this.duration = this.video.duration;
        this.seekerEl.max = this.duration;
      });
    };

    this.updateSeeker = function() {
      this.seekerEl.value = this.video.currentTime;
    };

    this.handleSeeker = function() {
      const _this = this;
      this.seekerEl.addEventListener("change", function() {
        _this.changeTime(this.value);
        _this.updatePresentation();
      });
    };

    this.startInterval = function() {
      const _this = this;
      this.interval = setInterval(function() {
        _this.updatePresentation();
      }, config.intervalTime);
    };

    this.updatePresentation = function() {
      this.setSlide();
      this.updateSeeker();

      if (subtitleObj) {
        subtitleObj.setSubtitle();
      }

      if (this.video.currentTime === this.duration) {
        this.pause();
      }
    };

    this.play = function() {
      location.href = "#presentation";
      this.video.play();
      this.playing = true;
      this.media.classList.remove("paused");
      this.startInterval();
    };

    this.pause = function() {
      this.video.pause();
      this.playing = false;
      this.media.classList.add("paused");
      clearInterval(this.interval);
    };

    this.playPause = function() {
      if (!this.playing) {
        this.play();
      } else {
        this.pause();
      }
    };

    this.speedUp = function() {
      this.video.playbackRate += 0.2;
    };

    this.speedDown = function() {
      this.video.playbackRate -= 0.2;
    };

    this.setSpeed = function(speed) {
      this.video.playbackRate = speed;
    };

    this.addEvents = function() {
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
    };

    this.init = function() {
      this.createSlides();
      this.setSeeker();
      this.handleSeeker();
      this.updatePresentation();
      this.addEvents();
    };
  }
}

const subtitleElement = document.querySelector(".subtitle");
const presentationElement = document.querySelector(".presentation");

const subtitles = new Subtitles(
  subtitleElement,
  subs,
  presentationElement.querySelector(".media")
);

const presentation = new Presentation(presentationElement, subtitles);

if (document.querySelector(".presentation")) {
  presentation.init();
  subtitles.init();
}
