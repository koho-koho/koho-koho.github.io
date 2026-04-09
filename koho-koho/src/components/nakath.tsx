import React from 'react';
import getUserLocale from 'get-user-locale';
import {DateTime} from 'luxon';

import '../App.css';
import './nakath.css';
import Card from "./card";

const Nakath = () => {
    const user_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(user_timezone);
    const user_locale = getUserLocale();

    const get_times = (nakath_time: DateTime, date_only?: boolean) => {

        const sl_time = date_only ?
            nakath_time.setLocale("si-LK").toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY) :
            nakath_time.setLocale("si-LK").toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY) ?? ""

        const user_time = date_only ?
            nakath_time.setZone(user_timezone).setLocale(user_locale).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY) :
            nakath_time.setZone(user_timezone).setLocale(user_locale).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY) ?? ""

        return [{time: sl_time, tz: 'Sri Lanka/Colombo'}, {time: user_time, tz: user_timezone}]
    }
    // Add backdrop of pahanawal emojis rolling around/ falling from the top
    return (
        <div className="nakath-container">
            <Card titles={["අභිනව චන්ද්‍ර වර්ෂය සඳහා නව සඳ බැලීම", "Observing the new moon for the lunar new year"]}
                  times={get_times(
                      DateTime.fromObject({year: 2026, month: 3, day: 30},
                          {zone: 'Asia/Colombo'})
                      , true)}/>

            <Card titles={["පරණ අවුරුද්ද සඳහා ස්නානය", "Bathing for the old year"]}
                  times={get_times(
                      DateTime.fromObject({year: 2026, month: 4, day: 13},
                          {zone: 'Asia/Colombo'})
                      , true)}
                  descriptions={["දිඹුල්පත් යුෂ මිශ්‍ර නානු ගා ස්නානය කොට ඉෂ්ට දේවතා අනුස්මරණයෙහි යෙදී වාසය මැනවි.",
                      "Take a herbal bath with juice extracted from woodapple leaves, and engage in religious observances and prayers to seek blessings for the coming year."]}/>

            <Card titles={["පුණ්‍ය කාලයේ ආරම්භය", "Start of neutral period"]}
                  times={get_times(
                      DateTime.fromObject({year: 2026, month: 4, day: 14, hour: 3, minute: 8, second: 0},
                          {zone: 'Asia/Colombo'})
                  )}
                  descriptions={["පළමුව ආහාර පාන ගෙන සියලු වැඩ අත්හැර ආගමික වතාවත් වල යෙදීම මැනවි.",
                      "First, consume food and drinks, then, pause all work and engage in religious observances."]}/>

            <Card titles={["🧨 අලුත් අවුරුදු උදාව", "Dawn of the new year"]}
                  times={get_times(
                      DateTime.fromObject({year: 2026, month: 4, day: 14, hour: 9, minute: 32, second: 0},
                          {zone: 'Asia/Colombo'})
                  )}
            descriptions={["පහන දල්වා අවුරුදු චාරිත්‍ර ආරම්භ කිරීම මැනවි.", "Light the oil lamp and begin the New Year 🪔"]}/>

            <Card titles={["ආහාර පිසීම", "Preparation of the traditional meal"]}
                  times={get_times(
                      DateTime.fromObject({year: 2026, month: 4, day: 14, hour: 10, minute: 51, second: 0},
                          {zone: 'Asia/Colombo'})
                  )}
                  descriptions={["රක්ත වර්ණ වස්ත්‍රාභරණයෙන් සැරසී දකුණු දිශාව බලා ලිප් බැද ගිණි මොළවා කිරිබතක් ද කැවිලි වර්ගයක්ද දී කිරි හා විළඳ ද පිළියෙල කර ගැනීම මැනවි.",
                      "Dressed in red colored clothes and facing South, light the hearth 🪔 Prepare milk rice (from the boiled milk) and sweetmeats."]}/>

            <Card
                titles={["වැඩ ඇල්ලීම, ගනුදෙනු කිරීම හා ආහාර අනුභවය", "Engaging in work, transactions and consuming the traditional meal made"]}
                times={get_times(
                    DateTime.fromObject({year: 2026, month: 4, day: 14, hour: 12, minute: 6, second: 0},
                        {zone: 'Asia/Colombo'})
                )}
                descriptions={["රක්ත වර්ණ වස්ත්‍රාභරණයෙන් සැරසී දකුණු දිශාව බලා සියළු වැඩ අල්ලා ගනුදෙනු කොට ආහාර අනුභවය මැනවි.",
                    "Dressed in red coloured clothing, facing South, engage in work/study, transactions and consumption of the traditional meal prepared."]}/>

            <Card titles={["පුණ්‍ය කාලයේ අවසානය", "End of neutral period"]}
                  times={get_times(
                      DateTime.fromObject({year: 2026, month: 4, day: 14, hour: 15, minute: 56, second: 0},
                          {zone: 'Asia/Colombo'})
                  )}/>

             <Card titles={["හිසතෙල් ගෑම", "Anointing oil"]}
                  times={get_times(
                      DateTime.fromObject({year: 2026, month: 4, day: 16, hour: 6, minute: 55, second: 0},
                          {zone: 'Asia/Colombo'})
                  )}
                  descriptions={["පච්ච වර්ණ හෙවත් කොළ පැහැති වස්ත්‍රාභරණයෙන් සැරසී නැගෙනහිර දිශාව බලා හිසට කොහොඹ පත්ද, පයට කොළොන් පත්ද තබා කොහොඹ පත් යුෂ මිශ්‍ර නානුද තෙල්ද ගා ස්නානය කිරීම මැනවි.",
                      "Dressed in green coloured clothing, facing East, put kohamba (neem) leaves above the head and kolon leaves under the feet and anoint oil infused with kohamba leaf juice."]}/>

            <Card titles={["රැකීරක්‍ෂා සඳහා පිටත්ව යෑම", "Depart for work"]}
                  times={get_times(
                      DateTime.fromObject({year: 2026, month: 4, day: 20, hour: 6, minute: 27, second: 0},
                          {zone: 'Asia/Colombo'})
                  )}
                  descriptions={["රන්වන් පැහැති වස්ත්‍රාභරණයෙන් සැරසී කිරි බතක් ද, එලකිරි මිශ්‍ර කැවිලි වර්ගයක්ද අනුභව කර, දකුණු දිශාව බලා පිටත්ව යාම මැනවි.",
                      "Dressed in gold coloured clothes, eat milk rice and sweetmeats which has been made with cow milk, and leave for work facing South."]}/>

            <Card titles={["පැළ සිටුවීම", "Planting"]}
                  times={get_times(
                      DateTime.fromObject({year: 2026, month: 4, day: 23, hour: 9, minute: 1, second: 0},
                          {zone: 'Asia/Colombo'})
                      , true)}
                  descriptions={["රන්වන් පැහැති වස්ත්‍රාභරණයෙන් සැරසී උතුරු දිශාව බලා පැල සිටුවීම මැනවි.", "Wear gold coloured clothes, plant plants facing North."]}/>

            <Card titles={["අභිනව සූර්ය වර්ෂය සඳහා නව සඳ බැලීම", "Observing the new moon for the solar new year"]}
                  times={get_times(
                      DateTime.fromObject({year: 2026, month: 4, day: 19},
                          {zone: 'Asia/Colombo'})
                      , true)}/>
        </div>

    );
}

export default Nakath;