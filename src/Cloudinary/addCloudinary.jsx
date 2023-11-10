import { useEffect, useRef } from "react";

export function AddWidget() {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "dstzuz2wo",
            uploadPreset: "farmavet",
            folder: "recursos-grupo-rino/farmavet-app/product-images",
        }, function (error, result) {
        });
    }, []);

    return <button onClick={() => widgetRef.current.open()}>Cargar</button>
}
export default AddWidget;