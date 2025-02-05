const products = [
  {
    "name": "Nike Air Zoom Pegasus 39",
    "description": "A lightweight, responsive running shoe designed for speed and comfort. Perfect for athletes and fitness enthusiasts who train on pavement.",
    "price": "$ 129.99",
    "category": "Running",
    "brand": "Nike",
    "sizes": ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5"],
    "stock": 100,
    "rating": 4.8,
    "reviews": [
      {
        "name": "RunningMan123",
        "rating": 5,
        "comment": "These shoes are amazing! They're so light and comfortable, and they make me feel like I can run forever."
      },
      {
        "name": "FitnessJane",
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
    "name": "Timberland Men's White Ledge Waterproof Hiking Boots",
    "description": "Heavy-duty hiking boots with waterproof nubuck leather and a grippy lug sole for superior traction on uneven terrain.",
    "price": "$ 169.99",
    "category": "Hiking",
    "brand": "Timberland",
    "sizes": ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13"],
    "stock": 80,
    "rating": 4.7,
    "reviews": [
      {
        "name": "HikerJohn",
        "rating": 5,
        "comment": "These boots are perfect for any hike! They're waterproof, comfortable, and provide great traction on all types of terrain."
      },
      {
        "name": "Outdoorsman",
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
    "name": "Adidas Originals Superstar Sneakers",
    "description": "A classic sneaker style with a sleek leather upper and comfortable rubber sole. Perfect for everyday wear or adding a touch of retro style to any outfit.",
    "price": "$ 89.99",
    "category": "Casual",
    "brand": "Adidas",
    "sizes": ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
    "stock": 150, 
    "rating": 4.4,
    "reviews": [
      {
        "name": "StyleIcon",
        "rating": 5,
        "comment": "These are the perfect everyday sneakers! They're stylish, comfortable, and go with everything."
      },
      {
        "name": "SneakerHead",
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
    "name": "Converse Chuck Taylor All Stars",
    "description": "An iconic classic sneaker with a canvas upper and rubber sole. A timeless style suitable for casual wear and self-expression.",
    "price": "$ 59.99",
    "category": "Casual",
    "brand": "Converse",
    "sizes": ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5"],
    "stock": 200,
    "rating": 4.6,
    "reviews": [
      {
        "name": "ClassicFan",
        "rating": 5,
        "comment": "A timeless classic! Comfortable and goes with everything."
      },
      {
        "name": "CasualWearer",
        "rating": 4,
        "comment": "Can be a bit stiff at first, but they break in nicely."
      }
    ],
    "images": [
      "https://www.converse.in/media/catalog/product/m/9/m9166c_01.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=900&width=900&auto=webp&format=pjpg",
      "https://www.converse.in/media/catalog/product/m/9/m9166c_06_1_1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=512&width=410&auto=webp&format=pjpg",
      "https://www.converse.in/media/catalog/product/m/9/m9166c_05_1_1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=512&width=410&auto=webp&format=pjpg"
    ]
  },
  {
    "name": "Brooks Ghost 15",
    "description": "A smooth and balanced running shoe designed for everyday runs and long distances. Offers a comfortable fit and reliable performance.",
    "price": "$ 139.99",
    "category": "Running",
    "brand": "Brooks",
    "sizes": ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
    "stock": 75,
    "rating": 4.6,
    "reviews": [
      {
        "name": "MarathonerMike",
        "rating": 5,
        "comment": "These shoes are perfect for long runs! They're comfortable and provide great support."
      },
      {
        "name": "DailyRunner",
        "rating": 4,
        "comment": "Great everyday running shoe, but the durability could be better."
      }
    ],
    "images": [
      "https://m.media-amazon.com/images/I/81Y2cdkeC0L._SY500_.jpg",
      "https://m.media-amazon.com/images/I/71MpOW6jSFL._SY500_.jpg",
      "https://m.media-amazon.com/images/I/81bWtHzrORL._SY500_.jpg"
    ]
  },
  {
    "name": "New Balance 550",
    "description": "A retro-inspired basketball sneaker with a clean and classic design. Offers a comfortable fit and versatile style.",
    "price": "$ 110.00",
    "category": "Casual",
    "brand": "New Balance",
    "sizes": ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    "stock": 120,
    "rating": 4.3,
    "reviews": [
      {
        "name": "SneakerLover",
        "rating": 5,
        "comment": "Love the look of these sneakers! They're comfortable and stylish."
      },
      {
        "name": "FashionForward",
        "rating": 3.5,
        "comment": "Great style, but they can be a bit narrow."
      }
    ],
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfyAUktmaSXhiMKx0vA5bQuk3nkhsF7CjQRyb1fXHj9-cg8NTgw8YqXHkWSbLH5SpdNwm7nysx9r-eRzou8Jhn8NPuP9LKKWAtSkUnU8uKHaNLKvxpLe7F",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQRyVllP5cJ-XjC3upGjwH1OtgG8V4VgRwkjCxY52L3Ff08iKvjkaxW--adVRd__n50UIxlufFDD8aJoAGQT9OnY99-vliijewY8GyGyHPW3FNSpAHQ-NC79H8",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQGISCVjygcE8sCABMCaKlZgOf25oz7MYNv69JmCnGKdlQwLs8IeilLMV64xysoH1GI_wY2ZxoJqNF3owIFhyf__p83L9z67vhz-ltsGrANavu_LIneKjn_"

    ]
  },
  {
    "name": "Hoka M Clifton 9",
    "description": "A lightweight and cushioned running shoe designed for maximum comfort and support. Ideal for everyday runs and recovery runs.",
    "price": "$ 140.00",
    "category": "Running",
    "brand": "Hoka",
    "sizes": ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
    "stock": 90,
    "rating": 4.7,
    "reviews": [
      {
        "name": "ComfortRunner",
        "rating": 5,
        "comment": "These are the most comfortable running shoes I've ever worn!"
      },
      {
        "name": "RecoveryRun",
        "rating": 4,
        "comment": "Perfect for recovery runs, but they might not be the best for speedwork."
      }
    ],
    "images": [
      "https://img.tatacliq.com/images/i9/1316Wx1468H/MP000000016418162_1316Wx1468H_202302061914411.jpeg",
      "https://img.tatacliq.com/images/i9/1316Wx1468H/MP000000016418162_1316Wx1468H_202302061914443.jpeg",
      "https://img.tatacliq.com/images/i9/1316Wx1468H/MP000000016418162_1316Wx1468H_202302061914404.jpeg"
    ]
  },
  {
    "name": "Dr. Martens 1460 Boots",
    "description": "A classic and iconic boot with a durable leather upper and air-cushioned sole. A timeless style with a rebellious edge.",
    "price": "$ 170.00",
    "category": "Casual",
    "brand": "Dr. Martens",
    "sizes": ["6", "7", "8", "9", "10", "11", "12"],
    "stock": 100,
    "rating": 4.5,
    "reviews": [
      {
        "name": "BootLover",
        "rating": 5,
        "comment": "These boots are a classic for a reason! They're stylish and durable."
      },
      {
        "name": "RockAndRoll",
        "rating": 4,
        "comment": "Love the look, but they can take some time to break in."
      }
    ],
    "images": [
      "https://m.media-amazon.com/images/I/61Eq7izT80L.jpg",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSTitNXj-tSAd1i0Ai_ntESN0KXcmaZNMxEaQPUiG6yZJXv8bkMtEBx_1Swa7L68Yv4iOZLHuWTXYUA5bq-Zkq-k3cp21Ga4v2vcm3NCD45aPn2-RGaed5p",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQBMDY-KxFzTkwsuQXzTdNzKI1w_vhNqgiQTXRaI9-jDKvFThgLAythZjC7t-yXFBhP8F5IbQZ_iZSRNoYcHwmWhPnSq-pUolTMZRn7xdYgtZ-aYlt2FrUy2Q"
    ]
  },
  {
    "name": "Birkenstock Arizona Sandals",
    "description": "Comfortable and stylish sandals with a contoured cork footbed and adjustable straps. Perfect for warm weather and casual wear.",
    "price": "$ 100.00",
    "category": "Casual",
    "brand": "Birkenstock",
    "sizes": ["5", "6", "7", "8", "9", "10", "11", "12"],
    "stock": 150,
    "rating": 4.2,
    "reviews": [
      {
        "name": "SummerVibes",
        "rating": 5,
        "comment": "These sandals are so comfortable! Perfect for summer."
      },
      {
        "name": "CasualStyle",
        "rating": 3,
        "comment": "Great for casual wear, but the sizing can be tricky."
      }
    ],
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRB02O3KxtYQXcLImD9TZoKuw-Ufud1roI_lRaMVJn2H7mShz9eOjq2oLHw0rXG_VgPSQifkzxduoobQVNVfOPut9mAQoXmcwHQfBNopQweQ5rXGyBuRAjwTw",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7lpywTFdr_9rvs1rSv3aa4e0zeGtcB7fsEgvP6AsQQWBiYR9a0DEuEhJ2LrrHYcEbjHd42I8VYa8j3USMKwcjnktFmo5tQ1zgGDPTDQPkceNAMw9wVxOf",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRjUBtVDhqyRxDRO9SqJLjYvPG4uyh9GwvWEx3COx7oghdEQYZt_hQBBKOBgOGoLOggfy1HCJPoK_5qBUMWVK8fQuPDGeSxCLKkbtl3s9lqMhrSGNFGxHP-R2M",
    ]
  }
]

  export default products;
  