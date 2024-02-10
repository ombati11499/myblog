import React, { FC } from "react";
import "./styles.css";
import { profPic } from "../components/landingPage";
interface Props {
  authorName: string;
  authorPic: string;
}
interface BlogProps {
  author: { pic: string; names: string };
  image: string;
  readTime: string;
  title: string;
  abstract: string;
  datePublished: Date;
}

const MoreBlogs: FC<Props> = ({ authorName, authorPic }: Props) => {
  const Blogs: BlogProps[] = [
    {
      image:
        "https://miro.medium.com/v2/resize:fit:1358/0*e68bMwPYgfSN0sm2.png",
      author: {
        names: authorName,
        pic: authorPic,
      },
      readTime: "5 min read",
      title: "Why you should use AVIF over JPEG, WebP, PNG and GIF In 2024",
      datePublished: new Date("2024-02-08"),
      abstract:
        "!Important: We are no longer in the dark ages, the majority of large web platforms typically support up to 1 year of browser versions from the current. ",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*fDlq6uAM-5qwMDB8zFzw8g.png",
      author: {
        names: authorName,
        pic: authorPic,
      },
      readTime: "5 min read",
      title: "Tailwind vs Modern CSS",
      datePublished: new Date("2024-02-08"),
      abstract:
        "AVIF enables vibrant and lifelike images with a broad range of colors and high dynamic range (HDR). Ideal for applications demanding precise color and detail, like professional photography and media content.",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:1358/1*Bf_y0eh_vM86hTxYvTKm-g.jpeg",
      author: {
        names: authorName,
        pic: authorPic,
      },
      readTime: "5 min read",
      title: "Why you should use AVIF over JPEG, WebP, PNG and GIF In 2024",
      datePublished: new Date("2024-02-08"),
      abstract:
        "Generally, AVIF compression is computationally more intensive than older image formats like JPEG, but it typically achieves superior compression efficiency.",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/11922537/file/original-7dd497aff325a6895478f52f4b28c738.png?resize=800x600&vertical=center",
      author: {
        names: authorName,
        pic: authorPic,
      },
      readTime: "5 min read",
      title: "Javascript Interview Question: Invoke a function without...",
      datePublished: new Date("2024-02-08"),
      abstract:
        "Images can be up to ten times smaller than JPEGs of similar visual quality.",
    },
  ];
  return (
    <div id="container">
      <div id="grid_container">
        {Blogs.map(
          ({
            author,
            image,
            readTime,
            title,
            datePublished,
            abstract,
          }: BlogProps) => {
            const formattedDate = new Date(datePublished).toLocaleDateString(
              "en-US",
              {
                month: "short",
                day: "numeric",
                year: "numeric",
              }
            );
            return (
              <div id="grid">
                <button id="blog_image">
                  <img alt="blog_image" id="blog_image" src={image} />
                </button>
                <div id="author">
                  <button id="pic">
                    {profPic(author.pic, "profPic")}
                    <span id="names">{author.names}</span> 
                  </button>
                </div>
                {/* <div id="text"> */}
                <button id="text">
                  <h3>{title}</h3>
                  <p>{abstract}</p>
                  <div id="time_stats">
                    <p>
                      {readTime} &#183; <span id="date">{formattedDate}</span>
                    </p>
                  </div>
                </button>
              </div>
              // </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MoreBlogs;
