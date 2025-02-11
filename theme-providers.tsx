"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof ThemeProvider>;

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
    return (
        <ThemeProvider {...themeProps}>{children}</ThemeProvider>
    );
}
