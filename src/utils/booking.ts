/**
 * Utility functions for generating booking URLs with dynamic parameters
 */

export interface BookingParams {
  checkin: string; // YYYY-MM-DD format
  checkout?: string; // YYYY-MM-DD format
  nights?: number;
  rooms: number;
  adults: number;
  children: number;
  infants: number;
}

/**
 * Generate booking URL with parameters
 */
export function generateBookingUrl(params: BookingParams): string {
  const baseUrl = 'https://book.villaoliviaclara.com/';
  const searchParams = new URLSearchParams();
  
  // Add check-in date
  searchParams.set('checkin', params.checkin);
  
  // Add check-out date if provided
  if (params.checkout) {
    searchParams.set('checkout', params.checkout);
  }
  
  // Calculate nights if not provided
  let nights = params.nights;
  if (!nights && params.checkout) {
    const checkinDate = new Date(params.checkin);
    const checkoutDate = new Date(params.checkout);
    nights = Math.ceil((checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60 * 24));
  }
  
  if (nights) {
    searchParams.set('nights', nights.toString());
  }
  
  // Add guest parameters
  searchParams.set('rooms', params.rooms.toString());
  searchParams.set('adults', params.adults.toString());
  searchParams.set('children', params.children.toString());
  searchParams.set('infants', params.infants.toString());
  
  return `${baseUrl}?${searchParams.toString()}`;
}

/**
 * Parse date from various formats
 */
export function parseDate(dateInput: string | Date): string {
  if (dateInput instanceof Date) {
    return dateInput.toISOString().split('T')[0];
  }
  
  // Handle various date formats
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format');
  }
  
  return date.toISOString().split('T')[0];
}

/**
 * Parse guest numbers from text
 */
export function parseGuestNumbers(text: string): { adults: number; children: number; infants: number } {
  const lowerText = text.toLowerCase();
  
  // Default values
  let adults = 2;
  let children = 0;
  let infants = 0;
  
  // Parse adults
  const adultMatch = lowerText.match(/(\d+)\s*(?:adults?|people|persons?|guests?)/);
  if (adultMatch) {
    adults = parseInt(adultMatch[1]);
  } else {
    // Look for total people
    const totalMatch = lowerText.match(/(\d+)\s*(?:people|persons?|guests?)/);
    if (totalMatch) {
      adults = parseInt(totalMatch[1]);
    }
  }
  
  // Parse children
  const childrenMatch = lowerText.match(/(\d+)\s*(?:children?|kids?)/);
  if (childrenMatch) {
    children = parseInt(childrenMatch[1]);
  }
  
  // Parse infants
  const infantsMatch = lowerText.match(/(\d+)\s*(?:infants?|babies?)/);
  if (infantsMatch) {
    infants = parseInt(infantsMatch[1]);
  }
  
  return { adults, children, infants };
}

/**
 * Parse dates from text
 */
export function parseDatesFromText(text: string): { checkin: string; checkout: string } | null {
  const lowerText = text.toLowerCase();
  
  // Common date patterns
  const datePatterns = [
    // "from 2025-09-11 to 2025-09-15"
    /from\s+(\d{4}-\d{2}-\d{2})\s+to\s+(\d{4}-\d{2}-\d{2})/,
    // "from September 11, 2025 to September 15, 2025"
    /from\s+(\w+\s+\d{1,2},?\s+\d{4})\s+to\s+(\w+\s+\d{1,2},?\s+\d{4})/,
    // "from 11/09/2025 to 15/09/2025"
    /from\s+(\d{1,2}\/\d{1,2}\/\d{4})\s+to\s+(\d{1,2}\/\d{1,2}\/\d{4})/,
    // "check-in 2025-09-11 check-out 2025-09-15"
    /check-?in\s+(\d{4}-\d{2}-\d{2}).*?check-?out\s+(\d{4}-\d{2}-\d{2})/,
  ];
  
  for (const pattern of datePatterns) {
    const match = lowerText.match(pattern);
    if (match) {
      try {
        const checkin = parseDate(match[1]);
        const checkout = parseDate(match[2]);
        return { checkin, checkout };
      } catch (error) {
        continue;
      }
    }
  }
  
  return null;
}

/**
 * Generate booking URL from text query
 */
export function generateBookingUrlFromText(text: string): string | null {
  try {
    const dates = parseDatesFromText(text);
    const guests = parseGuestNumbers(text);
    
    if (!dates) {
      return null;
    }
    
    const params: BookingParams = {
      checkin: dates.checkin,
      checkout: dates.checkout,
      rooms: 1, // Default to 1 room
      adults: guests.adults,
      children: guests.children,
      infants: guests.infants,
    };
    
    return generateBookingUrl(params);
  } catch (error) {
    console.error('Error generating booking URL from text:', error);
    return null;
  }
}
