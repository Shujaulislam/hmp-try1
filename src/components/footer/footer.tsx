import Link from "next/link"
 
const FooterItem = ({ text, link }: { text: string; link: string }) => {
return (
    <li>
        <Link href={link}>
            { text }
        </Link>
    </li>
)
}
 
const footerItems = [
{
    id: 1,
    text: "Term of services",
    link: "#"
},
{
    id: 2,
    text: "Company",
    link: "#"
},
{
    id: 3,
    text: "Portfolio",
    link: "#"
},
]
 
 
const FooterBlock = () => {
return (
    <footer className="footer footer-center text-center text-white bg-black text-base-content p-4">
  <aside className="flex justify-center">
    <p>
        Copyright © {new Date().getFullYear()} - All right reserved by <br className="md:hidden" /> <span className="text-orange-500 md:hover:text-orange-500 md:text-white"> Humaya Power </span></p>
  </aside>
</footer>
)
}
 
export default FooterBlock