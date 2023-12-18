const StyledText = widthStyles(Text);

function widthStyles(component){
    return(props)=>{
        const style = {
            color:"red",
            fontSize:"lem",
            ...props.style,
        };
    return <Component {...props} style={style} />
    };
}

function Welcome({myName}){
    return(
        <section>
            <h1>Hello, <span>{myName}</span></h1>
        </section>
    )
}
export default function App(){
    return(
        <div className="App">
            <Welcome myName="ThiDK" />
            <Text/>
            <StyledText/>
            <PricingPage/>
        </div>
    );
}