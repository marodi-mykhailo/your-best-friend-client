import React from 'react';

const width = {
    maxWidth: "1160px",
    margin: "auto"
}


const Container = (props: any) => {
    return (
        <div style={width}>
            {props.children}
        </div>
    );
};

export default Container;
