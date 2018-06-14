(function() {
  const config = {
    intervalTime: 1000
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

  const subs = [
    {
      index: 0,
      timestamp: 0,
      text: "Venenatis Cursus Commodo"
    },
    {
      index: 1,
      timestamp: 4,
      text: "Nullam Bibendum Porta Magna"
    },
    {
      index: 2,
      timestamp: 8,
      text: "Nulla vitae elit libero, a pharetra augue."
    }
  ];

  const subtitles = {
    interval: null,
    subtitles: subs,
    subtitleEl: document.querySelector(".subtitle"),
    getSubtitle: function(timestamp) {
      const currentSubtitles = this.subtitles.filter(function(sub) {
        if (presentation.video.currentTime > sub.timestamp) {
          return sub;
        }
      });

      let currentSub = currentSubtitles[currentSubtitles.length - 1];
      return currentSub;
    },
    setSubtitle: function(text) {
      this.subtitleEl.innerText = text;
    },
    startInterval: function() {
      const _this = this;
      this.interval = setInterval(function() {
        let currentSub = _this.getSubtitle();
        _this.setSubtitle(currentSub.text);
      }, config.intervalTime);
    },
    stopInterval: function() {
      clearInterval(this.interval);
    },
    init: function() {
      this.startInterval();
    }
  };

  const presentation = {
    media: document.querySelector(".media"),
    video: document.querySelector(".media video"),
    slideEl: document.querySelector(".media .current-slide"),
    slidesEl: document.querySelector(".slides"),
    seekerEl: document.querySelector(".seeker"),
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
          this.setSlide();
          this.updateSeeker();
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

      if (this.video.currentTime === this.duration) {
        this.pause();
      }
    },
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
    },
    play: function() {
      this.video.play();
      this.playing = true;
      this.media.classList.remove("paused");
      this.startInterval();
      subtitles.startInterval();
    },
    pause: function() {
      this.video.pause();
      this.playing = false;
      this.media.classList.add("paused");
      clearInterval(this.interval);
    },
    init: function() {
      this.createSlides();
      this.setSeeker();
      this.handleSeeker();
      this.updatePresentation();

      this.media.addEventListener("click", ev => {
        if (!this.playing) {
          this.play();
        } else {
          this.pause();
        }
      });
    }
  };

  if (document.querySelector(".presentation")) {
    presentation.init();
    // subtitles.init();
  }

  // document.addEventListener("keydown", event => {
  //   const keyName = event.key;
  //   console.log(presentation.video.currentTime);
  // });
})();
