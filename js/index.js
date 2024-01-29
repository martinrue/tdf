const getStorageInt = (key) => {
  return parseInt(localStorage.getItem(key)) || 0;
};

const lastSavedScrollPosition = getStorageInt("last-y");

const showSyncPositionButton = (show) => {
  const $el = document.querySelector(".sync-position");
  show ? $el.classList.add("show") : $el.classList.remove("show");
};

const syncPosition = () => {
  const debounce = (fn, ms) => {
    let timer;

    return function (...args) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        fn.apply(this, args);
      }, ms);
    };
  };

  document.addEventListener(
    "scroll",
    debounce(() => {
      localStorage.setItem("last-y", window.scrollY);

      if (window.scrollY > lastSavedScrollPosition) {
        showSyncPositionButton(false);
      }
    }, 100)
  );
};

const scrollToLastPosition = () => {
  if (lastSavedScrollPosition) {
    window.scrollTo({ top: lastSavedScrollPosition, behavior: "smooth" });
    showSyncPositionButton(false);
  }
};

const attachHandlers = () => {
  const $videos = [...document.querySelectorAll(".post-video")];

  $videos.forEach(($video) => {
    const $container = $video.querySelector(".video");
    const $media = $video.querySelector(".video video");

    $container.addEventListener("click", (e) => {
      if (!$container.classList.contains("playing")) {
        $container.classList.add("playing");
        $media.setAttribute("controls", "true");
        setTimeout(() => $media.play(), 100);
      }
    });
  });

  document.querySelector(".sync-position").addEventListener("click", scrollToLastPosition);
};

const animateTimers = () => {
  const $timers = [...document.querySelectorAll(".post-timer")];

  setInterval(() => {
    $timers.forEach(($timer) => {
      let { days, hours, mins, secs } = getDiff($timer.dataset.end);

      if (Date.now() >= new Date($timer.dataset.end)) {
        days = hours = mins = secs = "00";
      }

      $timer.querySelector(".segments .segment.d .value").innerText = days;
      $timer.querySelector(".segments .segment.h .value").innerText = hours;
      $timer.querySelector(".segments .segment.m .value").innerText = mins;
      $timer.querySelector(".segments .segment.s .value").innerText = secs;
    });
  }, 1000);
};

const animateSum = () => {
  const GBP = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const $header = document.querySelector("header");

  const thresholds = [...document.querySelectorAll(".item")].map(($item, n) => {
    const cost = parseInt($item.dataset.cost);

    const start = $item.offsetTop - $header.scrollHeight;
    const end = start + $item.offsetHeight;

    return {
      start,
      end,
      cost,
      pixelCost: cost / (end - start),
    };
  });

  const $sum = document.querySelector(".sum");

  document.addEventListener("scroll", () => {
    const y = window.scrollY;
    let cost = 0;

    thresholds.forEach((t, i) => {
      if (y > t.end) {
        cost += t.cost;
      } else if (y >= t.start && y <= t.end) {
        cost += (y - t.start) * t.pixelCost;
      }
    });

    $sum.innerText = GBP.format(40000 - cost);
  });
};

const init = () => {
  window.onload = () => {
    animateSum();
    syncPosition();
  };

  document.ondblclick = (e) => {
    e.preventDefault();
  };

  const $entries = document.querySelector(".entries");
  $entries.innerHTML = renderEntries(entries);

  requestAnimationFrame(() => {
    attachHandlers();
    animateTimers();
    galleryInit();

    if (getStorageInt("last-y") > 0) {
      showSyncPositionButton(true);
    }
  });
};

document.addEventListener("DOMContentLoaded", init);
