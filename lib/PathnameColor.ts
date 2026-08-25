type PathnameConfig = {
    baseColor: string;
    accentColor: string;
}

export const PathnameColors : Record<string, PathnameConfig> = {
    "": {baseColor: "text-black", accentColor: "hover:text-main-gray"},
    "login": {baseColor: "text-black", accentColor: "hover:text-main-gray"},
    "register": {baseColor: "text-black", accentColor: "hover:text-main-gray"},
    "board": {baseColor: "text-reminder-blue", accentColor: "hover:text-reminder-blue-accent"},
}
