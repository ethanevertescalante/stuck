import StickyDetailPopup from "@/app/components/Stickies/StickyDetailPopup";

type StickyDetailPageProps = {
    params: Promise<{
        stickyId: string;
    }>
}

export default async function StickyDetailPage({
    params,
                                         }: StickyDetailPageProps) {

    const { stickyId } = await params;

    return <StickyDetailPopup stickyId={stickyId}/>
}