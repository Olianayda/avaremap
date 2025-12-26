/* data.js */
const companies = [
  {
    id: "comp_001",
    name: "AgriGenetics Lab",
    shortTitle: "Bovine IVF Center",
    type: "validated", // options: 'standard', 'validated', 'testing'
    animalTypes: ["Cattle", "Sheep"],
    country: "United States of America", // Must match GeoJSON country name
    lat: 40.7128,
    lng: -74.0060,
    address: "123 Science Dr, New York, NY",
    website: "https://example.com",
    phone: "+1 555 0199",
    email: "contact@agrigenetics.com",
    description: "Leading laboratory for bovine in-vitro fertilization and genetic analysis.",
    services: ["Semen Analysis", "Genetic Screening", "Embryo Transfer"],
    image: "https://via.placeholder.com/150", // Replace with real image URL
  },
  {
    id: "comp_002",
    name: "UniVet Research",
    shortTitle: "University Partner",
    type: "standard",
    animalTypes: ["Horses", "Pigs"],
    country: "Germany",
    lat: 52.5200,
    lng: 13.4050,
    address: "University Sq 1, Berlin",
    website: "https://berlin-univet.de",
    phone: "+49 30 123456",
    email: "info@univet.de",
    description: "University department focused on equine reproduction studies.",
    services: ["Research", "Clinical Trials"],
    image: "https://via.placeholder.com/150",
  },
  {
    id: "comp_003",
    name: "BioTest Farms",
    shortTitle: "Beta Tester",
    type: "testing",
    animalTypes: ["Goats"],
    country: "France",
    lat: 48.8566,
    lng: 2.3522,
    address: "Rue de la Ferme, Paris",
    website: "https://biotest.fr",
    phone: "+33 1 23 45 67 89",
    email: "hello@biotest.fr",
    description: "Currently testing the new MAKSA validation protocols on goat herds.",
    services: ["Herd Management"],
    image: "https://via.placeholder.com/150",
  }
];