import { lazy } from "react";
export const MainPage = lazy(()=>import("../components/pages/MainPage"));
export const SignInPage = lazy(()=>import("../components/pages/SignIn"));
export const Home = lazy(()=>import("../components/pages/Home"));
export const ProfilePage = lazy(()=>import("../components/pages/Profile"));
export const AdminPages = lazy(()=>import("../components/admin-pages/AdminPages"));
export const AdminService = lazy(()=>import("../components/admin-pages/AdminService"));