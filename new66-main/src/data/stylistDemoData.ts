export interface StylistPhoto {
  url: string;
  label: string;
  caption: string;
}

export interface StylistDemoItem {
  id: string;
  name: string;
  brand: string;
  retailer: string;
  image: string;
  galleryImages?: string[];
  fabricNote?: string;
  category: string;
  inStock: boolean;
  sizeAvailable: string[];
}

export interface StylistDemoLook {
  id: string;
  title: string;
  subtitle: string;
  occasion: string;
  vibe: string;
  matchScore: number;
  description: string;
  imageUrl: string;
  photos: StylistPhoto[];
  relatedLooks: {
    title: string;
    imageUrl: string;
    vibeTag: string;
  }[];
  colorPalette: string[];
  stylingTips: string[];
  items: StylistDemoItem[];
}

export const OCCASIONS_METADATA = [
  {
    name: 'Casual Weekend',
    tagline: 'Brunch, walks & leisure',
    preview: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Work & Meetings',
    tagline: 'Executive, studio & office',
    preview: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Dinner Date',
    tagline: 'Intimate evening & drinks',
    preview: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Wedding & Party',
    tagline: 'Celebration & black-tie',
    preview: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Travel Outing',
    tagline: 'Transit, flights & getaways',
    preview: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=300&q=80'
  }
];

export const VIBES_METADATA = [
  {
    name: 'Casual & Clean',
    tagline: 'Minimalist & relaxed',
    preview: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Classic & Elegant',
    tagline: 'Timeless luxury & drape',
    preview: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Modern Business',
    tagline: 'Architectural & sharp',
    preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSfW8Vl-d3xtBDN-33Juhw8UJ0FG1xCVPtFG7aHdojmw&s=10'
  },
  {
    name: 'Trendy Streetwear',
    tagline: 'Directional & expressive',
    preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpaRKeBX48OdXnbK7zkC-RQWeT23sGyTn9A6_efrfqMQ&s=10'
  }
];

export const OCCASIONS = [
  'Casual Weekend',
  'Work & Meetings',
  'Dinner Date',
  'Wedding & Party',
  'Travel Outing'
];

export const VIBES = [
  'Casual & Clean',
  'Classic & Elegant',
  'Modern Business',
  'Trendy Streetwear'
];

export const PALETTES = [
  { name: 'Gold & Deep Violet', colors: ['#1A102E', '#F2C94C', '#B7A4D8'] },
  { name: 'Sky Blue & Clean Black', colors: ['#0B0D12', '#38BDF8', '#818CF8'] },
  { name: 'Warm Cream & Charcoal', colors: ['#281E1E', '#D4AF37', '#EBE2DC'] }
];

