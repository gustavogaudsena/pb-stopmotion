import { IoMdStarOutline, IoMdStarHalf, IoMdStar } from "react-icons/io";

export default function Stars({ stars, max = 5 }) {

    function handleStars(value) {
        return Math.round(value * 10 / 2) / 10
    }
    const currentStars = handleStars(stars)

    return (
        <>
            {
                Array.from({ length: max }, (_, idx) => {
                    const index = idx + 1
                    return (
                        <span key={idx}>
                            {currentStars >= index && <IoMdStar />}
                            {currentStars < index && currentStars - (index - 1) > 0 && <IoMdStarHalf />}
                            {currentStars < index && !(currentStars - (index - 1) > 0) && <IoMdStarOutline />}
                        </span>
                    )
                }
                )

            }
        </>
    )
}