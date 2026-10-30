const pricingPlans = [
  {
    id: 1,
    name: "FREE",
    price: "$0/month",
    features: [
      { name: "Single user", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: false },
      { name: "Dedicated Phone Support", available: false },
      { name: "Free subdomain", available: false },
      { name: "Monthly Status Support", available: false }
    ]
  },
  {
    id: 2,
    name: "PLUS",
    price: "$9/month",
    features: [
      { name: "Single user", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: true },
      { name: "Dedicated Phone Support", available: true },
      { name: "Free subdomain", available: true },
      { name: "Monthly Status Support", available: false }
    ]
  },
  {
    id: 3,
    name: "PRO",
    price: "$49/month",
    features: [
      { name: "Single user", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: true },
      { name: "Dedicated Phone Support", available: true },
      { name: "Free subdomain", available: true },
      { name: "Monthly Status Support", available: true }
    ]
  }
];

export default pricingPlans;
