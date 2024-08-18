import React, { useState, useEffect } from 'react';
import { Steps } from 'antd';

const changeViewMillisec = 8000;
const items = [
    {
        title: "",
        content: "お問い合わせフォームから、お問い合わせください。",
    },
    {
        title: "",
        content: "LINEからのお問い合わせも受け付けています。",
    }
];

const DefaultStep = () => {
    const [current, setCurrent] = useState(1);

    // n秒ごとに、onchangeを呼び出す
    // これは、ステップを自動的に進めるためのコードです
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % items.length);
        }, changeViewMillisec);
        return () => clearInterval(interval);
    }, []);

    const onChange = (value: number) => {
        setCurrent(value);
    };

    return (
        <Steps
            current={current}
            onChange={onChange}
            direction="vertical"
            items={items}
        />
    );
};

export default DefaultStep;