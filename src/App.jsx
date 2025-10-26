import { useState, useEffect } from "react";

import Confetti from "react-confetti";

import { AnimatePresence } from "framer-motion";

import ReactGA from "react-ga4";

import Grid from "./components/Grid.jsx";
import HowTo from "./components/HowTo.jsx";
import Stats from "./components/Stats.jsx";
import Modal from "./components/Modal.jsx";
import Navbar from "./components/Navbar.jsx";
import Keyboard from "./components/Keyboard.jsx";

import {
  rows,
  cols,
  froots,
  checkAttempt,
  getRandomSalad,
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
  const [modalType, setModalType] = useState("intro");
  const [prevSolution, setPrevSolution] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [xpGain, setXpGain] = useState(0);
  const [isLevelingUp, setIsLevelingUp] = useState(false);

  // LOCAL STORAGE STATES
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

  // ANALYTICS
  const key = import.meta.env.VITE_KEY;
  const isProd = window.location.hostname !== "localhost";
  useEffect(() => {
    if (isProd) {
      ReactGA.initialize(key);
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, []);

  // USE EFFECTS
  useEffect(() => {
    if (!introModalShown) {
      setShowModal(true);
      setModalType("intro");
    }
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

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleKeyPress(froot) {
    const firstNullIdx = gridArray.findIndex((item) => item === null); // Find the index of the first null element
    if (
      firstNullIdx < currentRound * cols &&
      !currentAttempt.includes(froot) &&
      !notInPuzzle.includes(froot)
    ) {
      setGridArray((prev) => {
        const newArray = [...prev]; // Create a copy of the previous array
        if (firstNullIdx === -1) return newArray; // If no null found, return the original array
        newArray[firstNullIdx] = froot; // Update the first null position with the new froot
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
      setGuesses((prev) => prev + newRound - 1);
      setRoundGuesses(newRound - 1);
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
        setTimeout(() => {
          const newStreak = streak + 1;
          const xpGained = 100 + newStreak * 10;
          const newXp = xp + 100 + newStreak * 10;
          setXpGain(xpGained);
          setModalType("win");
          setWins((prev) => prev + 1);
          setXp(newXp);
          if (newXp >= levelUp) {
            setLevelUp((prev) => prev * 2);
            setLevel((prev) => prev + 1);
            setIsLevelingUp(true);
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
          setStreak(0);
          gameReset();
        }, 2000);
      }
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
              modalType={modalType}
              solution={prevSolution}
              roundGuesses={roundGuesses}
              isLevelingUp={isLevelingUp}
              handleModalClick={handleModalClick}
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
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === "home" ? (
        <main className="main-container flex-center">
          <Grid
            gridArray={gridArray}
            fullResults={fullResults}
            currentRound={currentRound}
          />
          <Keyboard
            partial={partial}
            inSolution={inSolution}
            notInPuzzle={notInPuzzle}
            handleKeyPress={handleKeyPress}
            handleOtherKeys={handleOtherKeys}
          />
        </main>
      ) : currentPage === "stats" ? (
        <main className="stats-container flex-center">
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
          />
        </main>
      ) : (
        <main className="howto-container flex-center">
          <HowTo />
        </main>
      )}
    </>
  );
}

export default App;
