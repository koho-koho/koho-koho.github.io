import React from 'react';
import getUserLocale from 'get-user-locale';
import {DateTime} from 'luxon';

import '../App.css';
import './nakath.css';
import Card from "./card";

const Nakath = () => {
    const user_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const user_locale = getUserLocale();

    const get_times = (nakath_time: DateTime, date_only?: boolean) => {

        const sl_time_formatted = date_only ?
            nakath_time.setLocale("si-LK").toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY) :
            nakath_time.setLocale("si-LK").toLocaleString(DateTime.DATETIME_FULL) ?? ""

        const user_time = date_only ?
            nakath_time.setZone(user_timezone).setLocale(user_locale).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY) :
            nakath_time.setZone(user_timezone).setLocale(user_locale).toLocaleString(DateTime.DATETIME_FULL) ?? ""

        return [sl_time_formatted, user_time]
    }

    return (
        <div className="nakath-container">
            <Card titles={["නව සඳ බැලීම", "Observing the new moon for the new lunar year"]}
                  times={get_times(
                      DateTime.fromObject({year: 2025, month: 3, day: 30},
                          {zone: 'Asia/Colombo'})
                      , true)}/>

            <Card titles={["පරණ අවුරුද්ද සඳහා ස්නානය", "Bathing for the old year"]}
                  times={get_times(
                      DateTime.fromObject({year: 2025, month: 4, day: 13},
                          {zone: 'Asia/Colombo'})
                      , true)}/>

            <Card titles={["පුණ්‍ය කාලයේ ආරම්භය", "Start of inauspicious time"]}
                  times={get_times(
                      DateTime.fromObject({year: 2025, month: 4, day: 13, hour: 20, minute: 57, second: 0},
                          {zone: 'Asia/Colombo'})
                  )}/>

            <Card titles={["අලුත් අවුරුදු උදාව", "Dawn of the new year"]}
                  times={get_times(
                      DateTime.fromObject({year: 2025, month: 4, day: 14, hour: 3, minute: 21, second: 0},
                          {zone: 'Asia/Colombo'})
                  )}/>

            <Card titles={["පුණ්‍ය කාලයේ අවසානය", "End of inauspicious time"]}
                  times={get_times(
                      DateTime.fromObject({year: 2025, month: 4, day: 14, hour: 9, minute: 45, second: 0},
                          {zone: 'Asia/Colombo'})
                  )}/>

            <Card titles={["ආහාර පිසීම", "Preparation of the traditional meal"]}
                  times={get_times(
                      DateTime.fromObject({year: 2025, month: 4, day: 14, hour: 4, minute: 4, second: 0},
                          {zone: 'Asia/Colombo'})
                  )}/>

            <Card
                titles={["වැඩ ඇල්ලීම, ගනුදෙනු කිරීම හා ආහාර අනුභවය", "Engaging in work, transactions and consuming the traditional meal made"]}
                times={get_times(
                    DateTime.fromObject({year: 2025, month: 4, day: 14, hour: 6, minute: 44, second: 0},
                        {zone: 'Asia/Colombo'})
                )}/>

            <Card titles={["හිසතෙල් ගෑම", "Anointing oil"]}
                  times={get_times(
                      DateTime.fromObject({year: 2025, month: 4, day: 16, hour: 9, minute: 4, second: 0},
                          {zone: 'Asia/Colombo'})
                  )}/>

            <Card titles={["රැකීරක්‍ෂා සඳහා පිටත්ව යෑම", "Depart for work"]}
                  times={get_times(
                      DateTime.fromObject({year: 2025, month: 4, day: 17, hour: 9, minute: 3, second: 0},
                          {zone: 'Asia/Colombo'})
                  )}/>

            <Card titles={["නව සඳ බැලීම", "Observing the new moon for the new solar year"]}
                  times={get_times(
                      DateTime.fromObject({year: 2025, month: 5, day: 1},
                          {zone: 'Asia/Colombo'})
                      , true)}/>
        </div>

    );
}

export default Nakath;