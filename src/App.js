import { Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Main from "./Page/Main";
import CreateCharacter from "./Page/CreateCharacter";
import SelectCharacter from "./Page/SelectCharacter";
import TopMenu from "./Component/TopMenu/TopMenu";
import MakeItem from "./Page/MakeItem";
import Test from "./Parser/testpage/test";
import { Provider } from "react-redux";

export const AppContext = createContext();

function App() {
  const [cId, setCId] = useState(50);
  return (
    <div className="App">
      <AppContext.Provider value={{ cId, setCId }}>
        <Routes>
          <Route exact path="/test" element={<Test />}/>
          <Route element={<TopMenu />}>
            <Route exact path="/" element={<SelectCharacter />} />
            <Route
              exact
              path="/createcharacter"
              element={<CreateCharacter />}
            />
              <Route exact path="/main" element={<Main />} />
              <Route exact path="/makeitem" element={<MakeItem />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
