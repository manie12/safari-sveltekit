export interface Accommodation {
  name: string;
  type: 'lodge' | 'tented-camp' | 'hotel' | 'boutique' | 'villa' | 'airbnb';
  image: string;
  rating?: number;
  description: string;
  amenities: string[];
  pricePerNight: number;
}

export interface Activity {
  name: string;
  duration: string;
  included: boolean;
  price?: number;
  description?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  accommodation: Accommodation;
  meals: ('breakfast' | 'lunch' | 'dinner')[];
  activities: Activity[];
  image: string;
  travelInfo?: {
    from: string;
    to: string;
    duration: string;
    method: 'drive' | 'flight' | 'transfer' | 'boat';
  };
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  duration?: string;
}

export interface SafariPackage {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  duration: number;
  description: string;
  heroImage: string;
  galleryImages: string[];
  startingPrice: number;
  pricePerPerson: number;
  currency: string;
  difficulty: 'easy' | 'moderate' | 'adventurous';
  groupSize: { min: number; max: number };
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  optionalAddOns: AddOn[];
  highlights: string[];
  bestTime: string;
  category: 'classic' | 'luxury' | 'adventure' | 'family' | 'honeymoon';
  destinations: string[];
  featured?: boolean;
}

export interface PriceBreakdown {
  basePrice: number;
  childDiscount: number;
  addOnsTotal: number;
  subtotal: number;
  serviceFee: number;
  total: number;
  perPerson: number;
  currency: string;
}
