import type { SafariPackage, AddOn } from '$lib/types';

export const optionalAddOns: AddOn[] = [
  {
    id: 'balloon-safari',
    name: 'Hot Air Balloon Safari',
    description: 'Float over the Masai Mara at sunrise, followed by a champagne bush breakfast',
    price: 450,
    duration: '3-4 hours',
  },
  {
    id: 'maasai-village',
    name: 'Maasai Village Cultural Visit',
    description: 'Immerse yourself in traditional Maasai culture, dances, and craftsmanship',
    price: 80,
    duration: '2-3 hours',
  },
  {
    id: 'bush-dinner',
    name: 'Private Bush Dinner',
    description: 'Romantic candlelit dinner under the African stars with personal chef',
    price: 250,
    duration: 'Evening',
  },
  {
    id: 'photography-guide',
    name: 'Private Photography Guide',
    description: 'Expert wildlife photographer to help capture your perfect shots',
    price: 350,
    duration: 'Full day',
  },
  {
    id: 'night-drive',
    name: 'Night Game Drive',
    description: 'Spot nocturnal wildlife including leopards, hyenas, and aardvarks',
    price: 95,
    duration: '3 hours',
  },
];

export const safariPackages: SafariPackage[] = [
  {
    id: 'kenya-classic-7',
    slug: 'kenya-classic-safari',
    name: 'Kenya Classic Safari',
    tagline: 'The quintessential East African adventure',
    duration: 7,
    description: `Experience the magic of Kenya on this carefully curated journey through the country's most iconic landscapes. From the flamingo-lined shores of Lake Nakuru to the endless golden plains of the Masai Mara, witness the extraordinary diversity of wildlife that makes Kenya the birthplace of the safari.

This journey combines exceptional game viewing with authentic cultural encounters and stays in handpicked lodges that blend seamlessly into their surroundings. Travel in custom 4x4 vehicles with pop-up roofs, accompanied by expert guides who bring the bush to life with their encyclopedic knowledge.

Adventure by day, comfort by night — this is safari as it should be.`,
    heroImage: '/ak-forest.webp',
    galleryImages: [
      '/ak-guide.webp',
      '/ak-nile.webp',
      '/ak-japan.webp',
      '/ak-morocco.webp',
    ],
    startingPrice: 2450,
    pricePerPerson: 2450,
    currency: 'USD',
    difficulty: 'easy',
    groupSize: { min: 2, max: 6 },
    category: 'classic',
    featured: true,
    bestTime: 'July to October (Great Migration)',
    destinations: ['Nairobi', 'Lake Nakuru', 'Masai Mara'],
    highlights: [
      'Witness the Big Five in their natural habitat',
      'Experience the Great Migration (seasonal)',
      'Stay in award-winning eco-lodges',
      'Expert Maasai guides with intimate bush knowledge',
      'Sunset game drives with sundowner cocktails',
      'Visit a local Maasai community',
    ],
    included: [
      'All accommodations as per itinerary',
      'Full board meals at lodges and camps',
      'Private 4x4 safari vehicle with pop-up roof',
      'Professional English-speaking guide',
      'All park entrance and conservancy fees',
      'Airport transfers and meet & greet',
      'Bottled water during game drives',
      'Flying Doctors emergency evacuation cover',
      '24/7 WhatsApp support throughout your journey',
    ],
    excluded: [
      'International flights',
      'Travel insurance (required)',
      'Kenya eVisa ($50)',
      'Tips and gratuities',
      'Personal expenses and souvenirs',
      'Optional activities',
      'Alcoholic beverages',
    ],
    optionalAddOns,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Nairobi',
        location: 'Nairobi',
        description: `Your Kenyan adventure begins the moment you land at Jomo Kenyatta International Airport. Our representative will greet you with a warm "Karibu" (welcome) and transfer you to your hotel in the leafy Karen suburb.

Named after Karen Blixen of "Out of Africa" fame, this is where Nairobi's colonial history meets modern luxury. Settle into your elegant accommodations and, if time permits, visit the nearby Giraffe Centre or Karen Blixen Museum.

In the evening, join your guide for a welcome dinner briefing where you'll learn about the adventures ahead.`,
        highlights: [
          'Airport meet & greet with flower garland',
          'Transfer through Nairobi\'s green suburbs',
          'Optional: Giraffe Centre visit',
          'Welcome dinner briefing with your guide',
        ],
        image: '/ak-japan.webp',
        accommodation: {
          name: 'Hemingways Nairobi',
          type: 'boutique',
          image: '/ak-nile.webp',
          rating: 4.8,
          description: 'A plantation-style boutique hotel offering old-world elegance with modern luxury.',
          amenities: ['Pool', 'Spa', 'Fine Dining', 'Garden', 'WiFi'],
          pricePerNight: 280,
        },
        meals: ['dinner'],
        activities: [
          { name: 'Airport Transfer', duration: '45 mins', included: true },
          { name: 'Welcome Briefing', duration: '30 mins', included: true },
          { name: 'Giraffe Centre Visit', duration: '2 hours', included: false, price: 35 },
        ],
        travelInfo: {
          from: 'JKIA Airport',
          to: 'Karen, Nairobi',
          duration: '45 minutes',
          method: 'transfer',
        },
      },
      {
        day: 2,
        title: 'Lake Nakuru National Park',
        location: 'Lake Nakuru',
        description: `After an early breakfast, drive north through the Great Rift Valley. Stop at the escarpment viewpoint where the valley stretches endlessly before you — a landscape so vast it can be seen from space.

Descend into Lake Nakuru National Park, a soda lake famous for its flamingo populations and exceptional rhino sanctuary. This compact park offers some of the best rhino viewing in Africa, with both black and white rhinos regularly spotted.

Keep your eyes peeled for the park's famous tree-climbing lions — a rare behavior that makes this population unique.`,
        highlights: [
          'Great Rift Valley viewpoint stop',
          'Flamingo-lined alkaline lake',
          'Black and white rhino tracking',
          'Tree-climbing lions',
          'Afternoon game drive',
        ],
        image: '/ak-guide.webp',
        accommodation: {
          name: 'Sarova Lion Hill Lodge',
          type: 'lodge',
          image: '/ak-morocco.webp',
          rating: 4.5,
          description: 'Perched on a hill overlooking Lake Nakuru with panoramic views.',
          amenities: ['Pool', 'Restaurant', 'Bar', 'Terrace', 'WiFi'],
          pricePerNight: 220,
        },
        meals: ['breakfast', 'lunch', 'dinner'],
        activities: [
          { name: 'Scenic Drive to Lake Nakuru', duration: '4 hours', included: true },
          { name: 'Afternoon Game Drive', duration: '3 hours', included: true },
          { name: 'Rhino Tracking', duration: 'Included', included: true },
        ],
        travelInfo: {
          from: 'Nairobi',
          to: 'Lake Nakuru',
          duration: '4 hours',
          method: 'drive',
        },
      },
      {
        day: 3,
        title: 'Journey to Masai Mara',
        location: 'Masai Mara',
        description: `Today's journey takes you deeper into the wild heart of Kenya. Drive southwest through stunning Rift Valley landscapes, gradually descending onto the vast plains that herald the legendary Masai Mara.

Named after the Maasai people and the Mara River, this is one of Africa's greatest wildlife reserves. Arrive at your luxury tented camp in time for an evening game drive as the savanna glows golden in the setting sun.

Tonight, fall asleep to the sounds of the African bush — lions roaring, hyenas calling, and the rustle of wildlife passing through camp.`,
        highlights: [
          'Scenic drive through Rift Valley',
          'First glimpse of the endless Mara plains',
          'Evening game drive at golden hour',
          'Sundowner drinks in the bush',
          'Night sounds of the African wilderness',
        ],
        image: '/ak-forest.webp',
        accommodation: {
          name: 'Basecamp Masai Mara',
          type: 'tented-camp',
          image: '/ak-nile.webp',
          rating: 4.7,
          description: 'Eco-friendly tented camp on the banks of the Talek River.',
          amenities: ['En-suite Tent', 'Bush Dining', 'Campfire', 'River View'],
          pricePerNight: 380,
        },
        meals: ['breakfast', 'lunch', 'dinner'],
        activities: [
          { name: 'Scenic Transfer to Mara', duration: '5-6 hours', included: true },
          { name: 'Evening Game Drive', duration: '3 hours', included: true },
          { name: 'Bush Sundowner', duration: '1 hour', included: true },
        ],
        travelInfo: {
          from: 'Lake Nakuru',
          to: 'Masai Mara',
          duration: '5-6 hours',
          method: 'drive',
        },
      },
      {
        day: 4,
        title: 'Full Day Masai Mara Safari',
        location: 'Masai Mara',
        description: `A full day to explore the legendary Masai Mara. Set out early when predators are most active, following your guide's expert tracking to find lions, cheetahs, and leopards. The Mara is home to one of the highest concentrations of big cats in Africa.

Return to camp for lunch and relaxation during the heat of the day. The afternoon drive reveals different characters — elephants at waterholes, hippos in the Mara River, and perhaps the elusive leopard draped across an acacia branch.

As the sun sets, find a perfect spot for sundowners overlooking the vast plains.`,
        highlights: [
          'Early morning Big Cat tracking',
          'Hippo pools and crocodile sightings',
          'Elephant herds crossing the plains',
          'Optional Maasai village visit',
          'Spectacular African sunset',
        ],
        image: '/ak-guide.webp',
        accommodation: {
          name: 'Basecamp Masai Mara',
          type: 'tented-camp',
          image: '/ak-nile.webp',
          rating: 4.7,
          description: 'Eco-friendly tented camp on the banks of the Talek River.',
          amenities: ['En-suite Tent', 'Bush Dining', 'Campfire', 'River View'],
          pricePerNight: 380,
        },
        meals: ['breakfast', 'lunch', 'dinner'],
        activities: [
          { name: 'Early Morning Game Drive', duration: '4 hours', included: true },
          { name: 'Afternoon Game Drive', duration: '4 hours', included: true },
          { name: 'Maasai Village Visit', duration: '2 hours', included: false, price: 80 },
        ],
      },
      {
        day: 5,
        title: 'Mara River & Migration',
        location: 'Masai Mara',
        description: `Today focuses on the famous Mara River — lifeline of this ecosystem and stage for one of nature's greatest spectacles. During migration season (July-October), millions of wildebeest cross these crocodile-infested waters.

Even outside migration, the riverine forest teems with wildlife. Look for leopards lounging in fig trees, monitor lizards, and colorful kingfishers. The river itself hosts massive Nile crocodiles and pods of territorial hippos.

Enjoy a picnic lunch in the bush, surrounded by the sights and sounds of wild Africa.`,
        highlights: [
          'Mara River exploration',
          'Hippo and crocodile watching',
          'River crossing (seasonal)',
          'Riverine forest wildlife',
          'Picnic lunch in the bush',
        ],
        image: '/ak-nile.webp',
        accommodation: {
          name: 'Basecamp Masai Mara',
          type: 'tented-camp',
          image: '/ak-nile.webp',
          rating: 4.7,
          description: 'Eco-friendly tented camp on the banks of the Talek River.',
          amenities: ['En-suite Tent', 'Bush Dining', 'Campfire', 'River View'],
          pricePerNight: 380,
        },
        meals: ['breakfast', 'lunch', 'dinner'],
        activities: [
          { name: 'Full Day Mara River Safari', duration: '8 hours', included: true },
          { name: 'Bush Picnic Lunch', duration: '1 hour', included: true },
          { name: 'Hot Air Balloon Safari', duration: '4 hours', included: false, price: 450 },
        ],
      },
      {
        day: 6,
        title: 'Mara to Nairobi',
        location: 'Nairobi',
        description: `Enjoy a final early morning game drive — your last chance to spot any animals that have eluded you. The early light is magical, painting the savanna in shades of gold and pink.

After breakfast, bid farewell to the Mara and begin the scenic drive back to Nairobi. Arrive in the late afternoon with time to freshen up before a farewell dinner.

Over dinner, share stories and photos with your guide, reflecting on an incredible week in the African bush.`,
        highlights: [
          'Final sunrise game drive',
          'Scenic return journey',
          'Optional city tour or shopping',
          'Farewell dinner celebration',
        ],
        image: '/ak-morocco.webp',
        accommodation: {
          name: 'Ole Sereni Hotel',
          type: 'hotel',
          image: '/ak-japan.webp',
          rating: 4.4,
          description: 'The only hotel overlooking Nairobi National Park.',
          amenities: ['Pool', 'Spa', 'Restaurant', 'Park Views', 'WiFi'],
          pricePerNight: 180,
        },
        meals: ['breakfast', 'lunch', 'dinner'],
        activities: [
          { name: 'Morning Game Drive', duration: '3 hours', included: true },
          { name: 'Return to Nairobi', duration: '5-6 hours', included: true },
          { name: 'Farewell Dinner', duration: '2 hours', included: true },
        ],
        travelInfo: {
          from: 'Masai Mara',
          to: 'Nairobi',
          duration: '5-6 hours',
          method: 'drive',
        },
      },
      {
        day: 7,
        title: 'Departure',
        location: 'Nairobi',
        description: `Your Kenyan adventure concludes today. Depending on your flight time, enjoy a leisurely breakfast overlooking wildlife in Nairobi National Park — a surreal sight with the city skyline in the background.

Our driver will transfer you to Jomo Kenyatta International Airport in plenty of time for your departure.

Kwaheri — until your next African adventure!`,
        highlights: [
          'Leisurely breakfast with park views',
          'Optional shopping at Kazuri Beads',
          'Airport transfer',
        ],
        image: '/ak-guide.webp',
        accommodation: {
          name: 'Day Room Available',
          type: 'hotel',
          image: '/ak-japan.webp',
          rating: 4.4,
          description: 'Day room available for freshening up before your flight.',
          amenities: ['Day Room', 'Pool Access'],
          pricePerNight: 0,
        },
        meals: ['breakfast'],
        activities: [
          { name: 'Airport Transfer', duration: '45 mins', included: true },
        ],
        travelInfo: {
          from: 'Nairobi Hotel',
          to: 'JKIA Airport',
          duration: '45 minutes',
          method: 'transfer',
        },
      },
    ],
  },
];

export function getPackageBySlug(slug: string): SafariPackage | undefined {
  return safariPackages.find(p => p.slug === slug);
}
