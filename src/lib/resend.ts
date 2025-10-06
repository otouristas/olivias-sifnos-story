import { Resend } from 'resend';

const resend = new Resend('re_SMLFNEJU_8MB3SfnJnapfxXB1i4B2654S');

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
  infants?: number;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #2c5530; margin-top: 0;">New Contact Form Submission</h2>
          <p style="color: #666; margin: 0;">Villa Olivia Clara - Contact Form</p>
        </div>
        
        <div style="background-color: white; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
          <h3 style="color: #2c5530; margin-top: 0;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #666;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 8px 0; color: #666;">
                <a href="mailto:${formData.email}" style="color: #2c5530; text-decoration: none;">${formData.email}</a>
              </td>
            </tr>
            ${formData.phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 8px 0; color: #666;">
                <a href="tel:${formData.phone}" style="color: #2c5530; text-decoration: none;">${formData.phone}</a>
              </td>
            </tr>
            ` : ''}
          </table>
          
          ${(formData.checkIn || formData.checkOut || formData.adults || formData.children || formData.infants) ? `
          <h3 style="color: #2c5530; margin-top: 30px;">Booking Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${formData.checkIn ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Check-in:</td>
              <td style="padding: 8px 0; color: #666;">${formData.checkIn}</td>
            </tr>
            ` : ''}
            ${formData.checkOut ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Check-out:</td>
              <td style="padding: 8px 0; color: #666;">${formData.checkOut}</td>
            </tr>
            ` : ''}
            ${formData.adults ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Adults:</td>
              <td style="padding: 8px 0; color: #666;">${formData.adults}</td>
            </tr>
            ` : ''}
            ${formData.children ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Children:</td>
              <td style="padding: 8px 0; color: #666;">${formData.children}</td>
            </tr>
            ` : ''}
            ${formData.infants ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Infants:</td>
              <td style="padding: 8px 0; color: #666;">${formData.infants}</td>
            </tr>
            ` : ''}
          </table>
          ` : ''}
          
          <h3 style="color: #2c5530; margin-top: 30px;">Message</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #2c5530;">
            <p style="margin: 0; color: #333; line-height: 1.6;">${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 4px; text-align: center;">
          <p style="margin: 0; color: #2c5530; font-size: 14px;">
            This email was sent from the Villa Olivia Clara contact form.
          </p>
        </div>
      </div>
    `;

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'Villa Olivia Clara <onboarding@resend.dev>',
      to: ['elena@villaoliviaclara.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: htmlContent,
      replyTo: formData.email,
    });

    console.log('Email sent successfully:', result);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
}
