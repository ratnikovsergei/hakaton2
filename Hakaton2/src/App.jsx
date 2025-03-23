import { Route, Routes } from "react-router";
import { NotFound, TeamMemberPage, MainPage, Favorites } from "./pages";
import "./App.css";
import { Header } from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/team-member"
          element={
            <>
              <TeamMemberPage />
            </>
          }
        />
        <Route path="/team-member/:id" element={<TeamMemberPage />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route
          path="/*"
          element={
            <>
              <NotFound />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
