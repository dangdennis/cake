// Solution 1
function mergeRanges(meetings) {
  // merge meeting ranges
  var newSchedule = [meeting];
  meetings.sort((a, b) => {
    return a.startTime - b.startTime;
  });
  for (var x = 1; x < meetings.length - 1; x++) {
    if (meetings[x].endTime >= meetings[x + 1].startTime) {
      var startTime = meetings[x].startTime;
      var endTime = Math.max(meetings[x].endTime, meetings[x + 1].endTime);
      meetings[x] = { startTime, endTime };
      meetings.splice(x + 1, 1);
    } else if (meetings[x].startTime <= meetings[x - 1].endTime) {
      var startTime = meetings[x - 1].startTime;
      var endTime = Math.max(meetings[x].endTime, meetings[x - 1].endTime);
      meetings[x] = { startTime, endTime };
      meetings.splice(x - 1, 1);
    }
  }
  return meetings;
}

const meetings = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 }
  // {startTime: 9, endTime: 10}
];

console.log(mergeRanges(meetings));
