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
    <footer className="footer footer-center bg-emerald-600 text-base-content p-4">
  <aside className="flex justify-center">
    <p>
        Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
)
}
 
export default FooterBlock