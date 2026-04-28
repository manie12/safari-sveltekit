import type { SafariPackage, AddOn } from "$lib/types";

export const optionalAddOns: AddOn[] = [
	{
		id: "balloon-safari",
		name: "Hot Air Balloon Safari",
		description:
			"Sunrise balloon flight over the Mara followed by a bush breakfast with sparkling wine.",
		price: 450,
		duration: "4 hours",
	},
	{
		id: "maasai-village",
		name: "Maasai Cultural Village Visit",
		description:
			"Guided visit to a local Maasai community with storytelling, dance, and craft demonstrations.",
		price: 80,
		duration: "2-3 hours",
	},
	{
		id: "bush-dinner",
		name: "Private Bush Dinner",
		description:
			"Lantern-lit dinner in the wild with a dedicated chef and service team.",
		price: 250,
		duration: "Evening",
	},
	{
		id: "photography-guide",
		name: "Private Photography Guide",
		description:
			"Travel with a pro wildlife photographer for coaching on composition, light, and camera settings.",
		price: 350,
		duration: "Full day",
	},
	{
		id: "night-drive",
		name: "Night Game Drive",
		description:
			"Search for nocturnal wildlife like civets, hyenas, genets, and possibly leopard activity.",
		price: 95,
		duration: "3 hours",
	},
];

