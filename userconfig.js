// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Thanh Hoa",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "News",
              url: "https://baomoi.com/",
              icon: "news",
              icon_color: palette.blue,
            },
            {
              name: "Wiki News",
              url: "https://en.m.wikipedia.org/wiki/Portal:Current_events",
              icon: "brand-wikipedia",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.peach,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "work",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "research",
          links: [
            {
              name: "udemy",
              url: "https://www.udemy.com",
              icon: "letter-u",
              icon_color: palette.pink,
            },
            {
              name: "Free Media",
              url: "https://fmhy.net/",
              icon: "world-pause",
              icon_color: palette.pink,
            },
          ],
        },
      ],
    },
    {
      name: "relax",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "Reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "Youtube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "Master Duel Meta",
              url: "https://www.masterduelmeta.com/",
              icon: "play-card",
              icon_color: palette.green,
            },
            {
              name: "Steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.pink,
            },
          ],
        },
        {
          name: "Fun Stuff",
          links: [
            {
              name: "Monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: palette.red,
            },
            {
              name: "Pokemon Showdown",
              url: "https://pokemonshowdown.com/",
              icon: "pokeball",
              icon_color: palette.peach,
            },
          ],
        },
       
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

// Function to pick a random GIF from the list
function getRandomGif() {
  const gifs = [
    "src/img/banners/mesh.gif", 
    "src/img/banners/violet.gif", 
    "src/img/banners/gradient.gif",
    "src/img/banners/cbg-14.gif",
  ];

  // Generate a random index to select a GIF
  const randomIndex = Math.floor(Math.random() * gifs.length);

  return gifs[randomIndex];
}

// Apply a random background for each tab separately
function applyRandomBackgrounds() {
  // Loop through each tab and set its background to a random GIF
  default_config.tabs.forEach((tab, index) => {
    const randomGif = getRandomGif(); // Get a new random GIF for this tab
    tab.background_url = randomGif;  // Update the background URL for the tab
  });

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);

}

// Run the function to apply the random backgrounds when the page loads
applyRandomBackgrounds();

