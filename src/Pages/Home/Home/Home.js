import React from 'react';
import WholeMenu from '../WholeMenu/WholeMenu';
import SearchMenu from '../SearchMenu/SearchMenu';
import { useTitle } from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Tibiyun Eats');
    return (
        <div>
            <WholeMenu></WholeMenu>
            <SearchMenu></SearchMenu>
        </div>
    );
};

export default Home;