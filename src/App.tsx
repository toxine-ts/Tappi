import './App.css';

function App() {
  return (
    <div className="app">
      <iframe
        src="./godot/index.html"
        title="Tappy Plane"
        style={{ width: '100%', height: '100vh', border: 0 }}
        allow="fullscreen; gamepad; autoplay"
      />
    </div>
  );
}

export default App;
