import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--bg-color)] flex items-center justify-center">
        <div className="w-full flex justify-center">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
