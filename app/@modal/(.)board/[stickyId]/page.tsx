"use client"

import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import StickyDetailPopup from "@/app/components/Stickies/StickyDetailPopup";
import { useParams } from "next/navigation";

export default function Modal() {
    const params = useParams<{ stickyId: string }>();
    const { stickyId } = params;
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement> (null)
    useEffect(() => {
        dialogRef.current?.showModal()
    }, [])

    return (
        <dialog
            ref={dialogRef}
            onClose={() => router.back()}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    dialogRef.current?.close();
                }
            }}
            className="fixed inset-0 w-screen h-screen max-w-none max-h-none bg-transparent"
        >
            <div
                className="
      absolute
      inset-0
      m-auto
      w-sticky
      h-sticky

      overflow-hidden
    "
            >
                <button
                    className="absolute  right-4 text-sticky-small"
                    onClick={() => dialogRef.current?.close()}
                >
                    &times;
                </button>
                <StickyDetailPopup stickyId={stickyId} />
            </div>
        </dialog>
    )
}