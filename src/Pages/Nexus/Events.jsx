// Hardcoded JSDelivr CDN URLs for gallery2k25 folder content in respective Nexus event sections
const CDN_BASE = "https://cdn.jsdelivr.net/gh/swrjs/nexus-app@main/src/resources";

const model1 = `${CDN_BASE}/gallery2k25/nexus model 1.jpg`;
const model2 = `${CDN_BASE}/gallery2k25/nexus model 2.jpg`;
const model3 = `${CDN_BASE}/gallery2k25/nexus model 3.jpeg`;

const crypt1 = `${CDN_BASE}/gallery2k25/CryptHunt.jpeg`;
const crypt2 = `${CDN_BASE}/gallery2k25/CryptHunt1.jpg.jpeg`;
const crypt3 = `${CDN_BASE}/gallery2k25/CryptHunt2.jpeg`;

const trace1 = `${CDN_BASE}/gallery2k25/tracebot1.jpg`;
const trace2 = `${CDN_BASE}/gallery2k25/tracebot2.jpg`;
const trace3 = `${CDN_BASE}/gallery2k25/tracebot3.jpg`;

const face1 = `${CDN_BASE}/gallery2k25/facepainting1.jpeg`;
const face2 = `${CDN_BASE}/gallery2k25/facepainting 2.jpg`;
const face3 = `${CDN_BASE}/gallery2k25/facepainting3 .jpg`;

const urban1 = `${CDN_BASE}/gallery2k25/urbanNXT1.JPG`;
const urban2 = `${CDN_BASE}/gallery2k25/urbanNXT2.JPG`;
const urban3 = `${CDN_BASE}/gallery2k25/urbanNXT3.JPG`;

const photo1 = `${CDN_BASE}/gallery2k25/photolink1.jpeg`;
const photo2 = `${CDN_BASE}/gallery2k25/photolink 2.JPG.jpeg`;
const photo3 = `${CDN_BASE}/gallery2k25/photolink3.jpeg`;

// New Nexus Events Data (CodeNexus removed, Crypt Hunt 2nd image replaced with 1st image)
const events = [
  {
    name: "Nexus Model",
    description:
      "Step into the spotlight with Nexus Model, where raw, unfiltered talent meets brutally honest comedy and peak entertainment! Inspired by the viral Latent format, this high-voltage stage showdown lets you showcase any quirky skill, hidden talent, stand-up bit, or bizarre party trick you have up your sleeve. Perform in front of a sharp-witted panel and a roaring crowd, where charisma, comedic timing, and pure stage presence matter just as much as the act itself. Predict your own score before the judges drop theirs—because matching the panel’s vibe is the ultimate key to stealing the show. Whether you leave the audience in splits, stunned in silence, or cheering on their feet, every second on this mic is pure unscripted chaos. Step up, own the stage, and prove you have got that unmistakable spark!",
    photos: [model1, model2, model3],
  },
  {
    name: "Crypt Hunt",
    description:
      "Dive into the ultimate digital labyrinth with Crypt Hunt, an adrenaline-pumping online treasure hunt built to test your lateral thinking, tech instincts, and sheer persistence! Forget conventional maps—here, your clues are hidden inside cryptic riddles, source codes, ciphered messages, audio files, and obscure corners of the internet. Every solved puzzle unlocks the next level, pulling you deeper into a race against the clock where one sharp observation separates a dead end from a breakthrough. Connect seemingly random dots, decode hidden patterns, and outsmart red herrings as the difficulty ramps up with every stage. Whether you are a master decoder, a Google-fu wizard, or someone who loves cracking impossible mysteries, this high-stakes hunt will keep your brain firing on all cylinders. Put on your detective hat, trust your instincts, and race to uncover the final secret!",
    photos: [crypt1, crypt1, crypt3],
  },
  {
    name: "TraceBot",
    description:
      "Bring raw robotics engineering to life with TraceBot, the ultimate showdown of sensor precision, control algorithms, and autonomous navigation. Your mission is to build a self-navigating machine from scratch capable of locking onto a track packed with smooth curves, sudden turns, and deceptive line breaks. With zero remote intervention allowed once the start switch is flipped, your bot must think entirely on its own—clearing sequential checkpoints and racing against a tight clock to reach the finish zone. Every millisecond and calibration tweak counts as you balance blistering speed with rock-solid control logic to stay on course without losing your bearings. Top off your run by triggering a glowing finish-line LED to prove complete autonomous mastery from start to finish.",
    photos: [trace1, trace2, trace3],
  },
  {
    name: "FacePainting",
    description:
      "Trade circuit boards for paintbrushes in Face Painting, where raw creativity meets bold artistic expression! Step away from the screens and soldering irons to turn a blank canvas into a vibrant, living masterpiece bursting with colour, imagination, and storytelling. Whether you go for intricate cyber-futuristic patterns, dramatic illusions, or expressive pop-art strokes, every brushstroke is a race against the clock to bring your vision to life. Watch bold hues blend into striking details as you capture themes with precision, flair, and unmistakable originality. No experience is needed—just a steady hand, wild ideas, and the courage to wear your art loud and proud. Grab your palette, unleash your inner artist, and make heads turn across the fest!",
    photos: [face1, face2, face3],
  },
  {
    name: "URBAN-NXT",
    description:
      "Modern cities are grappling with gridlock, energy waste, and strained infrastructure—and UrbanNXT puts you in the driver's seat to engineer the fix. Step into an arena built for innovators ready to reimagine metropolitan ecosystems from the ground up. In the opening round, you will dissect a pressing urban crisis in a sharp diagnosis before unveiling a bold preliminary solution in a single high-impact slide. Advance to the finale, and you will pitch a comprehensive, tech-driven solution directly before an expert jury. Whether your edge lies in IoT, Embedded Systems, AI/ML, VLSI, or Web/App Development, this is where hardware and code meet real-world civic transformation. Step up, out-engineer the chaos, and prove your blueprint is what the cities of tomorrow actually run on.",
    photos: [urban1, urban2, urban3],
  },
  {
    name: "Photo Link",
    description:
      "Step into the speed-of-light arena with PhotoLink, where electronics, communication theory, and optical physics collide. If you are fascinated by how raw signals travel through light, this is your chance to turn classroom theory into hands-on hardware mastery. The challenge kicks off with an intense quiz designed to test your sharp grasp of core electronics fundamentals and optical principles. Clear the first hurdle, and you will unlock the real hardware playground: working directly with an IR Transmitter-Receiver module and an optical patch cord. Your mission is to engineer clean optical pathways, encode a binary message, and decode it with absolute precision under pressure. Step up to the optical bench, align your signals, and prove you have what it takes to master modern photonic communication.",
    photos: [photo1, photo2, photo3],
  },
];

export default events;
