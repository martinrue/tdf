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
          images: [
            { url: "/entries/24-02-27/1.jpeg" },
            { url: "/entries/24-02-27/2.jpeg" },
            { url: "/entries/24-02-27/3.jpeg" },
            { url: "/entries/24-02-27/4.jpeg" },
            { url: "/entries/24-02-27/5.jpeg" },
            { url: "/entries/24-02-27/6.jpeg" },
          ],
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
          images: [
            { url: "/entries/24-02-29/1.jpeg" },
            { url: "/entries/24-02-29/2.jpeg" },
            { url: "/entries/24-02-29/3.jpeg" },
            { url: "/entries/24-02-29/4.jpeg" },
            { url: "/entries/24-02-29/6.jpeg" },
            { url: "/entries/24-02-29/5.jpeg" },
          ],
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
          thumbnail: "/entries/24-03-08/hanoi-video.jpg",
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
        cost: 155,
        title: "🎥 &nbsp; Our last day in Hanoi",
        data: {
          mp4: "/entries/24-03-12/hanoi-video2.mp4",
          thumbnail: "/entries/24-03-12/hanoi-video2.jpg",
        },
      },
      {
        type: "gallery",
        cost: 200,
        title: "📸 &nbsp;We're going to miss this place",
        data: {
          id: "ab0aa40932bc4e7193fbdf5c01d65e9d",
          images: [
            { url: "/entries/24-03-12/1.jpeg" },
            { url: "/entries/24-03-12/2.jpeg" },
            { url: "/entries/24-03-12/3.jpeg" },
            { url: "/entries/24-03-12/4.jpeg" },
            { url: "/entries/24-03-12/6.jpeg" },
            { url: "/entries/24-03-12/5.jpeg" },
          ],
        },
      },
      {
        type: "text",
        cost: 0,
        title: "⚡️ Our verdict on Hanoi",
        data: {
          body: "After the initial culture shock of this chaotic city, we've grown very fond of Hanoi. It's full of literally thousands of amazing coffee shops, unlike anything we've experienced before. It's a great city for remote work! But Hanoi was just the first stop, so let the adventure continue.",
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
        title: "📸 &nbsp;We love our new apartment",
        data: {
          id: "1d42372833f84d42b6f77cd26fae6936",
          images: [{ url: "/entries/24-03-13/1.jpeg" }, { url: "/entries/24-03-13/2.jpeg" }, { url: "/entries/24-03-13/3.jpeg" }],
        },
      },
      {
        type: "text",
        cost: 0,
        title: "⚡️ First impressions of Da Nang",
        data: {
          body: "So far we're LOVING it here! We've only been here an afternoon and we've already seen the beach, soaked up some rays and found some cool hangout spots. This is what we always imagined our digital nomad life to look like. We're really looking forward to making this place home! ",
        },
      },
      {
        type: "gallery",
        cost: 220,
        title: "📸 &nbsp;Beach life starts here!",
        data: {
          id: "ef9a4ecf8fe344bdb736dddfdf92beb4",
          images: [
            { url: "/entries/24-03-13/4.jpeg" },
            { url: "/entries/24-03-13/5.jpeg" },
            { url: "/entries/24-03-13/6.jpeg" },
            { url: "/entries/24-03-13/8.jpeg" },
            { url: "/entries/24-03-13/7.jpeg" },
            { url: "/entries/24-03-13/9.jpeg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-03-16",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 10,
        title: "📸 &nbsp;Back in business!",
        data: {
          id: "2c98444419d941beaf6af539fae47f54",
          images: [{ url: "/entries/24-03-16/1.jpeg" }, { url: "/entries/24-03-16/2.jpeg" }, { url: "/entries/24-03-16/3.jpeg" }],
        },
      },
    ],
  },
  {
    date: "2024-03-18",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ The community here is so damn good",
        data: {
          body: "In our first week in Da Nang we've been making a special effort to attend many of the cool events in the city. From art classes and startup events to joining a brand new co-working community, we have already met tons of cool people and made plenty of new friends. We're blown away by how much of an amazing community exists in this city.",
        },
      },
      {
        type: "gallery",
        cost: 0,
        title: "📸 &nbsp; So many cool people",
        data: {
          id: "720f06f7ef1e4e609692e5f70ecc775e",
          images: [
            { url: "/entries/24-03-18/1.jpeg" },
            { url: "/entries/24-03-18/2.jpeg" },
            { url: "/entries/24-03-18/3.jpeg" },
            { url: "/entries/24-03-18/4.jpeg" },
            { url: "/entries/24-03-18/5.jpeg" },
            { url: "/entries/24-03-18/6.jpeg" },
          ],
        },
      },
      {
        type: "text",
        cost: 0,
        title: "⚡️ We're now members of Coworking Danang",
        data: {
          body: "By random luck, a brand new co-working space opened today, so we went over to check it out. After hanging out all day (and most of the evening), we definitely just found our tribe. There are so many cool people, even on day 1. It was an easy call – we're now members... and the best bit? It's only a 3 minute walk from our apartment!",
        },
      },
      {
        type: "gallery",
        cost: 100,
        title: "📸 &nbsp; What a beautiful space!",
        data: {
          id: "65facec9-7cab-467b-abde-d91d033c1318",
          images: [
            { url: "/entries/24-03-18/7.jpeg" },
            { url: "/entries/24-03-18/8.jpeg" },
            { url: "/entries/24-03-18/9.jpeg" },
            { url: "/entries/24-03-18/10.jpeg" },
            { url: "/entries/24-03-18/11.jpeg" },
            { url: "/entries/24-03-18/12.jpeg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-03-20",
    authors: ["martin"],
    items: [
      {
        type: "blog",
        cost: 326,
        title: "💬 Reflections on Da Nang",
        data: {
          header: "What I'm doing now",
          linkText: "martinrue.com/now",
          linkUrl: "https://martinrue.com/now/",
          preview: "I'm writing this on a warm Wednesday afternoon in Da Nang, Vietnam. I moved here 1 week ago.",
        },
      },
    ],
  },
  {
    date: "2024-03-24",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "video",
        cost: 100,
        title: "🎥 &nbsp; Holi Festival 2024",
        data: {
          mp4: "/entries/24-03-24/holi.mp4",
          thumbnail: "/entries/24-03-24/holi.jpg",
        },
      },
    ],
  },
  {
    date: "2024-03-28",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 237,
        title: "📸 &nbsp; Life lately",
        data: {
          id: "e689416c4d1e4197bc4c888237f06340",
          images: [
            { url: "/entries/24-03-28/1.jpeg" },
            { url: "/entries/24-03-28/2.jpeg" },
            { url: "/entries/24-03-28/3.jpeg" },
            { url: "/entries/24-03-28/4.jpeg" },
            { url: "/entries/24-03-28/5.jpeg" },
            { url: "/entries/24-03-28/6.jpeg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-04-02",
    authors: ["elizabeth"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ I've infultrated the backpacker scene!",
        data: {
          body: "I posted on social media that we've moved to Da Nang, and by pure chance someone I've never met commented the name of a girl I'd also never met named Hannah. Turns out she's also a brand designer passing through Da Nang. I went to meet her that same day, she invited me along with her and a few girls from her hostel to Hoi An.",
        },
      },
      {
        type: "gallery",
        cost: 100,
        title: "📸 &nbsp; Girls trip to Hoi An",
        data: {
          id: "b9d2389372724ccd8317670d5b6419ce",
          images: [
            { url: "/entries/24-04-02/1.jpeg" },
            { url: "/entries/24-04-02/2.jpeg" },
            { url: "/entries/24-04-02/3.jpeg" },
            { url: "/entries/24-04-02/4.jpeg" },
            { url: "/entries/24-04-02/5.jpeg" },
            { url: "/entries/24-04-02/6.jpeg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-04-02",
    authors: ["elizabeth"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ Back to Da Nang!",
        data: {
          body: "The other girls are moving on in their travels, but luckily Hannah is coming back to Da Nang for a while. We've got lots in common, so I'm looking forward to more co-working, gym sessions and late night chats before she goes on her next adventure. ",
        },
      },
      {
        type: "gallery",
        cost: 0,
        title: "📸 &nbsp; We're besties now",
        data: {
          id: "47b574253d16470f936e2feb35b6c5e1",
          images: [
            { url: "/entries/24-04-04/7.jpeg" },
            { url: "/entries/24-04-04/8.jpeg" },
            { url: "/entries/24-04-04/9.jpeg" },
            { url: "/entries/24-04-04/10.jpeg" },
            { url: "/entries/24-04-04/11.jpeg" },
            { url: "/entries/24-04-04/12.jpeg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-04-08",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 698,
        title: "📸 &nbsp; We're having the best time attending events and learning vietnamese. We've even run our own werewolf game and sang karaoke!",
        data: {
          id: "a014749176c94f5ab11ee7b516367794",
          images: [
            { url: "/entries/24-04-08/1.jpeg" },
            { url: "/entries/24-04-08/2.jpeg" },
            { url: "/entries/24-04-08/3.jpeg" },
            { url: "/entries/24-04-08/4.jpeg" },
            { url: "/entries/24-04-08/5.jpeg" },
            { url: "/entries/24-04-08/6.jpeg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-04-14",
    authors: ["elizabeth"],
    items: [
      {
        type: "feature",
        cost: 0,
        title: "👩🏼‍💻 Journee: Launch day!",
        data: {
          image: "/entries/24-04-14/journee-card.jpg",
          text: "I'm so excited to finally be launching Journee, my online prompted journaling app. I've worked on the design and Martin built it – and now it's finally out there in the world.\n\nBasically, the whole point of Journee is that it’s like a prompted journal, just super personalised. When you write a journal entry, Journee analyses what you've written to give you another prompt, so you can dig deeper and deeper into self-discovery. Launching was the easy part, now it's time to grow it!",
          linkText: "journeeapp.com",
          linkUrl: "https://journeeapp.com",
        },
      },
    ],
  },
  {
    date: "2024-04-17",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 500,
        title: "📸 We've been saying goodbye to some friends.",
        data: {
          id: "850ec556717e46dab299c4eddb428a4b",
          images: [{ url: "/entries/24-04-17/1.jpeg" }, { url: "/entries/24-04-17/2.jpeg" }, { url: "/entries/24-04-17/3.jpeg" }],
        },
      },
      {
        type: "text",
        cost: 0,
        title: "⚡️ Until we meet again.",
        data: {
          body: "We're already seeing the first wave of awesome people moving on to their next adventure. At the same time, in the digital nomad community, it's never goodbye for good, it's more like a 'see you later!'. ",
        },
      },
    ],
  },
  {
    date: "2024-04-20",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ Cham islands trip.",
        data: {
          body: "This weekend we're heading to a remote island off the coast of Da Nang. We're going together with 15 other people from our coworking family to explore the secluded beaches and go snorkeling!",
        },
      },
      {
        type: "gallery",
        cost: 200,
        title: "📸 &nbsp; What a stunning place!",
        data: {
          id: "67ed5435dd0a406a84f72bbc2f5e8865",
          images: [
            { url: "/entries/24-04-20/1.jpeg" },
            { url: "/entries/24-04-20/2.jpeg" },
            { url: "/entries/24-04-20/3.jpeg" },
            { url: "/entries/24-04-20/4.jpeg" },
            { url: "/entries/24-04-20/5.jpeg" },
            { url: "/entries/24-04-20/6.jpeg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-04-23",
    authors: ["martin"],
    items: [
      {
        type: "gallery",
        cost: 300,
        title: "📸 &nbsp; So... I bought a bike.",
        data: {
          id: "3af821a31c1e40f3b2f096e231f4b9a6",
          images: [{ url: "/entries/24-04-23/1.jpeg" }, { url: "/entries/24-04-23/2.jpeg" }, { url: "/entries/24-04-23/3.jpeg" }],
        },
      },
    ],
  },
  {
    date: "2024-04-26",
    authors: ["elizabeth"],
    items: [
      {
        type: "tickets",
        cost: 30,
        title: "✈️ &nbsp; A quick trip to Huế",
        data: {
          url: "/entries/24-04-26/tickets.png",
        },
      },
      {
        type: "video",
        cost: 100,
        title: "🎥 &nbsp; The most beautiful train journey.",
        data: {
          mp4: "/entries/24-04-26/hue.mp4",
          thumbnail: "/entries/24-04-26/hue.jpg",
        },
      },
    ],
  },
  {
    date: "2024-04-29",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 1500,
        title: "🎥 &nbsp;Life in Đà Nẵng",
        data: {
          body: "In this vlog we share all the reasons why we came here and what our daily life in Da Nang is like.",
          thumbnail: "/entries/24-04-29/da-nang-vlog.jpeg",
          url: "https://www.youtube.com/watch?v=4J2uZqipzfY",
        },
      },
    ],
  },
];
