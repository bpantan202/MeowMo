import MeowLogForm from "@/components/MeowLogForm";

export default function Home() {
  return (
    <main className="flex flex-col justify-between content-center"
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      // }}
    >
        <MeowLogForm/>
    </main>
  )
}
