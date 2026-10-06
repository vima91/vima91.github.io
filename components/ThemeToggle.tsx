"use client";

import { useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};
const themes = [{value: "system", label: "System", icon: Monitor}, {value: "light", label: "Light", icon: Sun}, {value: "dark", label: "Dark", icon: Moon}];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  return <div className="theme-picker" role="group" aria-label="Color theme">{themes.map(({value, label, icon: Icon}) => <button key={value} type="button" title={label + " theme"} aria-label={label + " theme"} aria-pressed={mounted && theme === value} onClick={() => setTheme(value)}><Icon size={17} aria-hidden="true" /></button>)}</div>;
}
