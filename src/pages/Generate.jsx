import styled from "styled-components"

export default function Generate(){
    return(
    <GenerateLayout>
        <iframe width={"100%"} height={"100%"} src="https://94ea363749b1d7129d.gradio.live/" frameborder="0"></iframe>
    </GenerateLayout>
    )
}

const GenerateLayout = styled.div`
    width: 100%;
    height: 100vh;
`
