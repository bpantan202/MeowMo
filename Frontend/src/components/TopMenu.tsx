import Image from "next/img";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div
      style={{
        background: " #CDE8E5",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between"
      }}
    >
      <div>
        <TopMenuItem title="> MeowMo <" pageRef="/" />
      </div>
      <div>
        <TopMenuItem title="MeowLog" pageRef="/meowlog" />
      </div>
    </div>
  );
}
