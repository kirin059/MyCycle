import React, { useRef } from "react";
import { Modal, Button, Form, Input, Rate, InputNumber, Upload, } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const DateModal = (props) => {
  console.log(props, 'props')
  const distanceValue = useRef(null);

  //selectDay: "2021-10-21"
  const hadleSaveData = () => {
    props.modalContents(distanceValue.current.value)
    //props.selectDay(distanceValue.current.selectDay)
  }

  const normFile = (e) => {
      if (Array.isArray(e)) {
        return e;
      }
       return e && e.fileList;
    };

 
  return (
    <>
      <Modal
        visible={props.isModalOpen}
        title={props.selectDay}
        onOk={props.handleOk}
        onCancel={props.handleClose}
        footer={[
          <Button key="back" onClick={props.handleClose}> 취소 </Button>,
          <Button key="submit" htmlType="submit" form="myForm" onClick={hadleSaveData} type="primary"> 저장 </Button>,
        ]}
      >
        <Form
            id="myForm"
            layout="vertical"
            name="form_in_modal"
            onFinish={props.handleOk}
            //onSubmit={handleSubmit(onSubmit)}
            //onFinish={onFinish}
        
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
                <InputNumber ref={distanceValue} style={{ width: '100%' }} placeholder="총 주행거리"  />
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
    </>
  );
};

export default DateModal;