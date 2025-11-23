function StandItem({ content, makeFrootItem, checkEnoughIngredients }) {
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
      <h3 className="text-sm">{content.name}</h3>
      <h3 className="text-sm">+{content.xp.toLocaleString("en-us")} XP</h3>
      <div
        className={`recipe-froots flex-center ${
          checkEnoughIngredients(content.recipe, content.number)
            ? "light-green"
            : "light-red"
        }`}
      >
        {content.number > 1 ? <p className="text-sm">{content.number}x</p> : ""}
        {content.recipe.map((froot) => (
          <img
            src={`${froot}.webp`}
            alt={`${froot} used in this recipe`}
            key={froot}
          />
        ))}
      </div>
    </div>
  );
}

export default StandItem;
