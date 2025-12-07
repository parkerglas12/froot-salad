import { useState, useEffect } from "react";

import Confetti from "react-confetti";

import { AnimatePresence } from "framer-motion";

import { Temporal } from "@js-temporal/polyfill";

import Home from "./components/Home.jsx";
import Stats from "./components/Stats.jsx";
import Modal from "./components/Modal.jsx";
import Navbar from "./components/Navbar.jsx";
import Inventory from "./components/Inventory.jsx";
import CopyModal from "./components/CopyModal.jsx";
import MiniModal from "./components/MiniModal.jsx";
import Information from "./components/Information.jsx";

import {
  rows,
  cols,
  froots,
  identifier,
  currentDay,
  checkAttempt,
  getRandomSalad,
  createShareGrid,
  doubleXpThreshold,
} from "./utils/Helpers.js";

function App() {
  const [gridArray, setGridArray] = useState(new Array(rows * cols).fill(null));
  const [currentRound, setCurrentRound] = useState(1);
  const [roundGuesses, setRoundGuesses] = useState(0);
  const [currentAttempt, setCurrentAttempt] = useState(
    new Array(cols).fill(null)
  );
  const [result, setResult] = useState([]);
  const [fullResults, setFullResults] = useState([]);
  const [partial, setPartial] = useState([]);
  const [inSolution, setInSolution] = useState([]);
  const [notInPuzzle, setNotInPuzzle] = useState([]);
  const [solution, setSolution] = useState(getRandomSalad(froots));
  const [showModal, setShowModal] = useState(false);
  const [showMiniModal, setShowMiniModal] = useState(false);
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [modalType, setModalType] = useState("intro");
  const [prevSolution, setPrevSolution] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [xpGain, setXpGain] = useState(0);
  const [xpBoost, setXpBoost] = useState(1);
  const [dailyStreakIncreasing, setDailyStreakIncreasing] = useState(false);
  const [isLevelingUp, setIsLevelingUp] = useState(false);
  const [shareGrid, setShareGrid] = useState([]);

  // LOCAL STORAGE STATES
  const [frootCollection, setFrootCollection] = useState(() => {
    const storedValue = localStorage.getItem("frootCollection");
    return storedValue
      ? JSON.parse(storedValue)
      : {
          apple: 0,
          banana: 0,
          watermelon: 0,
          strawberry: 0,
          blueberry: 0,
          kiwi: 0,
          orange: 0,
          pineapple: 0,
          grape: 0,
          cherry: 0,
          pear: 0,
          raspberry: 0,
          lemon: 0,
          peach: 0,
        };
  });
  const [dateInformation, setDateInformation] = useState(() => {
    const storedValue = localStorage.getItem("dateInformation");
    return storedValue
      ? JSON.parse(storedValue)
      : {
          streak: 0,
          lastGame: Temporal.Now.plainDateISO().toString(),
          longestStreak: 0,
        };
  });
  const [guessDistributionData, setGuessDistributionData] = useState(() => {
    const storedValue = localStorage.getItem("guessDistributionData");
    return storedValue
      ? JSON.parse(storedValue)
      : [
          { name: "1st", count: 0 },
          { name: "2nd", count: 0 },
          { name: "3rd", count: 0 },
          { name: "4th", count: 0 },
          { name: "5th", count: 0 },
          { name: "6th", count: 0 },
        ];
  });
  const [lastSevenDays, setLastSevenDays] = useState(() => {
    const storedValue = localStorage.getItem("lastSevenDays");
    return storedValue ? JSON.parse(storedValue) : new Array(7).fill(false);
  });
  const [gamesPlayed, setGamesPlayed] = useState(() => {
    const storedValue = localStorage.getItem("gamesPlayed");
    return storedValue ? JSON.parse(storedValue) : 0;
  });
  const [wins, setWins] = useState(() => {
    const storedValue = localStorage.getItem("wins");
    return storedValue ? JSON.parse(storedValue) : 0;
  });
  const [losses, setLosses] = useState(() => {
    const storedValue = localStorage.getItem("losses");
    return storedValue ? JSON.parse(storedValue) : 0;
  });
  const [guesses, setGuesses] = useState(() => {
    const storedValue = localStorage.getItem("guesses");
    return storedValue ? JSON.parse(storedValue) : 0;
  });
  const [streak, setStreak] = useState(() => {
    const storedValue = localStorage.getItem("streak");
    return storedValue ? JSON.parse(storedValue) : 0;
  });
  const [maxStreak, setMaxStreak] = useState(() => {
    const storedValue = localStorage.getItem("maxStreak");
    return storedValue ? JSON.parse(storedValue) : 0;
  });
  const [level, setLevel] = useState(() => {
    const storedValue = localStorage.getItem("level");
    return storedValue ? JSON.parse(storedValue) : 1;
  });
  const [levelUp, setLevelUp] = useState(() => {
    const storedValue = localStorage.getItem("levelUp");
    return storedValue ? JSON.parse(storedValue) : 250;
  });
  const [xp, setXp] = useState(() => {
    const storedValue = localStorage.getItem("xp");
    return storedValue ? JSON.parse(storedValue) : 0;
  });
  const [introModalShown, setIntroModalShown] = useState(() => {
    const storedValue = localStorage.getItem("introModalShown");
    return storedValue ? JSON.parse(storedValue) : 0;
  });

  // UPDATING LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("frootCollection", JSON.stringify(frootCollection));
  }, [frootCollection]);

  useEffect(() => {
    localStorage.setItem("dateInformation", JSON.stringify(dateInformation));
  }, [dateInformation]);

  useEffect(() => {
    localStorage.setItem(
      "guessDistributionData",
      JSON.stringify(guessDistributionData)
    );
  }, [guessDistributionData]);

  useEffect(() => {
    localStorage.setItem("lastSevenDays", JSON.stringify(lastSevenDays));
  }, [lastSevenDays]);

  useEffect(() => {
    localStorage.setItem("gamesPlayed", JSON.stringify(gamesPlayed));
  }, [gamesPlayed]);

  useEffect(() => {
    localStorage.setItem("wins", JSON.stringify(wins));
  }, [wins]);

  useEffect(() => {
    localStorage.setItem("losses", JSON.stringify(losses));
  }, [losses]);

  useEffect(() => {
    localStorage.setItem("guesses", JSON.stringify(guesses));
  }, [guesses]);

  useEffect(() => {
    localStorage.setItem("streak", JSON.stringify(streak));
  }, [streak]);

  useEffect(() => {
    localStorage.setItem("maxStreak", JSON.stringify(maxStreak));
  }, [maxStreak]);

  useEffect(() => {
    localStorage.setItem("level", JSON.stringify(level));
  }, [level]);

  useEffect(() => {
    localStorage.setItem("levelUp", JSON.stringify(levelUp));
  }, [levelUp]);

  useEffect(() => {
    localStorage.setItem("xp", JSON.stringify(xp));
  }, [xp]);

  useEffect(() => {
    localStorage.setItem("introModalShown", JSON.stringify(introModalShown));
  }, [introModalShown]);

  // USE EFFECTS
  useEffect(() => {
    const day = currentDay(); // 0 = Monday 6 = Sunday
    const todayISO = Temporal.Now.plainDateISO();
    const gap = todayISO.since(
      Temporal.PlainDate.from(dateInformation.lastGame),
      { largestUnit: "days" }
    );
    const dayGap = gap.days;
    if (dayGap > day) {
      setLastSevenDays(new Array(7).fill(false));
    }
    if (!introModalShown) {
      setShowModal(true);
      setModalType("intro");
    } else {
      if (!lastSevenDays[day]) {
        setShowModal(true);
        setModalType("welcome");
      }
    }
    setDateInformation((prev) => {
      const lastDate = Temporal.PlainDate.from(prev.lastGame);
      const inBetween = Temporal.Now.plainDateISO().since(lastDate).days;
      if (inBetween > 1) {
        return {
          ...prev,
          streak: 0,
        };
      }
      return prev;
    });
    setXpBoost(dateInformation.streak >= doubleXpThreshold ? 2 : 1);
  }, []);

  // FUNCTIONS
  const { width, height } = useWindowSize();
  function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return { width: size[0], height: size[1] };
  }

  function gameReset() {
    setGamesPlayed((prev) => prev + 1);
    setPrevSolution(solution);
    setShowModal(true);
    setGridArray(new Array(rows * cols).fill(null));
    setCurrentRound(1);
    setCurrentAttempt(new Array(cols).fill(null));
    setResult([]);
    setFullResults([]);
    setPartial([]);
    setInSolution([]);
    setNotInPuzzle([]);
    setSolution(getRandomSalad(froots));
    updateDailyStreak();
    setLastSevenDays((prev) =>
      prev.map((day, index) => (index === currentDay() ? true : day))
    );
  }

  function handleModalClick() {
    setShowModal(false);
    setRoundGuesses(0);
    if (isLevelingUp) {
      setIsLevelingUp(false);
    }
    if (!introModalShown) {
      setIntroModalShown(true);
    }
  }

  async function copyToClipboard() {
    await navigator.clipboard.writeText(
      `My Froot Salad Solution:\n${shareGrid}Play Now: https://frootsalad.com`
    );
    setShowCopyModal(true);
    setTimeout(() => {
      setShowCopyModal(false);
    }, 1250);
  }

  function updateData(guessNum) {
    setGuessDistributionData((prev) =>
      prev.map((item) =>
        item.name === identifier[guessNum]
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  }

  function checkEnoughIngredients(recipe, amount) {
    return recipe.every((froot) => frootCollection[froot] >= amount)
      ? true
      : false;
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function updateDailyStreak() {
    const lastDate = Temporal.PlainDate.from(dateInformation.lastGame);
    const inBetween = Temporal.Now.plainDateISO().since(lastDate).days;
    setXpBoost(dateInformation.streak >= doubleXpThreshold ? 2 : 1);
    if (inBetween >= 1 || dateInformation.streak === 0) {
      const newStreak = dateInformation.streak + 1;
      setDailyStreakIncreasing(true);
      setDateInformation((prev) => ({
        streak: newStreak,
        lastGame: Temporal.Now.plainDateISO().toString(),
        longestStreak: Math.max(newStreak, prev.longestStreak ?? 0),
      }));
    } else {
      setDailyStreakIncreasing(false);
    }
  }

  function makeFrootItem(amount, xpGain, frootArray) {
    const hasEnough = frootArray.every(
      (froot) => frootCollection[froot] >= amount
    );
    if (hasEnough) {
      setFrootCollection((prev) =>
        Object.keys(prev).reduce((acc, key) => {
          if (frootArray.includes(key)) {
            acc[key] = prev[key] - amount;
          } else {
            acc[key] = prev[key];
          }
          return acc;
        }, {})
      );
      const newXp = xp + xpGain;
      setXp(newXp);
      setXpGain(xpGain);
      setShowMiniModal(true);
      setTimeout(() => {
        setShowMiniModal(false);
      }, 2000);
      let remainingLevelUp = levelUp;
      while (newXp >= remainingLevelUp) {
        remainingLevelUp *= 2;
        setLevelUp((prev) => prev * 2);
        setLevel((prev) => prev + 1);
      }
    }
  }

  function handleKeyPress(froot) {
    const firstNullIdx = gridArray.findIndex((item) => item === null);
    if (
      firstNullIdx < currentRound * cols &&
      !currentAttempt.includes(froot) &&
      !notInPuzzle.includes(froot)
    ) {
      setGridArray((prev) => {
        const newArray = [...prev];
        if (firstNullIdx === -1) return newArray;
        newArray[firstNullIdx] = froot;
        return newArray;
      });
      setCurrentAttempt((prev) => {
        const newArray = [...prev];
        const attemptFirstNull = currentAttempt.findIndex(
          (item) => item === null
        );
        newArray[attemptFirstNull] = froot;
        return newArray;
      });
    }
  }

  function handleOtherKeys(key) {
    const firstNullIdx = gridArray.findIndex((item) => item === null);
    if (
      key === "delete" &&
      firstNullIdx !== 0 &&
      firstNullIdx > currentRound * cols - cols
    ) {
      setGridArray((prev) => {
        const newArray = [...prev];
        newArray[firstNullIdx - 1] = null;
        return newArray;
      });
      setCurrentAttempt((prev) => {
        const newArray = [...prev];
        const attemptFirstNull = currentAttempt.findIndex(
          (item) => item === null
        );
        if (attemptFirstNull === -1) {
          newArray[cols - 1] = null;
        } else {
          newArray[attemptFirstNull - 1] = null;
        }
        return newArray;
      });
    } else if (
      (key === "enter" &&
        firstNullIdx % cols === 0 &&
        firstNullIdx !== currentRound * cols - cols) ||
      (key === "enter" && firstNullIdx === -1)
    ) {
      const newRound = currentRound + 1;
      const newResult = checkAttempt(currentAttempt, solution);
      const newFullResults = [...fullResults, ...newResult];
      newResult.forEach((res, idx) => {
        if (res === "absent") {
          setNotInPuzzle((prev) => [...prev, currentAttempt[idx]]);
        } else if (res === "correct") {
          setInSolution((prev) => [...prev, currentAttempt[idx]]);
        } else if (res === "left" || res === "right") {
          setPartial((prev) => [...prev, currentAttempt[idx]]);
        }
      });
      if (
        newResult.every((res) => res === "correct") &&
        newResult.length === cols
      ) {
        setRoundGuesses(newRound - 1);
        updateData(newRound - 1);
        setGuesses((prev) => prev + newRound - 1);
        setTimeout(() => {
          const newStreak = streak + 1;
          const xpGained = (100 + newStreak * 10) * xpBoost;
          const newXp = xp + xpGained;
          setXpGain(xpGained);
          setModalType("win");
          setWins((prev) => prev + 1);
          setFrootCollection((prev) =>
            Object.keys(prev).reduce((acc, key) => {
              acc[key] = prev[key] + (solution.includes(key) ? 1 : 0);
              return acc;
            }, {})
          );
          setXp(newXp);
          let remainingLevelUp = levelUp;
          if (newXp >= levelUp) {
            setIsLevelingUp(true);
          }
          while (newXp >= remainingLevelUp) {
            remainingLevelUp *= 2;
            setLevelUp((prev) => prev * 2);
            setLevel((prev) => prev + 1);
          }
          setStreak(newStreak);
          if (streak + 1 > maxStreak) {
            setMaxStreak(streak + 1);
          }
          gameReset();
        }, 2000);
      } else if (newRound > rows) {
        setTimeout(() => {
          setModalType("loss");
          setLosses((prev) => prev + 1);
          setGuesses((prev) => prev + rows);
          setStreak(0);
          gameReset();
        }, 2000);
      }
      setShareGrid(createShareGrid(newFullResults));
      setResult(newResult);
      setCurrentRound(newRound);
      setFullResults(newFullResults);
      setCurrentAttempt(new Array(cols).fill(null));
    }
  }

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <>
            <Modal
              xp={xp}
              level={level}
              xpGain={xpGain}
              streak={streak}
              levelUp={levelUp}
              shareGrid={shareGrid}
              modalType={modalType}
              solution={prevSolution}
              roundGuesses={roundGuesses}
              isLevelingUp={isLevelingUp}
              lastSevenDays={lastSevenDays}
              dateInformation={dateInformation}
              copyToClipboard={copyToClipboard}
              handleModalClick={handleModalClick}
              dailyStreakIncreasing={dailyStreakIncreasing}
            />
            {modalType === "win" && (
              <Confetti
                width={width}
                height={height}
                numberOfPieces={500}
              ></Confetti>
            )}
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMiniModal && <MiniModal xpGain={xpGain} />}
      </AnimatePresence>
      <AnimatePresence>{showCopyModal && <CopyModal />}</AnimatePresence>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === "home" && (
        <Home
          gridArray={gridArray}
          fullResults={fullResults}
          currentRound={currentRound}
          partial={partial}
          inSolution={inSolution}
          notInPuzzle={notInPuzzle}
          currentAttempt={currentAttempt}
          handleKeyPress={handleKeyPress}
          handleOtherKeys={handleOtherKeys}
        />
      )}
      {currentPage === "stats" && (
        <Stats
          xp={xp}
          wins={wins}
          level={level}
          losses={losses}
          streak={streak}
          guesses={guesses}
          levelUp={levelUp}
          maxStreak={maxStreak}
          gamesPlayed={gamesPlayed}
          lastSevenDays={lastSevenDays}
          dateInformation={dateInformation}
          guessDistributionData={guessDistributionData}
        />
      )}
      {currentPage === "information" && <Information />}
      {currentPage === "inventory" && (
        <Inventory
          level={level}
          makeFrootItem={makeFrootItem}
          frootCollection={frootCollection}
          checkEnoughIngredients={checkEnoughIngredients}
        />
      )}
    </>
  );
}

export default App;
