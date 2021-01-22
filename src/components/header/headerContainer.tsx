import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Wrapper = styled.header`
    width: 100%;
    border-bottom: 1px solid ${theme.color.darkerBorder};
`;

interface HeaderProps {
    // children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <Wrapper>test</Wrapper>
    );
};

export {Header};
