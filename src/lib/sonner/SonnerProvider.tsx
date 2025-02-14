import { ReactNode } from "react";
import { Toaster } from "sonner";

interface SonnerProviderProps {
  children: ReactNode;
}

export default function SonnerProvider({ children }: SonnerProviderProps) {
  return (
    <>
      <Toaster position="top-right" />
      {children}
    </>
  );
}
