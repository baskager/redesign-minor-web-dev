module.exports = class Presentation {
  constructor(element, slides, subtitleObj) {
    this.wrapper = element;
    this.media = this.wrapper.querySelector(".media");
    this.video = this.wrapper.querySelector(".media video");
    this.slideEl = this.wrapper.querySelector(".media .current-slide");
    this.slidesEl = this.wrapper.querySelector(".slides");
    this.slideLinks = this.wrapper.querySelector(".current-slide + .links");
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

    // Function that creates slides and adds them to the template.
    this.createSlides = function() {
      this.slides.forEach(slide => {
        let btn = document.createElement("button");
        let img = document.createElement("img");
        img.src = slide.img;

        btn.addEventListener("click", ev => {
          this.changeTime(slide.startTime);
          this.updatePresentation();
        });

        btn.insertAdjacentElement("beforeend", img);

        this.slideNodes.push(btn);
        this.slidesEl.insertAdjacentElement("beforeend", btn);
      });
    };

    // Get the slide that where the currenttime is between the start and endtime
    this.getSlide = function(currentTime) {
      let currentSlide = null;

      // Filter
      this.slides.filter(function(slide) {
        if (currentTime >= slide.startTime && currentTime <= slide.endTime) {
          currentSlide = slide;
        }
      });

      return currentSlide;
    };

    // Set active state of the slide
    this.setActiveSlide = function(slide) {
      this.slideNodes.forEach(function(slide) {
        slide.classList.remove("active");
      });

      this.currentSlideEl = this.slideNodes[slide.index];
      this.currentSlideEl.classList.add("active");
    };

    this.setLinks = function(slide) {
      if (slide.links.length) {
        this.slideLinks.innerHTML = "";

        slide.links.forEach(link => {
          let linkTemplate = `<li><a href="${link}">${link}</a></li>`;
          this.slideLinks.insertAdjacentHTML("beforeend", linkTemplate);
        });
      } else {
        this.slideLinks.innerHTML = "";
      }
    };

    this.setSlide = function() {
      let slide = this.getSlide(this.video.currentTime);
      if (slide) {
        this.setLinks(slide);
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
      document.addEventListener("keydown", ev => {
        if (ev.shiftKey && ev.keyCode === 32) {
          ev.preventDefault();
          this.playPause();
        }
      });

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
