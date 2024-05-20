export default function Navbar(){
    return(
        <div className="
        h-20 bg-gray-900 flex items-center
        p-5 justify-between">
            <h2 className="text-white">Chat App</h2>
            <Profile />
        </div>
    );
}

function Profile(){
    return(
        <div className="flex items-center justify-between w-28">
            <h2 className="text-white">Profile</h2>
            <span className="bg-white rounded-full w-10 h-10"></span>
        </div>
    );
}