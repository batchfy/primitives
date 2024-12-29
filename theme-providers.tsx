"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
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
        <NextUIProvider navigate={router.push}>
            <ThemeProvider {...themeProps}>{children}</ThemeProvider>
        </NextUIProvider>
    );
}
