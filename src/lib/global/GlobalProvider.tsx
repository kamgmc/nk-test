import { ReactNode, StrictMode } from "react";
import { HeroUIProvider } from "@heroui/system";
import SonnerProvider from "@/lib/sonner/SonnerProvider.tsx";
import RecoilProvider from "@/lib/recoil/RecoilProvider.tsx";

interface GlobalProviderProps {
  children: ReactNode;
}

export default function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    <StrictMode>
      <RecoilProvider>
        <HeroUIProvider>
          <SonnerProvider>{children}</SonnerProvider>
        </HeroUIProvider>
      </RecoilProvider>
    </StrictMode>
  );
}
