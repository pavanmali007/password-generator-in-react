import React, { useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = React.useState(8);
  const [numbersAllowed, setNumbersAllowed] = React.useState(false);
  const [charactersAllowed, setCharactersAllowed] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const passInputRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) {
      str += "1234567890";
    }
    if (charactersAllowed) {
      str += `!#$%&-.=?@_`;
    }
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    console.log("passord:", pass);
  }, [numbersAllowed, charactersAllowed, length]);

  const handleCopy = () => {
    if (Math.random() < 0.5) {
      passInputRef.current.select();
      document.execCommand("copy");
    } else {
      passInputRef.current.select()
      window.navigator.clipboard.writeText(password);
    }
  };

  useEffect(() => {
    passwordGenerator();
  }, [numbersAllowed, charactersAllowed, length]);

  return (
    <>
      <div className="bg-gray-900 h-screen text-green-300 p-7">
        <h1 className="text-4xl text-center">Password Generator</h1>
        <div className="text-2xl p-3 m-7 flex justify-center">
          <div className=" transition-all ease-in-out duration-1000 border border-gray-700 p-5 rounded-lg bg-teal-950">
            <div className="flex border border-gray-500 rounded-lg bg-gray-200">
              <input
                ref={passInputRef}
                value={password}
                className="transition-all ease-in-out duration-1000 w-full rounded px-3 py-1 text-green-800"
                type="text"
                placeholder="Generated Password"
              />
              <button
                onClick={handleCopy}
                className="bg-sky-800 text-gray-200 px-4 py-1 rounded-lg cursor-pointer"
              >
                Copy
              </button>
            </div>
            <div className="flex items-center gap-1 mt-5">
              <input
                className="cursor-pointer"
                min={6}
                max={20}
                value={length}
                type="range"
                onChange={(e) => setLength(e.target.value)}
              />
              <p className="">Lenght ({length})</p>
              <input
                onChange={() => setNumbersAllowed((prev) => !prev)}
                id="numbers"
                className="ml-4 mr-1 scale-180"
                type="checkbox"
              />
              <label forhtml="numbers" className="">
                Numbers
              </label>
              <input
                onChange={() => setCharactersAllowed((prev) => !prev)}
                id="characters"
                className="ml-4 mr-1 scale-180"
                type="checkbox"
              />
              <label forhtml="characters" className="">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
