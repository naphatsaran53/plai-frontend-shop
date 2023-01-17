import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";
import { theme } from "@/theme";
import store, { persistor } from "@/redux/store";
import Layout from "@/views/Layout";
import React, { useEffect, useState, createContext } from "react";

import "@/styles/globals.scss";
import axios from "axios";

export const DataContext = createContext<any>([]);

export default function App({ Component, pageProps }: AppProps) {
  const [cartNum, setCartNum] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://m-plai.eazydevs.com/api/cartnum/U4fd7ba00a8a2f7edb9580139111d2687X"
      )
      .then((response) => {
        setCartNum(response.data.cart);
      });
  }, []);

  return (
    <DataContext.Provider value={{ cartNum, setCartNum }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ChakraProvider theme={theme} cssVarsRoot="body">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </DataContext.Provider>
  );
}
