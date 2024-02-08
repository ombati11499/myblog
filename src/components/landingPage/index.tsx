import React, { FC } from "react";
import "../landingPage/styles.css";
import Icon, { IconName } from "../../common/icons";
import MoreBlogs from "../../common/moreBlogs";

interface Props {}
interface BtnProps {
  btnName: string;
  icon: string;
  text?: string;
}
const authorName = "ombatiDev";

const Landing: React.FC<Props> = ({}: Props) => {
  const pageBtns: BtnProps[] = [
    {
      btnName: "Like",
      icon: "heart",
    },
    {
      btnName: "Save",
      icon: "bookmark",
    },
    {
      btnName: "dm",
      text: "Get in touch",
      icon: "",
    },
    {
      btnName: "Feedback",
      icon: "message",
    },
    {
      btnName: "Share",
      icon: "share",
    },
    {
      btnName: "Show details",
      icon: "info",
    },
  ];

  return (
    <div id="container">
      <header>
        <h1>IPS Capital – Conceptual Illustrations</h1>
        <div className="header_container">
          <div id="author">
            <div>
              <img
                className="profPic"
                src="https://cdn.dribbble.com/users/77628/avatars/normal/10a3ccbe1329752e54b6ae9f35b50a3a.jpg?1600769333"
                alt="profPic"
              />
            </div>
            <div id="author_d">
              <span id="name">{authorName}</span>
              <p id="available">Available for work</p>
            </div>
            <div id="follow_btn">
              <button>Follow</button>
            </div>
          </div>
          <div id="buttons">
            {pageBtns.map(({ btnName, icon, text }: BtnProps, i) =>
              btnName === "Like" || btnName === "Save" ? (
                <div id="rounded_icon" key={i}>
                  <Icon name={icon as IconName} color="black" size={13} />
                </div>
              ) : btnName === "dm" ? (
                <div id="dm">
                  <p>{text}</p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </header>
      <div id="main_page">
        <div id="imgBtns">
          <img
            id="page_pic"
            src="https://cdn.dribbble.com/userupload/12885140/file/original-0df9186d452ff51ff9aa7be61af22ea8.png?resize=2048x1024"
            alt="page image"
          />
          {pageBtns.map(({ btnName, icon, text }: BtnProps, i) =>
            btnName === "Feedback" ||
            btnName === "Share" ||
            btnName === "Show details" ? (
              <div id="side_icon" key={i}>
                <Icon name={icon as IconName} color="black" size={13} />
              </div>
            ) : null
          )}
        </div>
        <div id="content">
          <p>
            With over 30 years of brand legacy, Luminate was ready to boldly
            rebrand. We set out in search of “what data looks like.” A true
            large-scale data visualization is powerful: tons of information made
            easily digestible, visually. 👉 See the full case study here:
            https://focuslab.agency/work/luminate --- Looking for a brand
            agency? We would love to hear from you. Email us:
            hello@focuslab.agency Our Website / Subscribe / Instagram / LinkedIn
          </p>
        </div>
      </div>
      <div id="footer">
        <div id="line"></div>
        <img
          id="logo"
          alt="logo"
          src="https://cdn.dribbble.com/users/77628/avatars/normal/10a3ccbe1329752e54b6ae9f35b50a3a.jpg?1600769333"
        />
        <div id="line"></div>
      </div>
      <div id="author_links">
        <p id="author_name"> Written by {authorName}</p>
        <p id="category">
          Software Engineer Consultant (All articles are free)
        </p>
        {pageBtns.map(({ text, icon, btnName }: BtnProps) =>
          btnName === "dm" ? <div id="dm">{text}</div> : null
        )}
      </div>
      <div id="page_line"></div>
      <p>More from {authorName}</p>

      <MoreBlogs authorName={authorName} />
      <div id="page_line"></div>

      <div id="recommendations">
        <button>See more recommendations</button>{" "}
      </div>

      <footer>
        <a>Help</a>
        <a>Status</a>
        <a>About</a>
        <a>Careers</a>
        <a>Blog</a>
        <a>Privacy</a>
        <a>Terms</a>
      </footer>
    </div>
  );
};

export default Landing;
