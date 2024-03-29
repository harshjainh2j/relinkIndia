import './globals.css'

import {Routes,Route} from 'react-router-dom'
import SigninForm from './_auth/forms/SigninForm'
import AuthLayout from './_auth/AuthLayout'
import Signupform from './_auth/forms/Signupform'
import { Home } from './root/pages'
import { Toaster } from './components/ui/toaster'
import RootLayout from './root/RootLayout'
import Explore from './root/pages/Explore'
import Saved from './root/pages/Saved'
import AllUsers from './root/pages/AllUsers'
import CreatePost from './root/pages/CreatePost'
import EditPost from './root/pages/EditPost'
import PostDetails from './root/pages/PostDetails'
import Profile from './root/pages/Profile'
import UpdateProfile from './root/pages/UpdateProfile'
const App = () => {
  return (
    <main className="flex h-screen">
  <Routes>
        {/* public routes */}
        <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<Signupform />} />
     
            
        </Route>

        {/* private routes */}
      
          <Route  element={<RootLayout/>} >
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost/>} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
          </Route>
        </Routes>
        <Toaster/>
    </main>  )
}

export default App
