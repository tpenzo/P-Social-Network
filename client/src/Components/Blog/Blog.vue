<script setup>

</script>
<template>
        <article
            class="w-full mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
            <div class="flex pb-6 items-center justify-between">
                <div class="flex">
                    <a class="inline-block mr-4" href="#">
                        <img class="rounded-full max-w-none w-12 h-12" src="https://randomuser.me/api/portraits/men/35.jpg" />
                    </a>
                    <div class="flex flex-col">
                        <div>
                            <a class="inline-block text-lg font-bold dark:text-white" href="#">Wade Warren</a>
                        </div>
                        <div class="text-slate-500">
                            July 17, 2018
                        </div>
                    </div>
                </div>
            </div>
            <p class="dark:text-slate-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="py-4">
                <div class="flex justify-between gap-1 mb-1">
                    <a class="flex" href="#">
                        <img class="max-w-full rounded-tl-lg"
                            src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </a>
                    <a class="flex" href="#">
                        <img class="max-w-full"
                            src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </a>
                    <a class="flex" href="#">
                        <img class="max-w-full rounded-tr-lg"
                            src="https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </a>
                </div>
                <div class="flex justify-between gap-1">
                    <a class="flex" href="#">
                        <img class="max-w-full rounded-bl-lg"
                            src="https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </a>
                    <a class="flex" href="#">
                        <img class="max-w-full rounded-br-lg"
                            src="https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </a>
                </div>
            </div>
            <div class="py-4">
                <a class="inline-flex items-center" href="#">
                    <span class="mr-2">
                        <svg class="fill-rose-600 dark:fill-rose-400" style="width: 24px; height: 24px;" viewBox="0 0 24 24">
                            <path
                                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                            </path>
                        </svg>
                    </span>
                    <span class="text-lg font-bold">34</span>
                </a>
            </div>
            <div class="relative">
                <input
                    class="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
                    type="text" placeholder="Write a comment" />
                <span class="flex absolute right-3 top-2/4 -mt-3 items-center">
                    <svg class="mr-2" style="width: 26px; height: 26px;" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z">
                        </path>
                    </svg>
                    <svg class="fill-blue-500 dark:fill-slate-50" style="width: 24px; height: 24px;" viewBox="0 0 24 24">
                        <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
                    </svg>
                </span>
            </div>
            <!-- Comments content -->
            <div class="pt-6">
                <!-- Comment row -->
                <div class="media flex pb-4">
                    <a class="mr-4" href="#">
                        <img class="rounded-full max-w-none w-12 h-12" src="https://randomuser.me/api/portraits/men/82.jpg" />
                    </a>
                    <div class="media-body">
                        <div>
                            <a class="inline-block text-base font-bold mr-2" href="#">Leslie Alexander</a>
                            <span class="text-slate-500 dark:text-slate-300">25 minutes ago</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        <div class="mt-2 flex items-center">
                            <a class="inline-flex items-center py-2 mr-3" href="#">
                                <span class="mr-2">
                                    <svg class="fill-rose-600 dark:fill-rose-400" style="width: 22px; height: 22px;"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                                        </path>
                                    </svg>
                                </span>
                                <span class="text-base font-bold">12</span>
                            </a>
                            <button class="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                                Repply
                            </button>
                        </div>
                    </div>
                </div>
                <!-- End comments row -->
        
                <!-- More comments -->
                <div class="w-full">
                    <a href="#"
                        class="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75">Show
                        more comments</a>
                </div>
                <!-- End More comments -->
            </div>
            <!-- End Comments content -->
        </article>
</template>
<style>

</style>