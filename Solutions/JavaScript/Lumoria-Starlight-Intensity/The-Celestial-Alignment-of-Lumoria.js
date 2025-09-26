/**
 * The Celestial Alignment of Lumoria
 * Fantasy-themed starlight intensity calculator for the Lumoria planetary system
 *
 * Planets:
 * - Mercuria: 0.4 AU, 4,879 km
 * - Earthia: 1 AU, 12,742 km
 * - Marsia: 1.5 AU, 6,779 km
 * - Venusia: 0.7 AU, 12,104 km
 *
 * Shadow rules:
 * - Full: At least one larger planet closer to the sun
 * - Partial: At least one smaller planet closer to the sun
 * - None: No closer planets
 * - None (Multiple Shadows): More than one closer planet (any size)
 *
 * Console output is celestial-themed for educational purposes.
 */

const planets = [
  { name: 'Mercuria', distance: 0.4, diameter: 4879 },
  { name: 'Venusia', distance: 0.7, diameter: 12104 },
  { name: 'Earthia', distance: 1.0, diameter: 12742 },
  { name: 'Marsia', distance: 1.5, diameter: 6779 }
];

// Sort planets by distance from the sun (ascending)
const sortedPlanets = planets.slice().sort((a, b) => a.distance - b.distance);

function getShadowType(planet, closerPlanets) {
  if (closerPlanets.length === 0) return 'None';
  const larger = closerPlanets.filter(p => p.diameter > planet.diameter);
  const smaller = closerPlanets.filter(p => p.diameter < planet.diameter);
  if (closerPlanets.length > 1) return 'None (Multiple Shadows)';
  if (larger.length > 0) return 'Full';
  if (smaller.length > 0) return 'Partial';
  return 'None';
}

function printCelestialHeader() {
  console.log('★━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━★');
  console.log('   Lumoria Starlight Intensity Calculator');
  console.log('   ────────────────────────────────────────────────');
  console.log('   Planet      Distance (AU)   Diameter (km)   Starlight');
  console.log('★━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━★');
}

function printCelestialRow(planet, shadowType) {
  const shadowIcons = {
    'Full': '🌑',
    'Partial': '🌗',
    'None': '🌕',
    'None (Multiple Shadows)': '🌘🌑'
  };
  console.log(
    `   ${planet.name.padEnd(10)} ${planet.distance.toFixed(2).padEnd(14)} ${planet.diameter.toString().padEnd(14)} ${shadowIcons[shadowType]} ${shadowType}`
  );
}

function printCelestialFooter() {
  console.log('★━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━★');
  console.log('   Legend: 🌑 Full | 🌗 Partial | 🌕 None | 🌘🌑 Multiple Shadows');
  console.log('★━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━★');
}

function main() {
  printCelestialHeader();
  for (let i = 0; i < sortedPlanets.length; i++) {
    const planet = sortedPlanets[i];
    const closerPlanets = sortedPlanets.slice(0, i);
    const shadowType = getShadowType(planet, closerPlanets);
    printCelestialRow(planet, shadowType);
  }
  printCelestialFooter();
}

try {
  main();
} catch (err) {
  console.error('⚠️ Celestial misalignment detected:', err.message);
}

/**
 * Educational notes:
 * - This adventure demonstrates Copilot's ability to break down requirements, implement fantasy logic, and produce themed output.
 * - Prompts used: "Create a starlight intensity calculator for Lumoria with shadow rules and celestial output."
 */
