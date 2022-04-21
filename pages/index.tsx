import { useRouter } from "next/router";
import { NextPage } from "next/types";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const userLoggedIn = false;

  useEffect(() => {
    if (userLoggedIn) {
      router.push('/dashboard');
    } else {
      router.push('/home');
    }

  }, [userLoggedIn])
  // TODO: Replace with proper PageSpinner. Consider also adding an 'ifError' show PageError etc.
  return <h2>Loading...</h2>
}

export default Home