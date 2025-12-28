const products = [
  {
    id: "CRS-P001",
    name: "Rose Charm",
    price: 499,
    description: "A handcrafted crochet rose in a wrap, symbolizing love and timeless beauty. Rose Charm adds a graceful touch to your home décor or makes a heartfelt gift for someone special.",
    images: {
      darkRed: "images/c1-red.jpg"
    },
    defaultColor: "darkRed",
    waText: "Orchid Grace (ID: CRS-P001)"
  },

  {
    id: "CRS-P002",
    name: "Sunshine Bloom",
    price: 499,
    description: "Bright and cheerful, Sunshine Bloom is a crochet flower that brings warmth and positivity into any space. A perfect décor accent to uplift moods and interiors.",
    images: {
      yellow: "images/c2-yellow.jpg"
    },
    defaultColor: "yellow",
    waText: "Blush Bloom (ID: CRS-P002)"
  },

  {
    id: "CRS-P003",
    name: "Berry Bliss",
    price: 299,
    description: "Berry Bliss is a delicately handcrafted crochet bloom with rich, romantic hues. Designed to add charm and softness, it’s ideal for gifting or cozy corners.",
    images: {
      pink: "images/c3-pink.jpg",
      red: "images/c3-red.jpg"
    },
    defaultColor: "pink",
    waText: "Rosette Reverie (ID: CRS-P003)"
  },

  {
    id: "CRS-P004",
    name: "Lilly of The Valley",
    price: 299,
    description: "Inspired by nature’s elegance, Lilly of The Valley is a refined crochet creation that reflects purity and grace. Perfect for adding personality to keys, bags, or gifts.",
    images: {
      white: "images/c4-white.jpg",
      pink: "images/c4-pink.jpg",
      red: "images/c4-red.jpg"
    },
    defaultColor: "white",
    waText: "Petal Bookmark (ID: CRS-P004)"
  },

  {
    id: "CRS-P005",
    name: "Honey Puff",
    price: 499,
    description: "Honey Puff is a warm, cozy crochet creation crafted with soft textures and gentle colors. Perfect for adding a comforting, handmade touch to your space.",
    images: {
      yellow: "images/c5-yellow.jpg"
    },
    defaultColor: "yellow",
    waText: "Cozy Knot Gift Set (ID: CRS-P005)"
  },

  {
    id: "CRS-P006",
    name: "Cozy Penguin",
    price: 299,
    description: "An adorable crochet penguin made to spread joy and warmth. Cozy Penguin is perfect as a playful décor piece or a cute handcrafted gift for all ages.",
    images: {
      lightblue: "images/c6-blue.jpg",
      green: "images/c6-green.jpg",
      yellow: "images/c6-yellow.jpg",
      pink: "images/c6-pink.jpg"
    },
    defaultColor: "lightblue",
    waText: "Scarlet Love (ID: CRS-P006)"
  },

  {
    id: "CRS-P007",
    name: "Tulip Keychain",
    price: 499,
    description: "A charming crochet tulip keychain that adds a touch of floral elegance to your keys or bags. Lightweight, colorful, and perfect for everyday use.",
    images: {
      lavender: "images/c7-lavender.jpg",
      pink: "images/c7-pink.jpg",
      yellow: "images/c7-yellow.jpg",
      blue: "images/c7-blue.jpg",
      red: "images/c7-red.jpg"
    },
    defaultColor: "lavender",
    waText: "Meadow Minis (ID: CRS-P007)"
  },

  {
    id: "CRS-P008",
    name: "Bow Charm",
    price: 299,
    description: "Bow Charm is a delicate crochet accessory designed with simplicity and elegance. Ideal for gifting, decorating, or adding a cute handmade accent to your collection.",
    images: {
      white: "images/c8-white.jpg",
      cream: "images/c8-cream.jpg",
      skyblue: "images/c8-blue.jpg",
      pink: "images/c8-pink.jpg"
    },
    defaultColor: "white",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },

  {
    id: "CRS-P009",
    name: "Sunflower Bouquet",
    price: 1599,
    description: "Bright and everlasting, the Sunflower Bouquet captures the beauty of blooming sunflowers in crochet form. A cheerful décor piece that never fades.",
    images: {
      yellow: "images/c9-yellow.jpg",
    },
    defaultColor: "yellow",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },

  {
    id: "CRS-P010",
    name: "Rose Bouquet",
    price: 799,
    description: "A timeless crochet rose bouquet crafted to express love and elegance. Perfect for gifting on special occasions or adding romance to your décor.",
    images: {
      cream: "images/c10-cream.jpg",
    },
    defaultColor: "cream",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },

  {
    id: "CRS-P011",
    name: "Peony Bouquet",
    price: 1999,
    description: "Soft and luxurious, the Peony Bouquet is a handcrafted crochet floral arrangement that adds sophistication and charm to any space.",
    images: {
      pink: "images/c11-pink.jpg",
    },
    defaultColor: "pink",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },

  {
    id: "CRS-P012",
    name: "Lavender Bouquet",
    price: 1099,
    description: "Inspired by calming lavender fields, this crochet bouquet brings serenity and gentle beauty into your home. Ideal for peaceful and cozy interiors.",
    images: {
      lavender: "images/c12-lavender.jpg",
    },
    defaultColor: "lavender",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },

  {
    id: "CRS-P013",
    name: "Tulip Bouquet",
    price: 2499,
    description: "A beautifully handcrafted crochet tulip bouquet that symbolizes freshness and elegance. Perfect for gifting or brightening up any corner.",
    images: {
      lavender: "images/c13-lavender.jpg",
    },
    defaultColor: "lavender",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },

  {
    id: "CRS-P014",
    name: "Daisy Bouquet",
    price: 999,
    description: "Fresh and joyful, the Daisy Bouquet is a crochet floral arrangement that represents purity and happiness. A lovely handmade décor piece.",
    images: {
      white: "images/c19-white.jpg"
    },
    defaultColor: "white",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },

  {
    id: "CRS-P015",
    name: "Daisy Bookmark",
    price: 499,
    description: "A delicate crochet daisy bookmark designed for book lovers. Lightweight and elegant, it adds a touch of handmade charm to every page.",
    images: {
      white: "images/c20-white.jpg"
    },
    defaultColor: "white",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },

  {
    id: "CRS-P016",
    name: "Bear Keychain",
    price: 399,
    description: "An adorable crochet bear keychain crafted with love. Soft, cute, and durable — perfect for adding personality to keys, bags, or gifts. (Price for per piece)",
    images: {
      brown: "images/c14-brown.jpg",
    },
    defaultColor: "brown",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },

  {
    id: "CRS-P017",
    name: "Heart Keychain",
    price: 199,
    description: "A heartfelt crochet keychain symbolizing love and warmth. Available in multiple colors, it makes a thoughtful handmade gift or daily accessory.",
    images: {
      skyblue: "images/c15-sky.jpg",
      pink: "images/c15-pink.jpg",
      white: "images/c15-white.jpg",
      lavender: "images/c15-lavender.jpg",
      red: "images/c15-red.jpg",
      yellow: "images/c15-yellow.jpg"
    },
    defaultColor: "skyblue",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },

  {
    id: "CRS-P018",
    name: "Bouquet Blanket",
    price: 4999,
    description: "A unique crochet blanket inspired by floral bouquets. Soft, cozy, and artistic — designed to bring warmth and handcrafted beauty into your living space.",
    images: {
      white: "images/c16-white.jpg",
    },
    defaultColor: "white",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },

  {
    id: "CRS-P019",
    name: "Couple Keychain",
    price: 399,
    description: "A charming crochet couple keychain representing togetherness and love. Perfect as a gift for couples or as a meaningful keepsake.",
    images: {
      blue: "images/c17-blue.jpg",
    },
    defaultColor: "blue",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },


  {
    id: "CRS-P020",
    name: "Ghost Keychain",
    price: 299,
    description: "A playful and quirky crochet ghost keychain crafted with attention to detail. Fun, lightweight, and perfect for adding a cute twist to everyday accessories.",
    images: {
      black: "images/c18-black.jpg",
      white: "images/c18-white.jpg"
    },
    defaultColor: "black",
    waText: "Leaflet Haven (ID: CRS-P008)"
  },


];
