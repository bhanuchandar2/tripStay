const sampleListings = [

  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway with beautiful ocean views.",
    image: {
      filename: "beach1",
      url: "/images/beach1.avif"
    },
    price: 4500,
    category: "Rooms",
    location: "Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 15.4909]
    }
  },

  {
    title: "Modern Loft in Hyderabad",
    description: "Stay in a stylish modern apartment close to restaurants, shopping areas and major attractions.",
    image: {
      filename: "beach2",
      url:"/images/beach2.avif"
    },
    price: 3000,
    category: "Rooms",
    location: "Hyderabad",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.4867, 17.3850]
    }
  },

  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain stay surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    category: "mountains",
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396]
    }
  },

  {
    title: "Historic Villa",
    description: "Experience the charm of a beautiful traditional villa surrounded by local culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 4200,
    category: "Rooms",
    location: "Jaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124]
    }
  },

  {
    title: "Secluded Treehouse Getaway",
    description: "Stay among the trees in this unique nature retreat surrounded by greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    category: "trending",
    location: "Wayanad",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.1320, 11.6854]
    }
  },

  {
    title: "Beachfront Paradise",
    description: "Enjoy a relaxing beach vacation in this beautiful stay near the Arabian Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 5000,
    category: "trending",
    location: "Mumbai",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.0760]
    }
  },

  {
    title: "Rustic Cabin by the Lake",
    description: "Spend peaceful days surrounded by nature in this comfortable lakeside cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    category: "mountains",
    location: "Ooty",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.6932, 11.4064]
    }
  },

  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with beautiful city views from this stylish penthouse.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 5500,
    category: "trending",
    location: "Bangalore",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    }
  },

  {
    title: "Mountain Chalet",
    description: "Enjoy breathtaking mountain scenery from this cozy stay surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    category: "mountains",
    location: "Shimla",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1734, 31.1048]
    }
  },

  {
    title: "Safari Lodge",
    description: "Experience nature and wildlife from this peaceful lodge surrounded by greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 3800,
    category: "trending",
    location: "Mysore",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.6394, 12.2958]
    }
  },

  {
    title: "Historic Canal House",
    description: "Stay in a beautiful traditional home close to historic attractions and local markets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    category: "trending",
    location: "Kolkata",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [88.3639, 22.5726]
    }
  },

  {
    title: "Private Island Retreat",
    description: "Enjoy a peaceful and luxurious escape surrounded by beautiful water and nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 7000,
    category: "trending",
    location: "Andaman",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [92.7265, 11.7401]
    }
  },

  {
    title: "Charming Cottage",
    description: "Escape to a peaceful cottage surrounded by beautiful landscapes and greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    category: "Rooms",
    location: "Pune",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 18.5204]
    }
  },

  {
    title: "Historic Brownstone",
    description: "Experience traditional architecture while staying close to the city's famous attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 3600,
    category: "Rooms",
    location: "Delhi",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1025, 28.7041]
    }
  },

  {
    title: "Beachfront Bungalow",
    description: "Relax near the beach in this comfortable bungalow with beautiful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 4200,
    category: "trending",
    location: "Chennai",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [80.2707, 13.0827]
    }
  },

  {
    title: "Mountain View Cabin",
    description: "Enjoy breathtaking mountain views from this cozy cabin surrounded by greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 3800,
    category: "mountains",
    location: "Nainital",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.4542, 29.3919]
    }
  },

  {
    title: "Modern Apartment",
    description: "Stay in a comfortable modern apartment close to shopping, restaurants and city attractions.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    category: "Rooms",
    location: "Ahmedabad",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.5714, 23.0225]
    }
  },

  {
    title: "Tropical Villa",
    description: "Relax in a beautiful villa surrounded by greenery and peaceful natural surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 4500,
    category: "trending",
    location: "Kochi",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.2673, 9.9312]
    }
  },

  {
    title: "Historic Palace Stay",
    description: "Experience traditional Indian architecture and royal surroundings during your stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 5000,
    category: "trending",
    location: "Udaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.7125, 24.5854]
    }
  },

  {
    title: "Desert Oasis",
    description: "Experience the beauty of the desert while staying in a comfortable and peaceful retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    category: "Rooms",
    location: "Jaisalmer",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [70.9167, 26.9157]
    }
  },

  {
    title: "Rustic Log Cabin",
    description: "Unplug and unwind in this peaceful cabin surrounded by natural beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    category: "mountains",
    location: "Munnar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.0595, 10.0889]
    }
  },

  {
    title: "Beachfront Villa",
    description: "Enjoy a peaceful beach vacation in a beautiful villa close to the sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 4800,
    category: "trending",
    location: "Visakhapatnam",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [83.2185, 17.6868]
    }
  },

  {
    title: "Eco-Friendly Treehouse",
    description: "Stay close to nature in this peaceful treehouse surrounded by forests and greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2700,
    category: "mountains",
    location: "Coorg",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.8069, 12.3375]
    }
  },

  {
    title: "Historic Cottage",
    description: "Stay in a charming cottage while exploring local markets, food and historic attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    category: "Rooms",
    location: "Pondicherry",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.8083, 11.9416]
    }
  },

  {
    title: "Modern City Apartment",
    description: "Explore the city from this modern apartment with comfortable rooms and convenient facilities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 3600,
    category: "Rooms",
    location: "Kolkata",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [88.3639, 22.5726]
    }
  },

  {
    title: "Lakefront Cabin",
    description: "Spend your days beside a peaceful lake in this comfortable cabin surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    category: "mountains",
    location: "Bhopal",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.4126, 23.2599]
    }
  },

  {
    title: "Luxury Lake Villa",
    description: "Enjoy a relaxing stay with beautiful lake views and comfortable modern facilities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 5200,
    category: "trending",
    location: "Srinagar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.7973, 34.0837]
    }
  },

  {
    title: "Mountain Stay",
    description: "Stay surrounded by beautiful hills and enjoy a peaceful getaway away from the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    category: "mountains",
    location: "Darjeeling",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [88.2627, 27.0410]
    }
  },

  {
    title: "Secluded Beach House",
    description: "Relax in a peaceful beach house with easy access to the sea and beautiful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 4300,
    category: "trending",
    location: "Alibaug",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.8722, 18.6414]
    }
  }

];

module.exports = { data: sampleListings };