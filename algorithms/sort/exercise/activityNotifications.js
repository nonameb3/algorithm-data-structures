function activityNotificationsOld(expenditure = [], d) {
  const findMedian = (arr) => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };

  let activity = [];
  let notification = 0;

  // starter day
  for (let i = 0; i < d; i++) {
    activity.push(expenditure[i]);
  }

  for (let i = d; i < expenditure.length; i++) {
    const median = findMedian(activity);
    const spend = expenditure[i];

    // check noti
    if (spend >= 2 * median) {
      notification++;
    }

    // cal next day
    activity.shift();
    activity.push(spend);
  }

  return notification;
}

// better version
function activityNotifications(expenditure, d) {
  // Number of notifications
  let notification = 0;

  // Set midpoints for median calculation
  let [i1, i2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)];
  let m1, m2, m;

  // Initialize count sorted subarray
  let cs = new Array(201).fill(0);
  for (let i = d - 1; i >= 0; i--) cs[expenditure[i]]++;

  // Iterate through expenditures
  for (let i = d, l = expenditure.length; i < l; i++) {
    // Find median
    for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j;
    for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j;
    let m = (m1 + m2) / 2;

    // Check if notification is given
    if (expenditure[i] >= m * 2) notification++;

    // Replace subarray elements
    cs[expenditure[i - d]]--;
    cs[expenditure[i]]++;
  }

  return notification;
}

activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5); // 2
