<template>
    <header className="sticky top-0 z-40 bg-white flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg">
        <div className="flex items-center space-x-2 w-full max-w-xs">
            <!-- Logo -->
            <div class="flex justify-around mr-5">
                <img src="@/assets/images/social-media.png" width="45" height="50" />
                <h1 class="text-black font-bold ml-3">App Media</h1>
            </div>
            <!-- Search -->
            <div className="space-x-1 py-2.5 px-4 rounded w-full">
                <!-- Search input -->
                <form class="relative">
                    <label for="voice-search" class="sr-only">Search</label>
                    <div class="w-[260px]">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <img class="inline" src="@/assets/images/magnifying-glass.png" width="20" />
                        </div>
                        <input type="text" id="voice-search"
                            class="rounded-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                            placeholder="Search" required="">
                    </div>
                </form>
                <!-- Search result -->
                <div v-show="false"
                    class="absolute top-[50px]  z-20 w-[250px] py-2 mt-4 drop-shadow-lg overflow-hidden bg-white rounded-md shadow-xl">
                    <a href="#"
                        class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform">
                        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                            alt="jane avatar">
                        <div class="mx-1">
                            <h1 class="text-sm font-semibold text-gray-70">Jane Doe</h1>
                            <p class="text-sm text-gray-500">janedoe@exampl.com</p>
                        </div>
                    </a>
                    <hr class="border-gray-200 dark:border-gray-700 " />
                    <a href="#"
                        class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform">
                        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                            alt="jane avatar">
                        <div class="mx-1">
                            <h1 class="text-sm font-semibold text-gray-700">Jane Doe</h1>
                            <p class="text-sm text-gray-500">janedoe@exampl.com</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- Menu -->
        <div className="hidden md:flex items-center space-x-1 text-black">
            <div class="mr-3 flex-grow-0 items-center">
                <a href="#">
                    <img class="inline" src="@/assets/images/message.png" width="20" /> Message
                </a>
                <a class="mx-3" href="#">
                    <img class="inline" src="@/assets/images/placeholder.png" width="21" /> Discover
                </a>
                <a href="#">
                    <img class="inline" src="@/assets/images/bell.png" width="20" /> Notify
                </a>
            </div>
            <div class="inline relative drop-shadow-lg">
                <!-- Btn show -->
                <button
                    class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none">
                    <span class="mx-1">Jane Doe</span>
                    <img class="inline ml-1" src="@/assets/images/down-chevron.png" width="15" />
                </button>
                <!-- Show info -->
                <div v-show="false"
                    class="absolute drop-shadow-lg right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
                    <a href="#"
                        class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform hover:bg-gray-100">
                        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                            alt="jane avatar">
                        <div class="mx-1">
                            <h1 class="text-sm font-semibold text-gray-700">Jane Doe</h1>
                            <p class="text-sm text-gray-500">janedoe@exampl.com</p>
                        </div>
                    </a>
    
                    <hr class="border-gray-200">
    
                    <a href="#"
                        class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform">
                        view profile
                    </a>
    
                    <a href="#"
                        class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform">
                        Settings
                    </a>
    
                    <a href="#"
                        class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform">
                        Keyboard shortcuts
                    </a>
    
                    <hr class="border-gray-200">
    
                    <a href="#"
                        class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform">
                        Company profile
                    </a>
    
                    <a href="#"
                        class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform">
                        Team
                    </a>
    
                    <a href="#"
                        class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform">
                        Invite colleagues
                    </a>
    
                    <hr class="border-gray-200">
    
                    <a href="#"
                        class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform">
                        Sign Out
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>
<script>

</script>
<style>
    
</style>