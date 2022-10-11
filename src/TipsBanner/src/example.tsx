import TipsBanner from "./index";

export default function App() {
  return <TipsBanner onClose={() => console.log("close.")}>please do not defecate in public.</TipsBanner>;
}
