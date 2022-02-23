import React from 'react';
import SvgIcon from "@mui/material/SvgIcon";

const CircleClock = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M248 104C248 99.58 251.6 96 256 96C260.4 96 264 99.58 264 104V248H376C380.4 248 384 251.6 384 256C384 260.4 380.4 264 376 264H256C251.6 264 248 260.4 248 256V104zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16C123.5 16 16 123.5 16 256z"/>
        </SvgIcon>
    )

}

export default CircleClock;
