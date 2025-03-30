import Background from "@/components/Background";
import BgImage from "^/background.webp"
import Goals from "@/app/Goals";
import Stage from "@/components/Stage";

export default function Home() {

  return <>
    <Background href={BgImage}/>
    <Stage>
      <Goals/>
    </Stage>
  </>
}