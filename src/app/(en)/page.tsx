import { HomePage, homeMetadata } from "@/components/sites/retuertographicdesign/home-page";

export const metadata = homeMetadata("en");

export default function Home() {
  return <HomePage locale="en" />;
}
