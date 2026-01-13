import { Badge } from "./components/atoms/Badge";
import { Button } from "./components/atoms/Button";

export const App = () => {
  return (
    <div className="flex gap-4 p-4">
      <Button label="Button" />
      <Badge label="Badge" />
    </div>
  );
};
