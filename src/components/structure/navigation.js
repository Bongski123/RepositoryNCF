import { About } from "../pages/About"
import { Account } from "../pages/Account"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Private } from "../pages/Private"
import { RegisterUser } from "../pages/register"
import { SearchBar } from "../SearchBar"
import Upload from "../pages/Upload"
import AdminPage from "../pages/AdminDASH"

export const nav = [
     { path:     "/",         name: "Home",        element: <Home />,       isMenu: true,     isPrivate: false  },
     { path:     "/about",    name: "About",       element: <About />,      isMenu: true,     isPrivate: false  },
     { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
     { path:     "/private",  name: "Private",     element: <Private />,    isMenu: true,     isPrivate: true  },
     { path:     "/account",  name: "Account",     element: <Account />,    isMenu: true,     isPrivate: true  },
     { path:     "/register",  name: "Register",   element: <RegisterUser />,  isMenu: true, isPrivate: false  },
     { path:     "/SearchBar",  name: "Search",   element: <SearchBar />,  isMenu: true, isPrivate: false  },
     { path:     "/Upload",  name: "Upload Researches",   element: <Upload />,  isMenu: true, isPrivate: true  },
     { path:     "/adminpage",  name: "Adminpage",   element: <AdminPage />,  isMenu: true, isPrivate: false  },
     
     
    
]

