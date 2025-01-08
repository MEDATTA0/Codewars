function formatDuration() {
  let time = 3662;
  let durations = [];
  let years = Math.floor(time / 31536000);
  if (years !== 0) durations.push(`${years} ${years < 2 ? "year" : "years"}`);
  let days = Math.floor(time / 86400) % 365;
  if (days) durations.push(`${days} ${days < 2 ? "day" : "days"}`);
  let hours = Math.floor(time / 3600) % 24;
  if (hours) durations.push(`${hours} ${hours < 2 ? "hour" : "hours"}`);
  let minutes = Math.floor(time / 60) % 60;
  if (minutes)
    durations.push(`${minutes} ${minutes < 2 ? "minute" : "minutes"}`);
  let seconds = time % 60;
  if (seconds)
    durations.push(`${seconds} ${seconds < 2 ? "second" : "seconds"}`);

  if (durations.length === 1) return durations.join("");
  if (durations.length === 2) return durations.join(" and ");
  else {
    durations.splice(durations.length - 1, 0, "and");
    durations = durations.join(", ").split("");
    durations.splice(durations.lastIndexOf(","), 1);
    durations.splice(durations.lastIndexOf(","), 1);
    return durations.join("");
  }
}
console.log(formatDuration());

//   const words = [
//     "year",
//     "years",
//     "day",
//     "days",
//     "hour",
//     "hours",
//     "minute",
//     "minutes",
//     "second",
//     "seconds",
//   ];
//   return (
//     `${years === 0 ? "" : `${years} ${words[years < 2 ? 0 : 1]}, `}` +
//     `${days === 0 ? "" : `${days} ${words[years < 2 ? 2 : 3]}, `}` +
//     `${hours !== 0 ? `${hours} ${words[hours < 2 ? 4 : 5]}, ` : ""}` +
//     `${minutes !== 0 ? `${minutes} ${words[minutes < 2 ? 6 : 7]}, ` : ""}` +
//     `${seconds !== 0 ? `${seconds} ${words[seconds < 2 ? 8 : 9]}, ` : ""}`
//   );
// // `${days} ${
// //       words[days < 2 ? 2 : 3]
// //     }, ${hours} ${words[hours < 2 ? 4 : 5]}, ${minutes} ${
// //       words[minutes < 2 ? 4 : 5]
//     }, and ${seconds} ${words[seconds < 2 ? 6 : 7]}`;
