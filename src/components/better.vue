<template>
    <div class="better pt-[60px] pb-[100px] bg-[#e1eaf4]">
        <div class="max-w-[1240px] text-center m-auto">
            <div class="max-w-[800px] mx-auto"> 
                <h2>
                    It’s “you’ll never go back” better
                </h2>
                <h3 class="max-w-[700px]">
                    Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast that it will blow your mind.
                </h3>
            </div>
            <div class="
            mt-[100px]
            grid grid-cols-2 gap-[60px]"
            >
                <div class="quote kevin
                text-left tracking-[0.5px] 
                flex flex-col justify-center items-start
                py-[30px] px-[40px]"
                >
                    <img src="../assets/quote_mark.svg" 
                    class="mb-[30px]">
                    Design is everything, and these guys have nailed it.
                    <div class="
                    mt-[20px] 
                    flex items-center"
                    >
                        <div class="kevin_pic
                        w-[40px] h-[40px] 
                        bg-black bg-[90%] bg-cover 
                        rounded-[50%]
                        mr-[12px]"
                        ></div>
                        <div class="kevin_name
                        text-[17px] leading-[24px]">
                            Kevin O'Leary, 
                            <span class="font-bold">🦈 Shark Tank </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="advantages mb-[40px]">
                        <div class="advantages_header">
                            Totally async
                        </div>
                        <div class="advantages_desc">
                            Don't like meetings? We don't either; so much so that we've outlawed them completely.
                        </div>
                    </div>
                    <div class="advantages mb-[40px]">
                        <div class="advantages_header">
                            Manage with Trello
                        </div>
                        <div class="advantages_desc">
                            Manage your design board using Trello. View active, queued and completed tasks with ease.
                        </div>
                    </div>
                    <div class="advantages mb-0">
                        <div class="advantages_header">
                            Invite unlimited team members
                        </div>
                        <div class="advantages_desc">
                            Invite your entire team, so anyone can submit requests and track their progress.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
.better {
    background-image: url("../assets/designjoy_background_home.png");
    background-position: 0 0,0 0;
    padding: 150px 5% 100px;
}

.kevin {
    background-image: url("../assets/designjoy_background_home.png"), linear-gradient(#fff, #fff);
}

.kevin_pic {
    background-image: url("../assets/designjoy_kevin.jpeg");
}

.kevin_name{
    font-family: "PlusJakartaSans", sans-serif;
    font-weight: 400;
}

.advantages {
    text-align: left;
    font-size: 20px;
    line-height: 30px;
}

.advantages_header {
    font-family: "Grifter", sans-serif;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
}

.advantages_desc {
    font-family: "PlusJakartaSans", sans-serif;
    max-width: 490px;
    font-size: 17px;
    line-height: 24px;
}
</style>