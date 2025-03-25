import HomeBanner from "../src/components/Home/HomeBanner"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your One-Stop Solution for Professional Home Services",
  description:
    "Discover expert home services including plumbing, roofing, HVAC, electrical work, and more. Fast, reliable, and professional solutions tailored to your home improvement needs.",
};


export default function Home() {
  return (
  <>
  <HomeBanner />
  </>
  );
}
