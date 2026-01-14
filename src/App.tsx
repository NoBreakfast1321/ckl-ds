import { Badge } from "./components/ui/Badge";
import { Button } from "./components/ui/Button";

export const App = () => {
  return (
    <div className="flex gap-4 p-4">
      <Button label="Button" />
      <Badge label="Badge" />
    </div>
  );
};
