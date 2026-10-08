export interface MenuItem {
  id: string;
  name: string;
  category: 'Burgers' | 'Chicken' | 'Pasta' | 'Snacks' | 'Beverages' | 'Desserts';
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isSignature?: boolean;
  spicyLevel?: 1 | 2 | 3;
  ingredients?: string[];
  prepTime?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  avatarText: string;
  rating: number;
  date: string;
  review: string;
  favoriteDish?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export const CAFE_INFO = {
  name: "THE INDIAN TREATS CAFE",
  shortName: "The Indian Treats",
  tagline: "Where Every Bite Feels Like Home",
  description: "Delicious food, refreshing drinks and a cozy ambience — made for good food and great moments.",
  city: "Madurai, Tamil Nadu",
  address: "Shop No 1 & 2, Theni Road, S.S. Colony 4th Street, Opp. Devaki Speciality Hospital & Scan, Madurai, Tamil Nadu 625016",
  phone: "078458 56031",
  phoneClean: "+917845856031",
  whatsappNumber: "917845856031",
  email: "hello@theindiantreatscafe.com",
  timing: "Open daily · 11:00 AM – 12:00 Midnight",
  closingTime: "Closes around 12:00 AM",
  priceRange: "₹200 – ₹400",
  rating: 5.0,
  reviewCount: "49+",
  googleMapsUrl: "https://maps.google.com/?q=The+Indian+Treats+Cafe+SS+Colony+Madurai",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.988299105436!2d78.1009848!3d9.9348981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5980a37e1b5%3A0x6b6c2cf460a8ea74!2sS.S.Colony%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  socials: {
    instagram: "https://instagram.com/theindiantreatscafe",
    facebook: "https://facebook.com/theindiantreatscafe",
    google: "https://maps.google.com/?q=The+Indian+Treats+Cafe+SS+Colony+Madurai"
  }
};

export const CAFE_STATS = [
  { value: 5.0, suffix: " ★", label: "Google Rating", sublabel: "Top rated cafe in Madurai" },
  { value: 49, suffix: "+", label: "Verified Reviews", sublabel: "Loved by our regulars" },
  { value: 250, prefix: "₹", suffix: " avg", label: "Average Price", sublabel: "₹200 – ₹400 per person" },
  { value: 100, suffix: "%", label: "Good Vibes", sublabel: "Warm cozy atmosphere" }
];

export const WHY_CHOOSE_US = [
  {
    icon: "UtensilsCrossed",
    title: "Fresh & Delicious",
    description: "Freshly prepared food crafted on order with premium spices and quality ingredients.",
    highlight: "Made Fresh to Order"
  },
  {
    icon: "Coffee",
    title: "Cozy Ambience",
    description: "A calm and comfortable sanctuary with warm ambient lighting, perfect to unwind and relax.",
    highlight: "Warm Indian Aesthetic"
  },
  {
    icon: "HeartHandshake",
    title: "Made With Love",
    description: "Exceptional culinary passion and caring service where every detail ensures you feel right at home.",
    highlight: "Hospitality First"
  },
  {
    icon: "IndianRupee",
    title: "Reasonable Prices",
    description: "Outstanding gourmet flavors and generous portions at pocket-friendly prices everyone can enjoy.",
    highlight: "Pocket-Friendly Luxury"
  }
];

export const OCCASIONS = [
  { name: "Friends Hangout", icon: "Users" },
  { name: "Family Dinners", icon: "Home" },
  { name: "Casual Dates", icon: "Heart" },
  { name: "Evening Hangouts", icon: "Sunset" },
  { name: "Quick Meals", icon: "Clock" },
  { name: "Celebrations & Parties", icon: "Sparkles" }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "dish-1",
    name: "The Indian Treats Signature Platter",
    category: "Chicken",
    price: 349,
    description: "Our crown jewel: Golden spiced crispy chicken served with roasted garlic potato wedges and a trio of artisanal dips.",
    image: "/images/featured_special_dish.jpg",
    isVeg: false,
    isBestseller: true,
    isSignature: true,
    spicyLevel: 2,
    ingredients: ["Tender Marinated Chicken", "Secret Spice Crust", "Hand-cut Potato Wedges", "Mint Mayo", "Peri Peri Dip", "Garlic Aioli"],
    prepTime: "15-18 mins"
  },
  {
    id: "dish-2",
    name: "Classic Crispy Chicken Burger",
    category: "Burgers",
    price: 229,
    description: "Juicy chicken burger packed with flavour, topped with melting golden cheese, crisp lettuce, spicy mayo & served with fries.",
    image: "/images/dish_chicken_burger.jpg",
    isVeg: false,
    isBestseller: true,
    spicyLevel: 2,
    ingredients: ["Succulent Chicken Patty", "Melted Cheddar Cheese", "Toasted Brioche Bun", "Crisp Iceberg Lettuce", "Secret Burger Sauce", "Golden Fries"],
    prepTime: "12-15 mins"
  },
  {
    id: "dish-3",
    name: "Tandoori Spiced Paneer Burger",
    category: "Burgers",
    price: 189,
    description: "Grilled marinated paneer steak with tangy mint coriander chutney, sliced red onions and melting cheese in an artisanal bun.",
    image: "/images/dish_paneer_burger.jpg",
    isVeg: true,
    isBestseller: true,
    spicyLevel: 2,
    ingredients: ["Char-grilled Cottage Cheese", "Mint Coriander Chutney", "Caramelized Onion Rings", "Artisanal Sesame Bun", "Crispy Onions"],
    prepTime: "12 mins"
  },
  {
    id: "dish-4",
    name: "Creamy Alfredo Mushroom Pasta",
    category: "Pasta",
    price: 239,
    description: "Rich and velvety parmesan cream sauce tossed with tender penne, sautéed garlic mushrooms, fresh herbs & toasted garlic bread.",
    image: "/images/dish_creamy_pasta.jpg",
    isVeg: true,
    isBestseller: true,
    spicyLevel: 1,
    ingredients: ["Italian Penne", "Fresh Cream & Shaved Parmesan", "Garlic Butter Sautéed Mushrooms", "Oregano & Basil", "Toasted Garlic Baguette"],
    prepTime: "15 mins"
  },
  {
    id: "dish-5",
    name: "Loaded Cheesy Peri-Peri Chips",
    category: "Snacks",
    price: 179,
    description: "Crispy hand-cut potato chips & fries smothered in melted cheddar cheese sauce, fiery peri-peri seasoning and jalapeños.",
    image: "/images/dish_loaded_chips.jpg",
    isVeg: true,
    isBestseller: true,
    spicyLevel: 2,
    ingredients: ["Golden Potato Chips & Wedges", "Warm Melted Cheese Blend", "Peri-Peri Dust", "Pickled Jalapeños", "Spicy Chipotle Swirl"],
    prepTime: "10 mins"
  },
  {
    id: "dish-6",
    name: "Crispy Chicken & Paneer Bites",
    category: "Snacks",
    price: 199,
    description: "Golden crumbed bite-sized spiced chicken tenders and paneer fingers served with house-special mint dip and sweet chili dip.",
    image: "/images/dish_crispy_snacks.jpg",
    isVeg: false,
    isBestseller: false,
    spicyLevel: 2,
    ingredients: ["Seasoned Chicken Breast", "Paneer Cubes", "Crisp Panko Crust", "Mint Yogurt Dip", "Sweet Chili Glaze"],
    prepTime: "12 mins"
  },
  {
    id: "dish-7",
    name: "Belgian Chocolate Hazelnut Shake",
    category: "Beverages",
    price: 179,
    description: "Decadent thick Belgian chocolate milkshake topped with a mountain of whipped cream, crushed hazelnuts & chocolate wafer roll.",
    image: "/images/dish_thick_milkshake.jpg",
    isVeg: true,
    isBestseller: true,
    ingredients: ["Belgian Dark Cocoa", "Hazelnut Praline", "Rich Vanilla Ice Cream", "Whipped Dairy Cream", "Crispy Wafer Roll"],
    prepTime: "8 mins"
  },
  {
    id: "dish-8",
    name: "Artisanal Cappuccino & Swan Latte",
    category: "Beverages",
    price: 129,
    description: "Freshly roasted single-origin Arabica espresso steamed with velvety microfoam milk and finished with barista latte art.",
    image: "/images/gallery_coffee_art.jpg",
    isVeg: true,
    ingredients: ["Arabica Espresso Shot", "Fresh Steamed Whole Milk", "Microfoam Froth", "Cinnamon Dust (Optional)"],
    prepTime: "6 mins"
  },
  {
    id: "dish-9",
    name: "Sizzling Hot Fudge Walnut Brownie",
    category: "Desserts",
    price: 199,
    description: "Gooey chocolate walnut brownie served on a smoking hot iron sizzler platter with a big scoop of vanilla ice cream & hot fudge sauce.",
    image: "/images/dish_sizzling_brownie.jpg",
    isVeg: true,
    isBestseller: true,
    ingredients: ["Warm Fudgy Dark Chocolate Brownie", "Roasted Walnuts", "Bourbon Vanilla Bean Gelato", "Sizzling Hot Chocolate Ganache"],
    prepTime: "10 mins"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Cafe Interior & Ambience",
    category: "Ambience",
    image: "/images/cafe_interior_hero.jpg",
    caption: "Our cozy dining hall with warm amber lighting, wood finishings and intricate Indian mandala art."
  },
  {
    id: "gal-2",
    title: "The Signature Spiced Platter",
    category: "Food",
    image: "/images/featured_special_dish.jpg",
    caption: "Crispy spiced chicken paired with herbed potato wedges and dips."
  },
  {
    id: "gal-3",
    title: "Memories With Friends",
    category: "People",
    image: "/images/gallery_cafe_friends.jpg",
    caption: "Laughter, conversations and good food with your favourite people."
  },
  {
    id: "gal-4",
    title: "Gourmet Chicken Burger",
    category: "Food",
    image: "/images/dish_chicken_burger.jpg",
    caption: "Juicy handcrafted chicken burger layered with melted cheddar and fresh greens."
  },
  {
    id: "gal-5",
    title: "Barista Crafted Coffee",
    category: "Beverages",
    image: "/images/gallery_coffee_art.jpg",
    caption: "Freshly brewed espresso with velvety microfoam latte art."
  },
  {
    id: "gal-6",
    title: "Loaded Cheesy Chips",
    category: "Food",
    image: "/images/dish_loaded_chips.jpg",
    caption: "Crispy spiced chips drenched in creamy melted cheese and jalapeños."
  },
  {
    id: "gal-7",
    title: "Cozy Corner Booth",
    category: "Ambience",
    image: "/images/cafe_about_ambience.jpg",
    caption: "Intimate wood-paneled seating nook made for relaxing moments."
  },
  {
    id: "gal-8",
    title: "Sizzling Brownie Sundae",
    category: "Desserts",
    image: "/images/dish_sizzling_brownie.jpg",
    caption: "Hot fudge walnut brownie bubbling on a cast-iron sizzler plate."
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Inba",
    avatarText: "IN",
    rating: 5,
    date: "1 week ago",
    review: "Really enjoyed my experience at Indian Treats Cafe! The food was delicious, the ambience was pleasant, and the service was good.",
    favoriteDish: "Chicken Burger & Cold Coffee"
  },
  {
    id: "rev-2",
    name: "Rishi V.",
    avatarText: "RV",
    rating: 5,
    date: "2 weeks ago",
    review: "The Chicken Burger was juicy and full of flavour, and the Signature Dish was absolutely delicious. Cozy interior with great lighting!",
    favoriteDish: "The Indian Treats Special"
  },
  {
    id: "rev-3",
    name: "Deepthi M.",
    avatarText: "DM",
    rating: 5,
    date: "3 weeks ago",
    review: "Great ambience, tasty food and excellent service. Madurai really needed a cafe with this kind of cozy warm aesthetic and reasonable prices.",
    favoriteDish: "Creamy Alfredo Pasta"
  },
  {
    id: "rev-4",
    name: "Karthik S.",
    avatarText: "KS",
    rating: 5,
    date: "a month ago",
    review: "Best hangout spot in SS Colony! The loaded cheese chips and the thick milkshakes are incredible. Perfect place to sit for hours with friends.",
    favoriteDish: "Loaded Cheesy Chips"
  },
  {
    id: "rev-5",
    name: "Ananya R.",
    avatarText: "AR",
    rating: 5,
    date: "a month ago",
    review: "Such warm ambient lighting and hospitable staff. The sizzling brownie with ice cream was extraordinary. Definitely coming back for dates and hangouts.",
    favoriteDish: "Sizzling Walnut Brownie"
  }
];
