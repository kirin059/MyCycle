import React from "react";
import moment from "moment";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import {
  Happy,
  Normal,
  Sad,
  Unhappy,
} from "../../utils/styles/emotion_styledIcon";

const DateCellRender = (value) => {
  const { data } = useSWR(`/api/diary/`, fetcher);

  const getDayInfo = () => {
    const diaryData = data && data.diaryData;
    let calendarData;
    let diaryMoment;

    for (let i in diaryData) {
      diaryMoment = moment(diaryData[i].createdAt).format("YYYY-MM-DD");

      if (diaryMoment === value.format("YYYY-MM-DD")) {
        calendarData = [
          {
            emotion: diaryData[i].emotion,
            content: diaryData[i].content,
          },
        ];
      }
    }

    return calendarData ;
  };


  const EmotioinRender = ({ emotion }) => {
    switch (emotion) {
      case "happy":
        return <Happy size="30px" emotion="none" />;
      case "normal":
        return <Normal size="30px" emotion="none" />;
      case "unhappy":
        return <Unhappy size="30px" emotion="none" />;
      case "sad":
        return <Sad size="30px" emotion="none" />;
      default:
        return <div></div>;
    }
  };

  const dayInfo = getDayInfo();

  return (
    <div>
      {dayInfo.map((info) => (
        <div>
          <EmotioinRender emotion={info.emotion} />
        </div>
      ))}
    </div>
  );
};

export default DateCellRender;