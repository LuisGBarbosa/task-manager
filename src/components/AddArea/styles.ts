import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #555;
    border-radius: 10px;
    margin: 20px 0;
    padding: 10px;

    .image {
        margin-right: 20px;
    }

    input {
        background: transparent;
        outline: 0;
        border: 0px;
        flex: 1;
        color: #FFF;
        font-size: 18px;
    }
`;