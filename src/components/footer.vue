<template>
    <div class="section pb-[100px] backgroundImg
    bg-black
    pt-[150px] 
    relative">
        <div class="container 
        text-white ">
            <div class="max-w-800 mx-auto">
                <h2>
                    See if Designjoy is right for you. (It totally is.)
                </h2>
                <h3>
                    Get a guided tour through Designjoy, and find out how you and your team can change the way you source design, forever.
                </h3>
                <button class="
                footerButton
                font-grifter
                w-full
                text-white text-[28px]
                border border-white rounded-[20px]
                flex justify-center
                mt-15 p-15
                hover:text-black
                hover:bg-white"
                >
                    Get started
                </button>
            </div>
            <div class="
            flex flex-wrap justify-between items-center
            mt-15 py-10"
            >
                <img src="../assets/marquee/memberstack.svg" 
                class="footerLogo h-[24px]">
                <img src="../assets/marquee/flowbase.svg" 
                class="footerLogo h-[26px]">
                <img src="../assets/marquee/nectar.svg" 
                class="footerLogo h-[23px]">
                <img src="../assets/marquee/xfinity.svg" 
                class="footerLogo h-[26px]">
                <img src="../assets/marquee/astro.svg" 
                class="footerLogo h-[26px]">
                <img src="../assets/marquee/cometchat.svg" 
                class="footerLogo h-[26px]">
            </div>
            <div class="
            flex justify-between items-start
            mt-[100px]
            ">
                <div class="
                max-w-[480px]
                text-left leading-[19px]
                flex items-center"
                >
                    <img src="../assets/logo/designjoy_logo_white.svg"
                    class="
                    w-[150px] 
                    mr-[30px]"
                    >
                    <div class="flex items-center">
                        <img src="../assets/designjoy_location.svg"
                        class="
                        max-w-[40px] 
                        mr-[10px]">
                        <p class="max-w-[240px]">
                            Designjoy is headquartered in Phoenix, Arizona.
                        </p>
                    </div>
                </div>
                <div class="
                text-left
                flex justify-between items-start">
                    <div class="mr-15">
                        <a class="footerLink">
                            Latest projects
                        </a>
                        <a class="footerLink">
                            Pricing
                        </a>
                        <a class="footerLink">
                            Contact
                        </a>
                    </div>
                    <div>
                        <a class="footerLink">
                            Client login
                        </a>
                        <a class="footerLink">
                            Get started
                        </a>
                        <a class="footerLink">
                            Terms & conditions
                        </a>
                        <a class="footerLink">
                            Privacy policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <img src="../assets/designjoy_footer_image.svg"
                class="
                absolute 
                bottom-[0%] 
                left-[0%]">
    </div>
</template>

<style>
.footerButton {
    transition: all .6s;
}

.footerButton:hover {
    transform: translateY(-13px);
    box-shadow: 9px 9px rgba(255,255,255,.24);
}

.footerLogo {
    margin-right: 2vw;
}

.footerLink {
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    display: block;
    margin-bottom: 16px;
    cursor: pointer;
}

.footerLink:hover {
    color: #ea552b;
}
</style>