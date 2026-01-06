"use client";

import { createContext, useContext, useEffect, useState } from "react";

type StoryState = {
  ready: boolean;
  hud: boolean;
};

const StoryCtx = createContext<StoryState>({ ready: false, hud: false });

export function useStory() {
  return useContext(StoryCtx);
}

export default function Story({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [hud, setHud] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setReady(true), 800);
    const t2 = setTimeout(() => setHud(true), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <StoryCtx.Provider value={{ ready, hud }}>
      {children}
    </StoryCtx.Provider>
  );
}
