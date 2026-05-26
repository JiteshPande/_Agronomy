import type { Product, BlogPost, TeamMember, Testimonial, Job, Industry } from './types'

export const PRODUCTS: Product[] = [
  {
    slug: 'industrial-grade-sulfuric-acid',
    name: 'Industrial Grade Sulfuric Acid',
    category: 'Industrial Chemicals',
    shortDescription: 'High-purity sulfuric acid for industrial applications with 98% concentration.',
    fullDescription: 'Our industrial grade sulfuric acid offers exceptional purity and consistency for demanding manufacturing processes. Produced under strict quality controls with ISO 9001 certification, this product meets the highest industry standards for concentration, color, and heavy metal content.',
    image: '#1a3d6e',
    specifications: {
      'Concentration': '98% min',
      'Appearance': 'Clear colorless liquid',
      'Specific Gravity': '1.84 g/mL',
      'Iron Content': '≤ 5 ppm',
      'CAS Number': '7664-93-9',
      'UN Number': 'UN1830',
    },
    applications: ['Fertilizer manufacturing', 'Metal pickling', 'Battery acid', 'Petroleum refining', 'Chemical synthesis'],
    packaging: ['30 kg carboys', '250 kg drums', 'ISO tank containers', 'Bulk tankers'],
    safetyInfo: 'Corrosive. Use PPE including acid-resistant gloves, goggles, and face shield. Store in a cool, dry, well-ventilated area away from organic materials.',
    relatedSlugs: ['sodium-hydroxide-flakes', 'hydrogen-peroxide-35'],
    featured: true,
    casNumber: '7664-93-9',
  },
  {
    slug: 'sodium-hydroxide-flakes',
    name: 'Sodium Hydroxide Flakes',
    category: 'Industrial Chemicals',
    shortDescription: 'Premium caustic soda flakes with 99% purity for chemical and industrial use.',
    fullDescription: 'NovaChem sodium hydroxide flakes are manufactured to the highest purity standards, making them ideal for soap manufacturing, water treatment, and chemical synthesis. Our production process ensures consistent flake size and excellent solubility.',
    image: '#1e4d8c',
    specifications: {
      'Purity': '99% min',
      'Form': 'White flakes',
      'Iron Content': '≤ 10 ppm',
      'Carbonate': '≤ 0.5%',
      'CAS Number': '1310-73-2',
      'Moisture': '≤ 0.5%',
    },
    applications: ['Soap & detergent production', 'Water treatment', 'Pulp & paper industry', 'Textile processing', 'Food-grade applications'],
    packaging: ['25 kg bags', '500 kg jumbo bags', '1000 kg super sacks', 'Bulk'],
    safetyInfo: 'Strong alkali. Causes severe burns. Wear chemical-resistant PPE. Store in sealed containers away from acids and moisture.',
    relatedSlugs: ['industrial-grade-sulfuric-acid', 'water-treatment-aluminum-sulfate'],
    featured: true,
    casNumber: '1310-73-2',
  },
  {
    slug: 'hydrogen-peroxide-35',
    name: 'Hydrogen Peroxide 35%',
    category: 'Industrial Chemicals',
    shortDescription: 'Technical grade hydrogen peroxide for bleaching, disinfection, and oxidation.',
    fullDescription: 'Our 35% hydrogen peroxide solution delivers consistent performance across textile bleaching, paper industry, and water treatment applications. Stabilized for extended shelf life while maintaining peak oxidizing power.',
    image: '#0f4c75',
    specifications: {
      'Concentration': '35% ± 0.5%',
      'Appearance': 'Clear colorless',
      'Stabilizer': 'Present',
      'Iron': '≤ 0.5 ppm',
      'CAS Number': '7722-84-1',
      'pH': '2.0 – 4.5',
    },
    applications: ['Textile bleaching', 'Paper pulp bleaching', 'Disinfection', 'Wastewater treatment', 'Chemical synthesis'],
    packaging: ['30 kg carboys', '250 kg drums', '1000 L IBC'],
    safetyInfo: 'Oxidizer and irritant. Keep away from combustibles. Store in a cool, well-ventilated area. Use HDPE containers only.',
    relatedSlugs: ['water-treatment-aluminum-sulfate', 'poly-aluminum-chloride'],
    featured: false,
    casNumber: '7722-84-1',
  },
  {
    slug: 'potassium-humate-granules',
    name: 'Potassium Humate Granules',
    category: 'Soil Conditioners',
    shortDescription: 'Premium humic acid soil conditioner derived from leonardite for enhanced crop yield.',
    fullDescription: 'Our potassium humate granules are derived from premium leonardite deposits and processed to maximize humic acid concentration. They improve soil structure, enhance nutrient absorption, and stimulate microbial activity for superior agricultural results.',
    image: '#3d5a2a',
    specifications: {
      'Humic Acid': '70% min',
      'Potassium (K₂O)': '12% min',
      'Form': 'Shiny black granules',
      'Solubility': '95% in water',
      'pH': '9.0 – 11.0',
      'Moisture': '≤ 15%',
    },
    applications: ['Soil amendment', 'Fertigation systems', 'Compost accelerator', 'Seed coating', 'Hydroponic growing media'],
    packaging: ['1 kg sachets', '5 kg bags', '25 kg bags', '1000 kg jumbo bags'],
    safetyInfo: 'Non-hazardous. Store in cool, dry conditions. Keep away from moisture to prevent caking.',
    relatedSlugs: ['zinc-sulfate-monohydrate', 'npk-fertilizer-19-19-19'],
    featured: true,
    casNumber: '68514-28-3',
  },
  {
    slug: 'zinc-sulfate-monohydrate',
    name: 'Zinc Sulfate Monohydrate',
    category: 'Agro Chemicals',
    shortDescription: 'High-purity zinc sulfate for micronutrient correction in crops and animal feed.',
    fullDescription: 'NovaChem zinc sulfate monohydrate provides highly bioavailable zinc for correcting zinc deficiency in soils and crops. Manufactured with food-grade purity standards, it is also suitable for animal feed supplements and pharmaceutical applications.',
    image: '#5c8a6e',
    specifications: {
      'Zinc Content': '33% min',
      'Purity': '98% min',
      'Form': 'White powder/granules',
      'Water Solubility': 'Fully soluble',
      'CAS Number': '7446-19-7',
      'Moisture': '≤ 3%',
    },
    applications: ['Foliar spray', 'Soil application', 'Fertigation', 'Animal feed supplement', 'Pharmaceutical manufacturing'],
    packaging: ['25 kg bags', '50 kg bags', '500 kg jumbo bags'],
    safetyInfo: 'Irritant. Avoid inhalation of dust. Use protective gloves and eyewear when handling bulk quantities.',
    relatedSlugs: ['potassium-humate-granules', 'npk-fertilizer-19-19-19'],
    featured: false,
    casNumber: '7446-19-7',
  },
  {
    slug: 'npk-fertilizer-19-19-19',
    name: 'NPK Fertilizer 19-19-19',
    category: 'Agro Chemicals',
    shortDescription: 'Balanced water-soluble NPK fertilizer for foliar and fertigation applications.',
    fullDescription: 'Our NPK 19-19-19 fully water-soluble fertilizer delivers perfectly balanced macronutrient nutrition for all crops. Enhanced with micronutrients and chelated trace elements, it delivers measurable yield improvements across diverse agricultural systems.',
    image: '#2d6a4f',
    specifications: {
      'Nitrogen (N)': '19%',
      'Phosphorus (P₂O₅)': '19%',
      'Potassium (K₂O)': '19%',
      'Form': 'White crystalline powder',
      'Solubility': 'Fully soluble',
      'Chloride': '≤ 0.3%',
    },
    applications: ['Foliar application', 'Drip irrigation', 'Hydroponic systems', 'Greenhouse crops', 'Open field fertigation'],
    packaging: ['1 kg', '5 kg', '25 kg bags', '500 kg bags'],
    safetyInfo: 'Keep away from heat and oxidizing agents. Store in cool, dry place. Non-hazardous under normal use conditions.',
    relatedSlugs: ['potassium-humate-granules', 'zinc-sulfate-monohydrate'],
    featured: true,
    casNumber: 'Mixture',
  },
  {
    slug: 'water-treatment-aluminum-sulfate',
    name: 'Aluminum Sulfate (Alum)',
    category: 'Water Treatment',
    shortDescription: 'Technical grade aluminum sulfate for municipal and industrial water treatment.',
    fullDescription: 'Our aluminum sulfate is the industry benchmark for water coagulation and clarification. Suitable for drinking water treatment, wastewater processing, and paper manufacturing, it delivers reliable turbidity removal and pH adjustment.',
    image: '#1e5f8f',
    specifications: {
      'Al₂(SO₄)₃ Content': '17% Al₂O₃ equivalent',
      'Iron': '≤ 0.005%',
      'Basicity': '< 1%',
      'Form': 'Granules or lump',
      'CAS Number': '10043-01-3',
      'pH (1% solution)': '3.0 – 4.0',
    },
    applications: ['Drinking water treatment', 'Wastewater clarification', 'Swimming pool water', 'Paper sizing', 'Soil pH adjustment'],
    packaging: ['25 kg bags', '50 kg bags', '1000 kg jumbo bags', 'Bulk'],
    safetyInfo: 'Acidic material. Avoid contact with eyes and skin. Use PPE. Keep away from alkalis and strong bases.',
    relatedSlugs: ['poly-aluminum-chloride', 'sodium-hydroxide-flakes'],
    featured: false,
    casNumber: '10043-01-3',
  },
  {
    slug: 'poly-aluminum-chloride',
    name: 'Poly Aluminum Chloride (PAC)',
    category: 'Water Treatment',
    shortDescription: 'High-basicity PAC coagulant for superior water clarity in treatment plants.',
    fullDescription: 'NovaChem PAC delivers exceptional coagulation performance across a wider pH range than conventional alum. Its higher basicity reduces sludge volume and improves settling rates, making it the preferred choice for modern water treatment facilities.',
    image: '#1a4d7a',
    specifications: {
      'Al₂O₃ Content': '30% min',
      'Basicity': '70–85%',
      'Iron': '≤ 20 ppm',
      'Form': 'Yellow powder',
      'CAS Number': '1327-41-9',
      'pH (1% solution)': '3.5 – 5.0',
    },
    applications: ['Municipal water treatment', 'Industrial effluent', 'Paper manufacturing', 'Textile wastewater', 'Mine water treatment'],
    packaging: ['25 kg bags', '1000 kg jumbo bags', 'IBC totes', 'Bulk tanker'],
    safetyInfo: 'Irritant. Use gloves and eye protection. Store in dry conditions away from strong alkalis.',
    relatedSlugs: ['water-treatment-aluminum-sulfate', 'calcium-chloride-technical'],
    featured: true,
    casNumber: '1327-41-9',
  },
  {
    slug: 'calcium-chloride-technical',
    name: 'Calcium Chloride 77%',
    category: 'Specialty Chemicals',
    shortDescription: 'Technical grade calcium chloride for dust control, de-icing, and industrial processes.',
    fullDescription: 'Our calcium chloride 77% prills offer excellent hygroscopicity and fast dissolution for immediate performance. Widely used for road de-icing, dust suppression, concrete acceleration, and oil & gas applications.',
    image: '#6b3a2d',
    specifications: {
      'CaCl₂ Content': '77% min',
      'Form': 'White prills/flakes',
      'Magnesium': '≤ 0.3%',
      'Alkali Chlorides': '≤ 1.5%',
      'CAS Number': '10043-52-4',
      'Solubility': '745 g/L at 20°C',
    },
    applications: ['Road de-icing', 'Dust control', 'Concrete setting acceleration', 'Oil & gas drilling', 'Food processing (E509)'],
    packaging: ['25 kg bags', '1000 kg jumbo bags', 'Bulk'],
    safetyInfo: 'Irritant. Causes exothermic reaction with water. Avoid contact with eyes. Store away from moisture.',
    relatedSlugs: ['poly-aluminum-chloride', 'silica-gel-desiccant'],
    featured: false,
    casNumber: '10043-52-4',
  },
  {
    slug: 'silica-gel-desiccant',
    name: 'Silica Gel Desiccant',
    category: 'Specialty Chemicals',
    shortDescription: 'Type A silica gel beads for pharmaceutical, industrial, and packaging moisture control.',
    fullDescription: 'NovaChem silica gel offers superior moisture adsorption capacity with high regeneration efficiency. Available in white and indicating (blue to pink) grades, it is widely used in pharmaceutical packaging, electronics, and industrial storage.',
    image: '#5a5a7a',
    specifications: {
      'SiO₂ Content': '≥ 99%',
      'Type': 'Type A (non-indicating)',
      'Adsorption Capacity': '≥ 35% at 25°C/60% RH',
      'Bead Size': '2–5 mm',
      'CAS Number': '7631-86-9',
      'Bulk Density': '~750 g/L',
    },
    applications: ['Pharmaceutical packaging', 'Electronics protection', 'Food packaging', 'Industrial storage', 'Natural gas drying'],
    packaging: ['1 g – 1000 g sachets', '1 kg canisters', '25 kg drums'],
    safetyInfo: 'Non-toxic and non-hazardous. Keep dry before use. Avoid inhalation of fine dust.',
    relatedSlugs: ['calcium-chloride-technical', 'activated-carbon-granules'],
    featured: false,
    casNumber: '7631-86-9',
  },
  {
    slug: 'activated-carbon-granules',
    name: 'Activated Carbon Granules',
    category: 'Water Treatment',
    shortDescription: 'High surface area activated carbon for water purification and air treatment.',
    fullDescription: 'Our granular activated carbon (GAC) is manufactured from premium coconut shell and coal sources. With an exceptionally high BET surface area, it delivers superior adsorption performance for chlorine, VOCs, pesticides, and taste/odor compounds.',
    image: '#2a2a3a',
    specifications: {
      'Surface Area': '≥ 1000 m²/g',
      'Iodine Number': '≥ 1000 mg/g',
      'Ash Content': '≤ 5%',
      'Moisture': '≤ 5%',
      'Particle Size': '8×30 mesh',
      'CAS Number': '7440-44-0',
    },
    applications: ['Drinking water purification', 'Air purification', 'Solvent recovery', 'Gold recovery', 'Industrial gas treatment'],
    packaging: ['25 kg bags', '500 kg supersacks', 'Bulk'],
    safetyInfo: 'Combustible. Store away from open flames. Use dust mask when handling. Not a substitute for SCBA in confined spaces.',
    relatedSlugs: ['water-treatment-aluminum-sulfate', 'poly-aluminum-chloride'],
    featured: false,
    casNumber: '7440-44-0',
  },
  {
    slug: 'ferrous-sulfate-heptahydrate',
    name: 'Ferrous Sulfate Heptahydrate',
    category: 'Industrial Chemicals',
    shortDescription: 'Technical grade iron(II) sulfate for water treatment, pigment, and agricultural use.',
    fullDescription: 'NovaChem ferrous sulfate heptahydrate is produced with consistent crystal size and high purity for reliable performance across water treatment, iron fortification, and agricultural applications. Available in both technical and food-grade specifications.',
    image: '#2d5016',
    specifications: {
      'FeSO₄·7H₂O': '98% min',
      'Form': 'Blue-green crystals',
      'Iron Content': '19.5% min',
      'Heavy Metals': '≤ 10 ppm',
      'CAS Number': '7782-63-0',
      'Moisture': 'Crystal water only',
    },
    applications: ['Water treatment (coagulant)', 'Soil iron supplementation', 'Ink and dye production', 'Cement coloring', 'Nutrition fortification'],
    packaging: ['25 kg bags', '50 kg bags', '1000 kg jumbo bags'],
    safetyInfo: 'Irritant. Avoid contact with eyes. Wash hands after handling. Store in dry conditions.',
    relatedSlugs: ['water-treatment-aluminum-sulfate', 'zinc-sulfate-monohydrate'],
    featured: false,
    casNumber: '7782-63-0',
  },
]

