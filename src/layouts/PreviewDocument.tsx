import { useAppSelector } from "../app/hooks"

export const PreviewDocument = () => {
    const data = useAppSelector(state => state.editorForm);
    return (
        <>
            <canvas></canvas>
        </>
    )
}
