import React from 'react';
import { GMAPURL } from './const';

import { Flex, Row, Col } from 'antd';

const DefaultMap = () => {
    return (
        <Row style={{ height: '100%' }}>
            <Col span={24} style={{ height: '100%' }}>
                <iframe src={GMAPURL} width="100%" height="450" style={{ border: 0 }}></iframe>
            </Col>
        </Row>
    )
}

export default DefaultMap;