export interface IService {
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  heroImage: string; // relative to /assets/images/servicios/ — e.g. 'guardias.jpg'
  features: string[];
  cta: string;
  // TODO: backend - add 'pricingTier' when online quote builder is integrated
  // TODO: backend - add 'contactEmail' per service for inquiry routing
}
