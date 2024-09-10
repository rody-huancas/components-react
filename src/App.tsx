import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";

const App = () => {
  return (
    <div className="flex items-center justify-center gap-5 h-screen">
      <Button size="large" variant="danger">
        Click Me
      </Button>

      <Badge label="Active" type="success" />

      <Checkbox label="Check Me" />
    </div>
  );
};

export default App;
