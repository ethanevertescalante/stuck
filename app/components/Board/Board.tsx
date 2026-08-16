'use client'

import BasicSticky from "@/app/components/Stickies/BasicSticky";
import {Note, Reminder} from "@/app/lib/StickyType";
import {Rnd} from "react-rnd";


export default function Board() {
    return(
        <div className="h-screen flex flex-col overflow-hidden bg-main-gray">
            <Rnd
                default={{
                    x: 100,
                    y: 100,
                    width: 250,
                    height: 250,
                }}
                bounds="parent"
            >
                <BasicSticky stickyType={Note} headerSticky={false}/>
            </Rnd>
            <Rnd
                default={{
                    x: 100,
                    y: 100,
                    width: 250,
                    height: 250,
                }}
                bounds="parent"
            >
                <BasicSticky stickyType={Reminder} headerSticky={false} stickyTitle={"dsfjsdflk"}/>
            </Rnd>

        </div>
    )
}