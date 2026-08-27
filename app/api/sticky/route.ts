import {NextRequest, NextResponse} from "next/server";
import * as z from "zod";
const stickySchema = z.object({
    stickyName: z.string().min(1, "Please enter a name for the sticky"),
    stickyContent: z.optional(z.string()),
    stickyDate: z.optional(z.date()),
    stickyType: z.string().uppercase()
})


function POST (req: NextRequest, res: NextResponse) {

}

function GET () {

}

function PUT (req: NextRequest, res: NextResponse) {

}

function DELETE (req: NextRequest, res: NextResponse) {

}
