import { useEffect, useState } from "react";

const useTopFixer = () => {
	const [top, settop] = useState(false);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				settop(true);
			} else {
				settop(false);
			}
		});
	}, []);

	return top;
};

export default useTopFixer;
