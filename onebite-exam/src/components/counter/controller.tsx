import { useCountStore, useDecreaseCount, useIncreaseCount } from "@/store/count";
import { Button } from "../ui/button";

export default function Controller() {
    const increase = useIncreaseCount()
    const decrease = useDecreaseCount()

    return (
        <div>
            <Button onClick={increase}>+</Button>
            <Button onClick={decrease}>-</Button>
        </div>
    )
}
