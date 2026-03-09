import { useCount } from "@/store/count";

export default function Viwer(){
    const count = useCount()
    
    return (
      <div>{count}</div>
    )
}
