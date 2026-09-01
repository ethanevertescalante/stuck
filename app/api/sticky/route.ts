import {NextRequest, NextResponse} from "next/server";
import { prisma } from "@/lib/prisma"
import * as z from "zod";
import {requireUser} from "@/lib/requireUser";
import {serverError} from "@/lib/serverError";
import { StickyType } from "@/app/generated/prisma/enums";

const createStickySchema = z.object({
    stickyName: z.string().min(1, "Please enter a name for the sticky"),
    stickyContent: z.string().optional(),
    stickyDueDate: z.coerce.date().optional(),
    stickyType: z.enum(StickyType),
})

export async function GET () {
    try{
       const user = await requireUser();

       const stickies = await prisma.sticky.findMany({
           where: {
               userId: user.id,
           }
       })

       return NextResponse.json({
           data: stickies,
       })

    }catch(error){
        const message = "GET /api/sticky failed:"
        serverError(message, error);
    }
}

export async function POST (request: NextRequest) {
    try{
        const user = await requireUser();

        const body = await request.json();
        console.log(body);
        const result = createStickySchema.safeParse(body);
        if(!result.success){
            return NextResponse.json(
                {error: "Invalid sticky data"},
                {status: 400}
            )
        }

        const {stickyName, stickyContent, stickyType, stickyDueDate } = result.data;
        console.log(stickyDueDate);
        const sticky = await prisma.sticky.create({
            data:{
                stickyName: stickyName,
                stickyContent: stickyContent,
                stickyType: stickyType,
                stickyDueDate: stickyDueDate,
                userId: user.id,
            }
        })

        return NextResponse.json(
            {data: sticky},
            {status: 201}
        )

    }catch(error){
        const message = "POST /api/sticky failed:"
        serverError(message, error);
    }
}

//
// function PUT (req: NextRequest, res: NextResponse) {
//
// }
//
// function DELETE (req: NextRequest, res: NextResponse) {
//
// }
