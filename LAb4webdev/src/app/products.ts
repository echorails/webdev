export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  link: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "iPhone 16 Pro 256GB Black Titanium",
    description: "Флагман 2025–2026 с титановым корпусом, камерой 48+48+12 МП и мощным A18 Pro.",
    price: 629990,
    rating: 4.9,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/hd5/h13/iphone-16-pro-black.jpg", // реальная картинка ниже замени если хочешь
    link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-black-titanium-123456789"  // замени на актуальную ссылку
  },
  {
    id: 2,
    name: "MacBook Air 13 M4 16/256GB",
    description: "Сверхлёгкий ноутбук с чипом M4, до 18 часов работы, идеален для учёбы и работы.",
    price: 589990,
    rating: 4.8,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/h01/hf0/macbook-air-m4-starlight.jpg",
    link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mc6t4ru-a-138153200"
  },
  {
    id: 3,
    name: "AirPods Pro 2nd gen MagSafe",
    description: "Активное шумоподавление, до 30 часов с кейсом, Spatial Audio.",
    price: 124990,
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/h4a/hd7/airpods-pro-2-white.jpg",
    link: "https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582"
  },
  {
    id: 4,
    name: "Samsung Galaxy S25 256GB",
    description: "Новый флагман Samsung 2026 с мощной камерой и AMOLED экраном.",
    price: 549990,
    rating: 4.6,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/hd2/h12/samsung-s25-black.jpg",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s25-256gb-black"  // подставь реальную
  },
  {
    id: 5,
    name: "Xiaomi Robot Vacuum X20+",
    description: "Робот-пылесос с мойкой, станцией самоочистки, лидаром.",
    price: 199990,
    rating: 4.5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/h12/h34/xiaomi-robot-x20.jpg",
    link: "https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x20-plus-white"
  },
  {
    id: 6,
    name: "Apple AirPods 4",
    description: "Новые AirPods 2025 с улучшенным звуком и ANC.",
    price: 58990,
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/h01/h02/airpods-4-white.jpg",
    link: "https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi"
  },
  {
    id: 7,
    name: "Наушники HYDRA Minor",
    description: "Бюджетные TWS с хорошим басом и долгим временем работы.",
    price: 9990,
    rating: 4.6,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/hf0/h12/hydra-minor-beige.jpg",
    link: "https://kaspi.kz/shop/p/naushniki-hydra-minor-bezhevyi"
  },
  {
    id: 8,
    name: "iPhone 16 128GB Ultramarine",
    description: "Базовая модель 16-й серии в ярком цвете.",
    price: 449990,
    rating: 4.8,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/hd5/h13/iphone-16-ultramarine.jpg",
    link: "https://kaspi.kz/shop/p/apple-iphone-16-128gb-ultramarine"
  },
  {
    id: 9,
    name: "Samsung Galaxy Buds3 Pro",
    description: "Премиум наушники Samsung с ANC и адаптивным звуком.",
    price: 89990,
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/h01/hf0/galaxy-buds3-pro-silver.jpg",
    link: "https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds3-pro-silver"
  },
  {
    id: 10,
    name: "Xiaomi Redmi Note 14 Pro 5G",
    description: "Бюджетный хит 2026 с 200 МП камерой и мощной батареей.",
    price: 149990,
    rating: 4.6,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/h12/h34/redmi-note-14-pro-black.jpg",
    link: "https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-5g-8-256gb-black"
  }
];