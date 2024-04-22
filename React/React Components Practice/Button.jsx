function Button(){
    const styles = {
        color: 'white',
        backgroundColor: 'hsl(200, 100%, 50%)',
        padding: '10px 20px',
        margin: '30px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '20px',
    };
    return(
        <>
            <button style={styles}>Click Me</button>
        </>
    )
}
export default Button