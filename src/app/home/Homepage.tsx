"use client"

import { useNavStore } from "@/hooks/use-navbar-items"
import { Layout } from "../layout"
import { Banner } from "./components/section/banner-section"
import { MainContent } from "./components/section/main-content"
import "./components/style.css"
import { GuestChatSection } from "./components/section/guest-chat-section"
import { ProjectSection } from "./components/section/project-section"
import { BlogSection } from "./components/section/blog-section"



export default function Homepage() {
    const {navdata} = useNavStore()
    
    return (
        <Layout>
            <div className="2xl:w-2/5 xl:w-3/5 lg:w-3/5 sm:w-4/5 w-10/12 h-full ">
                <div className="flex flex-col gap-14">
                    <Banner />     
                    {/* Find the active item */}
                    {navdata && navdata.find(item => item.isActive) ? (
                        navdata.find(item => item.isActive)?.name === 'Home' ? (
                            <MainContent />
                        ) : navdata.find(item => item.isActive)?.name === 'Guestbook' ? (
                            <GuestChatSection />
                        ) : navdata.find(item => item.isActive)?.name === 'Projects' ? (
                            <ProjectSection />
                        ) : navdata.find(item => item.isActive)?.name === 'Blogs' ? (
                            <BlogSection />
                        ) : (
                        <p>No selected</p>
                        )
                    ) : (
                        <p>No active item found</p>
                    )}
                </div>
            </div>
        </Layout>
        
    )
}