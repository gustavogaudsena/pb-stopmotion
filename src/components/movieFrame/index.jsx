export default function MovieFrame({ movieKey }) {
    return (
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movieKey}?si=p-j0Syge-OX4fp_A`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    )
}