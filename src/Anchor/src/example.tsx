import Anchor from "./index";

export default function Example() {
  return (
    <Anchor onClick={() => console.log("好的")} hoverStyleType="bg-color">
      请勿随地大小便
    </Anchor>
  );
}
