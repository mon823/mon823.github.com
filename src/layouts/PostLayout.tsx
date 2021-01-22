import React from 'react';
import styled from 'styled-components';
import {Header} from '@components/header/headerContainer';

const Wrapper = styled.div`
    color: red;
`;

interface PostPageProps{
    children: React.ReactNode;
}

const PostPageLayout: React.FC<PostPageProps> = ({children}) => {
    return (
        <Wrapper>
            <Header />
            {children}
        </Wrapper>
    );
};

export {PostPageLayout};