export const safariPackages: SafariPackage[] = [
	{
		id: "kenya-classic-7",
		slug: "kenya-classic-safari",
		name: "Kenya Classic Safari",
		tagline:
			"Seven days through Kenya's most iconic wilderness — lakes, escarpments, and the Mara",
		duration: 7,
		description: `Discover Kenya across four distinct landscapes: city-edge wildlife in Nairobi, the dramatic Great Rift Valley escarpment, the flamingo-laced shores of Lake Nakuru, and the legendary open plains of the Masai Mara.

This itinerary is built for travellers who want exceptional wildlife encounters without feeling rushed. You'll travel in a private 4x4 safari vehicle with a dedicated guide, stay in hand-selected properties at each stop, and move at a pace that lets the wilderness sink in.

From tracking black rhino at Nakuru to watching lion cubs tumble over each other at sunrise in the Mara — this is a classic East African safari done properly.`,
		heroImage: "/IMG-20250908-WA0011.jpg",
		galleryImages: [
			"/IMG-20251013-WA0112(2).jpg",
			"/IMG-20251013-WA0107.jpg",
			"/IMG-20250908-WA0012.jpg",
			"/ak-japan.webp",
			"IMG_20251013_091542_287.jpg",
			"IMG_20251220_171026_920.jpg",
			"IMG_20251012_163712_696.jpg"
		],
		startingPrice: 2850,
		pricePerPerson: 2850,
		currency: "USD",
		difficulty: "easy",
		groupSize: { min: 2, max: 7 },
		category: "classic",
		featured: true,
		bestTime:
			"July to October (migration season), January to March (clear skies)",
		destinations: ["Kenya", "Nairobi", "Lake Nakuru", "Masai Mara"],
		highlights: [
			"Big Five game viewing with professional guides",
			"Lake Nakuru rhino sanctuary and birdlife",
			"Multiple Masai Mara game drives in prime wildlife zones",
			"Scenic Rift Valley viewpoints and photography stops",
			"Optional Maasai village and balloon safari experience",
			"Comfortable lodges and tented camps with full-board meals",
		],
		included: [
			"All accommodations as listed",
			"Full board on safari (breakfast, lunch, dinner)",
			"Private 4x4 safari vehicle with pop-up roof",
			"Professional English-speaking safari guide",
			"Park and conservancy entrance fees",
			"Airport pickup and drop-off transfers",
			"Bottled drinking water during drives",
			"AMREF emergency evacuation cover",
			"On-trip WhatsApp support 24/7",
		],
		excluded: [
			"International flights",
			"Travel insurance",
			"Kenya eTA/eVisa and related fees",
			"Tips and gratuities",
			"Personal items and laundry",
			"Premium/ alcoholic beverages",
			"Optional activities and add-ons",
		],
		optionalAddOns,
		itinerary: [
			{
				day: 1,
				title: "Arrival in Nairobi",
				location: "Nairobi",
				description: `Arrive at Jomo Kenyatta International Airport and meet your safari host for a private transfer to your accommodation.

Depending on arrival time, choose to rest or visit nearby attractions such as the Giraffe Centre. In the evening, meet your guide for a short safari briefing and trip orientation.`,
				highlights: [
					"Airport meet-and-greet",
					"Private transfer to accommodation",
					"Optional Giraffe Centre visit",
					"Welcome safari briefing",
				],
				image: "/IMG-20250908-WA0015.jpg",
				accommodation: {
					name: "Kilimani Nairobi Airbnb",
					type: "airbnb",
					image: "/IMG-20250908-WA0016.jpg",
					rating: 4.7,
					description:
						"Comfortable boutique stay in a quiet Nairobi neighborhood with easy airport access.",
					amenities: ["WiFi", "Garden", "Secure Parking", "Hot Shower"],
					pricePerNight: 60,
				},
				meals: ["dinner"],
				activities: [
					{ name: "Airport Transfer", duration: "45 mins", included: true },
					{ name: "Safari Briefing", duration: "30 mins", included: true },
					{
						name: "Giraffe Centre Visit",
						duration: "2 hours",
						included: false,
						price: 35,
					},
				],
				travelInfo: {
					from: "JKIA Airport",
					to: "Nairobi",
					duration: "45 minutes",
					method: "transfer",
				},
			},
			{
				day: 2,
				title: "Nairobi to Lake Nakuru",
				location: "Lake Nakuru",
				description: `After breakfast, travel through the Great Rift Valley with scenic stops en route.

Arrive at Lake Nakuru National Park in time for a game drive focused on rhino, Rothschild’s giraffe, and seasonal flamingo flocks. The compact park offers excellent sightings within short distances.`,
				highlights: [
					"Great Rift Valley viewpoint stop",
					"Arrival game drive in Lake Nakuru",
					"Rhino sanctuary tracking",
					"Sunset over the escarpment",
				],
				image: "/IMG-20250908-WA0017.jpg",
				accommodation: {
					name: "Sarova Lion Hill Lodge",
					type: "lodge",
					image: "/IMG-20250908-WA0018.jpg",
					rating: 4.5,
					description:
						"Hillside lodge with panoramic lake views and close park access.",
					amenities: ["Pool", "Restaurant", "Bar", "Terrace", "WiFi"],
					pricePerNight: 220,
				},
				meals: ["breakfast", "lunch", "dinner"],
				activities: [
					{
						name: "Scenic Drive to Lake Nakuru",
						duration: "4 hours",
						included: true,
					},
					{ name: "Afternoon Game Drive", duration: "3 hours", included: true },
					{ name: "Rhino Tracking", duration: "Included", included: true },
				],
				travelInfo: {
					from: "Nairobi",
					to: "Lake Nakuru",
					duration: "4 hours",
					method: "drive",
				},
			},
			{
				day: 3,
				title: "Lake Nakuru to Masai Mara",
				location: "Masai Mara",
				description: `Depart after breakfast and continue south-west to the Masai Mara ecosystem.

Check in at camp, enjoy lunch, and head out for an evening game drive when predators begin to stir. Expect wide-open plains, dramatic skies, and excellent photographic light.`,
				highlights: [
					"Scenic overland transfer",
					"First Masai Mara game drive",
					"Golden-hour wildlife viewing",
					"Campfire evening atmosphere",
				],
				image: "/IMG-20250908-WA0019.jpg",
				accommodation: {
					name: "Basecamp Masai Mara",
					type: "tented-camp",
					image: "/IMG_20251012_163712_696.jpg",
					rating: 4.7,
					description:
						"Eco-conscious tented camp near key wildlife corridors in the Mara.",
					amenities: ["En-suite Tent", "Bush Dining", "Campfire", "River View"],
					pricePerNight: 380,
				},
				meals: ["breakfast", "lunch", "dinner"],
				activities: [
					{
						name: "Transfer to Masai Mara",
						duration: "5-6 hours",
						included: true,
					},
					{ name: "Evening Game Drive", duration: "3 hours", included: true },
					{ name: "Sundowner Stop", duration: "1 hour", included: true },
				],
				travelInfo: {
					from: "Lake Nakuru",
					to: "Masai Mara",
					duration: "5-6 hours",
					method: "drive",
				},
			},
			{
				day: 4,
				title: "Full Day in Masai Mara",
				location: "Masai Mara",
				description: `Spend a full day on safari with flexible morning and afternoon game sessions.

Your guide will track wildlife activity based on weather, recent sightings, and movement patterns. Break at camp during peak midday heat, then return for evening action near river lines and open plains.`,
				highlights: [
					"Predator tracking at first light",
					"Elephants, giraffes, and antelope herds",
					"Hippo pools and riverine wildlife",
					"Optional Maasai village excursion",
				],
				image: "/IMG_20251012_181027_675.jpg",
				accommodation: {
					name: "Basecamp Masai Mara",
					type: "tented-camp",
					image: "/IMG_20251012_194141_081.jpg",
					rating: 4.7,
					description:
						"Comfortable eco-camp with excellent access to game-viewing zones.",
					amenities: ["En-suite Tent", "Bush Dining", "Campfire", "River View"],
					pricePerNight: 380,
				},
				meals: ["breakfast", "lunch", "dinner"],
				activities: [
					{
						name: "Morning Game Drive",
						duration: "4 hours",
						included: true,
					},
					{ name: "Afternoon Game Drive", duration: "4 hours", included: true },
					{
						name: "Maasai Village Visit",
						duration: "2 hours",
						included: false,
						price: 80,
					},
				],
			},
			{
				day: 5,
				title: "Mara River Exploration",
				location: "Masai Mara",
				description: `Focus on the Mara River region, known for dramatic crossings in migration months and year-round predator activity.

Look for crocodiles, hippos, and big cats along the river edges while enjoying a picnic-style lunch in the bush.`,
				highlights: [
					"Mara River safari circuit",
					"Hippo and crocodile sightings",
					"Seasonal wildebeest crossing zones",
					"Bush picnic lunch",
				],
				image: "/IMG_20251012_195805_544.jpg",
				accommodation: {
					name: "Basecamp Masai Mara",
					type: "tented-camp",
					image: "/IMG_20251013_070710_147.jpg",
					rating: 4.7,
					description:
						"Riverside tented accommodation with strong sustainability focus.",
					amenities: ["En-suite Tent", "Bush Dining", "Campfire", "River View"],
					pricePerNight: 380,
				},
				meals: ["breakfast", "lunch", "dinner"],
				activities: [
					{
						name: "Full-Day Mara River Safari",
						duration: "8 hours",
						included: true,
					},
					{ name: "Bush Picnic Lunch", duration: "1 hour", included: true },
					{
						name: "Hot Air Balloon Safari",
						duration: "4 hours",
						included: false,
						price: 450,
					},
				],
			},
			{
				day: 6,
				title: "Masai Mara to Nairobi",
				location: "Nairobi",
				description: `Enjoy one final morning game drive, then depart after breakfast for Nairobi.

Arrive in the afternoon and relax before a farewell dinner to celebrate your safari highlights.`,
				highlights: [
					"Final sunrise game drive",
					"Scenic return to Nairobi",
					"Optional shopping stop",
					"Farewell dinner",
				],
				image: "/IMG_20251013_091542_287.jpg",
				accommodation: {
					name: "Kilimani Nairobi Airbnb",
					type: "hotel",
					image: "/IMG_20251013_102105_013.jpg",
					rating: 4.4,
					description:
						"Convenient Nairobi stay for your final night before departure.",
					amenities: ["Pool", "Restaurant", "WiFi", "Secure Parking"],
					pricePerNight: 60,
				},
				meals: ["breakfast", "lunch", "dinner"],
				activities: [
					{ name: "Morning Game Drive", duration: "3 hours", included: true },
					{ name: "Drive to Nairobi", duration: "5-6 hours", included: true },
					{ name: "Farewell Dinner", duration: "2 hours", included: true },
				],
				travelInfo: {
					from: "Masai Mara",
					to: "Nairobi",
					duration: "5-6 hours",
					method: "drive",
				},
			},
			{
				day: 7,
				title: "Departure",
				location: "Nairobi",
				description: `After breakfast, transfer to Jomo Kenyatta International Airport for your onward flight.

If your schedule allows, optional short activities or shopping can be arranged before airport drop-off.`,
				highlights: [
					"Leisurely breakfast",
					"Optional last-minute shopping",
					"Private airport transfer",
				],
				image: "/IMG-20250908-WA0010.jpg",
				accommodation: {
					name: "Day Room Available",
					type: "hotel",
					image: "/IMG-20250908-WA0011.jpg",
					rating: 4.3,
					description:
						"Optional day-use room to freshen up before international departure.",
					amenities: ["Day Room", "Pool Access", "Lounge Access"],
					pricePerNight: 0,
				},
				meals: ["breakfast"],
				activities: [
					{ name: "Airport Transfer", duration: "45 mins", included: true },
				],
				travelInfo: {
					from: "Nairobi",
					to: "JKIA Airport",
					duration: "45 minutes",
					method: "transfer",
				},
			},
		],
	},
];

export function getPackageBySlug(slug: string): SafariPackage | undefined {
	return safariPackages.find((pkg) => pkg.slug === slug);
}
