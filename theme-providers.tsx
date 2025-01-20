"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof ThemeProvider>;

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
    const router = useRouter();

    return (
        <HeroUIProvider navigate={router.push}>
            <ThemeProvider {...themeProps}>{children}</ThemeProvider>
        </HeroUIProvider>
    );
}
