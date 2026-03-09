import { useCountStore } from "@/store/count";

export default function Viwer(){
    const count = useCountStore((store) => store.count);
    
    return (
      <div>{count}</div>
    )
}
