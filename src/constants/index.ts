import events from "@/constants/events.json";
export function hasDatePassed(dateStr: string) {
  const now = new Date();
  const date = new Date(dateStr);

  // Normalize both to midnight so time of day doesn’t matter
  date.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  return date < now;
}
export function getUpcomingEvents() {
  return events.filter((event) => !hasDatePassed(event.date));
}

export function getPastEvents() {
  return events.filter((event) => hasDatePassed(event.date));
}
