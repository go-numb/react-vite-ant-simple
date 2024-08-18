'use client';
import React from 'react';
import { Flex, Space, Row, QRCode } from 'antd';

// import my components
import DefaultMenu from './components/menu';
import DefaultCarousel from './components/carousel';
import DefaultStep from './components/step';
import DefaultDescription from './components/footer';
import DefaultMap from './components/map';
import { SITENAME, DESCRIPTION, QRCODEURL } from './components/const';



export default function Home() {
  return (
    <>
      <div className="main">
        <div id='main-menu' style={{ width: 256, zIndex: 99, position: 'fixed', top: 10, left: 10 }}>
          <DefaultMenu />
        </div>

        <Flex gap="middle" vertical>
          <DefaultCarousel />

          <h2 style={{ textAlign: 'center' }}>{SITENAME}</h2>
          <div style={{ padding: '2rem' }}>
            <p>{DESCRIPTION}</p>
          </div>

          <h2 style={{ textAlign: 'center' }}>対応可能地域</h2>
          <DefaultMap />

          <Row style={{ padding: '2rem' }}>
            <DefaultStep />
          </Row>
        </Flex>

        <Flex gap="middle" vertical>

          <Space direction="vertical" align="center" style={{ padding: '2rem' }}>
            <h2>LINEお問い合わせ</h2>
            <QRCode value={QRCODEURL || '-'} />
            <p><small><a href={QRCODEURL}>{QRCODEURL}</a></small></p>
          </Space>
        </Flex>


        <Row style={{ padding: '2rem' }}>
          <DefaultDescription />
        </Row>
        <Row style={{ padding: '2rem', textAlign: 'center' }}>
          <p>© {new Date().getFullYear()} {SITENAME}.</p>
        </Row>

      </div>

    </>
  );
}
