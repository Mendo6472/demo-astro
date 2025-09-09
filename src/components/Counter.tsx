import React, { useState } from "react";

export default function Counter(): JSX.Element {
	const [count, setCount] = useState<number>(0);
	return (
		<div className="row" role="group" aria-label="contador">
			<button className="button alt" onClick={() => setCount((c) => Math.max(0, c - 1))} aria-label="decrementar">
				-1
			</button>
			<span aria-live="polite" aria-atomic="true">{count}</span>
			<button className="button" onClick={() => setCount((c) => c + 1)} aria-label="incrementar">
				+1
			</button>
		</div>
	);
}


