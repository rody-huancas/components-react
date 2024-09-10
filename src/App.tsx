import { Badge } from "./components/Badge";
import { Button } from "./components/Button";

const App = () => {
  return (
    <div className="flex items-center justify-center gap-5 h-screen">
      <Button size="large" variant="danger">
        Click Me
      </Button>

      <Badge label="Active" type="success" />
    </div>
  );
};

export default App;
