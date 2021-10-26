import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Button } from "antd";
import { EditOutlined } from '@ant-design/icons';


const InputCommnet = (props) => {

    const [content, setContent] = useState("");
    const ref = useRef();

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
        handleSubmit();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!content) return;
    
        props.onSubmit(content);
        setContent("");
    };

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <>
            <Form
                onSubmit={handleSubmit}
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <Input
                    ref={ref}
                    type="text"
                    name="text"
                    value={content}
                    onChange={handleChange}
                    prefix={<EditOutlined />}
                    placeholder="You can write to share..."
                    style={{width: "400px", marginRight:"10px"}}
                />
                <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleSubmit}
                    onKeyPress={handleKeyPress}
                >
                    Comment
                </Button>
            </Form>
        </>
    );
};

export default InputCommnet;