export const PRODUCT_CATEGORIES = [
  'All Products',
  'Industrial Chemicals',
  'Soil Conditioners',
  'Agro Chemicals',
  'Water Treatment',
  'Specialty Chemicals',
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'future-of-sustainable-chemical-manufacturing',
    title: 'The Future of Sustainable Chemical Manufacturing in 2026',
    excerpt: 'How leading chemical manufacturers are adopting green chemistry principles, renewable feedstocks, and circular economy models to reduce environmental impact while maintaining competitiveness.',
    content: `The chemical industry is undergoing a profound transformation. Driven by regulatory pressure, investor expectations, and genuine commitment to environmental stewardship, leading manufacturers are reinventing their production processes from the ground up.

**Green Chemistry Principles in Practice**

The twelve principles of green chemistry, first articulated by Anastas and Warner in 1998, are finally finding widespread industrial adoption. NovaChem has implemented atom economy optimization across its sulfuric acid production, reducing waste by 34% while improving yield.

**Renewable Feedstocks**

Bio-based feedstocks are no longer a niche curiosity. Fatty acids from agricultural waste, bioethanol from cellulose, and CO₂ capture technologies are all entering commercial-scale production. The economics are rapidly improving: renewable feedstock costs have fallen 60% in five years.

**Circular Economy Integration**

Perhaps the most significant shift is the move toward circularity. Closed-loop water treatment systems, solvent recovery programs, and product take-back schemes are becoming standard practice among leading chemical companies.

The companies that embrace this transformation will define the industry for the next 30 years.`,
    category: 'Sustainability',
    author: 'Dr. Arun Sharma',
    authorRole: 'Chief Technology Officer',
    date: '2026-04-15',
    readTime: 8,
    tags: ['Sustainability', 'Green Chemistry', 'Innovation', 'Manufacturing'],
    featured: true,
  },
  {
    slug: 'role-of-soil-conditioners-in-modern-agriculture',
    title: 'How Humic Acid Transforms Modern Agricultural Productivity',
    excerpt: 'A deep dive into the science behind humate-based soil conditioners and how they improve soil structure, nutrient availability, and microbial ecosystems for dramatically better crop yields.',
    content: `Soil health has emerged as the defining challenge of 21st-century agriculture. Decades of intensive chemical farming have depleted organic matter, disrupted microbial communities, and reduced soil's capacity to hold water and nutrients.

**The Science of Humic Substances**

Humic acids are the ultimate product of organic matter decomposition. These complex polymeric molecules interact with soil minerals, clay particles, and plant roots in ways that dramatically improve growing conditions. Studies consistently show 15–25% yield improvements when humate products are correctly applied.

**Chelation and Nutrient Availability**

One of the most important properties of humate is its ability to chelate micronutrients. By forming stable complexes with iron, zinc, manganese, and copper, humates prevent these nutrients from becoming locked in insoluble forms and make them available for plant uptake across a wide pH range.

**Building Microbial Ecosystems**

Healthy soil contains billions of microorganisms per gram. Humic acids provide the carbon skeleton that feeds diverse microbial communities, from bacteria and fungi to protozoa and nematodes. These organisms drive nutrient cycling, disease suppression, and root development.`,
    category: 'Agriculture',
    author: 'Dr. Priya Nair',
    authorRole: 'Head of Agro Sciences',
    date: '2026-03-22',
    readTime: 7,
    tags: ['Agriculture', 'Soil Health', 'Humic Acid', 'Crop Science'],
    featured: true,
  },
  {
    slug: 'water-treatment-innovations-2026',
    title: 'Water Treatment Innovations Shaping Global Infrastructure in 2026',
    excerpt: 'From advanced coagulation chemistry to membrane bioreactors and AI-driven dosing control, water treatment technology is advancing faster than at any point in the past century.',
    content: `Access to clean water is increasingly recognized as the defining infrastructure challenge of our era. With 2 billion people still lacking safely managed drinking water services, the urgency for better treatment technologies has never been greater.

**Next-Generation Coagulation Chemistry**

Traditional aluminum and iron-based coagulants are being enhanced with polymer bridges and organic coagulation aids that deliver performance at dramatically lower doses. NovaChem's research program has developed a PAC formulation that achieves equivalent turbidity removal at 40% lower chemical dose than conventional products.

**Membrane Technology Breakthroughs**

Membrane bioreactors (MBRs) combining biological treatment with membrane filtration are achieving 99.9% pathogen removal in compact footprints. New anti-fouling membrane materials are extending cleaning cycles and reducing operational costs.

**AI-Driven Process Control**

Machine learning algorithms now optimize coagulant dosing in real-time, responding to changes in raw water turbidity, temperature, pH, and flow rate. Pilot installations have demonstrated 20–30% reduction in chemical consumption alongside improved final water quality.`,
    category: 'Water Treatment',
    author: 'Rajesh Kumar',
    authorRole: 'Water Treatment Division Head',
    date: '2026-02-10',
    readTime: 6,
    tags: ['Water Treatment', 'Innovation', 'PAC', 'Technology'],
    featured: false,
  },
  {
    slug: 'safety-protocols-chemical-handling',
    title: 'Best Practices for Chemical Storage and Handling Safety',
    excerpt: 'A comprehensive guide to implementing world-class safety protocols in chemical storage facilities, from segregation principles and emergency response to digital safety management systems.',
    content: `Chemical safety is not just a regulatory obligation — it is a moral imperative and a business necessity. Facilities that invest in robust safety systems consistently outperform in productivity, employee retention, and insurance costs.

**Chemical Segregation Principles**

The cornerstone of chemical storage safety is proper segregation. Incompatible chemicals must never be stored in proximity. A comprehensive compatibility matrix, maintained and reviewed quarterly, is essential for any facility handling multiple chemical streams.

**Emergency Response Planning**

Every site must maintain current Safety Data Sheets (SDS) and train all personnel in emergency procedures including spill containment, evacuation, and first aid for chemical exposure. Tabletop exercises and annual drills keep these skills sharp.

**Digital Safety Management**

Modern chemical facilities are deploying digital safety management platforms that track inventory in real-time, automate SDS updates, schedule safety audits, and provide instant access to emergency procedures via mobile devices. The ROI on these systems typically exceeds 300% within three years.`,
    category: 'Safety',
    author: 'Meena Iyer',
    authorRole: 'HSE Manager',
    date: '2026-01-28',
    readTime: 5,
    tags: ['Safety', 'HSE', 'Compliance', 'Best Practices'],
    featured: false,
  },
  {
    slug: 'emerging-trends-specialty-chemicals',
    title: 'Emerging Trends in Specialty Chemicals for High-Tech Industries',
    excerpt: 'Electronic chemicals, biomedical materials, and advanced coatings are driving a new era of specialty chemical innovation that is redefining what is possible in electronics, healthcare, and aerospace.',
    content: `The specialty chemicals sector represents the highest-value segment of the chemical industry. These materials — characterized by specific performance properties rather than commodity volume — are at the heart of every high-technology industry.

**Electronic Chemicals**

The semiconductor industry's insatiable demand for sub-nanometer precision is driving extraordinary innovation in electronic chemicals. Ultra-high purity acids, precision etchants, and advanced photoresists are enabling the next generation of chip architectures.

**Biomedical Materials**

From drug delivery excipients to implant coatings and tissue engineering scaffolds, the convergence of chemistry and medicine is creating entirely new markets. Bio-compatible materials that can interface with living systems without triggering immune responses represent a multi-billion dollar opportunity.

**Advanced Functional Coatings**

Self-healing coatings, anti-icing surfaces, anti-fouling marine paints, and thermochromic smart materials are moving from laboratory curiosity to commercial products. The common thread is molecular engineering that delivers specific behaviors triggered by environmental stimuli.`,
    category: 'Industry Trends',
    author: 'Dr. Vikram Patel',
    authorRole: 'R&D Director',
    date: '2026-01-05',
    readTime: 9,
    tags: ['Specialty Chemicals', 'Innovation', 'Electronics', 'R&D'],
    featured: false,
  },
]

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Arvind Mehta', role: 'Chairman & Managing Director', department: 'Executive', bio: '35 years in chemical manufacturing, former President of Indian Chemical Council', initials: 'AM', color: '#0f2848' },
  { name: 'Dr. Arun Sharma', role: 'Chief Technology Officer', department: 'Technology', bio: 'Ph.D. in Chemical Engineering from IIT Bombay, 20+ patents in process chemistry', initials: 'AS', color: '#1a3d6e' },
  { name: 'Sunita Rao', role: 'Chief Financial Officer', department: 'Finance', bio: 'CA with 18 years in manufacturing finance, led 3 successful public offerings', initials: 'SR', color: '#f97316' },
  { name: 'Dr. Priya Nair', role: 'Head of Agro Sciences', department: 'R&D', bio: 'Ph.D. in Soil Science, 15 years of field research across 12 countries', initials: 'PN', color: '#06b6d4' },
  { name: 'Rajesh Kumar', role: 'VP Manufacturing', department: 'Operations', bio: 'Six Sigma Black Belt, transformed 4 manufacturing plants to world-class status', initials: 'RK', color: '#10b981' },
  { name: 'Anita Desai', role: 'VP Sales & Marketing', department: 'Commercial', bio: '20 years growing B2B chemical businesses across APAC, MEA and Europe', initials: 'AD', color: '#8b5cf6' },
]

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Suresh Patil', company: 'AgroVision Farms', role: 'Head of Agronomy', quote: 'Switching to NovaChem potassium humate transformed our soil health. Crop yields improved by 28% in the first season while input costs dropped significantly.', rating: 5, initials: 'SP' },
  { name: 'Pradeep Joshi', company: 'AquaPure Water Technologies', role: 'Chief Engineer', quote: 'The PAC formulation from NovaChem has been exceptional. Turbidity removal improved dramatically and we reduced our chemical dosing by 35%. Outstanding technical support.', rating: 5, initials: 'PJ' },
  { name: 'Maria Costa', company: 'EuroTex Fabrics', role: 'Production Director', quote: 'We have sourced sulfuric acid and caustic soda from NovaChem for 8 years. Consistent quality, on-time delivery, and their logistics team handles documentation flawlessly.', rating: 5, initials: 'MC' },
  { name: 'Ahmad Al-Rashid', company: 'Gulf Construction Group', role: 'Procurement Head', quote: 'Their calcium chloride is our go-to for concrete work across Gulf projects. Excellent product quality and the technical team\'s application guidance is genuinely valuable.', rating: 4, initials: 'AR' },
  { name: 'Jennifer Walsh', company: 'PharmaSynth Ireland', role: 'QA Director', quote: 'NovaChem\'s pharmaceutical-grade chemicals consistently pass our rigorous testing. Their documentation, CoA quality, and traceability give our regulatory team full confidence.', rating: 5, initials: 'JW' },
]

