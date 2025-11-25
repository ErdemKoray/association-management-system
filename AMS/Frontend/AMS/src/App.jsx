import './App.css';
import TestButton from '@/components/TestButton';
function App() {
  return (
    <>
      <div className="min-h-screen w-screen bg-gray-900 flex flex-col items-center justify-center gap-4 text-white p-0 m-0">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Frontend Mimarisi
        </h1>
        <p className="text-gray-400">Path Alias (@) ve Paket Testi</p>

        <TestButton />
      </div>
    </>
  );
}

export default App;
