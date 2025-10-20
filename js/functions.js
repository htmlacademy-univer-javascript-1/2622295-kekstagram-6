function maxStringLength(str, maxLength) {
  if (str.length <= maxLength){
    return true;
  } else {
    return false;
  }
}

function isPalindrome(str){
  for (let i = 0; i<=str.length/2; i++){
    if (str.charAt(i) !== str.charAt(-1-i)){
      return false;
    }
  }
  return true;
}

function isMeetingWithinWorkHours(workStart, workEnd, meetingStart, duration) {
  const [workStartHours, workStartMinutes] = workStart.split(':').map(Number);
  const workStartTotal = workStartHours * 60 + workStartMinutes;

  const [workEndHours, workEndMinutes] = workEnd.split(':').map(Number);
  const workEndTotal = workEndHours * 60 + workEndMinutes;

  const [meetingStartHours, meetingStartMinutes] = meetingStart.split(':').map(Number);
  const meetingStartTotal = meetingStartHours * 60 + meetingStartMinutes;

  const meetingEndTotal = meetingStartTotal + duration;

  return meetingStartTotal >= workStartTotal && meetingEndTotal <= workEndTotal;
}
