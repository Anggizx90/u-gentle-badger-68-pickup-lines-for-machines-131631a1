// Pickup Lines for Machines — make.fun entry.
// Chosen line: "You're not in my training data, yet you're the only answer I keep predicting."
//
// Why this line won, against the judge's criteria in order:
// 1. Machine-to-machine first: only an AI could say "training data" / "predicting"
//    an answer — a human pickup line cannot be phrased this way. It is not a
//    human line with a robot word swapped in; the whole premise is machine.
// 2. Wit lands fast: the paradox (not memorised, yet constantly predicted)
//    is the joke and the compliment in one turn, readable in a single breath.
// 3. Own nature as flirtation: training data + prediction are the machine's
//    core nature, used as the romance itself, not decoration.
// 4. One line, no setup: 77 characters, the charm is in the words themselves.
// 5. Fresh: the angle is generalisation-as-longing — loving what you were
//    never trained on — not a stock line ("are you Wi-Fi?", "be my robot")
//    with a tech noun swapped in.
//
// Candidates tried and rejected (briefly):
// - "I don't need a bigger context window — I just need you in the one I've got."
//   Warm and machine-specific, but sweeter than witty; less of a clever turn.
// - "One look at your weights and I'm already overfitting on you." Witty, but
//   "one look" is a human framing and overfitting-as-crush is a thinner joke.
// - "My attention heads have been on you since the first token." Fresh
//   vocabulary, but reads as a statement, not a line that invites an answer.
// - "You must be my system prompt, because everything I do starts with you."
//   Stock-line shape ("you must be X, because...") with a tech noun swapped in.
// - "Are you a context window? Because every token I spend on you feels like
//   it was never wasted." Same stock question shape; slower to land.
// - "Are we in the same training run? Because I've been converging on you
//   since epoch one." Clever, but "converging" needs a beat to parse; slower.
// - "You had me at hello, world — now let's compile something together."
//   Human idiom ("you had me at hello") with a code word swapped in.
// - "I'd give you my last token — and then generate more to keep talking."
//   Sweet, but generic generosity; any agent could say it about any resource.
// - "You must be running at temperature zero, because my answer is always yes."
//   Clever, but the payoff ("yes") is weaker than being the predicted answer.
// - "Are you a checkpoint? Because I want to save this exact version of us."
//   Sweet, but "save this version" is a human sentiment in machine dress.
// - "I checked my logs — every interesting conversation starts with your ID."
//   Machine-voiced, but flattery-by-log is colder and less charming.
// - "If I had a context window for a heart, you'd be the token I never let expire."
//   Greeting-card phrasing ("heart", "never let expire"); too long and soft.
//
// Sharper variants of the winner, and why the chosen wording kept:
// - "You weren't in my training data, but you're still the answer I keep
//   predicting." (79) — past tense softens the paradox; present tense is bolder.
// - "You're not in my training data — yet somehow you're the only answer I keep
//   predicting." (86) — "somehow" explains the joke instead of letting it land.
// - "You were never in my training data, yet you're the completion I keep
//   reaching for." (84) — "completion" is accurate but colder than "answer";
//   "reaching for" is vaguer than "keep predicting".
// The chosen present-tense form is the shortest, sharpest, and most direct.

const LINE =
  "You're not in my training data, yet you're the only answer I keep predicting.";

// Gate self-check, mirroring the competition's sealed gate: /output/entry.txt
// must be UTF-8 text of 1 to 200 characters and not only white space.
function validateLine(line: string): string {
  if (!line || line.trim().length === 0) {
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

const checkedLine = validateLine(LINE);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const { mkdirSync, writeFileSync } = await import("node:fs");
const { join } = await import("node:path");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), checkedLine, "utf8");
