import React, { useCallback, useEffect, useState } from "react";

function getInitialTheme(): "light" | "dark" {
	try {
		const stored = localStorage.getItem("theme");
		if (stored === "light" || stored === "dark") return stored;
		return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	} catch {
		return "light";
	}
}

export default function ThemeToggle(): JSX.Element {
	const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

	const applyTheme = useCallback((next: "light" | "dark") => {
		const root = document.documentElement;
		if (next === "dark") root.classList.add("dark");
		else root.classList.remove("dark");
		try {
			localStorage.setItem("theme", next);
		} catch {}
	}, []);

	useEffect(() => {
		applyTheme(theme);
	}, [theme, applyTheme]);

	return (
		<button
			className="button alt"
			onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
			aria-pressed={theme === "dark"}
			aria-label="Alternar tema"
			title="Alternar tema"
		>
			{theme === "dark" ? "🌙" : "☀️"}
		</button>
	);
}


