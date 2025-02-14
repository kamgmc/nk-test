import { ReactNode, StrictMode } from "react";
import { HeroUIProvider } from "@heroui/system";
import SonnerProvider from "@/lib/sonner/SonnerProvider.tsx";

interface GlobalProviderProps {
  children: ReactNode;
}

export default function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    <StrictMode>
      <HeroUIProvider>
        <SonnerProvider>{children}</SonnerProvider>
      </HeroUIProvider>
    </StrictMode>
  );
}
