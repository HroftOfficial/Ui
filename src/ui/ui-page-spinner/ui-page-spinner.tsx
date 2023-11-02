import clsx from "clsx";
import UiSpinner from "../ui-spinner/ui-spinner";

export default function UiPageSpinner({ className }: { className?: string }) {
    return(
        <div className={clsx(className,"fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-slate-100",)}>
            <UiSpinner className="text-teal-600 h-24 w-24" />
        </div>
    )
}