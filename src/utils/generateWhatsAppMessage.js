export const generateWhatsAppMessage = (orderData) => {
  const phoneNumber = "254716866107";
  
  let message = `Hello Julie Bakers,\n\nNew Cake Order:\n\n`;
  
  // Customer Information
  message += `Name: ${orderData.customerName}\n`;
  message += `Phone: ${orderData.customerPhone}\n\n`;
  
  // Cake Details
  if (orderData.cakeName) {
    message += `Cake: ${orderData.cakeName}\n`;
  }
  if (orderData.category) {
    message += `Category: ${orderData.category}\n`;
  }
  if (orderData.size) {
    message += `Size: ${orderData.size}\n`;
  }
  if (orderData.flavor) {
    message += `Flavor: ${orderData.flavor}\n`;
  }
  
  // Delivery Information
  if (orderData.deliveryType) {
    message += `\n${orderData.deliveryType === 'pickup' ? 'Pickup' : 'Delivery'}\n`;
  }
  if (orderData.address) {
    message += `Address: ${orderData.address}\n`;
  }
  if (orderData.dateNeeded) {
    message += `Date Needed: ${orderData.dateNeeded}\n`;
  }
  
  // Customization
  if (orderData.messageOnCake) {
    message += `\nMessage on Cake: ${orderData.messageOnCake}\n`;
  }
  if (orderData.themeDescription) {
    message += `Theme Description: ${orderData.themeDescription}\n`;
  }
  
  // Additional Notes
  if (orderData.additionalNotes) {
    message += `\nAdditional Notes: ${orderData.additionalNotes}\n`;
  }
  
  // Price
  if (orderData.price) {
    message += `\nPrice: $${orderData.price}\n`;
  }
  
  message += `\nThank you!`;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
