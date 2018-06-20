module.exports = class Subtitles {
  constructor(element, subtitles, mouseEventElement, presentationObj) {
    this.interval = null;
    this.subtitleEl = element;
    this.subtitles = subtitles;
    this.seekerFocused = false;

    this.alignSubs = function(side) {
      this.subtitleEl.classList.remove("right");
      this.subtitleEl.classList.remove("left");
      this.subtitleEl.classList.add(side);
    };

    this.getSubtitle = function(currentTime) {
      let vidTime = currentTime * 1000;

      const currentSubtitles = this.subtitles.filter(function(sub) {
        if (vidTime > sub.startTime && vidTime < sub.endTime) {
          return sub;
        }
      });

      let currentSub = currentSubtitles[currentSubtitles.length - 1];
      return currentSub;
    };

    this.setSubtitle = function(currentTime) {
      let currentSub = this.getSubtitle(currentTime);
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
      mouseEventElement.addEventListener("mousemove", ev => {
        let side = this.checkCursorSide(ev.screenX);
        this.alignSubs(side);
      });

      document.addEventListener("keydown", ev => {
        const keyCode = event.keyCode;
        // keycode 37 = arrowLeft
        // keycode 39 = arrowRight
        if (!this.seekerFocused) {
          if (keyCode == 37) {
            this.alignSubs("left");
          } else if (keyCode == 39) {
            this.alignSubs("right");
          }
        }
      });
    };

    // TODO: Replace hotfix with proper function
    this.hotfix = function() {
      document.querySelector(".seeker").addEventListener("focus", ev => {
        this.seekerFocused = true;
      });

      document.querySelector(".seeker").addEventListener("focusout", ev => {
        this.seekerFocused = false;
      });
    };

    this.init = function() {
      this.hotfix();
      this.addEvents();
    };
  }
};
