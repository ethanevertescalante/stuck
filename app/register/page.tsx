import Header from "@/app/components/MainPage/Header";
import SignUpPage from "@/app/components/auth/SignUpPage";


export default function SignUp(){
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <SignUpPage />
        </div>
        )
}