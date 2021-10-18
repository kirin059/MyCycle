import React from 'react';
import { Calendar, Modal, Button } from "antd";
import moment from 'moment';
// import 'moment/locale/ko_KR'; 
import locale from "antd/es/calendar/locale/ko_KR";
import { useState } from 'react/cjs/react.development';

//moment.locale('ko_KR');


const Mileage = () => {

    const [selectDiary, setSelectDiary] = useState([]);
    const [dateCellModal, setDateCellModal] = useState(false);

    const onSelectDateCell = (value) => {
        console.log(value, 'value 온셀렉트데이트 셀')  // 각 날짜의 moment로 리턴
        // const diaryData = data && data.diaryData;
    
        // const filterData = diaryData && diaryData.filter((data) => {
        //   return (
        //     moment(data.createdAt).format("YYYY-MM-DD") === value.format("YYYY-MM-DD")
        //   );
        // });
    
        // setSelectDiary(filterData);
        //filterData[0] && setDateCellModal(true);
    };
    
    const handleOk = () => {
      setDateCellModal(false)
    };
    const handleCancel = () => {
      setDateCellModal(false)
    };
     

    return (
        <>
            {/* <Calendar
            locale={locale}
            dateCellRender={dateCellRender}
            onSelect={onSelectDateCell}
          />

          { /* <DiaryModal /> 
          <DiaryList selectedDiary={selectDiary} /> */}
            <Calendar
            locale={locale}
            onSelect={onSelectDateCell}
            />
           
            
           <Modal
            visible={dateCellModal}
            title={selectDiary?.title}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
            <Button key="back" onClick={handleCancel}>
              수정
            </Button>,
            <Button key="submit" type="primary" onClick={handleCancel}>
              확인
            </Button>,
          ]}
        >
          {selectDiary?.contents}
        </Modal>
        </>
    );
};

export default Mileage;