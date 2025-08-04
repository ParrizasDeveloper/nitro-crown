import { CldImage as CldImageDefault, CldImageProps } from "next-cloudinary";

function CldImage(props: CldImageProps) {
    return <CldImageDefault {...props} />
}

export default CldImage