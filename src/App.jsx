import HomePage from "@/pages/HomePage/Homepage";
import Header from "./components/common/Header/Header";
import { ROUTE } from "@/constants/route.js";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Routes>
          <Route path={ROUTE.HOME} element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
