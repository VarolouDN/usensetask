import { useEffect, useState } from "react";

function useValidation(value) {
  const [isEasy, setIsEasy] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isStrong, setIsStrong] = useState(false);
  const [isInitial, setIsInitial] = useState(false);
  const [isShortPass, setIsShortPass] = useState(false);

  useEffect(() => {
    let hasLetters = /[a-zA-z]/.test(value);
    let hasDigits = /[0-9]/.test(value);
    let hasSymbols = /\W/.test(value);

    function setParams(param) {
      const valuesArr = [
        setIsEasy,
        setIsMedium,
        setIsStrong,
        setIsInitial,
        setIsShortPass,
      ];
      valuesArr.forEach((elem) => {
        if (elem !== param) {
          elem(false);
        }
      });
    }

    if (value.length === 0 && value === "") {
      setIsInitial(true);
      setParams(setIsInitial);
    }
    if (value.length > 0 && value.length < 8) {
      setIsShortPass(true);
      setParams(setIsShortPass);
    } else if (hasLetters && hasDigits && hasSymbols) {
      setIsStrong(true);
      setParams(setIsStrong);
    } else if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasDigits) ||
      (hasDigits && hasSymbols)
    ) {
      setIsMedium(true);
      setParams(setIsMedium);
    } else {
      if (value.length >= 8) {
        setIsEasy(true);
        setParams(setIsEasy);
      }
    }
  }, [value]);

  return { isInitial, isShortPass, isEasy, isMedium, isStrong };
}
export { useValidation };
