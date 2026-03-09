import Controller from "@/components/counter/controller";
import Viwer from "@/components/counter/viwer";

export default function CounterPage() {

    return (
        <div>
            <h1 className="text-2xl font-bold">Counter</h1>
            <Viwer />
            <Controller /> 
        </div>
    )
}
