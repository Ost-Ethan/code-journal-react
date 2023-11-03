import './App.css';
import './styles.css';
import { NewEntryForm, Header } from './JournalEntry.tsx';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <NewEntryForm />
      </div>
    </>
  );
}

export default App;
