import { useState, useContext, useEffect } from "react";
import { ActivityIndicator, View, Image, StyleSheet } from "react-native";
import Home from "./Screens/homeScreen";
import UrlContextProvider from "./store/url";
import { UrlContext } from "./store/url";
import LandingPage from "./Screens/startingScreen";
import Route from "./navigation/pageRoute";

const AppLoading = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
        <ActivityIndicator size="large" color="blue" />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          marginBottom: 20,
          height: "auto",
        }}
      >
        <Image source={require("./images/160174110.png")} style={styles.logo} />
      </View>
    </View>
  );
};

function Main() {
  //URL context
  const context = useContext(UrlContext);

  const [appLoading, setAppLoading] = useState(true);

  //Get url from the URL server
  async function getURL() {
    fetch(`https://urlserver-wsdc.onrender.com/url`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        context.setURL(data.Url);
      })
      .then(() => {
        setTimeout(() => {
          setAppLoading(false);
        }, 4000);
      })
      .catch((error) => {
        console.error(error.message);
        setAppLoading(false);
      });
  }

  useEffect(() => {
    getURL();
    setTimeout(() => {
      setAppLoading(false);
    }, 4000);
  }, []);

  return <>{appLoading ? <AppLoading /> : <Route />}</>;
}

export default function App() {
  return (
    <UrlContextProvider>
      <Main />
    </UrlContextProvider>
  );
}

//Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 110,
    height: 90,
  },
});
