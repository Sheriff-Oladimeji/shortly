import { brandIcon, recordIcon, customizeIcon } from "../assets";
const navLinks = [
  {
    id: 1,
    content: "Features",
  },
  {
    id: 2,
    content: "Pricing",
  },
  {
    id: 3,
    content: "Resources",
  },
];
const CTA = [
  {
    id: 1,
    content: "Login",
  },
  {
    id: 2,
    content: "Sign Up",
  },
];

const cards = [
  {
    id: 1,
    icon: brandIcon,
    title: "Brand Recognition",
    content: ` Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.`,
  },
  {
    id: 2,
    icon: recordIcon,
    title: "Detailed Records",
    content: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`,
  },
  {
    id: 3,
    icon: customizeIcon,
    title: "Fully Customizable",
    content: ` Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
  },
];
export { navLinks, CTA, cards };
