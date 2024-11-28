import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { MainPage,SignInPage,Home,ProfilePage,AdminPages,AdminService } from './data/pages';

export default function App() {
  const routes = createBrowserRouter([
    {path: "/signup",element: <MainPage />},
    {path: "/signin",element: <SignInPage />},
    {path: "/",element: <Home />},
    {path: "/profile",element: <ProfilePage />},
    {path: "/service",element: <AdminService />},
    {path: "/pages",element: <AdminPages />},
  ])
  return <div className="App">
    <Suspense>
      <RouterProvider router={routes} />
    </Suspense>
  </div>;
}