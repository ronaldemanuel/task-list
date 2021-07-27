import styled from "styled-components";

export default function TaskItem(props) {
    return (
        <TaskItem.div>
            <input type="checkbox" id={props.id} />
            <label for={props.id} >Fazer compras</label>
        </TaskItem.div>
    )
}

TaskItem.div = styled.div`
    width: 90%;
    padding: 17px 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin: auto;
    margin-bottom: 26px;
    cursor: pointer;

    input {
        margin-right: 21px;
    }
`