import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';
import '../assets/styles/Main.scss';

import profile from '../data/profile.json';
import {Stack} from "@mui/material";
import Divider from "@mui/material/Divider";

function Main() {

  const mailTo = `mailto:${profile.email}`;

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile.image} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={mailTo} target="_blank" rel="noreferrer"><MailIcon/></a>
            <a href={profile.resume} target="_blank" rel="noreferrer"><ArticleIcon/></a>
          </div>
          <h1>{profile.firstName} {profile.lastName}</h1>
          <p>
            <Stack direction="row" spacing={2}
                   divider={<Divider orientation="vertical" flexItem sx={{backgroundColor: "white"}} />}>
              {
                profile.roles.map((skill, index) => {
                  return <span key={index} >{skill}</span>
                })
              }
            </Stack>
          </p>


          <div className="mobile_social_icons">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={mailTo} target="_blank" rel="noreferrer"><MailIcon/></a>
            <a href={profile.resume} target="_blank" rel="noreferrer"><ArticleIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;