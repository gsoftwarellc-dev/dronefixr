import logo from "../assets/logo.png";
import galleryVideo from "../assets/IMG_9781.MOV";
import heroBench from "../assets/repair-bench.jpeg";
import heroDrone from "../assets/hero-drone.jpeg";
import repairBench from "../assets/repair-bench.jpeg";
import sensorRepair from "../assets/sensor-repair.jpeg";
import diagnosticDetail from "../assets/diagnostic-detail.jpeg";

export const brand = {
  name: "Drone Fixr",
  domain: "dronefixr.com",
  tagline: "Drone Repair. Restore. Fly.",
  phone: "334-333-2986",
  phoneHref: "tel:3343332986",
  email: "john.carter.cole@gmail.com",
  emailHref: "mailto:john.carter.cole@gmail.com",
  primaryLocation: "Dothan, Alabama",
  locationClaim: "No. 1 Drone Repair Shop in Dothan, Alabama",
  dropboxAddress: "39 Gateway Drive, Midland City, AL 36350",
  shippingAddress: "115 Ayreswood Drive, Dothan, AL 36303",
  repairIntakeForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSctuBekrSEay04QXOLpvbcoDXF6qhNl-TaP0I9F_AjLKjIT_A/viewform",
  diagnosticFee: "$40",
  logo,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Dropbox", href: "/dropbox" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  heroBench,
  heroDrone,
  repairBench,
  sensorRepair,
  diagnosticDetail,
  galleryVideo,
};

export const services = [
  {
    title: "Drone Repair",
    description:
      "Component-level repair, crash damage assessment, gimbal issues, arms, motors, wiring, and full teardown diagnostics.",
    icon: "tool",
    image: repairBench,
  },
  {
    title: "Drone Sales",
    description:
      "Guidance on replacement drones, repaired units, and upgrade paths that fit your flying needs and budget.",
    icon: "drone",
    image: heroDrone,
  },
  {
    title: "Vision Sensor Cleaning",
    description:
      "Careful cleaning for obstacle avoidance and vision systems to help restore reliable environmental sensing.",
    icon: "spark",
    image: sensorRepair,
  },
  {
    title: "Vision Sensor Calibration",
    description:
      "Sensor calibration support after repairs, impacts, transport issues, or recurring vision system warnings.",
    icon: "target",
    image: sensorRepair,
  },
  {
    title: "Firmware Updates",
    description:
      "Firmware checks, updates, troubleshooting, and setup support so your drone and controller stay aligned.",
    icon: "chip",
    image: diagnosticDetail,
  },
  {
    title: "Flight Upgrades",
    description:
      "Performance-focused setup, accessory recommendations, propeller checks, and readiness improvements.",
    icon: "rocket",
    image: heroDrone,
  },
];

export const processSteps = [
  {
    title: "Drop off or ship your drone",
    description:
      "Use the 24/7 Dropbox at the local drop-off address or ship your drone to the Dothan repair address.",
  },
  {
    title: "Pay the $40 diagnostic fee",
    description:
      "The diagnostic fee starts the intake, teardown, inspection, and repair estimate process.",
  },
  {
    title: "Get a repair quote",
    description:
      "Drone Fixr takes the drone apart, diagnoses the issue, and sends a clear repair quote.",
  },
  {
    title: "Approve the quote",
    description:
      "If you approve, you pay for the repair. If not, the drone is reassembled and shipped back.",
  },
  {
    title: "We repair and return it",
    description:
      "Approved repairs are completed and your drone is shipped back or returned at the shop.",
  },
];

export const testimonials = [
  {
    quote:
      "Drone Fixr diagnosed my crash damage quickly and had my drone back in the air faster than expected. Clear communication from drop-off to pickup.",
    name: "Michael Reynolds",
    detail: "Broken arm and motor repair",
    initials: "MR",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Clear quote, fair process, and no guesswork. The 24/7 dropbox made it easy to leave my drone after work.",
    name: "Jessica Miller",
    detail: "Propeller and landing gear fix",
    initials: "JM",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "The sensor calibration solved the warnings I was getting before every flight. Smooth experience and the drone flies right again.",
    name: "Daniel Thompson",
    detail: "Vision sensor calibration",
    initials: "DT",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    quote:
      "I shipped my drone in and got a detailed quote before any repair work started. The process was simple and professional.",
    name: "Ashley Johnson",
    detail: "Battery connection issue",
    initials: "AJ",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "They fixed a gimbal issue another shop could not explain. The diagnostic fee was worth it because I knew exactly what failed.",
    name: "Matthew Carter",
    detail: "Gimbal repair",
    initials: "MC",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    quote:
      "Firmware updates and setup were handled quickly. Drone Fixr helped me avoid replacing a drone that only needed service.",
    name: "Sarah Williams",
    detail: "Firmware update issue",
    initials: "SW",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "The repair quote was easy to understand, and the final repair matched what they said it would cost. No surprises.",
    name: "Brian Anderson",
    detail: "ESC board diagnosis",
    initials: "BA",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    quote:
      "My drone had crash damage on the arm and motor. It came back clean, tested, and ready to fly.",
    name: "Emily Davis",
    detail: "Crash damage repair",
    initials: "ED",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    quote:
      "Fast communication, good photos of the issue, and a practical recommendation. I would use Drone Fixr again.",
    name: "Kevin Parker",
    detail: "Camera replacement quote",
    initials: "KP",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    quote:
      "I dropped my drone off at night and had an intake confirmation the next day. The dropbox option made the whole repair easy.",
    name: "Nicole Harris",
    detail: "No-power diagnostic",
    initials: "NH",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    quote:
      "My controller and drone were not connecting after an update. Drone Fixr got the firmware sorted and tested everything before pickup.",
    name: "Andrew Wilson",
    detail: "Controller pairing problem",
    initials: "AW",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    quote:
      "The vision sensors kept throwing errors after a dusty job site flight. Cleaning and calibration fixed it without replacing parts.",
    name: "Lauren Cooper",
    detail: "Dirty vision sensors",
    initials: "LC",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
  },
];
