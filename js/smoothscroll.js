// Check if jQuery is loaded, if not, show an alert
window.jQuery || alert("The jQuery library must be included before the smoothscroll.js file. The plugin will not work properly.");

// Define a function for scrolling to a specified target
(function (e) {
  var t = e.scrollTo = function (t, o, n) {
    e(window).scrollTo(t, o, n);
  };

  // Helper function to convert values to an object
  function o(e) {
    return "object" == typeof e ? e : { top: e, left: e };
  }

  // Set default options for scrolling
  t.defaults = {
    axis: "xy",
    duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1,
    limit: !0
  };

  // Function to get the scrollable element associated with the window
  t.window = function (t) {
    return e(window)._scrollable();
  };

  // Function to find the scrollable elements in the DOM
  e.fn._scrollable = function () {
    return this.map(function () {
      var t = this;

      if (!(!t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]))) {
        return t;
      }

      var o = (t.contentWindow || t).document || t.ownerDocument || t;

      // Detect webkit browser or "BackCompat" mode
      return /webkit/i.test(navigator.userAgent) || "BackCompat" == o.compatMode ? o.body : o.documentElement;
    });
  };

  // Function to scroll to a specified target
  e.fn.scrollTo = function (n, r, i) {
    // Handle different parameter types
    if ("object" == typeof r) {
      i = r;
      r = 0;
    }

    if ("function" == typeof i) {
      i = { onAfter: i };
    }

    if ("max" == n) {
      n = 9e9;
    }

    i = e.extend({}, t.defaults, i);
    r = r || i.duration;

    i.queue = i.queue && i.axis.length > 1;

    if (i.queue) {
      r /= 2;
    }

    i.offset = o(i.offset);
    i.over = o(i.over);

    this._scrollable().each(function () {
      if (null != n) {
        var a, l = this, s = e(l), c = n, f = {};

        var u = s.is("html,body");

        switch (typeof c) {
          case "number":
          case "string":
            if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(c)) {
              c = o(c);
              break;
            }

            if (!(c = e(c, this)).length) {
              return;
            }

          case "object":
            (c.is || c.style) && (a = (c = e(c)).offset());
        }

        // Loop through axes (x and y)
        e.each(i.axis.split(""), function (e, o) {
          var n = "x" == o ? "Left" : "Top";
          var r = n.toLowerCase();
          var h = "scroll" + n;
          var m = l[h];
          var p = t.max(l, o);

          if (a) {
            f[h] = a[r] + (u ? 0 : m - s.offset()[r]);

            if (i.margin) {
              f[h] -= parseInt(c.css("margin" + n)) || 0;
              f[h] -= parseInt(c.css("border" + n + "Width")) || 0;
            }

            f[h] += i.offset[r] || 0;

            if (i.over[r]) {
              f[h] += c["x" == o ? "width" : "height"]() * i.over[r];
            }
          } else {
            var y = c[r];
            f[h] = y.slice && "%" == y.slice(-1) ? parseFloat(y) / 100 * p : y;
          }

          if (i.limit && /^\d+$/.test(f[h])) {
            f[h] = f[h] <= 0 ? 0 : Math.min(f[h], p);
          }

          if (!e && i.queue) {
            m != f[h] && d(i.onAfterFirst);
            delete f[h];
          }
        });

        d(i.onAfter);
      }
    }).end();
  };

  // Function to get the maximum scroll value
  t.max = function (t, o) {
    var n = "x" == o ? "Width" : "Height";
    var r = "scroll" + n;

    if (!e(t).is("html,body")) {
      return t[r] - e(t)[n.toLowerCase()]();
    }

    var i = "client" + n;
    var a = t.ownerDocument.documentElement;
    var l = t.ownerDocument.body;

    return Math.max(a[r], l[r]) - Math.min(a[i], l[i]);
  };
})(jQuery);

// Function for smooth scrolling to elements with matching IDs or names
(function (e) {
  function t(t, o, n) {
    var r = o.hash.slice(1);
    var i = document.getElementById(r) || document.getElementsByName(r)[0];

    if (i) {
      t && t.preventDefault();
      var a = e(n.target);

      if (!(n.lock && a.is(":animated") || n.onBefore && !1 === n.onBefore(t, i, a))) {
        if (n.stop) {
          a._scrollable().stop(!0);
        }

        if (n.hash) {
          t = i.id == r ? "id" : "name";
          var l = e("<a> </a>").attr(t, r).css({
            position: "absolute",
            top: e(window).scrollTop(),
            left: e(window).scrollLeft()
          });

          i[t] = "";
          e("body").prepend(l);
          location = o.hash;
          l.remove();
          i[t] = r;
        }

        a.scrollTo(i, n).trigger("notify.serialScroll", [i]);
      }
    }
  }

  // Initialize localScroll plugin with default options
  var o = location.href.replace(/#.*/, "");
  var n = e.localScroll = function (t) {
    e("body").localScroll(t);
  };

  // Set default options for localScroll
  n.defaults = {
    duration: 1000,
    axis: "y",
    event: "click",
    stop: !0,
    target: window,
    reset: !0
  };

  // Function to scroll to elements with matching IDs or names
  n.hash = function (o) {
    if (location.hash) {
      if ((o = e.extend({}, n.defaults, o)).hash = !1, o.reset) {
        var r = o.duration;
        delete o.duration;
        e(o.target).scrollTo(0, o);
        o.duration = r;
      }

      t(0, location, o);
    }
  };

  // Initialize localScroll plugin for elements with the 'smoothScroll' class
  e.fn.localScroll = function (t) {
    function i() {
      return !!this.href && !!this.hash && this.href.replace(this.hash, "") == o && (!t.filter || e(this).is(t.filter));
    }

    return (t = e.extend({}, n.defaults, t)).lazy ? this.bind(t.event, function (o) {
      var n = e([o.target, o.target.parentNode]).filter(i)[0];
      n && t.hash && t.hash.call(this, n);
    }) : this.find("a,area").filter(i).bind(t.event, function (e) {
      t.hash && t.hash.call(this, e);
    }).end().end();
  };

  // Initialize localScroll for elements with the 'smoothScroll' class
  e(function () {
    e.localScroll({ filter: ".smoothScroll" });
  });
})(jQuery);
