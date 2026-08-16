import LoginPage from "@/app/components/auth/LoginPage";
import Header from "@/app/components/MainPage/Header";

export default function Login(){
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <LoginPage />
        </div>


    )
}