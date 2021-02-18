import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    useLocation,
    useHistory
  } from 'react-router-dom'


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100) // fake async
    }
}
export default fakeAuth;



export function SignoutButton() {
    const history = useHistory()
  
    return fakeAuth.isAuthenticated === true
      ?
      <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>
        Sign out
      </button>
      : null
  }