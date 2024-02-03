const abstractClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});

const civilianHours = clockTime => ({
    ...clockTime,
    hours: date.getHours() > 12? clockTime.hours - 12 : clockTime.hours
})

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: clockTime.hours >=12 ? "PM" : "AM"
})
