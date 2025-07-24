import React from "react";
import YapimAlt from "./YapimAlt";

function BlogList() {
    return (
        <div className="bg-gray-600 p-4 rounded-lg shadow-lg h-34 flex items-center flex-col">
            <h2 className="text-3xl font-bold mb-4 flex items-center">Blog Yazılarım</h2>
            <YapimAlt />

        </div>
    );
}

export default BlogList;
