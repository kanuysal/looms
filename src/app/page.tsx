import { Metadata } from "next";
import HomeFourPage from "./(homes)/home-4/page";

export const metadata: Metadata = {
  title: "INTERLOOMS - Interlooms Home",
};

export default function Home() {
  return (
    <>
      <HomeFourPage />
    </>
  );
}
