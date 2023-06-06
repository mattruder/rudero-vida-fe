import {MainScreenProps, UserData, UserObject} from './App'

export default function MainScreen({currentUser}: MainScreenProps){

    return (
        <div>
            <h1>{currentUser.username}</h1>
        </div>
    )
}