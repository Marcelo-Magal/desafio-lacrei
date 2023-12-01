import styled from "styled-components";         // Cria um componente estilizado baseado na tag 'li' (list item) do HTML.
                                                 // Este componente aceita uma propriedade 'isActive' do tipo booleano.    
export const StyledFooterPagesItem = styled.li<{ isActive: boolean }>` 
                                           
.menu-item {
    color: ${props => props.isActive ? '#018762' : '#1F1F1F'};
    

}
`;