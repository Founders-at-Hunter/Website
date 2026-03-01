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
export function getPopularTags() {
  const freqMap = new Map();
  for (const e of events) {
    for (const tag of e.tags) {
      freqMap.set(tag, (freqMap.get(tag) || 0) + 1);
    }
  }
  console.log(freqMap);
  return [...freqMap.entries()].sort((a, b) => b[1] - a[1]).map(([key]) => key);
}
