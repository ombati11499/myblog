import React, { FC } from "react";
import "../landingPage/styles.css";
import Icon, { IconName } from "../../common/icons";
import MoreBlogs from "../../common/moreBlogs";
import Footer from "../../common/footer";

interface Props {}
interface BtnProps {
  btnName: string;
  icon: string;
  text?: string;
  count?:number|null;
}
export const profPic = (picUrl: string, style: string) => {
  return <img id={style} src={picUrl} alt="profPic" />;
};
const authorName = "ombatiDev";
const authorPic =
  // "https://cdn.dribbble.com/users/77628/avatars/normal/10a3ccbe1329752e54b6ae9f35b50a3a.jpg?1600769333";
  "https://lh3.googleusercontent.com/pw/ABLVV87-LCazUVKNkgAxuNF2F5hm23tW_yzymc5NS-3LZBtiodlhst_EN9iIlMCLzD3V2MR6XMrEhJUZb--0GIYN9cznt_bpyctoZG50bc4tMt10elFAOq9H6h3-N4VHnc0uVOLj2QRvyVpqI9SQWv67J_Mgt9z89QCqsPBPev2KpRyOVTD3iu1lVML9atCBX0VW2kaKrwYj-CTnzEA9rsw4oui1HiMv-yhdgd2QdDrsw4E3AxnKy6bUHJ57vwCIlImoz9D4gKsYCgQ6fsDtzKxyni99NOaYtifUgU1Ih3JGCDQGpkALN0KmcAKzxyOWr7ZjoPVTEAbM5nNCcE7Hda4AtbEHnyDrAGS1U-G15VSqRsKtPNWJu41IMuFgViiN6R8-CB1XFPFZGIT738aMUl90OQajx5TwGg48a1-sxPXytv4SqZi_0srcOLwytRmdUGBSRGqnvZdBIdT9BqI4i4hmUvVvUZN71CMlT_iBemZP6FrZOkELK9wzOLtXQqdmbUmKoQOAcMiCNjIMSg0OZzDsPXC55Riavli3nQJg2db9-Kq9bTcG75AXKrJMR17UkLYhBGpW6eNthtWTF7umAmNmnZQdTqAf__fI0UZvNIOZ6gTyd8jj0WN-dZUqHuL6xdr8ak0vVSSMqukDlCA-5ywfHbsk_QVaIl6lfD_ADOXHeMUHdY7qaPHNE6fOdf4Xr5PwGUycdbOB_8f0zt7SZJU-YD-iIJpU4mS4cmFTYO57pThhOSK8Z3hJbdDEH7K84KVQWifgRhewOBRTlz019bDRQOB1ZqcCUJgdbqekdAQM436hl2XwoDWuxtNVYYL-TVRPAAHeexZYP2C5k7pvqD1n8suCSzPbsVuLBjCkpCT_Fiyslh8YzHq5bjqDwGX7raNfmmq9rcoWrbSRJNxjJIxetD_xJfZt7XzyXmyeLNy3EM15lSRq8U48i8xKfMIw=w1700-h2294-s-no-gm?authuser=1";

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
      icon: "send",
    },
    {
      btnName: "Feedback",
      icon: "message",
      count:4,
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
  //functions
  const dmButton = (text: string, icon: string) => {
    return (
      <button id="dm">
        <Icon name={icon as IconName} color="#4daa57" size={13} />
        <p>{text}</p>
      </button>
    );
  };

  return (
    <div id="container">
      <div id="search_container">
        <button title="home">
        <Icon name="home"/>
        </button>
        <input placeholder="Search" type="text"/>
      </div>
      <header>
        <h1>IPS Capital – Conceptual Illustrations</h1>
        <div className="header_container">
          <div id="author">
            <button id="main_pic">{profPic(authorPic, "main_pic")}</button>
            <div id="author_d">
              <span id="name">{authorName}</span>
              <p id="available">
                Available for work
                <div id="blinking_dot"></div>
                <button id="follow">Follow</button>
              </p>
            </div>
            {/* <div id="follow_btn">
              <button id="follow">Follow</button>
            </div> */}
          </div>
          <div id="buttons">
            {pageBtns.map(({ btnName, icon, text }: BtnProps, i) =>
              btnName === "Like" || btnName === "Save" ? (
                <button title="socials" id="rounded_icon" key={i}>
                  <Icon name={icon as IconName} color="black" size={13} />
                </button>
              ) : btnName === "dm" ? (
                dmButton(text as string, icon)
              ) : null
            )}
          </div>
        </div>
      </header>
      <div id="main_page">
        <div id="imgBtns">
          <button>
            <img
              id="page_pic"
              src="https://cdn.dribbble.com/userupload/12885140/file/original-0df9186d452ff51ff9aa7be61af22ea8.png?resize=2048x1024"
              alt="page image"
            />
          </button>
        </div>
        <div id="abstract">
          <p >
          <span>W</span>ith over 30 years of brand legacy, Luminate was ready to boldly
            rebrand. We set out in search of “what data looks like.” A true
            large-scale data visualization is powerful: tons of information made
            easily digestible, visually. 👉 See the full case study here:
            https://focuslab.agency/work/luminate --- Looking for a brand
            agency? We would love to hear from you. Email us:
            hello@focuslab.agency Our Website / Subscribe / Instagram / LinkedInWith 
          </p>
        </div>
        <div id="content">
          <p>
          With over 30 years of brand legacy, Luminate was ready to boldly
            rebrand. We set out in search of “what data looks like.” A true
            large-scale data visualization is powerful: tons of information made
            easily digestible, visually. 👉 See the full case study here:
            https://focuslab.agency/work/luminate --- Looking for a brand
            agency? We would love to hear from you. Email us:
            hello@focuslab.agency Our Website / Subscribe / Instagram / LinkedInWith over 30 years of brand legacy, Luminate was ready to boldly
            rebrand. We set out in search of “what data looks like.” A true
            large-scale data visualization is powerful: tons of information made
            easily digestible, visually. 👉 See the full case study here:
            https://focuslab.agency/work/luminate --- Looking for a brand
            agency? We would love to hear from you. Email us:
            hello@focuslab.agency Our Website / Subscribe / Instagram / LinkedInWith over 30 years of brand legacy, Luminate was ready to boldly
            rebrand. We set out in search of “what data looks like.” A true
            large-scale data visualization is powerful: tons of information made
            easily digestible, visually. 👉 See the full case study here:
            https://focuslab.agency/work/luminate --- Looking for a brand
            agency? We would love to hear from you. Email us:
            hello@focuslab.agency Our Website / Subscribe / Instagram / LinkedInWith over 30 years of brand legacy, Luminate was ready to boldly
            rebrand. We set out in search of “what data looks like.” A true
            large-scale data visualization is powerful: tons of information made
            easily digestible, visually. 👉 See the full case study here:
            https://focuslab.agency/work/luminate --- Looking for a brand
            agency? We would love to hear from you. Email us:
            hello@focuslab.agency Our Website / Subscribe / Instagram / LinkedInWith over 30 years of brand legacy, Luminate was ready to boldly
            rebrand. We set out in search of “what data looks like.” A true
            large-scale data visualization is powerful: tons of information made
            easily digestible, visually. 👉 See the full case study here:
            https://focuslab.agency/work/luminate --- Looking for a brand
            agency? We would love to hear from you. Email us:
            hello@focuslab.agency Our Website / Subscribe / Instagram / LinkedInWith over 30 years of brand legacy, Luminate was ready to boldly
            rebrand. We set out in search of “what data looks like.” A true
            large-scale data visualization is powerful: tons of information made
            easily digestible, visually. 👉 See the full case study here:
            https://focuslab.agency/work/luminate --- Looking for a brand
            agency? We would love to hear from you. Email us:
            hello@focuslab.agency Our Website / Subscribe / Instagram / LinkedIn
          </p>
        </div>
      </div>
      <div id="author_info">
        <div id="line"></div>
        <button id="main_pic">{profPic(authorPic, "main_pic")}</button>
        <div id="line"></div>
      </div>
      <div id="author_links">
        <p id="author_name"> Written by {authorName}</p>
        <p id="category">
          Software Engineer Consultant (All articles are free)
        </p>
        <div id="contacts">
        {pageBtns.map(({ text, icon, btnName,count }: BtnProps, i) =>
         btnName === "Feedback" ||
         btnName === "Share" ||
         btnName === "Show details" ? (
           <button title="" id="side_icon" name={btnName} key={i}>
             <span id="count">{count}</span>
             <Icon name={icon as IconName} color="black" size={13} />
           </button>
         ) :
          btnName === "dm" ? dmButton(text as string, icon) : null
        )}
        </div>
       
      </div>
      <div id="page_line"></div>
      <p>More from {authorName}</p>

      <MoreBlogs authorName={authorName} authorPic={authorPic} />
      <div id="page_line"></div>

      <div id="recommendations">
        <button id="recommend">See more recommendations</button>{" "}
      </div>

      <Footer/>
    </div>
  );
};

export default Landing;