export const JOBS: Job[] = [
  {
    id: 'j001',
    title: 'Senior Chemical Engineer',
    department: 'Manufacturing',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '5–8 years',
    description: 'Lead process optimization and scale-up projects for our industrial chemicals manufacturing line.',
    requirements: ['B.Tech/M.Tech Chemical Engineering', '5+ years manufacturing experience', 'Experience with batch and continuous processes', 'Six Sigma certification preferred'],
    responsibilities: ['Optimize existing production processes', 'Lead scale-up of new product introductions', 'Develop and maintain process documentation', 'Mentor junior engineers'],
  },
  {
    id: 'j002',
    title: 'Application Agronomist',
    department: 'Agro Sciences',
    location: 'Pune, India',
    type: 'Full-time',
    experience: '3–5 years',
    description: 'Support farmers and distributors with technical guidance on NovaChem agro products and soil health solutions.',
    requirements: ['B.Sc./M.Sc. Agriculture or Agronomy', '3+ years field experience', 'Strong communication skills', 'Willingness to travel 40%'],
    responsibilities: ['Conduct field demonstrations and trials', 'Provide technical training to distributors', 'Develop application guides', 'Support marketing with technical content'],
  },
  {
    id: 'j003',
    title: 'Water Treatment Sales Manager',
    department: 'Sales',
    location: 'Delhi, India',
    type: 'Full-time',
    experience: '6–10 years',
    description: 'Drive revenue growth in the water treatment segment across Northern India, managing key accounts and developing new business.',
    requirements: ['Engineering degree preferred', '6+ years B2B sales experience', 'Water treatment industry knowledge', 'Track record of exceeding targets'],
    responsibilities: ['Manage key municipal and industrial accounts', 'Develop new business pipeline', 'Coordinate with technical team for solutions selling', 'Report market intelligence'],
  },
  {
    id: 'j004',
    title: 'Quality Assurance Chemist',
    department: 'Quality',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '2–4 years',
    description: 'Ensure product quality through rigorous testing, documentation, and continuous improvement initiatives.',
    requirements: ['B.Sc./M.Sc. Chemistry', '2+ years QA experience', 'Knowledge of ISO 9001', 'Proficiency in analytical instrumentation'],
    responsibilities: ['Perform incoming and outgoing QC testing', 'Maintain laboratory documentation', 'Support audits and certifications', 'Participate in root cause analysis'],
  },
  {
    id: 'j005',
    title: 'HSE Officer',
    department: 'Health, Safety & Environment',
    location: 'Vadodara, India',
    type: 'Full-time',
    experience: '3–5 years',
    description: 'Implement and maintain health, safety, and environmental management systems across manufacturing operations.',
    requirements: ['Degree in Engineering or Science', 'NEBOSH/IOSH certification', '3+ years HSE experience in chemical industry', 'Knowledge of REACH and GHS'],
    responsibilities: ['Conduct HSE audits and inspections', 'Investigate incidents and near misses', 'Deliver safety training programs', 'Maintain regulatory compliance records'],
  },
]

