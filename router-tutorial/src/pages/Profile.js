import { useParams } from 'react-router-dom';

const data = {
    mangmang: {
        name: "망망이",
        description: "react hunter"
    },

    dangdang: {
        name: "당당이",
        description: "git hunter"
    }
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];
    console.log(params.username)
    console.log("hi")
    return (
        <div>
            <h1>user Profile</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>undifined data</p>
            )}
        </div>
    );
};

export default Profile;