const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
};

const getDiff = (date) => {
  const pad = (value) => (value < 10 ? `0${value}` : `${value}`);
  const diff = new Date(date).getTime() - new Date().getTime();

  return {
    days: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: pad(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
    mins: pad(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))),
    secs: pad(Math.floor((diff % (1000 * 60)) / 1000)),
  };
};

const renderText = ({ title, cost, data: { body } }) => {
  body = body.replace(/\n/g, "<br/>");

  return `
    <div class="item post-text" data-cost="${cost}">
      <div class="title">${title}</div>
      <div class="body">${body}</div>
    </div>`;
};

const renderBlog = ({ title, cost, data: { header, linkText, linkUrl, preview } }) => {
  return `
    <div class="item post-blog" data-cost="${cost}">
      <div class="title">${title}</div>

      <div class="blog">
        <div class="blog-header">${header}</div>
        <a href="${linkUrl}" target="_blank">${linkText}</a>
        <div class="blog-preview">${preview}</div>
      </div>
    </div>`;
};

const renderVideo = ({ title, cost, data: { mp4, mov, webm, thumbnail } }) => {
  const movSource = mov ? `<source src="${mov}" type="video/mp4" />` : "";
  const mp4Source = mp4 ? `<source src="${mp4}" type="video/mp4" />` : "";
  const webmSource = webm ? `<source src="${webm}" type="video/webm" />` : "";

  return `
    <div class="item post-video" data-cost="${cost}">
      <div class="title">${title}</div>
      <div class="video">
        <div class="play-button"></div>

        <video playsinline preload="none" poster="${thumbnail}">
          ${movSource}
          ${mp4Source}
          ${webmSource}
        </video>
      </div>
    </div>`;
};

const renderYouTube = ({ title, cost, data: { body, thumbnail, url } }) => {
  return `
    <div class="item post-youtube" data-cost="${cost}">
      <div class="title">${title}</div>
      <div class="body">${body}</div>

      <a href="${url}" target="_blank">
        <div class="play-button"></div>
        <img src="${thumbnail}" />
      </a>
    </div>`;
};

const renderImage = ({ title, cost, data: { url } }) => {
  return `
    <div class="item post-image" data-cost="${cost}">
      <div class="title">${title}</div>
      <img src="${url}" />
    </div>`;
};

const renderTickets = ({ title, cost, data: { url } }) => {
  return `
    <div class="item post-tickets" data-cost="${cost}">
      <div class="title">${title}</div>
      <img src="${url}" />
    </div>`;
};

const renderFeature = ({ title, cost, data: { image, text, linkText, linkUrl } }) => {
  text = text.replace(/\n/g, "<br/>");

  return `
    <div class="item post-feature" data-cost="${cost}">
      <div class="title">${title}</div>

      <div class="feature">
        <img src="${image}" />

        <div class="feature-body">
          <div class="text">${text}</div>
          <a href="${linkUrl}" target="_blank">${linkText}</a>
        </div>
      </div>
    </div>`;
};

const renderTimer = ({ title, cost, data: { end } }) => {
  let { days, hours, mins, secs } = getDiff(end);

  if (Date.now() >= new Date(end)) {
    days = hours = mins = secs = "00";
  }

  return `
    <div class="item post-timer" data-end="${end}" data-cost="${cost}">
      <div class="title">${title}</div>

      <div class="segments">
        <div class="segment d">
          <div class="label">Days</div>
          <div class="value">${days}</div>
        </div>

        <div class="segment h">
          <div class="label">Hours</div>
          <div class="value">${hours}</div>
        </div>

        <div class="segment m">
          <div class="label">Mins</div>
          <div class="value">${mins}</div>
        </div>

        <div class="segment s">
          <div class="label">Secs</div>
          <div class="value">${secs}</div>
        </div>
      </div>
    </div>`;
};

const renderGallery = ({ title, cost, data: { id, images } }) => {
  return `
    <div class="item post-gallery" data-cost="${cost}">
      <div class="title">${title}</div>

      <div class="pics">
        ${images
          .map((image, i) => {
            return `<div class="pic" data-i="${i}" data-id="${id}" data-ig="${image.ig}"><img src="${image.url}" /></div>`;
          })
          .join("\n")}
      </div>
    </div>`;
};

const renderAuthors = (authors) => {
  const hasElizabeth = authors.indexOf("elizabeth") !== -1;
  const hasMartin = authors.indexOf("martin") !== -1;
  const names = hasElizabeth && hasMartin ? "Elizabeth &amp; Martin" : hasElizabeth ? "Elizabeth" : "Martin";

  return `
    <div class="authors">
      ${hasElizabeth ? '<div class="author elizabeth"></div>' : ""}
      ${hasMartin ? '<div class="author martin"></div>' : ""}
      <div class="names">${names}</div>
    </div>`;
};

const renderItem = (item) => {
  const itemRenderers = {
    text: renderText,
    blog: renderBlog,
    video: renderVideo,
    youtube: renderYouTube,
    image: renderImage,
    tickets: renderTickets,
    feature: renderFeature,
    timer: renderTimer,
    gallery: renderGallery,
  };

  return itemRenderers[item.type]?.(item);
};

const renderItems = (items) => {
  return `
    <div class="items">
      ${items.map((item) => renderItem(item)).join("\n")}
    </div>`;
};

const renderEntry = ({ date, authors, items }) => {
  return `
    <div class="entry">
      <div class="date">${formatDate(date)}</div>
      ${renderAuthors(authors)}
      ${renderItems(items)}
    </div>`;
};

const renderEntries = (entries) => {
  return entries.map((entry) => renderEntry(entry)).join("\n") + `<div class="up-to-date">You're up to date!</div>`;
};
