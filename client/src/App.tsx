import './App.css';
import './styles.css';
import { NewEntryForm, Header, EntriesView } from './JournalEntry.tsx';
import { useState } from 'react';

function App() {
  const [view, setView] = useState('');
  return (
    <>
      <Header setView={setView} />
      <div className="container">
        {view === 'entries' && <EntriesView setView={setView} view={view} />}
        {view === 'new' && <NewEntryForm setView={setView} view={view} />}
        {view === 'edit' && <p>words</p>}
      </div>
    </>
  );
}

export default App;
