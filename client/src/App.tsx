import './App.css';
import {
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
      <h1>New Entry</h1>
      <ImageContainer />
      <TitleInput />
      <ImageUrlInput />
      <NotesInput />
      <Button text="save" />
    </>
  );
}

export default App;
