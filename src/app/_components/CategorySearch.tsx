"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import GlobalApi from "../_utils/GlobalApi"
import { useEffect, useState } from "react"
import Image from "next/image"

const CategorySearch = () => {

    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getCategoryList()
    },[])

    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            console.log(resp)
            setCategoryList(resp.data.data)
        })
    }

    return (
        <section className="mt-10 flex flex-col items-center gap-4 mb-10">
            <h1 className="font-bold text-4xl tracking-wide">
                Search <span className="text-blue-600">Doctors</span>
            </h1>
            <h3 className="text-xl text-gray-400">
                Search for Doctor and Book appointment in one click
            </h3>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search..." />
                <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                </Button>
            </div>

            {/* Display list of category */}
            <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {categoryList.map((item, index) => index <=6&&(
                
                <div key={index} className="flex flex-col items-center gap-1 bg-blue-200 p-3 rounded-md hover:scale-110 ease transition-all">
                    <Image src={item.attributes?.image?.data.attributes.url}
                        alt="category img"
                        width={40}
                        height={40} />
                        <label className="text-center text-blue-600 text-sm">
                            {item.attributes?.name}
                        </label>
                </div>
                
            ))}
            </div>


        </section>
    )
}

export default CategorySearch