import React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import { QRCODEURL, ADDRESS } from './const';

const NAME = "サンプル名前";
const LINK = "https://line.me/ti/p/XXXXXXXXXX";
const SUPPORTED = "東京都23区内、一部追加料金が発生する地域";


const DefaultFooter = () => {
    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: '名前',
            children: <p>{NAME}</p>,
        },
        {
            key: '2',
            label: 'LINE ID',
            children: <p><a href={QRCODEURL}>{LINK}</a></p>,
        },
        {
            key: '3',
            label: '予約',
            children: <p>1ヶ月前より受付</p>,
        },
        {
            key: '4',
            label: '所在地',
            children: <p>{ADDRESS}</p>,
        },
        {
            key: '5',
            label: '対応地域（一部追加料金）',
            children: <p>{SUPPORTED}</p>,
        },
    ];

    return (
        <Descriptions title="User Info" items={items} />
    );
}

export default DefaultFooter;