import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      <ItemList title="Artista" items={5} />

      <ItemList title="Músicas" items={10} />

    </div>
  );
};

export default Main;
