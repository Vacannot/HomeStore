export interface IShippingProvider {
  company: string;
  price: number;
  time: string;
}

export const ShippingProvider: IShippingProvider[] = [
  {
    company: 'DHL',
    price: 149,
    time: 'Express 24h',
  },
  {
    company: 'Postnord',
    price: 59,
    time: 'Standard 48h',
  },
  {
    company: 'InstaBox, Click and Collect',
    price: 0,
    time: '3-5 arbetsdagar',
  },
];
