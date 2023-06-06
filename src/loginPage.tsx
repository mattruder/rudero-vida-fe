import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState}  from 'react'
import {LoginProps, UserData, UserObject} from './App'







export default function LoginPage({setCurrentUser, setCurrentPage, appData}: LoginProps) {

  const appDataArray: any[] = []

  console.log(appData)

  for (const user in appData) {
    appDataArray.push(appData[user])
    
    
  }

  const [usernameInput, setUsernameInput] = useState<string>("")
  const [passwordInput, setPasswordInput] = useState<string>("")

 

  function validateUser(e: any,  username: string, password: string) {
    e.preventDefault()
    console.log("appdataArray", appDataArray)
     appDataArray.find((user: UserObject, index: number) => {

      if (appDataArray[index].username === username && appDataArray[index].password === password) {
        e.preventDefault()
       setCurrentUser(user)
       setCurrentPage('mainscreen')
       console.log(user)
      
      }
    })
    
  }


    return (
        <div>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>username</Form.Label>
        <Form.Control value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} type="text" placeholder="username" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>password</Form.Label>
        <Form.Control value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} type="password" placeholder="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => validateUser(e, usernameInput, passwordInput)} >
        Submit
      </Button>
            </Form>
        </div>
    )
}


