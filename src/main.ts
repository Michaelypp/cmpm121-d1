// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
//import tileUrl from "./assets/tile.svg?no-inline";
import flowerUrl from "./assets/flowerbutton.png?no-inline";

const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "D1 project";

const image = document.createElement("img");
image.src = flowerUrl;
image.alt = "A teal tile with a cream circle";
image.width = 96;
image.height = 96;

//text element showcasing players total number of petals
const currentPetals = document.createElement("p");
currentPetals.textContent = "0 petals";

//text element showcasing players total number of passive petals
//passive petals == petals per second
const passivePetals = document.createElement("p");
passivePetals.textContent = "0 petals per secons";

//buttons for upgrade
const upgrade = document.createElement("button");
upgrade.innerText = "6 petals";

const upgradePass = document.createElement("button");
upgradePass.innerText = "6 petals";

//number added to mouse click on image
let clickBoost = 1;

//command pattern inspired by L07 to contain the passive boosters
interface passiveBoost {
  (base: number): number;
}

const allPassives: passiveBoost[] = [];

app.append(heading, image, currentPetals, passivePetals, upgrade, upgradePass);

//number of petals
let petalCounter: number = 0;

image.addEventListener("click", () => {
  petalCounter += clickBoost;
  currentPetals.textContent = petalCounter + " petals";
});

upgrade.addEventListener("click", function () {
  if (petalCounter >= 6) {
    clickBoost++;
    petalCounter -= 6;
  } else alert("Not enought petals!");
});

upgradePass.addEventListener("click", function () {
  if (petalCounter >= 6) {
    allPassives.push((x) => x + 0.01);
    petalCounter -= 6;
  } else alert("Not enought petals!");
});

setInterval(function () {
  //for (const passive in allPassives) {
  //petalCounter += passive(petalCounter);
  //}
  currentPetals.textContent = petalCounter + " petals";
}, 1000);
