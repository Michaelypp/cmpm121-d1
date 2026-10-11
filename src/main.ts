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

let petalCounter: number = 0;

const message = document.createElement("p");
message.textContent = "Your project starts here.";

app.append(heading, image, message);

image.addEventListener("click", () => {
  petalCounter++;
  message.textContent = petalCounter + "";
});

setInterval(function () {
  petalCounter++;
  message.textContent = petalCounter + "";
}, 1000);
