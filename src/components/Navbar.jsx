import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants"
import gsap from "gsap"

const Navbar = () => {
    useGSAP(()=>{
        const navTweens=gsap.timeline({
            scrollTrigger: {
                trigger:"nav",
                start:"bottom top",
            }
        });

        navTweens.fromTo('nav',{
            backgroundColor: "transparent"},{
                backgroundColor:"#00000070",
                backgroundfilter: "blur(20px)",
                duration:1,
                ease:"power1.inOut",
            }
        )
    })

  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="logo"/>
                <p>Charan yedida</p>
            </a>
            <ul>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    </nav>
  )
}

export default Navbar