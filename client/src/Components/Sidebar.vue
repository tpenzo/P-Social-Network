<script>

</script>

<template>
<div className="space-y-2 min-w-max max-w-lg">
    <!-- {/* Top */} -->
    <div
        className="bg-white rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
        <div className="relative w-full h-14 bg-blue-100">
        </div>
        <img class="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer flex-shrink-0 object-cover mx-1 rounded-full"
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
            alt="jane avatar">
        <div className="mt-3 py-4 space-x-0.5">
            <h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">
                Jan Doe
            </h4>
            <p className="text-black/60 text-sm">
                janedoe@exampl.com
            </p>
        </div>
        <div className="hidden md:inline text-lefttext-sm px-5 mb-5">
            <div className="font-medium sidebarButton space-y-0.5">
                <div className="flex justify-between space-x-2">
                    <h4>Followers</h4>
                    <span className="text-blue-500">321</span>
                </div>
                <div className="flex justify-between space-x-2">
                    <h4>Views of your post</h4>
                    <span className="text-blue-500">1,892</span>
                </div>
            </div>

        </div>
    </div>
    <!-- {/* Bottom */} -->
    <div
        className="hidden md:flex bg-white rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 border border-gray-300">
        <div class="pl-5">
            <p className="sidebarLink">Groups</p>
            <div className="flex items-center justify-between">
                <p className="sidebarLink">Events</p>
                <AddRoundedIcon className="!h-5" />
            </div>
            <p className="sidebarLink">Followed Hashtags</p>
        </div>
        <div className="sidebarButton text-center">
            <h4 className="font-medium text-sm pb-2">Discover More</h4>
        </div>
    </div>
</div>
</template>

<style>
    
</style>