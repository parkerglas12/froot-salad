import { LockKeyhole } from "lucide-react";

function Collection({ level, makeFrootItem, frootCollection }) {
  return (
    <>
      <section className="collection-layout">
        <h2 className="heading effect max-cols">Froot Collection</h2>
        <div className="collection-grid">
          {Object.entries(frootCollection).map(([key, value]) => (
            <div className="collection-item flex-center br" key={key}>
              <img
                src={`${key}.webp`}
                alt={`${key}`}
                className="collection-froot"
              />
              <div className="flex-center">
                <h2 className="text-med">{value}</h2>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm collection-note">
          -You collect all the froots from the solution when you win!
        </p>
        <h2 className="heading effect max-cols m2">Machines</h2>
        <div className="machines-grid">
          <div className="machine-item flex-center">
            {level >= 3 ? (
              <>
                <h2 className="text-med">Smoothie Blender</h2>
                <img src="smoothie-blender.webp" alt="Smoothie Blender" />
                <p className="text-sm">-Requires 1 of each froot</p>
                <div className="machine-item-info">
                  {/* <div className="flex-center">
                    <Clock size={25} color={"#111"} />
                    <p className="text-sm">5 min</p>
                  </div> */}
                  <p className="text-sm">+150 XP</p>
                </div>
                <button
                  className="collection-btn btn text-med"
                  onClick={() => makeFrootItem(1, 150)}
                >
                  Blend!
                </button>
              </>
            ) : (
              <>
                <LockKeyhole className="icon" size={40} color={"#111"} />
                <p className="text-sm">Unlocks At Level 3</p>
              </>
            )}
          </div>
          <div className="machine-item flex-center">
            {level >= 5 ? (
              <>
                <h2 className="text-med">Juice Press</h2>
                <img src="juice-press.webp" alt="Juice Press" />
                <p className="text-sm">-Requires 3 of each froot</p>
                <div className="machine-item-info">
                  {/* <div className="flex-center">
                    <Clock size={25} color={"#111"} />
                    <p className="text-sm">5 min</p>
                  </div> */}
                  <p className="text-sm">+500 XP</p>
                </div>
                <button
                  className="collection-btn btn text-med"
                  onClick={() => makeFrootItem(3, 500)}
                >
                  Press!
                </button>
              </>
            ) : (
              <>
                <LockKeyhole className="icon" size={40} color={"#111"} />
                <p className="text-sm">Unlocks At Level 5</p>
              </>
            )}
          </div>
          <div className="machine-item flex-center">
            {level >= 7 ? (
              <>
                <h2 className="text-med">Jam Maker</h2>
                <img src="jam-maker.webp" alt="Jam Maker" />
                <p className="text-sm">-Requires 5 of each froot</p>
                <div className="machine-item-info">
                  {/* <div className="flex-center">
                    <Clock size={25} color={"#111"} />
                    <p className="text-sm">5 min</p>
                  </div> */}
                  <p className="text-sm">+1500 XP</p>
                </div>
                <button
                  className="collection-btn btn text-med"
                  onClick={() => makeFrootItem(5, 1500)}
                >
                  Make!
                </button>
              </>
            ) : (
              <>
                <LockKeyhole className="icon" size={40} color={"#111"} />
                <p className="text-sm">Unlocks At Level 7</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Collection;
