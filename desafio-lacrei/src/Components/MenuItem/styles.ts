import styled from "styled-components";

export const StyledItem = styled.li<{ isActive: boolean }>` // Cria um componente estilizado baseado na tag 'li' (list item) do HTML.
                                      // Este componente aceita uma propriedade 'isActive' do tipo booleano.     
.menu-item {
    color: ${props => props.isActive ? '#018762' : '#1F1F1F'};
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    
   
}

li {
    list-style: none;
}




/*//display: flex;
justify-content: center;
align-items: center;
list-style: none;
justify-content: space-between;
margin-left: 64px;

ul {
    display: flex;
    list-style: none;
    
}


.header-menu-lacrei {
    
}

li {
    margin-right: 20px;
    margin-left: 64px;
}

a {
    color: #1F1F1F;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    list-style: none;
    text-decoration: none;
}*/
`;