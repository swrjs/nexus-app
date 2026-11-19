import { driveAsset } from "../../constants/driveImages";

// Event photos
const robo1 = driveAsset("NexusPage/compressed_events/robo1.jpg");
const robo2 = driveAsset("NexusPage/compressed_events/robo2.jpg");
const robo3 = driveAsset("NexusPage/compressed_events/robo3.jpg");

const coden1 = driveAsset("NexusPage/compressed_events/codexus1.jpg");
const coden2 = driveAsset("NexusPage/compressed_events/codexus2.jpg");
const coden3 = driveAsset("NexusPage/compressed_events/codexus3.jpg");

const pairup1 = driveAsset("NexusPage/compressed_events/pup1.jpg");
const pairup2 = driveAsset("NexusPage/compressed_events/pup2.jpg");
const pairup3 = driveAsset("NexusPage/compressed_events/pup3.jpg");

const latent1 = driveAsset("NexusPage/compressed_events/th1.jpg");
const latent2 = driveAsset("NexusPage/compressed_events/th2.jpg");
const latent3 = driveAsset("NexusPage/compressed_events/th3.jpg");

const perfectpixel1 = driveAsset("NexusPage/compressed_events/pp1.jpg");
const perfectpixel2 = driveAsset("NexusPage/compressed_events/pp2.jpg");
const perfectpixel3 = driveAsset("NexusPage/compressed_events/pp3.jpg");

const decodino1 = driveAsset("NexusPage/compressed_events/decodino1.jpg");
const decodino2 = driveAsset("NexusPage/compressed_events/cc2.jpg");
const decodino3 = driveAsset("NexusPage/compressed_events/cc3.jpg");

const jwg1 = driveAsset("NexusPage/compressed_events/jwg1.jpg");
const jwg2 = driveAsset("NexusPage/compressed_events/jwg2.jpg");
const jwg3 = driveAsset("NexusPage/compressed_events/jwg3.jpg");

// New Nexus Events Data
const events = [
  {
    name: "Nexus Model",
    description:
      "Step into the spotlight with Nexus Model, where raw, unfiltered talent meets brutally honest comedy and peak entertainment! Inspired by the viral Latent format, this high-voltage stage showdown lets you showcase any quirky skill, hidden talent, stand-up bit, or bizarre party trick you have up your sleeve. Perform in front of a sharp-witted panel and a roaring crowd, where charisma, comedic timing, and pure stage presence matter just as much as the act itself. Predict your own score before the judges drop theirs—because matching the panel’s vibe is the ultimate key to stealing the show. Whether you leave the audience in splits, stunned in silence, or cheering on their feet, every second on this mic is pure unscripted chaos. Step up, own the stage, and prove you have got that unmistakable spark!",
    photos: [latent1, latent2, latent3],
  },
  {
    name: "Crypt Hunt",
    description:
      "Dive into the ultimate digital labyrinth with Crypt Hunt, an adrenaline-pumping online treasure hunt built to test your lateral thinking, tech instincts, and sheer persistence! Forget conventional maps—here, your clues are hidden inside cryptic riddles, source codes, ciphered messages, audio files, and obscure corners of the internet. Every solved puzzle unlocks the next level, pulling you deeper into a race against the clock where one sharp observation separates a dead end from a breakthrough. Connect seemingly random dots, decode hidden patterns, and outsmart red herrings as the difficulty ramps up with every stage. Whether you are a master decoder, a Google-fu wizard, or someone who loves cracking impossible mysteries, this high-stakes hunt will keep your brain firing on all cylinders. Put on your detective hat, trust your instincts, and race to uncover the final secret!",
    photos: [perfectpixel1, perfectpixel2, perfectpixel3],
  },
  {
    name: "CodeNexus",
    description:
      "Step into the digital battleground with CodeNexus, the ultimate test of raw logic, speed, and algorithmic mastery. If you thrive under the ticking clock and love breaking down complex problems into clean, efficient code, this is your stage to shine. Hosted on the GeeksforGeeks platform, this high-energy online showdown challenges you to conquer six carefully curated problems spanning easy warm-ups to brain-twisting hard levels—all within a razor-sharp two-hour window. Every line of code counts as you race against time to optimize your logic, squash edge cases, and outpace the competition. Whether you are sharpening your competitive programming edge or proving your problem-solving dominance, CodeNexus puts your reflexes and syntax to the ultimate test. Fire up your IDE, lock in your focus, and show what your code can really do.",
    photos: [coden1, coden2, coden3],
  },
  {
    name: "TraceBot",
    description:
      "Bring raw robotics engineering to life with TraceBot, the ultimate showdown of sensor precision, control algorithms, and autonomous navigation. Your mission is to build a self-navigating machine from scratch capable of locking onto a track packed with smooth curves, sudden turns, and deceptive line breaks. With zero remote intervention allowed once the start switch is flipped, your bot must think entirely on its own—clearing sequential checkpoints and racing against a tight clock to reach the finish zone. Every millisecond and calibration tweak counts as you balance blistering speed with rock-solid control logic to stay on course without losing your bearings. Top off your run by triggering a glowing finish-line LED to prove complete autonomous mastery from start to finish.",
    photos: [robo1, robo2, robo3],
  },
  {
    name: "FacePainting",
    description:
      "Trade circuit boards for paintbrushes in Face Painting, where raw creativity meets bold artistic expression! Step away from the screens and soldering irons to turn a blank canvas into a vibrant, living masterpiece bursting with colour, imagination, and storytelling. Whether you go for intricate cyber-futuristic patterns, dramatic illusions, or expressive pop-art strokes, every brushstroke is a race against the clock to bring your vision to life. Watch bold hues blend into striking details as you capture themes with precision, flair, and unmistakable originality. No experience is needed—just a steady hand, wild ideas, and the courage to wear your art loud and proud. Grab your palette, unleash your inner artist, and make heads turn across the fest!",
    photos: [jwg1, jwg2, jwg3],
  },
  {
    name: "URBAN-NXT",
    description:
      "Modern cities are grappling with gridlock, energy waste, and strained infrastructure—and UrbanNXT puts you in the driver's seat to engineer the fix. Step into an arena built for innovators ready to reimagine metropolitan ecosystems from the ground up. In the opening round, you will dissect a pressing urban crisis in a sharp diagnosis before unveiling a bold preliminary solution in a single high-impact slide. Advance to the finale, and you will pitch a comprehensive, tech-driven solution directly before an expert jury. Whether your edge lies in IoT, Embedded Systems, AI/ML, VLSI, or Web/App Development, this is where hardware and code meet real-world civic transformation. Step up, out-engineer the chaos, and prove your blueprint is what the cities of tomorrow actually run on.",
    photos: [decodino1, decodino2, decodino3],
  },
  {
    name: "Photo Link",
    description:
      "Step into the speed-of-light arena with PhotoLink, where electronics, communication theory, and optical physics collide. If you are fascinated by how raw signals travel through light, this is your chance to turn classroom theory into hands-on hardware mastery. The challenge kicks off with an intense quiz designed to test your sharp grasp of core electronics fundamentals and optical principles. Clear the first hurdle, and you will unlock the real hardware playground: working directly with an IR Transmitter-Receiver module and an optical patch cord. Your mission is to engineer clean optical pathways, encode a binary message, and decode it with absolute precision under pressure. Step up to the optical bench, align your signals, and prove you have what it takes to master modern photonic communication.",
    photos: [pairup1, pairup2, pairup3],
  },
];

export default events;
