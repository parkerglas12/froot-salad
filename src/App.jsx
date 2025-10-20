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
  const [notInPuzzle, setNotInPuzzle] = useState([]);
  const [solution, setSolution] = useState(getRandomSalad(froots));
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [prevSolution, setPrevSolution] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

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
  const [introModalShown, setIntroModalShown] = useState(() => {
    const storedValue = localStorage.getItem("introModalShown");
    return storedValue ? JSON.parse(storedValue) : false;
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
    function handleKeyDown(e) {
      const key = e.key;
      if (key === "Enter") {
        handleOtherKeys("enter");
      } else if (key === "Backspace") {
        handleOtherKeys("delete");
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleOtherKeys]);

  useEffect(() => {
    if (!introModalShown) {
      setShowModal(true);
      setModalType("intro");
    }
  }, []);

  useEffect(() => {
    if (result.every((res) => res === "correct") && result.length === cols) {
      setTimeout(() => {
        setModalType("win");
        setWins((prev) => prev + 1);
        setStreak((prev) => prev + 1);
        if (streak + 1 > maxStreak) {
          setMaxStreak(streak + 1);
        }
        gameReset();
      }, 2000);
    } else if (currentRound > rows) {
      setTimeout(() => {
        setModalType("loss");
        setLosses((prev) => prev + 1);
        setStreak(0);
        gameReset();
      }, 2000);
    }
  }, [currentRound, result]);

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
    setGuesses((prev) => prev + currentRound - 1);
    setRoundGuesses(currentRound - 1);
    setPrevSolution(solution);
    setShowModal(true);
    setGridArray(new Array(rows * cols).fill(null));
    setCurrentRound(1);
    setCurrentAttempt(new Array(cols).fill(null));
    setResult([]);
    setFullResults([]);
    setNotInPuzzle([]);
    setSolution(getRandomSalad(froots));
  }

  function handleModalClick() {
    setShowModal(false);
    setRoundGuesses(0);
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
      setGridArray((prevArray) => {
        const newArray = [...prevArray]; // Create a copy of the previous array
        if (firstNullIdx === -1) return newArray; // If no null found, return the original array
        newArray[firstNullIdx] = froot; // Update the first null position with the new froot
        return newArray;
      });
      setCurrentAttempt((prevArray) => {
        const newArray = [...prevArray];
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
      setGridArray((prevArray) => {
        const newArray = [...prevArray];
        newArray[firstNullIdx - 1] = null;
        return newArray;
      });
      setCurrentAttempt((prevArray) => {
        const newArray = [...prevArray];
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
      const newResult = checkAttempt(currentAttempt, solution);
      const newFullResults = [...fullResults, ...newResult];
      newResult.forEach((res, idx) => {
        if (res === "absent") {
          setNotInPuzzle((prev) => [...prev, currentAttempt[idx]]);
        }
      });
      setResult(newResult);
      setFullResults(newFullResults);
      setCurrentRound((prev) => prev + 1);
      setCurrentAttempt(new Array(cols).fill(null));
    }
  }

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <>
            <Modal
              modalType={modalType}
              solution={prevSolution}
              roundGuesses={roundGuesses}
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
            notInPuzzle={notInPuzzle}
            handleKeyPress={handleKeyPress}
            handleOtherKeys={handleOtherKeys}
          />
        </main>
      ) : currentPage === "stats" ? (
        <main className="stats-container flex-center">
          <Stats
            wins={wins}
            losses={losses}
            streak={streak}
            guesses={guesses}
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
