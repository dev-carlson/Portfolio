import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiGraduateCap } from "react-icons/gi";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<GiGraduateCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Orani National High School, Philippines
          </h3>
          <p>High School & Senior High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<GiGraduateCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Centro Escolar University, Philippines
          </h3>
          <p>Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<GiGraduateCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Systems Technology Institute, Philippines
          </h3>
          <p>Computer Science</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
