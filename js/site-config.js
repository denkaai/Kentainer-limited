/**
 * Kentainers Limited - Single Source of Truth for Site Contact & Config
 * Classic script setting global window.SITE_CONFIG (no ES modules, works via file:// and HTTP).
 */
window.SITE_CONFIG = {
  company: "Kentainers Limited",
  phones: [
    { label: "Nairobi", display: "0730 832 000", tel: "tel:+254730832000" },
    { label: "Mombasa", display: "0730 832 060", tel: "tel:+254730832060" },
    { label: "Kisumu", display: "0730 832 070", tel: "tel:+254730832070" }
  ],
  email: "info@kentainers.asti-group.com",
  // TODO: client to confirm WhatsApp line (live site topbar/footer WhatsApp link also points to 254730832000)
  whatsapp: {
    url: "https://wa.me/254702233258",
    display: "+254 702 233258"
  },
  factories: [
    {
      key: "nairobi",
      name: "Nairobi Factory",
      address: "Nairobi Gate Industrial Park, 10902/19, Northlands Area, Eastern Bypass",
      mapUrl: "https://maps.app.goo.gl/jASEJs7N5Q71tSoM7"
    },
    {
      key: "mombasa",
      name: "Mombasa Factory",
      address: "Kikambala, Malindi Road, Kilifi County"
    },
    {
      key: "kisumu",
      name: "Kisumu Factory",
      address: "Victoria Park - Sabuni Road, Off Busia Road, Kisumu"
    }
  ],
  social: {
    facebook: "https://www.facebook.com/kentainersLtd",
    x: "https://x.com/_KENTANK",
    instagram: "https://www.instagram.com/kentainers_ltd/",
    youtube: "https://www.youtube.com/channel/UClrv0QS_zEhpyFPnASESO3g",
    linkedin: "https://www.linkedin.com/company/asti-ltd/",
    // TODO: client to confirm official WhatsApp URL
    whatsapp: "https://wa.me/254702233258"
  },
  countries: [
    { code: "KE", name: "Kenya", active: true, href: "#" },
    { code: "UG", name: "Uganda", active: false, href: "#" },
    { code: "RW", name: "Rwanda", active: false, href: "#" },
    { code: "ZM", name: "Zambia", active: false, href: "#" }
  ],
  // TODO: drop official PDF at downloads/price-list.pdf and set priceListAvailable: true
  priceListUrl: "downloads/price-list.pdf",
  priceListAvailable: false
};
