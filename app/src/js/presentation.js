module.exports = class Presentation {
  constructor(element, slides, subtitleObj) {
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
    this.slides = slides;

    this.createSlides = function() {
      this.slides.forEach(slide => {
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

      this.slides.filter(function(slide) {
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
      }, 500);
    };

    this.updatePresentation = function() {
      this.setSlide();
      this.updateSeeker();

      if (subtitleObj) {
        subtitleObj.setSubtitle(this.video.currentTime);
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
};
