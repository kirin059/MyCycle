import React, { useRef, useState }from 'react';
import locale from "antd/es/calendar/locale/ko_KR";
import styled from 'styled-components';
import { Modal, Button, Form, Input, Rate, InputNumber, Upload, Calendar } from "antd";
import { UploadOutlined, PushpinFilled } from '@ant-design/icons';

const StyledCalendar = styled(Calendar)`
    width: 95%;
    margin: 0 auto;
    padding: 0 10px;
    font-size: 18px;
    border-radius: 8px;
    .ant-picker-calendar-header {
        padding: 15px 10px;
    }
    .ant-picker-calendar-mode-switch {
        display: none;
    }
`;

const Mileage = () => {
    const [selectDay, setSelectDay] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clicked, setClicked] = useState(false)

    const distanceValue = useRef('');

    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
         return e && e.fileList;
    };

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

    const dateCellRender = (value) => {
        const distancevalues = distanceValue?.current.value;

        if (selectDay === value.format("YYYY-MM-DD") && clicked ) {
            return <div><PushpinFilled style={{color: "red"}}/>{distancevalues} km</div>
        }
    }

    return (
        <>
            <StyledCalendar
                locale={locale}
                onSelect={onSelectDateCell}  // 날짜가 선택되었을 때 발생하는 이벤트
                dateCellRender={dateCellRender}
            />

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
                        <InputNumber ref={distanceValue} value={distanceValue.current.value} style={{ width: '100%' }} placeholder="총 주행거리(km)"  />
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