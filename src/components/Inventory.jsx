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
    <>
      <section className="inventory-layout">
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
        <p className="text-sm inventory-note">
          -You collect all the froots from the solution when you win!
        </p>
        <h2 className="heading effect max-cols m2">Froot Stand</h2>
        <div className="stand-grid">
          <div className="stand-wrapper flex-center">
            {level >= 3 ? (
              <>
                <h2 className="text-med m3">Make Sweet Smoothies!</h2>
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
                <p className="text-sm">Unlocks At Level 3</p>
              </>
            )}
          </div>
          <div className="stand-wrapper flex-center">
            {level >= 5 ? (
              <>
                <h2 className="text-med m3">Make Delicious Juice!</h2>

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
                <p className="text-sm">Unlocks At Level 5</p>
              </>
            )}
          </div>
          <div className="stand-wrapper flex-center">
            {level >= 7 ? (
              <>
                <h2 className="text-med m3">Make Yummy Jam!</h2>
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
                <p className="text-sm">Unlocks At Level 7</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Inventory;
