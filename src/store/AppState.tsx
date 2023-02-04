/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { createContext } from "react";

interface Props {
  children: React.ReactNode;
}

export interface AppState {
  theme: "dark" | "light";
}

export interface IContext extends AppState {
  toggleTheme: () => void;
}

export const AppContext = createContext<IContext>({
  theme: "dark",
  toggleTheme: () => {}
});

const Store: FC<Props> = ({ children }) => {
  const [sync, setSync] = useState(false);
  const [store, setStore] = useState<AppState>({ theme: "dark" });

  const toggleTheme = () => {
    localStorage.setItem("theme", store.theme === "dark" ? "light" : "dark");

    setStore({
      ...store,
      theme: store.theme === "dark" ? "light" : "dark"
    });
    setSync(!sync);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      setStore({ ...store, theme: theme as "dark" | "light" });
    }
  }, [sync]);

  return (
    <AppContext.Provider
      value={{ theme: store.theme, toggleTheme: () => toggleTheme() }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