export const INDUSTRIES: Industry[] = [
  {
    slug: 'agriculture',
    name: 'Agriculture',
    description: 'Soil conditioners, micronutrients, and NPK fertilizers that boost crop yields and restore soil health for sustainable farming.',
    products: ['Potassium Humate Granules', 'NPK Fertilizer 19-19-19', 'Zinc Sulfate Monohydrate'],
    icon: 'leaf',
    color: '#2d6a4f',
  },
  {
    slug: 'water-treatment',
    name: 'Water Treatment',
    description: 'Advanced coagulants, flocculants, and treatment chemicals for municipal water systems and industrial effluent management.',
    products: ['Poly Aluminum Chloride', 'Aluminum Sulfate', 'Activated Carbon'],
    icon: 'droplet',
    color: '#0369a1',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    description: 'Industrial-grade acids, alkalis, and specialty chemicals supporting metal processing, glass, textiles, and general manufacturing.',
    products: ['Sulfuric Acid', 'Sodium Hydroxide Flakes', 'Hydrogen Peroxide'],
    icon: 'factory',
    color: '#0f2848',
  },
  {
    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    description: 'High-purity excipients, API intermediates, and reagent-grade chemicals meeting USP and EP pharmacopoeial standards.',
    products: ['Silica Gel Desiccant', 'Zinc Sulfate', 'Ferrous Sulfate'],
    icon: 'pill',
    color: '#7c3aed',
  },
  {
    slug: 'construction',
    name: 'Construction',
    description: 'Concrete accelerators, waterproofing agents, and surface treatment chemicals for modern construction projects.',
    products: ['Calcium Chloride', 'Ferrous Sulfate', 'Aluminum Sulfate'],
    icon: 'building',
    color: '#b45309',
  },
  {
    slug: 'textile',
    name: 'Textile',
    description: 'Bleaching agents, mordants, and process chemicals for dyeing, finishing, and treatment of natural and synthetic fibers.',
    products: ['Hydrogen Peroxide', 'Sodium Hydroxide', 'Ferrous Sulfate'],
    icon: 'scissors',
    color: '#be185d',
  },
]

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', description: 'Quality Management System', icon: 'award' },
  { name: 'ISO 14001:2015', description: 'Environmental Management', icon: 'leaf' },
  { name: 'ISO 45001:2018', description: 'Occupational Health & Safety', icon: 'shield' },
  { name: 'REACH Compliant', description: 'EU Chemical Regulations', icon: 'check-circle' },
  { name: 'GHS/SDS Compliant', description: 'Global Harmonized System', icon: 'file-text' },
  { name: 'BIS Certified', description: 'Bureau of Indian Standards', icon: 'star' },
]

