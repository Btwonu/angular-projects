const equalizeHeight = (containerSelector: string) => {
	const container: Element | null = document.querySelector(containerSelector);

	if (container === null) return;

	const elements = Array.from(container.querySelectorAll('.js-equalize'));

	elements.forEach((ele: Element) => {
		(ele as HTMLElement).style.height = 'auto';
	});

	const heights = elements.map((ele: Element) => (ele as HTMLElement).offsetHeight);

	elements.forEach((ele: Element) => {
		(ele as HTMLElement).style.height = `${Math.max(...heights)}px`;
	});
};

export {
	equalizeHeight
};