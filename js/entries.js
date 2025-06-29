const entries = [
  {
    date: "2024-02-01",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ Welcome to The Discovery Fund.",
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
        title: "🎥 &nbsp;First time in Dubai.",
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
        title: "⚡️ Our thoughts on Dubai.",
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
        title: "✈️ &nbsp;Next stop: Hanoi.",
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
        title: "📸 &nbsp;Our home in Hanoi.",
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
        title: "📸 &nbsp;The food in Hanoi is awesome.",
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
        title: "🎥 &nbsp; A day in our life.",
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
        title: "✈️ &nbsp;We're taking the adventure south!",
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
        title: "🎥 &nbsp; Our last day in Hanoi.",
        data: {
          mp4: "/entries/24-03-12/hanoi-video2.mp4",
          thumbnail: "/entries/24-03-12/hanoi-video2.jpg",
        },
      },
      {
        type: "gallery",
        cost: 200,
        title: "📸 &nbsp;We're going to miss this place.",
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
        title: "⚡️ Our verdict on Hanoi:",
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
        title: "📸 &nbsp;We love our new apartment.",
        data: {
          id: "1d42372833f84d42b6f77cd26fae6936",
          images: [{ url: "/entries/24-03-13/1.jpeg" }, { url: "/entries/24-03-13/2.jpeg" }, { url: "/entries/24-03-13/3.jpeg" }],
        },
      },
      {
        type: "text",
        cost: 0,
        title: "⚡️ First impressions of Da Nang:",
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
        title: "⚡️ The community here is so damn good.",
        data: {
          body: "In our first week in Da Nang we've been making a special effort to attend many of the cool events in the city. From art classes and startup events to joining a brand new co-working community, we have already met tons of cool people and made plenty of new friends. We're blown away by how much of an amazing community exists in this city.",
        },
      },
      {
        type: "gallery",
        cost: 0,
        title: "📸 &nbsp; So many cool people!",
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
        title: "⚡️ We're now members of Coworking Danang.",
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
        title: "💬 Reflections on Da Nang.",
        data: {
          header: "What I'm doing now",
          linkText: "martinrue.com/now",
          linkUrl: "https://martinrue.com/now/past/24-03/",
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
        title: "🎥 &nbsp; Holi Festival 2024.",
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
        title: "📸 &nbsp; Life lately:",
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
        title: "📸 &nbsp; Girls trip to Hoi An.",
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
        title: "📸 &nbsp; We're besties now.",
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
        title: "⚡️ Chàm islands trip.",
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
        title: "🚂 &nbsp; A quick trip to Huế",
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
        title: "🎥 &nbsp;Life in Đà Nẵng.",
        data: {
          body: "In this vlog we share all the reasons why we came here and what our daily life in Da Nang is like.",
          thumbnail: "/entries/24-04-29/da-nang-vlog.jpeg",
          url: "https://www.youtube.com/watch?v=4J2uZqipzfY",
        },
      },
    ],
  },
  {
    date: "2024-05-01",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 200,
        title: "🎥 &nbsp;24 hours on the Chàm Islands.",
        data: {
          body: "Together with everyone from our co-working space, we spent 24 hours on a tiny island off the coast of Đà Nẵng.",
          thumbnail: "/entries/24-05-01/cham.jpeg",
          url: "https://www.youtube.com/watch?v=WvZ5amwkvRc",
        },
      },
    ],
  },
  {
    date: "2024-05-07",
    authors: ["martin"],
    items: [
      {
        type: "gallery",
        cost: 300,
        title: "📸 &nbsp; I took a little trip to to Hội An.",
        data: {
          id: "4d185f45aefa4d9ea62902976fe7149f",
          images: [{ url: "/entries/24-05-07/1.jpeg" }, { url: "/entries/24-05-07/2.jpeg" }, { url: "/entries/24-05-07/3.jpeg" }],
        },
      },
      {
        type: "blog",
        cost: 100,
        title: "💬 Here's a little /now update.",
        data: {
          header: "What I'm doing now",
          linkText: "martinrue.com/now",
          linkUrl: "https://martinrue.com/now/past/24-05/",
          preview: "I'm writing this update from a bathtub - one of my favourite spots to get some serious thinking done.",
        },
      },
    ],
  },
  {
    date: "2024-05-11",
    authors: ["martin"],
    items: [
      {
        type: "feature",
        cost: 0,
        title: "👨🏻‍💻 I finally gave my personal site a little love.",
        data: {
          image: "/entries/24-05-11/website.jpeg",
          text: "I've given my personal website a bit of a refresh. I think it now better explains who I am and what I'm working on, while staying uber minimal.",
          linkText: "martinrue.com",
          linkUrl: "https://martinrue.com/",
        },
      },
    ],
  },
  {
    date: "2024-05-20",
    authors: ["elizabeth"],
    items: [
      {
        type: "feature",
        cost: 0,
        title: "👩🏼‍💻 I have my own site now too!",
        data: {
          image: "/entries/24-05-20/ek-og.jpeg",
          text: "Martin has very generously let me use his code to create my own version of his site. So for the last week I've been getting stuck in and solidifying my programming knowledge from the last few months. I'm really starting to get it now! What I'm enjoying most about learning to code is being able to sit with problems for a long time and the joy I get out of finally solving them. Can't wait to do some more soon, but for now it's back to design.",
          linkText: "elizabethkershaw.co.uk",
          linkUrl: "https://elizabethkershaw.co.uk/",
        },
      },
      {
        type: "blog",
        cost: 100,
        title: "💬 I've also writtn my first /now update.",
        data: {
          header: "What I'm doing now",
          linkText: "elizabethkershaw.co.uk/now",
          linkUrl: "https://elizabethkershaw.co.uk/now/past/20-05/",
          preview: "It's currently raining outside, and the calming sound of this tropical downpour seemed like the perfect backdrop to write a little update on what's been happening in my life.",
        },
      },
    ],
  },
  {
    date: "2024-05-22",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ Border run time.",
        data: {
          body: "This week we're doing what they call a 'border run', which means we've been in Asia for 3 months now! To renew our visas we have to get on a bus, cross the Laos border, wait for new visas, and travel all the way back on the same day. We paid a visa company to organise the entire thing for us (and 30 other europeans) and even though it was a long day, everything went smoothly and it was a great experience!",
        },
      },
      {
        type: "tickets",
        cost: 400,
        title: "🚎 &nbsp; Got our shiny new visas!",
        data: {
          url: "/entries/24-05-22/visas.png",
        },
      },
      {
        type: "video",
        cost: 100,
        title: "🎥 &nbsp; Here's how it went.",
        data: {
          mp4: "/entries/24-05-22/visa-run.mp4",
          thumbnail: "/entries/24-05-22/visa-run.jpeg",
        },
      },
      {
        type: "timer",
        cost: 0,
        title: "⏱️ Time left in Vietnam.",
        data: {
          end: "2024-08-20T06:00:00Z",
        },
      },
    ],
  },
  {
    date: "2024-05-23",
    authors: ["martin"],
    items: [
      {
        type: "youtube",
        cost: 0,
        title: "🎥 &nbsp; A vlog from my trip to Hội An.",
        data: {
          body: "I took a few days off to go on a solo retreat to the beautiful town of Hội An. I spent the time riding around and just being alone with my own thoughts. It was awesome.",
          thumbnail: "/entries/24-05-23/hoi-an-vlog.jpeg",
          url: "https://www.youtube.com/watch?v=nSkcQyXH5yk",
        },
      },
    ],
  },
  {
    date: "2024-05-31",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ We moved apartments!",
        data: {
          body: "After 3 months in our last apartment, we felt it was time for a change of scenery! This new apartment is only a few streets over, but is nicer, has a pool and is literally half the price of our last one!",
        },
      },
      {
        type: "gallery",
        cost: 1200,
        title: "📸 &nbsp; Apartment No.2!",
        data: {
          id: "7ac8cd8b3bd640f6b3cc5b162629605a",
          images: [
            { url: "/entries/24-05-31/1.jpeg" },
            { url: "/entries/24-05-31/2.jpeg" },
            { url: "/entries/24-05-31/3.jpeg" },
            { url: "/entries/24-05-31/4.jpeg" },
            { url: "/entries/24-05-31/5.jpeg" },
            { url: "/entries/24-05-31/6.jpeg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-06-03",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 400,
        title: "📸 &nbsp; We've been attending more farewell dinners, making use of the pool and getting work done.",
        data: {
          id: "4aa170d6a88349abbaee6165d3445605",
          images: [
            { url: "/entries/24-06-03/1.jpeg" },
            { url: "/entries/24-06-03/2.jpeg" },
            { url: "/entries/24-06-03/3.jpeg" },
            { url: "/entries/24-06-03/4.jpeg" },
            { url: "/entries/24-06-03/5.jpeg" },
            { url: "/entries/24-06-03/6.jpeg" },
          ],
        },
      },
      {
        type: "text",
        cost: 0,
        title: "⚡️ A Digital Nomad Hack:",
        data: {
          body: "Finding new friends out here is overwhelming, because there's so many people to meet. Our new favourite way to make new friends is speak to everyone at our current friends' goodbye dinners. We've met the coolest people this way, and we always joke that for every one friend we lose, they replace themselves with 2-3 new ones 🤣",
        },
      },
    ],
  },
  {
    date: "2024-06-08",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "video",
        cost: 20,
        title: "🎥 &nbsp; We went to the Đà Nẵng International Fireworks Festival: Vietnam vs. France!",
        data: {
          mp4: "/entries/24-06-08/firework-2.mp4",
          thumbnail: "/entries/24-06-08/firework-thumb.jpeg",
        },
      },
      {
        type: "gallery",
        cost: 20,
        title: "📸 &nbsp; And went out for drinks at Maia after!",
        data: {
          id: "271f99ce83c643b19f7cd7a3fedfbf1d",
          images: [{ url: "/entries/24-06-08/1.jpeg" }],
        },
      },
    ],
  },
  {
    date: "2024-06-13",
    authors: ["martin"],
    items: [
      {
        type: "feature",
        cost: 0,
        title: "👨🏻‍💻 Introducing: Ling-oh!",
        data: {
          image: "/entries/24-06-13/lingoh.jpeg",
          text: "I'm starting a newsletter! If you love language, it's for you. I'll be sharing tips, insights and inspiration every two weeks. Please sign up to catch the first issue.",
          linkText: "lingoh.news",
          linkUrl: "https://lingoh.news/",
        },
      },
    ],
  },
  {
    date: "2024-06-20",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "video",
        cost: 300,
        title: "🎥 &nbsp; We took a trip to Hội An.",
        data: {
          mp4: "/entries/24-06-20/hoian.mp4",
          thumbnail: "/entries/24-06-20/hoian.jpg",
        },
      },
    ],
  },
  {
    date: "2024-06-25",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ We decided on our next city.",
        data: {
          body: "After lots and lots and lots of deliberation, we've landed on Bangkok as our new home. We'll be staying there for one month before heading over to Chiang Mai. We can't wait to find all the cool places in this massive city!",
        },
      },
      {
        type: "tickets",
        cost: 150,
        title: "✈️ &nbsp;See you soon, Bangkok!",
        data: {
          url: "/entries/24-06-25/dadbkk.png",
        },
      },
      {
        type: "timer",
        cost: 0,
        title: "⏱️ Time left in Đà Nẵng",
        data: {
          end: "2024-08-17T09:00:00Z",
        },
      },
    ],
  },
  {
    date: "2024-07-01",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 400,
        title: "📸 &nbsp;The daily grind.",
        data: {
          id: "7b349486ccb3445d9f0c37e3886c0067",
          images: [{ url: "/entries/24-07-01/1.jpeg" }, { url: "/entries/24-07-01/2.jpeg" }, { url: "/entries/24-07-01/3.jpeg" }, { url: "/entries/24-07-01/4.jpeg" }],
        },
      },
      {
        type: "text",
        cost: 0,
        title: "⚡️ We're working hard...",
        data: {
          body: "If you've been wondering why we're a little quieter over here at the moment, it's because we're spending every day working away at our projects. We've got big plans for Yakk, Journee (and now a secret third project) and there's lots to get done. But don't worry, we'll still update TDF when we do anything interesting!",
        },
      },
    ],
  },
  {
    date: "2024-07-07",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 1500,
        title: "🎥 &nbsp;We've been in Đà Nẵng for so long!",
        data: {
          body: "We thought it was time for a little update, and to show you a few new spots and what life is like here in July.",
          thumbnail: "/entries/24-07-07/15.jpg",
          url: "https://youtu.be/bCD1S04futE?si=g_QbVVPQxM1bLBJc",
        },
      },
    ],
  },
  {
    date: "2024-07-29",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 90,
        title: "📸 &nbsp;We finally went to Ba Na Hills with a cool new friend we randomly met in a coffee shop!",
        data: {
          id: "64c1160776f74420ba3918d6bfab01d5",
          images: [
            { url: "/entries/24-07-29/1.jpeg" },
            { url: "/entries/24-07-29/2.jpeg" },
            { url: "/entries/24-07-29/3.jpeg" },
            { url: "/entries/24-07-29/4.jpeg" },
            { url: "/entries/24-07-29/6.jpeg" },
            { url: "/entries/24-07-29/5.jpeg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-08-08",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "tickets",
        cost: 600,
        title: "🇹🇭 &nbsp; Our Thailand DTV visas have come through and are valid for 5 years! We're super happy.",
        data: {
          url: "/entries/24-08-08/visas.png",
        },
      },
    ],
  },
  {
    date: "2024-08-11",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ It's our last weekend in Đà Nẵng.",
        data: {
          body: "We've spent the weekend doing some amazing stuff. On Saturday night we had our leaving party - a family BBQ at the cowork followed by some karaoke. Even Martin had a good singalong! On Sunday Elizabeth volunteered at a local orphanage to clean the facilities and play with the kids!",
        },
      },
      {
        type: "gallery",
        cost: 505,
        title: "📸 A weekend well spent.",
        data: {
          id: "f9283c3be534433abf758af6ba6cbb4a",
          images: [
            { url: "/entries/24-08-11/1.jpeg" },
            { url: "/entries/24-08-11/2.jpeg" },
            { url: "/entries/24-08-11/3.jpeg" },
            { url: "/entries/24-08-11/4.jpeg" },
            { url: "/entries/24-08-11/6.jpeg" },
            { url: "/entries/24-08-11/5.jpeg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-08-12",
    authors: ["martin"],
    items: [
      {
        type: "feature",
        cost: 0,
        title: "👨🏻‍💻 Introducing: Yakk's new homepage and a brand new book - Nomad Vietnamese.",
        data: {
          image: "/entries/24-08-12/yakk-og.jpg",
          text: "Today I launched the second major iteration of the app, along with a new design and Yakk's first paid book. It's a big milestone. This thing I've spent so much time building has actually started to make money. \n\nThis is work I love. Work that gives me meaning, and provides me the opportunity to build something and add value in the space that excites me the most – language learning.",
          linkText: "yakk.app",
          linkUrl: "https://yakk.app/",
        },
      },
      {
        type: "youtube",
        cost: 1500,
        title: "🎥 &nbsp;What I've been building.",
        data: {
          body: "After months of hard work, today I achieved my goal of writing a language book for digital nomads to make their experience in Vietnam 100x better.",
          thumbnail: "/entries/24-08-12/16.jpg",
          url: "https://youtu.be/I0Wx0-itYa8?si=7WchOqczTpbW_M60",
        },
      },
    ],
  },
  {
    date: "2024-08-14",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ We've been thinking...",
        data: {
          body: "Over the last few weeks we've really intentionally leaned in to our Vietnam life. As excited as we were to head back home, we're even more excited to just stay here.",
        },
      },
      {
        type: "youtube",
        cost: 0,
        title: "🎥 &nbsp;We can't leave Vietnam.",
        data: {
          body: "After 6 months living in Đà Nẵng, Vietnam, we have decided we can't leave. In this video we share the reasons why we love life here and why we decided to cancel all of our plans to return to Europe.",
          thumbnail: "/entries/24-08-14/17.jpg",
          url: "https://youtu.be/_Ob78fOc5iw?si=HpRuBZXg1-PEVX4w",
        },
      },
    ],
  },
  {
    date: "2024-08-15",
    authors: ["elizabeth"],
    items: [
      {
        type: "text",
        cost: -50,
        title: "⚡️ I've picked up some freelance work.",
        data: {
          body: "I've recently started some contract work. It's for a remote company, working two days a week at my freelance rate! The people I work with are so funny and collaborative. \n\nBut the real highlight is that for a few months I can cover our living costs working only a few days a week!",
        },
      },
      {
        type: "tickets",
        cost: -1600,
        title: "💸 &nbsp; So you might see the ticker ↑ go up sometimes from now on!",
        data: {
          url: "/entries/24-08-15/invoice.png",
        },
      },
    ],
  },
  {
    date: "2024-08-16",
    authors: ["elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 0,
        title: "🎥 &nbsp; I made my first youtube video!",
        data: {
          body: "It's the year 2024 and I can not let another year of my life go by where I don't fulfil my destiny of becoming a youtuber. So here goes: How I lost myself (and found myself again) in Vietnam.",
          thumbnail: "/entries/24-08-16/thumbnail.jpg",
          url: "https://youtu.be/pjLQG7FmrZo?si=Vo4_Ut9M5N7ZnO36",
        },
      },
    ],
  },
  {
    date: "2024-08-17",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "image",
        cost: 150,
        title: "📍 We're Bangkok bound!",
        data: {
          url: "/entries/24-08-17/dad-bkk.jpg",
        },
      },
      {
        type: "gallery",
        cost: 1800,
        title: "📸 &nbsp;This might be our coolest apartment yet.",
        data: {
          id: "6a20f243cbff408d849f1cc6b0bd72fa",
          images: [
            { url: "/entries/24-08-17/1.jpeg" },
            { url: "/entries/24-08-17/2.jpeg" },
            { url: "/entries/24-08-17/3.jpeg" },
            { url: "/entries/24-08-17/4.jpeg" },
            { url: "/entries/24-08-17/5.jpeg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-08-22",
    authors: ["martin"],
    items: [
      {
        type: "blog",
        cost: 100,
        title: "💬 What I'm doing now.",
        data: {
          header: "What I'm doing now",
          linkText: "martinrue.com/now",
          linkUrl: "https://martinrue.com/now/past/24-08/",
          preview: "I'm writing this update from a cool co-working space called Paper Plane Project in Bangkok, Thailand.",
        },
      },
    ],
  },
  {
    date: "2024-08-25",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 1000,
        title: "📸 &nbsp;We're loving the energy in Bangkok.",
        data: {
          id: "7cab96324f0a4d1bae1915edebf0e99e",
          images: [
            { url: "/entries/24-08-25/1.jpg" },
            { url: "/entries/24-08-25/2.jpg" },
            { url: "/entries/24-08-25/6.jpg" },
            { url: "/entries/24-08-25/3.jpg" },
            { url: "/entries/24-08-25/4.jpg" },
            { url: "/entries/24-08-25/5.jpg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-09-01",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "youtube",
        cost: 0,
        title: "🎥 &nbsp; Bangkok is awesome.",
        data: {
          body: "Our first two weeks here have been awesome, and Bangkok is truly impressing us. We share our thoughts on life here in Thailand's capital, and consider whether we could really move here long term.",
          thumbnail: "/entries/24-09-01/thumb.jpeg",
          url: "https://youtu.be/sNhWcerYp9Q?si=CUvmVvAx1AoxT8GC",
        },
      },
    ],
  },
  {
    date: "2024-09-07",
    authors: ["elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 0,
        title: "🎥 &nbsp; My own Bangkok vlog is live now too!",
        data: {
          body: "Welcome to my Bangkok era, where I explore this fantastic city and uncover who I can be on the other side of little daily excuses and the fear of being better.",
          thumbnail: "/entries/24-09-07/thumbnail.jpg",
          url: "https://youtu.be/X7-_AFFDYqY?si=gxLVcXc6pBfWSIpp",
        },
      },
    ],
  },
  {
    date: "2024-09-08",
    authors: ["elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 250,
        title: "📸 &nbsp;I've entered the BKK girls groupchat!",
        data: {
          id: "deae34f8e84044d58f4b5ad0870c5751",
          images: [{ url: "/entries/24-09-08/1.jpg" }, { url: "/entries/24-09-08/2.jpg" }],
        },
      },
    ],
  },
  {
    date: "2024-09-13",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 1000,
        title: "📸 &nbsp;We're making the most of Bangkok life before it's on to our next adventure.",
        data: {
          id: "1c12032758d04429b6d491d61bf969d1",
          images: [
            { url: "/entries/24-09-13/1.jpg" },
            { url: "/entries/24-09-13/2.jpg" },
            { url: "/entries/24-09-13/3.jpg" },
            { url: "/entries/24-09-13/4.jpg" },
            { url: "/entries/24-09-13/5.jpg" },
            { url: "/entries/24-09-13/6.jpg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-09-16",
    authors: ["elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 0,
        title: "🎥 &nbsp; Bangkok condo tour.",
        data: {
          body: "In Bangkok we're choosing the condo lifestyle, and we're loving it. In this video we give you a tour of our apartment and the amenities that make life here so cool.",
          thumbnail: "/entries/24-09-16/thumb.jpg",
          url: "https://www.youtube.com/watch?v=g8Y7IB599Xw",
        },
      },
      {
        type: "text",
        cost: 0,
        title: "⚡️ We're going to miss it here.",
        data: {
          body: "Soon we'll be leaving Bangkok, but there's still so much left to discover in this incredible city. That's why we've decided to come back after Chiang Mai until the end of the year. And, obviously, we're coming back to this apartment.",
        },
      },
    ],
  },
  {
    date: "2024-09-17",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "tickets",
        cost: 80,
        title: "🚂 &nbsp; Off to Chiang Mai!",
        data: {
          url: "/entries/24-09-17/BKK-CNX.png",
        },
      },
      {
        type: "tickets",
        cost: -1250,
        title: "💸 &nbsp; Another boost to the fund!",
        data: {
          url: "/entries/24-09-17/invoice.png",
        },
      },
    ],
  },
  {
    date: "2024-09-18",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "image",
        cost: 150,
        title: "📍 We made it!",
        data: {
          url: "/entries/24-09-18/bkk-cnx.jpg",
        },
      },
      {
        type: "youtube",
        cost: 0,
        title: "🎥 &nbsp; This is how we got here.",
        data: {
          body: "Instead of flying, we chose to get a train to Chiang Mai, here's how it went.",
          thumbnail: "/entries/24-09-18/20.jpg",
          url: "https://youtu.be/OAiHo-eX5I8?si=YW1G8gf4YCw09n5e",
        },
      },
      {
        type: "gallery",
        cost: 700,
        title: "📸 &nbsp;We seem to have an eye for great apartments.",
        data: {
          id: "7ce48536ba5840b1a3a935b41c46c480",
          images: [
            { url: "/entries/24-09-18/1.jpeg" },
            { url: "/entries/24-09-18/2.jpeg" },
            { url: "/entries/24-09-18/3.jpeg" },
            { url: "/entries/24-09-18/4.jpeg" },
            { url: "/entries/24-09-18/6.jpeg" },
            { url: "/entries/24-09-18/5.jpeg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-09-18",
    authors: ["martin"],
    items: [
      {
        type: "gallery",
        cost: 150,
        title: "📸 &nbsp;Back on the road, and all we have to show for it is this lowsy police ticket...",
        data: {
          id: "fa136704a99e41a39d428722b32a6fc5",
          images: [{ url: "/entries/24-09-20/1.jpeg" }, { url: "/entries/24-09-20/2.jpeg" }],
        },
      },
    ],
  },
  {
    date: "2024-09-23",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 400,
        title: "📸 &nbsp;Chiang Mai so far...",
        data: {
          id: "1615906d676743af9bff5e63cbc5c063",
          images: [
            { url: "/entries/24-09-23/1.jpg" },
            { url: "/entries/24-09-23/2.jpg" },
            { url: "/entries/24-09-23/3.jpg" },
            { url: "/entries/24-09-23/4.jpg" },
            { url: "/entries/24-09-23/5.jpg" },
            { url: "/entries/24-09-23/6.jpg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-09-27",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 200,
        title: "📸 &nbsp;It flooded in Chiang Mai this week.",
        data: {
          id: "3557636d102f40999f86da4a8a6b9a96",
          images: [{ url: "/entries/24-09-27/7.jpg" }, { url: "/entries/24-09-27/8.jpg" }, { url: "/entries/24-09-27/9.jpg" }, { url: "/entries/24-09-27/10.jpg" }],
        },
      },
    ],
  },
  {
    date: "2024-10-01",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 100,
        title: "📸 &nbsp; We got our thai driving license. It only took one weekend. No more police fines!",
        data: {
          id: "a5fb22d9b4c14a3d86c7893239907598",
          images: [
            { url: "/entries/24-10-01/11.jpg" },
            { url: "/entries/24-10-01/12.jpg" },
            { url: "/entries/24-10-01/13.jpg" },
            { url: "/entries/24-10-01/15.jpg" },
            { url: "/entries/24-10-01/16.jpg" },
            { url: "/entries/24-10-01/17.jpg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-10-06",
    authors: ["martin"],
    items: [
      {
        type: "blog",
        cost: 100,
        title: "💬 A now update from the floods.",
        data: {
          header: "What I'm doing now",
          linkText: "martinrue.com/now",
          linkUrl: "https://martinrue.com/now/past/24-08/",
          preview:
            "I'm writing this update from my apartment in Chiang Mai. Chiang Mai is currently having its worst flood on record. For the past 2 days I've been stuck here with no water and power, which also means no aircon or internet.",
        },
      },
    ],
  },
  {
    date: "2024-10-08",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 0,
        title: "🎥 &nbsp; It flooded again! This time we filmed our experience.",
        data: {
          body: "This one broke the record as Chiang Mai's worst ever flood. We decided stay put and capture how it all played out.",
          thumbnail: "/entries/24-10-08/1.jpg",
          url: "https://youtu.be/u_vGbCCsDmA?si=WkhQM_UyfhSf4ymk",
        },
      },
    ],
  },
  {
    date: "2024-10-16",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 300,
        title: "📸 &nbsp; We're heading in seperate directions for a few weeks!",
        data: {
          id: "744d9f853352487eb83873fd801008dc",
          images: [{ url: "/entries/24-10-16/1.jpg" }],
        },
      },
      {
        type: "tickets",
        cost: 80,
        title: "🚂 &nbsp; Martin's heading back to Bangkok.",
        data: {
          url: "/entries/24-10-16/bkk.png",
        },
      },
      {
        type: "tickets",
        cost: 80,
        title: "✈️ &nbsp; Elizabeth's off to Krabi.",
        data: {
          url: "/entries/24-10-16/cnx.png",
        },
      },
      {
        type: "image",
        cost: 150,
        title: "📍 See you soon!",
        data: {
          url: "/entries/24-10-16/flights.jpg",
        },
      },
    ],
  },
  {
    date: "2024-10-18",
    authors: ["elizabeth"],
    items: [
      {
        type: "blog",
        cost: 100,
        title: "💬 Time for a /now update!",
        data: {
          header: "What I'm doing now",
          linkText: "elizabethkershaw.co.uk/now",
          linkUrl: "https://elizabethkershaw.co.uk/now/past/18-10/",
          preview: "I've just arrived in Krabi, where I'm meeting my friend Hannah for a 3 week girls trip. Today is the first time I've been alone in 8 months. How wild is that?",
        },
      },
    ],
  },
  {
    date: "2024-10-20",
    authors: ["elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 300,
        title: "📸 &nbsp; Hannah's back! We're spending 3 weeks together here in Krabi.",
        data: {
          id: "3f49e9936da640538bf0b247f97b1bcd",
          images: [
            { url: "/entries/24-10-20/1.jpg" },
            { url: "/entries/24-10-20/3.jpg" },
            { url: "/entries/24-10-20/4.jpg" },
            { url: "/entries/24-10-20/2.jpg" },
            { url: "/entries/24-10-20/5.jpg" },
            { url: "/entries/24-10-20/6.jpg" },
          ],
        },
      },
    ],
  },
  {
    date: "2024-10-26",
    authors: ["elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 500,
        title: "🎥 &nbsp; We're having a blast.",
        data: {
          body: "This vlog is just a little insight into how we've been spending our time together, pushing each other to follow our passions and have lots of fun along the way.",
          thumbnail: "/entries/24-10-26/1.jpg",
          url: "https://youtu.be/8ZJKY7QhXYU?si=DOHj7lkq08T61osi",
        },
      },
    ],
  },
  {
    date: "2024-11-01",
    authors: ["elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 500,
        title: "🎥 &nbsp; It's so nice to have girl time.",
        data: {
          body: "Making new friends is one thing, but becoming close enough to travel together and try new things is a real privilege and we're excited to take you along with us!",
          thumbnail: "/entries/24-11-1/2.jpg",
          url: "https://youtu.be/Ll8lRTiSRec?si=sloCbherP2mmjLrQ",
        },
      },
    ],
  },
  {
    date: "2024-11-06",
    authors: ["elizabeth"],
    items: [
      {
        type: "tickets",
        cost: 80,
        title: "✈️ &nbsp; Hannah's joining us in BKK!",
        data: {
          url: "/entries/24-11-6/bkk.png",
        },
      },
    ],
  },
  {
    date: "2024-11-14",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "text",
        cost: 1000,
        title: "⚡️ We're back in Bangkok",
        data: {
          body: "We are back in Bangkok for the rest of the year, and we're doubling down on the routine. We have no more travel planned for this year.",
        },
      },
      {
        type: "youtube",
        cost: 200,
        title: "🎥 &nbsp; Time for a life update!",
        data: {
          body: "It's the perfect time of year to be in Thailand, and in this video we share what our life is like here now that we've found our routine.",
          thumbnail: "/entries/24-11-14/22.jpg",
          url: "https://youtu.be/xppgQNMg_Ik?si=1l0tdg_gsDbTHFZA",
        },
      },
    ],
  },
  {
    date: "2024-11-19",
    authors: ["elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 500,
        title: "📸 &nbsp; It's my 26th birthday!",
        data: {
          id: "310f95ba-1139-48f3-91a2-ce7e91fe04ba",
          images: [
            { url: "/entries/24-11-19/1.jpg" },
            { url: "/entries/24-11-19/2.jpg" },
            { url: "/entries/24-11-19/3.jpg" },
            { url: "/entries/24-11-19/4.jpg" },
            { url: "/entries/24-11-19/5.jpg" },
            { url: "/entries/24-11-19/6.jpg" },
          ],
        },
      },
      {
        type: "youtube",
        cost: 200,
        title: "🎥 &nbsp; Here's 26 life lessons for 26 years!",
        data: {
          body: " I just wanted to sit down and chat about some of the most prominent lessons I've learned in the 26 years I've been alive and try out a new format of chatty videos. Enjoy!",
          thumbnail: "/entries/24-11-19/26.jpg",
          url: "https://youtu.be/B3fY1HEo5K0?si=PJ6r-oxKTMMBbISj",
        },
      },
    ],
  },
  {
    date: "2024-11-30",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "text",
        cost: 1000,
        title: "⚡️ We've extended our stay.",
        data: {
          body: "We're still thriving off the energy of Bangkok and aren't ready to leave just yet. So we'll be staying until mid Feb before heading back to Vietnam!",
        },
      },
      {
        type: "timer",
        cost: 0,
        title: "⏱️ Time left in Bangkok.",
        data: {
          end: "2025-02-11T13:10:00Z",
        },
      },
    ],
  },
  {
    date: "2024-12-05",
    authors: ["martin"],
    items: [
      {
        type: "blog",
        cost: 100,
        title: "💬 A little end of year update.",
        data: {
          header: "What I'm doing now",
          linkText: "martinrue.com/now",
          linkUrl: "https://martinrue.com/now/",
          preview: "34º in December is a little weird for me. The city has really Xmas'ified over the past few weeks, with decorations, music and festivities all over.",
        },
      },
    ],
  },
  {
    date: "2024-12-12",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "gallery",
        cost: 1000,
        title: "📸 &nbsp; Christmas has officially begun!",
        data: {
          id: "68223fbbe8e74381b71dfd4403066f28",
          images: [{ url: "/entries/24-12-12/11.jpg" }],
        },
      },
    ],
  },
  {
    date: "2024-12-15",
    authors: ["martin"],
    items: [
      {
        type: "youtube",
        cost: 200,
        title: "🎥 &nbsp; Here's why I'll never quit Esperanto.",
        data: {
          body: "In this video I celebrate Zamenhof Day by heading to the Bangkok Esperanto meetup, and to my surprise, meet a bunch of young students who are learning Esperanto as part of their curriculum here in Thailand.",
          thumbnail: "/entries/24-12-15/thumb.jpg",
          url: "https://youtu.be/QXJA1q2x3Hw?si=JXJkiorkLcd4UMqZ",
        },
      },
    ],
  },
  {
    date: "2024-12-16",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "text",
        cost: 800,
        title: "⚡️ Elizabeth's Work Update.",
        data: {
          body: "I'm about to hit 10k followers on Linkedin. And recently I've been meeting so many girls like me working on cool stuff. So I've had an idea to build an exclusive community for us all to level up together in the new year. I really want to launch before christmas, so I'll be dissapearing from normal life for a week.",
        },
      },
      {
        type: "text",
        cost: 0,
        title: "⚡️ Martin's Work Update.",
        data: {
          body: "I'm working on a new idea: LangSesh. It creates on-the-fly language exercises for people who have a spare 3 minutes and want to improve their target language. I'm making good progress to launch it at the start of next year.",
        },
      },
      {
        type: "gallery",
        cost: 0,
        title: "📸 &nbsp; Here's a little sneak peek:",
        data: {
          id: "cdf9e735687a41609288900b64a3f092",
          images: [{ url: "/entries/24-12-16/1.jpg" }, { url: "/entries/24-12-16/2.jpg" }],
        },
      },
    ],
  },
  {
    date: "2024-12-19",
    authors: ["martin"],
    items: [
      {
        type: "youtube",
        cost: 200,
        title: "🎥 &nbsp; I'm doing Advent of Code 2024.",
        data: {
          body: "AoC is an annual set of coding challenges that come out each day leading up to the 25th. It's a fun way to practise your problem solving skills and this year I decided to challenge myself by recording my solutions live.",
          thumbnail: "/entries/24-12-19/aoc01.png",
          url: "https://youtu.be/GfgOSfEErKI?si=3X4NpHHPJd0OQ2r4",
        },
      },
    ],
  },
  {
    date: "2024-12-20",
    authors: ["elizabeth"],
    items: [
      {
        type: "feature",
        cost: 250,
        title: "👩🏼‍💻 Introducing: Journee Girls Club!",
        data: {
          image: "/entries/24-12-20/title.jpg",
          text: "Today I'm launching something exciting I've been working on the last few weeks. A private online community where ambitious girls: <br><br>→ Get expert masterclasses on all aspects of life <br>→ Co-work on their dreams with their new besties <br>→ Build real connections with other girls who get it <br><br> I've just opened applications for the founding cohort, and this is the Vision doc I've made to get people on board!",
          linkText: "✨Vision Doc✨",
          linkUrl: "https://drive.google.com/file/d/1gRTMOC3Wfsnaxfj7jDfT2Al6RmmwlOKx/view?usp=sharing",
        },
      },
    ],
  },
  {
    date: "2024-12-25",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 300,
        title: "🎥 &nbsp; Merry Christmas!",
        data: {
          body: "This is our first Christmas away from home and we're spending it with some of our closest friends in Bangkok.",
          thumbnail: "/entries/24-12-25/xmas.jpg",
          url: "https://www.youtube.com/watch?v=7EmfEr2vLgI",
        },
      },
    ],
  },
  {
    date: "2025-01-01",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "gallery",
        cost: 100,
        title: "📸 &nbsp; Happy New Year!",
        data: {
          id: "8ca59d784d3942078600f684da2cc929",
          images: [{ url: "/entries/25-01-01/1.jpg" }, { url: "/entries/25-01-01/2.jpg" }, { url: "/entries/25-01-01/3.jpg" }],
        },
      },
    ],
  },
  {
    date: "2024-01-02",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 300,
        title: "🎥 &nbsp; We're off on an adventure!",
        data: {
          body: "Our friend group will sadly be breaking up soon. So we're going on one last trip to Kanchanaburi, a small town 2 hours from Bangkok to make the most of the time we have left with Hannah and David.",
          thumbnail: "/entries/25-01-02/kan.jpg",
          url: "https://youtu.be/JuOKMH3oW_M?si=Zq7CwabCnEv2bt26",
        },
      },
    ],
  },
  {
    date: "2025-01-03",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "gallery",
        cost: 200,
        title: "📸 &nbsp; We had an awesome time.",
        data: {
          id: "56a20da9568646039c8d72143af1e4f3",
          images: [{ url: "/entries/25-01-03/1.jpg" }, { url: "/entries/25-01-03/2.jpg" }, { url: "/entries/25-01-03/3.jpg" }],
        },
      },
    ],
  },
  {
    date: "2024-01-13",
    authors: ["elizabeth"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ I'm dissapearing again.",
        data: {
          body: "The launch of Journee Girls Club has been a big success, about 20 people have applied! But that means there's LOTS to do in the run up to the welcome party. So I need some time to get my head down and just completely focus. I really LOVED the vibe in Kanchanaburi, so I'm going back!",
        },
      },
      {
        type: "gallery",
        cost: 250,
        title: "📸 &nbsp; Let me head back for a sec.",
        data: {
          id: "1473188174194b17b56eef44bb17cbbc",
          images: [{ url: "/entries/25-01-13/4.jpg" }, { url: "/entries/25-01-13/5.jpg" }, { url: "/entries/25-01-13/6.jpg" }],
        },
      },
    ],
  },
  {
    date: "2025-01-18",
    authors: ["elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 0,
        title: "📸 &nbsp; WELCOME PARTY DAY!!!",
        data: {
          id: "6bd4c1be9953490f9645d0b3c724a235",
          images: [{ url: "/entries/25-01-18/8.jpg" },],
        },
      },
      {
        type: "text",
        cost: 0,
        title: "⚡️ It was a huge success.",
        data: {
          body: "Today marks the official beginning of Journee Girls Club! We had an incredible welcome party, where we got to know eachother and entered the Discord together. I'm really grateful for every single girl in here and I'm so proud of myself for pulling this together in the last few weeks. Excited to see how it goes!",
        },
      },
    ],
  },
  {
    date: "2024-01-27",
    authors: ["elizabeth"],
    items: [
      {
        type: "feature",
        cost: -450,
        title: "👩🏼‍💻 The Journee Girls Club website is live!",
        data: {
          image: "/entries/25-01-27/jgcweb.png",
          text: "I actually got my first ever BRAND DEAL with a company on Linekdin. How wild is that!? They paid me to post about their website builder and they also gave me access to their platform, so I took it as the perfect sign to build Journee Girls Club a website!",
          linkText: "journeegirlsclub.com",
          linkUrl: "https://journeegirlsclub.com",
        },
      },
    ],
  },
  {
    date: "2025-02-02",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 300,
        title: "🎥 &nbsp; Why are we leaving Bangkok?",
        data: {
          body: "Soon it'll be time for us to head back to Da Nang. We're excited to be back, but are having mixed feelings about leaving Bangkok. So we made a video about it.",
          thumbnail: "/entries/25-02-02/bkk.jpg",
          url: "https://youtu.be/3JGNCH0_084?si=fIa5j0Suz1O5Wfp1",
        },
      },
    ],
  },
  {
    date: "2025-02-04",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 300,
        title: "📸 &nbsp; We're making our way to Da Nang seperately!",
        data: {
          id: "29aea06a1cac4537baa968410bab02cd",
          images: [{ url: "/entries/25-02-04/1.jpg" }],
        },
      },
      {
        type: "tickets",
        cost: 150,
        title: "🚌 &nbsp; Martin's going through Cambodia by land.",
        data: {
          url: "/entries/25-02-04/BKK-SMRP.png",
        },
      },
      {
        type: "tickets",
        cost: 120,
        title: "✈️ &nbsp; Elizabeth's flying direct to Da Nang.",
        data: {
          url: "/entries/25-02-04/dadbkk.png",
        },
      },
      {
        type: "image",
        cost: 300,
        title: "📍 See you soon!",
        data: {
          url: "/entries/25-02-04/1.png",
        },
      },
    ],
  },
  {
    date: "2025-02-06",
    authors: ["martin"],
    items: [
      {
        type: "youtube",
        cost: 300,
        title: "🎥 &nbsp; So far I'm loving Cambodia.",
        data: {
          body: "I arrived in Siem Reap 2 days ago. The city is already surprising me with its quaint vibes, impressive cafes, co-working spaces and awesome food options. In this video, I show you two spots I've enjoyed working from.",
          thumbnail: "/entries/25-02-06/sr.jpg",
          url: "https://youtu.be/CdVTOEV7BHY?si=dnBNxkhLIkddMYvg",
        },
      },
    ],
  },
  {
    date: "2025-02-08",
    authors: ["martin"],
    items: [
      {
        type: "gallery",
        cost: 200,
        title: "📸 &nbsp; I went to Angkor Wat. WOAH!",
        data: {
          id: "23191a8787094b4baf4c4d93810789c2",
          images: [{ url: "/entries/25-02-08/2.jpg" }, { url: "/entries/25-02-08/3.jpg" }, { url: "/entries/25-02-08/4.jpg" }, { url: "/entries/25-02-08/5.jpg" }, { url: "/entries/25-02-08/6.jpg" }, { url: "/entries/25-02-08/7.jpg" },],
        },
      },
    ],
  },
  {
    date: "2025-02-13",
    authors: ["martin"],
    items: [
      {
        type: "youtube",
        cost: 300,
        title: "🎥 &nbsp; It's my birthday!",
        data: {
          body: "I'm doing a Q&A. A bit of a longer vlog than normal, but damn, you guys sent me some tough questions!",
          thumbnail: "/entries/25-02-13/bday.jpg",
          url: "https://youtu.be/_9VsPfQMCso?si=D36APBnzp_qoOG_u",
        },
      },
    ],
  },
  {
    date: "2025-02-17",
    authors: ["martin","elizabeth"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ We're back together in Da Nang!",
        data: {
          body: "After two weeks apart Martin has arrived in Da Nang. We're excited to see what Vietnam 2025 has in store for us!",
        },
      },
      {
        type: "gallery",
        cost: 600,
        title: "📸 &nbsp; Time to catch up on some celebrations!",
        data: {
          id: "ba634526950b4f88916be59ed45fcac6",
          images: [{ url: "/entries/25-02-17/1.jpg" }, { url: "/entries/25-02-17/2.jpg" }, { url: "/entries/25-02-17/3.jpg" }, { url: "/entries/25-02-17/4.jpg" }, { url: "/entries/25-02-17/5.jpg" }],
        },
      },
    ],
  },
  {
    date: "2025-02-28",
    authors: ["elizabeth"],
    items: [
      {
        type: "tickets",
        cost: 120,
        title: "✈️ &nbsp; Next, I'm going to pick up my brother in Bangkok.",
        data: {
          url: "/entries/25-02-28/bkk.png",
        },
      },
    ],
  },
  {
    date: "2025-03-05",
    authors: ["martin"],
    items: [
      {
        type: "gallery",
        cost: 0,
        title: "📸 &nbsp; Meanwhile my mum has arrived in Vietnam! She'll be here for 5 weeks.",
        data: {
          id: "e7cbb5ecd8964a56b376611536e9849d",
          images: [{ url: "/entries/25-03-05/1.jpg" }, { url: "/entries/25-03-05/2.jpg" }],
        },
      },
    ],
  },
  {
    date: "2025-03-07",
    authors: ["elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 300,
        title: "📸 &nbsp; I found James! We've been exploring Bangkok.",
        data: {
          id: "0d2661f318974fc3a79bd25d4bde4cf5",
          images: [{ url: "/entries/25-03-07/1.jpg" }, { url: "/entries/25-03-07/3.jpg" }, { url: "/entries/25-03-07/4.jpg" }, { url: "/entries/25-03-07/2.jpg" }],
        },
      },
      {
        type: "tickets",
        cost: 120,
        title: "✈️ &nbsp; I'm bringing him back to Da Nang!",
        data: {
          url: "/entries/25-03-07/ticket.png",
        },
      },
    ],
  },
  {
    date: "2025-03-08",
    authors: ["martin"],
    items: [
      {
        type: "gallery",
        cost: 250,
        title: "📸 &nbsp; We're staying in a condo style building on the other side of the river this year.",
        data: {
          id: "68b4481a4c0d4004b27ab5469d012e4f",
          images: [{ url: "/entries/25-03-08/1.jpg" }, { url: "/entries/25-03-08/2.jpg" }, { url: "/entries/25-03-08/3.jpg" }, { url: "/entries/25-03-08/4.jpg" }, { url: "/entries/25-03-08/5.jpg" }],
        },
      },
    ],
  },
  {
    date: "2025-03-15",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "gallery",
        cost: 300,
        title: "📸 &nbsp; We're celebrating Holi again!",
        data: {
          id: "f2aec0920aa44027a843c30f5e427432",
          images: [{ url: "/entries/25-03-15/1.jpg" }, { url: "/entries/25-03-15/2.jpg" }, { url: "/entries/25-03-15/3.jpg" }, { url: "/entries/25-03-15/4.jpg" }, { url: "/entries/25-03-15/5.jpg" }],
        },
      },
    ],
  },
  {
    date: "2024-03-20",
    authors: ["elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 300,
        title: "🎥 &nbsp; James has also been vlogging his experience.",
        data: {
          body: "James tried himself with the Vlogger lifestyle (inspired by us) and documented his experience traveling! You can check out his channel and all his videos here. Hope you had fun James!",
          thumbnail: "/entries/25-03-20/thaivlog.jpg",
          url: "https://www.youtube.com/@jameskershaw7549",
        },
      },
    ],
  },
  {
    date: "2025-03-22",
    authors: ["elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 0,
        title: "📸 &nbsp; I've done another brand deal! This time a fitness brand sent me two adorable gym outfits to Vietnam. OMG!",
        data: {
          id: "ec82236d9ce54a1387a7f80258e7d9dc",
          images: [{ url: "/entries/25-03-25/10.jpg" }, { url: "/entries/25-03-25/11.jpg" }, { url: "/entries/25-03-25/12.jpg" }, { url: "/entries/25-03-25/13.jpg" }, { url: "/entries/25-03-25/14.jpg" }, { url: "/entries/25-03-25/15.jpg" }],
        },
      },
    ],
  },
  {
    date: "2024-03-28",
    authors: ["elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 300,
        title: "🎥 &nbsp; Journee Girls Club is growing!",
        data: {
          body: "I'll catch you up on everything that's gone down and show you some of the behind the scenes of building the second wave of Journee Girls Club, the private online community for young female founders, entrepreneurs & freelancers leveling up in life & business together.",
          thumbnail: "/entries/25-03-28/hoian.jpg",
          url: "https://youtu.be/bmKJHfJLjNg?si=GRDpPk5F-e5aFxMw",
        },
      },
    ],
  },
  {
    date: "2025-04-05",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "gallery",
        cost: 0,
        title: "📸 &nbsp; Having Martin's mum here has been a blast! We're going to miss hanging out with her.",
        data: {
          id: "dd233f950c0549bca38921a55113a62c",
          images: [{ url: "/entries/25-04-05/7.jpg" }, { url: "/entries/25-04-05/6.jpg" }, { url: "/entries/25-04-05/8.jpg" }, { url: "/entries/25-04-05/9.jpg" }],
        },
      },
    ],
  },
  {
    date: "2025-04-10",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "gallery",
        cost: 250,
        title: "📸 &nbsp; I'm taking Martin back to my fav hotel in Hoi An for some quality time together!",
        data: {
          id: "5c24e2880df5415786fa990441dabe59",
          images: [{ url: "/entries/25-04-10/1.jpg" }, { url: "/entries/25-04-10/2.jpg" }, { url: "/entries/25-04-10/3.jpg" }, { url: "/entries/25-04-10/4.jpg" }, { url: "/entries/25-04-10/5.jpg" }, { url: "/entries/25-04-10/6.jpg" }],
        },
      },
    ],
  },
  {
    date: "2025-04-15",
    authors: ["elizabeth"],
    items: [
      {
        type: "blog",
        cost: 0,
        title: "💬 Time for a /now update!",
        data: {
          header: "What I'm doing now",
          linkText: "elizabethkershaw.co.uk/now",
          linkUrl: "https://elizabethkershaw.co.uk/now/",
          preview: "I've sort of left this update SO long that it feels almost impossible to capture everything that's important. But that doesn't mean I won't try.",
        },
      },
    ],
  },
  {
    date: "2025-04-20",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "text",
        cost: 1000,
        title: "⚡️ We've decided our next adventure will be...",
        data: {
          body: "After a few months in Vietnam, we're feeling ready for something new. And Hoi An was a great reminder that calm and quiet might just be what we need most. So our next destination will be Koh Phangan, Thailand!",
        },
      },
      {
        type: "timer",
        cost: 0,
        title: "⏱️ Time until we set off!",
        data: {
          end: "2025-05-05T13:10:00Z",
        },
      },
    ],
  },
  {
    date: "2025-04-28",
    authors: ["martin"],
    items: [
      {
        type: "feature",
        cost: 0,
        title: "👨🏻‍💻 Introducing: LangSesh",
        data: {
          image: "/entries/25-04-28/OG-white.png",
          text: "Here's what I've been working on for the past 4 months. I just launched LangSesh - my second language learning product. It helps you turn a spare 3 mins into language practice.",
          linkText: "langsesh.com",
          linkUrl: "https://langsesh.com",
        },
      },
    ],
  },
  {
    date: "2024-05-01",
    authors: ["elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 300,
        title: "🎥 &nbsp; We're SO close to cohort 2!",
        data: {
          body: "I really wish I'd have documented the process of first building my business. Luckily, the second round won't be all too different. Here's a REAL behind the scenes of everything I do to grow Journee Girls Club.",
          thumbnail: "/entries/25-05-01/dng.jpg",
          url: "https://youtu.be/KCzwSSxohC0?si=HDeDg9HtptBuMFNQ",
        },
      },
    ],
  },
  {
    date: "2024-05-03",
    authors: ["elizabeth"],
    items: [
      {
        type: "feature",
        cost: 0,
        title: "👩🏼‍💻 Welcome party round 2!",
        data: {
          image: "/entries/25-05-03/Girlies.png",
          text: "We've had 10 new girls enter the space today - each of them incredible in their own unique way. The energy is infectious and we're so ready for what's to come!",
          linkText: "journeegirlsclub.com",
          linkUrl: "https://journeegirlsclub.com",
        },
      },
    ],
  },
  {
    date: "2025-05-09",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "tickets",
        cost: 80,
        title: "✈️ &nbsp; Time for a quick stop-off in Bangkok.",
        data: {
          url: "/entries/25-05-09/flight.png",
        },
      },
      {
        type: "image",
        cost: 150,
        title: "📍 We're excited to be back!",
        data: {
          url: "/entries/25-05-09/path.png",
        },
      },
    ],
  },
  {
    date: "2025-05-14",
    authors: ["elizabeth", "martin"],
    items: [
      {
        type: "gallery",
        cost: 1000,
        title: "📸 &nbsp; There's really nothing quite like it!",
        data: {
          id: "db7b339414e34e0290a522aa73514d89",
          images: [{ url: "/entries/25-05-14/1.jpg" }, { url: "/entries/25-05-14/2.jpg" }, { url: "/entries/25-05-14/3.jpg" }, { url: "/entries/25-05-14/4.jpg" }, { url: "/entries/25-05-14/5.jpg" }],
        },
      },
    ],
  },
  {
    date: "2025-05-16",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "tickets",
        cost: 1000,
        title: "🚂 &nbsp; Even if it was only a flying visit.",
        data: {
          url: "/entries/25-05-16/tickets.png",
        },
      },
      {
        type: "image",
        cost: 150,
        title: "📍 Now we're heading south.",
        data: {
          url: "/entries/25-05-16/train.jpg",
        },
      },
      {
        type: "gallery",
        cost: 0,
        title: "📸 &nbsp; We made it to Surat Thani.",
        data: {
          id: "486808764b464ec38d55333f010f23da",
          images: [{ url: "/entries/25-05-16/1.jpg" },],
        },
      },
    ],
  },
  {
    date: "2025-05-17",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "tickets",
        cost: 100,
        title: "⛴️ &nbsp; One last trip - this time by boat!",
        data: {
          url: "/entries/25-05-17/ferry.png",
        },
      },
      {
        type: "image",
        cost: 150,
        title: "📍 We can't wait to get there.",
        data: {
          url: "/entries/25-05-17/route.jpg",
        },
      },
      {
        type: "gallery",
        cost: 500,
        title: "📸 &nbsp; Thank god we're here!",
        data: {
          id: "9ecdc38eab63457c83e449625157a89f",
          images: [{ url: "/entries/25-05-17/1.jpg" }, { url: "/entries/25-05-17/2.jpg" }, { url: "/entries/25-05-17/3.jpg" }, { url: "/entries/25-05-17/4.jpg" }],
        },
      },
    ],
  },
  {
    date: "2025-05-19",
    authors: ["elizabeth"],
    items: [
      {
        type: "gallery",
        cost: 600,
        title: "📸 &nbsp; I've got my own bike!",
        data: {
          id: "9f7ed87ccc8247d09d3f17ebeb13f111",
          images: [{ url: "/entries/25-05-19/5.jpg" }, { url: "/entries/25-05-19/6.jpg" }],
        },
      },
    ],
  },
  {
    date: "2025-05-21",
    authors: ["martin","elizabeth"],
    items: [
      {
        type: "text",
        cost: 0,
        title: "⚡️ Our first thoughts on Koh Phangan.",
        data: {
          body: "So far we've been impressed with this island. We're living a small life with a very focused routine and we're loving it! The nature is incredible and it's easy to get around everywhere. We think we're gonna love it here!",
        },
      },
      {
        type: "gallery",
        cost: 600,
        title: "📸 &nbsp; The island is stunning. We're blown away.",
        data: {
          id: "17364f5aae0e4877b14812f492cbc6d5",
          images: [{ url: "/entries/25-05-21/1.jpg" }, { url: "/entries/25-05-21/2.jpg" }, { url: "/entries/25-05-21/3.jpg" }, { url: "/entries/25-05-21/4.jpg" }, { url: "/entries/25-05-21/5.jpg" }],
        },
      },
    ],
  },
  {
    date: "2025-05-23",
    authors: ["martin","elizabeth"],
    items: [
      {
        type: "text",
        cost: -10000,
        title: "⚡️ Plan B just became Plan A.",
        data: {
          body: "After some debate, we've decided to put our last bit of savings into The Discovery Fund. We're so close to turning this fund around and being able to live off our projects, we're determined to make things work. We're feeling hopeful that before the end of this journey we'll achieve what we set out to do!",
        },
      },
    ],
  },
  {
    date: "2025-05-28",
    authors: ["elizabeth"],
    items: [
      {
        type: "feature",
        cost: 0,
        title: "👩🏼‍💻 Introducing: The Journee Girls Club Podcast!",
        data: {
          image: "/entries/25-05-28/Thumbnail.png",
          text: "I've started this podcast to elevate some of the incredible voices of the girls in the community. They each have their own unique experiences & views, and we always have the best conversations. This projects aims to capture some of the magic that happens every day inside the community and bring it to the masses!",
          linkText: "Spotify",
          linkUrl: "https://open.spotify.com/episode/5K7phsz0Fdux2rx2m4JOac?si=38534b67223545d8",
        },
      },
    ],
  },
   {
    date: "2025-06-03",
    authors: ["martin", "elizabeth"],
    items: [
      {
        type: "youtube",
        cost: 300,
        title: "🎥 &nbsp; Why we disappeared to Koh Phangan.",
        data: {
          body: "It's been a while! We're now enjoying life on a small island.",
          thumbnail: "/entries/25-06-03/29.png",
          url: "https://youtu.be/OSqgbb4H9wk?si=XBOtq-2VkBHb5VAs",
        },
      },
    ],
  },
];
