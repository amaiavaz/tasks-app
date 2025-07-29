function App() {
  return (
    <>
      <main>
        <h1 className="text-4xl font-bold text-blue-950">Tasks</h1>

        <article className="w-full max-w-2xl bg-gray-400 rounded-2xl overflow-hidden">
          <img src="/img01.png" alt="" />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-(--title-color)">Titulo de la card</h2>
            <p className="text-gray-100">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat omnis, cupiditate obcaecati saepe provident exercitationem, deleniti vel nesciunt, beatae possimus consequatur? Quod, placeat nihil adipisci necessitatibus vitae voluptatum fugit optio, suscipit quidem soluta laboriosam quaerat facilis, tempore aperiam. Est qui pariatur hic! Culpa omnis quasi amet eos, veritatis autem.</p>
            <a href="#">Leer mas</a>
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
