import "../app/globals.css";

const OutputPanel = () => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-lg">Output Panel</h2>
      <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded shadow">
        <p>Your output will appear here...</p>
      </div>
    </div>
  );
};

export default OutputPanel;
