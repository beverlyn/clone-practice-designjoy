<template>
    <div class="section pb-[100px] backgroundImg
    pt-15 
    bg-bluegray">
        <div class="container">
            <div class="max-w-[800px] mx-auto"> 
                <h2 class="max-w-[600px] mx-auto">
                    It’s “you’ll 
                    <span class="never">never</span> 
                    go back” better
                </h2>
                <h3 class="max-w-[700px] mx-auto">
                    Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast that it will blow your mind.
                </h3>
            </div>
            <div class="
            mt-[100px]
            grid grid-cols-2 gap-15"
            >
                <div class="quote backgroundImg
                bg-white
                text-left tracking-[0.5px] 
                flex flex-col justify-center items-start
                py-[30px] px-10"
                >
                    <img src="../assets/designjoy_quote_mark.svg" 
                    class="mb-[30px]">
                    Design is everything, and these guys have nailed it.
                    <div class="
                    mt-5 
                    flex items-center"
                    >
                        <div class="kevinPic
                        w-10 h-10
                        bg-black bg-[90%] bg-cover 
                        rounded-[50%]
                        mr-3"
                        ></div>
                        <div class="
                        text-[17px] leading-6">
                            Kevin O'Leary, 
                            <span class="font-bold">🦈 Shark Tank </span>
                        </div>
                    </div>
                </div>
                <div class="pr-10">
                    <div class="advantages mb-10">
                        <div class="advantagesHeader font-grifter">
                            Totally async
                        </div>
                        <div class="advantagesDesc">
                            Don't like meetings? We don't either; so much so that we've outlawed them completely.
                        </div>
                    </div>
                    <div class="advantages mb-10">
                        <div class="advantagesHeader font-grifter">
                            Manage with Trello
                        </div>
                        <div class="advantagesDesc">
                            Manage your design board using Trello. View active, queued and completed tasks with ease.
                        </div>
                    </div>
                    <div class="advantages mb-0">
                        <div class="advantagesHeader font-grifter">
                            Invite unlimited team members
                        </div>
                        <div class="advantagesDesc">
                            Invite your entire team, so anyone can submit requests and track their progress.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
.never {
    background-image: url("../assets/better/designjoy_never_underline.svg");
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: contain;
}

.kevinPic {
    background-image: url("../assets/better/designjoy_kevin.jpeg");
}

.kevinName{
    font-family: "PlusJakartaSans", sans-serif;
    font-weight: 400;
}

.advantages {
    text-align: left;
    font-size: 20px;
    line-height: 30px;
}

.advantagesHeader {
    letter-spacing: 0.5px;
    margin-bottom: 10px;
}

.advantagesDesc {
    font-family: "PlusJakartaSans", sans-serif;
    max-width: 490px;
    font-size: 17px;
    line-height: 24px;
}
</style>