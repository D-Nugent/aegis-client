import React, { Component, ReactNode } from 'react';

type Props = {
    children : ReactNode
};

function Hero({ children } : Props) {

    return (
        <div>
            { children }
        </div>
    );
}

export default Hero;