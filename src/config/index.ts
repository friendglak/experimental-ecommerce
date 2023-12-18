export const PRODUCT_CATEGORIES = [
  {
    label: "Men's Items",
    value: "mens_items" as const,
    featured: [
      {
        name: "Editor picks",
        href: `/products?category=mens_items`,
        imageSrc: "/nav/mens-items/mixed.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=mens_items&sort=desc",
        imageSrc: "/nav/mens-items/blue.jpg",
      },
      {
        name: "Bestsellers",
        href: "/products?category=mens_items",
        imageSrc: "/nav/mens-items/purple.jpg",
      },
    ],
  },
  {
    label: "Woman's items",
    value: "womans_items" as const,
    featured: [
      {
        name: "Favorite Icon Picks",
        href: `/products?category=womans_items`,
        imageSrc: "/nav/womans-items/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=womans_items&sort=desc",
        imageSrc: "/nav/womans-items/new.jpg",
      },
      {
        name: "Bestselling Icons",
        href: "/products?category=womans_items",
        imageSrc: "/nav/womans-items/bestsellers.jpg",
      },
    ],
  },
];
