// site-config.js
// Global configuration for Kentainers Limited site
// All contact info is stored here and referenced by UI components.
window.SITE_CONFIG = {
  company: "Kentainers Limited",
  phones: [
    { name: "Nairobi", display: "+254 730 832 000", tel: "tel:+254730832000" },
    { name: "Mombasa", display: "+254 730 832 060", tel: "tel:+254730832060" },
    { name: "Kisumu", display: "+254 730 832 070", tel: "tel:+254730832070" }
  ],
  email: "info@kentainers.asti-group.com",
  // TODO: client to confirm WhatsApp line
  whatsapp: { url: "https://wa.me/254702233258", display: "+254 702 233258" },
  factories: [
    { name: "Nairobi", address: "Nairobi Gate Industrial Park, Northlands Area, Eastern Bypass, Nairobi" },
    { name: "Mombasa", address: "Kikambala, Malindi Road, Kilifi County" },
    { name: "Kisumu", address: "Victoria Park, Sabuni Road, Off Busia Road, Kisumu" }
  ],
  social: {
    facebook: "https://www.facebook.com/kentainersLtd",
    x: null, // TODO: client to provide X/Twitter URL
    instagram: null, // TODO: client to provide Instagram URL
    youtube: null, // TODO: client to provide YouTube URL
    linkedin: null // TODO: client to provide LinkedIn URL
  },
  countries: ["Kenya"] // TODO: add other countries if needed
};
