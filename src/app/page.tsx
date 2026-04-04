import fs from "fs";
import path from "path";
import Link from "next/link";

export default async function Home() {
    const directory = path.join(process.cwd(), "src/app");

    const folders = fs
        .readdirSync(directory, { withFileTypes: true })
        .filter((dirent) => {
            if (dirent.isDirectory() && !dirent.name.startsWith("_")) return true;
            return false;
        })
        .map((dirent) => dirent.name);

    return (
        <div className="flex gap-10 p-2">
            {folders.map((name) => {
                return (
                    <Link href={name} key={name}>
                        <button className="bg-neutral-800 px-3 py-2 rounded-lg cursor-pointer">
                            {name}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
}
