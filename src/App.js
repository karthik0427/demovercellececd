import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
        <h1>iam App</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/reg" element={<Reg/>} />
                <Route path="/h" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;
