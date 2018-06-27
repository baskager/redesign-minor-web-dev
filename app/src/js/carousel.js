/**
 * Main javascript file for the minor web development
 *
 * @author  Bas Kager, James Peter Perrone Jefferies
 * @version 1.0
 * @since   20-06-2018
 */
(function() {
  const helpers = {
    // A simple counter helper with minimum and maximum values
    counter: {
      count: 0,
      _min: 0,
      _max: 0,
      init: function() {
        this.count = 0;
        this._min = 0;
        this._max = 0;
      },
      setMin: function(minValue) {
        if (this.count < minValue) this.count = minValue;
        this._min = minValue;
      },
      setMax: function(maxValue) {
        this._max = maxValue;
      },
      getMin: function() {
        return this._min;
      },
      getMax: function() {
        return this._max;
      },
      isMin: function() {
        if (this.count === this._min) return true;
        else return false;
      },
      isMax: function() {
        if (this.count === this._max) return true;
        else return false;
      },
      set: function(countValue) {
        this.count = countValue;
      },
      reset: function() {
        this.count = 0;
      },
      up: function(factor = 1) {
        if (this.count + factor <= this._max) this.count += factor;
        else this.count = this._max;
        console.log(this.count);
      },
      down: function(factor = 1) {
        if (this.count - factor >= this._min) this.count -= factor;
        else this.count = this._min;
      }
    }
  };

  const carousel = {
    init: function() {
      // Check if there are elements which should not be focused on tab press
      const carouselElements = document.body.querySelectorAll(".carousel");

      if (carouselElements) {
        // Loop through unfocusable elements and redefine the behavour for the "tab" key
        carouselElements.forEach(carouselElement => {
          const slides = carouselElement.querySelectorAll("li");
          const previousButton = carouselElement.querySelector("#previous");
          const nextButton = carouselElement.querySelector("#next");
          const counter = helpers.counter;

          counter.init();
          counter.setMin(1);
          counter.setMax(slides.length + 1);

          if (previousButton && nextButton) {
            previousButton.addEventListener("click", function(e) {
              if (counter.count == counter.getMax()) {
                SpatialNavigation.focus("#c-slide-" + (slides.length - 1));
                counter.down();
              } else {
                counter.down();
                SpatialNavigation.focus("#c-slide-" + (counter.count - 1));
              }
              if (counter.count == 1) {
                // Set counter to two so the 'next' button still acts as expected
                counter.set(2);
                SpatialNavigation.focus("#c-slide-1");
              }
            });

            nextButton.addEventListener("click", function(e) {
              if (counter.count == 1) {
                counter.up();
                SpatialNavigation.focus("#c-slide-1");
              } else {
                counter.up();
                SpatialNavigation.focus("#c-slide-" + (counter.count - 1));
              }
            });
          }
          carouselElement.addEventListener("sn:willmove", function(e) {
            // On the first focus this event will not trigger so we have to up the counter once before
            // if (counter.count === 0) counter.set(1);
            if (e.detail.direction === "right") counter.up();
            if (e.detail.direction === "left") counter.down();
          });

          carouselElement.addEventListener("keydown", function(e) {
            /*
                Simulate standard browser functionality for tabs.
                'tab' and 'shift tab' will work normally on the first and last element of the carousel
                Effectively releasing the keys from the carousel elements when it's needed
              */
            if (e.which == 9 || e.which == 32) {
              if (e.shiftKey && counter.isMin() == false) {
                // On keydown for the 'shift' key in combination with the 'tab' key
                SpatialNavigation.move("left");
                SpatialNavigation.focus();
                e.preventDefault();
              } else if (counter.isMax() == false && e.shiftKey == false) {
                SpatialNavigation.move("right");
                SpatialNavigation.focus();
                e.preventDefault();
              }
            }
          });
        });
      }
    }
  };
  const app = {
    init: function() {
      window.addEventListener("load", function() {
        if (document.querySelector(".focusable")) {
          carousel.init();

          SpatialNavigation.init();
          SpatialNavigation.add({ selector: ".focusable" });
          SpatialNavigation.makeFocusable();

          document.querySelectorAll(".focusable").forEach(item => {
            item.addEventListener("focus", item => {
              item.target.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
              });
            });
          });
        }
      });
    }
  };
  // Fire in the hole
  app.init();
})();
