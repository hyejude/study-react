import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goAarticles = () => {
        navigate('/articles', { replace: true });
    }

    return (
        <>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
                {/* header */}
                <button onClick={goBack}>뒤로 가기</button>
                <button onClick={goAarticles}>게시글 목록 </button>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;