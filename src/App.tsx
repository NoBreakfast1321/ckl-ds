import { Badge } from "./components/ds/Badge";
import { Button } from "./components/ds/Button";

export const App = () => {
  return (
    <div className="flex gap-4 p-4">
      <Button label="Button" />
      <Badge label="Badge" />
    </div>
  );
};
