"use client"
import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme()
    function toggleTheme() {
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
        console.log(`Set theme from ${theme} to ${newTheme}`)
    }
    
    return (
        <>
            <Button
                variant="ghost"
                className="group/toggle h-8 w-8 px-0"
                onClick={toggleTheme}
            >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
        </>
    )
}
