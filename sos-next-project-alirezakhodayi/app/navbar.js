"use client";
import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

const NavMain = styled(Box)({
  height: "60px",
  display: "flex",
  alignItems: "center",
  boxShadow: "0 5px 10px -5px rgba(0,0,0,0.44)",
  marginBottom: "15px",
});
const UnaffectedText = styled("div")`
  /* @noflip */
  text-align: left;
`;
const NavContainer = styled(Container)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const navLinks = [
  { id: 1, linkTitle: "صفحه اصلی", href: "/" },
  { id: 2, linkTitle: "وبلاگ", href: "/blog" },
  { id: 3, linkTitle: "Todo List", href: "/todo-list" },
];
const Navlinks = styled("ul")({
  listStyle: "none",
  display: "flex",
  gap: "20px",
});

const Navbar = () => {
  return (
    <UnaffectedText>
      <div dir="rtl">
        <NavMain>
          <NavContainer maxWidth="xl">
            <Link href="/">
              <Image src="/logo.svg" width={150} height={60} alt="logo" />
            </Link>
            <Navlinks>
              {navLinks.map((link) => (
                <Link key={link.id} href={link.href}>
                  <Button>{link.linkTitle}</Button>
                </Link>
              ))}
            </Navlinks>
            <Box>
              <Button variant="contained" size="large">
                ورود و فعالسازی
              </Button>
            </Box>
          </NavContainer>
        </NavMain>
      </div>
    </UnaffectedText>
  );
};

export default Navbar;
