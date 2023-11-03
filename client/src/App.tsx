import './App.css';
import './styles.css';
import { NewEntryForm, Header, EntriesView } from './JournalEntry.tsx';
import { useState } from 'react';

function App() {
  const [view, setView] = useState(false);
  return (
    <>
      <Header />
      <div className="container">
        {view ? (
          <NewEntryForm setView={setView} view={view} />
        ) : (
          <EntriesView />
        )}
      </div>
    </>
  );
}

export default App;
