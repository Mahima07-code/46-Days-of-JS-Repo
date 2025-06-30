const elements = [
  {
    name: "Hydrogen", symbol: "H", number: 1, mass: "1.008", group: 1, period: 1,block:"s",
    image: "https://images-of-elements.com/hydrogen.jpg"
  },
  {
    name: "Helium", symbol: "He", number: 2, mass: "4.0026", group: 18, period: 1,block:"s",
    image: "https://images-of-elements.com/helium.jpg"
  },
  {
    name: "Lithium", symbol: "Li", number: 3, mass: "6.94", group: 1, period: 2,block:"s",
    image: "https://images-of-elements.com/lithium.jpg"
  },
  {
    name: "Beryllium", symbol: "Be", number: 4, mass: "9.0122", group: 2, period: 2,block:"s",
    image: "https://images-of-elements.com/beryllium.jpg"
  },
  {
    name: "Boron", symbol: "B", number: 5, mass: "10.81", group: 13, period: 2,block:"p",
    image: "https://images-of-elements.com/boron.jpg"
  },
  {
    name: "Carbon", symbol: "C", number: 6, mass: "12.011", group: 14, period: 2,block:"p",
    image: "https://images-of-elements.com/carbon.jpg"
  },
  {
    name: "Nitrogen", symbol: "N", number: 7, mass: "14.007", group: 15, period: 2,block:"p",
    image: "https://images-of-elements.com/nitrogen.jpg"
  },
  {
    name: "Oxygen", symbol: "O", number: 8, mass: "15.999", group: 16, period: 2,block:"p",
    image: "https://images-of-elements.com/oxygen.jpg"
  },
  {
    name: "Fluorine", symbol: "F", number: 9, mass: "18.998", group: 17, period: 2,block:"p",
    image: "https://images-of-elements.com/fluorine.jpg"
  },
  {
    name: "Neon", symbol: "Ne", number: 10, mass: "20.180", group: 18, period: 2,block:"p",
    image: "https://images-of-elements.com/neon.jpg"
  },
  {
    name: "Sodium", symbol: "Na", number: 11, mass: "22.990", group: 1, period: 3,block:"s",
    image: "https://images-of-elements.com/sodium.jpg"
  },
  {
    name: "Magnesium", symbol: "Mg", number: 12, mass: "24.305", group: 2, period: 3,block:"s",
    image: "https://images-of-elements.com/magnesium.jpg"
  },
  {
    name: "Aluminum", symbol: "Al", number: 13, mass: "26.982", group: 13, period: 3,block:"p",
    image: "https://images-of-elements.com/aluminium.jpg"
  },
  {
    name: "Silicon", symbol: "Si", number: 14, mass: "28.085", group: 14, period: 3,block:"p",
    image: "https://images-of-elements.com/silicon.jpg"
  },
  {
    name: "Phosphorus", symbol: "P", number: 15, mass: "30.974", group: 15, period: 3,block:"p",
    image: "https://images-of-elements.com/phosphorus.jpg"
  },
  {
    name: "Sulfur", symbol: "S", number: 16, mass: "32.06", group: 16, period: 3,block:"p",
    image: "https://images-of-elements.com/sulfur.jpg"
  },
  {
    name: "Chlorine", symbol: "Cl", number: 17, mass: "35.45", group: 17, period: 3,block:"p",
    image: "https://images-of-elements.com/chlorine.jpg"
  },
  {
    name: "Argon", symbol: "Ar", number: 18, mass: "39.948", group: 18, period: 3,block:"p",
    image: "https://images-of-elements.com/argon.jpg"
  },
  {
    name: "Potassium", symbol: "K", number: 19, mass: "39.098", group: 1, period: 4,block:"s",
    image: "https://images-of-elements.com/potassium.jpg"
  },
  {
    name: "Calcium", symbol: "Ca", number: 20, mass: "40.078", group: 2, period: 4,block:"s",
    image: "https://images-of-elements.com/calcium.jpg"
  },
  {
    name: "Scandium", symbol: "Sc", number: 21, mass: "44.956", group: 3, period: 4,block: "d",
    image: "https://images-of-elements.com/scandium.jpg"
  },
  {
    name: "Titanium", symbol: "Ti", number: 22, mass: "47.867", group: 4, period: 4,block: "d",
    image: "https://images-of-elements.com/titanium.jpg"
  },
  
  {
    name: "Vanadium", symbol: "V", number: 23, mass: "50.942", group: 5, period: 4,block: "d",
    image: "https://images-of-elements.com/vanadium.jpg"
  },
  {
    name: "Chromium", symbol: "Cr", number: 24, mass: "51.996", group: 6, period: 4,block: "d",
    image: "https://images-of-elements.com/chromium.jpg"
  },
  {
    name: "Manganese", symbol: "Mn", number: 25, mass: "54.938", group: 7, period: 4,block: "d",
    image: "https://images-of-elements.com/manganese.jpg"
  },
  {
    name: "Iron", symbol: "Fe", number: 26, mass: "55.845", group: 8, period: 4,block: "d",
    image: "https://images-of-elements.com/iron.jpg"
  },
  {
    name: "Cobalt", symbol: "Co", number: 27, mass: "58.933", group: 9, period: 4,block: "d",
    image: "https://images-of-elements.com/cobalt.jpg"
  },
  {
    name: "Nickel", symbol: "Ni", number: 28, mass: "58.693", group: 10, period: 4,block: "d",
    image: "https://images-of-elements.com/nickel.jpg"
  },
  {
    name: "Copper", symbol: "Cu", number: 29, mass: "63.546", group: 11, period: 4,block: "d",
    image: "https://images-of-elements.com/copper.jpg"
  },
  {
    name: "Zinc", symbol: "Zn", number: 30, mass: "65.38", group: 12, period: 4,block: "d",
    image: "https://images-of-elements.com/zinc.jpg"
  },
  {
    name: "Gallium", symbol: "Ga", number: 31, mass: "69.723", group: 13, period: 4,block:"p",
    image: "https://images-of-elements.com/gallium.jpg"
  },
  {
    name: "Germanium", symbol: "Ge", number: 32, mass: "72.63", group: 14, period: 4,block:"p",
    image: "https://images-of-elements.com/germanium.jpg"
  },
  {
    name: "Arsenic", symbol: "As", number: 33, mass: "74.922", group: 15, period: 4,block:"p",
    image: "https://images-of-elements.com/arsenic.jpg"
  },
  {
    name: "Selenium", symbol: "Se", number: 34, mass: "78.971", group: 16, period: 4,block:"p",
    image: "https://images-of-elements.com/selenium.jpg"
  },
  {
    name: "Bromine", symbol: "Br", number: 35, mass: "79.904", group: 17, period: 4,block:"p",
    image: "https://images-of-elements.com/bromine.jpg"
  },
  {
    name: "Krypton", symbol: "Kr", number: 36, mass: "83.798", group: 18, period: 4,block:"p",
    image: "https://images-of-elements.com/krypton.jpg"
  },
  {
    name: "Rubidium", symbol: "Rb", number: 37, mass: "85.468", group: 1, period: 5,block:"s",
    image: "https://images-of-elements.com/rubidium.jpg"
  },
  {
    name: "Strontium", symbol: "Sr", number: 38, mass: "87.62", group: 2, period: 5,block:"s",
    image: "https://images-of-elements.com/strontium.jpg"
  },
  {
    name: "Yttrium", symbol: "Y", number: 39, mass: "88.906", group: 3, period: 5,block:"d",
    image: "https://images-of-elements.com/yttrium.jpg"
  },
  {
    name: "Zirconium", symbol: "Zr", number: 40, mass: "91.224", group: 4, period: 5,block:"d",
    image: "https://images-of-elements.com/zirconium.jpg"
  },
  {
    name: "Niobium", symbol: "Nb", number: 41, mass: "92.906", group: 5, period: 5,block:"d",
    image: "https://images-of-elements.com/niobium.jpg"
  },
  {
    name: "Molybdenum", symbol: "Mo", number: 42, mass: "95.95", group: 6, period: 5,block:"d",
    image: "https://images-of-elements.com/molybdenum.jpg"
  },
  
  {
    name: "Technetium", symbol: "Tc", number: 43, mass: "[98]", group: 7, period: 5,block:"d",
    image: "https://images-of-elements.com/technetium.jpg"
  },
  {
    name: "Ruthenium", symbol: "Ru", number: 44, mass: "101.07", group: 8, period: 5,block:"d",
    image: "https://images-of-elements.com/ruthenium.jpg"
  },
  {
    name: "Rhodium", symbol: "Rh", number: 45, mass: "102.91", group: 9, period: 5,block:"d",
    image: "https://images-of-elements.com/rhodium.jpg"
  },
  {
    name: "Palladium", symbol: "Pd", number: 46, mass: "106.42", group: 10, period: 5,block:"d",
    image: "https://images-of-elements.com/palladium.jpg"
  },
  {
    name: "Silver", symbol: "Ag", number: 47, mass: "107.87", group: 11, period: 5,block:"d",
    image: "https://images-of-elements.com/silver.jpg"
  },
  {
    name: "Cadmium", symbol: "Cd", number: 48, mass: "112.41", group: 12, period: 5,block:"d",
    image: "https://images-of-elements.com/cadmium.jpg"
  },
  {
    name: "Indium", symbol: "In", number: 49, mass: "114.82", group: 13, period: 5,block:"p",
    image: "https://images-of-elements.com/indium.jpg"
  },
  {
    name: "Tin", symbol: "Sn", number: 50, mass: "118.71", group: 14, period: 5,block:"p",
    image: "https://images-of-elements.com/tin.jpg"
  },
  {
    name: "Antimony", symbol: "Sb", number: 51, mass: "121.76", group: 15, period: 5,block:"p",
    image: "https://images-of-elements.com/antimony.jpg"
  },
  {
    name: "Tellurium", symbol: "Te", number: 52, mass: "127.60", group: 16, period: 5,block:"p",
    image: "https://images-of-elements.com/tellurium.jpg"
  },
  {
    name: "Iodine", symbol: "I", number: 53, mass: "126.90", group: 17, period: 5,block:"p",
    image: "https://images-of-elements.com/iodine.jpg"
  },
  {
    name: "Xenon", symbol: "Xe", number: 54, mass: "131.29", group: 18, period: 5,block:"p",
    image: "https://images-of-elements.com/xenon.jpg"
  },
  {
    name: "Cesium", symbol: "Cs", number: 55, mass: "132.91", group: 1, period: 6,block:"s",
    image: "https://images-of-elements.com/cesium.jpg"
  },
  {
    name: "Barium", symbol: "Ba", number: 56, mass: "137.33", group: 2, period: 6,block:"s",
    image: "https://images-of-elements.com/barium.jpg"
  },
  
  {
    name: "Hafnium", symbol: "Hf", number: 72, mass: "178.49", group: 4, period: 6,block:"d",
    image: "https://images-of-elements.com/hafnium.jpg"
  },
  {
    name: "Tantalum", symbol: "Ta", number: 73, mass: "180.95", group: 5, period: 6,block:"d",
    image: "https://images-of-elements.com/tantalum.jpg"
  },
  {
    name: "Tungsten", symbol: "W", number: 74, mass: "183.84", group: 6, period: 6,block:"d",
    image: "https://images-of-elements.com/tungsten.jpg"
  },
  {
    name: "Rhenium", symbol: "Re", number: 75, mass: "186.21", group: 7, period: 6,block:"d",
    image: "https://images-of-elements.com/rhenium.jpg"
  },
  {
    name: "Osmium", symbol: "Os", number: 76, mass: "190.23", group: 8, period: 6,block:"d",
    image: "https://images-of-elements.com/osmium.jpg"
  },
  {
    name: "Iridium", symbol: "Ir", number: 77, mass: "192.22", group: 9, period: 6,block:"d",
    image: "https://images-of-elements.com/iridium.jpg"
  },
  {
    name: "Platinum", symbol: "Pt", number: 78, mass: "195.08", group: 10, period: 6,block:"d",
    image: "https://images-of-elements.com/platinum.jpg"
  },
  {
    name: "Gold", symbol: "Au", number: 79, mass: "196.97", group: 11, period: 6,block:"d",
    image: "https://images-of-elements.com/gold.jpg"
  },
  {
    name: "Mercury", symbol: "Hg", number: 80, mass: "200.59", group: 12, period: 6,block:"d",
    image: "https://images-of-elements.com/mercury.jpg"
  },
  {
    name: "Thallium", symbol: "Tl", number: 81, mass: "204.38", group: 13, period: 6,block:"p",
    image: "https://images-of-elements.com/thallium.jpg"
  },
  {
    name: "Lead", symbol: "Pb", number: 82, mass: "207.2", group: 14, period: 6,block:"p",
    image: "https://images-of-elements.com/lead.jpg"
  },
  {
    name: "Bismuth", symbol: "Bi", number: 83, mass: "208.98", group: 15, period: 6,block:"p",
    image: "https://images-of-elements.com/bismuth.jpg"
  },
  {
    name: "Polonium", symbol: "Po", number: 84, mass: "[209]", group: 16, period: 6,block:"p",
    image: "https://images-of-elements.com/polonium.jpg"
  },
  {
    name: "Astatine", symbol: "At", number: 85, mass: "[210]", group: 17, period: 6,block:"p",
    image: "https://images-of-elements.com/astatine.jpg"
  },
  {
    name: "Radon", symbol: "Rn", number: 86, mass: "[222]", group: 18, period: 6,block:"p",
    image: "https://images-of-elements.com/radon.jpg"
  },
  {
    name: "Francium", symbol: "Fr", number: 87, mass: "[223]", group: 1, period: 7,block:"s",
    image: "https://images-of-elements.com/francium.jpg"
  },
  {
    name: "Radium", symbol: "Ra", number: 88, mass: "226", group: 2, period: 7,block:"s",
    image: "https://images-of-elements.com/radium.jpg"
},



{
  name: "Rutherfordium", symbol: "Rf", number: 104, mass: "[267]", group: 4, period: 7,block:"d",
  image: "https://images-of-elements.com/rutherfordium.jpg"
},
{
  name: "Dubnium", symbol: "Db", number: 105, mass: "[270]", group: 5, period: 7,block:"d",
  image: "https://images-of-elements.com/dubnium.jpg"
},
{
  name: "Seaborgium", symbol: "Sg", number: 106, mass: "[271]", group: 6, period: 7,block:"d",
  image: "https://images-of-elements.com/seaborgium.jpg"
},
{
  name: "Bohrium", symbol: "Bh", number: 107, mass: "[270]", group: 7, period: 7,block:"d",
  image: "https://images-of-elements.com/bohrium.jpg"
},
{
  name: "Hassium", symbol: "Hs", number: 108, mass: "[277]", group: 8, period: 7,block:"d",
  image: "https://images-of-elements.com/hassium.jpg"
},
{
  name: "Meitnerium", symbol: "Mt", number: 109, mass: "[278]", group: 9, period: 7,block:"d",
  image: "https://images-of-elements.com/meitnerium.jpg"
},
{
  name: "Darmstadtium", symbol: "Ds", number: 110, mass: "[281]", group: 10, period: 7,block:"d",
  image: "https://images-of-elements.com/darmstadtium.jpg"
},
{
  name: "Roentgenium", symbol: "Rg", number: 111, mass: "[282]", group: 11, period: 7,block:"d",
  image: "https://images-of-elements.com/roentgenium.jpg"
},
{
  name: "Copernicium", symbol: "Cn", number: 112, mass: "[285]", group: 12, period: 7,block:"d",
  image: "https://images-of-elements.com/copernicium.jpg"
},
{
  name: "Nihonium", symbol: "Nh", number: 113, mass: "[286]", group: 13, period: 7,block:"p",
  image: "https://images-of-elements.com/nihonium.jpg"
},
{
  name: "Flerovium", symbol: "Fl", number: 114, mass: "[289]", group: 14, period: 7,block:"p",
  image: "https://images-of-elements.com/flerovium.jpg"
},
{
  name: "Moscovium", symbol: "Mc", number: 115, mass: "[290]", group: 15, period: 7,block:"p",
  image: "https://images-of-elements.com/moscovium.jpg"
},
{
  name: "Livermorium", symbol: "Lv", number: 116, mass: "[293]", group: 16, period: 7,block:"p",
  image: "https://images-of-elements.com/livermorium.jpg"
},
{
  name: "Tennessine", symbol: "Ts", number: 117, mass: "[294]", group: 17, period: 7,block:"p",
  image: "https://images-of-elements.com/tennessine.jpg"
},
{
  name: "Oganesson", symbol: "Og", number: 118, mass: "[294]", group: 18, period: 7,block:"p",
  image: "https://images-of-elements.com/oganesson.jpg"
},
// Lanthanides--------------------------
{
    name: "Lanthanum", symbol: "La", number: 57, mass: "138.91", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 4, image: "https://images-of-elements.com/lanthanum.jpg"
  },
  {
    name: "Cerium", symbol: "Ce", number: 58, mass: "140.12", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 5, image: "https://images-of-elements.com/cerium.jpg"
  },
  {
    name: "Praseodymium", symbol: "Pr", number: 59, mass: "140.91", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 6, image: "https://images-of-elements.com/praseodymium.jpg"
  },
  {
    name: "Neodymium", symbol: "Nd", number: 60, mass: "144.24", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 7, image: "https://images-of-elements.com/neodymium.jpg"
  },
  {
    name: "Promethium", symbol: "Pm", number: 61, mass: "[145]", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 8, image: "https://images-of-elements.com/promethium.jpg"
  },
  {
    name: "Samarium", symbol: "Sm", number: 62, mass: "150.36", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 9, image: "https://images-of-elements.com/samarium.jpg"
  },
  {
    name: "Europium", symbol: "Eu", number: 63, mass: "151.96", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 10, image: "https://images-of-elements.com/europium.jpg"
  },
  {
    name: "Gadolinium", symbol: "Gd", number: 64, mass: "157.25", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 11, image: "https://images-of-elements.com/gadolinium.jpg"
  },
  {
    name: "Terbium", symbol: "Tb", number: 65, mass: "158.93", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 12, image: "https://images-of-elements.com/terbium.jpg"
  },
  {
    name: "Dysprosium", symbol: "Dy", number: 66, mass: "162.50", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 13, image: "https://images-of-elements.com/dysprosium.jpg"
  },
  {
    name: "Holmium", symbol: "Ho", number: 67, mass: "164.93", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 14, image: "https://images-of-elements.com/holmium.jpg"
  },
  {
    name: "Erbium", symbol: "Er", number: 68, mass: "167.26", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 15, image: "https://images-of-elements.com/erbium.jpg"
  },
  {
    name: "Thulium", symbol: "Tm", number: 69, mass: "168.93", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 16, image: "https://images-of-elements.com/thulium.jpg"
  },
  {
    name: "Ytterbium", symbol: "Yb", number: 70, mass: "173.04", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 17, image: "https://images-of-elements.com/ytterbium.jpg"
  },
  {
    name: "Lutetium", symbol: "Lu", number: 71, mass: "174.97", group: 3, period: 6,block:"d",
    isFBlock: true, fblockRow: 8, fblockColumn: 18, image: "https://images-of-elements.com/lutetium.jpg"
  },

  // ---------- Actinides ----------
  {
    name: "Actinium", symbol: "Ac", number: 89, mass: "227", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 4, image: "https://images-of-elements.com/actinium.jpg"
  },
  {
    name: "Thorium", symbol: "Th", number: 90, mass: "232.04", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 5, image: "https://images-of-elements.com/thorium.jpg"
  },
  {
    name: "Protactinium", symbol: "Pa", number: 91, mass: "231.04", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 6, image: "https://images-of-elements.com/protactinium.jpg"
  },
  {
    name: "Uranium", symbol: "U", number: 92, mass: "238.03", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 7, image: "https://images-of-elements.com/uranium.jpg"
  },
  {
    name: "Neptunium", symbol: "Np", number: 93, mass: "[237]", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 8, image: "https://images-of-elements.com/neptunium.jpg"
  },
  {
    name: "Plutonium", symbol: "Pu", number: 94, mass: "[244]", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 9, image: "https://images-of-elements.com/plutonium.jpg"
  },
  {
    name: "Americium", symbol: "Am", number: 95, mass: "[243]", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 10, image: "https://images-of-elements.com/americium.jpg"
  },
  {
    name: "Curium", symbol: "Cm", number: 96, mass: "[247]", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 11, image: "https://images-of-elements.com/curium.jpg"
  },
  {
    name: "Berkelium", symbol: "Bk", number: 97, mass: "[247]", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 12, image: "https://images-of-elements.com/berkelium.jpg"
  },
  {
    name: "Californium", symbol: "Cf", number: 98, mass: "[251]", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 13, image: "https://images-of-elements.com/californium.jpg"
  },
  {
    name: "Einsteinium", symbol: "Es", number: 99, mass: "[252]", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 14, image: "https://images-of-elements.com/einsteinium.jpg"
  },
  {
    name: "Fermium", symbol: "Fm", number: 100, mass: "[257]", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 15, image: "https://images-of-elements.com/fermium.jpg"
  },
  {
    name: "Mendelevium", symbol: "Md", number: 101, mass: "[258]", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 16, image: "https://images-of-elements.com/mendelevium.jpg"
  },
  {
    name: "Nobelium", symbol: "No", number: 102, mass: "[259]", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 17, image: "https://images-of-elements.com/nobelium.jpg"
  },
  {
    name: "Lawrencium", symbol: "Lr", number: 103, mass: "[266]", group: 3, period: 7,block:"d",
    isFBlock: true, fblockRow: 9, fblockColumn: 18, image: "https://images-of-elements.com/lawrencium.jpg"
  },


];
