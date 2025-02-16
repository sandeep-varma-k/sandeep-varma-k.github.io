import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

import profile from '../data/profile.json';
import {Avatar, Stack, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";



type IconKeys = "work" | "study";

const iconMap: Record<IconKeys,any> = {
    work: faBriefcase,
    study: faUserGraduate
}


function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>
          {profile.timeline.map((item, index) => (
              <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                  contentArrowStyle={{ borderRight: '7px solid white' }}
                  date={item.time}
                  iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                  icon={<FontAwesomeIcon icon={iconMap[item.type as IconKeys]} />}
              >

                  <Stack direction={"row"} spacing={1} alignItems={"flex-start"} justifyContent={"space-between"} pb={1}>

                      <Stack direction={"column"} spacing={0.5} alignItems={"center"} width={80} >
                          <Avatar src={item.image} alt={item.company} sx={{ width: 48, height: 48 }} />
                          <Stack  alignItems={"center"} width={120} >
                              <Typography variant={"subtitle2"} sx={{ fontWeight: 600, fontSize: 12, textAlign: "center"  }} >{item.company}</Typography>
                              <Typography variant={"subtitle2"} sx={{fontSize: 12 }}>{item.location}</Typography>
                          </Stack>

                      </Stack>


                      <Stack alignItems={"right"} width={240} sx={{textAlign:'right' }} >
                          <Typography variant="subtitle1" sx={{fontSize: 12}}> {item.type==="work"?"Roles":"Concentration"}:</Typography>
                          <Stack>
                              {item.roles.map((role, index) => (
                                  <Typography key={index} variant="subtitle2" sx={{fontWeight: 600}}>{role}</Typography>
                              ))}
                          </Stack>
                      </Stack>
                  </Stack>
                  <Divider />

                <Typography>
                    {item.description}
                </Typography>


              </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>
    </div>
  );
}

export default Timeline;