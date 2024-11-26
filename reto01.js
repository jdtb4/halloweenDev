const whisper = "d~~~~~a";
const suspects = [
  "Dracula",
  "Freddy Krueger",
  "Jason Voorhees",
  "Michael Myers",
];

const whisper2 = "~r~dd~";
const suspects2 = ["Freddy", "Freddier", "Fredderic"];

const whisper4 = "mi~~def";
const suspects4 = ["Midudev", "Midu", "Madeval"];

function findTheKiller(whisper, suspects) {
  let regexPattern =
    "^" + whisper.replace(/~/g, ".") + (whisper.endsWith("$") ? "$" : "");

  const regex = new RegExp(regexPattern, "i");
  const matches = suspects.filter((suspect) => regex.test(suspect));

  return matches.length === 1
    ? matches[0]
    : matches.length > 1
    ? matches.join(",")
    : "";
}

console.log(findTheKiller(whisper, suspects)); // Dracula
console.log(findTheKiller(whisper2, suspects2)); // Freddy,Freddier
console.log(findTheKiller(whisper4, suspects4)); // Midudev,Midu
