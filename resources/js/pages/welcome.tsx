
import TwoLevelPieChart from "@/components/PieChart"
import LineChart from "../components/LineChart"
import SimpleAreaChart from "@/components/AreaChart"
import { PieChart } from "lucide-react"

export default function Welcome() {
  return (
    <div className="p=6 justify-content-center align-items-center w-full">
      <h1 className="text-center p-4">My first data visualization using Recharts</h1>
<div className="p-10 border rounded-[20px]shadow-md">
 <LineChart />
</div>
      <div className="p-10 border rounded-[20px]shadow-md">
        <SimpleAreaChart/>
      </div>
      <div className="p-10 border rounded-[20px]shadow-md">
         <TwoLevelPieChart/>
      </div>
    </div>
  )
}