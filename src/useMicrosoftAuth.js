import { useState } from "react";

export const useMicrosoftAuth = () => {
  const [auth, setAuth] = useState(null);
  const [error, setError] = useState(null);

  const authHandler = (err, data) => {
    if (err) {
      console.log(err);
      setError(err);
    } else {
      console.log(data);
      setAuth(data);
    }
  }

  return { auth, error, authHandler };
}