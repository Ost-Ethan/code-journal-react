import React, { useState } from "react";

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

export function ImageContainer() {
  return (
    <div className="column-half">
      <img
        id="formImage"
        className="input-b-radius form-image"
        src="../public/placeholder-image-square.jpg"></img>
    </div>
  );
}

export function TitleInput() {
  return (
    <>
      <label className="margin-bottom-1 d-block" htmlFor="title">
        Title
      </label>
      <input
        id="formTitle"
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        name="title"
        type="text"></input>
      <label className="margin-bottom-1 d-block" htmlFor="imageUrl">
        Photo URL
      </label>
      <input
        id="formURL"
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        name="imageUrl"
        type="text"></input>
    </>
  );
}

export function NotesInput() {
  return (
    <div className="column-full">
      <label>
        Notes:
        <textarea
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



export default function NewEntryForm() {


  function handleSubmit (e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

  }


  return (
    <>
      <h1>New Entry</h1>
      <form id="entryForm" onSubmit={(e) => handleSubmit(e)}>
        <div className="row margin-bottom-1">
          <ImageContainer />
          <div className="column-half">
            <TitleInput />
          </div>
        </div>
        <div className="row margin-bottom-1">
          <NotesInput />
        </div>
       <SubmitButton/>
      </form>
    </>
  );
}
