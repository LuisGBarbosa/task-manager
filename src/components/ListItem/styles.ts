import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    align-items: center;
    background-color: #20212C;
    padding: 10px;
    margin-bottom: 10px;

    border-radius: 4px;

    label {
        font-size: 1.5rem;
        color: #CCC;
        text-decoration: ${done && 'line-through'}
    }

    input {
        margin-right: 10px;
        width: 25px;
        height: 25px;
    }
`
));