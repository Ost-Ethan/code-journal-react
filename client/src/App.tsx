import './App.css';
import './styles.css'
import NewEntryForm, {
  Header,
  ImageContainer,
  TitleInput,
  ImageUrlInput,
  NotesInput,
  Button,
} from './JouranalEntry.tsx';

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
