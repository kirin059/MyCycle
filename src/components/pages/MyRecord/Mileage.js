import React from 'react';
import { Calendar, Modal, Button, Form, Input, Rate, InputNumber, Upload, } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import locale from "antd/es/calendar/locale/ko_KR";
import { useState } from 'react/cjs/react.development';


const Mileage = () => {

    const [selectDay, setSelectDay] = useState([]);
    const [dateCellModal, setDateCellModal] = useState(false);
    const [recordContents, setRecordContents] = useState("")

    const onSelectDateCell = (value) => {
        setDateCellModal(true)
        setSelectDay(value.format("YYYY-MM-DD"))
    };

    const handleOk = () => {
      setDateCellModal(false)
    };

    const submitForm = (value) => {
        setRecordContents(value)
    }

    const fillSelectDateCell = (value) => {
        setRecordContents(value)
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    
    return (
        <>
            <Calendar
            locale={locale}
            onSelect={onSelectDateCell}
            onSelect={fillSelectDateCell}
            />
           
            
           <Modal
            visible={dateCellModal}
            title={selectDay}
            onOk={handleOk}
            okButtonProps={{htmlType: 'submit', form: 'editForm'}}
            // footer={[
            //     <Button key="back" onClick={handleOk}>
            //         취소
            //     </Button>,
            //     <Button key="submit" type="primary" onClick={handleOk} afterClose={ handleOk }>
            //     저장
            //     </Button>,
            // ]}
            >
            <Form
                id="editForm"
                layout="vertical"
                name="form_in_modal"
                onFinish={submitForm}
                name="validate_other"
                // {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    'input-number': 3,
                    rate: 3.5,
                }}
            >
   

            <Form.Item
                name={['address', 'street']}
                noStyle
                rules={[{ required: true, message: '출발지' }]}
            >
                <Input style={{ width: '100%' }} placeholder="출발지" />
            </Form.Item>

            <Form.Item
                name={['address', 'street']}
                noStyle
                rules={[{ required: true, message: '도착지' }]}
            >
                <Input style={{ width: '100%' }} placeholder="도착지" />
            </Form.Item>

            <Form.Item name={['user', 'age']} label="총 주행거리" rules={[{ type: 'number', min: 0, max: 99 }]}>
                <InputNumber />
            </Form.Item>


            <Form.Item name="rate" label="자기 평가">
                <Rate />
            </Form.Item>

            <Form.Item
                name="upload"
                label="이미지 업로드"
                valuePropName="fileList"
                //getValueFromEvent={normFile}
                extra="기념샷을 올려주세요😍"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>


        </Form>
            
          {recordContents}
        </Modal>
        </>
    );
};

export default Mileage;