import TipsBanner from ".";

export default function App() {
  return <TipsBanner onClose={() => console.log("close.")}>请勿随地大小便！</TipsBanner>;
}
