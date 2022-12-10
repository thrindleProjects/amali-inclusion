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
