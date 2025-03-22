import React from 'react';
import getUserLocale from 'get-user-locale';

import '../App.css';
import './nakath.css';
import Card from "./card";

const Nakath = () => {
    const user_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const user_locale = getUserLocale();

    const get_times = (nakath_time: Date, only_date?: boolean) => {
        const sl_time_formatted = only_date ? nakath_time.toLocaleDateString("si-LK", {timeZone: "Asia/Colombo", hour12: true}): nakath_time.toLocaleString("si-LK", {timeZone: "Asia/Colombo", hour12: true})
        const user_time = only_date? nakath_time.toLocaleDateString(user_locale, {timeZone: user_timezone, hour12: true}): nakath_time.toLocaleString(user_locale, {timeZone: user_timezone, hour12: true})

        return [sl_time_formatted, user_time]
    }

    return (
        <div className="container">
            {/*TODO: Flex-box*/}
            <Card titles={["නව සඳ බැලීම", "Observing the new moon"]}
                  times={get_times(new Date("2025-03-30 GMT+05:30"), true)}/>

            <Card titles={["පරණ අවුරුද්ද සඳහා ස්නානය", "Bathing for the old year"]}
                  times={get_times(new Date("2025-04-13 GMT+05:30"), true)}/>

            <Card titles={["පුණ්‍ය කාලයේ ආරම්භය", "Start of inauspicious time"]}
                  times={get_times(new Date("2025-04-13 20:57:00 GMT+05:30"))}/>

            <Card titles={["අලුත් අවුරුදු උදාව", "Dawn of the new year"]}
                  times={get_times(new Date("2025-04-14 03:21:00 GMT+05:30"))}/>

            <Card titles={["පුණ්‍ය කාලයේ අවසානය", "End of inauspicious time"]}
                  times={get_times(new Date("2025-04-14 09:45:00 GMT+05:30"))}/>

            <Card titles={["ආහාර පිසීම", "Preparation of the traditional meal"]}
                  times={get_times(new Date("2025-04-14 04:04:00 GMT+05:30"))}/>

            <Card
                titles={["වැඩ ඇල්ලීම, ගනුදෙනු කිරීම හා ආහාර අනුභවය", "Engaging in work, transactions and consuming the traditional meal made"]}
                times={get_times(new Date("2025-04-14 06:44:00 GMT+05:30"))}/>

            <Card titles={["හිසතෙල් ගෑම", "Anointing oil"]}
                  times={get_times(new Date("2025-04-16 09:04:00 GMT+05:30"))}/>

            <Card titles={["රැකීරක්‍ෂා සඳහා පිටත්ව යෑම", "Depart for work"]}
                  times={get_times(new Date("2025-04-17 09:03:00 GMT+05:30"))}/>
        </div>

    );
}

export default Nakath;