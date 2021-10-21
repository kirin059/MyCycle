import React, { useRef, useState }from 'react';
import locale from "antd/es/calendar/locale/ko_KR";
import styled from 'styled-components';
import { Modal, Button, Form, Input, Rate, InputNumber, Upload, Calendar } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const StyledCalendar = styled(Calendar)`
    .ant-tabs-content-holder {
        margin: 0 20px;
    }
    .ant-picker-calendar-header {
        padding: 10px;
    }
    .ant-picker-calendar-mode-switch {
        display: none;
    }
`;

const Mileage = () => {
    const [selectDay, setSelectDay] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clicked, setClicked] = useState(false)

    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
         return e && e.fileList;
    };
    const distanceValue = useRef('');


    const onSelectDateCell = (date) => {
        setIsModalOpen(true)
        setSelectDay(date.format("YYYY-MM-DD"))
        dateCellRender(date)
    };

    const handleOk = () => {
        setIsModalOpen(!isModalOpen)
        setClicked(true)
      };
    
    const handleClose = () => {
        setIsModalOpen(!isModalOpen)
    };

    
    // const getModalContents = (data) => {
    //     console.log(data, "데이터 받아온 모달데이터")

    //     return (
    //         <div>{data}</div>
    //     )
    // }

    const dateCellRender = (value) => {
        //console.log(selectDay, '셀렉트데이')
        const saveBtn = document.getElementById("save")
        const distancevalues = distanceValue?.current.value;
        console.log(distancevalues, '디스턴스밸류')

        //let thisCell = onSelectDateCell();

            let calendarData; // 선택한날짜
            let dailyContents;  // 기입내용
           

              if (selectDay === value.format("YYYY-MM-DD") && clicked ) {
                return <div>{distancevalues} km</div>
              }
  
    }

    return (
        <>
            <StyledCalendar
                locale={locale}
                onSelect={onSelectDateCell}  // 날짜가 선택되었을 때 발생하는 이벤트
                dateCellRender={dateCellRender}
            />
            {/* {isModalOpen && <DateModal
                handleOk={handleOk}
                handleClose={handleClose}
                selectDay={selectDay}
                isModalOpen={isModalOpen}
                modalContents={getModalContents}
            />} */}

            {isModalOpen && <Modal
                visible={isModalOpen}
                title={selectDay}
                onOk={handleOk}
                onCancel={handleClose}
                footer={[
                <Button key="back" onClick={handleClose}> 취소 </Button>,
                <Button id="save" form="myForm" onClick={handleOk} type="primary"> 저장 </Button>,  //  htmlType="submit"
                ]}
            >
                <Form
                    id="myForm"
                    name="form_in_modal"
                    onFinish={handleOk}
                >
                    <Form.Item
                        name={['start']}   
                        rules={[{ required: true, message: '출발지를 입력해주세요' }]}
                    >
                    <Input style={{ width: '100%' }} placeholder="출발지" />
                    </Form.Item>
                    <Form.Item
                        name={['end']}    
                        rules={[{ required: true, message: '도착지를 입력해주세요' }]}
                    >
                        <Input style={{ width: '100%' }} placeholder="도착지" />
                    </Form.Item>
                    <Form.Item
                        name={['distance']}
                        rules={[{ type: 'number', min: 0, max: 99999 }]}
                    >
                        <InputNumber ref={distanceValue} value={distanceValue.current.value} style={{ width: '100%' }} placeholder="총 주행거리"  />
                    </Form.Item>
                    <Form.Item name="rate" style={{display:"flex"}}>
                    <span style={{marginRight:"10px"}}>셀프 평점</span> <Rate defaultValue="3.5"/>
                    </Form.Item>

                    <Form.Item
                        name="upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra="자전거를 타며 추억했던 사진을 기록해보아요😍"
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                        <span style={{marginRight:"10px"}}>이미지 업로드</span><Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
    }
        </>
    );
};

export default Mileage;