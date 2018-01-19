'use strict';

import Constants from './Constant';

const Colors = {
    main: '#2E2D38',
    text1: '#333333',
    text2: '#666666',
    text3: '#888888',
    text4: '#999999',
    border: '#dddddd',
    tint: '#ffffff',
    white: '#ffffff',
    background: '#f0f0f0',
    translucent: '#00000000',
    green: '#22ac38',
    other1: '#dddddd',
    other2: '#dddddd',
    other3: '#dddddd',
    other4: '#dddddd',
    orange:'#ff5e00',
    gray:'#cccccc',
    gradient1: '#313238',
    gradient2: '#5b5f79',
    gradientButton1: '#ff8b00',
    gradientButton2: '#ff5e00',
};

const Fonts = {
    h1: 19,
    h2: 18,
    h3: 17,
    h4: 16,
    h5: 15,
    h6: 14,
    h7: 13,
    h8: 12,
    h9: 11
};

const Metrics = {
    sRadius: 2,
    mRadius: 4,
    lRadius: 6,
    borderWidth: Constants.onePixel,
    sMargin: 10,
    mMargin: 20,
    lMargin: 30,
    dHeight: 44,
    sHeight: 22,
    mHeight: 30,
    lHeight: 60,
    llHeight: 120,
};

module.exports = {
    Colors,
    Fonts,
    Metrics
};