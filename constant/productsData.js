const productsData = [
  {
    id: "1",
    url: "images/products/1.jpg",
    resUrl: "../images/products/1res.jpg",
    price: "₹120.00/kg",
    value: "120.00",
    accValue: "61990",
    discount: "-10%",
    mrp: "₹133.00/kg",
    name: "Fresh Red Apples",
    points: [
      "Rich in vitamins and dietary fiber",
      "Ideal for snacks or salads"
    ]
  },
  {
    id: "2",
    url: "images/products/2.jpg",
    resUrl: "../images/products/2res.jpg",
    price: "₹40.00/pack",
    value: "40.00",
    accValue: "39499",
    discount: "-15%",
    mrp: "₹50.00",
    name: "Organic Spinach",
    points: [
      "High in iron and essential nutrients",
      "Great for salads or cooked dishes"
]
  },
  {
    id: "3",
    url: "images/products/3.jpg",
    price: "₹65.00/pack",
    name: "Whole grain pasta- 500gm",
    resUrl: "../images/products/3res.jpg",
    value: "65.00",
    accValue: "21900",
    discount: "-20%",
    mrp: "₹81.00",
    points: [
      "Made from whole wheat for added nutrition",
      "Versatile and easy to cook"
      ]
  },
  {
    id: "4",
    url: "images/products/4.jpg",
    price: "₹180.00",
    name: "Fresh Chicken Breasts- 1Kg",
    resUrl: "../images/products/4res.jpg",
    value: "180.00",
    accValue: "1299",
    discount: "-12%",
    mrp: "₹205.00",
    points: [
      "Lean protein source",
      "Suitable for various recipes"
      ]
  },
  {
    id: "5",
    url: "images/products/5.jpg",
    price: "₹50.00/pack",
    name: "Greek yogurt- 250gm",
    resUrl: "../images/products/5res.jpg",
    value: "50.00",
    accValue: "999",
    discount: "-8%",
    mrp: "₹54.00",
    points: [
      "High in protein and probiotics",
      "Great for breakfast or snacks"
       ]
  },
  {
    id: "6",
    url: "images/products/6.jpg",
    price: "₹90.00",
    name: "Organic Brown Rice- 1Kg",
    resUrl: "../images/products/6res.jpg",
    value: "90.00",
    accValue: "2097",
    discount: "-18%",
    mrp: "₹110.00/Kg",
    points: [
      "Whole grain with natural nutrients",
      "Ideal for a healthy diet"
    ]
  },
  {
    id: "7",
    url: "images/products/7.jpg",
    price: "₹30.00/kg",
    name: "Fresh Carrots",
    resUrl: "../images/products/7res.jpg",
    value: "30",
    accValue: "1619",
    discount: "-5%",
    mrp: "₹32.00/kg",
    points: [
      "Rich in vitamin A and antioxidants",
      "Versatile vegetable for cooking or snacking"
      ]
  },
  {
    id: "8",
    url: "images/products/8.jpg",
    price: "₹200.00",
    name: "Organic Honey",
    resUrl: "../images/products/8res.jpg",
    value: "200",
    accValue: "2884",
    discount: "-10%",
    mrp: "₹222.00",
    points: [
      "Pure and natural sweetener",
      "Great for tea, baking, or as a spread"
      ]
  },
  {
    id: "9",
    url: "images/products/9.jpg",
    price: "₹35.00",
    name: "Whole White Bread",
    resUrl: "../images/products/9res.jpg",
    value: "35",
    accValue: "1299",
    discount: "-7%",
    mrp: "₹38.00",
    points: [
      "Made from whole grains for fiber",
      "Perfect for sandwiches or toast"
      ]
  },
  {
    id: "10",
    url: "images/products/10.jpg",
    price: "₹429.00",
    name: "Yogabar Dark Chocolate & Cranberry Muesli 700g - Breakfast Cereal with 83% Nuts & Seeds, Dried Fruits, & Whole Grains - Vegan & Gluten Free Snack",
    resUrl: "../images/products/10res.jpg",
    value: "429",
    accValue: "429",
    discount: "-14%",
    mrp: "₹499.00",
    points: [
      "Whole grains: Quinoa, Oats and Brown Rice",
      "Made from 100% natural ingredients",
      "Rich in nuts and dried fruits: almonds, raisins, dried cranberries rich in seeds: pumpkin, chia and flax",
      "Antioxidant rich dark chocolate + cranberry",
      "Slow-roasted, slow ground in small batches for superior flavour"
    ]
  },
  {
    id: "11",
    url: "images/products/11.jpg",
    price: "₹60.00",
    name: "Integriti Men Sweatshirt",
    resUrl: "../images/products/11res.jpg",
    value: "60",
    accValue: "358",
    discount: "-10%",
    mrp: "₹67.00",
    points: [
      "Free-range and organic",
      "Great for breakfast or baking"
      ]
  },
  {
    id: "12",
    url: "images/products/12.jpg",
    price: "₹25.00/dozen",
    name: "Fresh Bananas",
    resUrl: "../images/products/12res.jpg",
    value: "25",
    accValue: "630",
    discount: "-3%",
    mrp: "₹26.00",
    points: [
      "Good source of potassium and vitamins",
      "Perfect for snacks or smoothies"
      ]
  },
  {
    id: "13",
    url: "images/products/13.jpg",
    price: "₹120.00",
    name: "Alomond Milk",
    resUrl: "../images/products/13res.jpg",
    value: "120",
    accValue: "3999",
    discount: "-12%",
    mrp: "₹136.00",
    points: [
      "Dairy-free alternative rich in nutrients",
      "Great for lactose-intolerant individuals"
      ]
  },
  {
    id: "14",
    price: "₹699.00",
    value: "699",
    accValue: "699",
    discount: "-53%",
    mrp: "₹1,499",
    url: "images/products/14.jpg",
    resUrl: "../images/products/14res.jpg",
    name: "Interiocrafts Cast Iron Degchi Style Dhoop and Tealight Candle Holder",
    points: [
      "✔ It can be used as a dhoop dani with the lid on and candle holder with votive stand. A perfect item for your pooja mandir.",
      "✔ The chic functionality of this beautiful votive candle and dhoop holder is inimitable.",
    ]
  },
  {
    id: "15",
    price: "₹250.00",
    url: "images/products/15.jpg",
    name: "Ground Coffee",
    resUrl: "../images/products/15res.jpg",
    value: "250",
    accValue: "499",
    discount: "-10%",
    mrp: "₹278.00",
    points: [
      "Rich and aromatic coffee blend",
      "Perfect for brewing at home"
      ]
  },
  {
    id: "16",
    price: "₹150.00",
    url: "images/products/16.jpg",
    name: "Green Tea Bags",
    resUrl: "../images/products/16res.jpg",
    value: "150",
    accValue: "999",
    discount: "-15%",
    mrp: "₹176.00",
    points: [
      "Refreshing and antioxidant-rich",
      "Ideal for a soothing tea experience"
      ]
  },
  {
    id: "17",
    price: "₹300.00",
    url: "images/products/17.jpg",
    name: "Organic Almonds",
    resUrl: "../images/products/17res.jpg",
    value: "300",
    accValue: "399",
    discount: "-10%",
    mrp: "₹333.00",
    points: [
      "High in protein and healthy fats",
      "Great for snacking or adding to dishes"
      ]
  },
  {
    id: "18",
    price: "₹180.00",
    url: "images/products/18.jpg",
    name: "Honey Nut Granola",
    resUrl: "../images/products/18res.jpg",
    value: "180",
    accValue: "699",
    discount: "-42%",
    mrp: "₹333.00",
    points: [
      "Crunchy and nutritious breakfast option",
      "Contains oats, nuts, and honey"
      ]
  },
  {
    id: "19",
    price: "₹350.00",
    url: "images/products/19.jpg",
    name: "Extra Virgin Olive Oil",
    resUrl: "../images/products/19res.jpg",
    value: "350",
    accValue: "1399",
    discount: "-8%",
    mrp: "₹380.00",
    points:  [
      "Premium quality cold-pressed oil",
      "Ideal for cooking and salads"
      ]
  },
  {
    id: "20",
    price: "₹329.00",
    url: "images/products/20.jpg",
    name: "Kaameri Bazaar Bronze Color Metal Bird cage Tea Light Holder with Butter Pot tealight Glass for Home Décor",
    resUrl: "../images/products/20res.jpg",
    value: "329",
    accValue: "329",
    discount: "-63%",
    mrp: "₹899.00",
    points: [
      "This Diwali Light Your home with this beautiful Bird Cage Tealight Holder",
      "This stunning Kaameri Bazaar Tealight Holder makes for a perfect addition to your home.",
      "BENEFITS: They can accent your home or office for the right decor. Perfect for adding a decorative touch to any room's decor",
      "Made from high quality material, Durable and Long lasting",
      "Ideal For: Decoration, Gifting, Diwali Decoration, Christmas Party Decoration, Home Decor, Candle Light Dinner"
    ]
  },
  {
    id: "21",
    price: "₹100.00",
    url: "images/products/21.jpg",
    name: "Fresh Data",
    resUrl: "../images/products/21res.jpg",
    value: "100",
    accValue: "549",
    discount: "-0%",
    mrp: "₹100.00",
    points: [
      "Rich in healthy fats and vitamins",
      "Perfect for salads or spreads"
      ]
  },
  {
    id: "22",
    price: "₹120.00",
    url: "images/products/22.jpg",
    name: "Chia Seeds",
    resUrl: "../images/products/22res.jpg",
    value: "120",
    accValue: "1499",
    discount: "-15%",
    mrp: "₹141.00",
    points: [
      "Rich in omega-3 fatty acids and fiber",
      "Can be added to smoothies, yogurt, or baked goods"
      ]
  }
]

module.exports = productsData;