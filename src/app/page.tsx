import StanddownExample from "@/components/StanddownExample";

export default function Home() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <StanddownExample
        title="Standdown POC"
        description="This component is exported as a GitHub npm package: @rakutenrewards/standdown-poc"
      />
    </main>
  );
}
