import {prisma} from "@/lib/prisma";
import {requireUser} from "@/lib/requireUser";
import {NextResponse} from "next/server";
import {serverError} from "@/lib/serverError";


export async function GET(
    _request: Request,
    { params }: { params: Promise<{stickyId: string}> },
) {
    try{
        const user = await requireUser();
        const { stickyId } = await params;

        const sticky = await prisma.sticky.findFirst({
            where: {
                id: stickyId,
                userId: user.id
            },
        })

        return NextResponse.json({
            data: sticky
        })
    }catch(error){
        const message = `GET /api/sticky/id failed`;
        serverError(message,error);
    }
}