export const DEMO_OUTFITS_DATABASE: Record<string, StylistDemoLook[]> = {
  // ==========================================
  // 1. Casual Weekend - Casual & Clean
  // ==========================================
  'Casual Weekend-Casual & Clean': [
    {
      id: 'cw-cc-1',
      title: 'Relaxed Linen Overshirt & Fluid Slacks',
      subtitle: 'Soft charcoal overshirt with crisp cotton tee and clean slacks',
      occasion: 'Casual Weekend',
      vibe: 'Casual & Clean',
      matchScore: 98,
      description: 'An effortless, breathable weekend ensemble built for Sunday brunches, art gallery visits, and casual city strolls.',
      imageUrl: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Outfit',
          caption: 'Relaxed charcoal silhouette with rolled cuffs and effortless drapery'
        },
        {
          url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          label: 'Fabric & Detail',
          caption: 'Boiled felted wool with tactile linen texture and horn buttons'
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs52zOekyuCnmQd5kMZ0pJESoMCGCFNbsAYRl2Aos8EQ&s',
          label: 'Trouser Silhouette',
          caption: 'Fluid wool-blend relaxed trousers with clean drape'
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-FWnFMQuyQ8wFYDcopARi7V4-guZk9wyJ0cu-rtQPSg&s=10',
          label: 'Cotton Base Layer',
          caption: 'Heavyweight organic cotton jersey crewneck tee'
        }
      ],
      relatedLooks: [
        {
          title: 'Monochrome Tee & Pleated Pants',
          imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Casual & Clean'
        },
        {
          title: 'Cream Knit & Straight Denim',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfqKiEHBGGVPNYe331hckmwPuDVZyG1uIHdQZ3OjEaA&s=10',
          vibeTag: 'Casual & Clean'
        }
      ],
      colorPalette: ['#1E1E24', '#B7A4D8', '#EAE6E1', '#000000'],
      stylingTips: [
        'Wear the overshirt unbuttoned over a clean white t-shirt',
        'Pair with minimalist white leather trainers for all-day comfort',
        'Roll the sleeves up slightly for a relaxed silhouette'
      ],
      items: [
        {
          id: 'item-cw-1',
          name: 'Charcoal Wool-Linen Overshirt',
          brand: 'Studio Nicholson',
          retailer: 'SSENSE',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQkOcNh0MfuAw380zhG0cuntIg4W8_CYdS51m3PYTkw&s=10',
          galleryImages: [
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&w=800&q=80'
          ],
          fabricNote: 'Boiled felted wool with horn button fastening and twin patch pockets',
          category: 'top',
          inStock: true,
          sizeAvailable: ['S', 'M', 'L', 'XL']
        },
        {
          id: 'item-cw-2',
          name: 'Fluid Wool Relaxed Slacks',
          brand: 'Totême',
          retailer: 'Net-a-Porter',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdk0aKdZMZyeUOGsb_bvSmn_bQ8fiv0YDP6EWxZ-YncQ&s=10',
          galleryImages: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdk0aKdZMZyeUOGsb_bvSmn_bQ8fiv0YDP6EWxZ-YncQ&s=10'
          ],
          fabricNote: 'Lightweight virgin wool-silk blend with elasticated internal waistband',
          category: 'bottom',
          inStock: true,
          sizeAvailable: ['28', '30', '32', '34']
        }
      ]
    },
    {
      id: 'cw-cc-2',
      title: 'Minimalist Ivory Cotton Chore & Straight Denim',
      subtitle: 'Structured ecru cotton jacket with vintage wash straight-leg jeans',
      occasion: 'Casual Weekend',
      vibe: 'Casual & Clean',
      matchScore: 96,
      description: 'A crisp Scandinavian workwear-inspired ensemble designed for coffee runs, weekend farmer markets, and open-air cafés.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0MFtKgm0wK74_rVVH-WvGK8xovm3e9x45hrEfQJp9g&s',
      photos: [
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQwWGvY492RmvB4QlbccyYUXyrEMUujE8S_xRkYH9vQ&s=10',
          label: 'Full Chore Jacket Look',
          caption: 'Ecru heavy canvas jacket paired with straight-leg denim'
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttaFgIeXxB-Q3wx4Z398AyQ7Pf2T_MAVvWHtZe66zRQ&s',
          label: 'Selvedge Denim View',
          caption: 'Authentic 13oz ring-spun Japanese selvedge denim'
        },
        {
          url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          label: 'Tee Base Layer',
          caption: 'Compact spun cotton jersey in crisp optic white'
        }
      ],
      relatedLooks: [
        {
          title: 'Charcoal Overshirt & Slacks',
          imageUrl: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Casual & Clean'
        }
      ],
      colorPalette: ['#F5F5F0', '#B7A4D8', '#1C1E24', '#E2E8F0'],
      stylingTips: [
        'Cuff the chore jacket once at the wrist',
        'Pair with neutral leather slip-on loafers or clean sneakers'
      ],
      items: [
        {
          id: 'item-cw-cc2-1',
          name: 'Ecru Cotton Canvas Chore Jacket',
          brand: 'Arket Studio',
          retailer: 'FARFETCH',
          image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80'],
          fabricNote: '100% organic heavy cotton canvas with antique nickel buttons',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['S', 'M', 'L']
        },
        {
          id: 'item-cw-cc2-2',
          name: 'Straight Selvedge Denim Jeans',
          brand: 'Khaite',
          retailer: 'SSENSE',
          image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Japanese selvedge non-stretch organic denim',
          category: 'bottom',
          inStock: true,
          sizeAvailable: ['28', '30', '32', '34']
        }
      ]
    }
  ],

  // ==========================================
  // 2. Casual Weekend - Classic & Elegant
  // ==========================================
  'Casual Weekend-Classic & Elegant': [
    {
      id: 'cw-ce-1',
      title: 'Cozy Cashmere Cape & Cream Knit',
      subtitle: 'Soft neutral cashmere cape with relaxed wool trousers',
      occasion: 'Casual Weekend',
      vibe: 'Classic & Elegant',
      matchScore: 99,
      description: 'Supreme comfort meets quiet luxury in this neutral-toned cashmere outfit, perfect for countryside getaways and cozy café mornings.',
      imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Outfit',
          caption: 'Cashmere wrap silhouette with soft golden hour natural light'
        },
        {
          url: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80',
          label: 'Cashmere Texture',
          caption: 'Ultra-fine 100% Mongolian cashmere gauge in warm oatmeal'
        },
        {
          url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80',
          label: 'Draped Shoulder Line',
          caption: 'Double-face cashmere construction with hand-finished edges'
        }
      ],
      relatedLooks: [
        {
          title: 'Camel Travel Wrap Set',
          imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Classic & Elegant'
        }
      ],
      colorPalette: ['#F5F5F0', '#D6C7B2', '#8C7A6B', '#1E1B18'],
      stylingTips: [
        'Drape the cape over your shoulders for instant cozy style',
        'Pair with warm leather boots and tortoiseshell sunglasses'
      ],
      items: [
        {
          id: 'item-cw-ce-1',
          name: '100% Cashmere Blanket Cape',
          brand: 'Loro Piana',
          retailer: 'Net-a-Porter',
          image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Grade-A baby cashmere with fringed rolled edge detailing',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['One Size']
        }
      ]
    }
  ],

  // ==========================================
  // 3. Casual Weekend - Modern Business
  // ==========================================
  'Casual Weekend-Modern Business': [
    {
      id: 'cw-mb-1',
      title: 'Minimalist Ivory Trench & Denim',
      subtitle: 'Classic clean tailored trench with straight-leg denim',
      occasion: 'Casual Weekend',
      vibe: 'Modern Business',
      matchScore: 97,
      description: 'A polished smart-casual look combining a sharp trench coat with organic cotton denim for casual client breakfasts.',
      imageUrl: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Trench Silhouette',
          caption: 'Tailored ivory trench coat with relaxed raglan shoulders'
        },
        {
          url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1000&q=80',
          label: 'Blazer Under-Layer',
          caption: 'Unstructured cotton blend blazer in soft slate'
        },
        {
          url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80',
          label: 'Denim Detail',
          caption: 'Japanese selvedge organic denim with clean vintage wash'
        }
      ],
      relatedLooks: [
        {
          title: 'Structured Gabardine Trench',
          imageUrl: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Modern Business'
        }
      ],
      colorPalette: ['#F5F5F0', '#B7A4D8', '#1C1E24', '#E2E8F0'],
      stylingTips: [
        'Roll the sleeves once to showcase minimalist bracelet stack',
        'Pairs seamlessly with neutral loafers or white leather trainers'
      ],
      items: [
        {
          id: 'item-cw-mb-1',
          name: 'Relaxed Belted Trench Coat',
          brand: 'Totême',
          retailer: 'Net-a-Porter',
          image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Water-repellent heavy cotton gabardine with raglan sleeves',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['S', 'M', 'L']
        }
      ]
    }
  ],

  // ==========================================
  // 4. Casual Weekend - Trendy Streetwear
  // ==========================================
  'Casual Weekend-Trendy Streetwear': [
    {
      id: 'cw-ts-1',
      title: 'Technical Cropped Flight Jacket & Cargoes',
      subtitle: 'Technical flight jacket with high-waist cargo trousers',
      occasion: 'Casual Weekend',
      vibe: 'Trendy Streetwear',
      matchScore: 98,
      description: 'A directional urban aesthetic pairing structured cropped utility outerwear with relaxed cargo pants.',
      imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Outfit',
          caption: 'Urban cropped jacket paired with high-rise cargo silhouette'
        },
        {
          url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80',
          label: 'Jacket Hardware',
          caption: 'Brushed chrome zips with high-density ballistic nylon shell'
        },
        {
          url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=80',
          label: 'Cargo Trousers',
          caption: 'Multi-pocket structured cargo pants with tapered toggle hem'
        },
        {
          url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80',
          label: 'Jewelry & Accent',
          caption: '18K gold vermeil geometric pendant necklace'
        }
      ],
      relatedLooks: [
        {
          title: 'Urban Flight Bomber',
          imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Trendy Streetwear'
        }
      ],
      colorPalette: ['#1A102E', '#2A1B4D', '#B7A4D8', '#F2C94C', '#0C0F0F'],
      stylingTips: [
        'Wear the cropped jacket over a plain black top for an effortless look',
        'Pair with clean leather sneakers or low lug-sole boots'
      ],
      items: [
        {
          id: 'item-cw-ts-1',
          name: 'Cropped Utility Flight Jacket',
          brand: 'Helmut Atelier',
          retailer: 'FARFETCH',
          image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Technical cotton-twill blend with brushed silver zip hardware',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['XS', 'S', 'M', 'L']
        }
      ]
    },
    {
      id: 'cw-ts-2',
      title: 'Monochrome Acid Street Bomber & Flare Leather',
      subtitle: 'Vibrant graphic layering with buttery leather flare slacks',
      occasion: 'Casual Weekend',
      vibe: 'Trendy Streetwear',
      matchScore: 97,
      description: 'Bold weekend streetstyle with electric accents, oversized outerwear, and high-impact silhouettes.',
      imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Street Editorial',
          caption: 'High-contrast silhouette featuring statement yellow outerwear'
        },
        {
          url: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=1000&q=80',
          label: 'Boxy Outerwear Cut',
          caption: 'Drop-shoulder architectural tailoring in matte finish'
        }
      ],
      relatedLooks: [
        {
          title: 'Technical Cropped Flight',
          imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Trendy Streetwear'
        }
      ],
      colorPalette: ['#0B0D12', '#2A1B4D', '#F2C94C', '#FFADE3'],
      stylingTips: [
        'Keep accessories minimal with chunky platform sneakers',
        'Add sleek black sunglasses'
      ],
      items: [
        {
          id: 'item-cw-ts2-1',
          name: 'Insulated Flight Bomber Jacket',
          brand: 'Sacai',
          retailer: 'SSENSE',
          image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'High-density ballistic nylon with ribbed wool collar',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['S', 'M', 'L']
        }
      ]
    }
  ],

  // ==========================================
  // 5. Work & Meetings - Casual & Clean
  // ==========================================
  'Work & Meetings-Casual & Clean': [
    {
      id: 'wm-cc-1',
      title: 'Relaxed Houndstooth Blazer & Chinos',
      subtitle: 'Soft tailored blazer with poplin shirt and tapered slacks',
      occasion: 'Work & Meetings',
      vibe: 'Casual & Clean',
      matchScore: 98,
      description: 'Smart business casual pairing relaxed tailoring with ultra-breathable natural fibers for modern studio environments.',
      imageUrl: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Studio Suit',
          caption: 'Tailored houndstooth jacket in earthy brown and grey tones'
        },
        {
          url: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=80',
          label: 'Poplin Shirt Detail',
          caption: 'Crisp 120-thread count Egyptian cotton spread collar shirt'
        },
        {
          url: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=1000&q=80',
          label: 'Tapered Trousers',
          caption: 'Pleated front chinos with fluid drape'
        }
      ],
      relatedLooks: [
        {
          title: 'Charcoal Double-Breasted Suit',
          imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Casual & Clean'
        }
      ],
      colorPalette: ['#1C1E24', '#4A4551', '#EBE2DC', '#B7A4D8'],
      stylingTips: [
        'Leave top shirt button open for a relaxed creative look',
        'Pair with dark brown suede loafers'
      ],
      items: [
        {
          id: 'item-wm-cc-1',
          name: 'Checked Houndstooth Wool Blazer',
          brand: 'Studio Nicholson',
          retailer: 'SSENSE',
          image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80'],
          fabricNote: '100% fine British wool with unconstructed natural shoulders',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['38', '40', '42']
        }
      ]
    }
  ],

  // ==========================================
  // 6. Work & Meetings - Classic & Elegant
  // ==========================================
  'Work & Meetings-Classic & Elegant': [
    {
      id: 'wm-ce-1',
      title: 'Structured Camel Wool Blazer & Wool Trousers',
      subtitle: 'Tailored hourglass blazer with sharp knife-pleated trousers',
      occasion: 'Work & Meetings',
      vibe: 'Classic & Elegant',
      matchScore: 99,
      description: 'Impeccable executive tailoring crafted with luxurious virgin wool to deliver commanding authority.',
      imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Tailored Silhouette',
          caption: 'Sharp camel wool hourglass blazer with defined waistline'
        },
        {
          url: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=1000&q=80',
          label: 'Trouser Pleats',
          caption: 'Knife-pleated high-waist virgin wool trousers'
        },
        {
          url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80',
          label: 'Executive Profile',
          caption: 'Crisp sartorial line built for high-stakes leadership'
        }
      ],
      relatedLooks: [
        {
          title: 'Navy Executive Power Suit',
          imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Classic & Elegant'
        }
      ],
      colorPalette: ['#1C1E24', '#4A4551', '#EBE2DC', '#B7A4D8', '#100C1A'],
      stylingTips: [
        'Wear the blazer buttoned for formal meetings',
        'Pair with pointed leather loafers or pumps'
      ],
      items: [
        {
          id: 'item-wm-ce-1',
          name: 'Tailored Hourglass Wool Blazer',
          brand: 'Mugler Studio',
          retailer: 'SSENSE',
          image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Fine virgin wool blend with structured padded shoulders and silk lining',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['36', '38', '40', '42']
        }
      ]
    }
  ],

  // ==========================================
  // 7. Work & Meetings - Modern Business
  // ==========================================
  'Work & Meetings-Modern Business': [
    {
      id: 'wm-mb-1',
      title: 'Modern Executive Navy Power Suit',
      subtitle: 'Precision shoulder line with wide-leg flowing trousers',
      occasion: 'Work & Meetings',
      vibe: 'Modern Business',
      matchScore: 98,
      description: 'A crisp, contemporary suit crafted to command attention in presentations, executive dinners, and global conferences.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Navy Suit',
          caption: 'Sharp architectural lines with contemporary wide-leg tailoring'
        },
        {
          url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
          label: 'Double-Breasted Stance',
          caption: 'Horn button double-breasted closure and peak lapels'
        },
        {
          url: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=1000&q=80',
          label: 'Wide-Leg Drape',
          caption: 'Pleated trousers with elegant drape over pointed heels'
        }
      ],
      relatedLooks: [
        {
          title: 'Camel Structured Suit',
          imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Modern Business'
        }
      ],
      colorPalette: ['#1C1E24', '#4A4551', '#EBE2DC', '#B7A4D8', '#100C1A'],
      stylingTips: [
        'Keep accessories sharp with a structured leather portfolio',
        'Pair with pointed leather mules'
      ],
      items: [
        {
          id: 'item-wm-mb-1',
          name: 'Executive Navy Wool Suit Jacket',
          brand: 'The Row',
          retailer: 'SSENSE',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Super 150s virgin wool with natural shoulder construction',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['36', '38', '40', '42']
        }
      ]
    }
  ],

  // ==========================================
  // 8. Work & Meetings - Trendy Streetwear
  // ==========================================
  'Work & Meetings-Trendy Streetwear': [
    {
      id: 'wm-ts-1',
      title: 'Oversized Boxy Blazer & Technical Slacks',
      subtitle: 'Boxy streetwear blazer with relaxed pleated trousers',
      occasion: 'Work & Meetings',
      vibe: 'Trendy Streetwear',
      matchScore: 96,
      description: 'Creative agency dressing featuring an oversized boxy blazer, relaxed pants, and chunky modern loafers.',
      imageUrl: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Street Tailoring',
          caption: 'Oversized boxy tailoring with confident architectural silhouette'
        },
        {
          url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1000&q=80',
          label: 'Lapel & Layering',
          caption: 'Clean slate grey gabardine worn over minimal tee'
        }
      ],
      relatedLooks: [
        {
          title: 'Cropped Flight Suit',
          imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Trendy Streetwear'
        }
      ],
      colorPalette: ['#0B0D12', '#2A1B4D', '#F2C94C', '#FFADE3'],
      stylingTips: [
        'Wear with chunky lug-sole loafers or pristine trainers',
        'Add a leather crossbody bag'
      ],
      items: [
        {
          id: 'item-wm-ts-1',
          name: 'Boxy Oversized Studio Blazer',
          brand: 'Sacai',
          retailer: 'SSENSE',
          image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Heavyweight wool-gabardine with drop shoulders',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['S', 'M', 'L']
        }
      ]
    }
  ],

  // ==========================================
  // 9. Dinner Date - Casual & Clean
  // ==========================================
  'Dinner Date-Casual & Clean': [
    {
      id: 'dd-cc-1',
      title: 'Fine Ribbed Knit Midi Dress & Knee Boots',
      subtitle: 'Fitted ribbed merino midi with chocolate suede boots',
      occasion: 'Dinner Date',
      vibe: 'Casual & Clean',
      matchScore: 98,
      description: 'Intimate dinner perfection: an ultra-flattering ribbed midi dress with warm suede accents and understated jewelry.',
      imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Knit Silhouette',
          caption: 'Body-skimming ribbed knit silhouette with warm neutral tones'
        },
        {
          url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80',
          label: 'Parisian Lighting',
          caption: 'Evening café ambience with warm gold necklace'
        }
      ],
      relatedLooks: [
        {
          title: 'Cashmere Evening Wrap',
          imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Casual & Clean'
        }
      ],
      colorPalette: ['#ECE5DF', '#8C7A6B', '#1E1B18', '#D6C7B2'],
      stylingTips: [
        'Add gold drop earrings to frame the neckline',
        'Pair with chocolate brown suede boots'
      ],
      items: [
        {
          id: 'item-dd-cc-1',
          name: 'Ribbed Merino Midi Dress',
          brand: 'Loro Piana',
          retailer: 'Net-a-Porter',
          image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Extra-fine 18.5-micron Australian merino wool in seamless 2x2 rib',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['XS', 'S', 'M', 'L']
        }
      ]
    }
  ],

  // ==========================================
  // 10. Dinner Date - Classic & Elegant
  // ==========================================
  'Dinner Date-Classic & Elegant': [
    {
      id: 'dd-ce-1',
      title: 'Bias-Cut Silk Slip Dress & Cashmere Wrap',
      subtitle: 'Fluid sand-washed silk slip dress with double-faced wrap coat',
      occasion: 'Dinner Date',
      vibe: 'Classic & Elegant',
      matchScore: 99,
      description: 'Sensual minimalism with fluid bias-cut silk charmeuse, gold evening clutch, and soft cashmere outerwear.',
      imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Silk Slip',
          caption: 'Fluid emerald silk slip dress cascading into a delicate floor-grazing hem'
        },
        {
          url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80',
          label: 'Silk Charmeuse Drape',
          caption: 'Sand-washed pure silk catching candlelight reflections'
        },
        {
          url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
          label: 'Sculpted Gold Clutch',
          caption: 'Hand-sculpted polished brass evening clutch'
        }
      ],
      relatedLooks: [
        {
          title: 'Silk Evening Slip',
          imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Classic & Elegant'
        }
      ],
      colorPalette: ['#121414', '#D4AF37', '#38265A', '#E2E2E2'],
      stylingTips: [
        'Wear with neutral strappy heel sandals',
        'Drape the cashmere coat over your shoulders upon entry'
      ],
      items: [
        {
          id: 'item-dd-ce-1',
          name: 'Silk Slip Maxi Dress',
          brand: 'The Row',
          retailer: 'Net-a-Porter',
          image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Bias-cut 100% Italian sand-washed silk charmeuse',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['S', 'M', 'L']
        },
        {
          id: 'item-dd-ce-2',
          name: 'Gold Metal Evening Clutch',
          brand: 'Bottega Veneta',
          retailer: 'FARFETCH',
          image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Hand-sculpted polished brass with magnetic snap closure',
          category: 'accessories',
          inStock: true,
          sizeAvailable: ['One Size']
        }
      ]
    }
  ],

  // ==========================================
  // 11. Dinner Date - Modern Business
  // ==========================================
  'Dinner Date-Modern Business': [
    {
      id: 'dd-mb-1',
      title: 'Midnight Velvet Cocktail Blazer & Slacks',
      subtitle: 'Rich navy velvet jacket with silk lapels and tapered trousers',
      occasion: 'Dinner Date',
      vibe: 'Modern Business',
      matchScore: 99,
      description: 'Lustrous deep midnight velvet blazer worn over a silk camisole for high-end dining and private club evenings.',
      imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Velvet Tuxedo',
          caption: 'Midnight velvet tuxedo blazer with silk grosgrain peak lapels'
        },
        {
          url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80',
          label: 'Silk Accents',
          caption: 'Crepe de chine silk camisole underpinning'
        }
      ],
      relatedLooks: [
        {
          title: 'Velvet Tuxedo Jacket',
          imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Modern Business'
        }
      ],
      colorPalette: ['#0C1024', '#D4AF37', '#1E1430', '#E5E7EB'],
      stylingTips: [
        'Pair with pointed black metallic pumps',
        'Add understated crystal studs'
      ],
      items: [
        {
          id: 'item-dd-mb-1',
          name: 'Midnight Velvet Tuxedo Blazer',
          brand: 'Tom Ford',
          retailer: 'FARFETCH',
          image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Deep pile cotton velvet with peak grosgrain lapels',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['38', '40', '42']
        }
      ]
    }
  ],

  // ==========================================
  // 12. Dinner Date - Trendy Streetwear
  // ==========================================
  'Dinner Date-Trendy Streetwear': [
    {
      id: 'dd-ts-1',
      title: 'Matte Leather Moto Jacket & Slip Skirt',
      subtitle: 'Soft lambskin biker jacket paired with fluid silk maxi skirt',
      occasion: 'Dinner Date',
      vibe: 'Trendy Streetwear',
      matchScore: 97,
      description: 'High-contrast romantic edge combining tactile grain leather with flowing silk and pointed ankle boots.',
      imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Moto Ensemble',
          caption: 'Supple full-grain leather moto jacket with brushed chrome hardware'
        },
        {
          url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80',
          label: 'Street Silhouette',
          caption: 'Cropped waistline creating elongated leg proportions'
        }
      ],
      relatedLooks: [
        {
          title: 'Cropped Flight Bomber',
          imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Trendy Streetwear'
        }
      ],
      colorPalette: ['#0B0D12', '#2A1B4D', '#F2C94C', '#FFADE3'],
      stylingTips: [
        'Add a mini leather crossbody bag',
        'Wear with pointed black ankle boots'
      ],
      items: [
        {
          id: 'item-dd-ts-1',
          name: 'Lambskin Leather Moto Jacket',
          brand: 'Acne Studios',
          retailer: 'SSENSE',
          image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80'],
          fabricNote: '100% lambskin grain leather with silver asymmetrical zip',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['36', '38', '40']
        }
      ]
    }
  ],

  // ==========================================
  // 13. Wedding & Party - Casual & Clean
  // ==========================================
  'Wedding & Party-Casual & Clean': [
    {
      id: 'wp-cc-1',
      title: 'Pastel Lavender Pleated Celebration Dress',
      subtitle: 'Sunburst micro-pleated midi dress with minimalist ankle strap sandals',
      occasion: 'Wedding & Party',
      vibe: 'Casual & Clean',
      matchScore: 98,
      description: 'Effortlessly polished cocktail wedding guest attire featuring delicate flowing pleats and subtle gold accents.',
      imageUrl: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Celebration Dress',
          caption: 'Pastel sunburst pleated cocktail midi in airy georgette'
        },
        {
          url: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=1000&q=80',
          label: 'Floral & Print Detail',
          caption: 'Botanical watercolor pattern with natural chiffon drape'
        }
      ],
      relatedLooks: [
        {
          title: 'Champagne Satin Slip',
          imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Casual & Clean'
        }
      ],
      colorPalette: ['#121414', '#D4AF37', '#38265A', '#E2E2E2'],
      stylingTips: [
        'Pair with delicate metallic heel sandals',
        'Carry a structured satin clutch'
      ],
      items: [
        {
          id: 'item-wp-cc-1',
          name: 'Lavender Sunburst Pleated Dress',
          brand: 'Zimmermann',
          retailer: 'Net-a-Porter',
          image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Hand-pleated georgette chiffon with high neckline',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['0', '1', '2', '3']
        }
      ]
    }
  ],

  // ==========================================
  // 14. Wedding & Party - Classic & Elegant
  // ==========================================
  'Wedding & Party-Classic & Elegant': [
    {
      id: 'wp-ce-1',
      title: 'Classic Black-Tie Smoking Tuxedo',
      subtitle: 'Pure wool tuxedo jacket with silk satin lapels and tailored slacks',
      occasion: 'Wedding & Party',
      vibe: 'Classic & Elegant',
      matchScore: 99,
      description: 'Formal black-tie perfection designed for galas, milestone wedding celebrations, and red carpet balls.',
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Black Tie',
          caption: 'Impeccable bespoke tuxedo silhouette with satin peak lapels'
        },
        {
          url: 'https://images.unsplash.com/photo-1576188973994-49034ef8629b?auto=format&fit=crop&w=1000&q=80',
          label: 'Smoking Blazer Detail',
          caption: 'Grain de poudre wool with duchess silk satin collar'
        },
        {
          url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
          label: 'Gala Evening Companion',
          caption: 'Velvet couture evening gown silhouette'
        }
      ],
      relatedLooks: [
        {
          title: 'Satin Tuxedo Blazer',
          imageUrl: 'https://images.unsplash.com/photo-1576188973994-49034ef8629b?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Classic & Elegant'
        }
      ],
      colorPalette: ['#0A0A0E', '#6B21A8', '#E5E7EB', '#F59E0B'],
      stylingTips: [
        'Wear with polished patent leather dress oxfords',
        'Ensure trousers break cleanly at the shoe collar'
      ],
      items: [
        {
          id: 'item-wp-ce-1',
          name: 'Satin Collar Smoking Blazer',
          brand: 'Saint Laurent',
          retailer: 'FARFETCH',
          image: 'https://images.unsplash.com/photo-1576188973994-49034ef8629b?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1576188973994-49034ef8629b?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Grain de poudre pure wool with lustrous duchess silk satin lapels',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['36', '38', '40', '42']
        }
      ]
    }
  ],

  // ==========================================
  // 15. Wedding & Party - Modern Business
  // ==========================================
  'Wedding & Party-Modern Business': [
    {
      id: 'wp-mb-1',
      title: 'Statement Gold Gala Bustier Gown',
      subtitle: 'Sculpted metallic bustier with fine pleated chiffon skirt',
      occasion: 'Wedding & Party',
      vibe: 'Modern Business',
      matchScore: 97,
      description: 'A showstopping statement ensemble combining anatomical sculpted gold metal with hand-pleated couture chiffon.',
      imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Gala Look',
          caption: 'Hammered gold plated breastplate with flowing pleated black chiffon'
        },
        {
          url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80',
          label: 'Pleated Chiffon Motion',
          caption: 'Delicate sunray pleating expanding into grand sweep'
        }
      ],
      relatedLooks: [
        {
          title: 'Gilded Bustier Long Dress',
          imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Modern Business'
        }
      ],
      colorPalette: ['#181024', '#D4AF37', '#E2E8F0', '#4C1D95'],
      stylingTips: [
        'Slick hair back into a clean architectural bun',
        'Keep jewelry focused purely on sculptural rings'
      ],
      items: [
        {
          id: 'item-wp-mb-1',
          name: 'Gilded Bustier Long Dress',
          brand: 'Schiaparelli',
          retailer: 'StyleCue Exclusive',
          image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Hand-pleated silk chiffon with anatomical hammered gold plated breastplate',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['S', 'M']
        }
      ]
    }
  ],

  // ==========================================
  // 16. Wedding & Party - Trendy Streetwear
  // ==========================================
  'Wedding & Party-Trendy Streetwear': [
    {
      id: 'wp-ts-1',
      title: 'Champagne Liquid Satin Slip & Metallic Heels',
      subtitle: 'High-shine cowl neck satin dress with chrome accessories',
      occasion: 'Wedding & Party',
      vibe: 'Trendy Streetwear',
      matchScore: 98,
      description: 'Afterparty and celebration high-glam streetwear combining liquid satin shine with architectural accessories.',
      imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Liquid Satin',
          caption: 'Liquid drape champagne satin dress catching celebration lighting'
        },
        {
          url: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=1000&q=80',
          label: 'Metallic Bustier Accent',
          caption: 'Handcrafted metallic plates with mirror polish finish'
        }
      ],
      relatedLooks: [
        {
          title: 'Champagne Satin Slip',
          imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Trendy Streetwear'
        }
      ],
      colorPalette: ['#181024', '#D4AF37', '#FFADE3', '#4C1D95'],
      stylingTips: [
        'Stack bold statement rings and metallic cuffs',
        'Pair with high-platform sandals'
      ],
      items: [
        {
          id: 'item-wp-ts-1',
          name: 'Champagne Cowl-Neck Satin Slip Dress',
          brand: 'Khaite',
          retailer: 'SSENSE',
          image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Heavyweight liquid satin charmeuse with cowl neckline',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['XS', 'S', 'M']
        }
      ]
    }
  ],

  // ==========================================
  // 17. Travel Outing - Casual & Clean
  // ==========================================
  'Travel Outing-Casual & Clean': [
    {
      id: 'to-cc-1',
      title: 'All-Weather 3-in-1 Parka & Stretch Pants',
      subtitle: 'Waterproof technical jacket with breathable travel layers',
      occasion: 'Travel Outing',
      vibe: 'Casual & Clean',
      matchScore: 98,
      description: 'Engineered for airport transits, unpredictable climate shifts, and city explorations in total comfort.',
      imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Transit Look',
          caption: 'Waterproof 3-in-1 technical shell with adjustable cinch waist'
        },
        {
          url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80',
          label: 'Wool Transit Layer',
          caption: 'Camel wool cozy layer worn under the protective shell'
        }
      ],
      relatedLooks: [
        {
          title: '3-in-1 Weatherproof Parka',
          imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Casual & Clean'
        }
      ],
      colorPalette: ['#0B0D12', '#260058', '#FFADE3', '#F2C94C'],
      stylingTips: [
        'Adjust the waist drawstrings for a customized silhouette',
        'Pair with waterproof all-terrain slip-ons or sneakers'
      ],
      items: [
        {
          id: 'item-to-cc-1',
          name: '3-in-1 Weatherproof Parka',
          brand: 'Sacai',
          retailer: 'StyleCue Exclusive',
          image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Triple-layer Gore-Tex membrane with taped internal seams',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['M', 'L', 'XL']
        }
      ]
    }
  ],

  // ==========================================
  // 18. Travel Outing - Classic & Elegant
  // ==========================================
  'Travel Outing-Classic & Elegant': [
    {
      id: 'to-ce-1',
      title: 'Double-Faced Wool Coat & Travel Knit',
      subtitle: 'Luxurious cashmere travel wrap with leather weekend duffle',
      occasion: 'Travel Outing',
      vibe: 'Classic & Elegant',
      matchScore: 99,
      description: 'First-class travel comfort featuring double-faced wool, cozy cashmere knits, and handcrafted leather accessories.',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80',
          label: 'Full First Class Look',
          caption: 'Double-faced camel wool travel coat draped with ivory cashmere wrap'
        },
        {
          url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1000&q=80',
          label: 'Cashmere Scarf View',
          caption: 'Pure cashmere woven wrap draped over travel wool'
        }
      ],
      relatedLooks: [
        {
          title: 'Camel Travel Wrap Set',
          imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Classic & Elegant'
        }
      ],
      colorPalette: ['#F5F5F0', '#D6C7B2', '#8C7A6B', '#1E1B18'],
      stylingTips: [
        'Wear the coat draped unbuttoned while in transit',
        'Pair with comfortable leather driving loafers'
      ],
      items: [
        {
          id: 'item-to-ce-1',
          name: 'Double-Face Wool Travel Overcoat',
          brand: 'Brunello Cucinelli',
          retailer: 'Net-a-Porter',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Hand-sewn double-face virgin wool with horn buttons',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['38', '40', '42']
        }
      ]
    }
  ],

  // ==========================================
  // 19. Travel Outing - Modern Business
  // ==========================================
  'Travel Outing-Modern Business': [
    {
      id: 'to-mb-1',
      title: 'Packable Wrinkle-Free Travel Blazer & Chinos',
      subtitle: 'Technical stretch travel blazer with breathable knit shirt',
      occasion: 'Travel Outing',
      vibe: 'Modern Business',
      matchScore: 97,
      description: 'Wrinkle-resistant technical tailoring designed to arrive at international meetings looking crisp and freshly pressed.',
      imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Travel Suit',
          caption: 'Technical stretch crease-resistant blazer paired with clean chinos'
        },
        {
          url: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=80',
          label: 'Trench Layer',
          caption: 'Lightweight packable shell worn over technical blazer'
        }
      ],
      relatedLooks: [
        {
          title: 'Packable Tech Blazer',
          imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Modern Business'
        }
      ],
      colorPalette: ['#0B0D12', '#260058', '#FFADE3', '#D2BCFA'],
      stylingTips: [
        'Pack flat in cabin luggage without fear of creasing',
        'Wear with lightweight cushioned derby shoes'
      ],
      items: [
        {
          id: 'item-to-mb-1',
          name: 'Packable Tech Travel Blazer',
          brand: 'Sacai',
          retailer: 'SSENSE',
          image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Wrinkle-resistant technical stretch nylon-spandex blend',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['S', 'M', 'L']
        }
      ]
    }
  ],

  // ==========================================
  // 20. Travel Outing - Trendy Streetwear
  // ==========================================
  'Travel Outing-Trendy Streetwear': [
    {
      id: 'to-ts-1',
      title: 'Technical Flight Windbreaker & Utility Pants',
      subtitle: 'Water-resistant hooded windbreaker with multi-pocket trousers',
      occasion: 'Travel Outing',
      vibe: 'Trendy Streetwear',
      matchScore: 98,
      description: 'Utilitarian travel gear with lightweight nylon shells, zip security pockets, and responsive trail runners.',
      imageUrl: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1000&q=80',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1000&q=80',
          label: 'Full Street Gear',
          caption: 'Technical hooded flight windbreaker with modular zip compartments'
        },
        {
          url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80',
          label: 'Urban Flight Silhouette',
          caption: 'Cropped utility layer with high-rise cargo trousers'
        },
        {
          url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          label: 'Travel Transit Layer',
          caption: 'Paired with trail running sneakers and crossbody tech bag'
        }
      ],
      relatedLooks: [
        {
          title: 'Technical Flight Windbreaker',
          imageUrl: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=600&q=80',
          vibeTag: 'Trendy Streetwear'
        }
      ],
      colorPalette: ['#1A102E', '#2A1B4D', '#B7A4D8', '#F2C94C'],
      stylingTips: [
        'Adjust the hood bungee toggles for windy weather',
        'Pair with technical trail sneakers'
      ],
      items: [
        {
          id: 'item-to-ts-1',
          name: 'Technical Shell Windbreaker',
          brand: 'Sacai',
          retailer: 'FARFETCH',
          image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80',
          galleryImages: ['https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80'],
          fabricNote: 'Ultralight ripstop nylon with DWR waterproof coating',
          category: 'outerwear',
          inStock: true,
          sizeAvailable: ['M', 'L']
        }
      ]
    }
  ]
};
