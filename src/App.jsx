import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  const a = "filled";
  return (
    <div>
      <Header />
      <main className={`${a}-button`}>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
