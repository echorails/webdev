import { Category } from './category'; 

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  link: string;
  likes: number; 
  categoryId: number; 
}

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

export const PRODUCTS: Product[] = [
  // Category 1
  {
    id: 1, name: "Apple iPhone 17 Pro 256Gb", description: "Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля.",
    price: 849000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large",
    link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000", likes: 0, categoryId: 1
  },
  {
    id: 11, name: "Samsung Galaxy S23 256Gb", description: "Флагман с отличной камерой.",
    price: 495000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000", likes: 0, categoryId: 1
  },
  {
    id: 12, name: "Xiaomi Redmi Note 12 Pro +256Gb", description: "Бюджетный смартфон с хорошей батареей.",
    price: 140000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/hba/h2d/79840518275102.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-nfc-8-gb-256-gb-chernyi-109772767/?c=750000000", likes: 0, categoryId: 1
  },
  {
    id: 13, name: "Google Pixel 8 128Gb", description: "Чистый Android с AI-функциями.",
    price: 290000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/p0a/p16/37517984.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/google-pixel-9a-8-gb-128-gb-chernyi-138348536/?c=750000000", likes: 0, categoryId: 1
  },
  {
    id: 14, name: "OnePlus 11 512Gb", description: "Быстрый и стильный.",
    price: 450000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/hc7/h57/82828181864478.png?format=gallery-large",
    link: "https://kaspi.kz/shop/p/oneplus-11-16-gb-512-gb-zolotistyi-112551457/?c=750000000", likes: 0, categoryId: 1
  },

  // Category 2
  {
    id: 2, name: "Apple MacBook Air 13", description: "Маленький чип. Грандиозный прорыв",
    price: 440000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000", likes: 0, categoryId: 2
  },
  {
    id: 15, name: "Lenovo ThinkPad T14", description: "Компактный ультрабук с высоким разрешением.",
    price: 1250000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/pda/p65/37077535.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/lenovo-thinkpad-t14-g5-14-32-gb-ssd-512-gb-win-11-pro-21mc005nrt-136639577/?c=750000000", likes: 0, categoryId: 2
  },
  {
    id: 16, name: "HP Pavilion 16", description: "Бизнес-ноутбук с долговечностью.",
    price: 600000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/pe7/p82/27714061.png?format=gallery-large",
    link: "https://kaspi.kz/shop/p/hp-pavilion-16-ag0010ci-16-wuxga-16-16-gb-ssd-512-gb-win-11-b6su1ea-135591942/?c=750000000", likes: 0, categoryId: 2
  },
  {
    id: 17, name: "Asus ROG Strix", description: "Игровой ноутбук с мощной графикой.",
    price: 1200000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/p72/pd8/61729326.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/asus-rog-strix-g18-18-32-gb-ssd-1000-gb-bez-os-90nr0le1-m00440-144923961/?c=750000000", likes: 0, categoryId: 2
  },
  {
    id: 18, name: "HP Spectre x360", description: "Конвертируемый ноутбук с стилусом.",
    price: 960000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/pe5/p5b/24177956.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/hp-spectre-x360-2-in-1-16-aa0004ci-16-16-gb-ssd-512-gb-win-11-home-b6st5ea-134505376/?c=750000000", likes: 0, categoryId: 2
  },

  // Category 3
  {
    id: 4, name: "Apple AirPods Pro 3", description: "Apple AirPods Pro 3 — это идеальный выбор для тех, кто ценит превосходное качество звука.",
    price: 130000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-large",
    link: "https://kaspi.kz/shop/p/apple-airpods-pro-3-belyi-123456789/?c=750000000", likes: 0, categoryId: 3
  },
  {
    id: 19, name: "Apple EarPods", description: "Просто. Стильно. Просто.",
    price: 10000, rating: 4.9, image: "https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/naushniki-apple-earpods-lightning-belyi-4801876/?c=750000000", likes: 0, categoryId: 3
  },
  {
    id: 20, name: "Marshall Major IV", description: "Комфорт и качество звука.",
    price: 19000, rating: 4.8, image: "https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000", likes: 0, categoryId: 3
  },
  {
    id: 21, name: "Jabra Elite 4", description: "Беспроводные с долгой батареей.",
    price: 45000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/h6c/hdf/85684396982302.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/naushniki-jabra-elite-4-sinii-118225311/?c=750000000", likes: 0, categoryId: 3
  },
  {
    id: 22, name: "HyperX Cloud II", description: "Hi-Fi звук для аудиофилов.",
    price: 27000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/h4e/h54/83044720771102.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/naushniki-hyperx-cloud-ii-belyi-112759869/?c=750000000", likes: 0, categoryId: 3
  },

  // Category 4
  {
    id: 23, name: "Apple iPad Pro 12.9", description: "Мощный планшет для профессионалов.",
    price: 670000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-128-gb-seryi-107277956/?c=750000000", likes: 0, categoryId: 4
  },
  {
    id: 24, name: "Samsung Galaxy Tab S9", description: "AMOLED экран и S Pen.",
    price: 305000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000", likes: 0, categoryId: 4
  },
  {
    id: 25, name: "Lenovo Tab P11 Pro", description: "Бюджетный с хорошим дисплеем.",
    price: 124000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/h20/hdd/84153262080030.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/lenovo-tab-p11-2nd-gen-zabf0065ru-11-5-djuim-4-gb-128-gb-seryi-113734499/?c=750000000", likes: 0, categoryId: 4
  },
  {
    id: 26, name: "Microsoft Surface Pro 11 X Plus", description: "Гибридный планшет с Windows.",
    price: 710000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/p18/pea/12812324.jpg?format=gallery-large",
    link: "https://kaspi.kz/shop/p/microsoft-surface-pro-11-x-plus-13-djuim-16-gb-512-gb-chernyi-131318216/?c=750000000", likes: 0, categoryId: 4
  },
  {
    id: 27, name: "Amazon Fire Max 11", description: "Доступный для развлечений.",
    price: 100000, rating: 5, image: "https://resources.cdn-kaspi.kz/img/m/p/h66/ha6/86203456454686.jpg?format=gallery-medium",
    link: "https://kaspi.kz/shop/p/amazon-fire-max-11-11-djuim-4-gb-128-gb-chernyi-118374963/?c=750000000", likes: 0, categoryId: 4
  }
];