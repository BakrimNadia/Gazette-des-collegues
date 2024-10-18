'use client';

import { useRef } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }: { children: React.ReactNode }) {
  // Initialisation du store avec un useRef pour garantir qu'il n'est créé qu'une seule fois
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <ReduxProvider store={storeRef.current}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ReduxProvider>
  );
}
