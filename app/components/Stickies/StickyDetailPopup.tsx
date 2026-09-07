"use client"

import {useSticky} from "@/lib/useStickies";
type StickyDetailPopupProps = {
    stickyId: string;
}

export default function StickyDetailPopup({ stickyId }: StickyDetailPopupProps) {
    const {data: sticky, isPending, isError} = useSticky(stickyId);
    console.log("StickyDetailPopup", sticky);
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

    return (
        <div className="h-sticky w-sticky">
                <div>dogs</div>
                <div>Cats</div>
        </div>
    )
}