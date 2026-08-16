
import Header from "@/app/components/MainPage/Header";
import Board from "@/app/components/Board/Board";


export default function BoardPage() {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <Board />
        </div>
    )
}