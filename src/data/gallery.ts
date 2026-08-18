export interface GalleryItem {
  id: number;
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  location: string;
  category: string;
  span?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    url: "/Gallery/gallery-1.jpg",
    location: "Rudraksha City, Betma Bypass",
    category: "Residential Plots",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    type: "image",
    url: "/Gallery/gallery-2.jpg",
    location: "Sagore Kuti, Pithampur",
    category: "Residential Plots",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    type: "image",
    url: "/Gallery/gallery-3.jpg",
    location: "Turnkey Construction Site",
    category: "Construction",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    type: "image",
    url: "/Gallery/gallery-4.jpg",
    location: "Vijay Nagar Layout",
    category: "Township",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    type: "image",
    url: "/Gallery/gallery-5.jpg",
    location: "Betma Road Highway Touch",
    category: "Residential Plots",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    type: "image",
    url: "/Gallery/gallery-6.jpg",
    location: "Badi Bagdun Development",
    category: "Site Views",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    type: "image",
    url: "/Gallery/gallery-7.jpg",
    location: "Indore West Extension",
    category: "Township",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 8,
    type: "image",
    url: "/Gallery/gallery-8.jpg",
    location: "Commercial Plotting Area",
    category: "Commercial",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 9,
    type: "image",
    url: "/Gallery/gallery-9.jpg",
    location: "T&CP Approved Colony Road",
    category: "Site Views",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 10,
    type: "image",
    url: "/Gallery/gallery-10.jpg",
    location: "Modern Villa Construction",
    category: "Construction",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 11,
    type: "image",
    url: "/Gallery/gallery-11.jpg",
    location: "Rudraksha Enclave",
    category: "Township",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 12,
    type: "image",
    url: "/Gallery/gallery-12.jpg",
    location: "Pithampur Sector 1 Layout",
    category: "Residential Plots",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 13,
    type: "image",
    url: "/Gallery/gallery-13.jpg",
    location: "Betma Bypass Junction View",
    category: "Site Views",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 14,
    type: "image",
    url: "/Gallery/gallery-14.jpg",
    location: "Gated Community Infrastructure",
    category: "Township",
    span: "md:col-span-1 md:row-span-1",
  },
];
