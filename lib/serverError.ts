import {NextResponse} from "next/server";


export function serverError(message: string, error: unknown) {
    console.error(message, error);

    return NextResponse.json(
        {error: "Internal Server Error"},
        {status: 501}
    );
}