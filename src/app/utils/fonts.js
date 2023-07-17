import { Play, Roboto } from "next/font/google";

export const play = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
