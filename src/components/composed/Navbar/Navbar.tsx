import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const router = useRouter();

  return (
    <Nav className="flex justify-between md:py-8 py-5 mx-4 md:mx-10">
      <Link href="/" className="fk-name !font-extrabold">
        Fortune Ikechi
      </Link>
      <div className="flex items-center">
      <Link
          href="/talks"
          className={`sm:mr-10 mr-5 font-bold ${
            router.pathname === "/talks" ? "border-b border-blue-100" : ""
          }`}
        >
          Talks
        </Link>
        <Link
          href="/blog"
          className={`sm:mr-10 mr-5 font-bold ${
            router.pathname === "/blog" ? "border-b border-blue-100" : ""
          }`}
        >
          Blog
        </Link>
        <ThemeToggle />
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  & .fk-name {
    color: #3a7ebf;
    font-size: 20px;

    @media screen and (max-width: 640px) {
      font-size: 18px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  & a {
    font-size: 18px;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 640px) {
      font-size: 16px;
    }

    &:hover {
      color: #3a7ebf;
      transform: scale(1.02);
    }
  }
`;

export default Navbar;
