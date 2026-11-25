export const companies = {
  essent: { name: "Essent", logo: "https://www.essent.nl/apple-touch-icon.png" },
  elements: { name: "Elements Interactive", logo: "https://cdn.prod.website-files.com/69299bd8facb4ed9f60dc37d/6a1d7705383c8f727d064761_elements_favicon.png" },
  intergamma: { name: "Intergamma", logo: "https://fd-cdn.nl/12602-intergamma-prd/static/images/logo.svg" },
  kiwa: { name: "Kiwa", logo: "https://www.kiwa.com/globalassets/kiwa-logo.svg" },
  inficare: { name: "Inficare", logo: "https://inficare.com.my/assets/inficare_logo-C1w8DWrM.png" },
  lugmety: { name: "Lugmety", logo: "https://framerusercontent.com/images/8b4Z4wsq5E0QR4pspvLnltU3HE.png" },
  nrna: { name: "NRNA", logo: "https://nrna.org/uploads/nrna/files/1/2020/05/final-logo-png.png" },
} as const;
export type CompanyId = keyof typeof companies;
