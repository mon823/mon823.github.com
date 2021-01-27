import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import {HeaderLink} from './headerLink';

const Wrapper = styled.header`
    display: flex;
    margin-left: auto;
    padding-right: 20px;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid ${theme.color.darkerBorder};
    padding: 5px;
`;

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <Wrapper>
                <HeaderLink title="Main" link='/'/>
                <HeaderLink title="Dev-Docs" link='/dev-docs'/>
        </Wrapper>
    );
};

export {Header};
