import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Sources from "./pages/Sources";
import SourcesFavorites from "./pages/SourcesFavorites";
import SourcesMicrosoftGraph from "./pages/SourcesMicrosoftGraph";
import SourcesTodoist from "./pages/SourcesTodoist";
import Health from "./pages/Health";
import Results from "./pages/Results";
import ResultsFull from "./pages/ResultsFull";
import ResultsByLevel from "./pages/ResultsByLevel";
import ResultsAlignment from "./pages/ResultsAlignment";
import History from "./pages/History";
import Settings from "./pages/Settings";
import HistoryDetail from "./pages/HistoryDetail";
import Exports from "./pages/Exports";
import RunComparison from "./pages/RunComparison";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Routes>
        <Route element={<Layout />}>
                <Route path="/" element={<Landing />} />
      <Route path="/sources" element={<Sources />} />
      <Route path="/sources/favorites" element={<SourcesFavorites />} />
      <Route path="/sources/microsoft-graph" element={<SourcesMicrosoftGraph />} />
      <Route path="/sources/todoist" element={<SourcesTodoist />} />
      <Route path="/health" element={<Health />} />
      <Route path="/results" element={<Results />} />
      <Route path="/results/full" element={<ResultsFull />} />
      <Route path="/results/by-level" element={<ResultsByLevel />} />
      <Route path="/results/alignment" element={<ResultsAlignment />} />
      <Route path="/history" element={<History />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/history/:id" element={<HistoryDetail />} />
      <Route path="/exports" element={<Exports />} />
      <Route path="/run-comparison" element={<RunComparison />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;