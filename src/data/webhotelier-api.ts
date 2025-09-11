// WebHotelier API Integration for Villa Olivia Clara
// This file will handle availability checking and booking integration

export interface WebHotelierConfig {
  readonly apiUrl: string;
  readonly apiKey: string;
  readonly propertyId: string;
  readonly channelId: string;
}

export interface AvailabilityRequest {
  readonly checkIn: string;
  readonly checkOut: string;
  readonly adults: number;
  readonly children?: number;
  readonly rooms?: number;
}

export interface AvailabilityResponse {
  readonly available: boolean;
  readonly rate: number;
  readonly currency: string;
  readonly roomType: string;
  readonly cancellationPolicy?: string;
  readonly specialOffers?: string[];
}

export interface BookingRequest {
  readonly checkIn: string;
  readonly checkOut: string;
  readonly adults: number;
  readonly children?: number;
  readonly guestInfo: {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
  };
  readonly specialRequests?: string;
}

export interface BookingResponse {
  readonly success: boolean;
  readonly bookingId?: string;
  readonly confirmationNumber?: string;
  readonly totalAmount: number;
  readonly currency: string;
  readonly message?: string;
}

// WebHotelier API Service Class
export class WebHotelierService {
  private config: WebHotelierConfig;

  constructor(config: WebHotelierConfig) {
    this.config = config;
  }

  /**
   * Check availability for given dates
   */
  async checkAvailability(request: AvailabilityRequest): Promise<AvailabilityResponse> {
    try {
      const response = await fetch(`${this.config.apiUrl}/availability`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
          'X-Property-ID': this.config.propertyId,
          'X-Channel-ID': this.config.channelId
        },
        body: JSON.stringify(request)
      });

      if (!response.ok) {
        throw new Error(`WebHotelier API error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error checking availability:', error);
      throw new Error('Unable to check availability at this time. Please contact Elena directly.');
    }
  }

  /**
   * Create a booking
   */
  async createBooking(request: BookingRequest): Promise<BookingResponse> {
    try {
      const response = await fetch(`${this.config.apiUrl}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
          'X-Property-ID': this.config.propertyId,
          'X-Channel-ID': this.config.channelId
        },
        body: JSON.stringify(request)
      });

      if (!response.ok) {
        throw new Error(`WebHotelier API error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw new Error('Unable to process booking at this time. Please contact Elena directly.');
    }
  }

  /**
   * Get booking details
   */
  async getBooking(bookingId: string): Promise<BookingResponse> {
    try {
      const response = await fetch(`${this.config.apiUrl}/bookings/${bookingId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'X-Property-ID': this.config.propertyId
        }
      });

      if (!response.ok) {
        throw new Error(`WebHotelier API error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching booking:', error);
      throw new Error('Unable to retrieve booking details. Please contact Elena directly.');
    }
  }
}

// Default configuration (to be set via environment variables)
export const defaultWebHotelierConfig: WebHotelierConfig = {
  apiUrl: import.meta.env.VITE_WEBHOTELIER_API_URL || 'https://api.webhotelier.com/v1',
  apiKey: import.meta.env.VITE_WEBHOTELIER_API_KEY || '',
  propertyId: import.meta.env.VITE_WEBHOTELIER_PROPERTY_ID || '',
  channelId: import.meta.env.VITE_WEBHOTELIER_CHANNEL_ID || ''
};

// Create service instance
export const webHotelierService = new WebHotelierService(defaultWebHotelierConfig);

// Helper functions for AI integration
export function formatAvailabilityResponse(response: AvailabilityResponse): string {
  if (!response.available) {
    return `Unfortunately, Villa Olivia Clara is not available for those dates. I recommend checking alternative dates or contacting Elena directly for special arrangements.`;
  }

  let message = `Great news! Villa Olivia Clara is available for your dates. `;
  message += `The rate is ${response.currency} ${response.rate} per night. `;
  
  if (response.specialOffers && response.specialOffers.length > 0) {
    message += `Special offers available: ${response.specialOffers.join(', ')}. `;
  }

  message += `Would you like me to help you with the booking process or do you have any questions about the villa?`;

  return message;
}

export function formatBookingResponse(response: BookingResponse): string {
  if (response.success) {
    return `🎉 Congratulations! Your booking has been confirmed. ` +
           `Confirmation Number: ${response.confirmationNumber}. ` +
           `Total Amount: ${response.currency} ${response.totalAmount}. ` +
           `Elena will contact you shortly with arrival details and villa information. ` +
           `We can't wait to welcome you to Villa Olivia Clara!`;
  } else {
    return `I apologize, but there was an issue processing your booking. ` +
           `Please contact Elena directly at elena@villaoliviaclara.com or call +30 697 191 9382 ` +
           `for immediate assistance with your reservation.`;
  }
}

export default webHotelierService;
