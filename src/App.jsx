import { CustomCard } from "./components/card/CustomCard";
import { Container } from "./components/container/Container";

function App() {
  return (
    <>
      <main>
        <section className="py-16">
          <Container>
            <h1 className="text-4xl font-bold text-blue-950">Tasks</h1>
          </Container>
        </section>

        <section className="bg-purple-300 py-12">
          <Container>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[1, 2, 3, 4].slice().map((card, i) => (
                <CustomCard key={i} />
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
