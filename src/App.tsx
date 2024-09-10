import { Button } from "./components/Button";

const App = () => {
  return (
    <div className="flex items-center justify-center gap-10 h-screen">
      <Button size="large" variant="danger">
        Click Me
      </Button>
    </div>
  );
};

export default App;
