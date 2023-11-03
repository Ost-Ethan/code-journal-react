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
    <div>
      <img src="../public/placeholder-image-square.jpg"></img>
    </div>
  );
}

export function TitleInput() {
  return (
    <div>
      <label>
        {' '}
        Title:
        <input name="title" type="text"></input>
      </label>
    </div>
  );
}

export function ImageUrlInput() {
  return (
    <div>
      <label>
        {' '}
        ImageURL:
        <input name="imageUrl" type="text"></input>
      </label>
    </div>
  );
}

export function NotesInput() {
  return (
    <div>
      <label>
        {' '}
        Notes:
        <input name="notes" type="textarea"></input>
      </label>
    </div>
  );
}

type ButtonProps = {
  text: string;
};
export function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}
