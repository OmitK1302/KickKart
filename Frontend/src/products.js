const products = [
  {
    "_id": 1,
    "name": "Nike Air Zoom Pegasus 39",
    "description": "A lightweight, responsive running shoe designed for speed and comfort. Perfect for athletes and fitness enthusiasts who train on pavement.",
    "price": "$ 129.99",
    "currency": "USD",
    "category": "Running",
    "brand": "Nike",
    "sizes": ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5"],
    "colors": ["Black/Volt", "Blue Lagoon/Photon Dust", "Photon Dust/Black/Volt"],
    "stock": 100,
    "rating": 4.8,
    "reviews": [
      {
        "user": "RunningMan123",
        "rating": 5,
        "comment": "These shoes are amazing! They're so light and comfortable, and they make me feel like I can run forever."
      },
      {
        "user": "FitnessJane",
        "rating": 4.5,
        "comment": "Great shoes for running, but the sizing seems to run a bit small."
      }
    ],
    "images": [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8bb6250a-af23-4b73-bf8c-ded532982e12/NIKE+AIR+ZOOM+PEGASUS+39+4E.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6e3c5bc-0fa7-4537-928e-f4d17d94c926/NIKE+AIR+ZOOM+PEGASUS+39+4E.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7053c29c-2ec3-415c-80fb-f37954f13a4d/NIKE+AIR+ZOOM+PEGASUS+39+4E.png"
    ]
  },
  {
    "_id": 2,
    "name": "Timberland Men's White Ledge Waterproof Hiking Boots",
    "description": "Heavy-duty hiking boots with waterproof nubuck leather and a grippy lug sole for superior traction on uneven terrain.",
    "price": "$ 169.99",
    "currency": "USD",
    "category": "Hiking",
    "brand": "Timberland",
    "sizes": ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13"],
    "stock": 80,
    "rating": 4.7,
    "reviews": [
      {
        "user": "HikerJohn",
        "rating": 5,
        "comment": "These boots are perfect for any hike! They're waterproof, comfortable, and provide great traction on all types of terrain."
      },
      {
        "user": "Outdoorsman",
        "rating": 4,
        "comment": "Very durable boots, but they can be a bit stiff at first."
      }
    ],
    "images": [
      "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650/e_sharpen:60/dpr_2.0/v1719394559/TB1A64PG033-HERO/Mens-White-Ledge-Waterproof-Mid-Hiker-Boot.png",
      "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650/e_sharpen:60/dpr_2.0/v1719394560/TB1A64PG033-ALT4/Mens-White-Ledge-Waterproof-Mid-Hiker-Boot.png",
      "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650/e_sharpen:60/dpr_2.0/v1719394560/TB1A64PG033-ALT3/Mens-White-Ledge-Waterproof-Mid-Hiker-Boot.png"
    ]
  },
  {
    "_id": 3,
    "name": "Adidas Originals Superstar Sneakers",
    "description": "A classic sneaker style with a sleek leather upper and comfortable rubber sole. Perfect for everyday wear or adding a touch of retro style to any outfit.",
    "price": "$ 89.99",
    "currency": "USD",
    "category": "Casual",
    "brand": "Adidas",
    "sizes": ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
    "stock": 150, 
    "rating": 4.4,
    "reviews": [
      {
        "user": "StyleIcon",
        "rating": 5,
        "comment": "These are the perfect everyday sneakers! They're stylish, comfortable, and go with everything."
      },
      {
        "user": "SneakerHead",
        "rating": 4,
        "comment": "Classic look, but the sizing runs a bit small."
      }
    ],
    "images": [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a358bcd5e3d453da815aad6009a249e_9366/Superstar_Shoes_White_EG4958_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3708ab90979a4ba59535aad6009a2fa8_9366/Superstar_Shoes_White_EG4958_03_standard.jpg"
    ]
  },
  {
    "_id": 4,
    "name": "Converse Chuck Taylor All Stars",
    "description": "An iconic classic sneaker with a canvas upper and rubber sole. A timeless style suitable for casual wear and self-expression.",
    "price": "$ 59.99",
    "currency": "USD",
    "category": "Casual",
    "brand": "Converse",
    "sizes": ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5"],
    "stock": 200,
    "rating": 4.6,
    "reviews": [
      {
        "user": "ClassicFan",
        "rating": 5,
        "comment": "A timeless classic! Comfortable and goes with everything."
      },
      {
        "user": "CasualWearer",
        "rating": 4,
        "comment": "Can be a bit stiff at first, but they break in nicely."
      }
    ],
    "images": [
      "https://www.converse.in/media/catalog/product/m/9/m9166c_01.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=900&width=900&auto=webp&format=pjpg",
      "https://www.converse.in/media/catalog/product/m/9/m9166c_06_1_1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=512&width=410&auto=webp&format=pjpg",
      "https://www.converse.in/media/catalog/product/m/9/m9166c_05_1_1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=512&width=410&auto=webp&format=pjpg"
    ]
  }
]

  export default products;
  