"use client"

import {useSticky} from "@/lib/useStickies";
import { StickyType} from "@/app/generated/prisma/enums";

type StickyDetailPopupProps = {
    stickyId: string;
}

export default function StickyDetailPopup({ stickyId }: StickyDetailPopupProps) {
    const {data: sticky, isPending, isError} = useSticky(stickyId);

    if (isPending) {
        return (
            <div className="h-screen flex flex-col overflow-hidden bg-main-gray justify-center items-center"></div>
        );
    }

        if (isError) {
            return (
                <div className="h-screen flex flex-col overflow-hidden bg-main-gray justify-center items-center text-header-main text-error">
                    Failed To Load Sticky, Please Refresh
                </div>
            );
        }
    //
    // if (!sticky) {
    //     return (
    //         <div className="h-screen flex flex-col overflow-hidden bg-main-gray justify-center items-center text-header-main">
    //             Could Not Find Sticky
    //         </div>
    //     );
    // }

    return (
        <div className={"flex gap-3"}>
            <div>{sticky.stickyName}</div>
            <div>{sticky.stickyContent}</div>

        </div>
    )
}