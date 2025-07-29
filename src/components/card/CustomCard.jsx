
export const CustomCard = () => {
  return (
    <article className="w-full max-w-xl bg-gray-200 rounded-2xl overflow-hidden">
      <img src="/img01.png" alt="tailwind"/>
      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-bold text-(--title-color)">Titulo de la card</h2>
        <p className="text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat omnis, cupiditate obcaecati saepe provident exercitationem, deleniti vel nesciunt, beatae possimus consequatur? Quod, placeat nihil adipisci necessitatibus.</p>
        <a href="#">Leer mas</a>
      </div>
    </article>
  )
}
