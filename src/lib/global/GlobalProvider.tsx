import { ReactNode, StrictMode } from "react";
import { HeroUIProvider } from "@heroui/system";

interface GlobalProviderProps {
  children: ReactNode;
}

export default function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    <StrictMode>
      <HeroUIProvider>{children}</HeroUIProvider>
    </StrictMode>
  );
}
