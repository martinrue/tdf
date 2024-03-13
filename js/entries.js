const entries = [
  {
    date: "2024-02-01",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ Welcome to The Discovery Fund",
        data: {
          body: "We're Elizabeth &amp; Martin, two people who got sick of not having enough time to work on our own ideas – so we saved up all the money we could and quit our jobs. Now we're going on an adventure to discover new places, new people and build our own futures.\n\nWe made this site to document everything: from where we are and what we're doing, to what it's costing us. We'll be updating TDF weekly – join us for the ride!",
        },
      },
      {
        type: "tickets",
        cost: 791,
        title: "✈️ &nbsp;First stop: Dubai!",
        data: {
          url: "/entries/24-02-01/man-dxb.png",
        },
      },
      {
        type: "timer",
        cost: 0,
        title: "⏱️ Our journey begins in:",
        data: {
          end: "2024-02-26T13:10:00Z",
        },
      },
    ],
  },
  {
    date: "2024-02-25",
    authors: ["martin"],
    items: [
      {
        type: "youtube",
        cost: 0,
        title: "🎥 &nbsp;What's in my bag?",
        data: {
          body: "Challenge number 1: getting everything into a single rucksack. Check out all the things I'm taking with me.",
          thumbnail: "/entries/24-02-25/vlog.jpeg",
          url: "https://www.youtube.com/watch?v=qGASvcfcQUg",
        },
      },
    ],
  },
  {
    date: "2024-02-26",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 0,
        title: "📸 &nbsp;Let's go!",
        data: {
          id: "be5120cba68142d79195ba0127ee1284",
          images: [{ url: "/entries/24-02-26/1.jpeg" }, { url: "/entries/24-02-26/2.jpeg" }, { url: "/entries/24-02-26/3.jpeg" }],
        },
      },
    ],
  },
  {
    date: "2024-02-27",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "image",
        cost: 0,
        title: "📍 We've landed in Dubai!",
        data: {
          url: "/entries/24-02-27/man-dxb.jpg",
        },
      },
      {
        type: "gallery",
        cost: 492,
        title: "📸 &nbsp;We're loving it here so far.",
        data: {
          id: "9e6340669a5d47a1af3ec80c7d868191",
          images: [{ url: "/entries/24-02-27/1.jpeg" }, { url: "/entries/24-02-27/2.jpeg" }, { url: "/entries/24-02-27/3.jpeg" }, { url: "/entries/24-02-27/4.jpeg" }, { url: "/entries/24-02-27/5.jpeg" }, { url: "/entries/24-02-27/6.jpeg" }],
        },
      },
    ],
  },
  {
    date: "2024-02-29",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 0,
        title: "🎥 &nbsp;First time in Dubai",
        data: {
          body: "This city surprised us and it wasn't what we expected. Check out what we got up to.",
          thumbnail: "/entries/24-02-29/vlog.jpeg",
          url: "https://www.youtube.com/watch?v=WdNrDEDMvhM",
        },
      },
      {
        type: "gallery",
        cost: 0,
        title: "📸 &nbsp;More city highlights!",
        data: {
          id: "3da457dcace74cebac203add5bfc8aa9",
          images: [{ url: "/entries/24-02-29/1.jpeg" }, { url: "/entries/24-02-29/2.jpeg" }, { url: "/entries/24-02-29/3.jpeg" }, { url: "/entries/24-02-29/4.jpeg" }, { url: "/entries/24-02-29/6.jpeg" }, { url: "/entries/24-02-29/5.jpeg" }],
        },
      },
      {
        type: "text",
        cost: 0,
        title: "⚡️ Our thoughts on Dubai",
        data: {
          body: "We can't lie, Dubai impressed us more than we expected. From its super clean streets and architectural wonder, to the great food and relaxed vibes, this city has a lot going for it. In the end we feel like we could have spent a bit more time here – but who knows, maybe we'll be back.",
        },
      },
    ],
  },
  {
    date: "2024-03-01",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "tickets",
        cost: 791,
        title: "✈️ &nbsp;Next stop: Hanoi",
        data: {
          url: "/entries/24-03-01/ticket.png",
        },
      },
      {
        type: "image",
        cost: 0,
        title: "📍 Good morning Vietnam!",
        data: {
          url: "/entries/24-03-01/dxb-han.jpg",
        },
      },
      {
        type: "gallery",
        cost: 539,
        title: "📸 &nbsp;Our home in Hanoi",
        data: {
          id: "11adcc070c5f4efb8eebbed2dc41b034",
          images: [{ url: "/entries/24-03-01/1.jpeg" }, { url: "/entries/24-03-01/2.jpeg" }, { url: "/entries/24-03-01/3.jpeg" }],
        },
      },
    ],
  },
  {
    date: "2024-03-06",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 400,
        title: "📸 &nbsp;The food in Hanoi is awesome",
        data: {
          id: "53fbb6e02cf4464a8cbd96973b3001c2",
          images: [{ url: "/entries/24-03-06/1.jpeg" }, { url: "/entries/24-03-06/2.jpeg" }, { url: "/entries/24-03-06/3.jpeg" }, { url: "/entries/24-03-06/4.jpeg" }],
        },
      },
    ],
  },
  {
    date: "2024-03-08",
    authors: ["elizabeth"],
    items: [
      {
        type: "video",
        cost: 0,
        title: "🎥 &nbsp; A day in our life",
        data: {
          mp4: "/entries/24-03-08/hanoi-video.mp4",
        },
      },
    ],
  },
  {
    date: "2024-03-09",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "tickets",
        cost: 150,
        title: "✈️ &nbsp;We're taking the adventure south",
        data: {
          url: "/entries/24-03-09/ticket.png",
        },
      },
      {
        type: "timer",
        cost: 0,
        title: "⏱️ Time left in Hanoi:",
        data: {
          end: "2024-03-13T06:35:00Z",
        },
      },
    ],
  },
  {
    date: "2024-03-12",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "video",
        cost: 55,
        title: "🎥 &nbsp; Our last day in Hanoi",
        data: {
          mp4: "/entries/24-03-12/hanoi-video2.mp4",
        },
      },
      {
        type: "gallery",
        cost: 100,
        title: "📸 &nbsp;We're going to miss this place",
        data: {
          id: "ab0aa40932bc4e7193fbdf5c01d65e9d",
          images: [{ url: "/entries/24-03-12/1.jpeg" }, { url: "/entries/24-03-12/2.jpeg" }, { url: "/entries/24-03-12/3.jpeg" }, { url: "/entries/24-03-12/4.jpeg" }, { url: "/entries/24-03-12/6.jpeg" }, { url: "/entries/24-03-12/5.jpeg" }],
        },
      },
      {
        type: "text",
        cost: 200,
        title: "⚡️ Our verdict on Hanoi",
        data: {
          body: "After the inital culture shock of this chaotic city, we've grown very fond of Hanoi. It's full of literally thousands of amazing coffee shops, unlike anything we've experienced before. It's a great city for remote work! But the plan was never to stay, so the adventure continues.",
        },
      },
    ],
  },
  {
    date: "2024-03-13",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "image",
        cost: 0,
        title: "📍 Oh hey, Da Nang!",
        data: {
          url: "/entries/24-03-13/han-dad.jpg",
        },
      },
      {
        type: "gallery",
        cost: 855,
        title: "📸 &nbsp;We love our little apartment",
        data: {
          id: "9e6340669a5d47a1af3ec80c7d868191",
          images: [{ url: "/entries/24-03-13/1.jpeg" }, { url: "/entries/24-03-13/2.jpeg" }, { url: "/entries/24-03-13/3.jpeg" }],
        },
      },
      {
        type: "text",
        cost: 100,
        title: "⚡️ First impressions of Da Nang",
        data: {
          body: "So far we're LOVING it here! We've only been here an afternoon and we've already seen the beach, soaked up some rays and found some cool hangout spots. This is what we've always imagined our digital nomad life to look like. We can't wait for this next month! ",
        },
      },
      {
        type: "gallery",
        cost: 120,
        title: "📸 &nbsp;Beach life starts here!",
        data: {
          id: "11adcc070c5f4efb8eebbed2dc41b034",
          images: [{ url: "/entries/24-03-13/4.jpeg" }, { url: "/entries/24-03-13/5.jpeg" }, { url: "/entries/24-03-13/6.jpeg" }, { url: "/entries/24-03-13/8.jpeg" }, { url: "/entries/24-03-13/7.jpeg" }, { url: "/entries/24-03-13/9.jpeg" }],
        },
      },
    ],
  },
];
