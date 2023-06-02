import { useEffect, useState } from "react";

export default function useRedirect() {
  const [redirect, setRedirect] = useState(false);
  //   const [component, setComponent] = useState();

  useEffect(() => {
    console.log("Loaded");

    setTimeout(() => {
      setRedirect(true);
    }, 1500);
  }, []);

  return { redirect };
}
