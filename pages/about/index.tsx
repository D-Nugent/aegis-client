import AegisButton, { ButtonType } from '../../components/motifFramework/interactiveActions/AegisButton/AegisButton';

function About() {
    return (
        <>
            <h1>ABOUT</h1>
            <AegisButton type={ButtonType.PRIMARY}>Yoohoo</AegisButton>       
            <AegisButton type={ButtonType.PRIMARY} disabled={true}>Disabled</AegisButton>       
            <AegisButton type={ButtonType.SECONDARY}>Yoohee</AegisButton>            
            <AegisButton type={ButtonType.TERTIARY}>Yoohaa</AegisButton>            
            <AegisButton type={ButtonType.PRIMARY} href='/loginRegister'>I'm a web link</AegisButton>            
        </>
    );
}

export default About;