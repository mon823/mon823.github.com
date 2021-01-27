import React from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';
import { Link } from 'gatsby';

const Wrapper = styled.header`
    padding: 5px;
    padding-right: 15px;
    font-size: ${theme.fontSize.md};
`;

interface HeaderProps {
    title: string;
    link: string
}

const HeaderLink: React.FC<HeaderProps> = ({title, link}) => {
    return (
        <Wrapper>
            <Link to={link}>{title}</Link>
        </Wrapper>
    );
};

export {HeaderLink};
