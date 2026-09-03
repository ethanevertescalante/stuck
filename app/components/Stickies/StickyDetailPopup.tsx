type StickyDetailPopupProps = {
    stickyId: string;
}

export default function StickyDetailPopup({ stickyId }: StickyDetailPopupProps) {



    return (
        <div>
            Sticky: {stickyId}
        </div>
    )
}