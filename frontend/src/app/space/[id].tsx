import {useRouter} from "next/router";

export default function Space() {
    const router = useRouter()
    const {id} = router.query
    return (
        <h1>space id: {id}</h1>
    )
}