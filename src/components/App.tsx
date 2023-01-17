import './App.css';
import './Section.css';
import { Paint } from './Paint';
import { paintDb } from './PaintDb';


const paintGroupsWanted = [
  //Bases
  // ['Abaddon Black', 'Doom Death Black', 'Eshin Grey', 'Mechanicus Standard Grey', 'Dawnstone', 'Administratum Grey', 'Celestra Grey', 'White Scar', 'Corax White', 'White'],
  // ['Retributor Armour', `Dragon's Gold`, 'Liberator Gold', 'Runelord Brass', 'Balthasar Gold', 'Bronze', 'Copper', 'Light Bronze', 'White Gold'], ['Dark Silver', 'Leadbelcher', 'Iron Hands Steel', 'Silver', 'Runefang Steel', 'Stormhost Silver', 'Canoptek Alloy',],
  // ['Caliban Green', 'Warpstone Glow', 'Moot Green', 'Death Guard Green', 'Nurgling Green', 'Ogryn Camo'],
  // ['Xereus Purple', 'Barak-Nar Burgundy', 'Kakophoni Purple', 'Screamer Pink', `Emperor's Children`, 'Fulgrim Pink', 'Pink Horror'],
  // ['Dryad Bark', 'Rhinox Hide', 'Mournfang Brown', 'Gorthor Brown', 'Baneblade Brown', 'Karak Stone'],
  // ['Macragge Blue', 'Thousand Sons Blue', 'Thunderhawk Blue', 'Stegadon Scale Green', 'Sotek Green', 'Temple Guard Blue', 'Baharroth Blue', 'Lothern Blue', 'Fenrisian Grey'],
  // [`Bugman's Glow`, 'Cadian Fleshtone', 'Kislev Flesh', 'Zandri Dust', 'Rakarth Flesh', 'Ushabti Bone', 'Pallid Wych Flesh', 'Screaming Skull', 'Wraithbone', 'Flayed One Flesh'],
  // ['Khorne Red', 'Mephiston Red', 'Wazdakka Red', 'Evil Sunz Scarlet', 'Wild Rider Red', 'Squig Orange', 'Fire Dragon Bright', 'Jokaero Orange', 'Averland Sunset']

  //Washes
  ['Reikland Fleshshade', 'Cryptek Armourshade Gloss', 'Nuln Oil', 'Seraphim Sepia', 'Agrax Earthshade Gloss', 'Agrax Earthshade', 'Biel-Tan Green', 'Athonian Camoshade', 'Fuegan Orange', 'Cassandora Yellow', 'Coelia Greenshade', 'Drakenhof Nightshade', 'Druchii Violet', 'Carroburg Crimson'],
  // Basing
  ['Mordant Earth', 'Valhallan Blizzard', 'Astrogranite Debris', 'Astrogranite', 'Stirland Mud', 'Martian Ironcrust'],
  // Mediums
  [`'Ardcoat`, 'Stormshield', 'Contrast Medium', 'Lahmian Medium', 'Flow Enhancer', 'Thinner Medium', 'Paint Retarder'],

  ['Blood for the Blood God', 'Spiritstone Red', 'Typhus Corrosion', 'Hexwraith Flame', 'Tesseract Glow', `Nurgle's Rot`, 'Nihilakh Oxide'],
  ['Luxion Purple', 'Shyish Purple', 'Dreadful Visage', 'Volupus Pink', 'Sigvald Burgundy', 'Magos Purple', 'Doomfire Magenta', 'Blood Angels Red', 'Flesh Tearers Red', 'Gryph-Hound Orange', 'Iyanden Yellow', 'Imperial Fist'],
  ['Wyldwood', 'Garaghak\'s Sewer', 'Snakebite Leather', 'Gore-Grunta Fur', 'Skeleton Horde', 'Aggaros Dunes', 'Plaguebearer Flesh', 'Militarum Green', 'Dark Angels Green'],
  ['Black Templar', 'Basilicanum Grey', 'Ratling Grime', 'Gryph-Charger Grey', 'Space Wolves Grey', 'Apothecary White', 'Talassar Blue', 'Ultramarines Blue', 'Akhelian Green', 'Frostheart', 'Leviadon Blue', 'Terradon Turquoise', 'Kroxigor Scales', 'Aethermatic Blue', 'Aeldari Emerald'],
  ['Fyreslayer Flesh', 'Guilliman Flesh', 'Darkoath Flesh']
]

function App() {

  const chunked = paintGroupsWanted.map(paintGroupWanted => {
    return paintGroupWanted.map(paintWanted => {
      let mappedPaint = paintDb.find(paintDbItem => paintDbItem.name === paintWanted);
      if (!mappedPaint) {
        return {name: `COULDNT FIND ${paintWanted}`, type: 'base' as const, hex: '#ffffff'}
      }
      return mappedPaint;
    })
  })

  return (
    <div className="App">
      {chunked.map((chunk) => {
        return (
          <div className="column">
            <>
              {
                chunk.map(paint => {
                  return (<Paint paint={paint}/>)
                })
              }
            </>
          </div>
        )
      })}
    </div>
  );
}

export default App;
