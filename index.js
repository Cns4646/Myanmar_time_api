const express = require('express');
const moment = require('moment-timezone');

const app = express();

app.get('/get_time', (req, res) => {
    const yangonTime = moment().tz("Asia/Yangon");

    const data = {
        "year": yangonTime.year(),
        "month": yangonTime.month() + 1,  // JS months are 0-based
        "day": yangonTime.date(),
        "hour": yangonTime.hour(),
        "minute": yangonTime.minute(),
        "seconds": yangonTime.second(),
        "milliSeconds": yangonTime.millisecond(),
        "dateTime": yangonTime.toISOString(),
        "date": yangonTime.format('MM/DD/YYYY'),
        "time": yangonTime.format('HH:mm'),
        "timeZone": "Asia/Yangon",
        "dayOfWeek": yangonTime.format('dddd'),
        "dstActive": yangonTime.isDST()
    };

    res.json(data);
});

module.exports = app;
