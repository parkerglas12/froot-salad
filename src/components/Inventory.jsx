import { LockKeyhole } from "lucide-react";

import StandItem from "./StandItem.jsx";

import {
  tropicalSmoothieContent,
  freshSmoothieContent,
  berrySmoothieContent,
  appleJuiceContent,
  pinkLemonadeContent,
  frootPunchContent,
  cherryJamContent,
  grapeJellyContent,
  blueberryJamContent,
} from "../utils/FrootStand.js";

function Inventory({
  level,
  makeFrootItem,
  frootCollection,
  checkEnoughIngredients,
}) {
  return (
    <main className="inventory-container flex-center">
      <section className="inventory-layout">
        <h2 className="heading section-label">Froot Collection</h2>
        <section className="collection-grid">
          {Object.entries(frootCollection).map(([key, value]) => (
            <div
              className="collection-item flex-center"
              key={key}
              style={{ flexDirection: "column", gap: "0.1rem" }}
            >
              <img
                src={`${key}.webp`}
                alt={`number of ${key}s you have`}
                className="collection-froot"
              />
              <div className="flex-center">
                <h3 className="text-med">{value}</h3>
              </div>
            </div>
          ))}
        </section>
        <h2 className="heading section-label m2">Froot Stand</h2>
        <section className="stand-grid">
          <section className="stand-wrapper flex-center">
            {level >= 3 ? (
              <>
                <h3 className="text-med m3">Make Sweet Smoothies!</h3>
                <div className="stand-content flex-center">
                  <StandItem
                    content={tropicalSmoothieContent}
                    makeFrootItem={makeFrootItem}
                    checkEnoughIngredients={checkEnoughIngredients}
                  />
                  <StandItem
                    content={freshSmoothieContent}
                    makeFrootItem={makeFrootItem}
                    checkEnoughIngredients={checkEnoughIngredients}
                  />
                  <StandItem
                    content={berrySmoothieContent}
                    makeFrootItem={makeFrootItem}
                    checkEnoughIngredients={checkEnoughIngredients}
                  />
                </div>
              </>
            ) : (
              <div
                className="flex-center"
                style={{
                  flexDirection: "column",
                  gap: "0.35rem",
                  padding: "0.5rem 0",
                }}
              >
                <LockKeyhole size={26} color={"#d1d5db"} />
                <h3 className="text-sm">Unlocks At Level 3</h3>
              </div>
            )}
          </section>
          <section className="stand-wrapper flex-center">
            {level >= 5 ? (
              <>
                <h3 className="text-med m3">Make Delicious Juice!</h3>
                <div className="stand-content flex-center">
                  <StandItem
                    content={appleJuiceContent}
                    makeFrootItem={makeFrootItem}
                    checkEnoughIngredients={checkEnoughIngredients}
                  />
                  <StandItem
                    content={pinkLemonadeContent}
                    makeFrootItem={makeFrootItem}
                    checkEnoughIngredients={checkEnoughIngredients}
                  />
                  <StandItem
                    content={frootPunchContent}
                    makeFrootItem={makeFrootItem}
                    checkEnoughIngredients={checkEnoughIngredients}
                  />
                </div>
              </>
            ) : (
              <div
                className="flex-center"
                style={{
                  flexDirection: "column",
                  gap: "0.35rem",
                  padding: "0.5rem 0",
                }}
              >
                <LockKeyhole size={26} color={"#d1d5db"} />
                <h3 className="text-sm">Unlocks At Level 5</h3>
              </div>
            )}
          </section>
          <section className="stand-wrapper flex-center">
            {level >= 7 ? (
              <>
                <h3 className="text-med m3">Make Yummy Jam!</h3>
                <div className="stand-content flex-center">
                  <StandItem
                    content={cherryJamContent}
                    makeFrootItem={makeFrootItem}
                    checkEnoughIngredients={checkEnoughIngredients}
                  />
                  <StandItem
                    content={grapeJellyContent}
                    makeFrootItem={makeFrootItem}
                    checkEnoughIngredients={checkEnoughIngredients}
                  />
                  <StandItem
                    content={blueberryJamContent}
                    makeFrootItem={makeFrootItem}
                    checkEnoughIngredients={checkEnoughIngredients}
                  />
                </div>
              </>
            ) : (
              <div
                className="flex-center"
                style={{
                  flexDirection: "column",
                  gap: "0.35rem",
                  padding: "0.5rem 0",
                }}
              >
                <LockKeyhole size={26} color={"#d1d5db"} />
                <h3 className="text-sm">Unlocks At Level 7</h3>
              </div>
            )}
          </section>
        </section>
      </section>
    </main>
  );
}

export default Inventory;
