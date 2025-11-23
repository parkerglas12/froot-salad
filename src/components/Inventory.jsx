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
        <h2 className="heading effect max-cols">Froot Collection</h2>
        <section className="collection-grid">
          {Object.entries(frootCollection).map(([key, value]) => (
            <div className="collection-item flex-center br" key={key}>
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
        <h3 className="text-sm inventory-note">
          *You collect all the froots from the solution when you win!
        </h3>
        <h2 className="heading effect max-cols m2">Froot Stand</h2>
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
              <>
                <LockKeyhole className="icon" size={40} color={"#111"} />
                <h3 className="text-sm">Unlocks At Level 3</h3>
              </>
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
              <>
                <LockKeyhole className="icon" size={40} color={"#111"} />
                <h3 className="text-sm">Unlocks At Level 5</h3>
              </>
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
              <>
                <LockKeyhole className="icon" size={40} color={"#111"} />
                <h3 className="text-sm">Unlocks At Level 7</h3>
              </>
            )}
          </section>
        </section>
      </section>
    </main>
  );
}

export default Inventory;
