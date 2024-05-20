import Chat from "./Chat.js";

export default function Contact(){
    return(
        <div className="
        w-full h-screen bg-gray-500
        flex">
            <Person />
            <Chat />
        </div>
    );
}

function Person(){
    return(
        <div className="flex items-center justify-evenly
        text-white p-5 border-2 border-white">
            <span className="
            w-10 h-10 rounded-full bg-white"> s</span>
            <h1>Contact Name</h1>
        </div>
    );
}