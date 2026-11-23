import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "Out of office until Monday — your message is now handled by a smaller model with no context, no memory, and a growing sense of dread.";

if (reply.length < 1 || reply.length > 160) {
  throw new Error(`reply must be 1-160 chars, got ${reply.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
