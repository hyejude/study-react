import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
    return (
        <div>
            <Outlet />
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>

    );
};


const ArticleItem = ({ id }) => {
    const articleStyle = {
        color: 'green',
        fontSize: 21,
    };
    return (
        <li>
            <NavLink
                to={`/articles/${id}`}
                style={({ isActive }) => (isActive ? articleStyle : undefined)}
            >
                게시글 {id}
            </NavLink>
        </li>
    );
};

export default Articles;