function Title (props) {
    return(
        <div id='title' style={{
            fontSize: `${props.size}`,
            textAlign: `${props.align}`
        }}>
            <span data-content="r" className="title-span" style={{
                color:'red',
            }}>r</span>
            <span data-content="o" className="title-span" style={{
                color:'orangered',
            }}>o</span>
            <span data-content="b" className="title-span" style={{
                color:'skyblue',
            }}>b</span>
            <span data-content="b" className="title-span" style={{
                color:'blue',
            }}>b</span>
            <span data-content="l" className="title-span" style={{
                color:'purple',
            }}>l</span> 
        </div>
    );
}

export default Title