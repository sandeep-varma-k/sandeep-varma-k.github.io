import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import profile from "../data/profile.json";
import MailIcon from "@mui/icons-material/Mail";
import ArticleIcon from "@mui/icons-material/Article";

const mailTo = `mailto:${profile.email}`;

function Footer() {
  return (
    <footer>
      <div>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href={mailTo} target="_blank" rel="noreferrer"><MailIcon/></a>
          <a href={profile.resume} target="_blank" rel="noreferrer"><ArticleIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;