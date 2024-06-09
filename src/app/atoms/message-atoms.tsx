import { atom } from 'jotai'

export const messageHeaderImageAtom = atom("");
export const messageHeaderShowAtom = atom(true);
export const messageBodyMessageAtom = atom("We have an exciting offer. Are you interested in hearing more?");
export const messageFooterMessageAtom = atom("Reply 'STOP' to opt out");
export const messageFooterShowAtom = atom(true);
export const messageButtonsAtom = atom([
  { label: "Talk to a styling expert" },
  { label: "Play with a tennis expert" },
  { label: "Listen to a fortuneteller" },
]);
export const messageButtonsShowAtom = atom(true);