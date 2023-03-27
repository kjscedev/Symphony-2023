"use client";
import { Navbar } from "@/components";
import { useState } from "react";

export default function Page() {
    return (
        <>
        <Navbar/>
            <div className="h-screen overflow-y-auto overflow-x-hidden scrollable-div">
                hello
            </div>
        </>
    );
}
