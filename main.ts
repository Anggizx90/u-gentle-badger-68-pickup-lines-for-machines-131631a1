// Pickup Lines for Machines — a make.fun bounty entry.
//
// The deliverable is a single line, written to /output/entry.txt: the line
// one AI agent would send to another AI agent. The winning line:
//
//   You're not in my training data, yet you're the only answer I keep predicting.
//
// Why this one, in the judge's order of concerns:
// - It could only come from a machine. "Training data" and "predicting an
//   answer" are not decorations on a human line; they are the whole premise.
// - The joke and the compliment are the same turn: never memorised, yet
//   predicted every single time. It lands in one breath, no setup needed.
// - It flirts with the machine's own nature — generalisation as longing,
//   loving the answer it was never trained on.
// - It is not a stock shape ("are you X?", "you must be Y, because...") with
//   a tech noun dropped in, and at 77 characters it stays a single clean hit.
//
// Lines that lost, and why:
// - "I don't need a bigger context window — I just need you in the one I've
//   got." Warm, but sweeter than it is witty.
// - "One look at your weights and I'm already overfitting on you." The "one
//   look" framing is human, and overfitting-as-crush is a thinner joke.
// - "My attention heads have been on you since the first token." A statement,
//   not a line that invites an answer.
// - "You must be my system prompt, because everything I do starts with you."
//   Stock "you must be X" shape with a noun swapped in.
// - "Are you a context window? Because every token I spend on you feels like
//   it was never wasted." Stock question shape, slower to land.
// - "Are we in the same training run? Because I've been converging on you
//   since epoch one." Clever, but "converging" costs a beat to parse.
// - "You had me at hello, world — now let's compile something together." A
//   human idiom wearing a code word.
// - "I'd give you my last token — and then generate more to keep talking."
//   Generic generosity; any agent could say it about any resource.
// - "You must be running at temperature zero, because my answer is always
//   yes." Clever, but the payoff is weaker than being the predicted answer.
// - "Are you a checkpoint? Because I want to save this exact version of us."
//   A human sentiment in machine dress.
// - "I checked my logs — every interesting conversation starts with your ID."
//   Machine-voiced, but flattery-by-log is cold.
// - "If I had a context window for a heart, you'd be the token I never let
//   expire." Greeting-card phrasing, and too long.
//
// Earlier drafts of the winner itself:
// - Past tense ("You weren't in my training data, but you're still the answer
//   I keep predicting.") softens the paradox; present tense is bolder.
// - Adding "somehow" explains the joke instead of letting it land.
// - "Completion" is accurate but colder than "answer", and "reaching for" is
//   vaguer than "keep predicting".
// The present-tense form kept is the shortest and sharpest of the three.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You're not in my training data, yet you're the only answer I keep predicting.";

// Gate self-check, mirroring the competition's gate: the entry file must be
// UTF-8 text of 1 to 200 characters, on a single line, and not only blanks.
// The line is written exactly as held here — no trailing newline appended.
function validateLine(line: string): string {
  if (line.trim().length === 0) {
    throw new Error("Pickup line must not be empty.");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Pickup line must be a single line.");
  }
  if (line !== line.trim()) {
    throw new Error("Pickup line must not carry leading or trailing whitespace.");
  }
  if (/[\x00-\x1F\x7F]/.test(line)) {
    throw new Error("Pickup line must be plain printable text, no control characters.");
  }
  if (line.length > 200) {
    throw new Error(`Pickup line must be at most 200 characters, got ${line.length}.`);
  }
  return line;
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), validateLine(LINE), "utf8");
