import React, { useState } from 'react';

export function Header() {
  return (
    <div className="header purple-background">
      <div className="container">
        <div className="row">
          <div className="column-full d-flex align-center">
            <h1 className="white-text">Code Journal</h1>
            <a className="entries-link white-text">Entries</a>
          </div>
        </div>
      </div>
    </div>
  );
}

type ImgContainerProps = {
  src: string;
};

export function ImageContainer({ src }: ImgContainerProps) {
  return (
    <div className="column-half">
      <img id="formImage" className="input-b-radius form-image" src={src}></img>
    </div>
  );
}
type InputProps = {
  setTitle: (string: string) => void;
  setImgUrl: (string: string) => void;
  imgUrl: string;
};

export function TitleInput({ setTitle, setImgUrl, imgUrl }: InputProps) {
  return (
    <>
      <label className="margin-bottom-1 d-block" htmlFor="title">
        Title
      </label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        id="formTitle"
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        name="title"
        type="text"></input>
      <label className="margin-bottom-1 d-block" htmlFor="imageUrl">
        Photo URL
      </label>
      <input
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
        id="formURL"
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        name="imageUrl"
        type="text"></input>
    </>
  );
}
type NotesInputProps = {
  setNotes: (string: string) => void;
};

export function NotesInput({ setNotes }: NotesInputProps) {
  return (
    <div className="column-full">
      <label>
        Notes:
        <textarea
          onChange={(e) => setNotes(e.target.value)}
          className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
          cols={30}
          rows={10}></textarea>
      </label>
    </div>
  );
}

export function SubmitButton() {
  return (
    <div className="column-full d-flex justify-between">
      <button></button>
      <button className="input-b-radius text-padding purple-background white-text right-button">
        Save
      </button>
    </div>
  );
}

export function NewEntryForm() {
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(title);
    console.log(imgUrl);
    console.log(notes);
  }

  return (
    <>
      <h1>New Entry</h1>
      <form id="entryForm" onSubmit={(e) => handleSubmit(e)}>
        <div className="row margin-bottom-1">
          <ImageContainer src={imgUrl} />
          <div className="column-half">
            <TitleInput
              setTitle={setTitle}
              setImgUrl={setImgUrl}
              imgUrl={imgUrl}
            />
          </div>
        </div>
        <div className="row margin-bottom-1">
          <NotesInput setNotes={setNotes} />
        </div>
        <SubmitButton />
      </form>
    </>
  );
}
