"use client"

import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import StickyDetailPopup from "@/app/components/Stickies/StickyDetailPopup";

type ModalProps = {
    stickyId: string
}

export default function Modal(params: ModalProps) {
    const { stickyId } = params
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement> (null)
    useEffect(() => {
        dialogRef.current?.showModal()
    }, [])

    return (
        <dialog
            ref={dialogRef}
            onClose={() => router.back()}
            className="fixed inset-0 m-auto border p-4 rounded h-sticky w-sticky overflow-hidden"
        >
            <button
                className="absolute top-2 right-4 border-none"
                onClick={() => dialogRef.current?.close()}
            >
                &times;
            </button>

            <h1 className="text-3xl font-bold">Test</h1>
            <StickyDetailPopup stickyId={stickyId} />
        </dialog>
    )
}