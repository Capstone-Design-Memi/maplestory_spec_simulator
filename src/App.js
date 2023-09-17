import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Main from "./Page/Main";
import CreateCharacter from "./Page/CreateCharacter";
import SelectCharacter from "./Page/SelectCharacter";
import TopMenu from "./Component/TopMenu/TopMenu";
import MakeItem from "./Page/MakeItem";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<TopMenu />}>
          <Route exact path="/" element={<SelectCharacter />} />
          <Route exact path="/createcharacter" element={<CreateCharacter />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/makeitem" element={<MakeItem />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
