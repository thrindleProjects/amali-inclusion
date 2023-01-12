export function formatDate(date: string): string {
	const d = new Date(date);
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const dayOfWeek = daysOfWeek[d.getDay()];
	const dateOfMonth = d.getDate();
	const month = months[d.getMonth()];
	const year = d.getFullYear();

	return `${dayOfWeek}, ${dateOfMonth} ${month}, ${year}`;
}

export function formatDateNum(date: string): string {
	const d = new Date(date);
	const year = d.getFullYear();
	const month = d.getMonth() + 1; // getMonth() returns a zero-based month (0-11), so we need to add 1 to get the month number (1-12)
	const day = d.getDate();

	return `${year}-${month}-${day}`;
}
