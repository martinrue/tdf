let $gallery = null;
let $galleryImg = null;
let $galleryLink = null;
let $galleryIGLink = null;
let $galleryLeftIcon = null;
let $galleryRightIcon = null;
let $galleryLeftScroller = null;
let $galleryRightScroller = null;

let galleryImages = null;
let galleryImage = 0;

const galleryUpdateNavIcons = () => {
  if (galleryImage === 0) {
    $galleryLeftIcon.classList.add("no-hover", "faded");
    $galleryLeftScroller.classList.add("no-hover");
  } else {
    $galleryLeftIcon.classList.remove("no-hover", "faded");
    $galleryLeftScroller.classList.remove("no-hover");
  }

  if (galleryImage >= galleryImages.length - 1) {
    $galleryRightIcon.classList.add("no-hover", "faded");
    $galleryRightScroller.classList.add("no-hover");
  } else {
    $galleryRightIcon.classList.remove("no-hover", "faded");
    $galleryRightScroller.classList.remove("no-hover");
  }
};

const galleryUpdateImage = () => {
  $galleryImg.src = galleryImages[galleryImage].url;
  $galleryLink.href = galleryImages[galleryImage].ig;
  $galleryIGLink.style.visibility = galleryImages[galleryImage].ig ? "visible" : "hidden";

  galleryUpdateNavIcons();
};

const galleryOpen = (id, i) => {
  entries.forEach((entry) => {
    entry.items.forEach((item) => {
      if (item.data && item.data.id === id) {
        galleryImages = item.data.images;
        galleryImage = i;
      }
    });
  });

  if (galleryImages) {
    $gallery.style.display = "flex";
    document.querySelector("body").classList.add("no-scroll");
    galleryUpdateImage();
  }
};

const galleryClose = (id) => {
  galleryImages = null;
  galleryImage = 0;
  $gallery.style.display = "none";
  document.querySelector("body").classList.remove("no-scroll");
};

const galleryPrev = () => {
  if (!galleryImages || galleryImage === 0) {
    return;
  }

  galleryImage -= 1;
  galleryUpdateImage();
};

const galleryNext = () => {
  if (!galleryImages || galleryImage >= galleryImages.length - 1) {
    return;
  }

  galleryImage += 1;
  galleryUpdateImage();
};

const galleryInit = () => {
  $gallery = document.querySelector(".gallery-host");
  $galleryImg = $gallery.querySelector(".image img");
  $galleryLink = $gallery.querySelector(".image a");
  $galleryIGLink = $gallery.querySelector(".image .ig-link");
  $galleryLeftIcon = $gallery.querySelector(".image .left-icon");
  $galleryRightIcon = $gallery.querySelector(".image .right-icon");
  $galleryLeftScroller = $gallery.querySelector(".image .left-scroller");
  $galleryRightScroller = $gallery.querySelector(".image .right-scroller");

  $gallery.querySelector(".image .close-button").addEventListener("click", galleryClose);
  $gallery.querySelector(".image .left-icon").addEventListener("click", galleryPrev);
  $gallery.querySelector(".image .left-scroller").addEventListener("click", galleryPrev);
  $gallery.querySelector(".image .right-icon").addEventListener("click", galleryNext);
  $gallery.querySelector(".image .right-scroller").addEventListener("click", galleryNext);

  [...document.querySelectorAll(".post-gallery .pic")].forEach(($pic) => {
    $pic.addEventListener("click", () => {
      galleryOpen($pic.dataset.id, parseInt($pic.dataset.i));
    });
  });

  document.addEventListener("keydown", (e) => {
    const actions = {
      Escape: galleryClose,
      ArrowLeft: galleryPrev,
      ArrowRight: galleryNext,
    };

    if (galleryImages && actions[e.key]) {
      actions[e.key]();
    }
  });
};
