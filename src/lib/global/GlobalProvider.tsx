import { ReactNode, StrictMode } from "react";

interface GlobalProviderProps {
  children: ReactNode;
}

export default function GlobalProvider({ children }: GlobalProviderProps) {
  return <StrictMode>{children}</StrictMode>;
}
