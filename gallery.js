
const collections = {

  festivals: {
    title: "Festival Posters",
    description: "Celebrations, culture and festival artwork.",
    items: [
      "Diwali",
      "Holi",
      "Navratri",
      "Dussehra",
      "Independence Day",
      "Other Festivals"
    ]
  },

  advertising: {
    title: "Advertisement Posters",
    description: "Promotional creatives, product advertisements and offers.",
    items: [
      "Product Advertisement",
      "Promotional Poster",
      "Offer Creative",
      "Brand Campaign",
      "Service Advertisement",
      "Retail Promotion"
    ]
  },

  social: {
    title: "Social Media Designs",
    description: "Digital posts and social media campaign artwork.",
    items: [
      "Social Media Post",
      "Campaign Creative",
      "Announcement",
      "Digital Banner",
      "Carousel Design",
      "Story Creative"
    ]
  },

  print: {
    title: "Brochures & Flyers",
    description: "Print layouts, promotional flyers and brochures.",
    items: [
      "Brochure Design",
      "Flyer Design",
      "Booklet Layout",
      "Print Advertisement",
      "Newsletter",
      "Pamphlet"
    ]
  },

  branding: {
    title: "Branding & Identity",
    description: "Brand identity, logo concepts and visual systems.",
    items: [
      "Logo Design",
      "Brand Identity",
      "Business Stationery",
      "Visual Guidelines",
      "Business Card",
      "Brand Concept"
    ]
  },

  invitations: {
    title: "Invitation & Cards",
    description: "Invitations, greeting cards and event designs.",
    items: [
      "Invitation Card",
      "Wedding Card",
      "Greeting Card",
      "Event Card",
      "Ceremony Card",
      "Celebration Design"
    ]
  }

};

// URL se category ka naam read karo
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// Requested category milne par uski gallery dikhao
const collection = collections[category] || collections.festivals;

// Page title aur heading update karo
document.title = collection.title + " — Dev Baghel";

document.getElementById("gallery-title").textContent =
  collection.title + ".";

document.getElementById("gallery-description").textContent =
  collection.description;

// Gallery cards banao
const grid = document.getElementById("gallery-grid");

collection.items.forEach((item, index) => {

  const card = document.createElement("article");
  card.className = "gallery-item";

  const visual = document.createElement("div");
  visual.className = "gallery-placeholder";

  const text = document.createElement("div");

  const number = document.createElement("span");
  number.textContent =
    "DESIGN / " + String(index + 1).padStart(2, "0");

  const title = document.createElement("strong");
  title.textContent = item;

  text.append(number, title);
  visual.append(text);

  const caption = document.createElement("div");
  caption.className = "gallery-caption";
  caption.textContent = "Artwork preview — replace with your design";

  card.append(visual, caption);
  grid.append(card);

});
