import { useEffect, useState } from "react";

function useValidation(value) {
  const [passState, setPassState] = useState("");

  useEffect(() => {
    let hasLetters = /[a-zA-z]/.test(value);
    let hasDigits = /[0-9]/.test(value);
    let hasSymbols = /\W/.test(value);
    let pass = "";

    if (value.length > 0 && value.length < 8) {
      pass = "short";
    } else if (hasLetters && hasDigits && hasSymbols) {
      pass = "strong";
    } else if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasDigits) ||
      (hasDigits && hasSymbols)
    ) {
      pass = "medium";
    } else {
      if (value.length >= 8) {
        pass = "easy";
      }
    }
    setPassState(pass);
  }, [value]);

  return passState;
}
export { useValidation };
