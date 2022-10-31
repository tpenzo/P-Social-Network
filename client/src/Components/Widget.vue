<script setup>

</script>

<template >
    <div className="hidden xl:inline space-y-2">
        <!-- {/* Friend */} -->
        <div className="bg-white py-2.5 rounded-lg space-y-2 w-11/11 overflow-hidden border border-gray-300">
            <div className="flex items-center justify-between font-bold px-2.5">
                <h4>Add to your feed</h4>
                <InfoRoundedIcon className="h-5 w-5" />
            </div>
    
            <div className="space-y-1">
                <div className="flex space-x-2 items-center justify-around cursor-pointer hover:bg-black/10 px-2.5 py-1">
                    <a href="#"
                        class="flex items-center py-3 pr-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform">
                        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                            alt="jane avatar">
                        <div class="mx-1">
                            <h1 class="text-sm font-semibold text-gray-700">Jane Doe</h1>
                            <p class="text-sm text-gray-500">janedoe@exampl.com</p>
                        </div>
                    </a>
                    <button
                        class="ml-5 flex items-center p-2 text-sm text-gray-600 bg-white border rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none">
                        <span class="mx-1">Follow</span>
                        <img src="@/assets/images/add.png" width="20">
                    </button>
                </div>
                <div className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 px-2.5 py-1">
                    <a href="#"
                        class="flex items-center py-3 pr-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform">
                        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                            alt="jane avatar">
                        <div class="mx-1">
                            <h1 class="text-sm font-semibold text-gray-700">Jane Doe</h1>
                            <p class="text-sm text-gray-500">janedoe@exampl.com</p>
                        </div>
                    </a>
                    <button
                        class="ml-5 flex items-center p-2 text-sm text-gray-600 bg-white border rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring focus:outline-none">
                        <span class="mx-1">Follow</span>
                        <img src="@/assets/images/add.png" width="20">
                    </button>
                </div>
            </div>
        </div>
        <!-- {/* Ads */} -->
        <div className="bg-white w-11/11 h-64 px-2.5 rounded-lg sticky top-20 border border-gray-300 dark:border-none">
            <div className="relative w-full h-full">
                <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                    alt="Advertise on LinkedIn" border="0">
            </div>
        </div>
    </div>
</template>

<style>
    
</style>