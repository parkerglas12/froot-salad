function StandItem({ content, makeFrootItem }) {
  return (
    <div className="stand-item">
      <img
        src={content.img}
        alt={content.name}
        onClick={() =>
          makeFrootItem(content.number, content.xp, content.recipe)
        }
        className="item-img"
      />
      <h2 className="text-sm">{content.name}</h2>
      <div className="recipe-froots flex-center">
        {content.number > 1 ? <p className="text-sm">{content.number}x</p> : ""}
        {content.recipe.map((froot) => (
          <img src={`${froot}.webp`} alt={froot} key={froot} />
        ))}
      </div>
      <p className="text-sm">+{content.xp.toLocaleString("en-us")} XP</p>
    </div>
  );
}

export default StandItem;
