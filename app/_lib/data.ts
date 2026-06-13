import type { Product, BlogPost, TeamMember, Testimonial, Job, Industry } from './types'

// --- Product Catalogue ---
// To add a product: copy an entry, set a unique slug, fill fields, set featured: true for homepage.
// Add photo path + features[] (up to 5) for the hover arc overlay.
export const PRODUCTS: Product[] = [
  {
    slug: 'diatomite-silicon',
    name: 'Diatomite Silicon',
    category: 'Soil Conditioners',
    shortDescription: 'Natural amorphous silica from diatomaceous earth for soil conditioning, pest control, and crop nutrition.',
    fullDescription: 'Our Diatomite Silicon is derived from naturally occurring fossilised remains of diatoms — microscopic algae with silica cell walls. It delivers plant-available silicon to improve stem strength, stress tolerance, and natural pest resistance. Rich in trace minerals and highly porous, it also improves soil aeration, water retention, and beneficial microbial activity, making it a versatile amendment for all soil types.',
    image: '#2d5a1e',
    photo: '/assets/products/photos/diatomite-silicon.jpeg',
    photos: ['/assets/products/photos/diatomite-silicon.jpeg'],
    featureLabel: 'KEY SOIL BENEFITS',
    features: [
      { label: 'Silicon (SiO₂)', icon: '💎' },
      { label: 'Water Retention', icon: '💧' },
      { label: 'Pest Resistance', icon: '🛡️' },
      { label: 'Soil Aeration', icon: '🌬️' },
      { label: 'pH Stability', icon: '⚖️' },
    ],
    specifications: {
      'SiO₂ Content': '≥ 85%',
      'Form': 'Fine off-white powder',
      'Particle Size': '< 45 microns',
      'Moisture': '≤ 5%',
      'pH': '7.0 – 8.5',
      'Bulk Density': '200 – 350 g/L',
    },
    applications: ['Soil silicon supplementation', 'Organic pest control', 'Water retention improvement', 'Soil aeration', 'Foliar silicon spray'],
    applicationGuide: [
      { label: 'Soil Silicon Supplementation', stage: 'soil-prep', method: 'Base dressing', icon: '🌍' },
      { label: 'Organic Pest Control',         stage: 'growing',   method: 'Dust / spray application', icon: '🛡️' },
      { label: 'Water Retention Improvement',  stage: 'soil-prep', method: 'Soil incorporation', icon: '💧' },
      { label: 'Soil Aeration',                stage: 'soil-prep', method: 'Soil incorporation', icon: '🌬️' },
      { label: 'Foliar Silicon Spray',         stage: 'growing',   method: 'Foliar spray', icon: '🌿' },
    ],
    packaging: ['5 kg bags', '25 kg bags', '500 kg jumbo bags', 'Bulk'],
    safetyInfo: 'Non-toxic. Avoid prolonged inhalation of fine dust. Use a dust mask during handling. Store in a cool, dry location.',
    relatedSlugs: ['phosphate-rich-organic-manure', 'potash-derived-from-molasses'],
    featured: true,

  },
  {
    slug: 'phosphate-rich-organic-manure',
    name: 'Phosphate Rich Organic Manure',
    category: 'Agro Chemicals',
    shortDescription: 'Rock phosphate co-composted with organic matter for slow-release phosphorus nutrition in organic farming.',
    fullDescription: 'Phosphate Rich Organic Manure (PROM) is produced by co-composting rock phosphate with organic waste using phosphate-solubilising microorganisms. This biological process converts insoluble phosphate into plant-available forms while enriching the product with beneficial organic matter and microflora. Ideal for organic and integrated farming systems, it improves soil biology, root development, and phosphorus use efficiency.',
    image: '#4a2e0a',
    photo: '/assets/products/photos/prom.jpeg',
    photos: ['/assets/products/photos/prom.jpeg', '/assets/products/photos/phosphate-rich-organic-manure.jpeg'],
    featureLabel: 'RICH IN ESSENTIAL NUTRIENTS',
    features: [
      { label: 'Phosphorus (P₂O₅)', icon: '🌿' },
      { label: 'Nitrogen (N)', icon: '🌾' },
      { label: 'Potassium (K₂O)', icon: '🍃' },
      { label: 'Organic Matter', icon: '♻️' },
      { label: 'Sulfur (S)', icon: '⚗️' },
    ],
    specifications: {
      'Total P₂O₅': '≥ 10%',
      'Organic Carbon': '≥ 12%',
      'C:N Ratio': '≤ 20:1',
      'Moisture': '≤ 25%',
      'pH': '6.5 – 7.5',
      'Form': 'Granules / fine powder',
    },
    applications: ['Base dressing for all crops', 'Organic farming systems', 'Root zone phosphorus nutrition', 'Soil biology enhancement', 'Seed bed preparation'],
    applicationGuide: [
      { label: 'Base Dressing for All Crops',   stage: 'soil-prep',  method: 'Base dressing',           icon: '🌍' },
      { label: 'Organic Farming Systems',        stage: 'year-round', method: 'Mixed application',        icon: '♻️' },
      { label: 'Root Zone Phosphorus Nutrition', stage: 'planting',   method: 'Row / band application',   icon: '🌱' },
      { label: 'Soil Biology Enhancement',       stage: 'soil-prep',  method: 'Soil incorporation',       icon: '🦠' },
      { label: 'Seed Bed Preparation',           stage: 'soil-prep',  method: 'Soil incorporation',       icon: '🌾' },
    ],
    packaging: ['25 kg bags', '50 kg bags', '500 kg jumbo bags', 'Bulk'],
    safetyInfo: 'Non-hazardous organic product. Store in a cool, dry, covered area. Keep away from direct rain and moisture.',
    relatedSlugs: ['diatomite-silicon', 'potash-derived-from-molasses'],
    featured: true,
  },
  {
    slug: 'potash-derived-from-molasses',
    name: 'Potash Derived from Molasses',
    category: 'Agro Chemicals',
    shortDescription: 'Organic potassium source extracted from sugar cane molasses, rich in K₂O and natural growth factors.',
    fullDescription: 'Our Potash Derived from Molasses (PDM) is an organic-approved potassium fertilizer produced as a by-product of sugar cane processing. It delivers readily available potassium along with natural betaines, amino acids, and trace elements found in molasses. These co-nutrients support cell division, enzyme activity, and sugar translocation in crops, improving quality parameters like fruit size, colour, and shelf life alongside yield.',
    image: '#5c3300',
    photo: '/assets/products/photos/pdm.png',
    photos: ['/assets/products/photos/pdm.png', '/assets/products/photos/potash-derived-from-molasses.jpeg'],
    featureLabel: 'ORGANIC POTASSIUM SOURCE',
    features: [
      { label: 'Potassium (K₂O)', icon: '🍃' },
      { label: 'Organic Carbon', icon: '♻️' },
      { label: 'Betaines', icon: '🌱' },
      { label: 'Amino Acids', icon: '🔬' },
      { label: 'Trace Minerals', icon: '⚗️' },
    ],
    specifications: {
      'K₂O Content': '≥ 14%',
      'Organic Carbon': '≥ 20%',
      'Form': 'Dark brown granules / liquid',
      'Solubility': 'Fully soluble (liquid grade)',
      'pH': '5.5 – 7.0',
      'Moisture': '≤ 20% (granule)',
    },
    applications: ['Fertigation and drip irrigation', 'Foliar potassium application', 'Fruit and vegetable quality improvement', 'Sugarcane and banana crops', 'Organic certified programs'],
    applicationGuide: [
      { label: 'Fertigation & Drip Irrigation', stage: 'growing',    method: 'Drip / fertigation', icon: '💧' },
      { label: 'Foliar Potassium Application',  stage: 'growing',    method: 'Foliar spray',       icon: '🌿' },
      { label: 'Fruit & Vegetable Quality',     stage: 'harvest',    method: 'Foliar + drip',      icon: '🍎' },
      { label: 'Sugarcane & Banana Crops',      stage: 'growing',    method: 'Drip / soil drench', icon: '🌴' },
      { label: 'Organic Certified Programs',    stage: 'year-round', method: 'As directed',        icon: '♻️' },
    ],
    packaging: ['25 kg bags', '50 kg bags', '200 L drums (liquid)', '1000 L IBC (liquid)'],
    safetyInfo: 'Non-hazardous. Mild odour from organic content. Store away from direct sunlight. Reseal containers after use.',
    relatedSlugs: ['diatomite-silicon', 'phosphate-rich-organic-manure'],
    featured: true,
  },
  {
    slug: 'npk-compound-fertilizer',
    name: 'NPK Compound Fertilizer',
    category: 'Agro Chemicals',
    shortDescription: 'Balanced compound NPK granular fertilizer delivering nitrogen, phosphorus, and potassium in every granule.',
    fullDescription: 'Our NPK Compound Fertilizer (NPKC) is a granular compound fertilizer where each granule contains a precise, balanced ratio of nitrogen, phosphorus, and potassium. Unlike blended fertilizers, the compound manufacturing process ensures every granule delivers the same nutrient profile, resulting in uniform crop nutrition. Enhanced with essential secondary nutrients and micronutrients, it supports vigorous growth across all crop types and soil conditions.',
    image: '#1a4d15',
    photo: '/assets/products/photos/npkc.png',
    photos: ['/assets/products/photos/npkc.png'],
    featureLabel: 'COMPLETE CROP NUTRITION',
    features: [
      { label: 'Nitrogen (N)', icon: '🌾' },
      { label: 'Phosphorus (P₂O₅)', icon: '🌿' },
      { label: 'Potassium (K₂O)', icon: '🍃' },
      { label: 'Micronutrients', icon: '⚗️' },
      { label: 'Water Soluble', icon: '💧' },
    ],
    specifications: {
      'Nitrogen (N)': '14 – 20%',
      'Phosphorus (P₂O₅)': '14 – 20%',
      'Potassium (K₂O)': '14 – 20%',
      'Form': 'Uniform granules',
      'Solubility': 'Fully soluble',
      'Granule Size': '2 – 4 mm',
    },
    applications: ['Base dressing before sowing', 'Side dressing during growth', 'Fertigation systems', 'Greenhouse and nursery crops', 'Plantation crops'],
    applicationGuide: [
      { label: 'Base Dressing Before Sowing', stage: 'soil-prep', method: 'Broadcast & incorporate', icon: '🌍' },
      { label: 'Side Dressing',               stage: 'growing',   method: 'Band placement',         icon: '🌿' },
      { label: 'Fertigation Systems',         stage: 'growing',   method: 'Dissolved in water',     icon: '💧' },
      { label: 'Greenhouse Crops',            stage: 'year-round',method: 'As per crop schedule',   icon: '🏡' },
      { label: 'Plantation Crops',            stage: 'planting',  method: 'Ring placement',         icon: '🌴' },
    ],
    packaging: ['25 kg bags', '50 kg bags', '500 kg jumbo bags', 'Bulk'],
    safetyInfo: 'Keep away from heat and oxidising agents. Store in a cool, dry place in sealed packaging. Non-hazardous under normal use conditions.',
    relatedSlugs: ['phosphate-rich-organic-manure', 'potash-derived-from-molasses'],
    featured: true,
  },
  // ↓ Add more products here — set featured: true to show on homepage
]

export const PRODUCT_CATEGORIES = [
  'All Products',
  'Soil Conditioners',
  'Agro Chemicals',
  // ↓ Add new category strings here when new product categories are introduced
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
    color: '#25671E',
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
    color: '#2d7a24',
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
    color: '#c07d12',
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
