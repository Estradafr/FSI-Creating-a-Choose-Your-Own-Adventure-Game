const leftMsg =
  "You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?";
const followMsg =
  "You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should stay or spread the word about this magical safe haven. Will you stay or spread the word?";
const catStayMsg = "You live happily amongst the cats for the rest of your days.";
const spreadMsg =
  "After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.";
const continueMsg =
  "You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Do you take the ladder or the staircase?";
const ladderMsg =
  "After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.";
const staircaseMsg =
  "After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.";
const rightMsg =
  "You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Will you go towards the treasure or away?";
const treasureMsg =
  "The dragon wakes up and sits upright. You only have a moment to respond, do you choose stay or run?";
const dragonStayMsg =
  "You and the dragon have an uplifting conversation about local politics and become lifelong friends.";
const runMsg =
  "Quickly, you run back to the cave's entrance. Sheepish, you return home.";
const dragonAwayMsg =
  "After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?";
const drawMsg =
  "You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.";
const pickMsg =
  "You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.";
const retryMsg = "That path is invalid, you died. Please refresh and try again.";

let firstAnswer = prompt("Do you head left or right?").toLowerCase();
if (firstAnswer === "left") {
  let secondAnswer = prompt(leftMsg).toLowerCase();
  if (secondAnswer === "follow") {
    let thirdAnswer = prompt(followMsg).toLowerCase();
    if (thirdAnswer === "stay") {
      alert(catStayMsg);
    } else if (thirdAnswer === "spread" || "spread the word") {
      alert(spreadMsg);
    } else {
      alert(retryMsg);
    }
  } else if (secondAnswer === "continue") {
    let thirdAnswer = prompt(continueMsg).toLowerCase();
    if (thirdAnswer === "the ladder" || "ladder") {
      alert(ladderMsg);
    } else if (thirdAnswer === "the staircase" || "staircase") {
      alert(staircaseMsg);
    } else {
      alert(retryMsg);
    }
  } else {
    alert(retryMsg);
  }
} else if (firstAnswer === "right") {
  let secondAnswer = prompt(rightMsg).toLowerCase();
  if (secondAnswer === "towards the treasure" || "to the treasure" || "treasure") {
    let thirdAnswer = prompt(treasureMsg).toLowerCase();
    if (thirdAnswer === "stay") {
      alert(dragonStayMsg);
    } else if (thirdAnswer === "run") {
      alert(runMsg);
    } else {
      alert(retryMsg);
    }
  } else if (secondAnswer === "away") {
    let thirdAnswer = prompt(dragonAwayMsg);
    if (thirdAnswer === "draw it") {
      alert(drawMsg);
    } else if (thirdAnswer === "pick it") {
      alert(pickMsg);
    } else {
      alert(retryMsg);
    }
  } else {
    alert(retryMsg);
  }
} else {
  alert(retryMsg);
}