"use client"

import {useSticky} from "@/lib/useStickies";
import {StickyConfig} from "@/lib/StickyType";
type StickyDetailPopupProps = {
    stickyId: string;
}

export default function StickyDetailPopup({ stickyId }: StickyDetailPopupProps) {
    const {data: sticky, isPending, isError} = useSticky(stickyId);

    if (isPending) {
        return null;
    }

    if (isError) {
        return (
            <div className="fixed inset-0 pointer-events-none">
                <div className="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    Failed To Load Sticky
                </div>
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
    const config = StickyConfig[sticky?.stickyType]
    return (
        <div className={`h-sticky w-sticky ${config.color}`}>
            <h1 className={`ml-2 underline text-sticky-small w-fit h-fit`}>{sticky?.stickyName}</h1>
            <p className="min-w-0 mt-2 ml-2 w-7/8 leading-none text-sticky-sub italic max-h-30 overflow-hidden">{sticky?.stickyContent}</p>
        </div>
    )
}