import { Container } from "../container/Container";

export const Header = () => {
  return (
    <header className="py-4">
      <Container>
        <div className="flex justify-between align-middle">
          <h1 className="text-2xl font-bold">MyTasks</h1>
          <div>
            <button 
              className="btn"
            >+Add</button>
          </div>
        </div>
        <div className="divider"></div>
      </Container>
    </header>
  );
};
