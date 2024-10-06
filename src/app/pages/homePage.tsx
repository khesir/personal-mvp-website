"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { BlogList } from "../_components/blogList"
import { ProjectList } from "../_components/projectsList"

export default function Homepage() {
    return (
        <div className="space-y-5">    
            <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
                <CardHeader >
                    <CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
                        <Link to={'/project'}>
                            <p>Recent Project</p>
                        </Link>
                    </CardTitle>
                    <CardDescription>
                        <ProjectList />
                    </CardDescription>
                </CardHeader>    
            </Card>
            <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
                <CardHeader >
                    <CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
                        <Link to={'/blog'}>
                            <p>Recent Blog</p>
                        </Link>
                    </CardTitle>
                    <CardDescription>
                        <BlogList />
                    </CardDescription>
                </CardHeader>    
            </Card>
      </div>
    )
}