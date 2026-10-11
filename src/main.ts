// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
import tileUrl from "./assets/tile.svg?no-inline";

const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "D1 project";

const image = document.createElement("img");
image.src = tileUrl;
image.alt = "A teal tile with a cream circle";
image.width = 96;
image.height = 96;

const message = document.createElement("p");
message.textContent = "Your project starts here.";

const upgrade = document.createElement("button");
upgrade.innerText = "6 petals";

let boost = 1;

app.append(heading, image, message, upgrade);

let petalCounter: number = 0;

image.addEventListener("click", () => {
  petalCounter += boost;
  message.textContent = petalCounter + " petals";
});

upgrade.addEventListener("click", function () {
  if (petalCounter >= 6) {
    boost += 1;
    petalCounter -= 6;
  } else alert("Not enought petals!");
});

setInterval(function () {
  petalCounter++;
  message.textContent = petalCounter + " petals";
}, 1000);