export const COMPANY_STATS = [
  { label: 'Years of Excellence', value: 28, suffix: '+' },
  { label: 'Product Portfolio', value: 150, suffix: '+' },
  { label: 'Countries Served', value: 45, suffix: '+' },
  { label: 'Happy Clients', value: 2500, suffix: '+' },
]

export const TIMELINE_EVENTS = [
  { year: '1997', title: 'Company Founded', description: 'NovaChem Industries established in Mumbai with a vision to provide premium chemicals to Indian industry.' },
  { year: '2003', title: 'ISO 9001 Certification', description: 'Achieved quality management certification and expanded product portfolio to 50+ chemicals.' },
  { year: '2008', title: 'Export Division Launch', description: 'Began exports to Middle East, Southeast Asia, and Africa, establishing global distribution network.' },
  { year: '2012', title: 'New Manufacturing Plant', description: 'Inaugurated 50,000 sq. ft. state-of-the-art facility in Vadodara with automated production lines.' },
  { year: '2015', title: 'Agro Division Established', description: 'Launched dedicated soil conditioner and agro chemical division with on-site agronomist team.' },
  { year: '2019', title: 'Green Chemistry Initiative', description: 'Invested ₹25 Cr in renewable energy and waste reduction, achieving 40% carbon footprint reduction.' },
  { year: '2022', title: 'R&D Center Opening', description: 'State-of-the-art R&D facility inaugurated, housing 50 researchers developing next-gen chemical solutions.' },
  { year: '2025', title: '45 Countries', description: 'NovaChem products now reach 45 countries. Recognized as Best Specialty Chemical Company by CII.' },
]
