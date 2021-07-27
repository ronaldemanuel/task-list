import styled from "styled-components";

export default function MainCard(props) {
    if(props.check) {
        const buttonColor = ({ theme }) => theme.colos.main;
    } else {
        const buttonColor = '#fff';
    }

    return (
        <MainCard.container>
            <MainCard.buttonContainer>
                <input type="button" value="A fazer" id="check" />
                <input type="button" value="Feitas" />
                <input type="button" value="Não listadas" id="notListed" />
            </MainCard.buttonContainer>
            <MainCard.taskContainer>
                <button>Teste</button>
                <button>Teste</button>
                <button>Teste</button>
            </MainCard.taskContainer>
        </MainCard.container>
    )
}

MainCard.container = styled.div`
    background: ${({ theme }) => theme.colors.card};
    max-width: 480px;
    width: 500px;
    border-radius: 15px;
    margin: 55px auto;
    padding: 20px;
`
MainCard.buttonContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 32px;

    input {
        background-color: #fff;
        border: 1px solid ${({ theme }) => theme.colors.main};
        border-radius: 10px;
        height: 30px;
        width: 120px;
        font-size: 17px;
        transition: .2s ease-in;
        
        &:hover {
            background: ${({ theme }) => theme.colors.main};
            color: white;
            transition: .2s ease-in;
        }
    }

    #check {
        background-color: ${({ theme }) => theme.colors.main};
        border: 1px solid ${({ theme }) => theme.colors.main};
        color: white;
        transition: .2s ease-in;

        &:hover {
            opacity: .85;
            transition: .2s ease-in;
        }
    }

    #notListed {
        width: 140px;
    }
`
MainCard.taskContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: column; 
    margin: auto;
    margin-bottom: 15px;
`