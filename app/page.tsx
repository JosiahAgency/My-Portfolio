import Image from "next/image";
import Link from "next/link";

const navbarItems = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Projects",
        link: "#projects",
    },
    {
        title: "Contact",
        link: "#contact",
    }

]

const experience = [
    {
        name: "JavaScript",
        icon: '/javascript.svg',
    }, {
        name: "HTML",
        icon: '/html.svg',
    }, {
        name: "CSS",
        icon: '/css.svg',
    }, {
        name: "reactjs",
        icon: '/reactjs.svg',
    }, {
        name: "nodejs",
        icon: '/nodejs.svg',
    }
]

const projects = [
    {
        image: '/QuickCart.png',
        name: 'QuickCart - E-Commerce',
        link: 'https://e-commerce-navy-beta-37.vercel.app/'
    },
    {
        image: '/QuickStay.png',
        name: 'QuickStay - Hotel Booking',
        link: 'https://quick-stay-sigma.vercel.app/'
    }
]

export default function Home() {
    return (
        <>
            <nav className="bg-gradient-to-r from-[#FF8660] to-[#8000FF] flex items-center justify-evenly py-4">
                <Link href={`/`} className="">
                    <Image src={`/josiah-signature.png`} alt="Josiah Signature" className="" width={250}
                           height={250}/>
                </Link>
                <div className="hidden md:flex gap-8">
                    {navbarItems.map((item) => (
                        <Link key={item.title} href={item.link}
                              className=" text-[#000814] cursor-pointer relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#000814] after:transition-all after:duration-300 hover:after:w-full hover:after:bg-[#000814]"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </nav>

            <div className={`flex flex-col items-center justify-center bg-[#000814] px-8 py-28 min-h-[91vh]`}>
                <Image src={`/avatar.png`} alt={`Avatar`} width={100} height={100} className={`w-[40%] lg:w-[20%]`}/>
                <h1 className={`text-white md:w-[50%] text-center text-[2rem] lg:text-[3rem] font-bold`}>
                    Building the Web, <span
                    className={'bg-gradient-to-r text-[2rem] lg:text-[3rem] font-bold from-[#FF8660] to-[#8000FF] bg-clip-text text-transparent'}>One Line of Code</span> at
                    a Time
                </h1>
                <p className={`mt-6 mb-8 md:w-[50%] font-light text-gray-300 text-center`}>
                    I&#39;m George Josiah, a postgraduate in Computer Science passionate about web development.
                    With expertise in Laravel and React, I thrive on crafting dynamic and scalable applications.
                    My journey is fueled by curiosity, continuous learning, and a drive to build innovative digital
                    experiences.
                </p>

                <div className={`flex gap-6 mb-18 flex-col md:flex-row`}>
                    <Link href={'/'} className="px-6 py-2 bg-gradient-to-r from-[#FF8660] to-[#8000FF] rounded-2xl
                            transition-all duration-300 hover:opacity-80 text-center">
                        Get In Touch
                    </Link>

                    <Link href={'/'} className="px-6 py-2 text-[#FF8660] border-[2px] rounded-2xl border-[#FF8660]
                            transition-all duration-300 hover:border-[#ffc300] hover:text-[#ffc300] text-center">
                        Download My CV
                    </Link>

                </div>
                {/*<div className={`flex gap-6 flex-col items-center`}>*/}
                {/*    <h2 className={`uppercase text-lg text-gray-300`}>experience with</h2>*/}
                {/*    <div className={`flex flex-wrap md:flex-row items-center justify-center gap-16`}>*/}
                {/*        {experience.map((item) => (*/}
                {/*            <Image key={item.name} src={item.icon} alt={item.name} width={30} height={30}/>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            <div id='projects' className={`flex flex-col bg-[#000814] items-center justify-evenly px-8`}>
                <h1 className="uppercase bg-gradient-to-r mb-10 text-[2rem] lg:text-[3rem] font-bold from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
                    Projects
                </h1>
                <div className={`flex flex-wrap md:flex-row justify-center gap-8`}>
                    {projects.map((item, i) => (
                        <Link
                            href={item.link}
                            key={i}
                            className={`bg-[#22223b] rounded-xl w-fit md:w-1/3 transition-transform transform hover:scale-105 hover:bg-[#2b2b49]`}>
                            <Image src={item.image} alt={item.name} width={400} height={400}
                                   className={`rounded-t-xl w-full`}/>
                            <div className={`p-2 flex justify-between`}>
                                <div className={` w-3/4`}>
                                    <p className={`uppercase text-[0.6rem] text-white hover:text-gray-300`}>click here
                                        to visit</p>
                                    <h2 className={`uppercase text-[0.85rem] text-wrap text-white hover:text-gray-300`}>{item.name}</h2>
                                </div>
                                <div className={` flex`}>
                                    <Image src={`/arrowIcon.svg`} alt={`arrow`} width={15} height={15}
                                           className={`w-2 transition-transform transform hover:translate-x-1`}/>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div id='contact' className={`flex flex-col justify-center items-center bg-[#000814] min-h-[40vh]`}>
                <h1 className={`uppercase bg-gradient-to-r text-[2rem] lg:text-[3rem] font-bold from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent`}>Contact</h1>
                <p className={`text-white text-sm w-[80%] lg:w-[50%] py-3 lg:py-8 text-center`}>Seasoned Full Stack
                    Software Engineer with over 8 years of hands-on experience in designing
                    and implementing robust, scalable, and innovative web solutions. Adept at leveraging a
                    comprehensive skill set encompassing front-end and back-end technologies
                </p>
                <p className={`text-white text-sm`}>
                    mwandajosiah@gmail.com
                </p>
            </div>
        </>
    );
}
