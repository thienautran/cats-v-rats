import { event } from 'sveltekit-sse'

/**
 * @param {number} milliseconds
 * @returns
 */
const delay = milliseconds => new Promise(r => setTimeout(r, milliseconds))
let num= "f";

function updateCount() {
    if (num === "f") {
        num = "mouse";
    }
    else if (num === "mouse") {
        num = "f";
    }
}

setInterval(updateCount, 2000);

export function GET() {
  return event(async emit => {
    while (true) {
      emit(`${num}`)
      await delay(1000)
    }
  }).toResponse()
}